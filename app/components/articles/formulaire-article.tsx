"use client";

import { useCallback, useEffect, useState } from "react";
import { ImagePlus, Plus, Trash2 } from "lucide-react";
import { toast } from "sonner";

import {
  listerCategories,
  listerDevises,
  type ArticleAvecRelations,
  type ImageArticle,
} from "@/lib/api/business";
import { useBusiness } from "@/lib/business-context";
import { useListe } from "@/components/ressource/use-liste";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Field, FieldLabel } from "@/components/ui/field";
import { NativeSelect, NativeSelectOption } from "@/components/ui/native-select";

type Option = { id: string; nom?: string; symbole?: string | null; type?: string };
type ArticleFormulaire = {
  designation: string;
  categorieId: string;
  deviseId: string;
  pu: string;
  description: string;
};
type ImageFormulaire = {
  key: string;
  existing?: ImageArticle;
  file: File | null;
};

const NOMBRE_IMAGES_MAX = 5;
const TAILLE_MAX_IMAGE = 2 * 1024 * 1024;
const TYPES_IMAGE = new Set(["image/jpeg", "image/png", "image/webp", "image/gif"]);
const IMAGE_PAR_DEFAUT = "/images/articles/article-par-defaut.svg";
const creerCleImage = () =>
  `nouvelle-${Date.now()}-${Math.random().toString(36).slice(2)}`;

type Props = {
  article?: ArticleAvecRelations;
  enregistrement: boolean;
  onCancel: () => void;
  onSave: (form: FormData) => Promise<void>;
};

const imagesInitiales = (article?: ArticleAvecRelations): ImageFormulaire[] => {
  const images = article?.images
    ?.slice()
    .sort((a, b) => a.position - b.position)
    .slice(0, NOMBRE_IMAGES_MAX);
  if (images?.length) {
    return images.map((existing) => ({
      key: existing.id,
      existing,
      file: null,
    }));
  }
  return [{ key: creerCleImage(), file: null }];
};

const cleImageParDefaut = (images: ImageFormulaire[]) =>
  images.find((image) => image.existing?.isDefault)?.key ??
  images.find((image) => image.existing)?.key ??
  null;

export function FormulaireArticle({
  article,
  enregistrement,
  onCancel,
  onSave,
}: Props) {
  const { businessId } = useBusiness();
  const chargerCategories = useCallback(
    () => (businessId ? listerCategories(businessId) : Promise.resolve([])),
    [businessId]
  );
  const chargerDevises = useCallback(
    () => (businessId ? listerDevises(businessId) : Promise.resolve([])),
    [businessId]
  );
  const { donnees: categories, chargement: chargementCategories } =
    useListe<Option>(chargerCategories, !!businessId);
  const { donnees: devises, chargement: chargementDevises } =
    useListe<Option>(chargerDevises, !!businessId);

  const [valeurs, setValeurs] = useState<ArticleFormulaire>({
    designation: article?.designation ?? "",
    categorieId: article?.categorieId ?? "",
    deviseId: article?.deviseId ?? "",
    pu: article ? String(article.pu) : "",
    description: article?.description ?? "",
  });
  const [images, setImages] = useState<ImageFormulaire[]>(() => imagesInitiales(article));
  const [imagePrincipaleKey, setImagePrincipaleKey] = useState<string | null>(
    () => cleImageParDefaut(imagesInitiales(article))
  );
  const [erreursImages, setErreursImages] = useState<Record<string, string>>({});
  const [glisserImageKey, setGlisserImageKey] = useState<string | null>(null);
  const [apercus, setApercus] = useState<Record<string, string>>({});

  useEffect(() => {
    const nouveauxApercus: Record<string, string> = {};
    for (const image of images) {
      if (image.file) nouveauxApercus[image.key] = URL.createObjectURL(image.file);
    }
    setApercus(nouveauxApercus);
    return () => {
      Object.values(nouveauxApercus).forEach(URL.revokeObjectURL);
    };
  }, [images]);

  useEffect(() => {
    setValeurs({
      designation: article?.designation ?? "",
      categorieId: article?.categorieId ?? "",
      deviseId: article?.deviseId ?? "",
      pu: article ? String(article.pu) : "",
      description: article?.description ?? "",
    });
    const imagesArticle = imagesInitiales(article);
    setImages(imagesArticle);
    setImagePrincipaleKey(cleImageParDefaut(imagesArticle));
    setErreursImages({});
  }, [article]);

  const changerValeur = (champ: keyof ArticleFormulaire, valeur: string) => {
    setValeurs((courant) => ({ ...courant, [champ]: valeur }));
  };

  const traiterFichier = (key: string, fichier: File | undefined) => {
    if (!fichier) return;
    if (!TYPES_IMAGE.has(fichier.type)) {
      setErreursImages((courantes) => ({
        ...courantes,
        [key]: "Format non pris en charge (JPEG, PNG, WebP ou GIF).",
      }));
      return;
    }
    if (fichier.size > TAILLE_MAX_IMAGE) {
      setErreursImages((courantes) => ({
        ...courantes,
        [key]: "Chaque image ne doit pas dépasser 2 Mo.",
      }));
      return;
    }
    setErreursImages((courantes) => {
      const suivantes = { ...courantes };
      delete suivantes[key];
      return suivantes;
    });
    setImages((courantes) =>
      courantes.map((image) =>
        image.key === key ? { ...image, existing: undefined, file: fichier } : image
      )
    );
    setImagePrincipaleKey((courant) => courant ?? key);
  };

  const ajouterImage = () => {
    if (images.length >= NOMBRE_IMAGES_MAX) return;
    setImages((courantes) => [...courantes, { key: creerCleImage(), file: null }]);
  };

  const supprimerImage = (key: string) => {
    const restantes = images.filter((image) => image.key !== key);
    setImages(restantes);
    setErreursImages((courantes) => {
      const suivantes = { ...courantes };
      delete suivantes[key];
      return suivantes;
    });
    if (imagePrincipaleKey === key) {
      setImagePrincipaleKey(
        restantes.find((image) => image.file || image.existing)?.key ?? null
      );
    }
  };

  const soumettre = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!valeurs.designation.trim() || !valeurs.categorieId || !valeurs.deviseId || !valeurs.pu) {
      toast.error("Renseignez la désignation, la catégorie, la devise et le prix unitaire.");
      return;
    }
    const prix = Number(valeurs.pu);
    if (!Number.isFinite(prix) || prix < 0) {
      toast.error("Le prix unitaire doit être un nombre positif ou nul.");
      return;
    }

    const imagesRenseignees = images.filter(
      (image) => image.file || image.existing
    );
    const principale = imagesRenseignees.find(
      (image) => image.key === imagePrincipaleKey
    );
    const ordreImages = [
      ...(principale ? [principale] : []),
      ...imagesRenseignees.filter((image) => image.key !== principale?.key),
    ];
    const data = new FormData();
    data.append("designation", valeurs.designation);
    data.append("categorieId", valeurs.categorieId);
    data.append("deviseId", valeurs.deviseId);
    data.append("pu", String(prix));
    data.append("description", valeurs.description);
    ordreImages.forEach((image, position) => {
      if (image.file) data.append(`image${position}`, image.file);
      else if (image.existing) data.append(`existingImage${position}`, image.existing.id);
      data.append(`isDefault${position}`, String(image.key === imagePrincipaleKey));
    });
    await onSave(data);
  };

  const imageAffichee = (image: ImageFormulaire) =>
    apercus[image.key] ??
    image.existing?.url ??
    null;
  const chargementOptions = chargementCategories || chargementDevises;

  return (
    <form className="space-y-5" onSubmit={(event) => void soumettre(event)}>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field className="sm:col-span-2">
          <FieldLabel htmlFor="article-designation">Désignation</FieldLabel>
          <Input
            id="article-designation"
            value={valeurs.designation}
            onChange={(event) => changerValeur("designation", event.currentTarget.value)}
            minLength={4}
            maxLength={50}
            required
          />
        </Field>

        <Field>
          <FieldLabel htmlFor="article-categorie">Catégorie</FieldLabel>
          <NativeSelect
            id="article-categorie"
            value={valeurs.categorieId}
            onChange={(event) => changerValeur("categorieId", event.currentTarget.value)}
            required
            disabled={chargementOptions}
          >
            <NativeSelectOption value="">Sélectionner une catégorie</NativeSelectOption>
            {categories.map((categorie) => (
              <NativeSelectOption key={categorie.id} value={categorie.id}>
                {categorie.nom}
              </NativeSelectOption>
            ))}
          </NativeSelect>
          {categories.length === 0 && !chargementCategories && (
            <p className="text-sm text-destructive">Aucune catégorie disponible pour ce business.</p>
          )}
        </Field>

        <Field>
          <FieldLabel htmlFor="article-devise">Devise</FieldLabel>
          <NativeSelect
            id="article-devise"
            value={valeurs.deviseId}
            onChange={(event) => changerValeur("deviseId", event.currentTarget.value)}
            required
            disabled={chargementOptions}
          >
            <NativeSelectOption value="">Sélectionner une devise</NativeSelectOption>
            {devises.map((devise) => (
              <NativeSelectOption key={devise.id} value={devise.id}>
                {devise.nom ?? devise.type} {devise.symbole ? `(${devise.symbole})` : ""}
              </NativeSelectOption>
            ))}
          </NativeSelect>
          {devises.length === 0 && !chargementDevises && (
            <p className="text-sm text-destructive">Aucune devise disponible pour ce business.</p>
          )}
        </Field>

        <Field className="sm:col-span-2">
          <FieldLabel htmlFor="article-pu">Prix unitaire (PU)</FieldLabel>
          <Input
            id="article-pu"
            type="number"
            step="0.0001"
            min="0"
            inputMode="decimal"
            value={valeurs.pu}
            onChange={(event) => changerValeur("pu", event.currentTarget.value)}
            required
          />
        </Field>

        <Field className="sm:col-span-2">
          <FieldLabel htmlFor="article-description">Description</FieldLabel>
          <Textarea
            id="article-description"
            rows={4}
            value={valeurs.description}
            onChange={(event) => changerValeur("description", event.currentTarget.value)}
          />
        </Field>
      </div>

      <section className="space-y-3">
        <h2 className="font-medium">Images de l’article</h2>
        <p className="text-sm text-muted-foreground">
          Déposez les images dans la zone ou cliquez pour les choisir. Jusqu’à cinq images, 2 Mo par image.
        </p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((image, position) => {
            const apercu = imageAffichee(image);
            const aUnFichier = Boolean(image.file || image.existing);
            return (
              <div
                key={image.key}
                className={`h-full space-y-3 rounded-lg border p-3 ${
                  glisserImageKey === image.key ? "border-primary bg-primary/5" : ""
                }`}
                onDragOver={(event) => {
                  event.preventDefault();
                  setGlisserImageKey(image.key);
                }}
                onDragLeave={() => setGlisserImageKey(null)}
                onDrop={(event) => {
                  event.preventDefault();
                  setGlisserImageKey(null);
                  traiterFichier(image.key, event.dataTransfer.files[0]);
                }}
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="text-sm font-medium">Image {position + 1}</span>
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    aria-label={`Retirer l’image ${position + 1}`}
                    onClick={() => supprimerImage(image.key)}
                  >
                    <Trash2 className="size-4" />
                  </Button>
                </div>

                <label
                  htmlFor={`article-image-${image.key}`}
                  className="flex min-h-36 cursor-pointer flex-col items-center justify-center gap-2 rounded-md border border-dashed bg-muted/30 p-3 text-center hover:border-primary"
                >
                  {apercu ? (
                    <img
                      src={apercu}
                      alt={`Aperçu de l’image ${position + 1}`}
                      className="h-28 w-full rounded object-cover"
                      onError={(event) => {
                        event.currentTarget.src = IMAGE_PAR_DEFAUT;
                      }}
                    />
                  ) : (
                    <>
                      <ImagePlus className="size-8 text-muted-foreground" />
                      <span className="text-sm">Glisser-déposer ou choisir une image</span>
                    </>
                  )}
                  <span className="text-xs text-muted-foreground">
                    {image.file?.name ?? (image.existing ? "Image enregistrée" : "JPEG, PNG, WebP ou GIF")}
                  </span>
                  <input
                    id={`article-image-${image.key}`}
                    type="file"
                    accept="image/jpeg,image/png,image/webp,image/gif"
                    className="sr-only"
                    onChange={(event) => {
                      traiterFichier(image.key, event.currentTarget.files?.[0]);
                      event.currentTarget.value = "";
                    }}
                  />
                </label>
                {erreursImages[image.key] && (
                  <p role="alert" className="text-sm text-destructive">
                    {erreursImages[image.key]}
                  </p>
                )}
                <label className="flex items-center gap-2 text-sm">
                  <input
                    type="radio"
                    name="image-principale"
                    checked={imagePrincipaleKey === image.key}
                    onChange={() => setImagePrincipaleKey(image.key)}
                    disabled={!aUnFichier}
                    className="size-4 accent-primary"
                  />
                  Définir par défaut
                </label>
              </div>
            );
          })}
          {images.length < NOMBRE_IMAGES_MAX && (
            <Button
              type="button"
              variant="outline"
              onClick={ajouterImage}
              className="h-full w-full min-h-56 border-dashed"
            >
              <Plus /> Ajouter une image
            </Button>
          )}
        </div>
        {images.length === NOMBRE_IMAGES_MAX && (
          <p className="text-sm text-muted-foreground">La limite de cinq images est atteinte.</p>
        )}
      </section>

      <div className="flex flex-wrap justify-end gap-2">
        <Button type="button" variant="outline" onClick={onCancel} disabled={enregistrement}>
          Annuler
        </Button>
        <Button
          type="submit"
          disabled={
            enregistrement ||
            chargementOptions ||
            categories.length === 0 ||
            devises.length === 0 ||
            Object.keys(erreursImages).length > 0
          }
        >
          {enregistrement ? "Enregistrement…" : article ? "Enregistrer les modifications" : "Créer l’article"}
        </Button>
      </div>
    </form>
  );
}

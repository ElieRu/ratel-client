"use client"

import { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { PlusIcon, Trash2Icon } from "lucide-react";

import { ArticleSchema, type Article } from "@/lib/validations";
import { champsRequis } from "@/lib/utils";
import { useBusiness } from "@/lib/business-context";
import {
  creerArticle,
  listerArticles,
  listerCategories,
  listerDevises,
  modifierArticle,
  supprimerArticle,
} from "@/lib/api/business";
import { PageRessource } from "@/components/ressource/page-ressource";
import { useListe } from "@/components/ressource/use-liste";
import {
  DataTable as ReusableDataTable,
  type DataTableColumn,
} from "@/components/data-table-reusable";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { NativeSelect, NativeSelectOption } from "@/components/ui/native-select";

const requis = champsRequis(ArticleSchema.shape);

const Etoile = () => <span className="text-destructive">*</span>;

type LigneArticle = Article & {
  id: string;
  categorie?: { nom: string };
  devise?: { symbole: string };
};
type Option = { id: string; nom?: string; symbole?: string; type?: string };

export default function Articles() {
  const { businessId } = useBusiness();
  const [ouvert, setOuvert] = useState(false);
  const [enEdition, setEnEdition] = useState<LigneArticle | null>(null);

  const chargerArticles = useCallback(() => listerArticles(), []);
  const chargerCategories = useCallback(
    () => listerCategories(businessId!),
    [businessId]
  );
  const chargerDevises = useCallback(
    () => listerDevises(businessId!),
    [businessId]
  );

  const { donnees, chargement, erreur, recharger } =
    useListe<LigneArticle>(chargerArticles);
  const { donnees: categories } = useListe<Option>(chargerCategories, !!businessId);
  const { donnees: devises } = useListe<Option>(chargerDevises, !!businessId);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isValid },
  } = useForm<Article>({
    resolver: zodResolver(ArticleSchema),
    mode: "onTouched",
  });

  const ouvrirCreation = () => {
    setEnEdition(null);
    reset({
      designation: "",
      pu: 0,
      description: "",
      categorieId: categories[0]?.id ?? "",
      deviseId: devises[0]?.id ?? "",
    });
    setOuvert(true);
  };

  const ouvrirEdition = (article: LigneArticle) => {
    setEnEdition(article);
    reset({
      designation: article.designation,
      pu: Number(article.pu),
      description: article.description ?? "",
      categorieId: article.categorieId,
      deviseId: article.deviseId,
    });
    setOuvert(true);
  };

  const onSubmit = async (form: Article) => {
    const action = enEdition
      ? modifierArticle(enEdition.id, form)
      : creerArticle(businessId!, form);

    await toast
      .promise(action, {
        loading: enEdition ? "Modification…" : "Création…",
        success: () => {
          setOuvert(false);
          recharger();
          return enEdition ? "Article modifié" : "Article créé";
        },
        error: (e: Error) => e.message,
      })
      .unwrap();
  };

  const supprimer = async (article: LigneArticle) => {
    await toast
      .promise(supprimerArticle(article.id), {
        loading: "Suppression…",
        success: () => {
          recharger();
          return "Article supprimé";
        },
        error: (e: Error) => e.message,
      })
      .unwrap();
  };

  const colonnes: DataTableColumn<LigneArticle>[] = [
    {
      id: "designation",
      header: "Désignation",
      accessor: (article) => article.designation,
      cell: (article) => (
        <span className="font-medium">{article.designation}</span>
      ),
    },
    {
      id: "categorie",
      header: "Catégorie",
      accessor: (article) => article.categorie?.nom,
      cell: (article) => (
        <span className="text-muted-foreground">
          {article.categorie?.nom ?? "—"}
        </span>
      ),
    },
    {
      id: "pu",
      header: "Prix unitaire",
      accessor: (article) => Number(article.pu),
      cell: (article) => (
        <span className="tabular-nums">
          {Number(article.pu).toLocaleString("fr-FR")}{" "}
          <span className="text-muted-foreground">
            {article.devise?.symbole ?? ""}
          </span>
        </span>
      ),
      className: "text-right",
    },
    {
      id: "actions",
      header: "Actions",
      accessor: () => null,
      sortable: false,
      cell: (article) => (
        <div className="whitespace-nowrap text-right">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => ouvrirEdition(article)}
          >
            Modifier
          </Button>
          <Button
            variant="ghost"
            size="sm"
            aria-label={`Supprimer ${article.designation}`}
            onClick={() => supprimer(article)}
          >
            <Trash2Icon className="size-4 text-destructive" />
          </Button>
        </div>
      ),
      className: "w-[1%] text-right",
    },
  ];

  return (
    <PageRessource
      titre="Gestion des articles"
      description="Le catalogue de votre business."
      businessRequis
      businessId={businessId}
      chargement={chargement}
      erreur={erreur}
      vide={donnees.length === 0}
      messageVide="Aucun article au catalogue pour le moment."
      onReessayer={recharger}
      action={
        <Button onClick={ouvrirCreation}>
          <PlusIcon className="size-4" />
          Nouvel article
        </Button>
      }
    >
      <ReusableDataTable
        data={donnees}
        columns={colonnes}
        getRowKey={(article) => article.id}
        pageSize={10}
      />

      <Dialog open={ouvert} onOpenChange={setOuvert}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              {enEdition ? "Modifier l'article" : "Nouvel article"}
            </DialogTitle>
            <DialogDescription>
              Les champs marqués d'une étoile sont exigés par le serveur.
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <FieldGroup>
              <FieldSet>
                <FieldLegend variant="label">Informations requises</FieldLegend>

                <Field data-invalid={!!errors.designation}>
                  <FieldLabel htmlFor="designation">
                    Désignation {requis.has("designation") && <Etoile />}
                  </FieldLabel>
                  <Input
                    id="designation"
                    placeholder="Ex : Pagne wax 6 yards"
                    aria-required={requis.has("designation")}
                    aria-invalid={!!errors.designation}
                    {...register("designation")}
                  />
                  <FieldError errors={[errors.designation]} />
                </Field>

                <Field data-invalid={!!errors.pu}>
                  <FieldLabel htmlFor="pu">
                    Prix unitaire {requis.has("pu") && <Etoile />}
                  </FieldLabel>
                  <Input
                    id="pu"
                    type="number"
                    step="0.01"
                    inputMode="decimal"
                    placeholder="0"
                    aria-required={requis.has("pu")}
                    aria-invalid={!!errors.pu}
                    {...register("pu", { valueAsNumber: true })}
                  />
                  <FieldError errors={[errors.pu]} />
                </Field>

                <Field data-invalid={!!errors.categorieId}>
                  <FieldLabel htmlFor="categorieId">
                    Catégorie {requis.has("categorieId") && <Etoile />}
                  </FieldLabel>
                  <NativeSelect
                    id="categorieId"
                    aria-required={requis.has("categorieId")}
                    aria-invalid={!!errors.categorieId}
                    {...register("categorieId")}
                  >
                    <NativeSelectOption value="">
                      Sélectionner une catégorie
                    </NativeSelectOption>
                    {categories.map((c) => (
                      <NativeSelectOption key={c.id} value={c.id}>
                        {c.nom}
                      </NativeSelectOption>
                    ))}
                  </NativeSelect>
                  <FieldError errors={[errors.categorieId]} />
                </Field>

                <Field data-invalid={!!errors.deviseId}>
                  <FieldLabel htmlFor="deviseId">
                    Devise {requis.has("deviseId") && <Etoile />}
                  </FieldLabel>
                  <NativeSelect
                    id="deviseId"
                    aria-required={requis.has("deviseId")}
                    aria-invalid={!!errors.deviseId}
                    {...register("deviseId")}
                  >
                    <NativeSelectOption value="">
                      Sélectionner une devise
                    </NativeSelectOption>
                    {devises.map((d) => (
                      <NativeSelectOption key={d.id} value={d.id}>
                        {d.nom ?? d.type} ({d.symbole})
                      </NativeSelectOption>
                    ))}
                  </NativeSelect>
                  <FieldError errors={[errors.deviseId]} />
                </Field>
              </FieldSet>

              <Field data-invalid={!!errors.description}>
                <FieldLabel htmlFor="description">
                  Description <span className="text-muted-foreground">(facultatif)</span>
                </FieldLabel>
                <Textarea
                  id="description"
                  rows={3}
                  placeholder="Matière, dimensions, provenance…"
                  aria-invalid={!!errors.description}
                  {...register("description")}
                />
                <FieldError errors={[errors.description]} />
              </Field>
            </FieldGroup>

            <DialogFooter className="mt-6">
              <Button
                type="button"
                variant="outline"
                onClick={() => setOuvert(false)}
                disabled={isSubmitting}
              >
                Annuler
              </Button>
              <Button type="submit" disabled={!isValid || isSubmitting}>
                {isSubmitting
                  ? "Enregistrement…"
                  : enEdition
                    ? "Enregistrer"
                    : "Créer l'article"}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </PageRessource>
  );
}

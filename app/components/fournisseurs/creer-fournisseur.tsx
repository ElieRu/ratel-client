"use client"

import { useEffect, useRef, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  ImagePlusIcon,
  PlusIcon,
  UploadIcon,
  XIcon,
} from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "sonner";

import {
  creerFournisseurAvecLogo,
  type FournisseurEnregistre,
} from "@/lib/api/business";
import { tronquerAvecEllipses } from "@/lib/utils";
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
  FieldSet,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";

const formulaireFournisseurSchema = z.object({
  nom: z
    .string()
    .trim()
    .min(4, "Le nom doit contenir au moins 4 caractères.")
    .max(50, "Le nom ne peut pas dépasser 50 caractères."),
  email: z
    .union([
      z.literal(""),
      z.email("Saisissez une adresse e-mail valide."),
    ])
    .optional(),
});

type ValeursFormulaire = z.infer<typeof formulaireFournisseurSchema>;

type CreerFournisseurProps = {
  businessId: string | null;
  onCreated: (fournisseur: FournisseurEnregistre) => void;
  onAddExistingUser: () => void;
};

export function CreerFournisseur({
  businessId,
  onCreated,
  onAddExistingUser,
}: CreerFournisseurProps) {
  const [ouvert, setOuvert] = useState(false);
  const [logo, setLogo] = useState<File | null>(null);
  const [erreurLogo, setErreurLogo] = useState<string | null>(null);
  const inputLogoRef = useRef<HTMLInputElement>(null);
  const [apercuLogo, setApercuLogo] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isValid },
  } = useForm<ValeursFormulaire>({
    resolver: zodResolver(formulaireFournisseurSchema),
    mode: "onTouched",
    defaultValues: { nom: "", email: "" },
  });

  useEffect(() => {
    if (!logo) {
      setApercuLogo(null);
      return;
    }

    const url = URL.createObjectURL(logo);
    setApercuLogo(url);
    return () => URL.revokeObjectURL(url);
  }, [logo]);

  const choisirLogo = (fichier: File | undefined) => {
    setErreurLogo(null);
    if (!fichier) {
      setLogo(null);
      return;
    }

    const formatsAcceptes = ["image/jpeg", "image/png", "image/webp", "image/gif"];
    if (!formatsAcceptes.includes(fichier.type)) {
      setLogo(null);
      setErreurLogo("Choisissez une image JPG, PNG, WebP ou GIF.");
      return;
    }
    if (fichier.size > 2 * 1024 * 1024) {
      setLogo(null);
      setErreurLogo("L’image ne doit pas dépasser 2 Mo.");
      return;
    }
    setLogo(fichier);
  };

  const onSubmit = async (valeurs: ValeursFormulaire) => {
    if (!businessId) {
      toast.error("Aucun business n’est sélectionné.");
      return;
    }

    const fournisseur = {
      nom: valeurs.nom.trim(),
      ...(valeurs.email?.trim() ? { email: valeurs.email.trim() } : {}),
    };

    await toast
      .promise(creerFournisseurAvecLogo(businessId, fournisseur, logo ?? undefined), {
        loading: "Création du fournisseur…",
        success: ({ data: fournisseur, message }) => {
          reset({ nom: "", email: "" });
          setLogo(null);
          setErreurLogo(null);
          if (inputLogoRef.current) inputLogoRef.current.value = "";
          setOuvert(false);
          onCreated(fournisseur);
          return message;
        },
        error: (error: Error) => error.message,
      })
      .unwrap();
  };

  return (
    <>
      <div className="flex flex-wrap items-center gap-2">
        <Button
          type="button"
          disabled={!businessId}
          onClick={() => setOuvert(true)}
        >
          <PlusIcon className="size-4" />
          Nouveau fournisseur
        </Button>
        <Button
          type="button"
          variant="outline"
          disabled={!businessId}
          onClick={onAddExistingUser}
        >
          Inviter un utilisateur
        </Button>
      </div>
      <Dialog open={ouvert} onOpenChange={setOuvert}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Nouveau fournisseur</DialogTitle>
          <DialogDescription>
            Ajoutez les coordonnées et l’icône facultative du fournisseur.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <FieldGroup>
            <FieldSet>
              <Field data-invalid={!!erreurLogo}>
                <input
                  ref={inputLogoRef}
                  id="nouveau-fournisseur-logo"
                  type="file"
                  accept="image/jpeg,image/png,image/webp,image/gif"
                  className="sr-only"
                  aria-label="Icône du fournisseur (facultative)"
                  aria-invalid={!!erreurLogo}
                  aria-describedby={
                    erreurLogo
                      ? "nouveau-fournisseur-logo-erreur"
                      : "nouveau-fournisseur-logo-aide"
                  }
                  onChange={(event) =>
                    choisirLogo(event.currentTarget.files?.[0])
                  }
                />
                <label
                  htmlFor="nouveau-fournisseur-logo"
                  className="group flex cursor-pointer items-center gap-4 rounded-xl border border-dashed border-border bg-muted/30 p-4 transition-colors hover:border-primary/50 hover:bg-muted/60 focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2"
                >
                  <span className="flex size-16 shrink-0 items-center justify-center overflow-hidden rounded-xl border bg-background text-muted-foreground shadow-sm">
                    {apercuLogo ? (
                      <img
                        src={apercuLogo}
                        alt="Aperçu de l’icône du fournisseur"
                        className="size-full object-cover"
                      />
                    ) : (
                      <ImagePlusIcon className="size-7" aria-hidden="true" />
                    )}
                  </span>
                  <span className="min-w-0 max-w-full flex-1 overflow-hidden">
                  <span
                    className="block max-w-full truncate text-sm font-medium text-foreground"
                    title={logo?.name}
                  >
                      {logo
                        ? tronquerAvecEllipses(logo.name)
                        : "Choisir une icône (facultatif)"}
                    </span>
                    <span
                      id="nouveau-fournisseur-logo-aide"
                      className="mt-1 block text-xs text-muted-foreground"
                    >
                      JPG, PNG, WebP ou GIF · 2 Mo maximum
                    </span>
                  </span>
                  <UploadIcon
                    className="size-4 shrink-0 text-muted-foreground transition-colors group-hover:text-foreground"
                    aria-hidden="true"
                  />
                </label>
                {logo && (
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="w-fit"
                    onClick={() => {
                      setLogo(null);
                      if (inputLogoRef.current) inputLogoRef.current.value = "";
                    }}
                  >
                    <XIcon className="size-4" />
                    Retirer l’icône
                  </Button>
                )}
                {erreurLogo && (
                  <p
                    id="nouveau-fournisseur-logo-erreur"
                    role="alert"
                    className="text-sm text-destructive"
                  >
                    {erreurLogo}
                  </p>
                )}
              </Field>

              <Field data-invalid={!!errors.nom}>
                <FieldLabel htmlFor="nouveau-fournisseur-nom">Nom</FieldLabel>
                <Input
                  id="nouveau-fournisseur-nom"
                  autoComplete="organization"
                  placeholder="Ex. : Textile Bukavu"
                  aria-invalid={!!errors.nom}
                  aria-describedby={
                    errors.nom ? "nouveau-fournisseur-nom-erreur" : undefined
                  }
                  {...register("nom")}
                />
                <FieldError
                  id="nouveau-fournisseur-nom-erreur"
                  errors={[errors.nom]}
                />
              </Field>

              <Field data-invalid={!!errors.email}>
                <FieldLabel htmlFor="nouveau-fournisseur-email">
                  E-mail <span className="text-muted-foreground">(facultatif)</span>
                </FieldLabel>
                <Input
                  id="nouveau-fournisseur-email"
                  type="email"
                  autoComplete="email"
                  placeholder="contact@exemple.cd"
                  aria-invalid={!!errors.email}
                  aria-describedby={
                    errors.email
                      ? "nouveau-fournisseur-email-erreur"
                      : undefined
                  }
                  {...register("email")}
                />
                <FieldError
                  id="nouveau-fournisseur-email-erreur"
                  errors={[errors.email]}
                />
              </Field>
            </FieldSet>
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
              {isSubmitting ? "Création…" : "Créer le fournisseur"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
      </Dialog>
    </>
  );
}

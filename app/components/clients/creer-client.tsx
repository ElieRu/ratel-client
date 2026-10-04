"use client"

import { useEffect, useRef, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Check, ImagePlusIcon, PlusIcon, SearchIcon, UploadIcon, XIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "sonner";

import {
  creerClientAvecLogo,
  inviterUtilisateursCommeClients,
  listerUtilisateursClientDisponibles,
  type ClientEnregistre,
  type UtilisateurClientDisponible,
} from "@/lib/api/business";
import { tronquerAvecEllipses } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
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
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

/**
 * Le nom est le seul champ obligatoire à la création. Le minimum de 4 caractères
 * reflète ClientSchema côté serveur : en-dessous, la requête serait rejetée.
 */
const formulaireClientSchema = z.object({
  lastName: z
    .string()
    .trim()
    .min(4, "Le nom doit contenir au moins 4 caractères.")
    .max(50, "Le nom ne peut pas dépasser 50 caractères."),
  firstName: z
    .string()
    .trim()
    .max(50, "Le prénom ne peut pas dépasser 50 caractères.")
    .refine(
      (valeur) => valeur.length === 0 || valeur.length >= 4,
      "Le prénom doit contenir au moins 4 caractères."
    )
    .optional(),
  email: z
    .union([z.literal(""), z.email("Saisissez une adresse e-mail valide.")])
    .optional(),
});

type ValeursFormulaire = z.infer<typeof formulaireClientSchema>;

type CreerClientProps = {
  businessId: string | null;
  onCreated: (client: ClientEnregistre) => void;
  onInvited: () => void;
};

function nomUtilisateur(utilisateur: UtilisateurClientDisponible) {
  return (
    utilisateur.full_name?.trim() ||
    utilisateur.email?.trim() ||
    `Utilisateur ${utilisateur.id.slice(-6)}`
  );
}

export function CreerClient({
  businessId,
  onCreated,
  onInvited,
}: CreerClientProps) {
  const [ouvert, setOuvert] = useState(false);
  const [logo, setLogo] = useState<File | null>(null);
  const [erreurLogo, setErreurLogo] = useState<string | null>(null);
  const [apercuLogo, setApercuLogo] = useState<string | null>(null);
  const inputLogoRef = useRef<HTMLInputElement>(null);

  // Onglet « compte existant »
  const [recherche, setRecherche] = useState("");
  const [utilisateurs, setUtilisateurs] = useState<UtilisateurClientDisponible[]>([]);
  const [selection, setSelection] = useState<Set<string>>(() => new Set());
  const [chargement, setChargement] = useState(false);
  const [erreurRecherche, setErreurRecherche] = useState<string | null>(null);
  const [rattachementEnCours, setRattachementEnCours] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isValid },
  } = useForm<ValeursFormulaire>({
    resolver: zodResolver(formulaireClientSchema),
    mode: "onTouched",
    defaultValues: { lastName: "", firstName: "", email: "" },
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

  useEffect(() => {
    if (!ouvert) {
      setRecherche("");
      setUtilisateurs([]);
      setSelection(new Set());
      setErreurRecherche(null);
    }
  }, [ouvert]);

  useEffect(() => {
    if (!ouvert) return;
    const terme = recherche.trim();
    if (!terme || !businessId) {
      setUtilisateurs([]);
      setChargement(false);
      return;
    }

    let annule = false;
    setChargement(true);
    setErreurRecherche(null);
    const timeout = window.setTimeout(() => {
      listerUtilisateursClientDisponibles(businessId, terme)
        .then((resultat) => {
          if (!annule) setUtilisateurs(resultat);
        })
        .catch((error: Error) => {
          if (!annule) {
            setErreurRecherche(error.message || "Impossible de charger les utilisateurs.");
          }
        })
        .finally(() => {
          if (!annule) setChargement(false);
        });
    }, 300);
    return () => {
      annule = true;
      window.clearTimeout(timeout);
    };
  }, [businessId, ouvert, recherche]);

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

  const reinitialiser = () => {
    reset({ lastName: "", firstName: "", email: "" });
    setLogo(null);
    setErreurLogo(null);
    if (inputLogoRef.current) inputLogoRef.current.value = "";
  };

  const onSubmit = async (valeurs: ValeursFormulaire) => {
    if (!businessId) {
      toast.error("Aucun business n’est sélectionné.");
      return;
    }

    const lastName = valeurs.lastName.trim();
    const firstName = valeurs.firstName?.trim();
    const email = valeurs.email?.trim();

    const client = {
      lastName,
      ...(firstName ? { firstName } : {}),
      ...(email ? { email } : {}),
      fullName: [firstName, lastName].filter(Boolean).join(" "),
    };

    await toast
      .promise(creerClientAvecLogo(businessId, client, logo ?? undefined), {
        loading: "Création du client…",
        success: ({ data: cree, message }) => {
          reinitialiser();
          setOuvert(false);
          onCreated(cree);
          return message;
        },
        error: (error: Error) => error.message,
      })
      .unwrap();
  };

  const basculerSelection = (id: string) => {
    setSelection((courante) => {
      const suivante = new Set(courante);
      if (suivante.has(id)) suivante.delete(id);
      else suivante.add(id);
      return suivante;
    });
  };

  const rattacher = async () => {
    if (!businessId || selection.size === 0) return;
    setRattachementEnCours(true);
    try {
      await toast
        .promise(inviterUtilisateursCommeClients(businessId, Array.from(selection)), {
          loading: "Rattachement du compte…",
          success: ({ message }) => {
            setOuvert(false);
            onInvited();
            return message;
          },
          error: (error: Error) => error.message,
        })
        .unwrap();
    } finally {
      setRattachementEnCours(false);
    }
  };

  return (
    <>
      <Button type="button" disabled={!businessId} onClick={() => setOuvert(true)}>
        <PlusIcon className="size-4" />
        Nouveau client
      </Button>

      <Dialog open={ouvert} onOpenChange={setOuvert}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle>Nouveau client</DialogTitle>
            <DialogDescription>
              Enregistrez un client sans compte, ou rattachez-le à un compte
              utilisateur existant.
            </DialogDescription>
          </DialogHeader>

          <Tabs defaultValue="sans-compte" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="sans-compte">Sans compte</TabsTrigger>
              <TabsTrigger value="compte-existant">Compte existant</TabsTrigger>
            </TabsList>

            <TabsContent value="sans-compte" className="pt-4">
              <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <FieldGroup>
                  <Field data-invalid={!!erreurLogo}>
                    <input
                      ref={inputLogoRef}
                      id="nouveau-client-photo"
                      type="file"
                      accept="image/jpeg,image/png,image/webp,image/gif"
                      className="sr-only"
                      aria-label="Photo du client (facultative)"
                      aria-invalid={!!erreurLogo}
                      aria-describedby={
                        erreurLogo
                          ? "nouveau-client-photo-erreur"
                          : "nouveau-client-photo-aide"
                      }
                      onChange={(event) => choisirLogo(event.currentTarget.files?.[0])}
                    />
                    <label
                      htmlFor="nouveau-client-photo"
                      className="group flex cursor-pointer items-center gap-4 rounded-xl border border-dashed border-border bg-muted/30 p-4 transition-colors hover:border-primary/50 hover:bg-muted/60 focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2"
                    >
                      <span className="flex size-16 shrink-0 items-center justify-center overflow-hidden rounded-xl border bg-background text-muted-foreground shadow-sm">
                        {apercuLogo ? (
                          <img
                            src={apercuLogo}
                            alt="Aperçu de la photo du client"
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
                            : "Choisir une photo (facultatif)"}
                        </span>
                        <span
                          id="nouveau-client-photo-aide"
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
                        Retirer la photo
                      </Button>
                    )}
                    {erreurLogo && (
                      <p
                        id="nouveau-client-photo-erreur"
                        role="alert"
                        className="text-sm text-destructive"
                      >
                        {erreurLogo}
                      </p>
                    )}
                  </Field>

                  <Field data-invalid={!!errors.lastName}>
                    <FieldLabel htmlFor="nouveau-client-nom">Nom</FieldLabel>
                    <Input
                      id="nouveau-client-nom"
                      autoComplete="family-name"
                      placeholder="Ex. : Mukendi"
                      aria-invalid={!!errors.lastName}
                      aria-describedby={
                        errors.lastName ? "nouveau-client-nom-erreur" : undefined
                      }
                      {...register("lastName")}
                    />
                    <FieldError
                      id="nouveau-client-nom-erreur"
                      errors={[errors.lastName]}
                    />
                  </Field>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <Field data-invalid={!!errors.firstName}>
                      <FieldLabel htmlFor="nouveau-client-prenom">
                        Prénom{" "}
                        <span className="font-normal text-muted-foreground">
                          (facultatif)
                        </span>
                      </FieldLabel>
                      <Input
                        id="nouveau-client-prenom"
                        autoComplete="given-name"
                        placeholder="Ex. : Amani"
                        aria-invalid={!!errors.firstName}
                        aria-describedby={
                          errors.firstName ? "nouveau-client-prenom-erreur" : undefined
                        }
                        {...register("firstName")}
                      />
                      <FieldError
                        id="nouveau-client-prenom-erreur"
                        errors={[errors.firstName]}
                      />
                    </Field>

                    <Field data-invalid={!!errors.email}>
                      <FieldLabel htmlFor="nouveau-client-email">
                        E-mail{" "}
                        <span className="font-normal text-muted-foreground">
                          (facultatif)
                        </span>
                      </FieldLabel>
                      <Input
                        id="nouveau-client-email"
                        type="email"
                        autoComplete="email"
                        placeholder="client@exemple.cd"
                        aria-invalid={!!errors.email}
                        aria-describedby={
                          errors.email ? "nouveau-client-email-erreur" : undefined
                        }
                        {...register("email")}
                      />
                      <FieldError
                        id="nouveau-client-email-erreur"
                        errors={[errors.email]}
                      />
                    </Field>
                  </div>
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
                  <Button
                    type="submit"
                    disabled={!isValid || isSubmitting || !!erreurLogo}
                  >
                    {isSubmitting ? "Création…" : "Créer le client"}
                  </Button>
                </DialogFooter>
              </form>
            </TabsContent>

            <TabsContent value="compte-existant" className="pt-4">
              <FieldGroup>
                <Field>
                  <FieldLabel htmlFor="rattacher-recherche">
                    Rechercher un utilisateur
                  </FieldLabel>
                  <div className="relative">
                    <SearchIcon className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
                    <Input
                      id="rattacher-recherche"
                      value={recherche}
                      onChange={(event) => setRecherche(event.currentTarget.value)}
                      placeholder="Nom ou adresse e-mail…"
                      className="pl-9"
                    />
                  </div>
                  <FieldDescription>
                    Une invitation sera envoyée à cette personne pour qu’elle
                    confirme son rattachement.
                  </FieldDescription>
                </Field>

                <div
                  className="max-h-56 min-h-32 overflow-y-auto rounded-lg border"
                  aria-busy={chargement}
                >
                  {chargement ? (
                    <p className="p-6 text-center text-sm text-muted-foreground" role="status">
                      Recherche en cours…
                    </p>
                  ) : erreurRecherche ? (
                    <p className="p-6 text-center text-sm text-destructive">
                      {erreurRecherche}
                    </p>
                  ) : utilisateurs.length === 0 ? (
                    <p className="p-6 text-center text-sm text-muted-foreground">
                      {recherche.trim()
                        ? "Aucun utilisateur disponible ne correspond."
                        : "Saisissez un nom ou un e-mail pour chercher."}
                    </p>
                  ) : (
                    <ul className="divide-y">
                      {utilisateurs.map((utilisateur) => {
                        const selectionne = selection.has(utilisateur.id);
                        return (
                          <li key={utilisateur.id}>
                            <button
                              type="button"
                              onClick={() => basculerSelection(utilisateur.id)}
                              aria-pressed={selectionne}
                              aria-label={`${selectionne ? "Désélectionner" : "Sélectionner"} ${nomUtilisateur(utilisateur)}`}
                              className={`flex w-full items-center gap-3 px-4 py-3 text-left transition-colors hover:bg-muted/50 ${
                                selectionne ? "bg-primary/10" : ""
                              }`}
                            >
                              <Avatar className="size-9 shrink-0">
                                <AvatarImage src={utilisateur.image ?? undefined} alt="" />
                                <AvatarFallback className="bg-primary/10 text-sm font-medium text-primary">
                                  {nomUtilisateur(utilisateur)
                                    .charAt(0)
                                    .toLocaleUpperCase("fr")}
                                </AvatarFallback>
                              </Avatar>
                              <span className="min-w-0 flex-1">
                                <span className="block truncate text-sm font-medium">
                                  {nomUtilisateur(utilisateur)}
                                </span>
                                <span className="block truncate text-xs text-muted-foreground">
                                  {utilisateur.email || "E-mail non renseigné"}
                                </span>
                              </span>
                              <span
                                className={`flex size-5 shrink-0 items-center justify-center rounded-full border ${
                                  selectionne
                                    ? "border-primary bg-primary text-primary-foreground"
                                    : "border-muted-foreground/40"
                                }`}
                                aria-hidden="true"
                              >
                                {selectionne && <Check className="size-3" />}
                              </span>
                            </button>
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </div>
              </FieldGroup>

              <DialogFooter className="mt-6">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setOuvert(false)}
                  disabled={rattachementEnCours}
                >
                  Annuler
                </Button>
                <Button
                  type="button"
                  onClick={rattacher}
                  disabled={selection.size === 0 || rattachementEnCours}
                >
                  {rattachementEnCours
                    ? "Rattachement…"
                    : `Rattacher ${selection.size > 1 ? `${selection.size} comptes` : "le compte"}`}
                </Button>
              </DialogFooter>
            </TabsContent>
          </Tabs>
        </DialogContent>
      </Dialog>
    </>
  );
}

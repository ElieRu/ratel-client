"use client"

import { useEffect, useRef, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Check,
  ImagePlusIcon,
  PlusIcon,
  SearchIcon,
  UploadIcon,
  XIcon,
} from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "sonner";

import {
  creerFournisseurAvecLogo,
  inviterUtilisateursCommeFournisseurs,
  listerUtilisateursFournisseurDisponibles,
  type FournisseurEnregistre,
  type UtilisateurFournisseurDisponible,
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

const formulaireFournisseurSchema = z.object({
  nom: z
    .string()
    .trim()
    .min(4, "Le nom doit contenir au moins 4 caractères.")
    .max(50, "Le nom ne peut pas dépasser 50 caractères."),
  email: z
    .union([z.literal(""), z.email("Saisissez une adresse e-mail valide.")])
    .optional(),
});

type ValeursFormulaire = z.infer<typeof formulaireFournisseurSchema>;

type CreerFournisseurProps = {
  businessId: string | null;
  onCreated: (fournisseur: FournisseurEnregistre) => void;
  onInvited: (fournisseurs: FournisseurEnregistre[]) => void;
};

function nomUtilisateur(utilisateur: UtilisateurFournisseurDisponible) {
  return (
    utilisateur.full_name?.trim() ||
    utilisateur.clients?.fullName?.trim() ||
    utilisateur.contacts.find((contact) => contact.label?.trim())?.label?.trim() ||
    utilisateur.contacts.find((contact) => contact.email?.trim())?.email?.trim() ||
    `Utilisateur ${utilisateur.id.slice(-6)}`
  );
}

function emailUtilisateur(utilisateur: UtilisateurFournisseurDisponible) {
  if (utilisateur.email?.trim()) return utilisateur.email.trim();
  if (utilisateur.clients?.email?.trim()) return utilisateur.clients.email.trim();
  const contactNomme = utilisateur.contacts.find((contact) => contact.label?.trim());
  return (
    contactNomme?.email?.trim() ||
    utilisateur.contacts.find((contact) => contact.email?.trim())?.email?.trim() ||
    "E-mail non renseigné"
  );
}

export function CreerFournisseur({
  businessId,
  onCreated,
  onInvited,
}: CreerFournisseurProps) {
  const [ouvert, setOuvert] = useState(false);
  const [logo, setLogo] = useState<File | null>(null);
  const [erreurLogo, setErreurLogo] = useState<string | null>(null);
  const [apercuLogo, setApercuLogo] = useState<string | null>(null);
  const inputLogoRef = useRef<HTMLInputElement>(null);

  // Onglet « compte existant »
  const [recherche, setRecherche] = useState("");
  const [utilisateurs, setUtilisateurs] = useState<UtilisateurFournisseurDisponible[]>([]);
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
      listerUtilisateursFournisseurDisponibles(businessId, terme)
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

  const basculerSelection = (id: string) => {
    setSelection((courante) => {
      const suivante = new Set(courante);
      if (suivante.has(id)) suivante.delete(id);
      else suivante.add(id);
      return suivante;
    });
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
        success: ({ data: cree, message }) => {
          reset({ nom: "", email: "" });
          setLogo(null);
          setErreurLogo(null);
          if (inputLogoRef.current) inputLogoRef.current.value = "";
          setOuvert(false);
          onCreated(cree);
          return message;
        },
        error: (error: Error) => error.message,
      })
      .unwrap();
  };

  const rattacher = async () => {
    if (!businessId || selection.size === 0) return;
    setRattachementEnCours(true);
    try {
      await toast
        .promise(
          inviterUtilisateursCommeFournisseurs(businessId, Array.from(selection)),
          {
            loading: "Envoi des invitations fournisseur…",
            success: ({ data, message }) => {
              setOuvert(false);
              onInvited(data);
              return message;
            },
            error: (error: Error) => error.message,
          }
        )
        .unwrap();
    } finally {
      setRattachementEnCours(false);
    }
  };

  return (
    <>
      <Button type="button" disabled={!businessId} onClick={() => setOuvert(true)}>
        <PlusIcon className="size-4" />
        Nouveau fournisseur
      </Button>

      <Dialog open={ouvert} onOpenChange={setOuvert}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle>Nouveau fournisseur</DialogTitle>
            <DialogDescription>
              Enregistrez un fournisseur sans compte, ou rattachez-le à un compte
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
                      onChange={(event) => choisirLogo(event.currentTarget.files?.[0])}
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
                      E-mail{" "}
                      <span className="font-normal text-muted-foreground">
                        (facultatif)
                      </span>
                    </FieldLabel>
                    <Input
                      id="nouveau-fournisseur-email"
                      type="email"
                      autoComplete="email"
                      placeholder="contact@exemple.cd"
                      aria-invalid={!!errors.email}
                      aria-describedby={
                        errors.email ? "nouveau-fournisseur-email-erreur" : undefined
                      }
                      {...register("email")}
                    />
                    <FieldError
                      id="nouveau-fournisseur-email-erreur"
                      errors={[errors.email]}
                    />
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
                  <Button
                    type="submit"
                    disabled={!isValid || isSubmitting || !!erreurLogo}
                  >
                    {isSubmitting ? "Création…" : "Créer le fournisseur"}
                  </Button>
                </DialogFooter>
              </form>
            </TabsContent>

            <TabsContent value="compte-existant" className="pt-4">
              <FieldGroup>
                <Field>
                  <FieldLabel htmlFor="rattacher-fournisseur-recherche">
                    Rechercher un utilisateur
                  </FieldLabel>
                  <div className="relative">
                    <SearchIcon className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
                    <Input
                      id="rattacher-fournisseur-recherche"
                      value={recherche}
                      onChange={(event) => setRecherche(event.currentTarget.value)}
                      placeholder="Nom, e-mail ou téléphone…"
                      className="pl-9"
                    />
                  </div>
                  <FieldDescription>
                    Une invitation sera envoyée à chaque personne pour qu’elle
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
                        : "Saisissez un nom, un e-mail ou un téléphone pour chercher."}
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
                                <AvatarImage
                                  src={utilisateur.image ?? utilisateur.clients?.profile}
                                  alt=""
                                />
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
                                  {emailUtilisateur(utilisateur)}
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

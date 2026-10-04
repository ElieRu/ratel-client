"use client"

import { useCallback, useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import {
  ImagePlusIcon,
  PencilIcon,
  SendIcon,
  SearchIcon,
  Trash2Icon,
  UploadIcon,
  XIcon,
} from "lucide-react";
import { Link } from "react-router";

import { FournisseurSchema, type Fournisseur } from "@/lib/validations";
import { tronquerAvecEllipses } from "@/lib/utils";
import { useBusiness } from "@/lib/business-context";
import {
  DEFAULT_FOURNISSEUR_LOGO,
  listerFournisseurs,
  modifierFournisseurAvecLogo,
  renvoyerInvitationFournisseur,
  supprimerFournisseur,
  type FournisseurEnregistre,
} from "@/lib/api/business";
import { PageRessource } from "@/components/ressource/page-ressource";
import { useListe } from "@/components/ressource/use-liste";
import { CreerFournisseur } from "@/components/fournisseurs/creer-fournisseur";

import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { NativeSelect, NativeSelectOption } from "@/components/ui/native-select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

type LigneFournisseur = Fournisseur & {
  id: string;
  userImage?: string | null;
  userId?: string | null;
  isVerified?: boolean;
  invitationExpiresAt?: string | null;
};
type FiltreCompte = "tous" | "avec-compte" | "sans-compte";

export default function Fournisseurs() {
  const { businessId } = useBusiness();
  const [recherche, setRecherche] = useState("");
  const [saisie, setSaisie] = useState("");
  const [filtreCompte, setFiltreCompte] = useState<FiltreCompte>("tous");
  const [taillePage, setTaillePage] = useState(10);
  const [page, setPage] = useState(0);
  const [ouvert, setOuvert] = useState(false);
  const [enEdition, setEnEdition] = useState<LigneFournisseur | null>(null);
  const [aSupprimer, setASupprimer] = useState<LigneFournisseur | null>(null);
  const [suppressionEnCours, setSuppressionEnCours] = useState(false);
  const [renvoiEnCours, setRenvoiEnCours] = useState<string | null>(null);
  const [logo, setLogo] = useState<File | null>(null);
  const [erreurLogo, setErreurLogo] = useState<string | null>(null);
  const [logoInitial, setLogoInitial] = useState<string | null>(null);
  const [apercuLogo, setApercuLogo] = useState<string | null>(null);
  const inputLogoRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!logo) {
      setApercuLogo(logoInitial);
      return;
    }

    const url = URL.createObjectURL(logo);
    setApercuLogo(url);
    return () => URL.revokeObjectURL(url);
  }, [logo, logoInitial]);

  useEffect(() => {
    const timeout = window.setTimeout(() => {
      setRecherche(saisie.trim());
      setPage(0);
    }, 300);

    return () => window.clearTimeout(timeout);
  }, [saisie]);

  const charger = useCallback(
    async () => {
      const fournisseurs = await listerFournisseurs(
        businessId!,
        recherche || undefined
      );
      return fournisseurs.map((fournisseur) => ({
        id: fournisseur.id,
        nom: fournisseur.nom ?? undefined,
        email: fournisseur.email ?? undefined,
        logo: fournisseur.logo,
        userImage: fournisseur.userImage,
        website: fournisseur.website ?? undefined,
        userId: fournisseur.userId,
        isVerified: fournisseur.isVerified,
        invitationExpiresAt: fournisseur.invitationExpiresAt,
      }));
    },
    [businessId, recherche]
  );

  const {
    donnees,
    chargement,
    erreur,
    recharger,
    ajouter,
    mettreAJour,
    retirer,
  } = useListe<LigneFournisseur>(charger, !!businessId);
  const fournisseursFiltres = donnees.filter((fournisseur) => {
    if (filtreCompte === "avec-compte") return !!fournisseur.userId;
    if (filtreCompte === "sans-compte") return !fournisseur.userId;
    return true;
  });
  const nombrePages = Math.ceil(fournisseursFiltres.length / taillePage);
  const pageCourante = Math.min(page, Math.max(0, nombrePages - 1));
  const fournisseursAffiches = fournisseursFiltres.slice(
    pageCourante * taillePage,
    (pageCourante + 1) * taillePage
  );
  const debut = fournisseursFiltres.length === 0 ? 0 : pageCourante * taillePage + 1;
  const fin = Math.min((pageCourante + 1) * taillePage, fournisseursFiltres.length);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isValid },
  } = useForm<Fournisseur>({
    resolver: zodResolver(FournisseurSchema),
    mode: "onTouched",
    defaultValues: { nom: "", email: "", website: "" },
  });

  const ouvrirEdition = (f: LigneFournisseur) => {
    setEnEdition(f);
    setLogo(null);
    setErreurLogo(null);
    setLogoInitial(f.logo ?? null);
    if (inputLogoRef.current) inputLogoRef.current.value = "";
    reset({
      nom: f.nom ?? "",
      email: f.email ?? "",
      website: f.website ?? "",
    });
    setOuvert(true);
  };

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

  const onSubmit = async (form: Fournisseur) => {
    if (!enEdition) return;

    const utiles: Fournisseur = {
      ...(form.nom?.trim() ? { nom: form.nom.trim() } : {}),
      ...(form.email?.trim() ? { email: form.email.trim() } : {}),
      ...(form.website?.trim() ? { website: form.website.trim() } : {}),
    };

    await toast
      .promise(
        modifierFournisseurAvecLogo(
          businessId!,
          enEdition.id,
          utiles,
          logo ?? undefined
        ),
        {
          loading: "Modification…",
          success: ({ data: fournisseur, message }) => {
            const fournisseurMisAJour: LigneFournisseur = {
              id: fournisseur.id,
              nom: fournisseur.nom ?? undefined,
              email: fournisseur.email ?? undefined,
              logo: fournisseur.logo,
              userImage: enEdition.userImage,
              website: fournisseur.website ?? undefined,
              userId: fournisseur.userId,
              isVerified: fournisseur.isVerified,
              invitationExpiresAt: fournisseur.invitationExpiresAt,
            };
            const terme = recherche.trim().toLocaleLowerCase("fr");
            const correspondAuFiltre =
              !terme ||
              fournisseurMisAJour.nom
                ?.toLocaleLowerCase("fr")
                .includes(terme);

            if (correspondAuFiltre) {
              mettreAJour(fournisseurMisAJour, (element) => element.id);
            } else {
              retirer(fournisseurMisAJour.id, (element) => element.id);
            }

            setOuvert(false);
            setLogo(null);
            setLogoInitial(null);
            setErreurLogo(null);
            if (inputLogoRef.current) inputLogoRef.current.value = "";
            return message;
          },
          error: (e: Error) => e.message,
        }
      )
      .unwrap();
  };

  const confirmerSuppression = async () => {
    if (!aSupprimer || !businessId) return;

    setSuppressionEnCours(true);
    try {
      await toast
        .promise(supprimerFournisseur(businessId, aSupprimer.id), {
            loading: "Suppression…",
            success: ({ data: fournisseur, message }) => {
              retirer(fournisseur.id, (element) => element.id);
              return message;
            },
            error: (e: Error) => e.message,
          })
          .unwrap();
      setASupprimer(null);
    } finally {
      setSuppressionEnCours(false);
    }
  };

  const ajouterFournisseurCree = (fournisseur: FournisseurEnregistre) => {
    const terme = recherche.trim().toLocaleLowerCase("fr");
    if (
      terme &&
      !fournisseur.nom?.toLocaleLowerCase("fr").includes(terme)
    ) {
      return;
    }
    ajouter({
      id: fournisseur.id,
      nom: fournisseur.nom ?? undefined,
      email: fournisseur.email ?? undefined,
      logo: fournisseur.logo,
      userImage: fournisseur.userImage,
      website: fournisseur.website ?? undefined,
      userId: fournisseur.userId,
      isVerified: fournisseur.isVerified,
      invitationExpiresAt: fournisseur.invitationExpiresAt,
    });
    setPage(0);
  };

  const ajouterUtilisateursFournisseurs = (
    fournisseurs: FournisseurEnregistre[]
  ) => {
    const terme = recherche.trim().toLocaleLowerCase("fr");
    const correspondants = fournisseurs.filter(
      (fournisseur) =>
        !terme ||
        fournisseur.nom?.toLocaleLowerCase("fr").includes(terme)
    );
    correspondants.forEach((fournisseur) => {
      ajouter({
        id: fournisseur.id,
        nom: fournisseur.nom ?? undefined,
        email: fournisseur.email ?? undefined,
        logo: fournisseur.logo,
        userImage: fournisseur.userImage,
        website: fournisseur.website ?? undefined,
        userId: fournisseur.userId,
        isVerified: fournisseur.isVerified,
        invitationExpiresAt: fournisseur.invitationExpiresAt,
      });
    });
    if (correspondants.length > 0) setPage(0);
    recharger();
  };

  const renvoyerInvitation = async (fournisseur: LigneFournisseur) => {
    if (!businessId) return;
    setRenvoiEnCours(fournisseur.id);
    try {
      await renvoyerInvitationFournisseur(businessId, fournisseur.id);
    } catch {
      // Le client API affiche déjà le message d’erreur dans un toast.
    } finally {
      setRenvoiEnCours(null);
    }
  };

  return (
    <>
    <PageRessource
      titre="Fournisseurs"
      description="Les fournisseurs auprès desquels vous vous approvisionnez."
      businessRequis
      businessId={businessId}
      chargement={chargement}
      erreur={erreur}
      vide={donnees.length === 0}
      messageVide="Aucun fournisseur enregistré pour le moment."
      onReessayer={recharger}
      action={
        <CreerFournisseur
          businessId={businessId}
          onCreated={ajouterFournisseurCree}
          onInvited={ajouterUtilisateursFournisseurs}
        />
      }
      outils={
        <div className="flex w-full max-w-3xl flex-wrap items-center gap-2">
          <div className="relative min-w-48 flex-1">
            <SearchIcon className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              value={saisie}
              onChange={(e) => setSaisie(e.target.value)}
              placeholder="Rechercher par nom…"
              aria-label="Rechercher un fournisseur"
              className="pl-9"
            />
          </div>
          <NativeSelect
            value={filtreCompte}
            onChange={(event) => {
              const valeur = event.currentTarget.value;
              if (
                valeur === "tous" ||
                valeur === "avec-compte" ||
                valeur === "sans-compte"
              ) {
                setFiltreCompte(valeur);
                setPage(0);
              }
            }}
            aria-label="Filtrer les fournisseurs par compte utilisateur"
            className="min-w-40"
          >
            <NativeSelectOption value="tous">Tous les fournisseurs</NativeSelectOption>
            <NativeSelectOption value="avec-compte">Avec compte</NativeSelectOption>
            <NativeSelectOption value="sans-compte">Sans compte</NativeSelectOption>
          </NativeSelect>
        </div>
      }
    >
      <div className="overflow-hidden rounded-lg border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Nom du fournisseur</TableHead>
              <TableHead className="w-[1%] text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {fournisseursAffiches.length === 0 ? (
              <TableRow>
                <TableCell colSpan={2} className="h-24 text-center text-muted-foreground">
                  Aucun fournisseur ne correspond à ce filtre.
                </TableCell>
              </TableRow>
            ) : fournisseursAffiches.map((f) => (
              <TableRow key={f.id}>
                <TableCell>
                  <div className="flex items-center gap-3 font-medium">
                    <Avatar className="size-9">
                      <AvatarImage
                        src={
                          f.logo && f.logo !== DEFAULT_FOURNISSEUR_LOGO
                            ? f.logo
                            : f.userImage || f.logo || DEFAULT_FOURNISSEUR_LOGO
                        }
                        alt={f.nom || "Logo du fournisseur"}
                      />
                      <AvatarFallback>
                        {(f.nom || "F").charAt(0).toLocaleUpperCase("fr")}
                      </AvatarFallback>
                    </Avatar>
                    <Link
                      to={`/fournisseurs/${f.id}`}
                      className="text-primary underline-offset-4 hover:underline"
                    >
                      {f.nom || "—"}
                    </Link>
                  </div>
                </TableCell>
                <TableCell className="text-right whitespace-nowrap">
                  <div className="flex items-center justify-end gap-1">
                    {f.isVerified === false &&
                      f.invitationExpiresAt !== null &&
                      f.invitationExpiresAt !== undefined &&
                      new Date(f.invitationExpiresAt).getTime() <= Date.now() && (
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        className="size-8 border border-border text-muted-foreground"
                        onClick={() => void renvoyerInvitation(f)}
                        disabled={renvoiEnCours === f.id}
                        aria-label={`Renvoyer l’invitation à ${f.nom ?? "ce fournisseur"}`}
                        title="Renvoyer l’invitation"
                      >
                        <SendIcon className="size-4" />
                      </Button>
                    )}
                    {!f.userId && <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      className="size-8 border border-border text-muted-foreground"
                      onClick={() => ouvrirEdition(f)}
                      aria-label={`Modifier ${f.nom ?? "ce fournisseur"}`}
                      title="Modifier"
                    >
                      <PencilIcon className="size-4" />
                    </Button>}
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      className="size-8 border border-destructive/30 text-destructive hover:bg-destructive/10 hover:text-destructive"
                      onClick={() => setASupprimer(f)}
                      aria-label={`Supprimer ${f.nom ?? "ce fournisseur"}`}
                      title="Supprimer"
                    >
                      <Trash2Icon className="size-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <label htmlFor="fournisseurs-par-page">Fournisseurs par page</label>
          <NativeSelect
            id="fournisseurs-par-page"
            value={taillePage}
            onChange={(event) => {
              setTaillePage(Number(event.currentTarget.value));
              setPage(0);
            }}
            aria-label="Nombre de fournisseurs par page"
          >
            <NativeSelectOption value={10}>10</NativeSelectOption>
            <NativeSelectOption value={20}>20</NativeSelectOption>
            <NativeSelectOption value={50}>50</NativeSelectOption>
          </NativeSelect>
          <span aria-live="polite">
            {debut}–{fin} sur {fournisseursFiltres.length}
          </span>
        </div>
        <nav
          aria-label="Pagination des fournisseurs"
          className="flex items-center gap-2"
        >
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() => setPage(pageCourante - 1)}
            disabled={pageCourante === 0}
            aria-label="Page précédente"
          >
            Précédent
          </Button>
          <span aria-current="page" className="text-sm tabular-nums">
            {nombrePages === 0 ? 0 : pageCourante + 1} / {nombrePages}
          </span>
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() => setPage(pageCourante + 1)}
            disabled={pageCourante >= nombrePages - 1}
            aria-label="Page suivante"
          >
            Suivant
          </Button>
        </nav>
      </div>

      <AlertDialog
        open={aSupprimer !== null}
        onOpenChange={(open) => {
          if (!open && !suppressionEnCours) setASupprimer(null);
        }}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Supprimer ce fournisseur ?</AlertDialogTitle>
            <AlertDialogDescription>
              Le fournisseur « {aSupprimer?.nom || "sans nom"} » sera supprimé.
              Cette action est irréversible.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel disabled={suppressionEnCours}>
              Annuler
            </AlertDialogCancel>
            <AlertDialogAction
              variant="destructive"
              disabled={suppressionEnCours}
              onClick={confirmerSuppression}
            >
              {suppressionEnCours ? "Suppression…" : "Supprimer"}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <Dialog open={ouvert} onOpenChange={setOuvert}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Modifier le fournisseur</DialogTitle>
            <DialogDescription>
              Renseignez au moins le nom pour identifier ce fournisseur dans vos
              achats.
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <FieldGroup>
              <FieldSet>
                <FieldLegend variant="label">Coordonnées</FieldLegend>

                <Field data-invalid={!!erreurLogo}>
                  <input
                    ref={inputLogoRef}
                    id="modifier-fournisseur-logo"
                    type="file"
                    accept="image/jpeg,image/png,image/webp,image/gif"
                    className="sr-only"
                    aria-label="Icône du fournisseur (facultative)"
                    aria-invalid={!!erreurLogo}
                    aria-describedby={
                      erreurLogo
                        ? "modifier-fournisseur-logo-erreur"
                        : "modifier-fournisseur-logo-aide"
                    }
                    onChange={(event) =>
                      choisirLogo(event.currentTarget.files?.[0])
                    }
                  />
                  <label
                    htmlFor="modifier-fournisseur-logo"
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
                          : "Changer l’icône (facultatif)"}
                      </span>
                      <span
                        id="modifier-fournisseur-logo-aide"
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
                        if (inputLogoRef.current) {
                          inputLogoRef.current.value = "";
                        }
                      }}
                    >
                      <XIcon className="size-4" />
                      Annuler le changement d’icône
                    </Button>
                  )}
                  {erreurLogo && (
                    <p
                      id="modifier-fournisseur-logo-erreur"
                      role="alert"
                      className="text-sm text-destructive"
                    >
                      {erreurLogo}
                    </p>
                  )}
                </Field>

                <Field data-invalid={!!errors.nom}>
                  <FieldLabel htmlFor="nom">Nom</FieldLabel>
                  <Input
                    id="nom"
                    placeholder="Ex : Textile Bukavu"
                    aria-invalid={!!errors.nom}
                    {...register("nom")}
                  />
                  <FieldError errors={[errors.nom]} />
                </Field>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <Field data-invalid={!!errors.email}>
                    <FieldLabel htmlFor="email">Email</FieldLabel>
                    <Input
                      id="email"
                      type="email"
                      placeholder="contact@exemple.cd"
                      aria-invalid={!!errors.email}
                      disabled={!!enEdition?.userId}
                      {...register("email")}
                    />
                    {enEdition?.userId ? (
                      <FieldDescription>
                        Cette adresse provient du compte utilisateur rattaché.
                      </FieldDescription>
                    ) : (
                      <FieldError errors={[errors.email]} />
                    )}
                  </Field>

                  <Field data-invalid={!!errors.website}>
                    <FieldLabel htmlFor="website">Site web</FieldLabel>
                    <Input
                      id="website"
                      type="url"
                      placeholder="https://exemple.cd"
                      aria-invalid={!!errors.website}
                      {...register("website")}
                    />
                    <FieldError errors={[errors.website]} />
                  </Field>
                </div>

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
                {isSubmitting
                  ? "Enregistrement…"
                  : enEdition
                    ? "Enregistrer"
                    : "Créer le fournisseur"}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </PageRessource>
    </>
  );
}

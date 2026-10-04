"use client"

import { useCallback, useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import {
  ImagePlusIcon,
  PencilIcon,
  SearchIcon,
  SendIcon,
  Trash2Icon,
  UploadIcon,
  XIcon,
} from "lucide-react";
import { Link } from "react-router";
import { z } from "zod";

import { useBusiness } from "@/lib/business-context";
import { tronquerAvecEllipses } from "@/lib/utils";
import {
  listerClients,
  renvoyerInvitationClient,
  modifierClient,
  modifierClientAvecLogo,
  supprimerClient,
  DEFAULT_CLIENT_PROFILE,
  type ClientModification,
  type ClientEnregistre,
} from "@/lib/api/business";
import { PageRessource } from "@/components/ressource/page-ressource";
import { useListe } from "@/components/ressource/use-liste";
import { CreerClient } from "@/components/clients/creer-client";

import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
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

type LigneClient = ClientEnregistre;
type FiltreCompte = "tous" | "avec-compte" | "sans-compte";
type FiltreVerification = "tous" | "verifies" | "en-attente";
const FormulaireClientSchema = z.object({
  firstName: z.string().trim().max(50, "Le prénom ne peut pas dépasser 50 caractères.")
    .refine((value) => value.length === 0 || value.length >= 4, "Le prénom doit contenir au moins 4 caractères."),
  lastName: z.string().trim().max(50, "Le nom ne peut pas dépasser 50 caractères.")
    .refine((value) => value.length === 0 || value.length >= 4, "Le nom doit contenir au moins 4 caractères."),
  email: z.string().trim().toLowerCase()
    .refine((value) => value.length === 0 || z.email().safeParse(value).success, "L’adresse e-mail est invalide."),
}).refine(
  ({ firstName, lastName, email }) => Boolean(firstName || lastName || email),
  {
    message: "Renseignez au moins un nom, un prénom ou une adresse e-mail.",
    path: ["email"],
  }
);
type FormulaireClient = z.infer<typeof FormulaireClientSchema>;

export default function Clients() {
  const { businessId } = useBusiness();
  const [recherche, setRecherche] = useState("");
  const [saisie, setSaisie] = useState("");
  const [filtreCompte, setFiltreCompte] = useState<FiltreCompte>("tous");
  const [filtreVerification, setFiltreVerification] =
    useState<FiltreVerification>("tous");
  const [taillePage, setTaillePage] = useState(10);
  const [page, setPage] = useState(0);
  const [ouvert, setOuvert] = useState(false);
  const [enEdition, setEnEdition] = useState<LigneClient | null>(null);
  const [aSupprimer, setASupprimer] = useState<LigneClient | null>(null);
  const [suppressionEnCours, setSuppressionEnCours] = useState(false);
  const [renvoiEnCours, setRenvoiEnCours] = useState<string | null>(null);
  const [logo, setLogo] = useState<File | null>(null);
  const [erreurLogo, setErreurLogo] = useState<string | null>(null);
  const [apercuLogo, setApercuLogo] = useState<string | null>(null);
  const inputLogoRef = useRef<HTMLInputElement>(null);

  const charger = useCallback(
    () => listerClients(businessId!, recherche || undefined),
    [businessId, recherche]
  );

  const { donnees, chargement, erreur, recharger, ajouter, retirer } =
    useListe<LigneClient>(charger, !!businessId);

  useEffect(() => {
    if (!logo) {
      setApercuLogo(
        enEdition?.profile === DEFAULT_CLIENT_PROFILE
          ? enEdition.userImage ?? enEdition.profile
          : enEdition?.profile ?? null
      );
      return;
    }
    const url = URL.createObjectURL(logo);
    setApercuLogo(url);
    return () => URL.revokeObjectURL(url);
  }, [logo, enEdition]);

  useEffect(() => {
    const timeout = window.setTimeout(() => {
      setRecherche(saisie.trim());
      setPage(0);
    }, 300);
    return () => window.clearTimeout(timeout);
  }, [saisie]);

  const clientsFiltres = donnees.filter((client) => {
    if (filtreCompte === "avec-compte" && !client.userId) return false;
    if (filtreCompte === "sans-compte" && client.userId) return false;
    if (filtreVerification === "verifies" && client.isVerified === false) return false;
    if (filtreVerification === "en-attente" && client.isVerified !== false) return false;
    return true;
  });
  const nombrePages = Math.ceil(clientsFiltres.length / taillePage);
  const pageCourante = Math.min(page, Math.max(0, nombrePages - 1));
  const clientsAffiches = clientsFiltres.slice(
    pageCourante * taillePage,
    (pageCourante + 1) * taillePage
  );
  const debut = clientsFiltres.length === 0 ? 0 : pageCourante * taillePage + 1;
  const fin = Math.min((pageCourante + 1) * taillePage, clientsFiltres.length);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isValid },
  } = useForm<FormulaireClient>({
    resolver: zodResolver(FormulaireClientSchema),
    mode: "onChange",
    defaultValues: { firstName: "", lastName: "", email: "" },
  });

  const ajouterClientCree = (client: LigneClient) => {
    ajouter(client);
    setPage(0);
    recharger();
  };

  const ouvrirEdition = (client: LigneClient) => {
    setEnEdition(client);
    setLogo(null);
    setErreurLogo(null);
    if (inputLogoRef.current) inputLogoRef.current.value = "";
    reset({
      firstName: client.firstName ?? "",
      lastName: client.lastName ?? "",
      email: client.email ?? "",
    });
    setOuvert(true);
  };

  const onSubmit = async (form: FormulaireClient) => {
    if (!businessId || !enEdition) return;

    const donneesModification: ClientModification = {
      firstName: form.firstName || null,
      lastName: form.lastName || null,
      email: form.email || null,
    };
    const action = logo
      ? modifierClientAvecLogo(businessId, enEdition.id, donneesModification, logo)
      : modifierClient(businessId, enEdition.id, donneesModification);

    await toast
      .promise(action, {
        loading: "Modification…",
        success: () => {
          setOuvert(false);
          setLogo(null);
          recharger();
          return "Client modifié";
        },
        error: (e: Error) => e.message,
      })
      .unwrap();
  };

  const choisirLogo = (fichier: File | undefined) => {
    setErreurLogo(null);
    if (!fichier) {
      setLogo(null);
      return;
    }
    if (!["image/jpeg", "image/png", "image/webp", "image/gif"].includes(fichier.type)) {
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

  const renvoyerInvitation = async (client: LigneClient) => {
    if (!businessId) return;
    setRenvoiEnCours(client.id);
    try {
      const result = await renvoyerInvitationClient(businessId, client.id);
      toast.success(result.message);
      recharger();
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Le renvoi de l’invitation a échoué.");
    } finally {
      setRenvoiEnCours(null);
    }
  };

  const supprimer = async (client: LigneClient) => {
    if (!businessId) return;
    setSuppressionEnCours(true);
    try {
      await toast
        .promise(supprimerClient(businessId, client.id), {
          loading: "Suppression…",
          success: () => {
            retirer(client.id, (element) => element.id);
            setASupprimer(null);
            return "Client supprimé";
          },
          error: (e: Error) => e.message,
        })
        .unwrap();
    } finally {
      setSuppressionEnCours(false);
    }
  };

  return (
    <PageRessource
      titre="Clients"
      description="Les clients rattachés à votre business."
      businessRequis
      businessId={businessId}
      chargement={chargement}
      erreur={erreur}
      onReessayer={recharger}
      action={
        <CreerClient
          businessId={businessId}
          onCreated={ajouterClientCree}
          onInvited={recharger}
        />
      }
      outils={
        <div className="flex w-full max-w-3xl flex-wrap items-center gap-2">
          <div className="relative min-w-48 flex-1">
            <SearchIcon className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              value={saisie}
              onChange={(e) => setSaisie(e.target.value)}
              placeholder="Rechercher par nom ou e-mail…"
              aria-label="Rechercher un client"
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
            aria-label="Filtrer les clients par compte utilisateur"
            className="min-w-40"
          >
            <NativeSelectOption value="tous">Tous les clients</NativeSelectOption>
            <NativeSelectOption value="avec-compte">Avec compte</NativeSelectOption>
            <NativeSelectOption value="sans-compte">Sans compte</NativeSelectOption>
          </NativeSelect>
          <NativeSelect
            value={filtreVerification}
            onChange={(event) => {
              const valeur = event.currentTarget.value;
              if (
                valeur === "tous" ||
                valeur === "verifies" ||
                valeur === "en-attente"
              ) {
                setFiltreVerification(valeur);
                setPage(0);
              }
            }}
            aria-label="Filtrer les clients par état de vérification"
            className="min-w-40"
          >
            <NativeSelectOption value="tous">Vérifiés et en attente</NativeSelectOption>
            <NativeSelectOption value="verifies">Vérifiés</NativeSelectOption>
            <NativeSelectOption value="en-attente">En attente</NativeSelectOption>
          </NativeSelect>
        </div>
      }
    >
      <div className="overflow-hidden rounded-lg border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Nom du client</TableHead>
              <TableHead className="w-[1%] text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {clientsAffiches.length === 0 ? (
              <TableRow>
                <TableCell colSpan={2} className="h-24 text-center text-muted-foreground">
                  {recherche ||
                  filtreCompte !== "tous" ||
                  filtreVerification !== "tous"
                    ? "Aucun client ne correspond à ce filtre."
                    : "Aucun client enregistré pour le moment."}
                </TableCell>
              </TableRow>
            ) : clientsAffiches.map((client) => (
              <TableRow key={client.id}>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <Avatar className="size-9">
                      <AvatarImage
                        src={
                          client.userImage && client.profile === DEFAULT_CLIENT_PROFILE
                            ? client.userImage
                            : client.profile || client.userImage || DEFAULT_CLIENT_PROFILE
                        }
                        alt={client.fullName || "Profil du client"}
                      />
                      <AvatarFallback>
                        {(client.fullName ||
                          [client.firstName, client.lastName].filter(Boolean).join(" ") ||
                          "C"
                        ).charAt(0).toLocaleUpperCase("fr")}
                      </AvatarFallback>
                    </Avatar>
                    <div className="min-w-0">
                      <Link
                        to={`/clients/${client.id}`}
                        className="font-medium text-primary underline-offset-4 hover:underline"
                      >
                        {tronquerAvecEllipses(
                          client.fullName ||
                            [client.firstName, client.lastName].filter(Boolean).join(" ") ||
                            "—",
                          42
                        )}
                      </Link>
                      <p className="truncate text-sm text-muted-foreground">
                        {client.email || "E-mail non renseigné"}
                      </p>
                      {client.isVerified === false && (
                        <p className="text-xs text-amber-700">Invitation en attente de validation</p>
                      )}
                    </div>
                  </div>
                </TableCell>
                <TableCell className="text-right whitespace-nowrap">
                  {client.isVerified === false &&
                    client.invitationExpiresAt &&
                    new Date(client.invitationExpiresAt).getTime() <= Date.now() && (
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      className="border"
                      onClick={() => void renvoyerInvitation(client)}
                      disabled={renvoiEnCours === client.id}
                      aria-label={`Renvoyer l’invitation à ${client.fullName ?? "ce client"}`}
                      title="Renvoyer l’invitation"
                    >
                      <SendIcon className="size-4" />
                    </Button>
                  )}
                  <Button
                    variant="ghost"
                    size="icon"
                    className="border"
                    onClick={() => ouvrirEdition(client)}
                    disabled={Boolean(client.userId)}
                    aria-label={`Modifier ${client.fullName ?? "ce client"}`}
                    title="Modifier"
                  >
                    <PencilIcon className="size-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="border border-destructive/30 text-destructive hover:bg-destructive/10"
                    aria-label={`Supprimer ${client.fullName ?? "ce client"}`}
                    title="Supprimer"
                    onClick={() => setASupprimer(client)}
                  >
                    <Trash2Icon className="size-4 text-destructive" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <label htmlFor="clients-par-page">Clients par page</label>
          <NativeSelect
            id="clients-par-page"
            value={taillePage}
            onChange={(event) => {
              setTaillePage(Number(event.currentTarget.value));
              setPage(0);
            }}
            aria-label="Nombre de clients par page"
          >
            <NativeSelectOption value={10}>10</NativeSelectOption>
            <NativeSelectOption value={20}>20</NativeSelectOption>
            <NativeSelectOption value={50}>50</NativeSelectOption>
          </NativeSelect>
          <span aria-live="polite">
            {debut}–{fin} sur {clientsFiltres.length}
          </span>
        </div>
        <nav aria-label="Pagination des clients" className="flex items-center gap-2">
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

      <Dialog open={ouvert} onOpenChange={setOuvert}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Modifier le client</DialogTitle>
            <DialogDescription>
              Renseignez au moins un nom, un prénom ou une adresse e-mail pour
              retrouver ce client.
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <FieldGroup>
              <FieldSet>
                <FieldLegend variant="label">Identité</FieldLegend>

                <Field data-invalid={!!erreurLogo}>
                  <input
                    ref={inputLogoRef}
                    id="nouveau-client-logo"
                    type="file"
                    accept="image/jpeg,image/png,image/webp,image/gif"
                    className="sr-only"
                    aria-label="Logo du client (facultatif)"
                    aria-invalid={!!erreurLogo}
                    onChange={(event) => choisirLogo(event.currentTarget.files?.[0])}
                  />
                  <label
                    htmlFor="nouveau-client-logo"
                    className="group flex cursor-pointer items-center gap-4 rounded-xl border border-dashed border-border bg-muted/30 p-4 transition-colors hover:border-primary/50 hover:bg-muted/60"
                  >
                    <span className="flex size-16 shrink-0 items-center justify-center overflow-hidden rounded-xl border bg-background text-muted-foreground shadow-sm">
                      {apercuLogo ? (
                        <img src={apercuLogo} alt="Aperçu du profil client" className="size-full object-cover" />
                      ) : (
                        <ImagePlusIcon className="size-7" aria-hidden="true" />
                      )}
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block truncate text-sm font-medium">
                        {logo ? logo.name : "Choisir le logo du client (facultatif)"}
                      </span>
                      <span className="mt-1 block text-xs text-muted-foreground">
                        JPG, PNG, WebP ou GIF · 2 Mo maximum
                      </span>
                    </span>
                    <UploadIcon className="size-4 shrink-0 text-muted-foreground" aria-hidden="true" />
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
                      Annuler le changement de logo
                    </Button>
                  )}
                  {erreurLogo && (
                    <p role="alert" className="text-sm text-destructive">{erreurLogo}</p>
                  )}
                </Field>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <Field data-invalid={!!errors.lastName}>
                    <FieldLabel htmlFor="lastName">Nom</FieldLabel>
                    <Input
                      id="lastName"
                      placeholder="Ex : Kabila"
                      aria-invalid={!!errors.lastName}
                      {...register("lastName")}
                    />
                    <FieldError errors={[errors.lastName]} />
                  </Field>
                  <Field data-invalid={!!errors.firstName}>
                    <FieldLabel htmlFor="firstName">Prénom</FieldLabel>
                    <Input
                      id="firstName"
                      placeholder="Ex : Amani"
                      aria-invalid={!!errors.firstName}
                      {...register("firstName")}
                    />
                    <FieldError errors={[errors.firstName]} />
                  </Field>
                </div>

                <Field data-invalid={!!errors.email}>
                  <FieldLabel htmlFor="email">Email</FieldLabel>
                  <Input
                    id="email"
                    type="email"
                    placeholder="client@exemple.cd"
                    aria-invalid={!!errors.email}
                    disabled={!!enEdition?.userId}
                    {...register("email")}
                  />
                  {enEdition?.userId ? (
                    <FieldDescription>
                      Cette adresse provient du compte utilisateur rattaché.
                    </FieldDescription>
                  ) : errors.email ? (
                    <FieldError errors={[errors.email]} />
                  ) : (
                    <FieldDescription>
                      Sert à rattacher le client à un compte existant.
                    </FieldDescription>
                  )}
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
              <Button type="submit" disabled={!isValid || isSubmitting || !!erreurLogo}>
                {isSubmitting ? "Enregistrement…" : "Enregistrer"}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
      <AlertDialog
        open={aSupprimer !== null}
        onOpenChange={(open) => {
          if (!open && !suppressionEnCours) setASupprimer(null);
        }}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Supprimer ce client ?</AlertDialogTitle>
            <AlertDialogDescription>
              Le client « {aSupprimer?.fullName || "sans nom"} » sera supprimé.
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
              onClick={() => {
                if (aSupprimer) void supprimer(aSupprimer);
              }}
            >
              {suppressionEnCours ? "Suppression…" : "Supprimer"}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </PageRessource>
  );
}

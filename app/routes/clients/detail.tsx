"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Link, useNavigate, useParams } from "react-router";
import { toast } from "sonner";
import { z } from "zod";
import {
  ArrowLeft,
  ImagePlus,
  Loader2,
  Mail,
  Pencil,
  Phone,
  Plus,
  Send,
  Trash2,
  Upload,
  X,
} from "lucide-react";

import {
  lireClient,
  modifierClient,
  modifierClientAvecLogo,
  renvoyerInvitationClient,
  DEFAULT_CLIENT_PROFILE,
  supprimerClient,
  type ClientDetail,
  type ClientModification,
} from "@/lib/api/business";
import {
  creer_adresse,
  creer_contact,
  modifier_adresse,
  modifier_contact,
  supprimer_contact,
} from "@/lib/apis";
import { useBusiness } from "@/lib/business-context";
import type { Adresse, Client, Contact } from "@/lib/validations";
import { items } from "@/lib/utils";
import { AvatarRessource } from "@/components/ressource/avatar-ressource";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type ContactClient = ClientDetail["contacts"][number];
type InformationsClient = {
  firstName: string;
  lastName: string;
  email: string;
  sex: "HOMME" | "FEMME" | "";
  birthday: string;
  pays: string;
  ville: string;
  region: string;
  adresse: string;
  codePostal: string;
};
const InformationsClientSchema = z.object({
  firstName: z.string().trim().max(50, "Le prénom ne peut pas dépasser 50 caractères.")
    .refine((value) => value.length === 0 || value.length >= 4, "Le prénom doit contenir au moins 4 caractères."),
  lastName: z.string().trim().max(50, "Le nom ne peut pas dépasser 50 caractères.")
    .refine((value) => value.length === 0 || value.length >= 4, "Le nom doit contenir au moins 4 caractères."),
  email: z.union([z.literal(""), z.email("L’adresse e-mail est invalide.")]),
  sex: z.enum(["HOMME", "FEMME"]).or(z.literal("")),
  birthday: z.union([
    z.literal(""),
    z.iso.date("La date de naissance est invalide."),
  ]),
  pays: z.string().max(50, "Le pays ne peut pas dépasser 50 caractères."),
  ville: z.string().max(50, "La ville ne peut pas dépasser 50 caractères."),
  region: z.string().max(50, "La région ne peut pas dépasser 50 caractères."),
  adresse: z.string().max(50, "L’adresse ne peut pas dépasser 50 caractères."),
  codePostal: z.string().max(20, "Le code postal ne peut pas dépasser 20 caractères."),
});
type SuppressionCible =
  | { type: "client"; id: string; label: string }
  | { type: "contact"; id: string; label: string };

export default function DetailClient() {
  const { businessId } = useBusiness();
  const { id } = useParams();
  const navigate = useNavigate();
  const [client, setClient] = useState<ClientDetail | null>(null);
  const [chargement, setChargement] = useState(true);
  const [erreur, setErreur] = useState<string | null>(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [sex, setSex] = useState<InformationsClient["sex"]>("");
  const [birthday, setBirthday] = useState("");
  const [pays, setPays] = useState("");
  const [ville, setVille] = useState("");
  const [region, setRegion] = useState("");
  const [adresse, setAdresse] = useState("");
  const [codePostal, setCodePostal] = useState("");
  const [erreursFormulaire, setErreursFormulaire] = useState<Record<string, string>>({});
  const [contactEdite, setContactEdite] = useState<ContactClient | null>(null);
  const [typeContact, setTypeContact] = useState<"PHONE" | "EMAIL">("PHONE");
  const [emailContact, setEmailContact] = useState("");
  const [telephone, setTelephone] = useState("");
  const [dialogContact, setDialogContact] = useState(false);
  const [aSupprimer, setASupprimer] = useState<SuppressionCible | null>(null);
  const [enCours, setEnCours] = useState(false);
  const [enregistrementInfos, setEnregistrementInfos] = useState(false);
  const [logo, setLogo] = useState<File | null>(null);
  const [apercuLogo, setApercuLogo] = useState<string | null>(null);
  const [erreurLogo, setErreurLogo] = useState<string | null>(null);
  const [renvoiEnCours, setRenvoiEnCours] = useState(false);
  const inputLogoRef = useRef<HTMLInputElement>(null);

  const charger = useCallback(async () => {
    if (!businessId || !id) return;
    setChargement(true);
    setErreur(null);
    try {
      const resultat = await lireClient(businessId, id);
      setClient(resultat);
      setFirstName(resultat.firstName ?? "");
      setLastName(resultat.lastName ?? "");
      setEmail(resultat.email ?? "");
      setSex(resultat.sex === "HOMME" || resultat.sex === "FEMME" ? resultat.sex : "");
      setBirthday(resultat.birthday?.slice(0, 10) ?? "");
      // Un client rattaché à un compte n'a souvent pas d'adresse propre :
      // on retombe alors sur celle du compte pour pré-remplir le formulaire.
      const adresseAffichee = resultat.adresses[0] ?? resultat.userAdresses[0];
      setPays(adresseAffichee?.pays ?? "");
      setVille(adresseAffichee?.ville ?? "");
      setRegion(adresseAffichee?.region ?? "");
      setAdresse(adresseAffichee?.adresse ?? "");
      setCodePostal(adresseAffichee?.codePostal ?? "");
    } catch (error) {
      setErreur(error instanceof Error ? error.message : "Impossible de charger le client.");
    } finally {
      setChargement(false);
    }
  }, [businessId, id]);

  useEffect(() => {
    void charger();
  }, [charger]);

  useEffect(() => {
    if (!logo) {
      setApercuLogo(client?.profile ?? null);
      return;
    }
    const url = URL.createObjectURL(logo);
    setApercuLogo(url);
    return () => URL.revokeObjectURL(url);
  }, [client?.profile, logo]);

  const executerMutation = async (
    operation: () => Promise<void>,
    succes: string,
    rafraichir = true,
  ) => {
    setEnCours(true);
    try {
      await operation();
      toast.success(succes);
      if (rafraichir) await charger();
      return true;
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "L’opération a échoué.");
      return false;
    } finally {
      setEnCours(false);
    }
  };

  const enregistrerInformations = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!businessId || !id || !client) return;
    const validation = InformationsClientSchema.safeParse({
      firstName,
      lastName,
      email,
      sex,
      birthday,
      pays,
      ville,
      region,
      adresse,
      codePostal,
    });
    if (!validation.success) {
      const erreurs: Record<string, string> = {};
      for (const issue of validation.error.issues) {
        const champ = issue.path[0];
        if (typeof champ === "string") erreurs[champ] = issue.message;
      }
      setErreursFormulaire(erreurs);
      return;
    }
    setErreursFormulaire({});
    const values: InformationsClient = validation.data;
    const firstNameChanged = values.firstName !== (client.firstName ?? "");
    const lastNameChanged = values.lastName !== (client.lastName ?? "");
    const emailChanged = values.email !== (client.email ?? "");
    const sexChanged = values.sex !== (client.sex ?? "");
    const birthdayChanged = values.birthday !== (client.birthday?.slice(0, 10) ?? "");
    const clientChanged =
      firstNameChanged ||
      lastNameChanged ||
      emailChanged ||
      sexChanged ||
      birthdayChanged;
    const existingAddress = client.adresses[0];
    const addressChanged =
      values.pays !== (existingAddress?.pays ?? "") ||
      values.ville !== (existingAddress?.ville ?? "") ||
      values.region !== (existingAddress?.region ?? "") ||
      values.adresse !== (existingAddress?.adresse ?? "") ||
      values.codePostal !== (existingAddress?.codePostal ?? "");
    const profileChanged = logo !== null;
    if (!clientChanged && !addressChanged && !profileChanged) return;

    setEnregistrementInfos(true);
    try {
      await executerMutation(async () => {
        if (clientChanged || profileChanged) {
          const form: ClientModification = {
            ...(firstNameChanged ? { firstName: values.firstName || null } : {}),
            ...(lastNameChanged ? { lastName: values.lastName || null } : {}),
            ...(emailChanged ? { email: values.email || null } : {}),
            ...(sexChanged ? { sex: values.sex || null } : {}),
            ...(birthdayChanged
              ? {
                  birthday: values.birthday
                    ? new Date(`${values.birthday}T00:00:00.000Z`).toISOString()
                    : null,
                }
              : {}),
          };
          let profilEnregistre = client.profile;
          if (profileChanged) {
            const resultatClient = await modifierClientAvecLogo(businessId, id, form, logo);
            profilEnregistre = resultatClient.data.profile ?? profilEnregistre;
          } else {
            await modifierClient(businessId, id, form);
          }
          setClient((current) => current ? {
            ...current,
            profile: profilEnregistre ?? current.profile ?? DEFAULT_CLIENT_PROFILE,
          } : current);
          setLogo(null);
        }

        let addressUpdated = existingAddress;
        if (addressChanged) {
          const addressForm: Adresse = {
            pays: values.pays,
            ville: values.ville,
            region: values.region,
            adresse: values.adresse,
            codePostal: values.codePostal,
            clientId: id,
          };
          const result = existingAddress
            ? await modifier_adresse(existingAddress.id, addressForm)
            : await creer_adresse(addressForm);
          if (!result.success) {
            throw new Error(result.message || "La mise à jour de l’adresse a échoué.");
          }
          const addressId = existingAddress?.id ?? result.data?.id;
          if (typeof addressId !== "string") {
            throw new Error("L’adresse a été enregistrée, mais sa référence est introuvable.");
          }
          addressUpdated = {
            id: addressId,
            pays: values.pays,
            ville: values.ville,
            region: values.region,
            adresse: values.adresse,
            codePostal: values.codePostal || null,
          };
        }

        const persistedFirstName = values.firstName;
        const persistedLastName = values.lastName;
        const persistedEmail = values.email;
        const fullName = [persistedFirstName, persistedLastName].filter(Boolean).join(" ");
        setClient((current) => current ? {
          ...current,
          ...(clientChanged ? {
            firstName: persistedFirstName || null,
            lastName: persistedLastName || null,
            fullName: fullName || null,
            email: persistedEmail || null,
            sex: values.sex || null,
            birthday: values.birthday
              ? new Date(`${values.birthday}T00:00:00.000Z`).toISOString()
              : null,
          } : {}),
          adresses: addressUpdated
            ? [addressUpdated, ...current.adresses.slice(1)]
            : current.adresses,
        } : current);
        setFirstName(persistedFirstName);
        setLastName(persistedLastName);
        setEmail(persistedEmail);
        setSex(values.sex);
        setBirthday(values.birthday);
      }, "Les informations du client ont été modifiées.", false);
    } finally {
      setEnregistrementInfos(false);
    }
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

  const renvoyerInvitation = async () => {
    if (!businessId || !client) return;
    setRenvoiEnCours(true);
    try {
      const resultat = await renvoyerInvitationClient(businessId, client.id);
      toast.success(resultat.message);
      await charger();
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Le renvoi de l’invitation a échoué.");
    } finally {
      setRenvoiEnCours(false);
    }
  };

  const informationsModifiees = client !== null && (
    firstName !== (client.firstName ?? "") ||
    lastName !== (client.lastName ?? "") ||
    email !== (client.email ?? "") ||
    sex !== (client.sex ?? "") ||
    birthday !== (client.birthday?.slice(0, 10) ?? "") ||
    logo !== null ||
    pays !== (client.adresses[0]?.pays ?? "") ||
    ville !== (client.adresses[0]?.ville ?? "") ||
    region !== (client.adresses[0]?.region ?? "") ||
    adresse !== (client.adresses[0]?.adresse ?? "") ||
    codePostal !== (client.adresses[0]?.codePostal ?? "")
  );

  const ouvrirCreationContact = () => {
    setContactEdite(null);
    setTypeContact("PHONE");
    setEmailContact("");
    setTelephone("");
    setDialogContact(true);
  };

  const ouvrirModificationContact = (item: ContactClient) => {
    setContactEdite(item);
    setTypeContact(item.type === "EMAIL" ? "EMAIL" : "PHONE");
    setEmailContact(item.email ?? "");
    setTelephone(item.phone ?? "");
    setDialogContact(true);
  };

  const enregistrerContact = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!id) return;
    const form: Contact & { clientId: string } = typeContact === "EMAIL"
      ? { type: "EMAIL", email: emailContact, phone: null, clientId: id }
      : { type: "PHONE", phone: telephone, email: null, clientId: id };
    const success = await executerMutation(async () => {
      const result = contactEdite
        ? await modifier_contact(contactEdite.id, form)
        : await creer_contact(form);
      if (!result.success) throw new Error(result.message || "L’enregistrement du contact a échoué.");
      const contactId = contactEdite?.id ?? result.data?.id;
      if (typeof contactId !== "string") throw new Error("Le contact a été enregistré, mais sa référence est introuvable.");
      const updatedContact: ContactClient = {
        id: contactId,
        type: typeContact,
        label: contactEdite?.label ?? result.data?.label ?? null,
        email: typeContact === "EMAIL" ? emailContact : null,
        phone: typeContact === "PHONE" ? telephone : null,
        status: contactEdite?.status ?? result.data?.status ?? "EN_ATTENTE",
      };
      setClient((current) => current ? {
        ...current,
        contacts: contactEdite
          ? current.contacts.map((item) => item.id === updatedContact.id ? updatedContact : item)
          : [...current.contacts, updatedContact],
      } : current);
    }, contactEdite ? "Le contact a été modifié." : "Le contact a été ajouté.", false);
    if (success) setDialogContact(false);
  };

  const confirmerSuppression = async () => {
    if (!aSupprimer || !businessId) return;
    if (aSupprimer.type === "client") {
      const success = await executerMutation(
        () => supprimerClient(businessId, aSupprimer.id).then(() => undefined),
        "Le client a été supprimé.",
        false,
      );
      if (success) navigate("/clients");
      return;
    }
    const success = await executerMutation(async () => {
      const result = await supprimer_contact(aSupprimer.id);
      if (!result.success) throw new Error(result.message || "La suppression du contact a échoué.");
      setClient((current) => current ? {
        ...current,
        contacts: current.contacts.filter((contact) => contact.id !== aSupprimer.id),
      } : current);
    }, "Le contact a été supprimé.", false);
    if (success) setASupprimer(null);
  };

  if (chargement) return <p className="p-6 text-sm text-muted-foreground">Chargement du client…</p>;
  if (erreur || !client) {
    return (
      <main className="space-y-4 p-6">
        <p role="alert" className="text-destructive">{erreur ?? "Client introuvable."}</p>
        <Link to="/clients" className="inline-flex h-8 items-center rounded-lg border px-3 text-sm hover:bg-muted">
          Retour aux clients
        </Link>
      </main>
    );
  }

  const nomClient = client.fullName || [client.firstName, client.lastName].filter(Boolean).join(" ") || "Client";
  const compteExistant = Boolean(client.userId);
  const imageClient =
    client.userImage ||
    (client.profile && client.profile !== DEFAULT_CLIENT_PROFILE
      ? client.profile
      : "/images/profil-client-par-defaut.svg");
  const paysSelect = items.find((item) => item.value?.toLowerCase() === pays.toLowerCase())?.value ?? null;
  const adresseDuCompte =
    client.adresses.length === 0 && client.userAdresses.length > 0;

  return (
    <main className="space-y-5 p-4 lg:p-6">
      <Link to="/clients" className="inline-flex h-8 w-fit items-center gap-2 rounded-lg px-2.5 text-sm font-medium hover:bg-muted">
        <ArrowLeft className="size-4" /> Retour aux clients
      </Link>
      <header>
        <h1 className="text-2xl font-semibold">{nomClient}</h1>
        <p className="text-sm text-muted-foreground">
          {client.isVerified ? "Client vérifié" : "Invitation en attente de validation"}
        </p>
        {client.isVerified === false &&
          client.invitationExpiresAt &&
          new Date(client.invitationExpiresAt).getTime() <= Date.now() && (
          <Button
            type="button"
            variant="outline"
            className="mt-2"
            onClick={() => void renvoyerInvitation()}
            disabled={renvoiEnCours}
          >
            <Send className="size-4" />
            {renvoiEnCours ? "Envoi…" : "Renvoyer l’invitation"}
          </Button>
        )}
      </header>

      <Tabs defaultValue="activites" className="w-full">
        <TabsList className="h-auto w-full flex-wrap justify-start">
          <TabsTrigger value="activites">Activités</TabsTrigger>
          <TabsTrigger value="informations">Informations</TabsTrigger>
        </TabsList>
        <TabsContent value="activites" className="space-y-3 pt-4">
          <h2 className="text-lg font-medium">Activités du client</h2>
          <p className="rounded-lg border p-5 text-sm text-muted-foreground">
            Les opérations de vente ne sont pas encore associées aux clients dans les données actuelles.
          </p>
        </TabsContent>
        <TabsContent value="informations" className="space-y-4 pt-4">
          <section className="space-y-4 rounded-xl border p-4">
            <div>
              <h2 className="font-semibold">Informations du client</h2>
              <p className="text-sm text-muted-foreground">Identité et adresse principale.</p>
            </div>
            <form onSubmit={enregistrerInformations}>
              <fieldset
                disabled={compteExistant}
                className="m-0 min-w-0 space-y-4 border-0 p-0"
              >
              <div className="space-y-2">
                <span className="text-sm font-medium">Logo du client</span>
                <input
                  ref={inputLogoRef}
                  id="client-profile-logo"
                  type="file"
                  accept="image/jpeg,image/png,image/webp,image/gif"
                  className="sr-only"
                  aria-label="Logo du client"
                  aria-invalid={!!erreurLogo}
                  onChange={(event) => choisirLogo(event.currentTarget.files?.[0])}
                />
                <label
                  htmlFor="client-profile-logo"
                  className="group flex cursor-pointer items-center gap-4 rounded-xl border border-dashed border-border bg-muted/30 p-4 transition-colors hover:border-primary/50 hover:bg-muted/60"
                >
                  <span className="flex size-16 shrink-0 items-center justify-center overflow-hidden rounded-xl border bg-background text-muted-foreground shadow-sm">
                    {logo && apercuLogo ? (
                      <img src={apercuLogo} alt="Aperçu du logo client" className="size-full object-cover" />
                    ) : (
                      <img
                        src={imageClient}
                        alt={client.userImage ? `Photo de ${nomClient}` : "Image par défaut du client"}
                        className="size-full object-cover"
                      />
                    )}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block truncate text-sm font-medium">
                      {logo?.name ?? "Choisir le logo (facultatif)"}
                    </span>
                    <span className="mt-1 block text-xs text-muted-foreground">
                      JPG, PNG, WebP ou GIF · 2 Mo maximum
                    </span>
                  </span>
                  <Upload className="size-4 shrink-0 text-muted-foreground" aria-hidden="true" />
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
                    <X className="size-4" />
                    Annuler le changement de logo
                  </Button>
                )}
                {erreurLogo && <p role="alert" className="text-sm text-destructive">{erreurLogo}</p>}
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block space-y-1 text-sm">
                  <span>Nom</span>
                  <Input value={lastName} onChange={(event) => setLastName(event.currentTarget.value)} placeholder="Nom" aria-invalid={!!erreursFormulaire.lastName} />
                  {erreursFormulaire.lastName && <span className="text-sm text-destructive">{erreursFormulaire.lastName}</span>}
                </label>
                <label className="block space-y-1 text-sm">
                  <span>Prénom</span>
                  <Input value={firstName} onChange={(event) => setFirstName(event.currentTarget.value)} placeholder="Prénom" aria-invalid={!!erreursFormulaire.firstName} />
                  {erreursFormulaire.firstName && <span className="text-sm text-destructive">{erreursFormulaire.firstName}</span>}
                </label>
              </div>
              <label className="block space-y-1 text-sm">
                <span>E-mail</span>
                <Input
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.currentTarget.value)}
                  placeholder="Adresse e-mail"
                  aria-invalid={!!erreursFormulaire.email}
                  disabled={!!client.userId}
                  aria-describedby={client.userId ? "client-email-aide" : undefined}
                />
                {client.userId && (
                  <span id="client-email-aide" className="text-xs text-muted-foreground">
                    Cette adresse provient du compte utilisateur rattaché.
                  </span>
                )}
                {erreursFormulaire.email && <span className="text-sm text-destructive">{erreursFormulaire.email}</span>}
              </label>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block space-y-1 text-sm">
                  <span>Sexe</span>
                  <Select
                    value={sex || null}
                    onValueChange={(value) =>
                      setSex(value === "HOMME" || value === "FEMME" ? value : "")
                    }
                  >
                    <SelectTrigger className="w-full" aria-label="Sexe">
                      <SelectValue placeholder="Sélectionner" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="HOMME">Homme</SelectItem>
                        <SelectItem value="FEMME">Femme</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </label>
                <label className="block space-y-1 text-sm">
                  <span>Date de naissance</span>
                  <Input
                    type="date"
                    value={birthday}
                    max={new Date().toISOString().slice(0, 10)}
                    onChange={(event) => setBirthday(event.currentTarget.value)}
                    aria-invalid={!!erreursFormulaire.birthday}
                  />
                  {erreursFormulaire.birthday && (
                    <span className="text-sm text-destructive">
                      {erreursFormulaire.birthday}
                    </span>
                  )}
                </label>
              </div>
              <div className="space-y-3">
                <h3 className="text-sm font-medium">Adresse</h3>
                <p className="text-sm text-muted-foreground">
                  {compteExistant
                    ? "Les informations de ce compte utilisateur sont en lecture seule."
                    : adresseDuCompte
                    ? "Pré-remplie depuis le compte utilisateur rattaché. L’enregistrer en crée une copie propre à votre business."
                    : "Indiquez l’adresse principale du client."}
                </p>
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="block space-y-1 text-sm">
                    <span>Pays</span>
                    <Select value={paysSelect} onValueChange={(value) => setPays(value ?? "")}>
                      <SelectTrigger className="w-full" aria-label="Pays">
                        <SelectValue placeholder="Sélectionner un pays" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          {items.filter((item) => item.value !== null).map((item) => (
                            <SelectItem key={item.value} value={item.value}>{item.label}</SelectItem>
                          ))}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </label>
                  <label className="block space-y-1 text-sm">
                    <span>Ville</span>
                    <Input value={ville} onChange={(event) => setVille(event.currentTarget.value)} placeholder="Ville" />
                  </label>
                  <label className="block space-y-1 text-sm">
                    <span>Région / Commune</span>
                    <Input value={region} onChange={(event) => setRegion(event.currentTarget.value)} placeholder="Région / Commune" />
                  </label>
                  <label className="block space-y-1 text-sm">
                    <span>Adresse</span>
                    <Input value={adresse} onChange={(event) => setAdresse(event.currentTarget.value)} placeholder="Adresse" />
                  </label>
                  <label className="col-span-full block space-y-1 text-sm">
                    <span>Code postal (optionnel)</span>
                    <Input value={codePostal} onChange={(event) => setCodePostal(event.currentTarget.value)} placeholder="Code postal" />
                  </label>
                </div>
              </div>
              <div className="flex justify-end">
                <Button
                  type="submit"
                  disabled={compteExistant || enCours || !informationsModifiees || !!erreurLogo}
                >
                  {enregistrementInfos && <Loader2 className="size-4 animate-spin" aria-hidden="true" />}
                  Personnaliser
                </Button>
              </div>
              </fieldset>
            </form>
          </section>

          <section className="space-y-4 rounded-xl border p-4">
            {compteExistant ? (
              <>
                <div>
                  <h2 className="font-semibold">Contacts de l’utilisateur invité</h2>
                  <p className="text-sm text-muted-foreground">
                    Coordonnées renseignées sur son compte. Elles ne sont pas
                    modifiables depuis votre business.
                  </p>
                </div>
                {client.userContacts.length > 0 ? (
                  <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                    {client.userContacts.map((item) => (
                      <li
                        key={item.id}
                        className="flex items-center justify-between gap-3 rounded-lg border border-dashed bg-muted/30 p-3"
                      >
                        <span className="flex min-w-0 items-center gap-2 text-sm">
                          {item.type === "EMAIL" ? <Mail className="size-4 shrink-0" /> : <Phone className="size-4 shrink-0" />}
                          <span className="truncate">{item.email || item.phone || item.label || "Contact"}</span>
                        </span>
                        {item.status === "VERIFIE" && (
                          <span className="shrink-0 text-xs text-muted-foreground">Vérifié</span>
                        )}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-sm text-muted-foreground">
                    Aucun contact n’est renseigné sur ce compte utilisateur.
                  </p>
                )}
              </>
            ) : (
              <>
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h2 className="font-semibold">Contacts</h2>
                    <p className="text-sm text-muted-foreground">Coordonnées téléphoniques et e-mail du client.</p>
                  </div>
                  <Button
                    variant="outline"
                    className="border"
                    onClick={ouvrirCreationContact}
                    disabled={client.contacts.length >= 3}
                  >
                    <Plus /> Ajouter
                  </Button>
                </div>
                {client.contacts.length >= 3 && (
                  <p className="text-sm text-muted-foreground">Le client a atteint la limite de trois contacts.</p>
                )}
                {client.contacts.length ? (
                  <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                    {client.contacts.map((item) => (
                      <li key={item.id} className="flex items-center justify-between gap-3 rounded-lg border p-3">
                        <span className="flex min-w-0 items-center gap-2 text-sm">
                          {item.type === "EMAIL" ? <Mail className="size-4 shrink-0" /> : <Phone className="size-4 shrink-0" />}
                          <span className="truncate">{item.email || item.phone || item.label || "Contact"}</span>
                        </span>
                        <div className="flex shrink-0 gap-1">
                          <Button variant="ghost" size="icon" className="border" aria-label="Modifier le contact" onClick={() => ouvrirModificationContact(item)}><Pencil /></Button>
                          <Button variant="ghost" size="icon" className="border text-destructive" aria-label="Supprimer le contact" onClick={() => setASupprimer({ type: "contact", id: item.id, label: item.email || item.phone || item.label || "ce contact" })}><Trash2 /></Button>
                        </div>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-sm text-muted-foreground">Aucun contact renseigné.</p>
                )}
              </>
            )}
          </section>

          <section className="space-y-4 rounded-xl border border-destructive/30 p-4">
            <div>
              <h2 className="font-semibold">Zone de danger</h2>
              <p className="text-sm text-muted-foreground">La suppression retirera définitivement ce client du business.</p>
            </div>
            <Button
              variant="destructive"
              className="border border-destructive"
              disabled={enCours}
              onClick={() => setASupprimer({ type: "client", id: client.id, label: nomClient })}
            >
              <Trash2 /> Supprimer le client
            </Button>
          </section>
        </TabsContent>
      </Tabs>

      {!compteExistant && <Dialog open={dialogContact} onOpenChange={setDialogContact}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{contactEdite ? "Modifier le contact" : "Ajouter un contact"}</DialogTitle>
            <DialogDescription>Ajoutez un numéro de téléphone ou une adresse e-mail.</DialogDescription>
          </DialogHeader>
          <form onSubmit={enregistrerContact} className="space-y-3">
            <label className="block space-y-1 text-sm">
              <span>Type</span>
              <select
                className="h-9 w-full rounded-lg border border-input bg-background px-3"
                value={typeContact}
                onChange={(event) => setTypeContact(event.currentTarget.value as "PHONE" | "EMAIL")}
              >
                <option value="PHONE">Téléphone</option>
                <option value="EMAIL">E-mail</option>
              </select>
            </label>
            {typeContact === "EMAIL" ? (
              <Input type="email" value={emailContact} onChange={(event) => setEmailContact(event.currentTarget.value)} placeholder="Adresse e-mail" required />
            ) : (
              <label className="block space-y-1 text-sm">
                <span>Numéro de téléphone</span>
                <Input type="tel" value={telephone} onChange={(event) => setTelephone(event.currentTarget.value)} placeholder="Téléphone (+243…)" required />
              </label>
            )}
            <DialogFooter>
              <Button type="button" variant="outline" onClick={() => setDialogContact(false)}>Annuler</Button>
              <Button type="submit" disabled={enCours}>
                {enCours && <Loader2 className="size-4 animate-spin" aria-hidden="true" />}
                {contactEdite ? "Enregistrer" : "Ajouter"}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>}

      <AlertDialog
        open={aSupprimer !== null}
        onOpenChange={(open) => {
          if (!open && !enCours) setASupprimer(null);
        }}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Confirmer la suppression</AlertDialogTitle>
            <AlertDialogDescription>
              {aSupprimer?.type === "client"
                ? `Le client « ${aSupprimer.label} » sera supprimé.`
                : `Le contact « ${aSupprimer?.label} » sera supprimé.`} Cette action est irréversible.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel disabled={enCours}>Annuler</AlertDialogCancel>
            <AlertDialogAction variant="destructive" disabled={enCours} onClick={() => void confirmerSuppression()}>
              {enCours ? "Suppression…" : "Supprimer"}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </main>
  );
}

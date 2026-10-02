"use client";

import { useCallback, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router";
import { toast } from "sonner";
import { z } from "zod";
import {
  ArrowLeft,
  Loader2,
  Mail,
  Pencil,
  Phone,
  Plus,
  Send,
  Trash2,
} from "lucide-react";

import {
  lireFournisseur,
  modifierFournisseur,
  renvoyerInvitationFournisseur,
  supprimerFournisseur,
  type FournisseurDetail,
} from "@/lib/api/business";
import {
  creer_adresse,
  creer_contact,
  modifier_adresse,
  modifier_contact,
  supprimer_contact,
} from "@/lib/apis";
import { useBusiness } from "@/lib/business-context";
import type { Adresse, Contact, Fournisseur } from "@/lib/validations";
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
import { items } from "@/lib/utils";
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

type ContactFournisseur = FournisseurDetail["contacts"][number];
const InformationsFournisseurSchema = z.object({
  nom: z.string().trim().min(4, "Le nom doit contenir au moins 4 caractères.").max(50, "Le nom ne peut pas dépasser 50 caractères."),
  email: z.union([z.literal(""), z.email("L’adresse e-mail est invalide.")]),
  website: z.union([z.literal(""), z.url("L’adresse du site web est invalide.")]),
  pays: z.string().max(50, "Le pays ne peut pas dépasser 50 caractères."),
  ville: z.string().max(50, "La ville ne peut pas dépasser 50 caractères."),
  region: z.string().max(50, "La région ne peut pas dépasser 50 caractères."),
  adresse: z.string().max(50, "L’adresse ne peut pas dépasser 50 caractères."),
  codePostal: z.string().max(20, "Le code postal ne peut pas dépasser 20 caractères."),
});
type InformationsFournisseur = z.infer<typeof InformationsFournisseurSchema>;
type SuppressionCible =
  | { type: "fournisseur"; id: string; label: string }
  | { type: "contact"; id: string; label: string };

export default function DetailFournisseur() {
  const { businessId } = useBusiness();
  const { id } = useParams();
  const navigate = useNavigate();
  const [fournisseur, setFournisseur] = useState<FournisseurDetail | null>(null);
  const [chargement, setChargement] = useState(true);
  const [erreur, setErreur] = useState<string | null>(null);
  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [adresse, setAdresse] = useState("");
  const [ville, setVille] = useState("");
  const [region, setRegion] = useState("");
  const [pays, setPays] = useState("");
  const [codePostal, setCodePostal] = useState("");
  const [erreursFormulaire, setErreursFormulaire] = useState<Record<string, string>>({});
  const [telephone, setTelephone] = useState("");
  const [contactEdite, setContactEdite] = useState<ContactFournisseur | null>(null);
  const [dialogContact, setDialogContact] = useState(false);
  const [aSupprimer, setASupprimer] = useState<SuppressionCible | null>(null);
  const [enCours, setEnCours] = useState(false);
  const [enregistrementInfos, setEnregistrementInfos] = useState(false);

  const charger = useCallback(async () => {
    if (!businessId || !id) return;
    setChargement(true);
    setErreur(null);
    try {
      const resultat = await lireFournisseur(businessId, id);
      setFournisseur(resultat);
      setNom(resultat.nom ?? "");
      setEmail(resultat.email ?? "");
      setWebsite(resultat.website ?? "");
      setPays(resultat.adresses[0]?.pays ?? "");
      setVille(resultat.adresses[0]?.ville ?? "");
      setRegion(resultat.adresses[0]?.region ?? "");
      setAdresse(resultat.adresses[0]?.adresse ?? "");
      setCodePostal(resultat.adresses[0]?.codePostal ?? "");
    } catch (error) {
      setErreur(
        error instanceof Error
          ? error.message
          : "Impossible de charger le fournisseur."
      );
    } finally {
      setChargement(false);
    }
  }, [businessId, id]);

  useEffect(() => {
    void charger();
  }, [charger]);

  const executerMutation = async (
    operation: () => Promise<unknown>,
    succes: string,
    afficherSucces = true,
    afficherErreur = true,
    rafraichir = true
  ) => {
    setEnCours(true);
    try {
      await operation();
      if (afficherSucces) toast.success(succes);
      if (rafraichir) await charger();
      return true;
    } catch (error) {
      if (afficherErreur) {
        toast.error(
          error instanceof Error ? error.message : "L’opération a échoué."
        );
      }
      return false;
    } finally {
      setEnCours(false);
    }
  };

  const enregistrerInfos = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!businessId || !id || !fournisseur) return;
    const validation = InformationsFournisseurSchema.safeParse({
      nom,
      email,
      website,
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
    const valeurs = validation.data;
    const nomModifie = valeurs.nom !== (fournisseur.nom ?? "");
    const emailModifie = valeurs.email !== (fournisseur.email ?? "");
    const websiteModifie = valeurs.website !== (fournisseur.website ?? "");
    const fournisseurModifie = nomModifie || emailModifie || websiteModifie;
    const adresseExistante = fournisseur.adresses[0];
    const adresseModifiee =
      valeurs.pays !== (adresseExistante?.pays ?? "") ||
      valeurs.ville !== (adresseExistante?.ville ?? "") ||
      valeurs.region !== (adresseExistante?.region ?? "") ||
      valeurs.adresse !== (adresseExistante?.adresse ?? "") ||
      valeurs.codePostal !== (adresseExistante?.codePostal ?? "");

    setEnregistrementInfos(true);
    try {
      await executerMutation(
        async () => {
        if (fournisseurModifie) {
          const fournisseurForm: Fournisseur = {
            ...(nomModifie ? { nom: valeurs.nom } : {}),
            ...(emailModifie ? { email: valeurs.email } : {}),
            ...(websiteModifie ? { website: valeurs.website } : {}),
          };
          await modifierFournisseur(businessId, id, fournisseurForm);
        }

        let adresseMiseAJour = adresseExistante;
        if (adresseModifiee) {
          const adresseForm: Adresse = {
            pays: valeurs.pays,
            ville: valeurs.ville,
            region: valeurs.region,
            adresse: valeurs.adresse,
            codePostal: valeurs.codePostal,
            fournisseurId: id,
          };
          const resultatAdresse = adresseExistante
            ? await modifier_adresse(adresseExistante.id, adresseForm)
            : await creer_adresse(adresseForm);
          if (!resultatAdresse.success) {
            throw new Error(resultatAdresse.message || "La mise à jour de l’adresse a échoué.");
          }
          const adresseId = adresseExistante?.id ?? resultatAdresse.data?.id;
          if (typeof adresseId !== "string") {
            throw new Error("L’adresse a été enregistrée, mais sa référence est introuvable.");
          }
          adresseMiseAJour = {
            id: adresseId,
            pays: valeurs.pays,
            ville: valeurs.ville,
            region: valeurs.region,
            adresse: valeurs.adresse,
            codePostal: valeurs.codePostal || null,
          };
        }

        setFournisseur((courant) => courant ? {
          ...courant,
          ...(fournisseurModifie
            ? {
                nom: valeurs.nom,
                email: valeurs.email || null,
                website: valeurs.website || null,
              }
            : {}),
          adresses: adresseMiseAJour
            ? [adresseMiseAJour, ...courant.adresses.slice(1)]
            : courant.adresses,
        } : courant);
        },
        "Les informations du fournisseur ont été modifiées.",
        true,
        true,
        false
      );
    } finally {
      setEnregistrementInfos(false);
    }
  };

  const informationsModifiees = fournisseur !== null && (
    nom !== (fournisseur.nom ?? "") ||
    email !== (fournisseur.email ?? "") ||
    website !== (fournisseur.website ?? "") ||
    pays !== (fournisseur.adresses[0]?.pays ?? "") ||
    ville !== (fournisseur.adresses[0]?.ville ?? "") ||
    region !== (fournisseur.adresses[0]?.region ?? "") ||
    adresse !== (fournisseur.adresses[0]?.adresse ?? "") ||
    codePostal !== (fournisseur.adresses[0]?.codePostal ?? "")
  );

  const ouvrirCreationContact = () => {
    setContactEdite(null);
    setTelephone("");
    setDialogContact(true);
  };

  const ouvrirModificationContact = (item: ContactFournisseur) => {
    setContactEdite(item);
    setTelephone(item.phone ?? "");
    setDialogContact(true);
  };

  const enregistrerContact = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!id) return;
    const form: Contact & { fournisseurId: string } = {
      type: "PHONE",
      phone: telephone,
      email: null,
      fournisseurId: id,
    };
    const enregistre = await executerMutation(
      async () => {
        const resultat = contactEdite
          ? await modifier_contact(contactEdite.id, form)
          : await creer_contact(form);
        if (!resultat.success) throw new Error(resultat.message);
        const contactId = contactEdite?.id ?? resultat.data?.id;
        if (typeof contactId !== "string") {
          throw new Error("Le contact a été enregistré, mais sa référence est introuvable.");
        }
        const contactMisAJour: ContactFournisseur = {
          id: contactId,
          type: "PHONE",
          label: contactEdite?.label ?? resultat.data?.label ?? null,
          email: null,
          phone: telephone,
          status: contactEdite?.status ?? resultat.data?.status ?? "EN_ATTENTE",
        };
        setFournisseur((courant) => {
          if (!courant) return courant;
          const contacts = contactEdite
            ? courant.contacts.map((contact) =>
                contact.id === contactMisAJour.id ? contactMisAJour : contact
              )
            : [...courant.contacts, contactMisAJour];
          return { ...courant, contacts };
        });
      },
      contactEdite ? "Le contact a été modifié." : "Le contact a été ajouté.",
      true,
      true,
      false
    );
    if (enregistre) setDialogContact(false);
  };

  const confirmerSuppression = async () => {
    if (!aSupprimer) return;
    if (aSupprimer.type === "fournisseur" && businessId) {
      const supprime = await executerMutation(
        () => supprimerFournisseur(businessId, aSupprimer.id),
        "Le fournisseur a été supprimé.",
        false,
        false
      );
      if (supprime) navigate("/fournisseurs");
    } else if (aSupprimer.type === "contact") {
      const supprime = await executerMutation(
        async () => {
          const resultat = await supprimer_contact(aSupprimer.id);
          if (!resultat.success) throw new Error(resultat.message || "La suppression du contact a échoué.");
          setFournisseur((courant) => courant
            ? {
                ...courant,
                contacts: courant.contacts.filter((contact) => contact.id !== aSupprimer.id),
              }
            : courant);
        },
        "Le contact a été supprimé.",
        true,
        true,
        false
      );
      if (supprime) setASupprimer(null);
    }
  };

  if (chargement) {
    return <p className="p-6 text-sm text-muted-foreground">Chargement du fournisseur…</p>;
  }
  if (erreur || !fournisseur) {
    return (
      <main className="space-y-4 p-6">
        <p role="alert" className="text-destructive">
          {erreur ?? "Fournisseur introuvable."}
        </p>
        <Link
          to="/fournisseurs"
          className="inline-flex h-8 items-center rounded-lg border px-3 text-sm hover:bg-muted"
        >
          Retour aux fournisseurs
        </Link>
      </main>
    );
  }

  const invitationExpiree =
    fournisseur.invitationExpiresAt !== null &&
    fournisseur.invitationExpiresAt !== undefined &&
    new Date(fournisseur.invitationExpiresAt).getTime() <= Date.now();

  return (
    <main className="space-y-5 p-4 lg:p-6">
      <Link
        to="/fournisseurs"
        className="inline-flex h-8 w-fit items-center gap-2 rounded-lg px-2.5 text-sm font-medium hover:bg-muted"
      >
        <ArrowLeft className="size-4" /> Retour aux fournisseurs
      </Link>
      <header>
        <h1 className="text-2xl font-semibold">{fournisseur.nom || "Fournisseur"}</h1>
        <p className="text-sm text-muted-foreground">
          {fournisseur.isVerified
            ? "Fournisseur vérifié"
            : "Invitation en attente de validation"}
        </p>
      </header>

      <Tabs defaultValue="activites" className="w-full">
        <TabsList className="h-auto w-full flex-wrap justify-start">
          <TabsTrigger value="activites">Activités</TabsTrigger>
          <TabsTrigger value="informations">Informations</TabsTrigger>
        </TabsList>

        <TabsContent value="activites" className="space-y-3 pt-4">
          <h2 className="text-lg font-medium">Activités du fournisseur</h2>
          {fournisseur.details.length === 0 ? (
            <p className="rounded-lg border p-5 text-sm text-muted-foreground">
              Aucune activité d’achat enregistrée.
            </p>
          ) : (
            <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
              {fournisseur.details.map((detail) => (
                <li key={detail.id} className="rounded-lg border p-4">
                  <p className="font-medium">{detail.article.designation}</p>
                  <p className="text-sm text-muted-foreground">
                    {detail.qtte} unité(s) · {detail.pu} {detail.devise.symbole} / unité · Total{" "}
                    {detail.pt} {detail.devise.symbole}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {new Date(
                      detail.achat?.dateAchat ?? detail.createdAt
                    ).toLocaleString("fr-FR")}
                    {detail.achat
                      ? ` · Achat ${detail.achat.status.toLowerCase()}`
                      : ""}
                  </p>
                </li>
              ))}
            </ul>
          )}
        </TabsContent>

        <TabsContent value="informations" className="space-y-4 pt-4">
          <section className="space-y-4 rounded-xl border p-4">
            <div>
              <h2 className="font-semibold">Informations du fournisseur</h2>
              <p className="text-sm text-muted-foreground">
                Coordonnées et identité du fournisseur.
              </p>
            </div>
            <form onSubmit={enregistrerInfos} className="space-y-4">
              <label className="block space-y-1 text-sm">
                <span>Nom</span>
                <Input value={nom} onChange={(event) => setNom(event.currentTarget.value)} placeholder="Nom du fournisseur" required aria-invalid={!!erreursFormulaire.nom} />
                {erreursFormulaire.nom && <span className="text-sm text-destructive">{erreursFormulaire.nom}</span>}
              </label>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block space-y-1 text-sm">
                  <span>E-mail</span>
                  <Input type="email" value={email} onChange={(event) => setEmail(event.currentTarget.value)} placeholder="Adresse e-mail" aria-invalid={!!erreursFormulaire.email} />
                  {erreursFormulaire.email && <span className="text-sm text-destructive">{erreursFormulaire.email}</span>}
                </label>
                <label className="block space-y-1 text-sm">
                  <span>Site web</span>
                  <Input type="url" value={website} onChange={(event) => setWebsite(event.currentTarget.value)} placeholder="https://exemple.com" aria-invalid={!!erreursFormulaire.website} />
                  {erreursFormulaire.website && <span className="text-sm text-destructive">{erreursFormulaire.website}</span>}
                </label>
              </div>
              <div className="space-y-3">
                <h3 className="text-sm font-medium">Adresse</h3>
                <p className="text-sm text-muted-foreground">
                  Indiquez l’adresse principale du fournisseur.
                </p>
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="block space-y-1 text-sm">
                    <span>Pays</span>
                    <Select value={pays || null} onValueChange={(value) => setPays(value ?? "")}>
                      <SelectTrigger className="w-full" aria-label="Pays">
                        <SelectValue placeholder="Sélectionner un pays" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          {items.filter((item) => item.value !== null).map((item) => (
                            <SelectItem key={item.value} value={item.value}>
                              {item.label}
                            </SelectItem>
                          ))}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                    {erreursFormulaire.pays && <span className="text-sm text-destructive">{erreursFormulaire.pays}</span>}
                  </label>
                  <label className="block space-y-1 text-sm">
                    <span>Ville</span>
                    <Input value={ville} onChange={(event) => setVille(event.currentTarget.value)} placeholder="Ville" aria-invalid={!!erreursFormulaire.ville} />
                    {erreursFormulaire.ville && <span className="text-sm text-destructive">{erreursFormulaire.ville}</span>}
                  </label>
                  <label className="block space-y-1 text-sm">
                    <span>Région / Commune</span>
                    <Input value={region} onChange={(event) => setRegion(event.currentTarget.value)} placeholder="Région / Commune" aria-invalid={!!erreursFormulaire.region} />
                    {erreursFormulaire.region && <span className="text-sm text-destructive">{erreursFormulaire.region}</span>}
                  </label>
                  <label className="block space-y-1 text-sm">
                    <span>Adresse</span>
                    <Input value={adresse} onChange={(event) => setAdresse(event.currentTarget.value)} placeholder="Adresse" aria-invalid={!!erreursFormulaire.adresse} />
                    {erreursFormulaire.adresse && <span className="text-sm text-destructive">{erreursFormulaire.adresse}</span>}
                  </label>
                  <label className="col-span-full block space-y-1 text-sm">
                    <span>Code postal (optionnel)</span>
                    <Input value={codePostal} onChange={(event) => setCodePostal(event.currentTarget.value)} placeholder="Code postal" aria-invalid={!!erreursFormulaire.codePostal} />
                    {erreursFormulaire.codePostal && <span className="text-sm text-destructive">{erreursFormulaire.codePostal}</span>}
                  </label>
                </div>
              </div>
              <div className="flex justify-end">
                <Button type="submit" disabled={enCours || !informationsModifiees}>
                  {enregistrementInfos && <Loader2 className="size-4 animate-spin" aria-hidden="true" />}
                  Personnaliser
                </Button>
              </div>
            </form>
          </section>

          <section className="space-y-4 rounded-xl border p-4">
            <div className="flex items-start justify-between gap-3">
              <div>
                <h2 className="font-semibold">Contacts</h2>
                <p className="text-sm text-muted-foreground">
                  Ajoutez jusqu’à deux contacts pour joindre le fournisseur.
                </p>
              </div>
              {fournisseur.contacts.length < 2 && (
                <Button variant="outline" className="border" onClick={ouvrirCreationContact}>
                <Plus /> Ajouter
                </Button>
              )}
            </div>
            {fournisseur.contacts.length ? (
              <ul className="grid grid-cols-2 gap-2">
                {fournisseur.contacts.map((item) => (
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
          </section>

          <section className="space-y-4 rounded-xl border p-4">
            <div>
            <h2 className="font-semibold">Zone de danger</h2>
            <p className="text-sm text-muted-foreground">
              La suppression du fournisseur supprimera également toutes ses opérations.
            </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {!fournisseur.isVerified && invitationExpiree && (
                <Button
                  variant="outline"
                  className="border"
                  disabled={enCours}
                  onClick={() =>
                    void executerMutation(
                      () =>
                        renvoyerInvitationFournisseur(
                          businessId!,
                          fournisseur.id
                        ),
                      "Le courriel d’invitation a été renvoyé.",
                      false,
                      false
                    )
                  }
                >
                  <Send /> Renvoyer l’invitation
                </Button>
              )}
              {!fournisseur.isVerified && !invitationExpiree && (
                <p className="self-center text-sm text-muted-foreground">
                  L’invitation n’a pas encore expiré.
                </p>
              )}
              <Button
                variant="destructive"
                className="border border-destructive"
                disabled={enCours}
                onClick={() =>
                  setASupprimer({
                    type: "fournisseur",
                    id: fournisseur.id,
                    label: fournisseur.nom || "ce fournisseur",
                  })
                }
              >
                <Trash2 /> Supprimer le fournisseur
              </Button>
            </div>
          </section>
        </TabsContent>
      </Tabs>

      <Dialog open={dialogContact} onOpenChange={setDialogContact}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{contactEdite ? "Modifier le contact" : "Ajouter un contact"}</DialogTitle>
            <DialogDescription>Ajoutez une adresse e-mail ou un numéro de téléphone.</DialogDescription>
          </DialogHeader>
          <form onSubmit={enregistrerContact} className="space-y-3">
            <label className="block space-y-1 text-sm">
              <span>Numéro de téléphone</span>
              <Input
                type="tel"
                value={telephone}
                onChange={(event) => setTelephone(event.currentTarget.value)}
                placeholder="Téléphone (+243…)"
                required
              />
            </label>
            <DialogFooter>
              <Button type="button" variant="outline" onClick={() => setDialogContact(false)}>Annuler</Button>
              <Button type="submit" disabled={enCours}>
                {enCours && <Loader2 className="size-4 animate-spin" aria-hidden="true" />}
                {contactEdite ? "Enregistrer" : "Ajouter"}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

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
              {aSupprimer?.type === "fournisseur"
                ? `Le fournisseur « ${aSupprimer.label} » sera supprimé.`
                : `Le contact « ${aSupprimer?.label} » sera supprimé.`}
              {" "}Cette action est irréversible.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel disabled={enCours}>Annuler</AlertDialogCancel>
            <AlertDialogAction
              variant="destructive"
              disabled={enCours}
              onClick={() => void confirmerSuppression()}
            >
              {enCours ? "Suppression…" : "Supprimer"}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </main>
  );
}

"use client"

import { useCallback, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router";
import { toast } from "sonner";
import {
  ArrowLeft,
  BanIcon,
  CheckCircle2Icon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
  SendIcon,
  Trash2Icon,
} from "lucide-react";

import { useBusiness } from "@/lib/business-context";
import {
  activerAgent,
  bloquerAgent,
  lireAgent,
  renvoyerInvitationAgent,
  supprimerAgent,
  type AgentDetail,
} from "@/lib/api/business";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AvatarRessource } from "@/components/ressource/avatar-ressource";
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
import { Input } from "@/components/ui/input";

function nomAgent(agent: AgentDetail) {
  return agent.fullName?.trim() || agent.email?.trim() || "Travailleur sans nom";
}

export default function DetailTravailleur() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { businessId } = useBusiness();

  const [agent, setAgent] = useState<AgentDetail | null>(null);
  const [chargement, setChargement] = useState(true);
  const [erreur, setErreur] = useState<string | null>(null);
  const [suppressionOuverte, setSuppressionOuverte] = useState(false);
  const [changementStatutOuvert, setChangementStatutOuvert] = useState(false);
  const [enCours, setEnCours] = useState(false);

  const charger = useCallback(async () => {
    if (!businessId || !id) return;
    setChargement(true);
    setErreur(null);
    try {
      setAgent(await lireAgent(businessId, id));
    } catch (error) {
      setErreur(
        error instanceof Error ? error.message : "Travailleur introuvable."
      );
    } finally {
      setChargement(false);
    }
  }, [businessId, id]);

  useEffect(() => {
    void charger();
  }, [charger]);

  const changerStatut = async () => {
    if (!agent || !businessId) return;
    const bloquer = agent.status === "ACTIF";
    setEnCours(true);
    try {
      await toast
        .promise(
          bloquer ? bloquerAgent(businessId, agent.id) : activerAgent(businessId, agent.id),
          {
            loading: bloquer ? "Blocage…" : "Réactivation…",
            success: ({ message }) => {
              setAgent({ ...agent, status: bloquer ? "BLOQUE" : "ACTIF" });
              return message;
            },
            error: (e: Error) => e.message,
          }
        )
        .unwrap();
    } finally {
      setEnCours(false);
    }
  };

  const renvoyerInvitation = async () => {
    if (!agent || !businessId) return;
    setEnCours(true);
    try {
      const resultat = await renvoyerInvitationAgent(businessId, agent.id);
      toast.success(resultat.message);
      await charger();
    } catch (error) {
      toast.error(
        error instanceof Error ? error.message : "Le renvoi de l’invitation a échoué."
      );
    } finally {
      setEnCours(false);
    }
  };

  const confirmerSuppression = async () => {
    if (!agent || !businessId) return;
    setEnCours(true);
    try {
      await toast
        .promise(supprimerAgent(businessId, agent.id), {
          loading: "Retrait…",
          success: ({ message }) => message,
          error: (e: Error) => e.message,
        })
        .unwrap();
      navigate("/travailleurs");
    } finally {
      setEnCours(false);
    }
  };

  if (chargement) {
    return (
      <p className="p-6 text-sm text-muted-foreground">Chargement du travailleur…</p>
    );
  }

  if (erreur || !agent) {
    return (
      <main className="space-y-4 p-6">
        <p role="alert" className="text-destructive">
          {erreur ?? "Travailleur introuvable."}
        </p>
        <Link
          to="/travailleurs"
          className="inline-flex h-8 items-center rounded-lg border px-3 text-sm hover:bg-muted"
        >
          Retour aux travailleurs
        </Link>
      </main>
    );
  }

  const adressePrincipale = agent.adresses[0] ?? null;
  const autresAdresses = agent.adresses.slice(1);

  const invitationExpiree =
    !agent.isVerified &&
    agent.invitationExpiresAt !== null &&
    new Date(agent.invitationExpiresAt).getTime() <= Date.now();

  return (
    <main className="space-y-5 p-4 lg:p-6">
      <Link
        to="/travailleurs"
        className="inline-flex h-8 w-fit items-center gap-2 rounded-lg px-2.5 text-sm font-medium hover:bg-muted"
      >
        <ArrowLeft className="size-4" /> Retour aux travailleurs
      </Link>

      <header className="flex flex-wrap items-start justify-between gap-4">
        <div className="flex items-center gap-4">
          <AvatarRessource
            src={agent.userImage}
            nom={nomAgent(agent)}
            className="size-14"
            classNameTexte="text-lg"
          />
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <h1 className="text-2xl font-semibold">{nomAgent(agent)}</h1>
              <Badge variant={agent.status === "ACTIF" ? "secondary" : "destructive"}>
                {agent.status === "ACTIF" ? "Actif" : "Bloqué"}
              </Badge>
            </div>
            <p className="text-sm text-muted-foreground">
              {agent.isVerified
                ? `Dans l’équipe depuis le ${new Date(agent.createdAt).toLocaleDateString("fr-FR")}`
                : "Invitation en attente de validation"}
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {invitationExpiree && (
            <Button
              type="button"
              variant="outline"
              onClick={() => void renvoyerInvitation()}
              disabled={enCours}
            >
              <SendIcon className="size-4" />
              Renvoyer l’invitation
            </Button>
          )}
          <Button
            type="button"
            variant="outline"
            onClick={() => {
              setChangementStatutOuvert(true);
            }}
            disabled={enCours}
          >
            {agent.status === "ACTIF" ? (
              <>
                <BanIcon className="size-4" />
                Bloquer
              </>
            ) : (
              <>
                <CheckCircle2Icon className="size-4" />
                Réactiver
              </>
            )}
          </Button>
          <Button
            type="button"
            variant="outline"
            className="border-destructive/30 text-destructive hover:bg-destructive/10 hover:text-destructive"
            onClick={() => setSuppressionOuverte(true)}
            disabled={enCours}
          >
            <Trash2Icon className="size-4" />
            Retirer
          </Button>
        </div>
      </header>

      <div className="space-y-4">
          <section className="space-y-4 rounded-xl border p-4">
            <div className="flex items-center gap-4">
              <AvatarRessource src={agent.userImage} nom={nomAgent(agent)} />
              <div>
                <h2 className="font-semibold">Identité</h2>
                <p className="text-sm text-muted-foreground">
                  Ces informations proviennent du compte utilisateur et ne sont pas
                  modifiables depuis votre business.
                </p>
              </div>
            </div>
            <dl className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <dt className="text-sm text-muted-foreground">Nom complet</dt>
                <dd className="font-medium">{agent.fullName || "—"}</dd>
              </div>
              <div>
                <dt className="text-sm text-muted-foreground">E-mail</dt>
                <dd className="font-medium">{agent.email || "—"}</dd>
              </div>
              <div>
                <dt className="text-sm text-muted-foreground">Date de naissance</dt>
                <dd className="font-medium">
                  {agent.birthday
                    ? new Date(agent.birthday).toLocaleDateString("fr-FR")
                    : "—"}
                </dd>
              </div>
              <div>
                <dt className="text-sm text-muted-foreground">Membre depuis</dt>
                <dd className="font-medium">
                  {new Date(agent.createdAt).toLocaleDateString("fr-FR")}
                </dd>
              </div>
              {agent.bio && (
                <div className="sm:col-span-2">
                  <dt className="text-sm text-muted-foreground">Bio</dt>
                  <dd>{agent.bio}</dd>
                </div>
              )}
            </dl>
          </section>

          <section className="space-y-3 rounded-xl border p-4">
            <div>
              <h2 className="font-semibold">Adresse</h2>
              <p className="text-sm text-muted-foreground">
                {adressePrincipale
                  ? "Renseignée par la personne sur son compte. Elle n’est pas modifiable depuis votre business."
                  : "Aucune adresse enregistrée sur ce compte."}
              </p>
            </div>
            {adressePrincipale && (
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block space-y-1 text-sm">
                  <span>Pays</span>
                  <Input value={adressePrincipale.pays} disabled />
                </label>
                <label className="block space-y-1 text-sm">
                  <span>Ville</span>
                  <Input value={adressePrincipale.ville} disabled />
                </label>
                <label className="block space-y-1 text-sm">
                  <span>Région</span>
                  <Input value={adressePrincipale.region} disabled />
                </label>
                <label className="block space-y-1 text-sm">
                  <span>Code postal</span>
                  <Input value={adressePrincipale.codePostal ?? ""} disabled />
                </label>
                <label className="block space-y-1 text-sm sm:col-span-2">
                  <span>Adresse</span>
                  <Input value={adressePrincipale.adresse} disabled />
                </label>
              </div>
            )}
          </section>

          <section className="space-y-3 rounded-xl border p-4">
            <h2 className="font-semibold">Contacts</h2>
            {agent.contacts.length === 0 ? (
              <p className="text-sm text-muted-foreground">
                Aucun contact enregistré sur ce compte.
              </p>
            ) : (
              <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                {agent.contacts.map((contact) => (
                  <li
                    key={contact.id}
                    className="flex items-start gap-3 rounded-lg border p-3"
                  >
                    {contact.type === "EMAIL" ? (
                      <MailIcon className="mt-0.5 size-4 shrink-0 text-muted-foreground" />
                    ) : (
                      <PhoneIcon className="mt-0.5 size-4 shrink-0 text-muted-foreground" />
                    )}
                    <div className="min-w-0">
                      <p className="truncate font-medium">
                        {contact.email || contact.phone || "—"}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {contact.label || contact.type.toLowerCase()}
                        {contact.status === "VERIFIE" ? " · vérifié" : ""}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </section>

          {autresAdresses.length > 0 && (
            <section className="space-y-3 rounded-xl border p-4">
              <h2 className="font-semibold">Autres adresses</h2>
              <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                {autresAdresses.map((adresse) => (
                  <li
                    key={adresse.id}
                    className="flex items-start gap-3 rounded-lg border p-3"
                  >
                    <MapPinIcon className="mt-0.5 size-4 shrink-0 text-muted-foreground" />
                    <div className="min-w-0">
                      <p className="font-medium">{adresse.adresse}</p>
                      <p className="text-sm text-muted-foreground">
                        {[adresse.ville, adresse.region, adresse.pays]
                          .filter(Boolean)
                          .join(", ")}
                        {adresse.codePostal ? ` · ${adresse.codePostal}` : ""}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </section>
          )}
      </div>

      <AlertDialog
        open={suppressionOuverte}
        onOpenChange={(open) => {
          if (!enCours) setSuppressionOuverte(open);
        }}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Retirer ce travailleur ?</AlertDialogTitle>
            <AlertDialogDescription>
              « {nomAgent(agent)} » sera retiré de votre équipe et perdra ses
              accès. Cette action est irréversible.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel disabled={enCours}>Annuler</AlertDialogCancel>
            <AlertDialogAction
              variant="destructive"
              disabled={enCours}
              onClick={confirmerSuppression}
            >
              {enCours ? "Retrait…" : "Retirer"}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
      <AlertDialog
        open={changementStatutOuvert}
        onOpenChange={(open) => {
          if (!enCours) setChangementStatutOuvert(open);
        }}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>
              {agent.status === "ACTIF"
                ? "Bloquer ce travailleur ?"
                : "Débloquer ce travailleur ?"}
            </AlertDialogTitle>
            <AlertDialogDescription>
              {agent.status === "ACTIF"
                ? `« ${nomAgent(agent)} » ne pourra plus accéder à ce business tant qu’il ne sera pas réactivé.`
                : `« ${nomAgent(agent)} » pourra de nouveau accéder à ce business.`}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel disabled={enCours}>Annuler</AlertDialogCancel>
            <AlertDialogAction
              variant={agent.status === "ACTIF" ? "destructive" : "default"}
              disabled={enCours}
              onClick={() => {
                setChangementStatutOuvert(false);
                void changerStatut();
              }}
            >
              {enCours
                ? agent.status === "ACTIF"
                  ? "Blocage…"
                  : "Réactivation…"
                : agent.status === "ACTIF"
                  ? "Bloquer"
                  : "Débloquer"}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </main>
  );
}

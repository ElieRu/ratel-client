"use client"

import { useCallback, useEffect, useState } from "react";
import { toast } from "sonner";
import {
  BanIcon,
  CheckCircle2Icon,
  SearchIcon,
  SendIcon,
  Trash2Icon,
  UserPlusIcon,
} from "lucide-react";
import { Link } from "react-router";

import { useBusiness } from "@/lib/business-context";
import { tronquerAvecEllipses } from "@/lib/utils";
import {
  activerAgent,
  bloquerAgent,
  listerAgents,
  renvoyerInvitationAgent,
  supprimerAgent,
  type AgentEnregistre,
  type StatutAgent,
} from "@/lib/api/business";
import { PageRessource } from "@/components/ressource/page-ressource";
import { useListe } from "@/components/ressource/use-liste";
import { InviterTravailleur } from "@/components/travailleurs/inviter-travailleur";

import { Badge } from "@/components/ui/badge";
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

type FiltreStatut = "tous" | StatutAgent;

function nomAgent(agent: AgentEnregistre) {
  return agent.fullName?.trim() || agent.email?.trim() || "Travailleur sans nom";
}

export default function Travailleurs() {
  const { businessId } = useBusiness();
  const [recherche, setRecherche] = useState("");
  const [saisie, setSaisie] = useState("");
  const [filtreStatut, setFiltreStatut] = useState<FiltreStatut>("tous");
  const [taillePage, setTaillePage] = useState(10);
  const [page, setPage] = useState(0);
  const [invitationOuverte, setInvitationOuverte] = useState(false);
  const [aSupprimer, setASupprimer] = useState<AgentEnregistre | null>(null);
  const [changementStatutAConfirmer, setChangementStatutAConfirmer] =
    useState<{ agent: AgentEnregistre; bloquer: boolean } | null>(null);
  const [suppressionEnCours, setSuppressionEnCours] = useState(false);
  const [renvoiEnCours, setRenvoiEnCours] = useState<string | null>(null);
  const [statutEnCours, setStatutEnCours] = useState<string | null>(null);

  useEffect(() => {
    const timeout = window.setTimeout(() => {
      setRecherche(saisie.trim());
      setPage(0);
    }, 300);
    return () => window.clearTimeout(timeout);
  }, [saisie]);

  const charger = useCallback(
    () =>
      listerAgents(businessId!, {
        ...(recherche ? { search: recherche } : {}),
        ...(filtreStatut === "tous" ? {} : { status: filtreStatut }),
      }),
    [businessId, recherche, filtreStatut]
  );

  const { donnees, chargement, erreur, recharger, ajouter, mettreAJour, retirer } =
    useListe<AgentEnregistre>(charger, !!businessId);

  const nombrePages = Math.ceil(donnees.length / taillePage);
  const pageCourante = Math.min(page, Math.max(0, nombrePages - 1));
  const agentsAffiches = donnees.slice(
    pageCourante * taillePage,
    (pageCourante + 1) * taillePage
  );
  const debut = donnees.length === 0 ? 0 : pageCourante * taillePage + 1;
  const fin = Math.min((pageCourante + 1) * taillePage, donnees.length);

  const ajouterAgentsInvites = (agents: AgentEnregistre[]) => {
    agents.forEach((agent) => ajouter(agent));
    if (agents.length > 0) setPage(0);
    recharger();
  };

  const changerStatut = async (agent: AgentEnregistre, bloquer: boolean) => {
    if (!businessId) return;
    setStatutEnCours(agent.id);
    try {
      await toast
        .promise(
          bloquer
            ? bloquerAgent(businessId, agent.id)
            : activerAgent(businessId, agent.id),
          {
            loading: bloquer ? "Blocage…" : "Réactivation…",
            success: ({ message }) => {
              mettreAJour(
                { ...agent, status: bloquer ? "BLOQUE" : "ACTIF" },
                (element) => element.id
              );
              return message;
            },
            error: (e: Error) => e.message,
          }
        )
        .unwrap();
    } finally {
      setStatutEnCours(null);
    }
  };

  const renvoyerInvitation = async (agent: AgentEnregistre) => {
    if (!businessId) return;
    setRenvoiEnCours(agent.id);
    try {
      const resultat = await renvoyerInvitationAgent(businessId, agent.id);
      toast.success(resultat.message);
      recharger();
    } catch (error) {
      toast.error(
        error instanceof Error
          ? error.message
          : "Le renvoi de l’invitation a échoué."
      );
    } finally {
      setRenvoiEnCours(null);
    }
  };

  const confirmerSuppression = async () => {
    if (!aSupprimer || !businessId) return;
    setSuppressionEnCours(true);
    try {
      await toast
        .promise(supprimerAgent(businessId, aSupprimer.id), {
          loading: "Retrait…",
          success: ({ message }) => {
            retirer(aSupprimer.id, (element) => element.id);
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

  return (
    <>
      <PageRessource
        titre="Travailleurs"
        description="Les agents rattachés à votre business. Ils rejoignent l’équipe en acceptant une invitation."
        businessRequis
        businessId={businessId}
        chargement={chargement}
        erreur={erreur}
        vide={donnees.length === 0 && !recherche && filtreStatut === "tous"}
        messageVide="Aucun travailleur dans votre équipe. Invitez quelqu’un pour commencer."
        onReessayer={recharger}
        action={
          <Button
            type="button"
            disabled={!businessId}
            onClick={() => setInvitationOuverte(true)}
          >
            <UserPlusIcon className="size-4" />
            Inviter un travailleur
          </Button>
        }
        outils={
          <div className="flex w-full max-w-3xl flex-wrap items-center gap-2">
            <div className="relative min-w-48 flex-1">
              <SearchIcon className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                value={saisie}
                onChange={(e) => setSaisie(e.target.value)}
                placeholder="Rechercher par nom ou e-mail…"
                aria-label="Rechercher un travailleur"
                className="pl-9"
              />
            </div>
            <NativeSelect
              value={filtreStatut}
              onChange={(event) => {
                const valeur = event.currentTarget.value;
                if (valeur === "tous" || valeur === "ACTIF" || valeur === "BLOQUE") {
                  setFiltreStatut(valeur);
                  setPage(0);
                }
              }}
              aria-label="Filtrer les travailleurs par statut"
              className="min-w-40"
            >
              <NativeSelectOption value="tous">Tous les statuts</NativeSelectOption>
              <NativeSelectOption value="ACTIF">Actifs</NativeSelectOption>
              <NativeSelectOption value="BLOQUE">Bloqués</NativeSelectOption>
            </NativeSelect>
          </div>
        }
      >
        <div className="overflow-hidden rounded-lg border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Travailleur</TableHead>
                <TableHead>Statut</TableHead>
                <TableHead>Depuis</TableHead>
                <TableHead className="w-[1%] text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {agentsAffiches.length === 0 ? (
                <TableRow>
                  <TableCell
                    colSpan={4}
                    className="h-24 text-center text-muted-foreground"
                  >
                    Aucun travailleur ne correspond à ce filtre.
                  </TableCell>
                </TableRow>
              ) : (
                agentsAffiches.map((agent) => (
                  <TableRow key={agent.id}>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <Avatar className="size-9">
                          <AvatarImage
                            src={agent.userImage ?? undefined}
                            alt={nomAgent(agent)}
                          />
                          <AvatarFallback>
                            {nomAgent(agent).charAt(0).toLocaleUpperCase("fr")}
                          </AvatarFallback>
                        </Avatar>
                        <div className="min-w-0">
                          <Link
                            to={`/travailleurs/${agent.id}`}
                            className="font-medium text-primary underline-offset-4 hover:underline"
                          >
                            {tronquerAvecEllipses(nomAgent(agent), 42)}
                          </Link>
                          <p className="truncate text-sm text-muted-foreground">
                            {agent.email || "E-mail non renseigné"}
                          </p>
                          {!agent.isVerified && (
                            <p className="text-xs text-amber-700">
                              Invitation en attente de validation
                            </p>
                          )}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant={agent.status === "ACTIF" ? "secondary" : "destructive"}
                      >
                        {agent.status === "ACTIF" ? "Actif" : "Bloqué"}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-muted-foreground">
                      {agent.createdAt
                        ? new Date(agent.createdAt).toLocaleDateString("fr-FR")
                        : "—"}
                    </TableCell>
                    <TableCell className="text-right whitespace-nowrap">
                      <div className="flex items-center justify-end gap-1">
                        {!agent.isVerified &&
                          agent.invitationExpiresAt &&
                          new Date(agent.invitationExpiresAt).getTime() <= Date.now() && (
                            <Button
                              type="button"
                              variant="ghost"
                              size="icon"
                              className="size-8 border border-border text-muted-foreground"
                              onClick={() => void renvoyerInvitation(agent)}
                              disabled={renvoiEnCours === agent.id}
                              aria-label={`Renvoyer l’invitation à ${nomAgent(agent)}`}
                              title="Renvoyer l’invitation"
                            >
                              <SendIcon className="size-4" />
                            </Button>
                          )}
                        <Button
                          type="button"
                          variant="ghost"
                          size="icon"
                          className="size-8 border border-border text-muted-foreground"
                          onClick={() => {
                            setChangementStatutAConfirmer({
                              agent,
                              bloquer: agent.status === "ACTIF",
                            });
                          }}
                          disabled={statutEnCours === agent.id}
                          aria-label={
                            agent.status === "ACTIF"
                              ? `Bloquer ${nomAgent(agent)}`
                              : `Réactiver ${nomAgent(agent)}`
                          }
                          title={agent.status === "ACTIF" ? "Bloquer" : "Réactiver"}
                        >
                          {agent.status === "ACTIF" ? (
                            <BanIcon className="size-4" />
                          ) : (
                            <CheckCircle2Icon className="size-4" />
                          )}
                        </Button>
                        <Button
                          type="button"
                          variant="ghost"
                          size="icon"
                          className="size-8 border border-destructive/30 text-destructive hover:bg-destructive/10 hover:text-destructive"
                          onClick={() => setASupprimer(agent)}
                          aria-label={`Retirer ${nomAgent(agent)}`}
                          title="Retirer de l’équipe"
                        >
                          <Trash2Icon className="size-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <label htmlFor="travailleurs-par-page">Travailleurs par page</label>
            <NativeSelect
              id="travailleurs-par-page"
              value={taillePage}
              onChange={(event) => {
                setTaillePage(Number(event.currentTarget.value));
                setPage(0);
              }}
              aria-label="Nombre de travailleurs par page"
            >
              <NativeSelectOption value={10}>10</NativeSelectOption>
              <NativeSelectOption value={20}>20</NativeSelectOption>
              <NativeSelectOption value={50}>50</NativeSelectOption>
            </NativeSelect>
            <span aria-live="polite">
              {debut}–{fin} sur {donnees.length}
            </span>
          </div>
          <nav
            aria-label="Pagination des travailleurs"
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
              <AlertDialogTitle>Retirer ce travailleur ?</AlertDialogTitle>
              <AlertDialogDescription>
                « {aSupprimer ? nomAgent(aSupprimer) : ""} » sera retiré de votre
                équipe et perdra ses accès. Cette action est irréversible.
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
                {suppressionEnCours ? "Retrait…" : "Retirer"}
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
        <AlertDialog
          open={changementStatutAConfirmer !== null}
          onOpenChange={(open) => {
            if (!statutEnCours && !open) {
              setChangementStatutAConfirmer(null);
            }
          }}
        >
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>
                {changementStatutAConfirmer?.bloquer
                  ? "Bloquer ce travailleur ?"
                  : "Débloquer ce travailleur ?"}
              </AlertDialogTitle>
              <AlertDialogDescription>
                {changementStatutAConfirmer?.bloquer
                  ? `« ${nomAgent(changementStatutAConfirmer.agent)} » ne pourra plus accéder à ce business tant qu’il ne sera pas réactivé.`
                  : changementStatutAConfirmer
                    ? `« ${nomAgent(changementStatutAConfirmer.agent)} » pourra de nouveau accéder à ce business.`
                    : ""}
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel disabled={statutEnCours !== null}>
                Annuler
              </AlertDialogCancel>
              <AlertDialogAction
                variant={changementStatutAConfirmer?.bloquer ? "destructive" : "default"}
                disabled={statutEnCours !== null}
                onClick={() => {
                  if (!changementStatutAConfirmer) return;
                  const confirmation = changementStatutAConfirmer;
                  setChangementStatutAConfirmer(null);
                  void changerStatut(confirmation.agent, confirmation.bloquer);
                }}
              >
                {statutEnCours
                  ? changementStatutAConfirmer?.bloquer
                    ? "Blocage…"
                    : "Réactivation…"
                  : changementStatutAConfirmer?.bloquer
                    ? "Bloquer"
                    : "Débloquer"}
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </PageRessource>

      <InviterTravailleur
        businessId={businessId}
        open={invitationOuverte}
        onOpenChange={setInvitationOuverte}
        onAdded={ajouterAgentsInvites}
      />
    </>
  );
}

"use client"

import { useCallback } from "react";
import { toast } from "sonner";
import { BanIcon, CheckCircle2Icon, Trash2Icon } from "lucide-react";

import { useBusiness } from "@/lib/business-context";
import {
  activerAgent,
  bloquerAgent,
  listerAgents,
  supprimerAgent,
} from "@/lib/api/business";
import { PageRessource } from "@/components/ressource/page-ressource";
import { useListe } from "@/components/ressource/use-liste";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

type LigneAgent = {
  id: string;
  status: "ACTIF" | "BLOQUE";
  userId: string;
  createdAt?: string;
  user?: { id: string; bio?: string | null };
};

export default function Travailleurs() {
  const { businessId } = useBusiness();

  const charger = useCallback(() => listerAgents(businessId!), [businessId]);
  const { donnees, chargement, erreur, recharger } = useListe<LigneAgent>(
    charger,
    !!businessId
  );

  const agir = async (
    promesse: Promise<unknown>,
    enCours: string,
    succes: string
  ) => {
    await toast
      .promise(promesse, {
        loading: enCours,
        success: () => {
          recharger();
          return succes;
        },
        error: (e: Error) => e.message,
      })
      .unwrap();
  };

  return (
    <PageRessource
      titre="Travailleurs"
      description="Les agents rattachés à votre business. Ils rejoignent l'équipe en acceptant une invitation."
      businessRequis
      businessId={businessId}
      chargement={chargement}
      erreur={erreur}
      vide={donnees.length === 0}
      messageVide="Aucun agent dans votre équipe. Invitez quelqu'un pour commencer."
      onReessayer={recharger}
    >
      <div className="overflow-hidden rounded-lg border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Agent</TableHead>
              <TableHead>Statut</TableHead>
              <TableHead>Depuis</TableHead>
              <TableHead className="w-[1%] text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {donnees.map((agent) => (
              <TableRow key={agent.id}>
                <TableCell className="font-medium">{agent.userId}</TableCell>
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
                  {agent.status === "ACTIF" ? (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() =>
                        agir(
                          bloquerAgent(businessId!, agent.id),
                          "Blocage…",
                          "Agent bloqué"
                        )
                      }
                    >
                      <BanIcon className="size-4" />
                      Bloquer
                    </Button>
                  ) : (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() =>
                        agir(
                          activerAgent(businessId!, agent.id),
                          "Activation…",
                          "Agent réactivé"
                        )
                      }
                    >
                      <CheckCircle2Icon className="size-4" />
                      Réactiver
                    </Button>
                  )}
                  <Button
                    variant="ghost"
                    size="sm"
                    aria-label="Retirer cet agent"
                    onClick={() =>
                      agir(
                        supprimerAgent(businessId!, agent.id),
                        "Retrait…",
                        "Agent retiré"
                      )
                    }
                  >
                    <Trash2Icon className="size-4 text-destructive" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </PageRessource>
  );
}

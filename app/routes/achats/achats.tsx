"use client"

import { useCallback } from "react";
import { toast } from "sonner";
import { Trash2Icon } from "lucide-react";

import { useBusiness } from "@/lib/business-context";
import {
  changerStatusAchat,
  listerAchats,
  supprimerAchat,
} from "@/lib/api/business";
import { PageRessource } from "@/components/ressource/page-ressource";
import { useListe } from "@/components/ressource/use-liste";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { NativeSelect, NativeSelectOption } from "@/components/ui/native-select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const STATUTS = ["EN_COURS", "VALIDE", "ANNULE"] as const;

type LigneAchat = {
  id: string;
  status: string;
  dateAchat?: string;
  createdAt?: string;
};

export default function Achats() {
  const { businessId } = useBusiness();

  const charger = useCallback(() => listerAchats(businessId!), [businessId]);
  const { donnees, chargement, erreur, recharger } = useListe<LigneAchat>(
    charger,
    !!businessId
  );

  const changerStatut = async (achat: LigneAchat, status: string) => {
    await toast
      .promise(changerStatusAchat(businessId!, achat.id, { status } as never), {
        loading: "Mise à jour…",
        success: () => {
          recharger();
          return status === "VALIDE"
            ? "Achat validé, les articles passent en stock"
            : "Statut mis à jour";
        },
        error: (e: Error) => e.message,
      })
      .unwrap();
  };

  const supprimer = async (achat: LigneAchat) => {
    await toast
      .promise(supprimerAchat(businessId!, achat.id), {
        loading: "Suppression…",
        success: () => {
          recharger();
          return "Achat supprimé";
        },
        error: (e: Error) => e.message,
      })
      .unwrap();
  };

  return (
    <PageRessource
      titre="Opérations d'achats"
      description="Vos approvisionnements. Valider un achat fait entrer ses lignes en stock."
      businessRequis
      businessId={businessId}
      chargement={chargement}
      erreur={erreur}
      vide={donnees.length === 0}
      messageVide="Aucun achat enregistré pour le moment."
      onReessayer={recharger}
    >
      <div className="overflow-hidden rounded-lg border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Référence</TableHead>
              <TableHead>Date d'achat</TableHead>
              <TableHead>Statut</TableHead>
              <TableHead className="w-[1%] text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {donnees.map((achat) => (
              <TableRow key={achat.id}>
                <TableCell className="font-mono text-sm">{achat.id}</TableCell>
                <TableCell className="text-muted-foreground">
                  {achat.dateAchat
                    ? new Date(achat.dateAchat).toLocaleDateString("fr-FR")
                    : "—"}
                </TableCell>
                <TableCell>
                  <Badge
                    variant={achat.status === "VALIDE" ? "default" : "secondary"}
                  >
                    {achat.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-right whitespace-nowrap">
                  <NativeSelect
                    aria-label={`Changer le statut de l'achat ${achat.id}`}
                    value={achat.status}
                    onChange={(e) => changerStatut(achat, e.target.value)}
                    className="inline-block w-auto"
                  >
                    {STATUTS.map((s) => (
                      <NativeSelectOption key={s} value={s}>
                        {s}
                      </NativeSelectOption>
                    ))}
                  </NativeSelect>
                  <Button
                    variant="ghost"
                    size="sm"
                    aria-label={`Supprimer l'achat ${achat.id}`}
                    onClick={() => supprimer(achat)}
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

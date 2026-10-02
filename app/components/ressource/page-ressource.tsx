"use client"

import { type ReactNode } from "react";
import { Link } from "react-router";
import { AlertCircleIcon, InboxIcon, StoreIcon } from "lucide-react";

import { Button, buttonVariants } from "@/components/ui/button";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";
import { Skeleton } from "@/components/ui/skeleton";

type Props = {
  titre: string;
  description?: string;
  /** Bouton d'action principal, aligné à droite de l'en-tête. */
  action?: ReactNode;
  /** Barre d'outils optionnelle (recherche, filtres). */
  outils?: ReactNode;
  chargement?: boolean;
  erreur?: string | null;
  /** Renseigné quand la ressource dépend d'un business actif. */
  businessRequis?: boolean;
  businessId?: string | null;
  /** Vrai quand la requête a abouti mais ne renvoie aucune ligne. */
  vide?: boolean;
  messageVide?: string;
  onReessayer?: () => void;
  children: ReactNode;
};

export function PageRessource({
  titre,
  description,
  action,
  outils,
  chargement = false,
  erreur = null,
  businessRequis = false,
  businessId = null,
  vide = false,
  messageVide = "Aucun élément pour le moment.",
  onReessayer,
  children,
}: Props) {
  const businessManquant = businessRequis && !businessId;

  return (
    <div className="flex flex-col gap-4 px-4 py-4 lg:px-6">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h1 className="text-xl font-semibold tracking-tight">{titre}</h1>
          {description && (
            <p className="mt-1 text-sm text-muted-foreground">{description}</p>
          )}
        </div>
        {!businessManquant && action}
      </div>

      {outils && !businessManquant && <div>{outils}</div>}

      {businessManquant ? (
        <Empty>
          <EmptyHeader>
            <EmptyMedia variant="icon">
              <StoreIcon />
            </EmptyMedia>
            <EmptyTitle>Aucun business actif</EmptyTitle>
            <EmptyDescription>
              Cette page travaille dans le contexte d'un business. Créez-en un
              pour commencer.
            </EmptyDescription>
          </EmptyHeader>
          <EmptyContent>
            <Link to="/businesses/creer" className={buttonVariants()}>
              Créer un business
            </Link>
          </EmptyContent>
        </Empty>
      ) : erreur ? (
        <Empty>
          <EmptyHeader>
            <EmptyMedia variant="icon">
              <AlertCircleIcon />
            </EmptyMedia>
            <EmptyTitle>Le chargement a échoué</EmptyTitle>
            <EmptyDescription>{erreur}</EmptyDescription>
          </EmptyHeader>
          {onReessayer && (
            <EmptyContent>
              <Button variant="outline" onClick={onReessayer}>
                Réessayer
              </Button>
            </EmptyContent>
          )}
        </Empty>
      ) : chargement ? (
        <div className="flex flex-col gap-2" aria-busy="true" aria-live="polite">
          <Skeleton className="h-10 w-full" />
          <Skeleton className="h-10 w-full" />
          <Skeleton className="h-10 w-full" />
          <Skeleton className="h-10 w-full" />
        </div>
      ) : vide ? (
        <Empty>
          <EmptyHeader>
            <EmptyMedia variant="icon">
              <InboxIcon />
            </EmptyMedia>
            <EmptyTitle>Rien à afficher</EmptyTitle>
            <EmptyDescription>{messageVide}</EmptyDescription>
          </EmptyHeader>
          {action && <EmptyContent>{action}</EmptyContent>}
        </Empty>
      ) : (
        children
      )}
    </div>
  );
}

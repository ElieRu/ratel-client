"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

/**
 * Les images « par défaut » du serveur pointent sur localhost et renvoient
 * souvent un 404 : on les traite comme absentes pour afficher directement
 * l'avatar généré plutôt qu'attendre l'échec du chargement.
 */
function estImagePlaceholder(url?: string | null) {
  if (!url?.trim()) return true;
  return (
    url.includes("image-par-defaut") ||
    url.includes("default-logo") ||
    url.includes("image-par-default")
  );
}

function initiales(nom: string) {
  const mots = nom
    .trim()
    .split(/\s+/)
    .filter((mot) => /\p{L}/u.test(mot));
  if (mots.length === 0) return "?";
  if (mots.length === 1) return mots[0]!.slice(0, 2).toLocaleUpperCase("fr");
  return (mots[0]![0]! + mots[1]![0]!).toLocaleUpperCase("fr");
}

/** Teinte stable dérivée du nom, pour que chaque fiche garde la même couleur. */
const TEINTES = [
  "bg-sky-100 text-sky-900",
  "bg-emerald-100 text-emerald-900",
  "bg-amber-100 text-amber-900",
  "bg-violet-100 text-violet-900",
  "bg-rose-100 text-rose-900",
  "bg-teal-100 text-teal-900",
];

function teinte(nom: string) {
  let somme = 0;
  for (const caractere of nom) somme = (somme + caractere.codePointAt(0)!) % 4096;
  return TEINTES[somme % TEINTES.length]!;
}

type AvatarRessourceProps = {
  src?: string | null;
  nom: string;
  className?: string;
  classNameTexte?: string;
};

/**
 * Affiche le logo ou la photo si elle existe, sinon un avatar généré à partir
 * des initiales. Utilisé sur les fiches client, fournisseur et travailleur.
 */
export function AvatarRessource({
  src,
  nom,
  className,
  classNameTexte,
}: AvatarRessourceProps) {
  const image = estImagePlaceholder(src) ? null : src!;
  return (
    <Avatar className={cn("size-16", className)}>
      {image && <AvatarImage src={image} alt={nom} className="object-cover" />}
      <AvatarFallback
        className={cn("font-semibold", teinte(nom), classNameTexte)}
      >
        {initiales(nom)}
      </AvatarFallback>
    </Avatar>
  );
}

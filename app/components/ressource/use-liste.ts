"use client"

import { useCallback, useEffect, useState } from "react";

type Etat<T> = {
  donnees: T[];
  chargement: boolean;
  erreur: string | null;
  recharger: () => void;
  ajouter: (element: T) => void;
  mettreAJour: (element: T, id: (element: T) => string) => void;
  retirer: (id: string, idElement: (element: T) => string) => void;
};

/**
 * Charge une liste dès que `actif` est vrai, et la recharge à la demande.
 * `charger` doit être stable (useCallback) pour éviter les boucles.
 */
export function useListe<T>(
  charger: () => Promise<T[]>,
  actif: boolean = true
): Etat<T> {
  const [donnees, setDonnees] = useState<T[]>([]);
  const [chargement, setChargement] = useState(actif);
  const [erreur, setErreur] = useState<string | null>(null);
  const [tick, setTick] = useState(0);

  const recharger = useCallback(() => setTick((t) => t + 1), []);
  const ajouter = useCallback(
    (element: T) => setDonnees((courantes) => [...courantes, element]),
    []
  );
  const mettreAJour = useCallback(
    (element: T, id: (element: T) => string) => {
      setDonnees((courantes) =>
        courantes.map((courant) =>
          id(courant) === id(element) ? element : courant
        )
      );
    },
    []
  );
  const retirer = useCallback(
    (id: string, idElement: (element: T) => string) => {
      setDonnees((courantes) =>
        courantes.filter((element) => idElement(element) !== id)
      );
    },
    []
  );

  useEffect(() => {
    if (!actif) {
      setChargement(false);
      return;
    }

    let annule = false;
    setChargement(true);
    setErreur(null);

    charger()
      .then((resultat) => {
        if (annule) return;
        setDonnees(Array.isArray(resultat) ? resultat : []);
      })
      .catch((err: Error) => {
        if (annule) return;
        setErreur(err.message || "Erreur inconnue");
        setDonnees([]);
      })
      .finally(() => {
        if (!annule) setChargement(false);
      });

    return () => {
      annule = true;
    };
  }, [charger, actif, tick]);

  return { donnees, chargement, erreur, recharger, ajouter, mettreAJour, retirer };
}

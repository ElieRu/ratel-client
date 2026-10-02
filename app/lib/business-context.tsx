"use client"

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { useAuth } from "@clerk/react-router";

import { requete } from "./api/client";

type Session = {
  business: { id: string; nom: string } | null;
  role: string;
  aUnBusiness: boolean;
  estAdmin: boolean;
};

type BusinessContexte = Session & {
  businessId: string | null;
  /** Vrai une fois la session résolue (ou l'échec constaté). */
  pret: boolean;
  recharger: () => void;
};

const VIDE: Session = {
  business: null,
  role: "USER",
  aUnBusiness: false,
  estAdmin: false,
};

const Contexte = createContext<BusinessContexte | null>(null);

/**
 * Source unique pour « cet utilisateur a-t-il un business ? » et
 * « est-il administrateur ? ». Alimente la navigation et les pages.
 */
export function BusinessProvider({ children }: { children: ReactNode }) {
  const { isLoaded, isSignedIn } = useAuth();
  const [session, setSession] = useState<Session>(VIDE);
  const [pret, setPret] = useState(false);
  const [tick, setTick] = useState(0);

  const recharger = useCallback(() => setTick((t) => t + 1), []);

  useEffect(() => {
    if (!isLoaded) return;

    if (!isSignedIn) {
      setSession(VIDE);
      setPret(true);
      return;
    }

    let annule = false;
    setPret(false);

    requete<Session>("GET", "/auth/me")
      .then((data) => {
        if (!annule) setSession({ ...VIDE, ...data });
      })
      .catch(() => {
        // Session non résolue : on n'affiche que la navigation utilisateur.
        if (!annule) setSession(VIDE);
      })
      .finally(() => {
        if (!annule) setPret(true);
      });

    return () => {
      annule = true;
    };
  }, [isLoaded, isSignedIn, tick]);

  const valeur = useMemo<BusinessContexte>(
    () => ({
      ...session,
      businessId: session.business?.id ?? null,
      pret,
      recharger,
    }),
    [session, pret, recharger]
  );

  return <Contexte.Provider value={valeur}>{children}</Contexte.Provider>;
}

export function useBusiness(): BusinessContexte {
  const contexte = useContext(Contexte);
  if (!contexte) {
    throw new Error("useBusiness doit être utilisé dans un BusinessProvider");
  }
  return contexte;
}

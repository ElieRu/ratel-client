"use client"

import { Link } from "react-router";
import type { Route } from "./+types/welcome";
import { useEffect, useState } from "react";
import { creer_user, is_welcome } from "@/lib/apis";
import { useNavigate } from "react-router";
import { Button } from "@/components/ui/button";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Bienvenu sur Ratel Market" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Welcome() {
  const navigate = useNavigate();
  const [erreur, setErreur] = useState<string | null>(null);
  const [tentative, setTentative] = useState(0);
  const [enregistrementEnCours, setEnregistrementEnCours] = useState(true);

  useEffect(() => {
    let annule = false;
    const creerUser = async () => {
      setEnregistrementEnCours(true);
      setErreur(null);
      try {
        const res = await creer_user();
        if (!res.success && res.redirect) navigate("/", { replace: true });
      } catch (error) {
        if (!annule) {
          setErreur(
            error instanceof Error
              ? error.message
              : "Impossible d'enregistrer les informations de votre compte."
          );
        }
      } finally {
        if (!annule) setEnregistrementEnCours(false);
      }
    };
    void creerUser();
    return () => {
      annule = true;
    };
  }, [navigate, tentative]);

  const isWelcome = async () => {
    await is_welcome().then((res) => {
      if (res.success) navigate("/");
    });
  };

  return <>
    <p>the welcome page</p>
    <Link to='/'>Home page</Link>
    {enregistrementEnCours && (
      <p role="status">Enregistrement des informations de votre compte…</p>
    )}
    {erreur && (
      <div>
        <p role="alert">{erreur}</p>
        <Button
          type="button"
          disabled={enregistrementEnCours}
          onClick={() => setTentative((valeur) => valeur + 1)}
        >
          Réessayer
        </Button>
      </div>
    )}
    <Button className={'primary'} onClick={isWelcome}>Home page</Button>
  </>
    ;
}

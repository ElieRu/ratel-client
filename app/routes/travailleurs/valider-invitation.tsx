"use client";

import { useState } from "react";
import { useNavigate, useParams } from "react-router";
import { validerInvitationAgent } from "@/lib/api/business";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

export default function ValiderInvitationTravailleur() {
  const { invitationId } = useParams();
  const navigate = useNavigate();
  const [code, setCode] = useState("");
  const [enCours, setEnCours] = useState(false);

  const valider = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!invitationId || !/^\d{6}$/.test(code)) {
      toast.error("Saisissez le code à 6 chiffres reçu par e-mail.");
      return;
    }

    setEnCours(true);
    try {
      const resultat = await validerInvitationAgent(invitationId, code);
      toast.success(resultat.message);
      navigate("/acceuil", { replace: true });
    } catch (error) {
      toast.error(
        error instanceof Error
          ? error.message
          : "Impossible de valider cette invitation."
      );
    } finally {
      setEnCours(false);
    }
  };

  return (
    <main className="mx-auto flex w-full max-w-md flex-1 items-center px-4 py-10">
      <form onSubmit={valider} className="w-full space-y-5 rounded-xl border p-6">
        <div className="space-y-2">
          <h1 className="text-xl font-semibold">Valider votre invitation</h1>
          <p className="text-sm text-muted-foreground">
            Saisissez le code à 6 chiffres envoyé à l’adresse e-mail associée à
            votre compte. Le code expire après 15 minutes.
          </p>
        </div>
        <Input
          value={code}
          onChange={(event) =>
            setCode(event.currentTarget.value.replace(/\D/g, "").slice(0, 6))
          }
          inputMode="numeric"
          autoComplete="one-time-code"
          placeholder="000000"
          aria-label="Code de validation à 6 chiffres"
          required
          className="h-11 text-center text-lg tracking-[0.5em]"
        />
        <Button type="submit" className="w-full" disabled={enCours || code.length !== 6}>
          {enCours ? "Validation…" : "Confirmer l’invitation"}
        </Button>
      </form>
    </main>
  );
}

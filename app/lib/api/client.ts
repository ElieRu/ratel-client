import { getToken } from "@clerk/react-router";
import { toast } from "sonner";
import { API } from "../utils";

type Methode = "GET" | "POST" | "PUT" | "DELETE";

/**
 * Enveloppe unique pour les appels au serveur Ratel.
 * Reprend la convention de `lib/apis.ts` : jeton Clerk en Authorization,
 * message d'erreur porté par `result.message`.
 */
export async function requete<T = unknown>(
  methode: Methode,
  chemin: string,
  corps?: unknown
): Promise<T> {
  const resultat = await envoyerRequete<T>(methode, chemin, corps);
  return resultat.data;
}

export async function requeteAvecMessage<T>(
  methode: Methode,
  chemin: string,
  corps?: unknown
): Promise<{ data: T; message: string }> {
  return envoyerRequete<T>(methode, chemin, corps);
}

async function envoyerRequete<T>(
  methode: Methode,
  chemin: string,
  corps?: unknown
): Promise<{ data: T; message: string }> {
  const token = await getToken();

  const response = await fetch(`${API}${chemin}`, {
    method: methode,
    headers: {
      Authorization: `${token}`,
      "Content-Type": "application/json",
    },
    ...(corps === undefined ? {} : { body: JSON.stringify(corps) }),
  });

  const result = await response.json().catch(() => null);

  if (!response.ok || result?.success === false) {
    const error = new Error(result?.message || "La requête a échoué");
    if (methode !== "GET") toast.error(error.message);
    throw error;
  }

  const message =
    typeof result?.message === "string" ? result.message : "Opération réussie";
  if (methode !== "GET") toast.success(message);

  return {
    data: (result?.data ?? result) as T,
    message,
  };
}

export async function requeteMultipart<T = unknown>(
  chemin: string,
  corps: FormData
): Promise<T> {
  const resultat = await envoyerMultipart<T>(chemin, corps);
  return resultat.data;
}

export async function requeteMultipartAvecMessage<T>(
  chemin: string,
  corps: FormData,
  methode: Methode = "POST"
): Promise<{ data: T; message: string }> {
  return envoyerMultipart<T>(chemin, corps, methode);
}

async function envoyerMultipart<T>(
  chemin: string,
  corps: FormData,
  methode: Methode = "POST"
): Promise<{ data: T; message: string }> {
  const token = await getToken();
  const response = await fetch(`${API}${chemin}`, {
    method: methode,
    headers: { Authorization: `${token}` },
    body: corps,
  });

  const result = await response.json().catch(() => null);
  if (!response.ok || result?.success === false) {
    const error = new Error(result?.message || "Le téléversement a échoué");
    if (methode !== "GET") toast.error(error.message);
    throw error;
  }

  const message =
    typeof result?.message === "string" ? result.message : "Opération réussie";
  if (methode !== "GET") toast.success(message);

  return {
    data: (result?.data ?? result) as T,
    message,
  };
}

/** Sérialise les paramètres de recherche non vides. */
export function query(params: Record<string, string | undefined>): string {
  const utiles = Object.entries(params).filter(([, v]) => v !== undefined && v !== "");
  if (utiles.length === 0) return "";
  return `?${new URLSearchParams(utiles as [string, string][]).toString()}`;
}

"use client"

import { useEffect, useState } from "react";
import { toast } from "sonner";
import { Check, SearchIcon } from "lucide-react";

import {
  inviterUtilisateursCommeFournisseurs,
  listerUtilisateursFournisseurDisponibles,
  type FournisseurEnregistre,
  type UtilisateurFournisseurDisponible,
} from "@/lib/api/business";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

type Props = {
  businessId: string | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onAdded: (fournisseurs: FournisseurEnregistre[]) => void;
};

function nomUtilisateur(utilisateur: UtilisateurFournisseurDisponible) {
  return (
    utilisateur.full_name?.trim() ||
    utilisateur.clients?.fullName?.trim() ||
    utilisateur.contacts.find((contact) => contact.label?.trim())?.label?.trim() ||
    utilisateur.contacts.find((contact) => contact.email?.trim())?.email?.trim() ||
    `Utilisateur ${utilisateur.id.slice(-6)}`
  );
}

function emailUtilisateur(utilisateur: UtilisateurFournisseurDisponible) {
  if (utilisateur.email?.trim()) return utilisateur.email.trim();
  if (utilisateur.clients?.email?.trim()) {
    return utilisateur.clients.email.trim();
  }
  const contactNomme = utilisateur.contacts.find(
    (contact) => contact.label?.trim()
  );
  return (
    contactNomme?.email?.trim() ||
    utilisateur.contacts.find((contact) => contact.email?.trim())?.email?.trim() ||
    "E-mail non renseigné"
  );
}

export function AjouterUtilisateurFournisseur({
  businessId,
  open,
  onOpenChange,
  onAdded,
}: Props) {
  const [utilisateurs, setUtilisateurs] = useState<
    UtilisateurFournisseurDisponible[]
  >([]);
  const [selection, setSelection] = useState<Set<string>>(() => new Set());
  const [recherche, setRecherche] = useState("");
  const [chargement, setChargement] = useState(false);
  const [erreur, setErreur] = useState<string | null>(null);
  const [ajoutEnCours, setAjoutEnCours] = useState(false);

  useEffect(() => {
    if (!open) return;
    setSelection(new Set());
    setRecherche("");
    setUtilisateurs([]);
    setErreur(null);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const terme = recherche.trim();
    if (!terme) {
      setUtilisateurs([]);
      setErreur(null);
      setChargement(false);
      return;
    }
    if (!businessId) {
      setErreur("Aucun business n’est sélectionné.");
      return;
    }

    let annule = false;
    setChargement(true);
    setErreur(null);
    setUtilisateurs([]);
    const timeout = window.setTimeout(() => {
      listerUtilisateursFournisseurDisponibles(businessId, terme)
        .then((resultat) => {
          if (!annule) setUtilisateurs(resultat);
        })
        .catch((error: Error) => {
          if (!annule) {
            setErreur(
              error.message || "Impossible de charger les utilisateurs."
            );
          }
        })
        .finally(() => {
          if (!annule) setChargement(false);
        });
    }, 300);
    return () => {
      annule = true;
      window.clearTimeout(timeout);
    };
  }, [businessId, open, recherche]);

  const basculerSelection = (id: string) => {
    setSelection((courante) => {
      const suivante = new Set(courante);
      if (suivante.has(id)) suivante.delete(id);
      else suivante.add(id);
      return suivante;
    });
  };

  const ajouterSelection = async () => {
    if (!businessId || selection.size === 0) return;

    setAjoutEnCours(true);
    try {
      await toast
        .promise(
          inviterUtilisateursCommeFournisseurs(
            businessId,
            Array.from(selection)
          ),
          {
            loading: "Envoi des invitations fournisseur…",
            success: ({ data, message }) => {
              onAdded(data);
              onOpenChange(false);
              return message;
            },
            error: (error: Error) => error.message,
          }
        )
        .unwrap();
    } finally {
      setAjoutEnCours(false);
    }
  };

  return (
    <Dialog
      open={open}
      onOpenChange={(ouvert) => {
        if (!ajoutEnCours) onOpenChange(ouvert);
      }}
    >
      <DialogContent className="flex max-h-[85dvh] flex-col gap-0 overflow-hidden">
        <DialogHeader className="pb-3">
          <DialogTitle>Inviter des utilisateurs</DialogTitle>
          <DialogDescription>
            Sélectionnez les utilisateurs à inviter. Les personnes déjà fournisseurs
            de ce business et votre propre compte ne sont pas proposées.
          </DialogDescription>
        </DialogHeader>

        <div className="relative pb-3">
          <SearchIcon className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            value={recherche}
            onChange={(event) => setRecherche(event.currentTarget.value)}
            placeholder="Rechercher par nom, e-mail ou téléphone…"
            aria-label="Rechercher un utilisateur"
            className="pl-9"
          />
        </div>

        <div
          className="min-h-32 max-h-[40dvh] overflow-y-auto rounded-lg border"
          aria-busy={chargement}
        >
          {chargement ? (
            <p className="p-6 text-center text-sm text-muted-foreground" role="status">
              Chargement des utilisateurs…
            </p>
          ) : erreur ? (
            <div className="space-y-3 p-6 text-center">
              <p className="text-sm text-destructive">{erreur}</p>
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() => onOpenChange(false)}
              >
                Fermer
              </Button>
            </div>
          ) : utilisateurs.length === 0 ? (
            <p className="p-6 text-center text-sm text-muted-foreground">
              {recherche.trim()
                ? "Aucun utilisateur ne correspond à la recherche."
                : "Lancez une recherche pour afficher les utilisateurs."}
            </p>
          ) : (
            <ul className="divide-y">
              {utilisateurs.map((utilisateur) => {
                const selectionne = selection.has(utilisateur.id);
                return (
                  <li key={utilisateur.id}>
                    <button
                      type="button"
                      onClick={() => basculerSelection(utilisateur.id)}
                      aria-pressed={selectionne}
                      aria-label={`${selectionne ? "Désélectionner" : "Sélectionner"} ${nomUtilisateur(utilisateur)}`}
                      className={`flex w-full items-center gap-3 px-4 py-3 text-left transition-colors hover:bg-muted/50 ${
                        selectionne ? "bg-primary/10" : ""
                      }`}
                    >
                      <Avatar className="size-9 shrink-0">
                        <AvatarImage
                          src={utilisateur.image ?? utilisateur.clients?.profile}
                          alt=""
                        />
                        <AvatarFallback className="bg-primary/10 text-sm font-medium text-primary">
                          {nomUtilisateur(utilisateur)
                            .charAt(0)
                            .toLocaleUpperCase("fr")}
                        </AvatarFallback>
                      </Avatar>
                      <span className="min-w-0 flex-1">
                        <span className="block truncate text-sm font-medium">
                          {nomUtilisateur(utilisateur)}
                        </span>
                        <span className="block truncate text-xs text-muted-foreground">
                          {emailUtilisateur(utilisateur)}
                        </span>
                      </span>
                      <span
                        className={`flex size-5 shrink-0 items-center justify-center rounded-full border ${
                          selectionne
                            ? "border-primary bg-primary text-primary-foreground"
                            : "border-muted-foreground/40"
                        }`}
                        aria-hidden="true"
                      >
                        {selectionne && <Check className="size-3" />}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          )}
        </div>

        <DialogFooter className="mt-4 flex-row items-center justify-between gap-3">
          <Button
            type="button"
            variant="outline"
            onClick={() => onOpenChange(false)}
            disabled={ajoutEnCours}
          >
            Annuler
          </Button>
          <Button
            type="button"
            onClick={ajouterSelection}
            disabled={chargement || !!erreur || selection.size === 0 || ajoutEnCours}
          >
            {ajoutEnCours
              ? "Envoi…"
              : `Envoyer les invitations (${selection.size})`}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

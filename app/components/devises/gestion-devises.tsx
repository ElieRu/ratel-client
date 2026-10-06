"use client";

import { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Check,
  Pencil,
  PlusIcon,
  Star,
  Trash2,
} from "lucide-react";
import { toast } from "sonner";

import {
  deviseParDefaut,
  creerDevise,
  listerDevises,
  modifierDevise,
  supprimerDevise,
  type DeviseAvecRelations,
} from "@/lib/api/business";
import { useBusiness } from "@/lib/business-context";
import { DeviseSchema, type Devise } from "@/lib/validations";
import { PageRessource } from "@/components/ressource/page-ressource";
import { useListe } from "@/components/ressource/use-liste";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { NativeSelect, NativeSelectOption } from "@/components/ui/native-select";

type ActionConfirmation = {
  type: "default" | "delete";
  devise: DeviseAvecRelations;
};

const symbolePourType = (type: Devise["type"]) =>
  type === "USD" ? "$" : "Fc";
const nomDevise = (type: Devise["type"]) =>
  type === "USD" ? "Dollars américains" : "Franc congolais";
const TYPES_DEVISE: Devise["type"][] = ["CDF", "USD"];

export function GestionDevises({ inline = false }: { inline?: boolean }) {
  const { businessId } = useBusiness();
  const [dialogOuvert, setDialogOuvert] = useState(false);
  const [enEdition, setEnEdition] = useState<DeviseAvecRelations | null>(null);
  const [confirmation, setConfirmation] = useState<ActionConfirmation | null>(
    null
  );
  const [actionEnCours, setActionEnCours] = useState(false);

  const chargerDevises = useCallback(
    () => (businessId ? listerDevises(businessId) : Promise.resolve([])),
    [businessId]
  );
  const {
    donnees: devises,
    chargement,
    erreur,
    recharger,
  } = useListe<DeviseAvecRelations>(chargerDevises, !!businessId);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { errors, isSubmitting, isValid },
  } = useForm<Devise>({
    resolver: zodResolver(DeviseSchema),
    mode: "onTouched",
    defaultValues: {
      type: "CDF",
      symbole: "Fc",
      tauxVente: 0,
    },
  });
  const typeSelectionne = watch("type");
  const typesDisponibles = TYPES_DEVISE.filter(
    (type) => !devises.some((devise) => devise.type === type)
  );

  const ouvrirCreation = () => {
    const premierTypeDisponible = typesDisponibles[0] ?? "CDF";
    setEnEdition(null);
    reset({
      type: premierTypeDisponible,
      symbole: symbolePourType(premierTypeDisponible),
      tauxVente: 0,
    });
    setDialogOuvert(true);
  };

  const ouvrirModification = (devise: DeviseAvecRelations) => {
    setEnEdition(devise);
    reset({
      type: devise.type,
      symbole: symbolePourType(devise.type),
      tauxVente: Number(devise.tauxVente ?? 0),
    });
    setDialogOuvert(true);
  };

  const enregistrer = async (form: Devise) => {
    if (!businessId) return;
    const deviseFormulaire = {
      ...form,
      symbole: symbolePourType(form.type),
    };
    const requete = enEdition
      ? modifierDevise(businessId, enEdition.id, deviseFormulaire)
      : creerDevise(businessId, deviseFormulaire);

    try {
      await toast
        .promise(requete, {
          loading: enEdition ? "Modification de la devise…" : "Ajout de la devise…",
          success: enEdition ? "Devise modifiée." : "Devise ajoutée.",
          error: (cause: Error) => cause.message,
        })
        .unwrap();
      setDialogOuvert(false);
      setEnEdition(null);
      recharger();
    } catch {
      // L’erreur est déjà affichée par toast.promise.
    }
  };

  const validerAction = async () => {
    if (!businessId || !confirmation) return;
    setActionEnCours(true);
    const { devise, type } = confirmation;
    const requete =
      type === "default"
        ? deviseParDefaut(businessId, devise.id)
        : supprimerDevise(businessId, devise.id);
    try {
      await toast
        .promise(requete, {
          loading: type === "default" ? "Mise à jour…" : "Suppression…",
          success:
            type === "default"
              ? `${devise.type} est maintenant la devise par défaut.`
              : "Devise supprimée.",
          error: (cause: Error) => cause.message,
        })
        .unwrap();
      setConfirmation(null);
      recharger();
    } catch {
      // L’erreur est déjà affichée par toast.promise.
    } finally {
      setActionEnCours(false);
    }
  };

  const contenu = (
    <div className={inline ? "space-y-4" : undefined}>
      {inline && (
        <div className="flex justify-end">
          <Button onClick={ouvrirCreation} disabled={typesDisponibles.length === 0}>
            <PlusIcon className="size-4" />
            Ajouter une devise
          </Button>
        </div>
      )}
      {inline && chargement ? (
        <p className="rounded-lg border p-6 text-center text-sm text-muted-foreground">
          Chargement des devises…
        </p>
      ) : inline && erreur ? (
        <div className="flex flex-wrap items-center justify-between gap-3 rounded-lg border border-destructive/40 p-4">
          <p role="alert" className="text-sm text-destructive">{erreur}</p>
          <Button variant="outline" onClick={recharger}>Réessayer</Button>
        </div>
      ) : devises.length > 0 ? (
        <div className="grid gap-4 sm:grid-cols-2">
          {devises.map((devise) => (
            <article
              key={devise.id}
              className="flex flex-col justify-between gap-4 rounded-xl border p-4"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <p className="truncate font-semibold">{nomDevise(devise.type)}</p>
                  {devise.parDefaut && (
                    <Badge variant="secondary" className="mt-2">
                      <Check className="size-3.5" />
                      Par défaut
                    </Badge>
                  )}
                </div>
                <div className="flex shrink-0 items-center gap-1">
                  <Button
                    type="button"
                    variant="outline"
                    size="icon"
                    aria-label={`Modifier le taux de ${nomDevise(devise.type)}`}
                    title="Modifier le taux"
                    onClick={() => ouvrirModification(devise)}
                  >
                    <Pencil />
                  </Button>
                  {!devise.parDefaut && (
                    <Button
                      type="button"
                      variant="outline"
                      size="icon"
                      aria-label={`Définir ${nomDevise(devise.type)} par défaut`}
                      title="Définir par défaut"
                      onClick={() =>
                        setConfirmation({ type: "default", devise })
                      }
                    >
                      <Star />
                    </Button>
                  )}
                  <Button
                    type="button"
                    variant="destructive"
                    size="icon"
                    aria-label={`Supprimer ${nomDevise(devise.type)}`}
                    title="Supprimer"
                    onClick={() => setConfirmation({ type: "delete", devise })}
                  >
                    <Trash2 />
                  </Button>
                </div>
              </div>
              <p className="text-sm tabular-nums text-muted-foreground">
                Taux de vente :{" "}
                {Number(devise.tauxVente ?? 0).toLocaleString("fr-FR")}
                {" "}{symbolePourType(devise.type)}
              </p>
            </article>
          ))}
        </div>
      ) : (
        <p className="rounded-lg border border-dashed p-8 text-center text-sm text-muted-foreground">
          Aucune devise n’est encore rattachée à ce business.
        </p>
      )}

      <Dialog
        open={dialogOuvert}
        onOpenChange={(ouvert) => {
          setDialogOuvert(ouvert);
          if (!ouvert) setEnEdition(null);
        }}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              {enEdition ? "Modifier le taux de vente" : "Ajouter une devise"}
            </DialogTitle>
            <DialogDescription>
              {enEdition
                ? `Modifiez le taux de vente de ${nomDevise(enEdition.type)}.`
                : "La devise sera rattachée au business actif. Chaque type ne peut être ajouté qu’une seule fois."}
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit(enregistrer)} noValidate>
            <FieldGroup>
              {enEdition ? (
                <p className="text-sm font-medium">
                  {nomDevise(enEdition.type)} ({symbolePourType(enEdition.type)})
                </p>
              ) : (
              <Field data-invalid={!!errors.type}>
                <FieldLabel htmlFor="devise-type">Type de devise</FieldLabel>
                <NativeSelect
                  id="devise-type"
                  aria-invalid={!!errors.type}
                  {...register("type", {
                    onChange: (event) => {
                      const type = event.currentTarget.value as Devise["type"];
                      setValue("symbole", symbolePourType(type), {
                        shouldDirty: true,
                        shouldValidate: true,
                      });
                    },
                  })}
                >
                  <NativeSelectOption
                    value="CDF"
                    disabled={devises.some((devise) => devise.type === "CDF")}
                  >
                    CDF — Franc congolais
                  </NativeSelectOption>
                  <NativeSelectOption
                    value="USD"
                    disabled={devises.some((devise) => devise.type === "USD")}
                  >
                    USD — Dollar américain
                  </NativeSelectOption>
                </NativeSelect>
                <FieldError errors={[errors.type]} />
              </Field>
              )}
              <Field data-invalid={!!errors.tauxVente}>
                <FieldLabel htmlFor="devise-taux">
                  Taux de vente ({typeSelectionne === "USD" ? "CDF par USD" : "USD par CDF"})
                </FieldLabel>
                <Input
                  id="devise-taux"
                  type="number"
                  min="0"
                  step="0.0001"
                  inputMode="decimal"
                  aria-invalid={!!errors.tauxVente}
                  {...register("tauxVente", { valueAsNumber: true })}
                />
                <FieldError errors={[errors.tauxVente]} />
                <p className="text-sm text-muted-foreground">
                  {typeSelectionne === "USD"
                    ? "Indiquez combien de francs congolais vaut 1 dollar américain."
                    : "Indiquez combien de dollars américains vaut 1 franc congolais."}
                </p>
              </Field>
              <p className="text-sm text-muted-foreground">
                Symbole : {symbolePourType(typeSelectionne)}
              </p>
            </FieldGroup>
            <DialogFooter className="mt-6">
              <Button
                type="button"
                variant="outline"
                onClick={() => setDialogOuvert(false)}
                disabled={isSubmitting}
              >
                Annuler
              </Button>
              <Button type="submit" disabled={!isValid || isSubmitting}>
                {isSubmitting
                  ? "Enregistrement…"
                  : enEdition
                    ? "Confirmer la modification"
                    : "Ajouter"}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      <AlertDialog
        open={confirmation !== null}
        onOpenChange={(ouvert) => {
          if (!ouvert && !actionEnCours) setConfirmation(null);
        }}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>
              {confirmation?.type === "default"
                ? "Définir cette devise par défaut ?"
                : "Supprimer cette devise ?"}
            </AlertDialogTitle>
            <AlertDialogDescription>
              {confirmation?.type === "default"
                ? `${confirmation.devise.type} deviendra la devise par défaut de ce business.`
                : `La devise ${confirmation?.devise.type ?? ""} sera supprimée. Cette action peut être empêchée si elle est déjà utilisée.`}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel disabled={actionEnCours}>
              Annuler
            </AlertDialogCancel>
            <AlertDialogAction
              onClick={(event) => {
                event.preventDefault();
                void validerAction();
              }}
              disabled={actionEnCours}
              className={
                confirmation?.type === "delete"
                  ? "bg-destructive text-white hover:bg-destructive/90"
                  : undefined
              }
            >
              {actionEnCours
                ? "Traitement…"
                : confirmation?.type === "default"
                  ? "Confirmer"
                  : "Supprimer"}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );

  if (inline) return contenu;

  return (
    <PageRessource
      titre="Gestion des devises"
      description="Gérez les devises rattachées à votre business."
      businessRequis
      businessId={businessId}
      chargement={chargement}
      erreur={erreur}
      onReessayer={recharger}
      action={
        <Button onClick={ouvrirCreation} disabled={typesDisponibles.length === 0}>
          <PlusIcon className="size-4" />
          Ajouter une devise
        </Button>
      }
    >
      {contenu}
    </PageRessource>
  );
}

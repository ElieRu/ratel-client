"use client"

import { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { CheckIcon, PlusIcon, Trash2Icon } from "lucide-react";

import { CaisseSchema, type Caisse } from "@/lib/validations";
import { champsRequis } from "@/lib/utils";
import { useBusiness } from "@/lib/business-context";
import {
  caisseParDefaut,
  creerCaisse,
  listerCaisses,
  listerDevises,
  modifierCaisse,
  supprimerCaisse,
} from "@/lib/api/business";
import { PageRessource } from "@/components/ressource/page-ressource";
import { useListe } from "@/components/ressource/use-liste";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
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
  FieldLegend,
  FieldSet,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { NativeSelect, NativeSelectOption } from "@/components/ui/native-select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const requis = champsRequis(CaisseSchema.shape);

type LigneCaisse = Caisse & { id: string; parDefaut?: boolean };
type LigneDevise = { id: string; nom?: string; symbole?: string; type?: string };

export default function Caisses() {
  const { businessId } = useBusiness();
  const [ouvert, setOuvert] = useState(false);
  const [enEdition, setEnEdition] = useState<LigneCaisse | null>(null);

  const chargerCaisses = useCallback(
    () => listerCaisses(businessId!),
    [businessId]
  );
  const chargerDevises = useCallback(
    () => listerDevises(businessId!),
    [businessId]
  );

  const { donnees, chargement, erreur, recharger } = useListe<LigneCaisse>(
    chargerCaisses,
    !!businessId
  );
  const { donnees: devises } = useListe<LigneDevise>(chargerDevises, !!businessId);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isValid },
  } = useForm<Caisse>({
    resolver: zodResolver(CaisseSchema),
    mode: "onTouched",
  });

  const ouvrirCreation = () => {
    setEnEdition(null);
    reset({ nom: "", solde: 0, deviseId: devises[0]?.id ?? "" });
    setOuvert(true);
  };

  const ouvrirEdition = (caisse: LigneCaisse) => {
    setEnEdition(caisse);
    reset({
      nom: caisse.nom,
      solde: Number(caisse.solde),
      deviseId: caisse.deviseId,
    });
    setOuvert(true);
  };

  const onSubmit = async (form: Caisse) => {
    const action = enEdition
      ? modifierCaisse(businessId!, enEdition.id, form)
      : creerCaisse(businessId!, form);

    await toast
      .promise(action, {
        loading: enEdition ? "Modification…" : "Création…",
        success: () => {
          setOuvert(false);
          recharger();
          return enEdition ? "Caisse modifiée" : "Caisse créée";
        },
        error: (e: Error) => e.message,
      })
      .unwrap();
  };

  const definirParDefaut = async (caisse: LigneCaisse) => {
    await toast
      .promise(caisseParDefaut(businessId!, caisse.id), {
        loading: "Mise à jour…",
        success: () => {
          recharger();
          return `« ${caisse.nom} » est la caisse par défaut`;
        },
        error: (e: Error) => e.message,
      })
      .unwrap();
  };

  const supprimer = async (caisse: LigneCaisse) => {
    await toast
      .promise(supprimerCaisse(businessId!, caisse.id), {
        loading: "Suppression…",
        success: () => {
          recharger();
          return "Caisse supprimée";
        },
        error: (e: Error) => e.message,
      })
      .unwrap();
  };

  const symbole = (deviseId: string) =>
    devises.find((d) => d.id === deviseId)?.symbole ?? "";

  return (
    <PageRessource
      titre="Caisses"
      description="Vos caisses et leur solde, une par devise."
      businessRequis
      businessId={businessId}
      chargement={chargement}
      erreur={erreur}
      vide={donnees.length === 0}
      messageVide="Aucune caisse ouverte pour le moment."
      onReessayer={recharger}
      action={
        <Button onClick={ouvrirCreation}>
          <PlusIcon className="size-4" />
          Nouvelle caisse
        </Button>
      }
    >
      <div className="overflow-hidden rounded-lg border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Nom</TableHead>
              <TableHead className="text-right">Solde</TableHead>
              <TableHead>Statut</TableHead>
              <TableHead className="w-[1%] text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {donnees.map((caisse) => (
              <TableRow key={caisse.id}>
                <TableCell className="font-medium">{caisse.nom}</TableCell>
                <TableCell className="text-right tabular-nums">
                  {Number(caisse.solde).toLocaleString("fr-FR")}{" "}
                  <span className="text-muted-foreground">
                    {symbole(caisse.deviseId)}
                  </span>
                </TableCell>
                <TableCell>
                  {caisse.parDefaut ? (
                    <Badge variant="secondary">Par défaut</Badge>
                  ) : (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => definirParDefaut(caisse)}
                    >
                      <CheckIcon className="size-4" />
                      Définir par défaut
                    </Button>
                  )}
                </TableCell>
                <TableCell className="text-right whitespace-nowrap">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => ouvrirEdition(caisse)}
                  >
                    Modifier
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    aria-label={`Supprimer la caisse ${caisse.nom}`}
                    onClick={() => supprimer(caisse)}
                  >
                    <Trash2Icon className="size-4 text-destructive" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <Dialog open={ouvert} onOpenChange={setOuvert}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              {enEdition ? "Modifier la caisse" : "Nouvelle caisse"}
            </DialogTitle>
            <DialogDescription>
              Une caisse porte un solde dans une seule devise.
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <FieldGroup>
              <FieldSet>
                <FieldLegend variant="label">Informations requises</FieldLegend>

                <Field data-invalid={!!errors.nom}>
                  <FieldLabel htmlFor="nom">
                    Nom {requis.has("nom") && <span className="text-destructive">*</span>}
                  </FieldLabel>
                  <Input
                    id="nom"
                    placeholder="Ex : Caisse principale"
                    aria-required={requis.has("nom")}
                    aria-invalid={!!errors.nom}
                    {...register("nom")}
                  />
                  <FieldError errors={[errors.nom]} />
                </Field>

                <Field data-invalid={!!errors.solde}>
                  <FieldLabel htmlFor="solde">
                    Solde initial{" "}
                    {requis.has("solde") && <span className="text-destructive">*</span>}
                  </FieldLabel>
                  <Input
                    id="solde"
                    type="number"
                    step="0.01"
                    inputMode="decimal"
                    placeholder="0"
                    aria-required={requis.has("solde")}
                    aria-invalid={!!errors.solde}
                    {...register("solde", { valueAsNumber: true })}
                  />
                  <FieldError errors={[errors.solde]} />
                </Field>

                <Field data-invalid={!!errors.deviseId}>
                  <FieldLabel htmlFor="deviseId">
                    Devise{" "}
                    {requis.has("deviseId") && (
                      <span className="text-destructive">*</span>
                    )}
                  </FieldLabel>
                  <NativeSelect
                    id="deviseId"
                    aria-required={requis.has("deviseId")}
                    aria-invalid={!!errors.deviseId}
                    {...register("deviseId")}
                  >
                    <NativeSelectOption value="">
                      Sélectionner une devise
                    </NativeSelectOption>
                    {devises.map((devise) => (
                      <NativeSelectOption key={devise.id} value={devise.id}>
                        {devise.nom ?? devise.type} ({devise.symbole})
                      </NativeSelectOption>
                    ))}
                  </NativeSelect>
                  <FieldError errors={[errors.deviseId]} />
                </Field>
              </FieldSet>
            </FieldGroup>

            <DialogFooter className="mt-6">
              <Button
                type="button"
                variant="outline"
                onClick={() => setOuvert(false)}
                disabled={isSubmitting}
              >
                Annuler
              </Button>
              <Button type="submit" disabled={!isValid || isSubmitting}>
                {isSubmitting
                  ? "Enregistrement…"
                  : enEdition
                    ? "Enregistrer"
                    : "Créer la caisse"}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </PageRessource>
  );
}

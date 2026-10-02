"use client"

import { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { PlusIcon, Trash2Icon } from "lucide-react";

import type * as z from "zod";
import { PromotionSchema, type Promotion } from "@/lib/validations";
import { champsRequis } from "@/lib/utils";
import { useBusiness } from "@/lib/business-context";
import {
  changerStatusPromotion,
  creerPromotion,
  listerPromotions,
  supprimerPromotion,
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
import { Textarea } from "@/components/ui/textarea";
import { NativeSelect, NativeSelectOption } from "@/components/ui/native-select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const requis = champsRequis(PromotionSchema.shape);
const Etoile = () => <span className="text-destructive">*</span>;

/** Le schéma transforme les dates : la saisie est en texte, la sortie en Date. */
type PromotionSaisie = z.input<typeof PromotionSchema>;

const TYPES = [
  { valeur: "POURCENTAGE", libelle: "Pourcentage" },
  { valeur: "MONTANT_FIXE", libelle: "Montant fixe" },
  { valeur: "BOGO", libelle: "Un acheté, un offert" },
  { valeur: "LIVRAISON_GRATUITE", libelle: "Livraison gratuite" },
] as const;

const STATUTS = ["EN_ATTENTE", "DRAFT", "ACTIVE", "PAUSE", "EXPIRE"] as const;

type LignePromotion = {
  id: string;
  nom?: string;
  codePromo?: string;
  type?: string;
  valeur?: number;
  status?: string;
  dateDebut?: string;
  dateFin?: string;
};

export default function Promotions() {
  const { businessId } = useBusiness();
  const [ouvert, setOuvert] = useState(false);

  const charger = useCallback(() => listerPromotions(businessId!), [businessId]);
  const { donnees, chargement, erreur, recharger } = useListe<LignePromotion>(
    charger,
    !!businessId
  );

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isValid },
  } = useForm<PromotionSaisie, unknown, Promotion>({
    resolver: zodResolver(PromotionSchema),
    mode: "onTouched",
  });

  const ouvrirCreation = () => {
    reset({
      nom: "",
      codePromo: "",
      type: "POURCENTAGE",
      valeur: 0,
      description: "",
    } as PromotionSaisie);
    setOuvert(true);
  };

  const onSubmit = async (form: Promotion) => {
    await toast
      .promise(creerPromotion(businessId!, form), {
        loading: "Création…",
        success: () => {
          setOuvert(false);
          recharger();
          return "Promotion créée";
        },
        error: (e: Error) => e.message,
      })
      .unwrap();
  };

  const changerStatut = async (promo: LignePromotion, status: string) => {
    await toast
      .promise(
        changerStatusPromotion(businessId!, promo.id, { status } as never),
        {
          loading: "Mise à jour…",
          success: () => {
            recharger();
            return "Statut mis à jour";
          },
          error: (e: Error) => e.message,
        }
      )
      .unwrap();
  };

  const supprimer = async (promo: LignePromotion) => {
    await toast
      .promise(supprimerPromotion(businessId!, promo.id), {
        loading: "Suppression…",
        success: () => {
          recharger();
          return "Promotion supprimée";
        },
        error: (e: Error) => e.message,
      })
      .unwrap();
  };

  return (
    <PageRessource
      titre="Promotions"
      description="Vos campagnes promotionnelles et leur cycle de vie."
      businessRequis
      businessId={businessId}
      chargement={chargement}
      erreur={erreur}
      vide={donnees.length === 0}
      messageVide="Aucune promotion créée pour le moment."
      onReessayer={recharger}
      action={
        <Button onClick={ouvrirCreation}>
          <PlusIcon className="size-4" />
          Nouvelle promotion
        </Button>
      }
    >
      <div className="overflow-hidden rounded-lg border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Nom</TableHead>
              <TableHead>Code</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Statut</TableHead>
              <TableHead className="w-[1%] text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {donnees.map((promo) => (
              <TableRow key={promo.id}>
                <TableCell className="font-medium">{promo.nom || "—"}</TableCell>
                <TableCell className="font-mono text-sm text-muted-foreground">
                  {promo.codePromo || "—"}
                </TableCell>
                <TableCell className="text-muted-foreground">
                  {TYPES.find((t) => t.valeur === promo.type)?.libelle ?? "—"}
                </TableCell>
                <TableCell>
                  <Badge variant={promo.status === "ACTIVE" ? "default" : "secondary"}>
                    {promo.status ?? "—"}
                  </Badge>
                </TableCell>
                <TableCell className="text-right whitespace-nowrap">
                  <NativeSelect
                    aria-label={`Changer le statut de ${promo.nom ?? "la promotion"}`}
                    value={promo.status ?? ""}
                    onChange={(e) => changerStatut(promo, e.target.value)}
                    className="inline-block w-auto"
                  >
                    {STATUTS.map((s) => (
                      <NativeSelectOption key={s} value={s}>
                        {s}
                      </NativeSelectOption>
                    ))}
                  </NativeSelect>
                  <Button
                    variant="ghost"
                    size="sm"
                    aria-label={`Supprimer ${promo.nom ?? "cette promotion"}`}
                    onClick={() => supprimer(promo)}
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
            <DialogTitle>Nouvelle promotion</DialogTitle>
            <DialogDescription>
              La date de fin doit être postérieure à la date de début.
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <FieldGroup>
              <FieldSet>
                <FieldLegend variant="label">Informations requises</FieldLegend>

                <Field data-invalid={!!errors.nom}>
                  <FieldLabel htmlFor="nom">
                    Nom {requis.has("nom") && <Etoile />}
                  </FieldLabel>
                  <Input
                    id="nom"
                    placeholder="Ex : Soldes de fin d'année"
                    aria-required={requis.has("nom")}
                    aria-invalid={!!errors.nom}
                    {...register("nom")}
                  />
                  <FieldError errors={[errors.nom]} />
                </Field>

                <Field data-invalid={!!errors.codePromo}>
                  <FieldLabel htmlFor="codePromo">
                    Code promo {requis.has("codePromo") && <Etoile />}
                  </FieldLabel>
                  <Input
                    id="codePromo"
                    placeholder="Ex : NOEL2026"
                    aria-required={requis.has("codePromo")}
                    aria-invalid={!!errors.codePromo}
                    {...register("codePromo")}
                  />
                  <FieldError errors={[errors.codePromo]} />
                </Field>

                <Field data-invalid={!!errors.type}>
                  <FieldLabel htmlFor="type">
                    Type {requis.has("type") && <Etoile />}
                  </FieldLabel>
                  <NativeSelect
                    id="type"
                    aria-required={requis.has("type")}
                    aria-invalid={!!errors.type}
                    {...register("type")}
                  >
                    {TYPES.map((t) => (
                      <NativeSelectOption key={t.valeur} value={t.valeur}>
                        {t.libelle}
                      </NativeSelectOption>
                    ))}
                  </NativeSelect>
                  <FieldError errors={[errors.type]} />
                </Field>

                <Field data-invalid={!!errors.valeur}>
                  <FieldLabel htmlFor="valeur">
                    Valeur {requis.has("valeur") && <Etoile />}
                  </FieldLabel>
                  <Input
                    id="valeur"
                    type="number"
                    step="0.01"
                    inputMode="decimal"
                    aria-required={requis.has("valeur")}
                    aria-invalid={!!errors.valeur}
                    {...register("valeur", { valueAsNumber: true })}
                  />
                  <FieldError errors={[errors.valeur]} />
                </Field>

                <Field data-invalid={!!errors.dateDebut}>
                  <FieldLabel htmlFor="dateDebut">
                    Date de début {requis.has("dateDebut") && <Etoile />}
                  </FieldLabel>
                  <Input
                    id="dateDebut"
                    type="datetime-local"
                    aria-required={requis.has("dateDebut")}
                    aria-invalid={!!errors.dateDebut}
                    {...register("dateDebut")}
                  />
                  <FieldError errors={[errors.dateDebut]} />
                </Field>

                <Field data-invalid={!!errors.dateFin}>
                  <FieldLabel htmlFor="dateFin">
                    Date de fin {requis.has("dateFin") && <Etoile />}
                  </FieldLabel>
                  <Input
                    id="dateFin"
                    type="datetime-local"
                    aria-required={requis.has("dateFin")}
                    aria-invalid={!!errors.dateFin}
                    {...register("dateFin")}
                  />
                  <FieldError errors={[errors.dateFin]} />
                </Field>
              </FieldSet>

              <Field data-invalid={!!errors.description}>
                <FieldLabel htmlFor="description">
                  Description{" "}
                  <span className="text-muted-foreground">(facultatif)</span>
                </FieldLabel>
                <Textarea
                  id="description"
                  rows={3}
                  aria-invalid={!!errors.description}
                  {...register("description")}
                />
                <FieldError errors={[errors.description]} />
              </Field>
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
                {isSubmitting ? "Enregistrement…" : "Créer la promotion"}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </PageRessource>
  );
}

"use client"

import { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { PlusIcon, Trash2Icon } from "lucide-react";

import { CategorieSchema, type Categorie } from "@/lib/validations";
import { champsRequis } from "@/lib/utils";
import { useBusiness } from "@/lib/business-context";
import {
  creerCategorie,
  listerCategories,
  modifierCategorie,
  supprimerCategorie,
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
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const requis = champsRequis(CategorieSchema.shape);
const Etoile = () => <span className="text-destructive">*</span>;

type LigneCategorie = Categorie & { id: string; parDefaut?: boolean };

export default function Categories() {
  const { businessId } = useBusiness();
  const [ouvert, setOuvert] = useState(false);
  const [enEdition, setEnEdition] = useState<LigneCategorie | null>(null);

  const charger = useCallback(() => listerCategories(businessId!), [businessId]);
  const { donnees, chargement, erreur, recharger } = useListe<LigneCategorie>(
    charger,
    !!businessId
  );

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isValid },
  } = useForm<Categorie>({
    resolver: zodResolver(CategorieSchema),
    mode: "onTouched",
    defaultValues: { nom: "", offreId: "" },
  });

  const ouvrirCreation = () => {
    setEnEdition(null);
    reset({ nom: "", offreId: "" });
    setOuvert(true);
  };

  const ouvrirEdition = (categorie: LigneCategorie) => {
    setEnEdition(categorie);
    reset({ nom: categorie.nom, offreId: categorie.offreId });
    setOuvert(true);
  };

  const onSubmit = async (form: Categorie) => {
    const action = enEdition
      ? modifierCategorie(enEdition.id, form)
      : creerCategorie(businessId!, form);

    await toast
      .promise(action, {
        loading: enEdition ? "Modification…" : "Création…",
        success: () => {
          setOuvert(false);
          recharger();
          return enEdition ? "Catégorie modifiée" : "Catégorie créée";
        },
        error: (e: Error) => e.message,
      })
      .unwrap();
  };

  const supprimer = async (categorie: LigneCategorie) => {
    await toast
      .promise(supprimerCategorie(categorie.id), {
        loading: "Suppression…",
        success: () => {
          recharger();
          return "Catégorie supprimée";
        },
        error: (e: Error) => e.message,
      })
      .unwrap();
  };

  return (
    <PageRessource
      titre="Catégories"
      description="Les catégories de votre business. Les catégories par défaut sont créées automatiquement."
      businessRequis
      businessId={businessId}
      chargement={chargement}
      erreur={erreur}
      vide={donnees.length === 0}
      messageVide="Aucune catégorie pour le moment."
      onReessayer={recharger}
      action={
        <Button onClick={ouvrirCreation}>
          <PlusIcon className="size-4" />
          Nouvelle catégorie
        </Button>
      }
    >
      <div className="overflow-hidden rounded-lg border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Nom</TableHead>
              <TableHead>Origine</TableHead>
              <TableHead className="w-[1%] text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {donnees.map((categorie) => (
              <TableRow key={categorie.id}>
                <TableCell className="font-medium">{categorie.nom}</TableCell>
                <TableCell>
                  {categorie.parDefaut ? (
                    <Badge variant="secondary">Par défaut</Badge>
                  ) : (
                    <span className="text-muted-foreground">Personnalisée</span>
                  )}
                </TableCell>
                <TableCell className="text-right whitespace-nowrap">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => ouvrirEdition(categorie)}
                  >
                    Modifier
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    aria-label={`Supprimer ${categorie.nom}`}
                    onClick={() => supprimer(categorie)}
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
              {enEdition ? "Modifier la catégorie" : "Nouvelle catégorie"}
            </DialogTitle>
            <DialogDescription>
              Une catégorie appartient à une offre et regroupe vos articles.
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
                    placeholder="Ex : Mode & Tissus"
                    aria-required={requis.has("nom")}
                    aria-invalid={!!errors.nom}
                    {...register("nom")}
                  />
                  <FieldError errors={[errors.nom]} />
                </Field>

                <Field data-invalid={!!errors.offreId}>
                  <FieldLabel htmlFor="offreId">
                    Offre {requis.has("offreId") && <Etoile />}
                  </FieldLabel>
                  <Input
                    id="offreId"
                    placeholder="Identifiant de l'offre"
                    aria-required={requis.has("offreId")}
                    aria-invalid={!!errors.offreId}
                    {...register("offreId")}
                  />
                  {errors.offreId ? (
                    <FieldError errors={[errors.offreId]} />
                  ) : (
                    <FieldDescription>
                      Le serveur n'expose pas encore de liste d'offres : saisissez
                      l'identifiant.
                    </FieldDescription>
                  )}
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
                    : "Créer la catégorie"}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </PageRessource>
  );
}

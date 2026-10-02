"use client"

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Navigate, useNavigate } from "react-router";
import { ChevronDownIcon, Loader2Icon } from "lucide-react";

import { BusinessSchema, type Business } from "@/lib/validations";
import { champsRequis, cn } from "@/lib/utils";
import { creer_business } from "@/lib/apis";
import { useBusiness } from "@/lib/business-context";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
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
import { Textarea } from "@/components/ui/textarea";

const requis = champsRequis(BusinessSchema.shape);

function Requis() {
  return (
    <span className="text-destructive" aria-hidden="true">
      *
    </span>
  );
}

export default function BusinessForm() {
  const navigate = useNavigate();
  const { aUnBusiness, pret, recharger } = useBusiness();
  const [complementsOuverts, setComplementsOuverts] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isValid },
  } = useForm<Business>({
    resolver: zodResolver(BusinessSchema),
    mode: "onTouched",
    reValidateMode: "onChange",
    defaultValues: {
      nom: "",
      slogan: "",
      website: "",
      description: "",
    },
  });

  if (!pret) {
    return <div role="status" className="p-4">Chargement…</div>;
  }

  if (aUnBusiness) {
    return <Navigate to="/acceuil" replace />;
  }

  const onSubmit = async (data: Business) => {
    const form: Business = {
      nom: data.nom,
      ...(data.slogan?.trim() ? { slogan: data.slogan.trim() } : {}),
      ...(data.website?.trim() ? { website: data.website.trim() } : {}),
      ...(data.description?.trim() ? { description: data.description.trim() } : {}),
    };

    await toast.promise(creer_business(form), {
      loading: "Création du business en cours…",
      success: (result) => {
        reset();
        recharger();
        navigate("/acceuil");
        return result?.message || "Votre business a été créé";
      },
      error: (err: Error) => err.message || "La création a échoué",
    }).unwrap().catch(() => undefined);
  };

  return (
    <div className="mx-auto w-full max-w-2xl px-4 py-6 lg:px-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-xl font-semibold">
            Créer un business
          </CardTitle>
          <CardDescription>
            Seul le nom est nécessaire pour démarrer. Vos catégories, attributs et
            devise par défaut sont créés automatiquement.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <FieldGroup>
              <FieldSet>
                <FieldLegend variant="label">
                  Informations requises
                </FieldLegend>

                <Field data-invalid={!!errors.nom}>
                  <FieldLabel htmlFor="nom">
                    Nom du business {requis.has("nom") && <Requis />}
                  </FieldLabel>
                  <Input
                    id="nom"
                    type="text"
                    autoComplete="organization"
                    placeholder="Ex : Maison Kivu"
                    aria-required={requis.has("nom")}
                    aria-invalid={!!errors.nom}
                    aria-describedby={errors.nom ? "nom-error" : "nom-aide"}
                    {...register("nom")}
                  />
                  {errors.nom ? (
                    <FieldError id="nom-error" errors={[errors.nom]} />
                  ) : (
                    <FieldDescription id="nom-aide">
                      Entre 4 et 50 caractères. C'est le nom que verront vos clients.
                    </FieldDescription>
                  )}
                </Field>
              </FieldSet>

              <Collapsible
                open={complementsOuverts}
                onOpenChange={setComplementsOuverts}
              >
                <CollapsibleTrigger
                  className={cn(
                    "flex w-full items-center justify-between rounded-md py-2 text-sm font-medium",
                    "text-muted-foreground transition-colors hover:text-foreground",
                    "focus-visible:ring-ring/50 focus-visible:outline-none focus-visible:ring-[3px]"
                  )}
                >
                  Informations complémentaires
                  <span className="flex items-center gap-2">
                    <span className="text-xs font-normal">facultatif</span>
                    <ChevronDownIcon
                      className={cn(
                        "size-4 transition-transform duration-200",
                        complementsOuverts && "rotate-180"
                      )}
                    />
                  </span>
                </CollapsibleTrigger>

                <CollapsibleContent>
                  <FieldGroup className="pt-4">
                    <Field data-invalid={!!errors.slogan}>
                      <FieldLabel htmlFor="slogan">Slogan</FieldLabel>
                      <Input
                        id="slogan"
                        type="text"
                        placeholder="Ex : Le meilleur du Kivu, livré chez vous"
                        aria-invalid={!!errors.slogan}
                        {...register("slogan")}
                      />
                      <FieldError errors={[errors.slogan]} />
                    </Field>

                    <Field data-invalid={!!errors.website}>
                      <FieldLabel htmlFor="website">Site web</FieldLabel>
                      <Input
                        id="website"
                        type="url"
                        inputMode="url"
                        placeholder="https://exemple.cd"
                        aria-invalid={!!errors.website}
                        {...register("website")}
                      />
                      <FieldError errors={[errors.website]} />
                    </Field>

                    <Field data-invalid={!!errors.description}>
                      <FieldLabel htmlFor="description">Description</FieldLabel>
                      <Textarea
                        id="description"
                        rows={4}
                        placeholder="Présentez votre activité en quelques mots…"
                        aria-invalid={!!errors.description}
                        {...register("description")}
                      />
                      <FieldError errors={[errors.description]} />
                    </Field>
                  </FieldGroup>
                </CollapsibleContent>
              </Collapsible>

              <Field orientation="horizontal" className="justify-end pt-2">
                <Button
                  type="button"
                  variant="outline"
                  disabled={isSubmitting}
                  onClick={() => navigate("/acceuil")}
                >
                  Annuler
                </Button>
                <Button type="submit" disabled={!isValid || isSubmitting}>
                  {isSubmitting && <Loader2Icon className="size-4 animate-spin" />}
                  {isSubmitting ? "Création…" : "Créer le business"}
                </Button>
              </Field>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

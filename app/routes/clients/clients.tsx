"use client"

import { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { PlusIcon, SearchIcon, Trash2Icon } from "lucide-react";

import { ClientSchema, type Client } from "@/lib/validations";
import { useBusiness } from "@/lib/business-context";
import {
  creerClient,
  listerClients,
  modifierClient,
  supprimerClient,
} from "@/lib/api/business";
import { PageRessource } from "@/components/ressource/page-ressource";
import { useListe } from "@/components/ressource/use-liste";

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

type LigneClient = Client & { id: string };

export default function Clients() {
  const { businessId } = useBusiness();
  const [recherche, setRecherche] = useState("");
  const [saisie, setSaisie] = useState("");
  const [ouvert, setOuvert] = useState(false);
  const [enEdition, setEnEdition] = useState<LigneClient | null>(null);

  const charger = useCallback(
    () => listerClients(businessId!, recherche || undefined),
    [businessId, recherche]
  );

  const { donnees, chargement, erreur, recharger } = useListe<LigneClient>(
    charger,
    !!businessId
  );

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isValid },
  } = useForm<Client>({
    resolver: zodResolver(ClientSchema),
    mode: "onTouched",
    defaultValues: { firstName: "", lastName: "", email: "" },
  });

  const ouvrirCreation = () => {
    setEnEdition(null);
    reset({ firstName: "", lastName: "", email: "" });
    setOuvert(true);
  };

  const ouvrirEdition = (client: LigneClient) => {
    setEnEdition(client);
    reset({
      firstName: client.firstName ?? "",
      lastName: client.lastName ?? "",
      email: client.email ?? "",
    });
    setOuvert(true);
  };

  const onSubmit = async (form: Client) => {
    const donneesUtiles: Client = {
      ...(form.firstName?.trim() ? { firstName: form.firstName.trim() } : {}),
      ...(form.lastName?.trim() ? { lastName: form.lastName.trim() } : {}),
      ...(form.email?.trim() ? { email: form.email.trim() } : {}),
    };

    const action = enEdition
      ? modifierClient(businessId!, enEdition.id, donneesUtiles)
      : creerClient(businessId!, donneesUtiles);

    await toast
      .promise(action, {
        loading: enEdition ? "Modification…" : "Création…",
        success: () => {
          setOuvert(false);
          recharger();
          return enEdition ? "Client modifié" : "Client créé";
        },
        error: (e: Error) => e.message,
      })
      .unwrap();
  };

  const supprimer = async (client: LigneClient) => {
    await toast
      .promise(supprimerClient(businessId!, client.id), {
        loading: "Suppression…",
        success: () => {
          recharger();
          return "Client supprimé";
        },
        error: (e: Error) => e.message,
      })
      .unwrap();
  };

  return (
    <PageRessource
      titre="Clients"
      description="Les clients rattachés à votre business."
      businessRequis
      businessId={businessId}
      chargement={chargement}
      erreur={erreur}
      vide={donnees.length === 0}
      messageVide="Aucun client enregistré pour le moment."
      onReessayer={recharger}
      action={
        <Button onClick={ouvrirCreation}>
          <PlusIcon className="size-4" />
          Nouveau client
        </Button>
      }
      outils={
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setRecherche(saisie);
          }}
          className="flex max-w-sm items-center gap-2"
        >
          <div className="relative flex-1">
            <SearchIcon className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              value={saisie}
              onChange={(e) => setSaisie(e.target.value)}
              placeholder="Rechercher un client…"
              aria-label="Rechercher un client"
              className="pl-9"
            />
          </div>
          <Button type="submit" variant="outline">
            Rechercher
          </Button>
        </form>
      }
    >
      <div className="overflow-hidden rounded-lg border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Nom</TableHead>
              <TableHead>Email</TableHead>
              <TableHead className="w-[1%] text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {donnees.map((client) => (
              <TableRow key={client.id}>
                <TableCell className="font-medium">
                  {client.fullName ||
                    [client.firstName, client.lastName].filter(Boolean).join(" ") ||
                    "—"}
                </TableCell>
                <TableCell className="text-muted-foreground">
                  {client.email || "—"}
                </TableCell>
                <TableCell className="text-right whitespace-nowrap">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => ouvrirEdition(client)}
                  >
                    Modifier
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    aria-label={`Supprimer ${client.fullName ?? "ce client"}`}
                    onClick={() => supprimer(client)}
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
              {enEdition ? "Modifier le client" : "Nouveau client"}
            </DialogTitle>
            <DialogDescription>
              Tous les champs sont facultatifs côté serveur : renseignez au moins
              un identifiant pour retrouver ce client.
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <FieldGroup>
              <FieldSet>
                <FieldLegend variant="label">Identité</FieldLegend>

                <Field data-invalid={!!errors.firstName}>
                  <FieldLabel htmlFor="firstName">Prénom</FieldLabel>
                  <Input
                    id="firstName"
                    placeholder="Ex : Amani"
                    aria-invalid={!!errors.firstName}
                    {...register("firstName")}
                  />
                  <FieldError errors={[errors.firstName]} />
                </Field>

                <Field data-invalid={!!errors.lastName}>
                  <FieldLabel htmlFor="lastName">Nom</FieldLabel>
                  <Input
                    id="lastName"
                    placeholder="Ex : Kabila"
                    aria-invalid={!!errors.lastName}
                    {...register("lastName")}
                  />
                  <FieldError errors={[errors.lastName]} />
                </Field>

                <Field data-invalid={!!errors.email}>
                  <FieldLabel htmlFor="email">Email</FieldLabel>
                  <Input
                    id="email"
                    type="email"
                    placeholder="client@exemple.cd"
                    aria-invalid={!!errors.email}
                    {...register("email")}
                  />
                  {errors.email ? (
                    <FieldError errors={[errors.email]} />
                  ) : (
                    <FieldDescription>
                      Sert à rattacher le client à un compte existant.
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
                    : "Créer le client"}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </PageRessource>
  );
}

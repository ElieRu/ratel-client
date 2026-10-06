"use client";

import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router";
import { ArrowLeft, CalendarDays, Heart, MessageSquare, Trash2 } from "lucide-react";
import { toast } from "sonner";

import {
  listerJaimes,
  lireArticle,
  modifierArticleAvecImages,
  supprimerArticle,
  type ArticleAvecRelations,
} from "@/lib/api/business";
import { useBusiness } from "@/lib/business-context";
import { FormulaireArticle } from "@/components/articles/formulaire-article";
import { PageRessource } from "@/components/ressource/page-ressource";
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const dateLisible = (date: string) =>
  new Date(date).toLocaleString("fr-FR", {
    dateStyle: "medium",
    timeStyle: "short",
  });

export default function DetailArticle() {
  const { id } = useParams();
  const { businessId } = useBusiness();
  const navigate = useNavigate();
  const [article, setArticle] = useState<ArticleAvecRelations | null>(null);
  const [nombreJaimes, setNombreJaimes] = useState(0);
  const [chargement, setChargement] = useState(true);
  const [erreur, setErreur] = useState<string | null>(null);
  const [enregistrement, setEnregistrement] = useState(false);
  const [suppressionOuverte, setSuppressionOuverte] = useState(false);
  const [suppressionEnCours, setSuppressionEnCours] = useState(false);
  const [erreurConfirmations, setErreurConfirmations] = useState<string | null>(null);

  useEffect(() => {
    if (!id || !businessId) return;
    let annule = false;
    setChargement(true);
    setErreur(null);
    setArticle(null);
    setNombreJaimes(0);
    setErreurConfirmations(null);

    const charger = async () => {
      const [articleResultat, jaimesResultat] =
        await Promise.allSettled([
          lireArticle(id),
          listerJaimes(id),
        ]);
      if (annule) return;
      if (articleResultat.status === "fulfilled") {
        setArticle(articleResultat.value);
      } else {
        setErreur(
          articleResultat.reason instanceof Error
            ? articleResultat.reason.message
            : "Le chargement de l’article a échoué."
        );
      }
      if (jaimesResultat.status === "fulfilled") {
        setNombreJaimes(Number(jaimesResultat.value) || 0);
      } else {
        setErreurConfirmations((courante) =>
          courante ??
          (jaimesResultat.reason instanceof Error
            ? jaimesResultat.reason.message
            : "Le chargement des confirmations a échoué.")
        );
      }
      setChargement(false);
    };
    void charger();

    return () => {
      annule = true;
    };
  }, [id, businessId]);

  const enregistrer = async (form: FormData) => {
    if (!id) return;
    setEnregistrement(true);
    try {
      const misAJour = await modifierArticleAvecImages(id, form);
      setArticle(misAJour);
      toast.success("Les modifications de l’article ont été enregistrées.");
    } catch (cause) {
      toast.error(cause instanceof Error ? cause.message : "La modification de l’article a échoué.");
    } finally {
      setEnregistrement(false);
    }
  };

  const confirmerSuppression = async () => {
    if (!article) return;
    setSuppressionEnCours(true);
    try {
      await supprimerArticle(article.id);
      toast.success("L’article a été supprimé.");
      navigate("/articles");
    } catch (cause) {
      toast.error(cause instanceof Error ? cause.message : "La suppression de l’article a échoué.");
    } finally {
      setSuppressionEnCours(false);
      setSuppressionOuverte(false);
    }
  };

  return (
    <PageRessource
      titre={article?.designation ?? "Détail de l’article"}
      description="Activités, confirmations et gestion de l’article."
      businessRequis
      businessId={businessId}
      chargement={chargement}
      erreur={erreur}
      onReessayer={() => {
        if (id) {
          setChargement(true);
          lireArticle(id)
            .then(setArticle)
            .catch((cause: unknown) =>
              setErreur(cause instanceof Error ? cause.message : "Le chargement de l’article a échoué.")
            )
            .finally(() => setChargement(false));
        }
      }}
      action={
        <Button variant="outline" render={<Link to="/articles" />}>
          <ArrowLeft /> Retour aux articles
        </Button>
      }
    >
      {article && (
        <div className="space-y-6">
          <Tabs defaultValue="activites" className="w-full">
            <TabsList>
              <TabsTrigger value="activites">
                <MessageSquare /> Activités
              </TabsTrigger>
              <TabsTrigger value="confirmations">
                <Heart /> Confirmations
              </TabsTrigger>
            </TabsList>
            <TabsContent value="activites" />
            <TabsContent value="confirmations" className="pt-4">
              <div className="space-y-4">
                <section className="space-y-2 rounded-xl border p-4">
                  <h2 className="font-semibold">Confirmations d’intérêt</h2>
                  <p className="text-sm text-muted-foreground">
                    Nombre de mentions « J’aime » enregistrées pour cet article.
                  </p>
                  <p className="flex items-center gap-2 text-2xl font-semibold tabular-nums">
                    <Heart className="size-5 text-primary" /> {nombreJaimes}
                  </p>
                  {erreurConfirmations && (
                    <p role="alert" className="text-sm text-destructive">{erreurConfirmations}</p>
                  )}
                </section>
                <section className="space-y-4 rounded-xl border p-4">
                  <h2 className="font-semibold">Historique de l’article</h2>
                  <ol className="space-y-3">
                    <li className="flex gap-3">
                      <CalendarDays className="mt-0.5 size-4 shrink-0 text-muted-foreground" />
                      <span>
                        Article créé le <time dateTime={article.createdAt}>{dateLisible(article.createdAt)}</time>
                      </span>
                    </li>
                    {article.updatedAt !== article.createdAt && (
                      <li className="flex gap-3">
                        <CalendarDays className="mt-0.5 size-4 shrink-0 text-muted-foreground" />
                        <span>
                          Dernière mise à jour le <time dateTime={article.updatedAt}>{dateLisible(article.updatedAt)}</time>
                        </span>
                      </li>
                    )}
                  </ol>
                </section>
              </div>
            </TabsContent>
          </Tabs>

          <section className="space-y-4 rounded-xl border p-4 lg:p-6">
            <div>
              <h2 className="font-semibold">Modifier l’article</h2>
              <p className="text-sm text-muted-foreground">
                Mettez à jour les informations, la catégorie, la devise et les images.
              </p>
            </div>
            <FormulaireArticle
              article={article}
              enregistrement={enregistrement}
              onCancel={() => navigate("/articles")}
              onSave={enregistrer}
            />
          </section>

          <section className="space-y-3 rounded-xl border border-destructive/40 p-4">
            <div>
              <h2 className="font-semibold">Zone de danger</h2>
              <p className="text-sm text-muted-foreground">
                La suppression de cet article est définitive.
              </p>
            </div>
            <Button
              variant="destructive"
              onClick={() => setSuppressionOuverte(true)}
              disabled={suppressionEnCours}
            >
              <Trash2 /> Supprimer l’article
            </Button>
          </section>
        </div>
      )}

      <AlertDialog open={suppressionOuverte} onOpenChange={setSuppressionOuverte}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Supprimer cet article ?</AlertDialogTitle>
            <AlertDialogDescription>
              Cette action est définitive. L’article et les données qui lui sont liées seront supprimés.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel disabled={suppressionEnCours}>Annuler</AlertDialogCancel>
            <AlertDialogAction
              onClick={(event) => {
                event.preventDefault();
                void confirmerSuppression();
              }}
              disabled={suppressionEnCours}
              className="bg-destructive text-white hover:bg-destructive/90"
            >
              {suppressionEnCours ? "Suppression…" : "Supprimer"}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </PageRessource>
  );
}

"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { Link } from "react-router";
import { Grid2X2, List, PlusIcon, Search, Trash2 } from "lucide-react";
import { toast } from "sonner";

import {
  listerArticles,
  listerCategories,
  modifierModeAffichageArticles,
  supprimerArticle,
  type ArticlesViewMode,
  type ArticleAvecRelations,
} from "@/lib/api/business";
import { useBusiness } from "@/lib/business-context";
import { PageRessource } from "@/components/ressource/page-ressource";
import { useListe } from "@/components/ressource/use-liste";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  NativeSelect,
  NativeSelectOption,
} from "@/components/ui/native-select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
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

type CategoryOption = { id: string; nom: string };
const TAILLE_PAGE = 10;
const IMAGE_PAR_DEFAUT = "/images/articles/article-par-defaut.svg";

export default function Articles() {
  const { businessId, user, pret } = useBusiness();
  const [recherche, setRecherche] = useState("");
  const [categorieId, setCategorieId] = useState("");
  const [selection, setSelection] = useState<string[]>([]);
  const [page, setPage] = useState(0);
  const [suppressionCibles, setSuppressionCibles] = useState<string[]>([]);
  const [suppressionEnCours, setSuppressionEnCours] = useState(false);
  const [modeAffichage, setModeAffichage] = useState<ArticlesViewMode>("TABLE");
  const [sauvegardeMode, setSauvegardeMode] = useState(false);
  const chargerArticles = useCallback(
    () => (businessId ? listerArticles(businessId) : Promise.resolve([])),
    [businessId]
  );
  const chargerCategories = useCallback(
    () => (businessId ? listerCategories(businessId) : Promise.resolve([])),
    [businessId]
  );
  const {
    donnees: articles,
    chargement,
    erreur,
    recharger,
  } = useListe<ArticleAvecRelations>(chargerArticles, !!businessId);
  const { donnees: categories } = useListe<CategoryOption>(
    chargerCategories,
    !!businessId
  );

  const articlesFiltres = useMemo(() => {
    const terme = recherche.trim().toLocaleLowerCase("fr");
    return articles.filter((article) => {
      const correspondRecherche =
        !terme ||
        article.designation.toLocaleLowerCase("fr").includes(terme) ||
        (article.description ?? "").toLocaleLowerCase("fr").includes(terme);
      const correspondCategorie =
        !categorieId || article.categorieId === categorieId;
      return correspondRecherche && correspondCategorie;
    });
  }, [articles, categorieId, recherche]);
  const nombrePages = Math.ceil(articlesFiltres.length / TAILLE_PAGE);
  const pageCourante = Math.min(page, Math.max(0, nombrePages - 1));
  const articlesPage = articlesFiltres.slice(
    pageCourante * TAILLE_PAGE,
    (pageCourante + 1) * TAILLE_PAGE
  );
  const idsPage = articlesPage.map((article) => article.id);
  const tousSelectionnes =
    idsPage.length > 0 && idsPage.every((articleId) => selection.includes(articleId));

  useEffect(() => {
    setPage(0);
  }, [recherche, categorieId]);

  useEffect(() => {
    if (pret) {
      setModeAffichage(
        user?.articlesViewMode === "GRID" ? "GRID" : "TABLE"
      );
    }
  }, [pret, user?.articlesViewMode]);

  const changerModeAffichage = async () => {
    if (sauvegardeMode) return;
    const modeSuivant = modeAffichage === "TABLE" ? "GRID" : "TABLE";
    setSauvegardeMode(true);
    try {
      await modifierModeAffichageArticles(modeSuivant);
      setModeAffichage(modeSuivant);
    } catch (cause) {
      toast.error(
        cause instanceof Error
          ? cause.message
          : "Le mode d’affichage n’a pas pu être enregistré."
      );
    } finally {
      setSauvegardeMode(false);
    }
  };

  const basculerSelection = (articleId: string) => {
    setSelection((courante) =>
      courante.includes(articleId)
        ? courante.filter((id) => id !== articleId)
        : [...courante, articleId]
    );
  };

  const basculerPage = () => {
    setSelection((courante) =>
      tousSelectionnes
        ? courante.filter((id) => !idsPage.includes(id))
        : [...new Set([...courante, ...idsPage])]
    );
  };

  const ouvrirSuppression = (ids: string[]) => {
    setSuppressionCibles(ids);
  };

  const supprimerSelection = async () => {
    if (suppressionCibles.length === 0) return;
    setSuppressionEnCours(true);
    const resultats = await Promise.allSettled(
      suppressionCibles.map((id) => supprimerArticle(id))
    );
    const nombreSupprimes = resultats.filter(
      (resultat) => resultat.status === "fulfilled"
    ).length;
    const echecs = resultats.filter(
      (resultat): resultat is PromiseRejectedResult =>
        resultat.status === "rejected"
    );
    await new Promise<void>((resolve) => {
      recharger();
      window.setTimeout(resolve, 0);
    });
    setSelection((courante) =>
      courante.filter((id) =>
        resultats[suppressionCibles.indexOf(id)]?.status !== "fulfilled"
      )
    );
    if (nombreSupprimes > 0) {
      toast.success(
        nombreSupprimes === 1
          ? "L’article a été supprimé."
          : `${nombreSupprimes} articles ont été supprimés.`
      );
    }
    if (echecs.length > 0) {
      const premierEchec = echecs[0].reason;
      toast.error(
        premierEchec instanceof Error
          ? `${echecs.length} suppression(s) ont échoué : ${premierEchec.message}`
          : `${echecs.length} suppression(s) ont échoué.`
      );
    }
    setSuppressionEnCours(false);
    setSuppressionCibles([]);
  };

  return (
    <PageRessource
      titre="Gestion des articles"
      description="Le catalogue de votre business."
      businessRequis
      businessId={businessId}
      chargement={chargement}
      erreur={erreur}
      vide={articles.length === 0}
      messageVide="Aucun article au catalogue pour le moment."
      onReessayer={recharger}
      action={
        <Button render={<Link to="/articles/nouveau" />}>
          <PlusIcon className="size-4" />
          Nouvel article
        </Button>
      }
      outils={
        <div className="flex flex-wrap items-center gap-3">
          <label className="relative min-w-[min(100%,18rem)] flex-1">
            <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              value={recherche}
              onChange={(event) => setRecherche(event.currentTarget.value)}
              placeholder="Rechercher un article…"
              aria-label="Rechercher un article"
              className="pl-9"
            />
          </label>
          <NativeSelect
            value={categorieId}
            onChange={(event) => setCategorieId(event.currentTarget.value)}
            aria-label="Filtrer par catégorie"
            className="w-full sm:w-56"
          >
            <NativeSelectOption value="">Toutes les catégories</NativeSelectOption>
            {categories.map((categorie) => (
              <NativeSelectOption key={categorie.id} value={categorie.id}>
                {categorie.nom}
              </NativeSelectOption>
            ))}
          </NativeSelect>
          <Button
            type="button"
            variant="outline"
            size="icon"
            aria-label={
              modeAffichage === "TABLE"
                ? "Afficher les articles en grille"
                : "Afficher les articles en tableau"
            }
            aria-pressed={modeAffichage === "GRID"}
            onClick={() => void changerModeAffichage()}
            disabled={!pret || sauvegardeMode}
          >
            {modeAffichage === "TABLE" ? <Grid2X2 /> : <List />}
          </Button>
          <Button
            type="button"
            variant="destructive"
            disabled={selection.length === 0}
            onClick={() => ouvrirSuppression(selection)}
          >
            <Trash2 /> Supprimer ({selection.length})
          </Button>
        </div>
      }
    >
      <div className="space-y-3">
        {modeAffichage === "TABLE" ? (
        <div className="overflow-hidden rounded-lg border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-10">
                  <input
                    type="checkbox"
                    aria-label="Sélectionner les articles de cette page"
                    checked={tousSelectionnes}
                    onChange={basculerPage}
                    disabled={idsPage.length === 0}
                    className="size-4 bg-transparent accent-primary opacity-70"
                  />
                </TableHead>
                <TableHead>Image</TableHead>
                <TableHead>Désignation</TableHead>
                <TableHead>Catégorie</TableHead>
                <TableHead className="text-right">PU</TableHead>
                <TableHead className="text-right">En stock</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {articlesPage.length > 0 ? (
                articlesPage.map((article) => {
                  const imageParDefaut = article.images?.find(
                    (item) => item.isDefault
                  );
                  const image = imageParDefaut?.url || IMAGE_PAR_DEFAUT;
                  return (
                    <TableRow key={article.id}>
                      <TableCell>
                        <input
                          type="checkbox"
                          aria-label={`Sélectionner ${article.designation}`}
                          checked={selection.includes(article.id)}
                          onChange={() => basculerSelection(article.id)}
                          className="size-4 bg-transparent accent-primary opacity-70"
                        />
                      </TableCell>
                      <TableCell>
                        <img
                          src={image}
                          alt=""
                          className="size-12 rounded-md border bg-muted object-cover"
                          onError={(event) => {
                            event.currentTarget.src = IMAGE_PAR_DEFAUT;
                          }}
                        />
                      </TableCell>
                      <TableCell>
                        <Link
                          to={`/articles/${article.id}`}
                          className="font-medium text-primary underline-offset-4 hover:underline"
                        >
                          {article.designation}
                        </Link>
                      </TableCell>
                      <TableCell>{article.categorie?.nom ?? "—"}</TableCell>
                      <TableCell className="text-right tabular-nums">
                        {Number(article.pu).toLocaleString("fr-FR")}{" "}
                        <span className="text-muted-foreground">
                          {article.devise?.symbole ?? ""}
                        </span>
                      </TableCell>
                      <TableCell className="text-right tabular-nums">
                        {article.stocks?.reduce(
                          (total, stock) => total + stock.qtteDisponible,
                          0
                        ) || "vide"}
                      </TableCell>
                    </TableRow>
                  );
                })
              ) : (
                <TableRow>
                  <TableCell colSpan={6} className="h-24 text-center text-muted-foreground">
                    Aucun article ne correspond à la recherche.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {articlesPage.length > 0 ? (
              articlesPage.map((article) => {
                const imageParDefaut = article.images?.find(
                  (item) => item.isDefault
                );
                const image = imageParDefaut?.url || IMAGE_PAR_DEFAUT;
                const stockDisponible = article.stocks?.reduce(
                  (total, stock) => total + stock.qtteDisponible,
                  0
                ) || 0;
                return (
                  <article key={article.id} className="relative space-y-3 rounded-lg border p-4">
                    <input
                      type="checkbox"
                      aria-label={`Sélectionner ${article.designation}`}
                      checked={selection.includes(article.id)}
                      onChange={() => basculerSelection(article.id)}
                      className="absolute right-4 top-4 size-4 bg-transparent accent-primary opacity-70"
                    />
                    <img
                      src={image}
                      alt=""
                      className="aspect-[4/3] w-full rounded-md border bg-muted object-cover"
                      onError={(event) => {
                        event.currentTarget.src = IMAGE_PAR_DEFAUT;
                      }}
                    />
                    <div className="space-y-2">
                      <Link
                        to={`/articles/${article.id}`}
                        className="block pr-8 font-medium text-primary underline-offset-4 hover:underline"
                      >
                        {article.designation}
                      </Link>
                      <p className="text-sm text-muted-foreground">
                        {article.categorie?.nom ?? "—"}
                      </p>
                      <p className="text-sm tabular-nums">
                        PU : {Number(article.pu).toLocaleString("fr-FR")}{" "}
                        <span className="text-muted-foreground">
                          {article.devise?.symbole ?? ""}
                        </span>
                      </p>
                      <p className="text-sm">
                        En stock : {stockDisponible || "vide"}
                      </p>
                    </div>
                  </article>
                );
              })
            ) : (
              <p className="col-span-full py-10 text-center text-muted-foreground">
                Aucun article ne correspond à la recherche.
              </p>
            )}
          </div>
        )}
        <nav
          aria-label="Pagination des articles"
          className="flex flex-wrap items-center justify-between gap-3"
        >
          <p aria-live="polite" className="text-sm text-muted-foreground">
            {articlesFiltres.length === 0
              ? "0 article"
              : `${pageCourante * TAILLE_PAGE + 1}–${Math.min(
                  (pageCourante + 1) * TAILLE_PAGE,
                  articlesFiltres.length
                )} sur ${articlesFiltres.length}`}
          </p>
          <div className="flex items-center gap-2">
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={() => setPage((courante) => Math.max(0, courante - 1))}
              disabled={pageCourante === 0}
            >
              Précédent
            </Button>
            <span className="text-sm tabular-nums">
              {nombrePages === 0 ? 0 : pageCourante + 1} / {nombrePages}
            </span>
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={() =>
                setPage((courante) => Math.min(nombrePages - 1, courante + 1))
              }
              disabled={pageCourante >= nombrePages - 1}
            >
              Suivant
            </Button>
          </div>
        </nav>
      </div>

      <AlertDialog
        open={suppressionCibles.length > 0}
        onOpenChange={(open) => {
          if (!open && !suppressionEnCours) setSuppressionCibles([]);
        }}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>
              Supprimer {suppressionCibles.length === 1 ? "cet article" : "ces articles"} ?
            </AlertDialogTitle>
            <AlertDialogDescription>
              {suppressionCibles.length === 1
                ? "Cette suppression est définitive."
                : `Cette action supprimera définitivement les ${suppressionCibles.length} articles sélectionnés.`}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel disabled={suppressionEnCours}>Annuler</AlertDialogCancel>
            <AlertDialogAction
              onClick={(event) => {
                event.preventDefault();
                void supprimerSelection();
              }}
              disabled={suppressionEnCours}
              className="bg-destructive text-white hover:bg-destructive/90"
            >
              {suppressionEnCours ? "Suppression…" : "Confirmer la suppression"}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </PageRessource>
  );
}

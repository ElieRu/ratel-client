"use client";

import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { ArrowLeft } from "lucide-react";
import { toast } from "sonner";

import { FormulaireArticle } from "@/components/articles/formulaire-article";
import { PageRessource } from "@/components/ressource/page-ressource";
import { Button } from "@/components/ui/button";
import { creerArticleAvecImages } from "@/lib/api/business";
import { useBusiness } from "@/lib/business-context";

export default function NouvelArticle() {
  const { businessId } = useBusiness();
  const navigate = useNavigate();
  const [enregistrement, setEnregistrement] = useState(false);

  const enregistrer = async (form: FormData) => {
    if (!businessId) {
      toast.error("Aucun business actif n’est sélectionné.");
      return;
    }
    setEnregistrement(true);
    try {
      await creerArticleAvecImages(businessId, form);
      toast.success("L’article a été créé.");
      navigate("/articles");
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "La création de l’article a échoué.");
    } finally {
      setEnregistrement(false);
    }
  };

  return (
    <PageRessource
      titre="Nouvel article"
      description="Renseignez les informations et les images du nouvel article."
      businessRequis
      businessId={businessId}
      action={
        <Button variant="outline" render={<Link to="/articles" />}>
          <ArrowLeft /> Retour aux articles
        </Button>
      }
    >
      <div className="max-w-4xl rounded-xl border p-4 lg:p-6">
        <FormulaireArticle
          enregistrement={enregistrement}
          onCancel={() => navigate("/articles")}
          onSave={enregistrer}
        />
      </div>
    </PageRessource>
  );
}

import {
  requete,
  requeteAvecMessage,
  requeteMultipartAvecMessage,
  query,
} from "./client";
import type {
  Article,
  Business,
  BusinessType,
  Caisse,
  Categorie,
  Client,
  Devise,
  Fournisseur,
  Promotion,
  PromotionDraft,
  StatusPromotion,
  Achat,
  ArrayDetail,
  StatusAchat,
  Attribut,
  Commentaire,
} from "../validations";

/* ------------------------------------------------------------------ */
/* Businesses — monté sur /api/businesses                              */
/* ------------------------------------------------------------------ */

export const creerBusiness = (form: Business) =>
  requete("POST", "/api/businesses", form);

export const lireBusiness = (id: string) =>
  requete("GET", `/api/businesses/${id}`);

export const modifierBusiness = (id: string, form: Business) =>
  requete("PUT", `/api/businesses/${id}`, form);

export const changerTypeBusiness = (id: string, form: BusinessType) =>
  requete("PUT", `/api/businesses/${id}/changer-type`, form);

export const supprimerBusiness = (id: string) =>
  requete("DELETE", `/api/businesses/${id}`);

/* ------------------------------------------------------------------ */
/* Articles — monté sur /articles                                      */
/* ------------------------------------------------------------------ */

export const listerArticles = (search?: string) =>
  requete<any[]>("GET", `/articles${query({ search })}`);

export const creerArticle = (businessId: string, form: Article) =>
  requete("POST", `/articles/${businessId}`, form);

export const lireArticle = (id: string) => requete("GET", `/articles/${id}`);

export const modifierArticle = (id: string, form: Article) =>
  requete("PUT", `/articles/${id}`, form);

export const supprimerArticle = (id: string) =>
  requete("DELETE", `/articles/${id}`);

/* ------------------------------------------------------------------ */
/* Catégories — monté sur /categories                                  */
/* ------------------------------------------------------------------ */

export const listerCategories = (businessId: string) =>
  requete<any[]>("GET", `/categories/${businessId}/liste-categories`);

export const creerCategorie = (businessId: string, form: Categorie) =>
  requete("POST", `/categories/${businessId}`, form);

export const lireCategorie = (id: string) => requete("GET", `/categories/${id}`);

export const modifierCategorie = (id: string, form: Categorie) =>
  requete("PUT", `/categories/${id}`, form);

export const supprimerCategorie = (id: string) =>
  requete("DELETE", `/categories/${id}`);

/* ------------------------------------------------------------------ */
/* Attributs — monté sur /attributs                                    */
/* ------------------------------------------------------------------ */

export const listerAttributs = (articleId: string) =>
  requete<any[]>("GET", `/attributs/${articleId}/liste`);

export const creerAttribut = (articleId: string, form: Attribut) =>
  requete("POST", `/attributs/${articleId}`, form);

export const modifierAttribut = (id: string, form: Attribut) =>
  requete("PUT", `/attributs/${id}`, form);

export const supprimerAttribut = (id: string) =>
  requete("DELETE", `/attributs/${id}`);

/* ------------------------------------------------------------------ */
/* Devises — monté sur /devises                                        */
/* ------------------------------------------------------------------ */

export const listerDevises = (businessId: string) =>
  requete<any[]>("GET", `/devises/${businessId}`);

export const creerDevise = (businessId: string, form: Devise) =>
  requete("POST", `/devises/${businessId}`, form);

export const modifierDevise = (id: string, form: Devise) =>
  requete("PUT", `/devises/${id}`, form);

export const supprimerDevise = (id: string) =>
  requete("DELETE", `/devises/${id}`);

export const deviseParDefaut = (businessId: string, id: string) =>
  requete("PUT", `/devises/${businessId}/${id}/defaut`);

/* ------------------------------------------------------------------ */
/* Promotions — monté sur /promotions                                  */
/* ------------------------------------------------------------------ */

export const listerPromotions = (businessId: string) =>
  requete<any[]>("GET", `/promotions/${businessId}/promotions`);

export const creerPromotion = (businessId: string, form: Promotion) =>
  requete("POST", `/promotions/${businessId}/promotions`, form);

export const brouillonPromotion = (businessId: string, form: PromotionDraft) =>
  requete("POST", `/promotions/${businessId}/promotions/draft`, form);

export const lirePromotion = (businessId: string, id: string) =>
  requete("GET", `/promotions/${businessId}/promotions/${id}`);

export const modifierPromotion = (
  businessId: string,
  id: string,
  form: Promotion
) => requete("PUT", `/promotions/${businessId}/promotions/${id}`, form);

export const changerStatusPromotion = (
  businessId: string,
  id: string,
  form: StatusPromotion
) =>
  requete(
    "PUT",
    `/promotions/${businessId}/promotions/${id}/changer-status`,
    form
  );

export const supprimerPromotion = (businessId: string, id: string) =>
  requete("DELETE", `/promotions/${businessId}/promotions/${id}`);

export const supprimerPromotions = (businessId: string, ids: string[]) =>
  requete("DELETE", `/promotions/${businessId}/promotions`, ids);

/* ------------------------------------------------------------------ */
/* Commentaires — monté sur /commentaires                              */
/* ------------------------------------------------------------------ */

export const listerCommentaires = (articleId: string) =>
  requete<any[]>("GET", `/commentaires/${articleId}`);

export const creerCommentaire = (articleId: string, form: Commentaire) =>
  requete("POST", `/commentaires/${articleId}`, form);

export const modifierCommentaire = (id: string, form: Commentaire) =>
  requete("PUT", `/commentaires/${id}`, form);

export const supprimerCommentaire = (id: string) =>
  requete("DELETE", `/commentaires/${id}`);

/* ------------------------------------------------------------------ */
/* Jaimes — monté sur /jaimes                                          */
/* ------------------------------------------------------------------ */

export const listerJaimes = (articleId: string) =>
  requete<any[]>("GET", `/jaimes/${articleId}/jaimes`);

export const jaimer = (articleId: string) =>
  requete("POST", `/jaimes/${articleId}/jaime`);

export const jaimerPas = (articleId: string) =>
  requete("POST", `/jaimes/${articleId}/jaimepas`);

/* ------------------------------------------------------------------ */
/* Abonnements — monté sur /abonnements                                */
/* ------------------------------------------------------------------ */

export const listerAbonnements = (businessId: string) =>
  requete<any[]>("GET", `/abonnements/${businessId}/abonnements`);

export const sabonner = (businessId: string) =>
  requete("POST", `/abonnements/${businessId}/sabonner`);

export const desabonner = (businessId: string) =>
  requete("POST", `/abonnements/${businessId}/desabonner`);

/* ------------------------------------------------------------------ */
/* Clients — monté sur /businesses                                     */
/* ------------------------------------------------------------------ */

export const listerClients = (businessId: string, search?: string) =>
  requete<any[]>("GET", `/businesses/${businessId}/clients${query({ search })}`);

export const creerClient = (businessId: string, form: Client) =>
  requete("POST", `/businesses/${businessId}/clients`, form);

export const lireClient = (businessId: string, id: string) =>
  requete("GET", `/businesses/${businessId}/clients/${id}`);

export const modifierClient = (businessId: string, id: string, form: Client) =>
  requete("PUT", `/businesses/${businessId}/clients/${id}`, form);

export const supprimerClient = (businessId: string, id: string) =>
  requete("DELETE", `/businesses/${businessId}/clients/${id}`);

export const supprimerClients = (businessId: string, ids: string[]) =>
  requete("DELETE", `/businesses/${businessId}/clients`, ids);

/* ------------------------------------------------------------------ */
/* Fournisseurs — monté sur /businesses                                */
/* ------------------------------------------------------------------ */

export type FournisseurEnregistre = {
  id: string;
  nom: string | null;
  email: string | null;
  logo: string;
  userImage?: string | null;
  website: string | null;
  businessId: string;
  userId?: string | null;
  isVerified?: boolean;
  invitationExpiresAt?: string | null;
};

export const DEFAULT_FOURNISSEUR_LOGO =
  "http://localhost:3000/uploads/fournisseurs/default-logo-fournisseur.png";

export type FournisseurDetail = FournisseurEnregistre & {
  createdAt: string;
  updatedAt: string;
  adresses: Array<{
    id: string;
    adresse: string;
    ville: string;
    region: string;
    pays: string;
    codePostal: string | null;
  }>;
  contacts: Array<{
    id: string;
    type: "EMAIL" | "PHONE" | "WHATSAPP";
    label: string | null;
    email: string | null;
    phone: string | null;
    status: string;
  }>;
  details: Array<{
    id: string;
    qtte: number;
    pu: number;
    pt: number;
    createdAt: string;
    article: { id: string; designation: string };
    achat: { id: string; status: string; dateAchat: string | null } | null;
    devise: { symbole: string; type: string };
  }>;
};

export type UtilisateurFournisseurDisponible = {
  id: string;
  full_name: string | null;
  image: string | null;
  email: string | null;
  clients: {
    fullName: string | null;
    email: string | null;
    profile: string;
  } | null;
  contacts: Array<{
    id: string;
    label: string | null;
    email: string | null;
    phone: string | null;
  }>;
};

export const listerFournisseurs = (businessId: string, nom?: string) =>
  requete<FournisseurEnregistre[]>(
    "GET",
    `/businesses/${businessId}/fournisseurs${query({ nom })}`
  );

export const listerUtilisateursFournisseurDisponibles = (
  businessId: string,
  search?: string
) =>
  requete<UtilisateurFournisseurDisponible[]>(
    "GET",
    `/businesses/${businessId}/fournisseurs-utilisateurs-disponibles${query({ search })}`
  );

export const inviterUtilisateursCommeFournisseurs = (
  businessId: string,
  userIds: string[]
) =>
  requeteAvecMessage<FournisseurEnregistre[]>(
    "POST",
    `/businesses/${businessId}/fournisseurs-utilisateurs`,
    userIds
  );

export const validerInvitationFournisseur = (invitationId: string, code: string) =>
  requeteAvecMessage<null>(
    "POST",
    `/businesses/fournisseurs-invitations/${invitationId}/verify`,
    { code }
  );

export const renvoyerInvitationFournisseur = (businessId: string, id: string) =>
  requeteAvecMessage<{ success: boolean }>(
    "POST",
    `/businesses/${businessId}/fournisseurs/${id}/resend-invitation`
  );

export const creerFournisseur = (
  businessId: string,
  form: Fournisseur
) =>
  requete<FournisseurEnregistre>(
    "POST",
    `/businesses/${businessId}/fournisseurs`,
    form
  );

export const creerFournisseurAvecLogo = (
  businessId: string,
  form: Pick<Fournisseur, "nom" | "email">,
  logo?: File
) => {
  const corps = new FormData();
  corps.set("nom", form.nom ?? "");
  if (form.email) corps.set("email", form.email);
  if (logo) corps.set("logo", logo);
  return requeteMultipartAvecMessage<FournisseurEnregistre>(
    `/businesses/${businessId}/fournisseurs/avec-logo`,
    corps
  );
};

export const lireFournisseur = (businessId: string, id: string) =>
  requete<FournisseurDetail>("GET", `/businesses/${businessId}/fournisseurs/${id}`);

export const modifierFournisseur = (
  businessId: string,
  id: string,
  form: Fournisseur
) => requete("PUT", `/businesses/${businessId}/fournisseurs/${id}`, form);

export const modifierFournisseurAvecLogo = (
  businessId: string,
  id: string,
  form: Fournisseur,
  logo?: File
) => {
  const corps = new FormData();
  if (form.nom) corps.set("nom", form.nom);
  if (form.email) corps.set("email", form.email);
  if (form.website) corps.set("website", form.website);
  if (logo) corps.set("logo", logo);
  return requeteMultipartAvecMessage<FournisseurEnregistre>(
    `/businesses/${businessId}/fournisseurs/${id}/avec-logo`,
    corps,
    "PUT"
  );
};

export const supprimerFournisseur = (businessId: string, id: string) =>
  requeteAvecMessage<FournisseurEnregistre>(
    "DELETE",
    `/businesses/${businessId}/fournisseurs/${id}`
  );

export const supprimerFournisseurs = (businessId: string, ids: string[]) =>
  requeteAvecMessage<number>(
    "DELETE",
    `/businesses/${businessId}/fournisseurs`,
    ids
  );

/* ------------------------------------------------------------------ */
/* Caisses — monté sur /businesses                                     */
/* ------------------------------------------------------------------ */

export const listerCaisses = (businessId: string) =>
  requete<any[]>("GET", `/businesses/${businessId}/caisses`);

export const creerCaisse = (businessId: string, form: Caisse) =>
  requete("POST", `/businesses/${businessId}/caisses`, form);

export const lireCaisse = (businessId: string, id: string) =>
  requete("GET", `/businesses/${businessId}/caisses/${id}`);

export const modifierCaisse = (businessId: string, id: string, form: Caisse) =>
  requete("PUT", `/businesses/${businessId}/caisses/${id}`, form);

export const supprimerCaisse = (businessId: string, id: string) =>
  requete("DELETE", `/businesses/${businessId}/caisses/${id}`);

export const caisseParDefaut = (businessId: string, id: string) =>
  requete("PUT", `/businesses/${businessId}/caisses/${id}/changer-par-defaut`);

/* ------------------------------------------------------------------ */
/* Agents (travailleurs) — monté sur /businesses                       */
/* ------------------------------------------------------------------ */

export const listerAgents = (businessId: string) =>
  requete<any[]>("GET", `/businesses/${businessId}/agents`);

export const lireAgent = (businessId: string, id: string) =>
  requete("GET", `/businesses/${businessId}/agents/${id}`);

export const supprimerAgent = (businessId: string, id: string) =>
  requete("DELETE", `/businesses/${businessId}/agents/${id}`);

export const supprimerAgents = (businessId: string, ids: string[]) =>
  requete("DELETE", `/businesses/${businessId}/agents`, ids);

export const bloquerAgent = (businessId: string, id: string) =>
  requete("PUT", `/businesses/${businessId}/agents/${id}/status-bloque`);

export const activerAgent = (businessId: string, id: string) =>
  requete("PUT", `/businesses/${businessId}/agents/${id}/status-actif`);

/* ------------------------------------------------------------------ */
/* Invitations — monté sur /businesses                                 */
/* ------------------------------------------------------------------ */

export const listerInvitations = (
  businessId: string,
  params?: { search?: string; type?: string }
) =>
  requete<any[]>(
    "GET",
    `/businesses/${businessId}/invitations${query({ ...params })}`
  );

export const creerInvitation = (
  businessId: string,
  userId: string,
  form: { type: string }
) => requete("POST", `/businesses/${businessId}/invitations/${userId}`, form);

export const lireInvitation = (businessId: string, id: string) =>
  requete("GET", `/businesses/${businessId}/invitations/${id}`);

export const annulerInvitation = (businessId: string, id: string) =>
  requete("PUT", `/businesses/${businessId}/invitations/${id}`);

export const supprimerInvitation = (businessId: string, id: string) =>
  requete("DELETE", `/businesses/${businessId}/invitations/${id}`);

export const supprimerInvitations = (businessId: string, ids: string[]) =>
  requete("DELETE", `/businesses/${businessId}/invitations`, ids);

export const accepterInvitation = (businessId: string, id: string) =>
  requete(
    "PUT",
    `/businesses/${businessId}/invitations/${id}/accepted-invitation`
  );

export const mesInvitations = (userId: string, search?: string) =>
  requete<any[]>("GET", `/businesses/invitations/${userId}${query({ search })}`);

export const listerInvitables = (
  businessId: string,
  params?: { search?: string; type?: string }
) =>
  requete<any[]>(
    "GET",
    `/businesses/${businessId}/get-invited${query({ ...params })}`
  );

/* ------------------------------------------------------------------ */
/* Achats — monté sur /businesses                                      */
/* ------------------------------------------------------------------ */

export const listerAchats = (businessId: string) =>
  requete<any[]>("GET", `/businesses/${businessId}/achats`);

export const creerAchat = (businessId: string, details: ArrayDetail) =>
  requete("POST", `/businesses/${businessId}/achats`, details);

export const lireAchat = (businessId: string, id: string) =>
  requete("GET", `/businesses/${businessId}/achats/${id}`);

export const modifierAchat = (businessId: string, id: string, form: Achat) =>
  requete("PUT", `/businesses/${businessId}/achats/${id}`, form);

export const changerStatusAchat = (
  businessId: string,
  id: string,
  form: StatusAchat
) =>
  requete("PUT", `/businesses/${businessId}/achats/${id}/changer-status`, form);

export const supprimerAchat = (businessId: string, id: string) =>
  requete("DELETE", `/businesses/${businessId}/achats/${id}`);

export const supprimerAchats = (businessId: string, ids: string[]) =>
  requete("DELETE", `/businesses/${businessId}/achats`, ids);

/* ------------------------------------------------------------------ */
/* Détails d'achat — monté sur /details                                */
/* ------------------------------------------------------------------ */

export const lireDetail = (businessId: string, id: string) =>
  requete("GET", `/details/${businessId}/details/${id}`);

export const changerQtteDetail = (id: string, qtte: number) =>
  requete("PUT", `/details/${id}/changer-qtte`, { qtte });

export const changerPrixUnitaireDetail = (id: string, pu: number) =>
  requete("PUT", `/details/${id}/changer-prix-unitaire`, { pu });

export const changerDeviseDetail = (id: string, deviseId: string) =>
  requete("PUT", `/details/${id}/changer-devise`, { deviseId });

export const detailEnStock = (id: string, enStock: boolean) =>
  requete("PUT", `/details/${id}/en-stock${query({ enStock: String(enStock) })}`);

export const supprimerDetail = (businessId: string, id: string) =>
  requete("DELETE", `/details/${businessId}/details/${id}`);

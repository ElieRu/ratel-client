// export interface UserForm {
//     firstName: string;
//     lastName: string;
//     email: string;
//     birthday: string;
// }


import * as z from "zod";
import { TypeDevise, StatusAchat, StatusPromotion, TypeBusiness, TypeInvitation, TypePromotion, UserSex, StatusContact, TypeContact } from "./enums";
// import { TypeDevise, StatusAchat, StatusPromotion, TypeBusiness, TypeInvitation, TypePromotion, UserSex } from "../generated/prisma/enums";

export const userRoles = ["USER", "ADMIN", "MANAGER"] as const;
export const typeContact = ["PHONE", "EMAIL"] as const;


export const UserSchema = z.object({
    email: z.email({ message: "L'adresse mail est invalide" })
        .trim()
        .toLowerCase(),
    firstName: z.string()
        .min(4, "Pas moins de 4 caractères")
        .max(50, "Pas plus de 50 caractères")
        .trim()
        .toLowerCase(),
    lastName: z.string()
        .min(4, "Pas moins de 4 caractères")
        .max(50, "Pas plus de 50 caractères")
        .nullable()
        .optional(),
    fullName: z.string()
        .min(4, "Pas moins de 4 caractères")
        .max(100, "Pas plus de 100 caractères")
        .trim()
        .toLowerCase(),
    password: z.string()
        .min(8, "Pas moins de 8 caractères")
        .max(16, "Pas plus de 16 caractères")
        .trim()
        .toLowerCase(),
    profileImage: z.url({ message: "Le lien d'image est incorrecte" })
        .nullable()
        .optional()
});

export const ProfileSchema = z.object({
    profile: z.url({ message: "Le lien d'image est incorrecte" })
});

export const ContactSchema = z.discriminatedUnion("type", [
    z.object({
        id: z.string().optional(),
        label: z.string().optional(),
        parDefaut: z.boolean().optional(),
        status: z.string().optional(),
        type: z.literal("PHONE"),
        phone: z.string().regex(/^\+?[1-9]\d{1,14}$/, "Le numéro de téléphone est incorrecte"),
        email: z.string().nullable(),
    }),
    z.object({
        id: z.string().optional(),
        label: z.string().optional(),
        parDefaut: z.boolean().optional(),
        status: z.string().optional(),
        type: z.literal("EMAIL"),
        phone: z.string().nullable(),
        email: z.string().email("L'adresse mail est incorrecte")
    }),
]
);

export const AdresseSchema = z.object({
    label: z.string()
        .min(4, "Pas moins de 4 caractères")
        .max(50, "Pas plus de 50 caractères")
        .trim()
        .optional(),
    parDefaut: z.boolean().optional(),
    avenu: z.string()
        .min(4, "Pas moins de 4 caractères")
        .max(50, "Pas plus de 50 caractères")
        .trim()
        .toLowerCase()
        .optional(),
    quartier: z.string()
        .min(4, "Pas moins de 4 caractères")
        .max(50, "Pas plus de 50 caractères")
        .trim()
        .toLowerCase(),
    commune: z.string()
        .min(4, "Pas moins de 4 caractères")
        .max(50, "Pas plus de 50 caractères")
        .trim()
        .toLowerCase()
        .optional(),
    ville: z.string()
        .min(4, "Pas moins de 4 caractères")
        .max(50, "Pas plus de 50 caractères")
        .trim()
        .toLowerCase()
        .optional(),
    codePostal: z.string().optional(),
    indications: z.string()
        .min(5, "Pas moins de 5 caractères")
        .max(100, "Pas plus de 100 caractères")
        .trim()
        .toLowerCase()
        .nullable()
        .optional(),
    userId: z.string().optional(),
    businessId: z.string().optional()
});

export const BusinessSchema = z.object({
    nom: z.string()
        .min(4, "Pas moins de 4 caractères")
        .max(50, "Pas plus de 50 caractères")
        .toLowerCase()
        .trim()
});

export const BusinessTypeSchema = z.object({
    type: z.enum(TypeBusiness, "le type est incorrecte")
});

export const AbonnementSchema = z.object({
    userId: z.string()
});

export const OffreSchema = z.object({
    designation: z.string()
        .min(4, "Pas moins de 4 caractères")
        .max(50, "Pas plus de 50 caractères")
        .toLowerCase()
        .trim(),
    categories: z.string()
        .min(4, "Pas moins de 4 caractères")
        .max(50, "Pas plus de 50 caractères")
        .toLowerCase()
        .trim()
        .optional()
});

export const DeviseSchema = z.object({
    nom: z.string()
        .min(4, "Pas moins de 4 caractères")
        .max(50, "Pas plus de 50 caractères")
        .trim()
        .toLowerCase(),
    type: z.enum(TypeDevise, "Le type de devise est incorrecte"),
    symbole: z.string("Le symbole de devise est incorrecte"),
    tauxVente: z.int()
});

export const ArticleSchema = z.object({
    designation: z.string()
        .min(4, "Pas moins de 4 caractères")
        .max(50, "Pas plus de 50 caractères")
        .toLowerCase()
        .trim(),
    pu: z.number().finite(),
    description: z.string().optional(),
    categorieId: z.string(),
    deviseId: z.string(),
});

export const CategorieSchema = z.object({
    nom: z.string()
        .min(4, "Pas moins de 4 caractères")
        .max(50, "Pas plus de 50 caractères")
        .toLowerCase()
        .trim(),
    offreId: z.string()
});

export const AttributSchema = z.object({
    designation: z.string()
        .min(4, "Pas moins de 4 caractères")
        .max(50, "Pas plus de 50 caractères")
        .toLowerCase()
        .trim(),
    valeur: z.string()
        .toLowerCase()
        .trim()
        .min(4, "Pas moins de 4 caractères")
        .max(50, "Pas plus de 50 caractères")
        .optional()
});

export const CommentaireSchema = z.object({
    commentaire: z.string()
        .min(1, "Ce champ ne peux pas être vide")
        .max(500, "Pas plus de 500 caractères")
        .toLowerCase()
        .trim(),
    userId: z.string()
});

export const InvitationSchema = z.object({
    type: z.enum(TypeInvitation, "le type est incorrecte"),
});

export const ClientSchema = z.object({
    firstName: z.string()
        .min(4, "Pas moin de 4 caractères")
        .max(50, "Pas plus de 50 caractères")
        .toLowerCase()
        .trim()
        .optional(),
    lastName: z.string()
        .min(4, "Pas moin de 4 caractères")
        .max(50, "Pas plus de 50 caractères")
        .toLowerCase()
        .trim()
        .optional(),
    fullName: z.string()
        .toLowerCase()
        .trim()
        .optional(),
    email: z.email({ message: "l'adresse mail est invalide" })
        .trim()
        .toLowerCase()
        .optional(),
    sex: z.enum(UserSex, "le sexe est incorrecte")
        .optional(),
    birthday: z.date("le format n'est pas pris en charge")
        .optional(),
    profile: z.url({ message: "l'url est invalide" })
        .trim()
        .toLowerCase()
        .optional(),
});

export const FournisseurSchema = z.object({
    nom: z.string()
        .min(4, "Pas moin de 4 caractères")
        .max(50, "Pas plus de 50 caractères")
        .toLowerCase()
        .trim()
        .optional(),
    logo: z.url("le lien est incorrecte").optional(),
    email: z.email({ message: "l'adresse mail est invalide" }).optional(),
    website: z.url({ message: "le lien est incorrecte" }).optional(),
    description: z.string()
        .min(4, "Pas moin de 4 caractères")
        .max(100, "Pas plus de 100 caractères")
        .toLowerCase()
        .trim()
        .optional()
});

export const CaisseSchema = z.object({
    nom: z.string()
        .min(4, "Pas moin de 4 caractères")
        .max(50, "Pas plus de 50 caractères")
        .toLowerCase()
        .trim(),
    solde: z.number("le contenu n'est pas un nombre"),
    deviseId: z.string("la devise est incorrecte"),
});

export const PromotionSchema = z.object({
    nom: z.string()
        .min(1, "Ce champ ne peux pas être vide")
        .max(50, "Pas plus de 50 caractères")
        .toLowerCase()
        .trim(),
    codePromo: z.string()
        .min(1, "Ce champ ne peux pas être vide")
        .max(50, "Pas plus de 50 caractères")
        .trim(),
    type: z.enum(TypePromotion, "le type est incorrecte"),
    valeur: z.number({
        message: "le format est incorrecte"
    }),
    qtteLimitee: z.number({
        message: "le format est incorrecte"
    }).optional(),
    dateDebut: z.string()
        .datetime({
            offset: true,
            message: "format de date est incorrecte"
        }).transform((str) => new Date(str)),
    dateFin: z.string()
        .datetime({
            offset: true,
            message: "format de date est incorrecte"
        }).transform((str) => new Date(str)),
    description: z.string()
        .min(5, "pas moins de 5 caractères")
        .max(100, "pas plus de 100 caractères")
        .toLowerCase()
        .trim()
        .optional()
})
    .refine(data => data.dateDebut < data.dateFin, {
        message: "la date finale doit être dans le future",
        path: ["dateFin"]
    });

export const PromotionDraftSchema = z.object({
    nom: z.string()
        .min(1, "Ce champ ne peux pas être vide")
        .max(50, "Pas plus de 50 caractères")
        .toLowerCase()
        .trim()
        .optional(),
    codePromo: z.string()
        .min(1, "Ce champ ne peux pas être vide")
        .max(50, "Pas plus de 50 caractères")
        .trim()
        .optional(),
    type: z.enum(TypePromotion, "le type est incorrecte").optional(),
    // the field status* can't appear in the form
    status: z.enum(StatusPromotion, "le status est incorrecte").default('DRAFT'),
    valeur: z.number({
        message: "le format est incorrecte"
    }).optional(),
    qtteLimitee: z.number({
        message: "le format est incorrecte"
    }).optional(),
    dateDebut: z.string()
        .datetime({
            offset: true,
            message: "format de date est incorrecte"
        }).optional(),
    dateFin: z.string()
        .datetime({
            offset: true,
            message: "format de date est incorrecte"
        }).optional(),
    description: z.string()
        .min(5, "pas moins de 5 caractères")
        .max(100, "pas plus de 100 caractères")
        .toLowerCase()
        .trim()
        .optional()
});

export const StatusPromotionSchema = z.object({
    status: z.enum(StatusPromotion, "le status est incorrecte"),
});

export const DetailSchema = z.object({
    articleId: z.string(),
    qtte: z.number(),
    pu: z.number().finite(),
    pt: z.number().finite().optional(),
    deviseId: z.string().optional(),
    fournisseurId: z.string().optional(),
});

export const DetailQtteSchema = z.object({
    qtte: z.number(),
});

export const DetailPrixUnitaireSchema = z.object({
    pu: z.number().finite()
});

export const DetailTypeSchema = z.object({
    deviseId: z.string().cuid2({
        message: "type est incorrecte"
    })
});

export const ArrayDetailSchema = z.array(DetailSchema);

export const AchatSchema = z.object({
    nom: z.string()
        .min(4, "pas moins de 4 caractères")
        .max(50, "pas plus de 50 caractères")
        .toLowerCase()
        .trim()
        .optional(),
    numPhone: z.string().optional(),
    adresse: z.string()
        .min(4, "pas moins de 4 caractères")
        .max(50, "pas plus de 50 caractères")
        .toLowerCase()
        .trim()
        .optional(),
    dateAchat: z.string().datetime(
        {
            offset: true,
            message: "format de date est incorrecte"
        }
    ).transform((str) => new Date(str)).optional(),
    fournisseurId: z.string(),
});

export const DetailEnStockSchema = z.object({
    enStock: z.boolean("la donnée n'est pas prise en charge")
});

export const StatusAchatSchema = z.object({
    status: z.enum(StatusAchat, "le status est incorrect")
});


// user-profile
export type User = z.infer<typeof UserSchema>;
export type Profile = z.infer<typeof ProfileSchema>;
export type Contact = z.infer<typeof ContactSchema>;
export type Adresse = z.infer<typeof AdresseSchema>;

// module business-personnel 
export type Business = z.infer<typeof BusinessSchema>;
export type BusinessType = z.infer<typeof BusinessTypeSchema>;
export type Abonnement = z.infer<typeof AbonnementSchema>;
export type Offre = z.infer<typeof OffreSchema>;
export type Devise = z.infer<typeof DeviseSchema>;
export type Article = z.infer<typeof ArticleSchema>;
export type Attribut = z.infer<typeof AttributSchema>;
export type Categorie = z.infer<typeof CategorieSchema>;
export type Commentaire = z.infer<typeof CommentaireSchema>;
export type Caisse = z.infer<typeof CaisseSchema>;
export type Promotion = z.infer<typeof PromotionSchema>;
export type PromotionDraft = z.infer<typeof PromotionDraftSchema>;
export type StatusPromotion = z.infer<typeof StatusPromotionSchema>;

// module business-etablissement
export type Invitation = z.infer<typeof InvitationSchema>;
export type Client = z.infer<typeof ClientSchema>;
export type Fournisseur = z.infer<typeof FournisseurSchema>;
export type Achat = z.infer<typeof AchatSchema>;
export type Detail = z.infer<typeof DetailSchema>;
export type DetailQtte = z.infer<typeof DetailQtteSchema>;
export type DetailPrixUnitaire = z.infer<typeof DetailPrixUnitaireSchema>;
export type DetailType = z.infer<typeof DetailTypeSchema>;
export type DetailEnStock = z.infer<typeof DetailEnStockSchema>;
export type ArrayDetail = z.infer<typeof ArrayDetailSchema>;
export type AchatDetail = z.infer<typeof ArrayDetailSchema>;
export type StatusAchat = z.infer<typeof StatusAchatSchema>;



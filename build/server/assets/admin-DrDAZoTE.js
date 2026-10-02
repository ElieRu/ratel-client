import { t as __exportAll } from "./rolldown-runtime-D7D4PA-g.js";
import { Link, UNSAFE_withComponentProps } from "react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { mergeProps } from "@base-ui/react/merge-props";
import { useRender } from "@base-ui/react/use-render";
import { cva } from "class-variance-authority";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { Button } from "@base-ui/react/button";
import { cn } from "cn";
import { Input } from "@base-ui/react/input";
import { Separator } from "@base-ui/react/separator";
import { Dialog } from "@base-ui/react/dialog";
import { AlertCircleIcon, InboxIcon, PlusIcon, StoreIcon, Trash2Icon, XIcon } from "lucide-react";
import { getToken } from "@clerk/react-router";
import { toast } from "sonner";
import * as z$1 from "zod";
import "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
//#region app/lib/utils.ts
function cn$1(...inputs) {
	return twMerge(clsx(inputs));
}
var API = "http://localhost:3000";
/**
* Un champ est requis quand le schéma refuse `undefined`.
* Évite de maintenir à la main la liste des astérisques dans chaque formulaire.
*/
function champsRequis(shape) {
	return new Set(Object.entries(shape).filter(([, champ]) => !champ.safeParse(void 0).success).map(([nom]) => nom));
}
var items = [
	{
		label: "Sélectionner un pays",
		value: null
	},
	{
		label: "Afghanistan",
		value: "Afghanistan"
	},
	{
		label: "Afrique du Sud",
		value: "Afrique du Sud"
	},
	{
		label: "Albanie",
		value: "Albanie"
	},
	{
		label: "Algérie",
		value: "Algérie"
	},
	{
		label: "Allemagne",
		value: "Allemagne"
	},
	{
		label: "Andorre",
		value: "Andorre"
	},
	{
		label: "Angola",
		value: "Angola"
	},
	{
		label: "Antigua-et-Barbuda",
		value: "Antigua-et-Barbuda"
	},
	{
		label: "Arabie saoudite",
		value: "Arabie saoudite"
	},
	{
		label: "Argentine",
		value: "Argentine"
	},
	{
		label: "Arménie",
		value: "Arménie"
	},
	{
		label: "Australie",
		value: "Australie"
	},
	{
		label: "Autriche",
		value: "Autriche"
	},
	{
		label: "Azerbaïdjan",
		value: "Azerbaïdjan"
	},
	{
		label: "Bahamas",
		value: "Bahamas"
	},
	{
		label: "Bahreïn",
		value: "Bahreïn"
	},
	{
		label: "Bangladesh",
		value: "Bangladesh"
	},
	{
		label: "Barbade",
		value: "Barbade"
	},
	{
		label: "Belgique",
		value: "Belgique"
	},
	{
		label: "Bélize",
		value: "Bélize"
	},
	{
		label: "Bénin",
		value: "Bénin"
	},
	{
		label: "Bhoutan",
		value: "Bhoutan"
	},
	{
		label: "Biélorussie",
		value: "Biélorussie"
	},
	{
		label: "Birmanie (Myanmar)",
		value: "Birmanie (Myanmar)"
	},
	{
		label: "Bolivie",
		value: "Bolivie"
	},
	{
		label: "Bosnie-Herzégovine",
		value: "Bosnie-Herzégovine"
	},
	{
		label: "Botswana",
		value: "Botswana"
	},
	{
		label: "Brésil",
		value: "Brésil"
	},
	{
		label: "Brunei",
		value: "Brunei"
	},
	{
		label: "Bulgarie",
		value: "Bulgarie"
	},
	{
		label: "Burkina Faso",
		value: "Burkina Faso"
	},
	{
		label: "Burundi",
		value: "Burundi"
	},
	{
		label: "Cambodge",
		value: "Cambodge"
	},
	{
		label: "Cameroun",
		value: "Cameroun"
	},
	{
		label: "Canada",
		value: "Canada"
	},
	{
		label: "Cap-Vert",
		value: "Cap-Vert"
	},
	{
		label: "Chili",
		value: "Chili"
	},
	{
		label: "Chine",
		value: "Chine"
	},
	{
		label: "Chypre",
		value: "Chypre"
	},
	{
		label: "Colombie",
		value: "Colombie"
	},
	{
		label: "Comores",
		value: "Comores"
	},
	{
		label: "Congo (Brazzaville)",
		value: "Congo (Brazzaville)"
	},
	{
		label: "Congo (RDC)",
		value: "Congo (RDC)"
	},
	{
		label: "Corée du Nord",
		value: "Corée du Nord"
	},
	{
		label: "Corée du Sud",
		value: "Corée du Sud"
	},
	{
		label: "Costa Rica",
		value: "Costa Rica"
	},
	{
		label: "Côte d'Ivoire",
		value: "Côte d'Ivoire"
	},
	{
		label: "Croatie",
		value: "Croatie"
	},
	{
		label: "Cuba",
		value: "Cuba"
	},
	{
		label: "Danemark",
		value: "Danemark"
	},
	{
		label: "Djibouti",
		value: "Djibouti"
	},
	{
		label: "Dominique",
		value: "Dominique"
	},
	{
		label: "Égypte",
		value: "Égypte"
	},
	{
		label: "Émirats arabes unis",
		value: "Émirats arabes unis"
	},
	{
		label: "Équateur",
		value: "Équateur"
	},
	{
		label: "Érythrée",
		value: "Érythrée"
	},
	{
		label: "Espagne",
		value: "Espagne"
	},
	{
		label: "Estonie",
		value: "Estonie"
	},
	{
		label: "Eswatini",
		value: "Eswatini"
	},
	{
		label: "États-Unis",
		value: "États-Unis"
	},
	{
		label: "Éthiopie",
		value: "Éthiopie"
	},
	{
		label: "Fidji",
		value: "Fidji"
	},
	{
		label: "Finlande",
		value: "Finlande"
	},
	{
		label: "France",
		value: "France"
	},
	{
		label: "Gabon",
		value: "Gabon"
	},
	{
		label: "Gambie",
		value: "Gambie"
	},
	{
		label: "Géorgie",
		value: "Géorgie"
	},
	{
		label: "Ghana",
		value: "Ghana"
	},
	{
		label: "Grèce",
		value: "Grèce"
	},
	{
		label: "Grenade",
		value: "Grenade"
	},
	{
		label: "Guatemala",
		value: "Guatemala"
	},
	{
		label: "Guinée",
		value: "Guinée"
	},
	{
		label: "Guinée-Bissau",
		value: "Guinée-Bissau"
	},
	{
		label: "Guinée équatoriale",
		value: "Guinée équatoriale"
	},
	{
		label: "Guyana",
		value: "Guyana"
	},
	{
		label: "Haïti",
		value: "Haïti"
	},
	{
		label: "Honduras",
		value: "Honduras"
	},
	{
		label: "Hongrie",
		value: "Hongrie"
	},
	{
		label: "Îles Cook",
		value: "Îles Cook"
	},
	{
		label: "Îles Marshall",
		value: "Îles Marshall"
	},
	{
		label: "Îles Salomon",
		value: "Îles Salomon"
	},
	{
		label: "Inde",
		value: "Inde"
	},
	{
		label: "Indonésie",
		value: "Indonésie"
	},
	{
		label: "Irak",
		value: "Irak"
	},
	{
		label: "Iran",
		value: "Iran"
	},
	{
		label: "Irlande",
		value: "Irlande"
	},
	{
		label: "Islande",
		value: "Islande"
	},
	{
		label: "Israël",
		value: "Israël"
	},
	{
		label: "Italie",
		value: "Italie"
	},
	{
		label: "Jamaïque",
		value: "Jamaïque"
	},
	{
		label: "Japon",
		value: "Japon"
	},
	{
		label: "Jordanie",
		value: "Jordanie"
	},
	{
		label: "Kazakhstan",
		value: "Kazakhstan"
	},
	{
		label: "Kenya",
		value: "Kenya"
	},
	{
		label: "Kirghizistan",
		value: "Kirghizistan"
	},
	{
		label: "Kiribati",
		value: "Kiribati"
	},
	{
		label: "Koweït",
		value: "Koweït"
	},
	{
		label: "Laos",
		value: "Laos"
	},
	{
		label: "Lesotho",
		value: "Lesotho"
	},
	{
		label: "Lettonie",
		value: "Lettonie"
	},
	{
		label: "Liban",
		value: "Liban"
	},
	{
		label: "Libéria",
		value: "Libéria"
	},
	{
		label: "Libye",
		value: "Libye"
	},
	{
		label: "Liechtenstein",
		value: "Liechtenstein"
	},
	{
		label: "Lituanie",
		value: "Lituanie"
	},
	{
		label: "Luxembourg",
		value: "Luxembourg"
	},
	{
		label: "Macédoine du Nord",
		value: "Macédoine du Nord"
	},
	{
		label: "Madagascar",
		value: "Madagascar"
	},
	{
		label: "Malaisie",
		value: "Malaisie"
	},
	{
		label: "Malawi",
		value: "Malawi"
	},
	{
		label: "Maldives",
		value: "Maldives"
	},
	{
		label: "Mali",
		value: "Mali"
	},
	{
		label: "Malte",
		value: "Malte"
	},
	{
		label: "Maroc",
		value: "Maroc"
	},
	{
		label: "Maurice",
		value: "Maurice"
	},
	{
		label: "Mauritanie",
		value: "Mauritanie"
	},
	{
		label: "Mexique",
		value: "Mexique"
	},
	{
		label: "Micronésie",
		value: "Micronésie"
	},
	{
		label: "Moldavie",
		value: "Moldavie"
	},
	{
		label: "Monaco",
		value: "Monaco"
	},
	{
		label: "Mongolie",
		value: "Mongolie"
	},
	{
		label: "Monténégro",
		value: "Monténégro"
	},
	{
		label: "Mozambique",
		value: "Mozambique"
	},
	{
		label: "Namibie",
		value: "Namibie"
	},
	{
		label: "Nauru",
		value: "Nauru"
	},
	{
		label: "Népal",
		value: "Népal"
	},
	{
		label: "Nicaragua",
		value: "Nicaragua"
	},
	{
		label: "Niger",
		value: "Niger"
	},
	{
		label: "Nigeria",
		value: "Nigeria"
	},
	{
		label: "Niue",
		value: "Niue"
	},
	{
		label: "Norvège",
		value: "Norvège"
	},
	{
		label: "Nouvelle-Zélande",
		value: "Nouvelle-Zélande"
	},
	{
		label: "Oman",
		value: "Oman"
	},
	{
		label: "Ouganda",
		value: "Ouganda"
	},
	{
		label: "Ouzbékistan",
		value: "Ouzbékistan"
	},
	{
		label: "Pakistan",
		value: "Pakistan"
	},
	{
		label: "Palaos",
		value: "Palaos"
	},
	{
		label: "Palestine",
		value: "Palestine"
	},
	{
		label: "Panama",
		value: "Panama"
	},
	{
		label: "Papouasie-Nouvelle-Guinée",
		value: "Papouasie-Nouvelle-Guinée"
	},
	{
		label: "Paraguay",
		value: "Paraguay"
	},
	{
		label: "Pays-Bas",
		value: "Pays-Bas"
	},
	{
		label: "Pérou",
		value: "Pérou"
	},
	{
		label: "Philippines",
		value: "Philippines"
	},
	{
		label: "Pologne",
		value: "Pologne"
	},
	{
		label: "Portugal",
		value: "Portugal"
	},
	{
		label: "Qatar",
		value: "Qatar"
	},
	{
		label: "République centrafricaine",
		value: "République centrafricaine"
	},
	{
		label: "République dominicaine",
		value: "République dominicaine"
	},
	{
		label: "Tchéquie",
		value: "Tchéquie"
	},
	{
		label: "Roumanie",
		value: "Roumanie"
	},
	{
		label: "Royaume-Uni",
		value: "Royaume-Uni"
	},
	{
		label: "Russie",
		value: "Russie"
	},
	{
		label: "Rwanda",
		value: "Rwanda"
	},
	{
		label: "Saint-Christophe-et-Niévès",
		value: "Saint-Christophe-et-Niévès"
	},
	{
		label: "Sainte-Lucie",
		value: "Sainte-Lucie"
	},
	{
		label: "Saint-Marin",
		value: "Saint-Marin"
	},
	{
		label: "Saint-Vincent-et-les-Grenadines",
		value: "Saint-Vincent-et-les-Grenadines"
	},
	{
		label: "Samoa",
		value: "Samoa"
	},
	{
		label: "Sao Tomé-et-Principe",
		value: "Sao Tomé-et-Principe"
	},
	{
		label: "Sénégal",
		value: "Sénégal"
	},
	{
		label: "Serbie",
		value: "Serbie"
	},
	{
		label: "Seychelles",
		value: "Seychelles"
	},
	{
		label: "Sierra Leone",
		value: "Sierra Leone"
	},
	{
		label: "Singapour",
		value: "Singapour"
	},
	{
		label: "Slovaquie",
		value: "Slovaquie"
	},
	{
		label: "Slovénie",
		value: "Slovénie"
	},
	{
		label: "Somalie",
		value: "Somalie"
	},
	{
		label: "Soudan",
		value: "Soudan"
	},
	{
		label: "Soudan du Sud",
		value: "Soudan du Sud"
	},
	{
		label: "Sri Lanka",
		value: "Sri Lanka"
	},
	{
		label: "Suède",
		value: "Suède"
	},
	{
		label: "Suisse",
		value: "Suisse"
	},
	{
		label: "Suriname",
		value: "Suriname"
	},
	{
		label: "Syrie",
		value: "Syrie"
	},
	{
		label: "Tadjikistan",
		value: "Tadjikistan"
	},
	{
		label: "Tanzanie",
		value: "Tanzanie"
	},
	{
		label: "Tchad",
		value: "Tchad"
	},
	{
		label: "Thaïlande",
		value: "Thaïlande"
	},
	{
		label: "Timor oriental",
		value: "Timor oriental"
	},
	{
		label: "Togo",
		value: "Togo"
	},
	{
		label: "Tonga",
		value: "Tonga"
	},
	{
		label: "Trinité-et-Tobago",
		value: "Trinité-et-Tobago"
	},
	{
		label: "Tunisie",
		value: "Tunisie"
	},
	{
		label: "Turkménistan",
		value: "Turkménistan"
	},
	{
		label: "Turquie",
		value: "Turquie"
	},
	{
		label: "Tuvalu",
		value: "Tuvalu"
	},
	{
		label: "Ukraine",
		value: "Ukraine"
	},
	{
		label: "Uruguay",
		value: "Uruguay"
	},
	{
		label: "Vanuatu",
		value: "Vanuatu"
	},
	{
		label: "Vatican",
		value: "Vatican"
	},
	{
		label: "Venezuela",
		value: "Venezuela"
	},
	{
		label: "Viêt Nam",
		value: "Viêt Nam"
	},
	{
		label: "Yémen",
		value: "Yémen"
	},
	{
		label: "Zambie",
		value: "Zambie"
	},
	{
		label: "Zimbabwe",
		value: "Zimbabwe"
	}
];
//#endregion
//#region app/components/ui/button.tsx
var buttonVariants = cva("group/button inline-flex shrink-0 items-center justify-center rounded-lg border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", {
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground hover:bg-primary/80",
			outline: "border-border bg-background hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50",
			secondary: "bg-secondary text-secondary-foreground hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] aria-expanded:bg-secondary aria-expanded:text-secondary-foreground",
			ghost: "hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:hover:bg-muted/50",
			destructive: "bg-destructive/10 text-destructive hover:bg-destructive/20 focus-visible:border-destructive/40 focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:hover:bg-destructive/30 dark:focus-visible:ring-destructive/40",
			link: "text-primary underline-offset-4 hover:underline"
		},
		size: {
			default: "h-8 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
			xs: "h-6 gap-1 rounded-[min(var(--radius-md),10px)] px-2 text-xs in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3",
			sm: "h-7 gap-1 rounded-[min(var(--radius-md),12px)] px-2.5 text-[0.8rem] in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3.5",
			lg: "h-9 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
			icon: "size-8",
			"icon-xs": "size-6 rounded-[min(var(--radius-md),10px)] in-data-[slot=button-group]:rounded-lg [&_svg:not([class*='size-'])]:size-3",
			"icon-sm": "size-7 rounded-[min(var(--radius-md),12px)] in-data-[slot=button-group]:rounded-lg",
			"icon-lg": "size-9"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
function Button$1({ className, variant = "default", size = "default", ...props }) {
	return /* @__PURE__ */ jsx(Button, {
		"data-slot": "button",
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		...props
	});
}
//#endregion
//#region app/components/ui/input.tsx
function Input$1({ className, type, ...props }) {
	return /* @__PURE__ */ jsx(Input, {
		type,
		"data-slot": "input",
		className: cn$1("h-8 w-full min-w-0 rounded-lg border border-input bg-transparent px-2.5 py-1 text-base transition-colors outline-none file:inline-flex file:h-6 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:cursor-not-allowed disabled:bg-input/50 disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 md:text-sm dark:bg-input/30 dark:disabled:bg-input/80 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40", className),
		...props
	});
}
//#endregion
//#region app/components/ui/separator.tsx
function Separator$1({ className, orientation = "horizontal", ...props }) {
	return /* @__PURE__ */ jsx(Separator, {
		"data-slot": "separator",
		orientation,
		className: cn$1("shrink-0 bg-border data-horizontal:h-px data-horizontal:w-full data-vertical:w-px data-vertical:self-stretch", className),
		...props
	});
}
//#endregion
//#region app/components/ui/skeleton.tsx
function Skeleton({ className, ...props }) {
	return /* @__PURE__ */ jsx("div", {
		"data-slot": "skeleton",
		className: cn$1("animate-pulse rounded-md bg-muted", className),
		...props
	});
}
//#endregion
//#region app/components/ui/badge.tsx
var badgeVariants = cva("group/badge inline-flex h-5 w-fit shrink-0 items-center justify-center gap-1 overflow-hidden rounded-4xl border border-transparent px-2 py-0.5 text-xs font-medium whitespace-nowrap transition-all focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&>svg]:pointer-events-none [&>svg]:size-3!", {
	variants: { variant: {
		default: "bg-primary text-primary-foreground [a]:hover:bg-primary/80",
		secondary: "bg-secondary text-secondary-foreground [a]:hover:bg-secondary/80",
		destructive: "bg-destructive/10 text-destructive focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:focus-visible:ring-destructive/40 [a]:hover:bg-destructive/20",
		outline: "border-border text-foreground [a]:hover:bg-muted [a]:hover:text-muted-foreground",
		ghost: "hover:bg-muted hover:text-muted-foreground dark:hover:bg-muted/50",
		link: "text-primary underline-offset-4 hover:underline"
	} },
	defaultVariants: { variant: "default" }
});
function Badge({ className, variant = "default", render, ...props }) {
	return useRender({
		defaultTagName: "span",
		props: mergeProps({ className: cn$1(badgeVariants({ variant }), className) }, props),
		render,
		state: {
			slot: "badge",
			variant
		}
	});
}
//#endregion
//#region app/components/ui/label.tsx
function Label({ className, ...props }) {
	return /* @__PURE__ */ jsx("label", {
		"data-slot": "label",
		className: cn$1("flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50", className),
		...props
	});
}
//#endregion
//#region app/components/ui/table.tsx
function Table({ className, ...props }) {
	return /* @__PURE__ */ jsx("div", {
		"data-slot": "table-container",
		className: "relative w-full overflow-x-auto",
		children: /* @__PURE__ */ jsx("table", {
			"data-slot": "table",
			className: cn$1("w-full caption-bottom text-sm", className),
			...props
		})
	});
}
function TableHeader({ className, ...props }) {
	return /* @__PURE__ */ jsx("thead", {
		"data-slot": "table-header",
		className: cn$1("[&_tr]:border-b", className),
		...props
	});
}
function TableBody({ className, ...props }) {
	return /* @__PURE__ */ jsx("tbody", {
		"data-slot": "table-body",
		className: cn$1("[&_tr:last-child]:border-0", className),
		...props
	});
}
function TableRow({ className, ...props }) {
	return /* @__PURE__ */ jsx("tr", {
		"data-slot": "table-row",
		className: cn$1("border-b transition-colors hover:bg-muted/50 has-aria-expanded:bg-muted/50 data-[state=selected]:bg-muted", className),
		...props
	});
}
function TableHead({ className, ...props }) {
	return /* @__PURE__ */ jsx("th", {
		"data-slot": "table-head",
		className: cn$1("h-10 px-2 text-left align-middle font-medium whitespace-nowrap text-foreground [&:has([role=checkbox])]:pr-0", className),
		...props
	});
}
function TableCell({ className, ...props }) {
	return /* @__PURE__ */ jsx("td", {
		"data-slot": "table-cell",
		className: cn$1("p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0", className),
		...props
	});
}
//#endregion
//#region app/lib/enums.ts
var TypeDevise = ["USD", "CDF"];
var StatusAchat = [
	"EN_COURS",
	"VALIDE",
	"ANNULE"
];
var StatusPromotion = [
	"EN_ATTENTE",
	"DRAFT",
	"ACTIVE",
	"PAUSE",
	"EXPIRE"
];
var TypeBusiness = [
	"PERSONNEL",
	"ETABLISSEMENT",
	"ENTREPRISE"
];
var TypeInvitation = [
	"CLIENT",
	"AGENT",
	"FOURNISSEUR"
];
var TypePromotion = [
	"POURCENTAGE",
	"MONTANT_FIXE",
	"BOGO",
	"LIVRAISON_GRATUITE"
];
var UserSex = ["HOMME", "FEMME"];
z$1.object({
	email: z$1.email({ message: "L'adresse mail est invalide" }).trim().toLowerCase(),
	firstName: z$1.string().min(4, "Pas moins de 4 caractères").max(50, "Pas plus de 50 caractères").trim().toLowerCase(),
	lastName: z$1.string().min(4, "Pas moins de 4 caractères").max(50, "Pas plus de 50 caractères").optional(),
	fullName: z$1.string().min(4, "Pas moins de 4 caractères").max(100, "Pas plus de 100 caractères").trim().toLowerCase(),
	profileImage: z$1.url({ message: "Le lien d'image est incorrecte" }).nullable().optional()
});
z$1.object({ profile: z$1.url({ message: "Le lien d'image est incorrecte" }) });
var ContactSchema = z$1.discriminatedUnion("type", [z$1.object({
	id: z$1.string().optional(),
	label: z$1.string().optional(),
	parDefaut: z$1.boolean().optional(),
	status: z$1.string().optional(),
	type: z$1.literal("PHONE"),
	phone: z$1.string().regex(/^\+?[1-9]\d{1,14}$/, "Le numéro de téléphone est incorrecte"),
	email: z$1.string().nullable()
}), z$1.object({
	id: z$1.string().optional(),
	label: z$1.string().optional(),
	parDefaut: z$1.boolean().optional(),
	status: z$1.string().optional(),
	type: z$1.literal("EMAIL"),
	phone: z$1.string().nullable(),
	email: z$1.string().email("L'adresse mail est incorrecte")
})]);
var AdresseSchema = z$1.object({
	id: z$1.string().optional(),
	adresse: z$1.string().min(6, "Ce champs est requis").max(50, "Pas plus de 50 caractères").trim().toLowerCase(),
	region: z$1.string().min(1, "Ce champs est requis").max(50, "Pas plus de 50 caractères").trim().toLowerCase(),
	ville: z$1.string().min(1, "Ce champs est requis").max(50, "Pas plus de 50 caractères").trim().toLowerCase(),
	pays: z$1.string().min(1, "Ce champs est requis").max(50, "Pas plus de 50 caractères").trim().toLowerCase(),
	codePostal: z$1.string().optional(),
	businessId: z$1.string().optional(),
	clientId: z$1.string().optional(),
	fournisseurId: z$1.string().optional()
});
var BusinessSchema = z$1.object({
	nom: z$1.string().min(4, "Pas moins de 4 caractères").max(50, "Pas plus de 50 caractères").toLowerCase().trim(),
	slogan: z$1.string().max(80, "Pas plus de 80 caractères").trim().optional(),
	website: z$1.union([z$1.literal(""), z$1.url({ message: "Le lien est incorrecte" })]).optional(),
	description: z$1.string().max(500, "Pas plus de 500 caractères").trim().optional()
});
z$1.object({ type: z$1.enum(TypeBusiness, "le type est incorrecte") });
z$1.object({ userId: z$1.string() });
z$1.object({
	designation: z$1.string().min(4, "Pas moins de 4 caractères").max(50, "Pas plus de 50 caractères").toLowerCase().trim(),
	categories: z$1.string().min(4, "Pas moins de 4 caractères").max(50, "Pas plus de 50 caractères").toLowerCase().trim().optional()
});
z$1.object({
	nom: z$1.string().min(4, "Pas moins de 4 caractères").max(50, "Pas plus de 50 caractères").trim().toLowerCase(),
	type: z$1.enum(TypeDevise, "Le type de devise est incorrecte"),
	symbole: z$1.string("Le symbole de devise est incorrecte"),
	tauxVente: z$1.int()
});
var ArticleSchema = z$1.object({
	designation: z$1.string().min(4, "Pas moins de 4 caractères").max(50, "Pas plus de 50 caractères").toLowerCase().trim(),
	pu: z$1.number().finite(),
	description: z$1.string().optional(),
	categorieId: z$1.string(),
	deviseId: z$1.string()
});
var CategorieSchema = z$1.object({
	nom: z$1.string().min(4, "Pas moins de 4 caractères").max(50, "Pas plus de 50 caractères").toLowerCase().trim(),
	offreId: z$1.string()
});
z$1.object({
	designation: z$1.string().min(4, "Pas moins de 4 caractères").max(50, "Pas plus de 50 caractères").toLowerCase().trim(),
	valeur: z$1.string().toLowerCase().trim().min(4, "Pas moins de 4 caractères").max(50, "Pas plus de 50 caractères").optional()
});
z$1.object({
	commentaire: z$1.string().min(1, "Ce champ ne peux pas être vide").max(500, "Pas plus de 500 caractères").toLowerCase().trim(),
	userId: z$1.string()
});
z$1.object({ type: z$1.enum(TypeInvitation, "le type est incorrecte") });
var ClientSchema = z$1.object({
	firstName: z$1.string().min(4, "Pas moin de 4 caractères").max(50, "Pas plus de 50 caractères").toLowerCase().trim().optional(),
	lastName: z$1.string().min(4, "Pas moin de 4 caractères").max(50, "Pas plus de 50 caractères").toLowerCase().trim().optional(),
	fullName: z$1.string().toLowerCase().trim().optional(),
	email: z$1.email({ message: "l'adresse mail est invalide" }).trim().toLowerCase().optional(),
	sex: z$1.enum(UserSex, "le sexe est incorrecte").optional(),
	birthday: z$1.date("le format n'est pas pris en charge").optional(),
	profile: z$1.url({ message: "l'url est invalide" }).trim().toLowerCase().optional()
});
var FournisseurSchema = z$1.object({
	nom: z$1.string().min(4, "Pas moin de 4 caractères").max(50, "Pas plus de 50 caractères").toLowerCase().trim().optional(),
	logo: z$1.url("le lien est incorrecte").optional(),
	email: z$1.email({ message: "l'adresse mail est invalide" }).optional(),
	website: z$1.url({ message: "le lien est incorrecte" }).optional(),
	description: z$1.string().min(4, "Pas moin de 4 caractères").max(100, "Pas plus de 100 caractères").toLowerCase().trim().optional()
});
var CaisseSchema = z$1.object({
	nom: z$1.string().min(4, "Pas moin de 4 caractères").max(50, "Pas plus de 50 caractères").toLowerCase().trim(),
	solde: z$1.number("le contenu n'est pas un nombre"),
	deviseId: z$1.string("la devise est incorrecte")
});
var PromotionSchema = z$1.object({
	nom: z$1.string().min(1, "Ce champ ne peux pas être vide").max(50, "Pas plus de 50 caractères").toLowerCase().trim(),
	codePromo: z$1.string().min(1, "Ce champ ne peux pas être vide").max(50, "Pas plus de 50 caractères").trim(),
	type: z$1.enum(TypePromotion, "le type est incorrecte"),
	valeur: z$1.number({ message: "le format est incorrecte" }),
	qtteLimitee: z$1.number({ message: "le format est incorrecte" }).optional(),
	dateDebut: z$1.string().datetime({
		offset: true,
		message: "format de date est incorrecte"
	}).transform((str) => new Date(str)),
	dateFin: z$1.string().datetime({
		offset: true,
		message: "format de date est incorrecte"
	}).transform((str) => new Date(str)),
	description: z$1.string().min(5, "pas moins de 5 caractères").max(100, "pas plus de 100 caractères").toLowerCase().trim().optional()
}).refine((data) => data.dateDebut < data.dateFin, {
	message: "la date finale doit être dans le future",
	path: ["dateFin"]
});
z$1.object({
	nom: z$1.string().min(1, "Ce champ ne peux pas être vide").max(50, "Pas plus de 50 caractères").toLowerCase().trim().optional(),
	codePromo: z$1.string().min(1, "Ce champ ne peux pas être vide").max(50, "Pas plus de 50 caractères").trim().optional(),
	type: z$1.enum(TypePromotion, "le type est incorrecte").optional(),
	status: z$1.enum(StatusPromotion, "le status est incorrecte").default("DRAFT"),
	valeur: z$1.number({ message: "le format est incorrecte" }).optional(),
	qtteLimitee: z$1.number({ message: "le format est incorrecte" }).optional(),
	dateDebut: z$1.string().datetime({
		offset: true,
		message: "format de date est incorrecte"
	}).optional(),
	dateFin: z$1.string().datetime({
		offset: true,
		message: "format de date est incorrecte"
	}).optional(),
	description: z$1.string().min(5, "pas moins de 5 caractères").max(100, "pas plus de 100 caractères").toLowerCase().trim().optional()
});
z$1.object({ status: z$1.enum(StatusPromotion, "le status est incorrecte") });
var DetailSchema = z$1.object({
	articleId: z$1.string(),
	qtte: z$1.number(),
	pu: z$1.number().finite(),
	pt: z$1.number().finite().optional(),
	deviseId: z$1.string().optional(),
	fournisseurId: z$1.string().optional()
});
z$1.object({ qtte: z$1.number() });
z$1.object({ pu: z$1.number().finite() });
z$1.object({ deviseId: z$1.string().cuid2({ message: "type est incorrecte" }) });
z$1.array(DetailSchema);
z$1.object({
	nom: z$1.string().min(4, "pas moins de 4 caractères").max(50, "pas plus de 50 caractères").toLowerCase().trim().optional(),
	numPhone: z$1.string().optional(),
	adresse: z$1.string().min(4, "pas moins de 4 caractères").max(50, "pas plus de 50 caractères").toLowerCase().trim().optional(),
	dateAchat: z$1.string().datetime({
		offset: true,
		message: "format de date est incorrecte"
	}).transform((str) => new Date(str)).optional(),
	fournisseurId: z$1.string()
});
z$1.object({ enStock: z$1.boolean("la donnée n'est pas prise en charge") });
z$1.object({ status: z$1.enum(StatusAchat, "le status est incorrect") });
//#endregion
//#region app/lib/business-context.tsx
var CLE_STOCKAGE = "ratel.businessId";
var Contexte = createContext(null);
/**
* Le serveur attribue la portée métier par `:businessId` sur presque toutes
* ses routes. Tant que la résolution serveur de l'utilisateur connecté n'est
* pas branchée, le business actif est retenu côté client.
*/
function BusinessProvider({ children }) {
	const [businessId, setBusinessId] = useState(null);
	const [pret, setPret] = useState(false);
	useEffect(() => {
		try {
			setBusinessId(window.localStorage.getItem(CLE_STOCKAGE));
		} catch {}
		setPret(true);
	}, []);
	const definirBusinessId = useCallback((id) => {
		setBusinessId(id);
		try {
			if (id) window.localStorage.setItem(CLE_STOCKAGE, id);
			else window.localStorage.removeItem(CLE_STOCKAGE);
		} catch {}
	}, []);
	const valeur = useMemo(() => ({
		businessId,
		definirBusinessId,
		pret
	}), [
		businessId,
		definirBusinessId,
		pret
	]);
	return /* @__PURE__ */ jsx(Contexte.Provider, {
		value: valeur,
		children
	});
}
function useBusiness() {
	const contexte = useContext(Contexte);
	if (!contexte) throw new Error("useBusiness doit être utilisé dans un BusinessProvider");
	return contexte;
}
//#endregion
//#region app/lib/api/client.ts
/**
* Enveloppe unique pour les appels au serveur Ratel.
* Reprend la convention de `lib/apis.ts` : jeton Clerk en Authorization,
* message d'erreur porté par `result.message`.
*/
async function requete(methode, chemin, corps) {
	const token = await getToken();
	const response = await fetch(`${API}${chemin}`, {
		method: methode,
		headers: {
			Authorization: `${token}`,
			"Content-Type": "application/json"
		},
		...corps === void 0 ? {} : { body: JSON.stringify(corps) }
	});
	const result = await response.json().catch(() => null);
	if (!response.ok) throw new Error(result?.message || "La requête a échoué");
	return result?.data ?? result;
}
/** Sérialise les paramètres de recherche non vides. */
function query(params) {
	const utiles = Object.entries(params).filter(([, v]) => v !== void 0 && v !== "");
	if (utiles.length === 0) return "";
	return `?${new URLSearchParams(utiles).toString()}`;
}
//#endregion
//#region app/lib/api/business.ts
var listerArticles = (search) => requete("GET", `/articles${query({ search })}`);
var creerArticle = (businessId, form) => requete("POST", `/articles/${businessId}`, form);
var modifierArticle = (id, form) => requete("PUT", `/articles/${id}`, form);
var supprimerArticle = (id) => requete("DELETE", `/articles/${id}`);
var listerCategories = (businessId) => requete("GET", `/categories/${businessId}/liste-categories`);
var creerCategorie = (businessId, form) => requete("POST", `/categories/${businessId}`, form);
var modifierCategorie = (id, form) => requete("PUT", `/categories/${id}`, form);
var supprimerCategorie = (id) => requete("DELETE", `/categories/${id}`);
var listerDevises = (businessId) => requete("GET", `/devises/${businessId}`);
var listerPromotions = (businessId) => requete("GET", `/promotions/${businessId}/promotions`);
var creerPromotion = (businessId, form) => requete("POST", `/promotions/${businessId}/promotions`, form);
var changerStatusPromotion = (businessId, id, form) => requete("PUT", `/promotions/${businessId}/promotions/${id}/changer-status`, form);
var supprimerPromotion = (businessId, id) => requete("DELETE", `/promotions/${businessId}/promotions/${id}`);
var listerClients = (businessId, search) => requete("GET", `/businesses/${businessId}/clients${query({ search })}`);
var creerClient = (businessId, form) => requete("POST", `/businesses/${businessId}/clients`, form);
var modifierClient = (businessId, id, form) => requete("PUT", `/businesses/${businessId}/clients/${id}`, form);
var supprimerClient = (businessId, id) => requete("DELETE", `/businesses/${businessId}/clients/${id}`);
var listerFournisseurs = (businessId, nom) => requete("GET", `/businesses/${businessId}/fournisseurs${query({ nom })}`);
var creerFournisseur = (businessId, form) => requete("POST", `/businesses/${businessId}/fournisseurs`, form);
var modifierFournisseur = (businessId, id, form) => requete("PUT", `/businesses/${businessId}/fournisseurs/${id}`, form);
var supprimerFournisseur = (businessId, id) => requete("DELETE", `/businesses/${businessId}/fournisseurs/${id}`);
var listerCaisses = (businessId) => requete("GET", `/businesses/${businessId}/caisses`);
var creerCaisse = (businessId, form) => requete("POST", `/businesses/${businessId}/caisses`, form);
var modifierCaisse = (businessId, id, form) => requete("PUT", `/businesses/${businessId}/caisses/${id}`, form);
var supprimerCaisse = (businessId, id) => requete("DELETE", `/businesses/${businessId}/caisses/${id}`);
var caisseParDefaut = (businessId, id) => requete("PUT", `/businesses/${businessId}/caisses/${id}/changer-par-defaut`);
var listerAgents = (businessId) => requete("GET", `/businesses/${businessId}/agents`);
var supprimerAgent = (businessId, id) => requete("DELETE", `/businesses/${businessId}/agents/${id}`);
var bloquerAgent = (businessId, id) => requete("PUT", `/businesses/${businessId}/agents/${id}/status-bloque`);
var activerAgent = (businessId, id) => requete("PUT", `/businesses/${businessId}/agents/${id}/status-actif`);
var listerAchats = (businessId) => requete("GET", `/businesses/${businessId}/achats`);
var changerStatusAchat = (businessId, id, form) => requete("PUT", `/businesses/${businessId}/achats/${id}/changer-status`, form);
var supprimerAchat = (businessId, id) => requete("DELETE", `/businesses/${businessId}/achats/${id}`);
//#endregion
//#region app/components/ui/empty.tsx
function Empty({ className, ...props }) {
	return /* @__PURE__ */ jsx("div", {
		"data-slot": "empty",
		className: cn$1("flex w-full min-w-0 flex-1 flex-col items-center justify-center gap-4 rounded-xl border-dashed p-6 text-center text-balance", className),
		...props
	});
}
function EmptyHeader({ className, ...props }) {
	return /* @__PURE__ */ jsx("div", {
		"data-slot": "empty-header",
		className: cn$1("flex max-w-sm flex-col items-center gap-2", className),
		...props
	});
}
var emptyMediaVariants = cva("mb-2 flex shrink-0 items-center justify-center [&_svg]:pointer-events-none [&_svg]:shrink-0", {
	variants: { variant: {
		default: "bg-transparent",
		icon: "flex size-8 shrink-0 items-center justify-center rounded-lg bg-muted text-foreground [&_svg:not([class*='size-'])]:size-4"
	} },
	defaultVariants: { variant: "default" }
});
function EmptyMedia({ className, variant = "default", ...props }) {
	return /* @__PURE__ */ jsx("div", {
		"data-slot": "empty-icon",
		"data-variant": variant,
		className: cn$1(emptyMediaVariants({
			variant,
			className
		})),
		...props
	});
}
function EmptyTitle({ className, ...props }) {
	return /* @__PURE__ */ jsx("div", {
		"data-slot": "empty-title",
		className: cn$1("font-heading text-sm font-medium tracking-tight", className),
		...props
	});
}
function EmptyDescription({ className, ...props }) {
	return /* @__PURE__ */ jsx("div", {
		"data-slot": "empty-description",
		className: cn$1("text-sm/relaxed text-muted-foreground [&>a]:underline [&>a]:underline-offset-4 [&>a:hover]:text-primary", className),
		...props
	});
}
function EmptyContent({ className, ...props }) {
	return /* @__PURE__ */ jsx("div", {
		"data-slot": "empty-content",
		className: cn$1("flex w-full max-w-sm min-w-0 flex-col items-center gap-2.5 text-sm text-balance", className),
		...props
	});
}
//#endregion
//#region app/components/ressource/page-ressource.tsx
function PageRessource({ titre, description, action, outils, chargement = false, erreur = null, businessRequis = false, businessId = null, vide = false, messageVide = "Aucun élément pour le moment.", onReessayer, children }) {
	const businessManquant = businessRequis && !businessId;
	return /* @__PURE__ */ jsxs("div", {
		className: "flex flex-col gap-4 px-4 py-4 lg:px-6",
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "flex flex-wrap items-start justify-between gap-3",
				children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h1", {
					className: "text-xl font-semibold tracking-tight",
					children: titre
				}), description && /* @__PURE__ */ jsx("p", {
					className: "mt-1 text-sm text-muted-foreground",
					children: description
				})] }), !businessManquant && action]
			}),
			outils && !businessManquant && /* @__PURE__ */ jsx("div", { children: outils }),
			businessManquant ? /* @__PURE__ */ jsxs(Empty, { children: [/* @__PURE__ */ jsxs(EmptyHeader, { children: [
				/* @__PURE__ */ jsx(EmptyMedia, {
					variant: "icon",
					children: /* @__PURE__ */ jsx(StoreIcon, {})
				}),
				/* @__PURE__ */ jsx(EmptyTitle, { children: "Aucun business actif" }),
				/* @__PURE__ */ jsx(EmptyDescription, { children: "Cette page travaille dans le contexte d'un business. Créez-en un pour commencer." })
			] }), /* @__PURE__ */ jsx(EmptyContent, { children: /* @__PURE__ */ jsx(Link, {
				to: "/businesses/creer",
				className: buttonVariants(),
				children: "Créer un business"
			}) })] }) : erreur ? /* @__PURE__ */ jsxs(Empty, { children: [/* @__PURE__ */ jsxs(EmptyHeader, { children: [
				/* @__PURE__ */ jsx(EmptyMedia, {
					variant: "icon",
					children: /* @__PURE__ */ jsx(AlertCircleIcon, {})
				}),
				/* @__PURE__ */ jsx(EmptyTitle, { children: "Le chargement a échoué" }),
				/* @__PURE__ */ jsx(EmptyDescription, { children: erreur })
			] }), onReessayer && /* @__PURE__ */ jsx(EmptyContent, { children: /* @__PURE__ */ jsx(Button$1, {
				variant: "outline",
				onClick: onReessayer,
				children: "Réessayer"
			}) })] }) : chargement ? /* @__PURE__ */ jsxs("div", {
				className: "flex flex-col gap-2",
				"aria-busy": "true",
				"aria-live": "polite",
				children: [
					/* @__PURE__ */ jsx(Skeleton, { className: "h-10 w-full" }),
					/* @__PURE__ */ jsx(Skeleton, { className: "h-10 w-full" }),
					/* @__PURE__ */ jsx(Skeleton, { className: "h-10 w-full" }),
					/* @__PURE__ */ jsx(Skeleton, { className: "h-10 w-full" })
				]
			}) : vide ? /* @__PURE__ */ jsxs(Empty, { children: [/* @__PURE__ */ jsxs(EmptyHeader, { children: [
				/* @__PURE__ */ jsx(EmptyMedia, {
					variant: "icon",
					children: /* @__PURE__ */ jsx(InboxIcon, {})
				}),
				/* @__PURE__ */ jsx(EmptyTitle, { children: "Rien à afficher" }),
				/* @__PURE__ */ jsx(EmptyDescription, { children: messageVide })
			] }), action && /* @__PURE__ */ jsx(EmptyContent, { children: action })] }) : children
		]
	});
}
//#endregion
//#region app/components/ressource/use-liste.ts
/**
* Charge une liste dès que `actif` est vrai, et la recharge à la demande.
* `charger` doit être stable (useCallback) pour éviter les boucles.
*/
function useListe(charger, actif = true) {
	const [donnees, setDonnees] = useState([]);
	const [chargement, setChargement] = useState(actif);
	const [erreur, setErreur] = useState(null);
	const [tick, setTick] = useState(0);
	const recharger = useCallback(() => setTick((t) => t + 1), []);
	useEffect(() => {
		if (!actif) {
			setChargement(false);
			return;
		}
		let annule = false;
		setChargement(true);
		setErreur(null);
		charger().then((resultat) => {
			if (annule) return;
			setDonnees(Array.isArray(resultat) ? resultat : []);
		}).catch((err) => {
			if (annule) return;
			setErreur(err.message || "Erreur inconnue");
			setDonnees([]);
		}).finally(() => {
			if (!annule) setChargement(false);
		});
		return () => {
			annule = true;
		};
	}, [
		charger,
		actif,
		tick
	]);
	return {
		donnees,
		chargement,
		erreur,
		recharger
	};
}
//#endregion
//#region app/components/ui/dialog.tsx
function Dialog$1({ ...props }) {
	return /* @__PURE__ */ jsx(Dialog.Root, {
		"data-slot": "dialog",
		...props
	});
}
function DialogTrigger({ ...props }) {
	return /* @__PURE__ */ jsx(Dialog.Trigger, {
		"data-slot": "dialog-trigger",
		...props
	});
}
function DialogPortal({ ...props }) {
	return /* @__PURE__ */ jsx(Dialog.Portal, {
		"data-slot": "dialog-portal",
		...props
	});
}
function DialogClose({ ...props }) {
	return /* @__PURE__ */ jsx(Dialog.Close, {
		"data-slot": "dialog-close",
		...props
	});
}
function DialogOverlay({ className, ...props }) {
	return /* @__PURE__ */ jsx(Dialog.Backdrop, {
		"data-slot": "dialog-overlay",
		className: cn$1("fixed inset-0 isolate z-50 bg-black/10 duration-100 supports-backdrop-filter:backdrop-blur-xs data-open:animate-in data-open:fade-in-0 data-closed:animate-out data-closed:fade-out-0", className),
		...props
	});
}
function DialogContent({ className, children, showCloseButton = true, ...props }) {
	return /* @__PURE__ */ jsxs(DialogPortal, { children: [/* @__PURE__ */ jsx(DialogOverlay, {}), /* @__PURE__ */ jsxs(Dialog.Popup, {
		"data-slot": "dialog-content",
		className: cn$1("fixed top-1/2 left-1/2 z-50 grid w-full max-w-[calc(100%-2rem)] -translate-x-1/2 -translate-y-1/2 gap-4 rounded-xl bg-popover p-4 text-sm text-popover-foreground ring-1 ring-foreground/10 duration-100 outline-none sm:max-w-sm data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95", className),
		...props,
		children: [children, showCloseButton && /* @__PURE__ */ jsxs(Dialog.Close, {
			"data-slot": "dialog-close",
			render: /* @__PURE__ */ jsx(Button$1, {
				variant: "ghost",
				className: "absolute top-2 right-2",
				size: "icon-sm"
			}),
			children: [/* @__PURE__ */ jsx(XIcon, {}), /* @__PURE__ */ jsx("span", {
				className: "sr-only",
				children: "Close"
			})]
		})]
	})] });
}
function DialogHeader({ className, ...props }) {
	return /* @__PURE__ */ jsx("div", {
		"data-slot": "dialog-header",
		className: cn$1("flex flex-col gap-2", className),
		...props
	});
}
function DialogFooter({ className, showCloseButton = false, children, ...props }) {
	return /* @__PURE__ */ jsxs("div", {
		"data-slot": "dialog-footer",
		className: cn$1("-mx-4 -mb-4 flex flex-col-reverse gap-2 rounded-b-xl border-t bg-muted/50 p-4 sm:flex-row sm:justify-end", className),
		...props,
		children: [children, showCloseButton && /* @__PURE__ */ jsx(Dialog.Close, {
			render: /* @__PURE__ */ jsx(Button$1, { variant: "outline" }),
			children: "Close"
		})]
	});
}
function DialogTitle({ className, ...props }) {
	return /* @__PURE__ */ jsx(Dialog.Title, {
		"data-slot": "dialog-title",
		className: cn$1("font-heading text-base leading-none font-medium", className),
		...props
	});
}
function DialogDescription({ className, ...props }) {
	return /* @__PURE__ */ jsx(Dialog.Description, {
		"data-slot": "dialog-description",
		className: cn$1("text-sm text-muted-foreground *:[a]:underline *:[a]:underline-offset-3 *:[a]:hover:text-foreground", className),
		...props
	});
}
//#endregion
//#region app/components/ui/field.tsx
function FieldSet({ className, ...props }) {
	return /* @__PURE__ */ jsx("fieldset", {
		"data-slot": "field-set",
		className: cn$1("flex flex-col gap-4 has-[>[data-slot=checkbox-group]]:gap-3 has-[>[data-slot=radio-group]]:gap-3", className),
		...props
	});
}
function FieldLegend({ className, variant = "legend", ...props }) {
	return /* @__PURE__ */ jsx("legend", {
		"data-slot": "field-legend",
		"data-variant": variant,
		className: cn$1("mb-1.5 font-medium data-[variant=label]:text-sm data-[variant=legend]:text-base", className),
		...props
	});
}
function FieldGroup({ className, ...props }) {
	return /* @__PURE__ */ jsx("div", {
		"data-slot": "field-group",
		className: cn$1("group/field-group @container/field-group flex w-full flex-col gap-5 data-[slot=checkbox-group]:gap-3 *:data-[slot=field-group]:gap-4", className),
		...props
	});
}
var fieldVariants = cva("group/field flex w-full gap-2 data-[invalid=true]:text-destructive", {
	variants: { orientation: {
		vertical: "flex-col *:w-full [&>.sr-only]:w-auto",
		horizontal: "flex-row items-center has-[>[data-slot=field-content]]:items-start *:data-[slot=field-label]:flex-auto has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px",
		responsive: "flex-col *:w-full @md/field-group:flex-row @md/field-group:items-center @md/field-group:*:w-auto @md/field-group:has-[>[data-slot=field-content]]:items-start @md/field-group:*:data-[slot=field-label]:flex-auto [&>.sr-only]:w-auto @md/field-group:has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px"
	} },
	defaultVariants: { orientation: "vertical" }
});
function Field({ className, orientation = "vertical", ...props }) {
	return /* @__PURE__ */ jsx("div", {
		role: "group",
		"data-slot": "field",
		"data-orientation": orientation,
		className: cn$1(fieldVariants({ orientation }), className),
		...props
	});
}
function FieldLabel({ className, ...props }) {
	return /* @__PURE__ */ jsx(Label, {
		"data-slot": "field-label",
		className: cn$1("group/field-label peer/field-label flex w-fit gap-2 leading-snug group-data-[disabled=true]/field:opacity-50 has-data-checked:border-primary/30 has-data-checked:bg-primary/5 has-[>[data-slot=field]]:rounded-lg has-[>[data-slot=field]]:border *:data-[slot=field]:p-2.5 dark:has-data-checked:border-primary/20 dark:has-data-checked:bg-primary/10", "has-[>[data-slot=field]]:w-full has-[>[data-slot=field]]:flex-col", className),
		...props
	});
}
function FieldDescription({ className, ...props }) {
	return /* @__PURE__ */ jsx("p", {
		"data-slot": "field-description",
		className: cn$1("text-left text-sm leading-normal font-normal text-muted-foreground group-has-data-horizontal/field:text-balance [[data-variant=legend]+&]:-mt-1.5", "last:mt-0 nth-last-2:-mt-1", "[&>a]:underline [&>a]:underline-offset-4 [&>a:hover]:text-primary", className),
		...props
	});
}
function FieldError({ className, children, errors, ...props }) {
	const content = useMemo(() => {
		if (children) return children;
		if (!errors?.length) return null;
		const uniqueErrors = [...new Map(errors.map((error) => [error?.message, error])).values()];
		if (uniqueErrors?.length == 1) return uniqueErrors[0]?.message;
		return /* @__PURE__ */ jsx("ul", {
			className: "ml-4 flex list-disc flex-col gap-1",
			children: uniqueErrors.map((error, index) => error?.message && /* @__PURE__ */ jsx("li", { children: error.message }, index))
		});
	}, [children, errors]);
	if (!content) return null;
	return /* @__PURE__ */ jsx("div", {
		role: "alert",
		"data-slot": "field-error",
		className: cn$1("text-sm font-normal text-destructive", className),
		...props,
		children: content
	});
}
//#endregion
//#region app/routes/admin/businesses.tsx
var businesses_exports = /* @__PURE__ */ __exportAll({
	default: () => businesses_default,
	meta: () => meta$1
});
function meta$1({}) {
	return [{ title: "My Admin App" }, {
		name: "description",
		content: "Welcome to React Router!"
	}];
}
var businesses_default = UNSAFE_withComponentProps(function Businesses() {
	return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("h1", { children: "user" }) });
});
//#endregion
//#region app/routes/admin/offres.tsx
var offres_exports = /* @__PURE__ */ __exportAll({
	default: () => offres_default,
	meta: () => meta
});
function meta({}) {
	return [{ title: "My Admin App" }, {
		name: "description",
		content: "Welcome to React Router!"
	}];
}
var offres_default = UNSAFE_withComponentProps(function Offres() {
	return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("h1", { children: "offres" }) });
});
//#endregion
//#region app/routes/admin/categories.tsx
var categories_exports = /* @__PURE__ */ __exportAll({ default: () => categories_default });
var requis = champsRequis(CategorieSchema.shape);
var Etoile = () => /* @__PURE__ */ jsx("span", {
	className: "text-destructive",
	children: "*"
});
var categories_default = UNSAFE_withComponentProps(function Categories() {
	const { businessId } = useBusiness();
	const [ouvert, setOuvert] = useState(false);
	const [enEdition, setEnEdition] = useState(null);
	const { donnees, chargement, erreur, recharger } = useListe(useCallback(() => listerCategories(businessId), [businessId]), !!businessId);
	const { register, handleSubmit, reset, formState: { errors, isSubmitting, isValid } } = useForm({
		resolver: zodResolver(CategorieSchema),
		mode: "onTouched",
		defaultValues: {
			nom: "",
			offreId: ""
		}
	});
	const ouvrirCreation = () => {
		setEnEdition(null);
		reset({
			nom: "",
			offreId: ""
		});
		setOuvert(true);
	};
	const ouvrirEdition = (categorie) => {
		setEnEdition(categorie);
		reset({
			nom: categorie.nom,
			offreId: categorie.offreId
		});
		setOuvert(true);
	};
	const onSubmit = async (form) => {
		const action = enEdition ? modifierCategorie(enEdition.id, form) : creerCategorie(businessId, form);
		await toast.promise(action, {
			loading: enEdition ? "Modification…" : "Création…",
			success: () => {
				setOuvert(false);
				recharger();
				return enEdition ? "Catégorie modifiée" : "Catégorie créée";
			},
			error: (e) => e.message
		}).unwrap();
	};
	const supprimer = async (categorie) => {
		await toast.promise(supprimerCategorie(categorie.id), {
			loading: "Suppression…",
			success: () => {
				recharger();
				return "Catégorie supprimée";
			},
			error: (e) => e.message
		}).unwrap();
	};
	return /* @__PURE__ */ jsxs(PageRessource, {
		titre: "Catégories",
		description: "Les catégories de votre business. Les catégories par défaut sont créées automatiquement.",
		businessRequis: true,
		businessId,
		chargement,
		erreur,
		vide: donnees.length === 0,
		messageVide: "Aucune catégorie pour le moment.",
		onReessayer: recharger,
		action: /* @__PURE__ */ jsxs(Button$1, {
			onClick: ouvrirCreation,
			children: [/* @__PURE__ */ jsx(PlusIcon, { className: "size-4" }), "Nouvelle catégorie"]
		}),
		children: [/* @__PURE__ */ jsx("div", {
			className: "overflow-hidden rounded-lg border",
			children: /* @__PURE__ */ jsxs(Table, { children: [/* @__PURE__ */ jsx(TableHeader, { children: /* @__PURE__ */ jsxs(TableRow, { children: [
				/* @__PURE__ */ jsx(TableHead, { children: "Nom" }),
				/* @__PURE__ */ jsx(TableHead, { children: "Origine" }),
				/* @__PURE__ */ jsx(TableHead, {
					className: "w-[1%] text-right",
					children: "Actions"
				})
			] }) }), /* @__PURE__ */ jsx(TableBody, { children: donnees.map((categorie) => /* @__PURE__ */ jsxs(TableRow, { children: [
				/* @__PURE__ */ jsx(TableCell, {
					className: "font-medium",
					children: categorie.nom
				}),
				/* @__PURE__ */ jsx(TableCell, { children: categorie.parDefaut ? /* @__PURE__ */ jsx(Badge, {
					variant: "secondary",
					children: "Par défaut"
				}) : /* @__PURE__ */ jsx("span", {
					className: "text-muted-foreground",
					children: "Personnalisée"
				}) }),
				/* @__PURE__ */ jsxs(TableCell, {
					className: "text-right whitespace-nowrap",
					children: [/* @__PURE__ */ jsx(Button$1, {
						variant: "ghost",
						size: "sm",
						onClick: () => ouvrirEdition(categorie),
						children: "Modifier"
					}), /* @__PURE__ */ jsx(Button$1, {
						variant: "ghost",
						size: "sm",
						"aria-label": `Supprimer ${categorie.nom}`,
						onClick: () => supprimer(categorie),
						children: /* @__PURE__ */ jsx(Trash2Icon, { className: "size-4 text-destructive" })
					})]
				})
			] }, categorie.id)) })] })
		}), /* @__PURE__ */ jsx(Dialog$1, {
			open: ouvert,
			onOpenChange: setOuvert,
			children: /* @__PURE__ */ jsxs(DialogContent, { children: [/* @__PURE__ */ jsxs(DialogHeader, { children: [/* @__PURE__ */ jsx(DialogTitle, { children: enEdition ? "Modifier la catégorie" : "Nouvelle catégorie" }), /* @__PURE__ */ jsx(DialogDescription, { children: "Une catégorie appartient à une offre et regroupe vos articles." })] }), /* @__PURE__ */ jsxs("form", {
				onSubmit: handleSubmit(onSubmit),
				noValidate: true,
				children: [/* @__PURE__ */ jsx(FieldGroup, { children: /* @__PURE__ */ jsxs(FieldSet, { children: [
					/* @__PURE__ */ jsx(FieldLegend, {
						variant: "label",
						children: "Informations requises"
					}),
					/* @__PURE__ */ jsxs(Field, {
						"data-invalid": !!errors.nom,
						children: [
							/* @__PURE__ */ jsxs(FieldLabel, {
								htmlFor: "nom",
								children: ["Nom ", requis.has("nom") && /* @__PURE__ */ jsx(Etoile, {})]
							}),
							/* @__PURE__ */ jsx(Input$1, {
								id: "nom",
								placeholder: "Ex : Mode & Tissus",
								"aria-required": requis.has("nom"),
								"aria-invalid": !!errors.nom,
								...register("nom")
							}),
							/* @__PURE__ */ jsx(FieldError, { errors: [errors.nom] })
						]
					}),
					/* @__PURE__ */ jsxs(Field, {
						"data-invalid": !!errors.offreId,
						children: [
							/* @__PURE__ */ jsxs(FieldLabel, {
								htmlFor: "offreId",
								children: ["Offre ", requis.has("offreId") && /* @__PURE__ */ jsx(Etoile, {})]
							}),
							/* @__PURE__ */ jsx(Input$1, {
								id: "offreId",
								placeholder: "Identifiant de l'offre",
								"aria-required": requis.has("offreId"),
								"aria-invalid": !!errors.offreId,
								...register("offreId")
							}),
							errors.offreId ? /* @__PURE__ */ jsx(FieldError, { errors: [errors.offreId] }) : /* @__PURE__ */ jsx(FieldDescription, { children: "Le serveur n'expose pas encore de liste d'offres : saisissez l'identifiant." })
						]
					})
				] }) }), /* @__PURE__ */ jsxs(DialogFooter, {
					className: "mt-6",
					children: [/* @__PURE__ */ jsx(Button$1, {
						type: "button",
						variant: "outline",
						onClick: () => setOuvert(false),
						disabled: isSubmitting,
						children: "Annuler"
					}), /* @__PURE__ */ jsx(Button$1, {
						type: "submit",
						disabled: !isValid || isSubmitting,
						children: isSubmitting ? "Enregistrement…" : enEdition ? "Enregistrer" : "Créer la catégorie"
					})]
				})]
			})] })
		})]
	});
});
//#endregion
export { supprimerPromotion as $, creerCaisse as A, listerDevises as B, PageRessource as C, champsRequis as Ct, changerStatusAchat as D, caisseParDefaut as E, listerAgents as F, modifierClient as G, listerPromotions as H, listerArticles as I, supprimerAgent as J, modifierFournisseur as K, listerCaisses as L, creerFournisseur as M, creerPromotion as N, changerStatusPromotion as O, listerAchats as P, supprimerFournisseur as Q, listerCategories as R, useListe as S, API as St, bloquerAgent as T, items as Tt, modifierArticle as U, listerFournisseurs as V, modifierCaisse as W, supprimerCaisse as X, supprimerArticle as Y, supprimerClient as Z, DialogDescription as _, Badge as _t, businesses_default as a, CaisseSchema as at, DialogTitle as b, Input$1 as bt, FieldDescription as c, FournisseurSchema as ct, FieldLabel as d, TableBody as dt, BusinessProvider as et, FieldLegend as f, TableCell as ft, DialogContent as g, Label as gt, DialogClose as h, TableRow as ht, offres_exports as i, BusinessSchema as it, creerClient as j, creerArticle as k, FieldError as l, PromotionSchema as lt, Dialog$1 as m, TableHeader as mt, categories_exports as n, AdresseSchema as nt, businesses_exports as o, ClientSchema as ot, FieldSet as p, TableHead as pt, supprimerAchat as q, offres_default as r, ArticleSchema as rt, Field as s, ContactSchema as st, categories_default as t, useBusiness as tt, FieldGroup as u, Table as ut, DialogFooter as v, Skeleton as vt, activerAgent as w, cn$1 as wt, DialogTrigger as x, Button$1 as xt, DialogHeader as y, Separator$1 as yt, listerClients as z };

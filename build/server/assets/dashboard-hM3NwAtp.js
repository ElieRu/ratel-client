import { t as __exportAll } from "./rolldown-runtime-D7D4PA-g.js";
import { UNSAFE_withComponentProps } from "react-router";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import * as React$1 from "react";
import { mergeProps } from "@base-ui/react/merge-props";
import { useRender } from "@base-ui/react/use-render";
import { cva } from "class-variance-authority";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { Button } from "@base-ui/react/button";
import { cn } from "cn";
import { Input } from "@base-ui/react/input";
import { Separator } from "@base-ui/react/separator";
import { CheckIcon, ChevronDownIcon, ChevronLeftIcon, ChevronRightIcon, ChevronUpIcon, ChevronsLeftIcon, ChevronsRightIcon, CircleCheckIcon, Columns3Icon, EllipsisVerticalIcon, GripVerticalIcon, LoaderIcon, PlusIcon, TrendingUpIcon } from "lucide-react";
import { Menu } from "@base-ui/react/menu";
import { DndContext, KeyboardSensor, MouseSensor, TouchSensor, closestCenter, useSensor, useSensors } from "@dnd-kit/core";
import { restrictToVerticalAxis } from "@dnd-kit/modifiers";
import { SortableContext, arrayMove, useSortable, verticalListSortingStrategy } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { FlexRender, columnFilteringFeature, columnVisibilityFeature, createColumnHelper, createFilteredRowModel, createPaginatedRowModel, createSortedRowModel, rowPaginationFeature, rowSelectionFeature, rowSortingFeature, tableFeatures, useTable } from "@tanstack/react-table";
import * as RechartsPrimitive from "recharts";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";
import { toast } from "sonner";
import { z } from "zod";
import { Checkbox } from "@base-ui/react/checkbox";
import { Drawer } from "@base-ui/react/drawer";
import { Select } from "@base-ui/react/select";
import { Tabs } from "@base-ui/react/tabs";
//#region app/hooks/use-mobile.ts
var MOBILE_BREAKPOINT = 768;
function useIsMobile() {
	const [isMobile, setIsMobile] = React$1.useState(void 0);
	React$1.useEffect(() => {
		const mql = window.matchMedia(`(max-width: 767px)`);
		const onChange = () => {
			setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
		};
		mql.addEventListener("change", onChange);
		setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
		return () => mql.removeEventListener("change", onChange);
	}, []);
	return !!isMobile;
}
//#endregion
//#region app/lib/utils.ts
function cn$1(...inputs) {
	return twMerge(clsx(inputs));
}
var API = "http://localhost:3000";
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
//#region app/components/ui/dropdown-menu.tsx
function DropdownMenu({ ...props }) {
	return /* @__PURE__ */ jsx(Menu.Root, {
		"data-slot": "dropdown-menu",
		...props
	});
}
function DropdownMenuTrigger({ ...props }) {
	return /* @__PURE__ */ jsx(Menu.Trigger, {
		"data-slot": "dropdown-menu-trigger",
		...props
	});
}
function DropdownMenuContent({ align = "start", alignOffset = 0, side = "bottom", sideOffset = 4, className, ...props }) {
	return /* @__PURE__ */ jsx(Menu.Portal, { children: /* @__PURE__ */ jsx(Menu.Positioner, {
		className: "isolate z-50 outline-none",
		align,
		alignOffset,
		side,
		sideOffset,
		children: /* @__PURE__ */ jsx(Menu.Popup, {
			"data-slot": "dropdown-menu-content",
			className: cn$1("z-50 max-h-(--available-height) w-(--anchor-width) min-w-32 origin-(--transform-origin) overflow-x-hidden overflow-y-auto rounded-lg bg-popover p-1 text-popover-foreground shadow-md ring-1 ring-foreground/10 duration-100 outline-none data-[side=bottom]:slide-in-from-top-2 data-[side=inline-end]:slide-in-from-left-2 data-[side=inline-start]:slide-in-from-right-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:overflow-hidden data-closed:fade-out-0 data-closed:zoom-out-95", className),
			...props
		})
	}) });
}
function DropdownMenuGroup({ ...props }) {
	return /* @__PURE__ */ jsx(Menu.Group, {
		"data-slot": "dropdown-menu-group",
		...props
	});
}
function DropdownMenuLabel({ className, inset, ...props }) {
	return /* @__PURE__ */ jsx(Menu.GroupLabel, {
		"data-slot": "dropdown-menu-label",
		"data-inset": inset,
		className: cn$1("px-1.5 py-1 text-xs font-medium text-muted-foreground data-inset:pl-7", className),
		...props
	});
}
function DropdownMenuItem({ className, inset, variant = "default", ...props }) {
	return /* @__PURE__ */ jsx(Menu.Item, {
		"data-slot": "dropdown-menu-item",
		"data-inset": inset,
		"data-variant": variant,
		className: cn$1("group/dropdown-menu-item relative flex cursor-default items-center gap-1.5 rounded-md px-1.5 py-1 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground not-data-[variant=destructive]:focus:**:text-accent-foreground data-inset:pl-7 data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 data-[variant=destructive]:focus:text-destructive dark:data-[variant=destructive]:focus:bg-destructive/20 data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 data-[variant=destructive]:*:[svg]:text-destructive", className),
		...props
	});
}
function DropdownMenuCheckboxItem({ className, children, checked, inset, ...props }) {
	return /* @__PURE__ */ jsxs(Menu.CheckboxItem, {
		"data-slot": "dropdown-menu-checkbox-item",
		"data-inset": inset,
		className: cn$1("relative flex cursor-default items-center gap-1.5 rounded-md py-1 pr-8 pl-1.5 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground focus:**:text-accent-foreground data-inset:pl-7 data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className),
		checked,
		...props,
		children: [/* @__PURE__ */ jsx("span", {
			className: "pointer-events-none absolute right-2 flex items-center justify-center",
			"data-slot": "dropdown-menu-checkbox-item-indicator",
			children: /* @__PURE__ */ jsx(Menu.CheckboxItemIndicator, { children: /* @__PURE__ */ jsx(CheckIcon, {}) })
		}), children]
	});
}
function DropdownMenuSeparator({ className, ...props }) {
	return /* @__PURE__ */ jsx(Menu.Separator, {
		"data-slot": "dropdown-menu-separator",
		className: cn$1("-mx-1 my-1 h-px bg-border", className),
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
//#region app/components/ui/chart.tsx
var THEMES = {
	light: "",
	dark: ".dark"
};
var INITIAL_DIMENSION = {
	width: 320,
	height: 200
};
var ChartContext = React$1.createContext(null);
function useChart() {
	const context = React$1.useContext(ChartContext);
	if (!context) throw new Error("useChart must be used within a <ChartContainer />");
	return context;
}
function ChartContainer({ id, className, children, config, initialDimension = INITIAL_DIMENSION, ...props }) {
	const uniqueId = React$1.useId();
	const chartId = `chart-${id ?? uniqueId.replace(/:/g, "")}`;
	return /* @__PURE__ */ jsx(ChartContext.Provider, {
		value: { config },
		children: /* @__PURE__ */ jsxs("div", {
			"data-slot": "chart",
			"data-chart": chartId,
			className: cn$1("flex aspect-video justify-center text-xs [&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector]:outline-hidden [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-surface]:outline-hidden", className),
			...props,
			children: [/* @__PURE__ */ jsx(ChartStyle, {
				id: chartId,
				config
			}), /* @__PURE__ */ jsx(RechartsPrimitive.ResponsiveContainer, {
				initialDimension,
				children
			})]
		})
	});
}
var ChartStyle = ({ id, config }) => {
	const colorConfig = Object.entries(config).filter(([, config]) => config.theme ?? config.color);
	if (!colorConfig.length) return null;
	return /* @__PURE__ */ jsx("style", { dangerouslySetInnerHTML: { __html: Object.entries(THEMES).map(([theme, prefix]) => `
${prefix} [data-chart=${id}] {
${colorConfig.map(([key, itemConfig]) => {
		const color = itemConfig.theme?.[theme] ?? itemConfig.color;
		return color ? `  --color-${key}: ${color};` : null;
	}).join("\n")}
}
`).join("\n") } });
};
var ChartTooltip = RechartsPrimitive.Tooltip;
function ChartTooltipContent({ active, payload, className, indicator = "dot", hideLabel = false, hideIndicator = false, label, labelFormatter, labelClassName, formatter, color, nameKey, labelKey }) {
	const { config } = useChart();
	const tooltipLabel = React$1.useMemo(() => {
		if (hideLabel || !payload?.length) return null;
		const [item] = payload;
		const key = `${labelKey ?? item?.dataKey ?? item?.name ?? "value"}`;
		const itemConfig = getPayloadConfigFromPayload(config, item, key);
		const value = !labelKey && typeof label === "string" ? config[label]?.label ?? label : itemConfig?.label;
		if (labelFormatter) return /* @__PURE__ */ jsx("div", {
			className: cn$1("font-medium", labelClassName),
			children: labelFormatter(value, payload)
		});
		if (!value) return null;
		return /* @__PURE__ */ jsx("div", {
			className: cn$1("font-medium", labelClassName),
			children: value
		});
	}, [
		label,
		labelFormatter,
		payload,
		hideLabel,
		labelClassName,
		config,
		labelKey
	]);
	if (!active || !payload?.length) return null;
	const nestLabel = payload.length === 1 && indicator !== "dot";
	return /* @__PURE__ */ jsxs("div", {
		className: cn$1("grid min-w-32 items-start gap-1.5 rounded-lg border border-border/50 bg-background px-2.5 py-1.5 text-xs shadow-xl", className),
		children: [!nestLabel ? tooltipLabel : null, /* @__PURE__ */ jsx("div", {
			className: "grid gap-1.5",
			children: payload.filter((item) => item.type !== "none").map((item, index) => {
				const key = `${nameKey ?? item.name ?? item.dataKey ?? "value"}`;
				const itemConfig = getPayloadConfigFromPayload(config, item, key);
				const indicatorColor = color ?? item.payload?.fill ?? item.color;
				return /* @__PURE__ */ jsx("div", {
					className: cn$1("flex w-full flex-wrap items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5 [&>svg]:text-muted-foreground", indicator === "dot" && "items-center"),
					children: formatter && item?.value !== void 0 && item.name ? formatter(item.value, item.name, item, index, item.payload) : /* @__PURE__ */ jsxs(Fragment, { children: [itemConfig?.icon ? /* @__PURE__ */ jsx(itemConfig.icon, {}) : !hideIndicator && /* @__PURE__ */ jsx("div", {
						className: cn$1("shrink-0 rounded-[2px] border-(--color-border) bg-(--color-bg)", {
							"h-2.5 w-2.5": indicator === "dot",
							"w-1": indicator === "line",
							"w-0 border-[1.5px] border-dashed bg-transparent": indicator === "dashed",
							"my-0.5": nestLabel && indicator === "dashed"
						}),
						style: {
							"--color-bg": indicatorColor,
							"--color-border": indicatorColor
						}
					}), /* @__PURE__ */ jsxs("div", {
						className: cn$1("flex flex-1 justify-between leading-none", nestLabel ? "items-end" : "items-center"),
						children: [/* @__PURE__ */ jsxs("div", {
							className: "grid gap-1.5",
							children: [nestLabel ? tooltipLabel : null, /* @__PURE__ */ jsx("span", {
								className: "text-muted-foreground",
								children: itemConfig?.label ?? item.name
							})]
						}), item.value != null && /* @__PURE__ */ jsx("span", {
							className: "font-mono font-medium text-foreground tabular-nums",
							children: typeof item.value === "number" ? item.value.toLocaleString() : String(item.value)
						})]
					})] })
				}, index);
			})
		})]
	});
}
function getPayloadConfigFromPayload(config, payload, key) {
	if (typeof payload !== "object" || payload === null) return;
	const payloadPayload = "payload" in payload && typeof payload.payload === "object" && payload.payload !== null ? payload.payload : void 0;
	let configLabelKey = key;
	if (key in payload && typeof payload[key] === "string") configLabelKey = payload[key];
	else if (payloadPayload && key in payloadPayload && typeof payloadPayload[key] === "string") configLabelKey = payloadPayload[key];
	return configLabelKey in config ? config[configLabelKey] : config[key];
}
//#endregion
//#region app/components/ui/checkbox.tsx
function Checkbox$1({ className, ...props }) {
	return /* @__PURE__ */ jsx(Checkbox.Root, {
		"data-slot": "checkbox",
		className: cn$1("peer relative flex size-4 shrink-0 items-center justify-center rounded-[4px] border border-input transition-colors outline-none group-has-disabled/field:opacity-50 after:absolute after:-inset-x-3 after:-inset-y-2 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 aria-invalid:aria-checked:border-primary dark:bg-input/30 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 data-checked:border-primary data-checked:bg-primary data-checked:text-primary-foreground dark:data-checked:bg-primary", className),
		...props,
		children: /* @__PURE__ */ jsx(Checkbox.Indicator, {
			"data-slot": "checkbox-indicator",
			className: "grid place-content-center text-current transition-none [&>svg]:size-3.5",
			children: /* @__PURE__ */ jsx(CheckIcon, {})
		})
	});
}
//#endregion
//#region app/components/ui/drawer.tsx
var DrawerContext = React$1.createContext(null);
function useDrawer() {
	const context = React$1.useContext(DrawerContext);
	if (!context) throw new Error("useDrawer must be used within a Drawer.");
	return context;
}
function Drawer$1({ modal = true, showSwipeHandle = false, snapPoints, swipeDirection = "down", ...props }) {
	const hasSnapPoints = snapPoints != null && snapPoints.length > 0;
	const contextValue = React$1.useMemo(() => ({
		hasSnapPoints,
		modal,
		showSwipeHandle,
		swipeDirection
	}), [
		hasSnapPoints,
		modal,
		showSwipeHandle,
		swipeDirection
	]);
	return /* @__PURE__ */ jsx(DrawerContext.Provider, {
		value: contextValue,
		children: /* @__PURE__ */ jsx(Drawer.Root, {
			"data-slot": "drawer",
			modal,
			snapPoints,
			swipeDirection,
			...props
		})
	});
}
function DrawerTrigger({ ...props }) {
	return /* @__PURE__ */ jsx(Drawer.Trigger, {
		"data-slot": "drawer-trigger",
		...props
	});
}
function DrawerPortal({ ...props }) {
	return /* @__PURE__ */ jsx(Drawer.Portal, {
		"data-slot": "drawer-portal",
		...props
	});
}
function DrawerClose({ ...props }) {
	return /* @__PURE__ */ jsx(Drawer.Close, {
		"data-slot": "drawer-close",
		...props
	});
}
function DrawerOverlay({ className, ...props }) {
	return /* @__PURE__ */ jsx(Drawer.Backdrop, {
		"data-slot": "drawer-overlay",
		className: cn$1("fixed inset-0 z-50 min-h-dvh bg-black/10 opacity-[max(var(--drawer-overlay-min-opacity,0),calc(1-var(--drawer-swipe-progress)))] transition-opacity duration-450 ease-[cubic-bezier(0.32,0.72,0,1)] select-none data-ending-style:pointer-events-none data-ending-style:opacity-0 data-ending-style:duration-[calc(var(--drawer-swipe-strength)*400ms)] data-snap-points:[--drawer-overlay-min-opacity:0.5] data-starting-style:opacity-0 data-swiping:duration-0 supports-backdrop-filter:backdrop-blur-xs supports-[-webkit-touch-callout:none]:absolute", className),
		...props
	});
}
function DrawerSwipeHandle({ className, ...props }) {
	return /* @__PURE__ */ jsx("div", {
		"data-slot": "drawer-swipe-handle",
		"aria-hidden": "true",
		className: cn$1("relative z-10 flex shrink-0 cursor-grab transition-opacity duration-200 group-data-nested-drawer-open/drawer-popup:opacity-0 group-data-nested-drawer-swiping/drawer-popup:opacity-100 group-data-[swipe-axis=x]/drawer-popup:h-full group-data-[swipe-axis=x]/drawer-popup:w-3 group-data-[swipe-axis=x]/drawer-popup:items-center group-data-[swipe-axis=y]/drawer-popup:h-3 group-data-[swipe-axis=y]/drawer-popup:w-full group-data-[swipe-axis=y]/drawer-popup:justify-center group-data-[swipe-direction=down]/drawer-popup:items-end group-data-[swipe-direction=left]/drawer-popup:order-last group-data-[swipe-direction=left]/drawer-popup:justify-start group-data-[swipe-direction=right]/drawer-popup:justify-end group-data-[swipe-direction=up]/drawer-popup:order-last group-data-[swipe-direction=up]/drawer-popup:items-start after:block after:shrink-0 after:rounded-full after:bg-muted group-data-[swipe-axis=x]/drawer-popup:after:h-24 group-data-[swipe-axis=x]/drawer-popup:after:w-1 group-data-[swipe-axis=y]/drawer-popup:after:h-1 group-data-[swipe-axis=y]/drawer-popup:after:w-24 active:cursor-grabbing", className),
		...props
	});
}
function DrawerContent({ className, children, ...props }) {
	const { hasSnapPoints, modal, showSwipeHandle, swipeDirection } = useDrawer();
	const swipeAxis = swipeDirection === "down" || swipeDirection === "up" ? "y" : "x";
	return /* @__PURE__ */ jsxs(DrawerPortal, {
		"data-slot": "drawer-portal",
		children: [modal === true && /* @__PURE__ */ jsx(DrawerOverlay, { "data-snap-points": hasSnapPoints ? "" : void 0 }), /* @__PURE__ */ jsx(Drawer.Viewport, {
			"data-slot": "drawer-viewport",
			"data-modal": modal,
			className: "pointer-events-none fixed inset-0 z-50 select-none data-[modal=true]:pointer-events-auto",
			children: /* @__PURE__ */ jsxs(Drawer.Popup, {
				"data-slot": "drawer-popup",
				"data-swipe-axis": swipeAxis,
				"data-snap-points": hasSnapPoints ? "" : void 0,
				className: cn$1("group/drawer-popup pointer-events-auto fixed z-50 m-(--drawer-inset,0px) flex h-(--drawer-content-height) max-h-(--drawer-content-max-height,none) min-h-0 w-(--drawer-content-width,auto) transform-[translate3d(var(--translate-x,0px),var(--translate-y,0px),0)_scale(var(--stack-scale))] flex-col bg-popover text-sm text-popover-foreground transition-[transform,height,opacity,filter] duration-450 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform outline-none select-none [interpolate-size:allow-keywords] data-[swipe-direction=down]:rounded-t-xl data-[swipe-direction=down]:border-t data-[swipe-direction=left]:rounded-r-xl data-[swipe-direction=left]:border-r data-[swipe-direction=right]:rounded-l-xl data-[swipe-direction=right]:border-l data-[swipe-direction=up]:rounded-b-xl data-[swipe-direction=up]:border-b", "data-nested-drawer-open:overflow-hidden data-nested-drawer-open:brightness-95", "after:pointer-events-none after:absolute after:bg-(--drawer-bleed-background,var(--color-popover)) data-[swipe-axis=x]:after:inset-y-0 data-[swipe-axis=x]:after:w-(--bleed) data-[swipe-axis=y]:after:inset-x-0 data-[swipe-axis=y]:after:h-(--bleed) data-[swipe-direction=down]:after:top-full data-[swipe-direction=left]:after:right-full data-[swipe-direction=right]:after:left-full data-[swipe-direction=up]:after:bottom-full", "[--drawer-content-height:var(--drawer-height,auto)] data-[swipe-axis=x]:[--drawer-content-width:75%] data-[swipe-axis=y]:[--drawer-content-max-height:calc(100dvh-6rem)] data-[swipe-axis=y]:data-snap-points:[--drawer-content-height:100dvh] data-[swipe-axis=x]:sm:[--drawer-content-width:24rem]", "[--bleed:3rem] [--peek:1rem] [--stack-height:var(--drawer-frontmost-height,var(--drawer-height,0px))] [--stack-peek-offset:max(0px,calc((var(--nested-drawers)-var(--stack-progress))*var(--peek)))] [--stack-progress:clamp(0,var(--drawer-swipe-progress),1)] [--stack-scale-base:max(0,calc(1-(var(--nested-drawers)*var(--stack-step))))] [--stack-scale:clamp(0,calc(var(--stack-scale-base)+(var(--stack-step)*var(--stack-progress))),1)] [--stack-shrink:calc(1-var(--stack-scale))] [--stack-step:0.05]", "data-ending-style:transform-(--closed-transform) data-ending-style:opacity-[0.9999] data-ending-style:duration-[calc(var(--drawer-swipe-strength)*400ms)] data-nested-drawer-swiping:duration-0 data-ending-style:data-nested-drawer-swiping:duration-[calc(var(--drawer-swipe-strength)*400ms)] data-starting-style:transform-(--closed-transform) data-swiping:duration-0 data-ending-style:data-swiping:duration-[calc(var(--drawer-swipe-strength)*400ms)]", "data-[swipe-axis=y]:inset-x-0 data-[swipe-axis=y]:data-nested-drawer-open:h-(--stack-height)", "data-[swipe-axis=x]:inset-y-0 data-[swipe-axis=x]:flex-row", "data-[swipe-direction=down]:bottom-0 data-[swipe-direction=down]:origin-bottom data-[swipe-direction=down]:[--closed-transform:translate3d(0,calc(100%+var(--drawer-inset,0px)+2px),0)] data-[swipe-direction=down]:[--translate-y:calc(var(--drawer-snap-point-offset,0px)+var(--drawer-swipe-movement-y)-var(--stack-peek-offset)-(var(--stack-shrink)*var(--stack-height)))]", "data-[swipe-direction=up]:top-0 data-[swipe-direction=up]:origin-top data-[swipe-direction=up]:[--closed-transform:translate3d(0,calc(-100%-var(--drawer-inset,0px)-2px),0)] data-[swipe-direction=up]:[--translate-y:calc(var(--drawer-snap-point-offset,0px)+var(--drawer-swipe-movement-y)+var(--stack-peek-offset)+(var(--stack-shrink)*var(--stack-height)))]", "data-[swipe-direction=left]:left-0 data-[swipe-direction=left]:origin-left data-[swipe-direction=left]:[--closed-transform:translate3d(calc(-100%-var(--drawer-inset,0px)-2px),0,0)] data-[swipe-direction=left]:[--translate-x:calc(var(--drawer-swipe-movement-x)+var(--stack-peek-offset)+(var(--stack-shrink)*100%))]", "data-[swipe-direction=right]:right-0 data-[swipe-direction=right]:origin-right data-[swipe-direction=right]:[--closed-transform:translate3d(calc(100%+var(--drawer-inset,0px)+2px),0,0)] data-[swipe-direction=right]:[--translate-x:calc(var(--drawer-swipe-movement-x)-var(--stack-peek-offset)-(var(--stack-shrink)*100%))]", className),
				...props,
				children: [showSwipeHandle && /* @__PURE__ */ jsx(DrawerSwipeHandle, {}), /* @__PURE__ */ jsx(Drawer.Content, {
					"data-slot": "drawer-content",
					className: cn$1("flex min-h-0 flex-1 flex-col overflow-hidden overscroll-contain rounded-[inherit] transition-opacity duration-300 ease-[cubic-bezier(0.45,1.005,0,1.005)] select-text group-data-nested-drawer-open/drawer-popup:opacity-0 group-data-nested-drawer-swiping/drawer-popup:opacity-100 group-data-swiping/drawer-popup:select-none"),
					children
				})]
			})
		})]
	});
}
function DrawerHeader({ className, ...props }) {
	return /* @__PURE__ */ jsx("div", {
		"data-slot": "drawer-header",
		className: cn$1("flex shrink-0 flex-col gap-0.5 p-4 pb-0 group-data-[swipe-axis=y]/drawer-popup:text-center md:gap-0.5 md:text-left", className),
		...props
	});
}
function DrawerFooter({ className, ...props }) {
	return /* @__PURE__ */ jsx("div", {
		"data-slot": "drawer-footer",
		className: cn$1("mt-auto flex shrink-0 flex-col gap-2 p-4 pt-0", className),
		...props
	});
}
function DrawerTitle({ className, ...props }) {
	return /* @__PURE__ */ jsx(Drawer.Title, {
		"data-slot": "drawer-title",
		className: cn$1("font-heading text-base font-medium text-foreground", className),
		...props
	});
}
function DrawerDescription({ className, ...props }) {
	return /* @__PURE__ */ jsx(Drawer.Description, {
		"data-slot": "drawer-description",
		className: cn$1("text-sm text-balance text-muted-foreground", className),
		...props
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
//#region app/components/ui/select.tsx
var Select$1 = Select.Root;
function SelectGroup({ className, ...props }) {
	return /* @__PURE__ */ jsx(Select.Group, {
		"data-slot": "select-group",
		className: cn$1("scroll-my-1 p-1", className),
		...props
	});
}
function SelectValue({ className, ...props }) {
	return /* @__PURE__ */ jsx(Select.Value, {
		"data-slot": "select-value",
		className: cn$1("flex flex-1 text-left", className),
		...props
	});
}
function SelectTrigger({ className, size = "default", children, ...props }) {
	return /* @__PURE__ */ jsxs(Select.Trigger, {
		"data-slot": "select-trigger",
		"data-size": size,
		className: cn$1("flex w-fit items-center justify-between gap-1.5 rounded-lg border border-input bg-transparent py-2 pr-2 pl-2.5 text-sm whitespace-nowrap transition-colors outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 data-placeholder:text-muted-foreground data-[size=default]:h-8 data-[size=sm]:h-7 data-[size=sm]:rounded-[min(var(--radius-md),10px)] *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-1.5 dark:bg-input/30 dark:hover:bg-input/50 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className),
		...props,
		children: [children, /* @__PURE__ */ jsx(Select.Icon, { render: /* @__PURE__ */ jsx(ChevronDownIcon, { className: "pointer-events-none size-4 text-muted-foreground" }) })]
	});
}
function SelectContent({ className, children, side = "bottom", sideOffset = 4, align = "center", alignOffset = 0, alignItemWithTrigger = true, ...props }) {
	return /* @__PURE__ */ jsx(Select.Portal, { children: /* @__PURE__ */ jsx(Select.Positioner, {
		side,
		sideOffset,
		align,
		alignOffset,
		alignItemWithTrigger,
		className: "isolate z-50",
		children: /* @__PURE__ */ jsxs(Select.Popup, {
			"data-slot": "select-content",
			"data-align-trigger": alignItemWithTrigger,
			className: cn$1("relative isolate z-50 max-h-(--available-height) w-(--anchor-width) min-w-36 origin-(--transform-origin) overflow-x-hidden overflow-y-auto rounded-lg bg-popover text-popover-foreground shadow-md ring-1 ring-foreground/10 duration-100 data-[align-trigger=true]:animate-none data-[side=bottom]:slide-in-from-top-2 data-[side=inline-end]:slide-in-from-left-2 data-[side=inline-start]:slide-in-from-right-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95", className),
			...props,
			children: [
				/* @__PURE__ */ jsx(SelectScrollUpButton, {}),
				/* @__PURE__ */ jsx(Select.List, { children }),
				/* @__PURE__ */ jsx(SelectScrollDownButton, {})
			]
		})
	}) });
}
function SelectItem({ className, children, ...props }) {
	return /* @__PURE__ */ jsxs(Select.Item, {
		"data-slot": "select-item",
		className: cn$1("relative flex w-full cursor-default items-center gap-1.5 rounded-md py-1 pr-8 pl-1.5 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground not-data-[variant=destructive]:focus:**:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2", className),
		...props,
		children: [/* @__PURE__ */ jsx(Select.ItemText, {
			className: "flex flex-1 shrink-0 gap-2 whitespace-nowrap",
			children
		}), /* @__PURE__ */ jsx(Select.ItemIndicator, {
			render: /* @__PURE__ */ jsx("span", { className: "pointer-events-none absolute right-2 flex size-4 items-center justify-center" }),
			children: /* @__PURE__ */ jsx(CheckIcon, { className: "pointer-events-none" })
		})]
	});
}
function SelectScrollUpButton({ className, ...props }) {
	return /* @__PURE__ */ jsx(Select.ScrollUpArrow, {
		"data-slot": "select-scroll-up-button",
		className: cn$1("top-0 z-10 flex w-full cursor-default items-center justify-center bg-popover py-1 [&_svg:not([class*='size-'])]:size-4", className),
		...props,
		children: /* @__PURE__ */ jsx(ChevronUpIcon, {})
	});
}
function SelectScrollDownButton({ className, ...props }) {
	return /* @__PURE__ */ jsx(Select.ScrollDownArrow, {
		"data-slot": "select-scroll-down-button",
		className: cn$1("bottom-0 z-10 flex w-full cursor-default items-center justify-center bg-popover py-1 [&_svg:not([class*='size-'])]:size-4", className),
		...props,
		children: /* @__PURE__ */ jsx(ChevronDownIcon, {})
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
//#region app/components/ui/tabs.tsx
function Tabs$1({ className, orientation = "horizontal", ...props }) {
	return /* @__PURE__ */ jsx(Tabs.Root, {
		"data-slot": "tabs",
		"data-orientation": orientation,
		className: cn$1("group/tabs flex gap-2 data-horizontal:flex-col", className),
		...props
	});
}
var tabsListVariants = cva("group/tabs-list inline-flex w-fit items-center justify-center rounded-lg p-[3px] text-muted-foreground group-data-horizontal/tabs:h-8 group-data-vertical/tabs:h-fit group-data-vertical/tabs:flex-col data-[variant=line]:rounded-none", {
	variants: { variant: {
		default: "bg-muted",
		line: "gap-1 bg-transparent"
	} },
	defaultVariants: { variant: "default" }
});
function TabsList({ className, variant = "default", ...props }) {
	return /* @__PURE__ */ jsx(Tabs.List, {
		"data-slot": "tabs-list",
		"data-variant": variant,
		className: cn$1(tabsListVariants({ variant }), className),
		...props
	});
}
function TabsTrigger({ className, ...props }) {
	return /* @__PURE__ */ jsx(Tabs.Tab, {
		"data-slot": "tabs-trigger",
		className: cn$1("relative inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-1.5 py-0.5 text-sm font-medium whitespace-nowrap text-foreground/60 transition-all group-data-vertical/tabs:w-full group-data-vertical/tabs:justify-start hover:text-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-1 focus-visible:outline-ring disabled:pointer-events-none disabled:opacity-50 has-data-[icon=inline-end]:pr-1 has-data-[icon=inline-start]:pl-1 aria-disabled:pointer-events-none aria-disabled:opacity-50 dark:text-muted-foreground dark:hover:text-foreground group-data-[variant=default]/tabs-list:data-active:shadow-sm group-data-[variant=line]/tabs-list:data-active:shadow-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", "group-data-[variant=line]/tabs-list:bg-transparent group-data-[variant=line]/tabs-list:data-active:bg-transparent dark:group-data-[variant=line]/tabs-list:data-active:border-transparent dark:group-data-[variant=line]/tabs-list:data-active:bg-transparent", "data-active:bg-background data-active:text-foreground dark:data-active:border-input dark:data-active:bg-input/30 dark:data-active:text-foreground", "after:absolute after:bg-foreground after:opacity-0 after:transition-opacity group-data-horizontal/tabs:after:inset-x-0 group-data-horizontal/tabs:after:bottom-[-5px] group-data-horizontal/tabs:after:h-0.5 group-data-vertical/tabs:after:inset-y-0 group-data-vertical/tabs:after:-right-1 group-data-vertical/tabs:after:w-0.5 group-data-[variant=line]/tabs-list:data-active:after:opacity-100", className),
		...props
	});
}
function TabsContent({ className, ...props }) {
	return /* @__PURE__ */ jsx(Tabs.Panel, {
		"data-slot": "tabs-content",
		className: cn$1("flex-1 text-sm outline-none", className),
		...props
	});
}
//#endregion
//#region app/components/data-table.tsx
var features = tableFeatures({
	columnFilteringFeature,
	columnVisibilityFeature,
	rowPaginationFeature,
	rowSelectionFeature,
	rowSortingFeature,
	filteredRowModel: createFilteredRowModel(),
	paginatedRowModel: createPaginatedRowModel(),
	sortedRowModel: createSortedRowModel()
});
var columnHelper = createColumnHelper();
z.object({
	id: z.number(),
	header: z.string(),
	type: z.string(),
	status: z.string(),
	target: z.string(),
	limit: z.string(),
	reviewer: z.string()
});
function DragHandle({ id }) {
	const { attributes, listeners } = useSortable({ id });
	return /* @__PURE__ */ jsxs(Button$1, {
		...attributes,
		...listeners,
		variant: "ghost",
		size: "icon",
		className: "size-7 text-muted-foreground hover:bg-transparent",
		children: [/* @__PURE__ */ jsx(GripVerticalIcon, { className: "size-3 text-muted-foreground" }), /* @__PURE__ */ jsx("span", {
			className: "sr-only",
			children: "Drag to reorder"
		})]
	});
}
var columns = columnHelper.columns([
	columnHelper.display({
		id: "drag",
		header: () => null,
		cell: ({ row }) => /* @__PURE__ */ jsx(DragHandle, { id: row.original.id })
	}),
	columnHelper.display({
		id: "select",
		header: ({ table }) => /* @__PURE__ */ jsx("div", {
			className: "flex items-center justify-center",
			children: /* @__PURE__ */ jsx(Checkbox$1, {
				checked: table.getIsAllPageRowsSelected(),
				indeterminate: table.getIsSomePageRowsSelected() && !table.getIsAllPageRowsSelected(),
				onCheckedChange: (value) => table.toggleAllPageRowsSelected(!!value),
				"aria-label": "Select all"
			})
		}),
		cell: ({ row }) => /* @__PURE__ */ jsx("div", {
			className: "flex items-center justify-center",
			children: /* @__PURE__ */ jsx(Checkbox$1, {
				checked: row.getIsSelected(),
				onCheckedChange: (value) => row.toggleSelected(!!value),
				"aria-label": "Select row"
			})
		}),
		enableSorting: false,
		enableHiding: false
	}),
	columnHelper.accessor("header", {
		header: "Header",
		cell: ({ row }) => {
			return /* @__PURE__ */ jsx(TableCellViewer, { item: row.original });
		},
		enableHiding: false
	}),
	columnHelper.accessor("type", {
		header: "Section Type",
		cell: ({ row }) => /* @__PURE__ */ jsx("div", {
			className: "w-32",
			children: /* @__PURE__ */ jsx(Badge, {
				variant: "outline",
				className: "px-1.5 text-muted-foreground",
				children: row.original.type
			})
		})
	}),
	columnHelper.accessor("status", {
		header: "Status",
		cell: ({ row }) => /* @__PURE__ */ jsxs(Badge, {
			variant: "outline",
			className: "px-1.5 text-muted-foreground",
			children: [row.original.status === "Done" ? /* @__PURE__ */ jsx(CircleCheckIcon, { className: "fill-green-500 dark:fill-green-400" }) : /* @__PURE__ */ jsx(LoaderIcon, {}), row.original.status]
		})
	}),
	columnHelper.accessor("target", {
		header: () => /* @__PURE__ */ jsx("div", {
			className: "w-full text-right",
			children: "Target"
		}),
		cell: ({ row }) => /* @__PURE__ */ jsxs("form", {
			onSubmit: (e) => {
				e.preventDefault();
				toast.promise(new Promise((resolve) => setTimeout(resolve, 1e3)), {
					loading: `Saving ${row.original.header}`,
					success: "Done",
					error: "Error"
				});
			},
			children: [/* @__PURE__ */ jsx(Label, {
				htmlFor: `${row.original.id}-target`,
				className: "sr-only",
				children: "Target"
			}), /* @__PURE__ */ jsx(Input$1, {
				className: "h-8 w-16 border-transparent bg-transparent text-right shadow-none hover:bg-input/30 focus-visible:border focus-visible:bg-background dark:bg-transparent dark:hover:bg-input/30 dark:focus-visible:bg-input/30",
				defaultValue: row.original.target,
				id: `${row.original.id}-target`
			})]
		})
	}),
	columnHelper.accessor("limit", {
		header: () => /* @__PURE__ */ jsx("div", {
			className: "w-full text-right",
			children: "Limit"
		}),
		cell: ({ row }) => /* @__PURE__ */ jsxs("form", {
			onSubmit: (e) => {
				e.preventDefault();
				toast.promise(new Promise((resolve) => setTimeout(resolve, 1e3)), {
					loading: `Saving ${row.original.header}`,
					success: "Done",
					error: "Error"
				});
			},
			children: [/* @__PURE__ */ jsx(Label, {
				htmlFor: `${row.original.id}-limit`,
				className: "sr-only",
				children: "Limit"
			}), /* @__PURE__ */ jsx(Input$1, {
				className: "h-8 w-16 border-transparent bg-transparent text-right shadow-none hover:bg-input/30 focus-visible:border focus-visible:bg-background dark:bg-transparent dark:hover:bg-input/30 dark:focus-visible:bg-input/30",
				defaultValue: row.original.limit,
				id: `${row.original.id}-limit`
			})]
		})
	}),
	columnHelper.accessor("reviewer", {
		header: "Reviewer",
		cell: ({ row }) => {
			if (row.original.reviewer !== "Assign reviewer") return row.original.reviewer;
			return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(Label, {
				htmlFor: `${row.original.id}-reviewer`,
				className: "sr-only",
				children: "Reviewer"
			}), /* @__PURE__ */ jsxs(Select$1, {
				items: [{
					label: "Eddie Lake",
					value: "Eddie Lake"
				}, {
					label: "Jamik Tashpulatov",
					value: "Jamik Tashpulatov"
				}],
				children: [/* @__PURE__ */ jsx(SelectTrigger, {
					className: "w-38 **:data-[slot=select-value]:block **:data-[slot=select-value]:truncate",
					size: "sm",
					id: `${row.original.id}-reviewer`,
					children: /* @__PURE__ */ jsx(SelectValue, { placeholder: "Assign reviewer" })
				}), /* @__PURE__ */ jsx(SelectContent, {
					align: "end",
					children: /* @__PURE__ */ jsxs(SelectGroup, { children: [/* @__PURE__ */ jsx(SelectItem, {
						value: "Eddie Lake",
						children: "Eddie Lake"
					}), /* @__PURE__ */ jsx(SelectItem, {
						value: "Jamik Tashpulatov",
						children: "Jamik Tashpulatov"
					})] })
				})]
			})] });
		}
	}),
	columnHelper.display({
		id: "actions",
		cell: () => /* @__PURE__ */ jsxs(DropdownMenu, { children: [/* @__PURE__ */ jsxs(DropdownMenuTrigger, {
			render: /* @__PURE__ */ jsx(Button$1, {
				variant: "ghost",
				className: "flex size-8 text-muted-foreground data-open:bg-muted",
				size: "icon"
			}),
			children: [/* @__PURE__ */ jsx(EllipsisVerticalIcon, {}), /* @__PURE__ */ jsx("span", {
				className: "sr-only",
				children: "Open menu"
			})]
		}), /* @__PURE__ */ jsxs(DropdownMenuContent, {
			align: "end",
			className: "w-32",
			children: [
				/* @__PURE__ */ jsx(DropdownMenuItem, { children: "Edit" }),
				/* @__PURE__ */ jsx(DropdownMenuItem, { children: "Make a copy" }),
				/* @__PURE__ */ jsx(DropdownMenuItem, { children: "Favorite" }),
				/* @__PURE__ */ jsx(DropdownMenuSeparator, {}),
				/* @__PURE__ */ jsx(DropdownMenuItem, {
					variant: "destructive",
					children: "Delete"
				})
			]
		})] })
	})
]);
function DraggableRow({ row }) {
	const { transform, transition, setNodeRef, isDragging } = useSortable({ id: row.original.id });
	return /* @__PURE__ */ jsx(TableRow, {
		"data-state": row.getIsSelected() && "selected",
		"data-dragging": isDragging,
		ref: setNodeRef,
		className: "relative z-0 data-[dragging=true]:z-10 data-[dragging=true]:opacity-80",
		style: {
			transform: CSS.Transform.toString(transform),
			transition
		},
		children: row.getVisibleCells().map((cell) => /* @__PURE__ */ jsx(TableCell, { children: /* @__PURE__ */ jsx(FlexRender, { cell }) }, cell.id))
	});
}
function DataTable({ data: initialData }) {
	const [data, setData] = React$1.useState(() => initialData);
	const [rowSelection, setRowSelection] = React$1.useState({});
	const [columnVisibility, setColumnVisibility] = React$1.useState({});
	const [columnFilters, setColumnFilters] = React$1.useState([]);
	const [sorting, setSorting] = React$1.useState([]);
	const [pagination, setPagination] = React$1.useState({
		pageIndex: 0,
		pageSize: 10
	});
	const sortableId = React$1.useId();
	const sensors = useSensors(useSensor(MouseSensor, {}), useSensor(TouchSensor, {}), useSensor(KeyboardSensor, {}));
	const dataIds = React$1.useMemo(() => data?.map(({ id }) => id) || [], [data]);
	const table = useTable({
		features,
		data,
		columns,
		state: {
			sorting,
			columnVisibility,
			rowSelection,
			columnFilters,
			pagination
		},
		getRowId: (row) => row.id.toString(),
		enableRowSelection: true,
		onRowSelectionChange: setRowSelection,
		onSortingChange: setSorting,
		onColumnFiltersChange: setColumnFilters,
		onColumnVisibilityChange: setColumnVisibility,
		onPaginationChange: setPagination
	});
	function handleDragEnd(event) {
		const { active, over } = event;
		if (active && over && active.id !== over.id) setData((data) => {
			const oldIndex = dataIds.indexOf(active.id);
			const newIndex = dataIds.indexOf(over.id);
			return arrayMove(data, oldIndex, newIndex);
		});
	}
	return /* @__PURE__ */ jsxs(Tabs$1, {
		defaultValue: "outline",
		className: "w-full flex-col justify-start gap-6",
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "flex items-center justify-between px-4 lg:px-6",
				children: [
					/* @__PURE__ */ jsx(Label, {
						htmlFor: "view-selector",
						className: "sr-only",
						children: "View"
					}),
					/* @__PURE__ */ jsxs(Select$1, {
						defaultValue: "outline",
						items: [
							{
								label: "Outline",
								value: "outline"
							},
							{
								label: "Past Performance",
								value: "past-performance"
							},
							{
								label: "Key Personnel",
								value: "key-personnel"
							},
							{
								label: "Focus Documents",
								value: "focus-documents"
							}
						],
						children: [/* @__PURE__ */ jsx(SelectTrigger, {
							className: "flex w-fit @4xl/main:hidden",
							size: "sm",
							id: "view-selector",
							children: /* @__PURE__ */ jsx(SelectValue, { placeholder: "Select a view" })
						}), /* @__PURE__ */ jsx(SelectContent, { children: /* @__PURE__ */ jsxs(SelectGroup, { children: [
							/* @__PURE__ */ jsx(SelectItem, {
								value: "outline",
								children: "Outline"
							}),
							/* @__PURE__ */ jsx(SelectItem, {
								value: "past-performance",
								children: "Past Performance"
							}),
							/* @__PURE__ */ jsx(SelectItem, {
								value: "key-personnel",
								children: "Key Personnel"
							}),
							/* @__PURE__ */ jsx(SelectItem, {
								value: "focus-documents",
								children: "Focus Documents"
							})
						] }) })]
					}),
					/* @__PURE__ */ jsxs(TabsList, {
						className: "hidden **:data-[slot=badge]:size-5 **:data-[slot=badge]:rounded-full **:data-[slot=badge]:bg-muted-foreground/30 **:data-[slot=badge]:px-1 @4xl/main:flex",
						children: [
							/* @__PURE__ */ jsx(TabsTrigger, {
								value: "outline",
								children: "Outline"
							}),
							/* @__PURE__ */ jsxs(TabsTrigger, {
								value: "past-performance",
								children: ["Past Performance ", /* @__PURE__ */ jsx(Badge, {
									variant: "secondary",
									children: "3"
								})]
							}),
							/* @__PURE__ */ jsxs(TabsTrigger, {
								value: "key-personnel",
								children: ["Key Personnel ", /* @__PURE__ */ jsx(Badge, {
									variant: "secondary",
									children: "2"
								})]
							}),
							/* @__PURE__ */ jsx(TabsTrigger, {
								value: "focus-documents",
								children: "Focus Documents"
							})
						]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ jsxs(DropdownMenu, { children: [/* @__PURE__ */ jsxs(DropdownMenuTrigger, {
							render: /* @__PURE__ */ jsx(Button$1, {
								variant: "outline",
								size: "sm"
							}),
							children: [
								/* @__PURE__ */ jsx(Columns3Icon, { "data-icon": "inline-start" }),
								"Columns",
								/* @__PURE__ */ jsx(ChevronDownIcon, { "data-icon": "inline-end" })
							]
						}), /* @__PURE__ */ jsx(DropdownMenuContent, {
							align: "end",
							className: "w-32",
							children: table.getAllColumns().filter((column) => typeof column.accessorFn !== "undefined" && column.getCanHide()).map((column) => {
								return /* @__PURE__ */ jsx(DropdownMenuCheckboxItem, {
									className: "capitalize",
									checked: column.getIsVisible(),
									onCheckedChange: (value) => column.toggleVisibility(!!value),
									children: column.id
								}, column.id);
							})
						})] }), /* @__PURE__ */ jsxs(Button$1, {
							variant: "outline",
							size: "sm",
							children: [/* @__PURE__ */ jsx(PlusIcon, {}), /* @__PURE__ */ jsx("span", {
								className: "hidden lg:inline",
								children: "Add Section"
							})]
						})]
					})
				]
			}),
			/* @__PURE__ */ jsxs(TabsContent, {
				value: "outline",
				className: "relative flex flex-col gap-4 overflow-auto px-4 lg:px-6",
				children: [/* @__PURE__ */ jsx("div", {
					className: "overflow-hidden rounded-lg border",
					children: /* @__PURE__ */ jsx(DndContext, {
						collisionDetection: closestCenter,
						modifiers: [restrictToVerticalAxis],
						onDragEnd: handleDragEnd,
						sensors,
						id: sortableId,
						children: /* @__PURE__ */ jsxs(Table, { children: [/* @__PURE__ */ jsx(TableHeader, {
							className: "sticky top-0 bg-muted",
							children: table.getHeaderGroups().map((headerGroup) => /* @__PURE__ */ jsx(TableRow, { children: headerGroup.headers.map((header) => {
								return /* @__PURE__ */ jsx(TableHead, {
									colSpan: header.colSpan,
									children: header.isPlaceholder ? null : /* @__PURE__ */ jsx(FlexRender, { header })
								}, header.id);
							}) }, headerGroup.id))
						}), /* @__PURE__ */ jsx(TableBody, {
							className: "**:data-[slot=table-cell]:first:w-8",
							children: table.getRowModel().rows?.length ? /* @__PURE__ */ jsx(SortableContext, {
								items: dataIds,
								strategy: verticalListSortingStrategy,
								children: table.getRowModel().rows.map((row) => /* @__PURE__ */ jsx(DraggableRow, { row }, row.id))
							}) : /* @__PURE__ */ jsx(TableRow, { children: /* @__PURE__ */ jsx(TableCell, {
								colSpan: columns.length,
								className: "h-24 text-center",
								children: "No results."
							}) })
						})] })
					})
				}), /* @__PURE__ */ jsxs("div", {
					className: "flex items-center justify-between px-4",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "hidden flex-1 text-sm text-muted-foreground lg:flex",
						children: [
							table.getFilteredSelectedRowModel().rows.length,
							" of",
							" ",
							table.getFilteredRowModel().rows.length,
							" row(s) selected."
						]
					}), /* @__PURE__ */ jsxs("div", {
						className: "flex w-full items-center gap-8 lg:w-fit",
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: "hidden items-center gap-2 lg:flex",
								children: [/* @__PURE__ */ jsx(Label, {
									htmlFor: "rows-per-page",
									className: "text-sm font-medium",
									children: "Rows per page"
								}), /* @__PURE__ */ jsxs(Select$1, {
									value: `${table.state.pagination.pageSize}`,
									onValueChange: (value) => {
										table.setPageSize(Number(value));
									},
									items: [
										10,
										20,
										30,
										40,
										50
									].map((pageSize) => ({
										label: `${pageSize}`,
										value: `${pageSize}`
									})),
									children: [/* @__PURE__ */ jsx(SelectTrigger, {
										size: "sm",
										className: "w-20",
										id: "rows-per-page",
										children: /* @__PURE__ */ jsx(SelectValue, { placeholder: table.state.pagination.pageSize })
									}), /* @__PURE__ */ jsx(SelectContent, {
										side: "top",
										children: /* @__PURE__ */ jsx(SelectGroup, { children: [
											10,
											20,
											30,
											40,
											50
										].map((pageSize) => /* @__PURE__ */ jsx(SelectItem, {
											value: `${pageSize}`,
											children: pageSize
										}, pageSize)) })
									})]
								})]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "flex w-fit items-center justify-center text-sm font-medium",
								children: [
									"Page ",
									table.state.pagination.pageIndex + 1,
									" of",
									" ",
									table.getPageCount()
								]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "ml-auto flex items-center gap-2 lg:ml-0",
								children: [
									/* @__PURE__ */ jsxs(Button$1, {
										variant: "outline",
										className: "hidden h-8 w-8 p-0 lg:flex",
										onClick: () => table.setPageIndex(0),
										disabled: !table.getCanPreviousPage(),
										children: [/* @__PURE__ */ jsx("span", {
											className: "sr-only",
											children: "Go to first page"
										}), /* @__PURE__ */ jsx(ChevronsLeftIcon, {})]
									}),
									/* @__PURE__ */ jsxs(Button$1, {
										variant: "outline",
										className: "size-8",
										size: "icon",
										onClick: () => table.previousPage(),
										disabled: !table.getCanPreviousPage(),
										children: [/* @__PURE__ */ jsx("span", {
											className: "sr-only",
											children: "Go to previous page"
										}), /* @__PURE__ */ jsx(ChevronLeftIcon, {})]
									}),
									/* @__PURE__ */ jsxs(Button$1, {
										variant: "outline",
										className: "size-8",
										size: "icon",
										onClick: () => table.nextPage(),
										disabled: !table.getCanNextPage(),
										children: [/* @__PURE__ */ jsx("span", {
											className: "sr-only",
											children: "Go to next page"
										}), /* @__PURE__ */ jsx(ChevronRightIcon, {})]
									}),
									/* @__PURE__ */ jsxs(Button$1, {
										variant: "outline",
										className: "hidden size-8 lg:flex",
										size: "icon",
										onClick: () => table.setPageIndex(table.getPageCount() - 1),
										disabled: !table.getCanNextPage(),
										children: [/* @__PURE__ */ jsx("span", {
											className: "sr-only",
											children: "Go to last page"
										}), /* @__PURE__ */ jsx(ChevronsRightIcon, {})]
									})
								]
							})
						]
					})]
				})]
			}),
			/* @__PURE__ */ jsx(TabsContent, {
				value: "past-performance",
				className: "flex flex-col px-4 lg:px-6",
				children: /* @__PURE__ */ jsx("div", { className: "aspect-video w-full flex-1 rounded-lg border border-dashed" })
			}),
			/* @__PURE__ */ jsx(TabsContent, {
				value: "key-personnel",
				className: "flex flex-col px-4 lg:px-6",
				children: /* @__PURE__ */ jsx("div", { className: "aspect-video w-full flex-1 rounded-lg border border-dashed" })
			}),
			/* @__PURE__ */ jsx(TabsContent, {
				value: "focus-documents",
				className: "flex flex-col px-4 lg:px-6",
				children: /* @__PURE__ */ jsx("div", { className: "aspect-video w-full flex-1 rounded-lg border border-dashed" })
			})
		]
	});
}
var chartData = [
	{
		month: "January",
		desktop: 186,
		mobile: 80
	},
	{
		month: "February",
		desktop: 305,
		mobile: 200
	},
	{
		month: "March",
		desktop: 237,
		mobile: 120
	},
	{
		month: "April",
		desktop: 73,
		mobile: 190
	},
	{
		month: "May",
		desktop: 209,
		mobile: 130
	},
	{
		month: "June",
		desktop: 214,
		mobile: 140
	}
];
var chartConfig = {
	desktop: {
		label: "Desktop",
		color: "var(--primary)"
	},
	mobile: {
		label: "Mobile",
		color: "var(--primary)"
	}
};
function TableCellViewer({ item }) {
	const isMobile = useIsMobile();
	return /* @__PURE__ */ jsxs(Drawer$1, {
		swipeDirection: isMobile ? "down" : "right",
		children: [/* @__PURE__ */ jsx(DrawerTrigger, {
			render: /* @__PURE__ */ jsx(Button$1, {
				variant: "link",
				className: "w-fit px-0 text-left text-foreground"
			}),
			children: item.header
		}), /* @__PURE__ */ jsxs(DrawerContent, { children: [
			/* @__PURE__ */ jsxs(DrawerHeader, {
				className: "gap-1",
				children: [/* @__PURE__ */ jsx(DrawerTitle, { children: item.header }), /* @__PURE__ */ jsx(DrawerDescription, { children: "Showing total visitors for the last 6 months" })]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "flex flex-col gap-4 overflow-y-auto px-4 text-sm",
				children: [!isMobile && /* @__PURE__ */ jsxs(Fragment, { children: [
					/* @__PURE__ */ jsx(ChartContainer, {
						config: chartConfig,
						children: /* @__PURE__ */ jsxs(AreaChart, {
							accessibilityLayer: true,
							data: chartData,
							margin: {
								left: 0,
								right: 10
							},
							children: [
								/* @__PURE__ */ jsx(CartesianGrid, { vertical: false }),
								/* @__PURE__ */ jsx(XAxis, {
									dataKey: "month",
									tickLine: false,
									axisLine: false,
									tickMargin: 8,
									tickFormatter: (value) => value.slice(0, 3),
									hide: true
								}),
								/* @__PURE__ */ jsx(ChartTooltip, {
									cursor: false,
									content: /* @__PURE__ */ jsx(ChartTooltipContent, { indicator: "dot" })
								}),
								/* @__PURE__ */ jsx(Area, {
									dataKey: "mobile",
									type: "natural",
									fill: "var(--color-mobile)",
									fillOpacity: .6,
									stroke: "var(--color-mobile)",
									stackId: "a"
								}),
								/* @__PURE__ */ jsx(Area, {
									dataKey: "desktop",
									type: "natural",
									fill: "var(--color-desktop)",
									fillOpacity: .4,
									stroke: "var(--color-desktop)",
									stackId: "a"
								})
							]
						})
					}),
					/* @__PURE__ */ jsx(Separator$1, {}),
					/* @__PURE__ */ jsxs("div", {
						className: "grid gap-2",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "flex gap-2 leading-none font-medium",
							children: [
								"Trending up by 5.2% this month",
								" ",
								/* @__PURE__ */ jsx(TrendingUpIcon, { className: "size-4" })
							]
						}), /* @__PURE__ */ jsx("div", {
							className: "text-muted-foreground",
							children: "Showing total visitors for the last 6 months. This is just some random text to test the layout. It spans multiple lines and should wrap around."
						})]
					}),
					/* @__PURE__ */ jsx(Separator$1, {})
				] }), /* @__PURE__ */ jsxs("form", {
					className: "flex flex-col gap-4",
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "flex flex-col gap-3",
							children: [/* @__PURE__ */ jsx(Label, {
								htmlFor: "header",
								children: "Header"
							}), /* @__PURE__ */ jsx(Input$1, {
								id: "header",
								defaultValue: item.header
							})]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "grid grid-cols-2 gap-4",
							children: [/* @__PURE__ */ jsxs("div", {
								className: "flex flex-col gap-3",
								children: [/* @__PURE__ */ jsx(Label, {
									htmlFor: "type",
									children: "Type"
								}), /* @__PURE__ */ jsxs(Select$1, {
									defaultValue: item.type,
									items: [
										{
											label: "Table of Contents",
											value: "Table of Contents"
										},
										{
											label: "Executive Summary",
											value: "Executive Summary"
										},
										{
											label: "Technical Approach",
											value: "Technical Approach"
										},
										{
											label: "Design",
											value: "Design"
										},
										{
											label: "Capabilities",
											value: "Capabilities"
										},
										{
											label: "Focus Documents",
											value: "Focus Documents"
										},
										{
											label: "Narrative",
											value: "Narrative"
										},
										{
											label: "Cover Page",
											value: "Cover Page"
										}
									],
									children: [/* @__PURE__ */ jsx(SelectTrigger, {
										id: "type",
										className: "w-full",
										children: /* @__PURE__ */ jsx(SelectValue, { placeholder: "Select a type" })
									}), /* @__PURE__ */ jsx(SelectContent, { children: /* @__PURE__ */ jsxs(SelectGroup, { children: [
										/* @__PURE__ */ jsx(SelectItem, {
											value: "Table of Contents",
											children: "Table of Contents"
										}),
										/* @__PURE__ */ jsx(SelectItem, {
											value: "Executive Summary",
											children: "Executive Summary"
										}),
										/* @__PURE__ */ jsx(SelectItem, {
											value: "Technical Approach",
											children: "Technical Approach"
										}),
										/* @__PURE__ */ jsx(SelectItem, {
											value: "Design",
											children: "Design"
										}),
										/* @__PURE__ */ jsx(SelectItem, {
											value: "Capabilities",
											children: "Capabilities"
										}),
										/* @__PURE__ */ jsx(SelectItem, {
											value: "Focus Documents",
											children: "Focus Documents"
										}),
										/* @__PURE__ */ jsx(SelectItem, {
											value: "Narrative",
											children: "Narrative"
										}),
										/* @__PURE__ */ jsx(SelectItem, {
											value: "Cover Page",
											children: "Cover Page"
										})
									] }) })]
								})]
							}), /* @__PURE__ */ jsxs("div", {
								className: "flex flex-col gap-3",
								children: [/* @__PURE__ */ jsx(Label, {
									htmlFor: "status",
									children: "Status"
								}), /* @__PURE__ */ jsxs(Select$1, {
									defaultValue: item.status,
									items: [
										{
											label: "Done",
											value: "Done"
										},
										{
											label: "In Progress",
											value: "In Progress"
										},
										{
											label: "Not Started",
											value: "Not Started"
										}
									],
									children: [/* @__PURE__ */ jsx(SelectTrigger, {
										id: "status",
										className: "w-full",
										children: /* @__PURE__ */ jsx(SelectValue, { placeholder: "Select a status" })
									}), /* @__PURE__ */ jsx(SelectContent, { children: /* @__PURE__ */ jsxs(SelectGroup, { children: [
										/* @__PURE__ */ jsx(SelectItem, {
											value: "Done",
											children: "Done"
										}),
										/* @__PURE__ */ jsx(SelectItem, {
											value: "In Progress",
											children: "In Progress"
										}),
										/* @__PURE__ */ jsx(SelectItem, {
											value: "Not Started",
											children: "Not Started"
										})
									] }) })]
								})]
							})]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "grid grid-cols-2 gap-4",
							children: [/* @__PURE__ */ jsxs("div", {
								className: "flex flex-col gap-3",
								children: [/* @__PURE__ */ jsx(Label, {
									htmlFor: "target",
									children: "Target"
								}), /* @__PURE__ */ jsx(Input$1, {
									id: "target",
									defaultValue: item.target
								})]
							}), /* @__PURE__ */ jsxs("div", {
								className: "flex flex-col gap-3",
								children: [/* @__PURE__ */ jsx(Label, {
									htmlFor: "limit",
									children: "Limit"
								}), /* @__PURE__ */ jsx(Input$1, {
									id: "limit",
									defaultValue: item.limit
								})]
							})]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "flex flex-col gap-3",
							children: [/* @__PURE__ */ jsx(Label, {
								htmlFor: "reviewer",
								children: "Reviewer"
							}), /* @__PURE__ */ jsxs(Select$1, {
								defaultValue: item.reviewer,
								items: [
									{
										label: "Eddie Lake",
										value: "Eddie Lake"
									},
									{
										label: "Jamik Tashpulatov",
										value: "Jamik Tashpulatov"
									},
									{
										label: "Emily Whalen",
										value: "Emily Whalen"
									}
								],
								children: [/* @__PURE__ */ jsx(SelectTrigger, {
									id: "reviewer",
									className: "w-full",
									children: /* @__PURE__ */ jsx(SelectValue, { placeholder: "Select a reviewer" })
								}), /* @__PURE__ */ jsx(SelectContent, { children: /* @__PURE__ */ jsxs(SelectGroup, { children: [
									/* @__PURE__ */ jsx(SelectItem, {
										value: "Eddie Lake",
										children: "Eddie Lake"
									}),
									/* @__PURE__ */ jsx(SelectItem, {
										value: "Jamik Tashpulatov",
										children: "Jamik Tashpulatov"
									}),
									/* @__PURE__ */ jsx(SelectItem, {
										value: "Emily Whalen",
										children: "Emily Whalen"
									})
								] }) })]
							})]
						})
					]
				})]
			}),
			/* @__PURE__ */ jsxs(DrawerFooter, { children: [/* @__PURE__ */ jsx(Button$1, { children: "Submit" }), /* @__PURE__ */ jsx(DrawerClose, {
				render: /* @__PURE__ */ jsx(Button$1, { variant: "outline" }),
				children: "Done"
			})] })
		] })]
	});
}
//#endregion
//#region app/data.json
var data_default = /*#__PURE__*/ JSON.parse("[{\"id\":1,\"header\":\"Cover page\",\"type\":\"Cover page\",\"status\":\"In Process\",\"target\":\"18\",\"limit\":\"5\",\"reviewer\":\"Eddie Lake\"},{\"id\":2,\"header\":\"Table of contents\",\"type\":\"Table of contents\",\"status\":\"Done\",\"target\":\"29\",\"limit\":\"24\",\"reviewer\":\"Eddie Lake\"},{\"id\":3,\"header\":\"Executive summary\",\"type\":\"Narrative\",\"status\":\"Done\",\"target\":\"10\",\"limit\":\"13\",\"reviewer\":\"Eddie Lake\"},{\"id\":4,\"header\":\"Technical approach\",\"type\":\"Narrative\",\"status\":\"Done\",\"target\":\"27\",\"limit\":\"23\",\"reviewer\":\"Jamik Tashpulatov\"},{\"id\":5,\"header\":\"Design\",\"type\":\"Narrative\",\"status\":\"In Process\",\"target\":\"2\",\"limit\":\"16\",\"reviewer\":\"Jamik Tashpulatov\"},{\"id\":6,\"header\":\"Capabilities\",\"type\":\"Narrative\",\"status\":\"In Process\",\"target\":\"20\",\"limit\":\"8\",\"reviewer\":\"Jamik Tashpulatov\"},{\"id\":7,\"header\":\"Integration with existing systems\",\"type\":\"Narrative\",\"status\":\"In Process\",\"target\":\"19\",\"limit\":\"21\",\"reviewer\":\"Jamik Tashpulatov\"},{\"id\":8,\"header\":\"Innovation and Advantages\",\"type\":\"Narrative\",\"status\":\"Done\",\"target\":\"25\",\"limit\":\"26\",\"reviewer\":\"Assign reviewer\"},{\"id\":9,\"header\":\"Overview of EMR's Innovative Solutions\",\"type\":\"Technical content\",\"status\":\"Done\",\"target\":\"7\",\"limit\":\"23\",\"reviewer\":\"Assign reviewer\"},{\"id\":10,\"header\":\"Advanced Algorithms and Machine Learning\",\"type\":\"Narrative\",\"status\":\"Done\",\"target\":\"30\",\"limit\":\"28\",\"reviewer\":\"Assign reviewer\"},{\"id\":11,\"header\":\"Adaptive Communication Protocols\",\"type\":\"Narrative\",\"status\":\"Done\",\"target\":\"9\",\"limit\":\"31\",\"reviewer\":\"Assign reviewer\"},{\"id\":12,\"header\":\"Advantages Over Current Technologies\",\"type\":\"Narrative\",\"status\":\"Done\",\"target\":\"12\",\"limit\":\"0\",\"reviewer\":\"Assign reviewer\"},{\"id\":13,\"header\":\"Past Performance\",\"type\":\"Narrative\",\"status\":\"Done\",\"target\":\"22\",\"limit\":\"33\",\"reviewer\":\"Assign reviewer\"},{\"id\":14,\"header\":\"Customer Feedback and Satisfaction Levels\",\"type\":\"Narrative\",\"status\":\"Done\",\"target\":\"15\",\"limit\":\"34\",\"reviewer\":\"Assign reviewer\"},{\"id\":15,\"header\":\"Implementation Challenges and Solutions\",\"type\":\"Narrative\",\"status\":\"Done\",\"target\":\"3\",\"limit\":\"35\",\"reviewer\":\"Assign reviewer\"},{\"id\":16,\"header\":\"Security Measures and Data Protection Policies\",\"type\":\"Narrative\",\"status\":\"In Process\",\"target\":\"6\",\"limit\":\"36\",\"reviewer\":\"Assign reviewer\"},{\"id\":17,\"header\":\"Scalability and Future Proofing\",\"type\":\"Narrative\",\"status\":\"Done\",\"target\":\"4\",\"limit\":\"37\",\"reviewer\":\"Assign reviewer\"},{\"id\":18,\"header\":\"Cost-Benefit Analysis\",\"type\":\"Plain language\",\"status\":\"Done\",\"target\":\"14\",\"limit\":\"38\",\"reviewer\":\"Assign reviewer\"},{\"id\":19,\"header\":\"User Training and Onboarding Experience\",\"type\":\"Narrative\",\"status\":\"Done\",\"target\":\"17\",\"limit\":\"39\",\"reviewer\":\"Assign reviewer\"},{\"id\":20,\"header\":\"Future Development Roadmap\",\"type\":\"Narrative\",\"status\":\"Done\",\"target\":\"11\",\"limit\":\"40\",\"reviewer\":\"Assign reviewer\"},{\"id\":21,\"header\":\"System Architecture Overview\",\"type\":\"Technical content\",\"status\":\"In Process\",\"target\":\"24\",\"limit\":\"18\",\"reviewer\":\"Maya Johnson\"},{\"id\":22,\"header\":\"Risk Management Plan\",\"type\":\"Narrative\",\"status\":\"Done\",\"target\":\"15\",\"limit\":\"22\",\"reviewer\":\"Carlos Rodriguez\"},{\"id\":23,\"header\":\"Compliance Documentation\",\"type\":\"Legal\",\"status\":\"In Process\",\"target\":\"31\",\"limit\":\"27\",\"reviewer\":\"Sarah Chen\"},{\"id\":24,\"header\":\"API Documentation\",\"type\":\"Technical content\",\"status\":\"Done\",\"target\":\"8\",\"limit\":\"12\",\"reviewer\":\"Raj Patel\"},{\"id\":25,\"header\":\"User Interface Mockups\",\"type\":\"Visual\",\"status\":\"In Process\",\"target\":\"19\",\"limit\":\"25\",\"reviewer\":\"Leila Ahmadi\"},{\"id\":26,\"header\":\"Database Schema\",\"type\":\"Technical content\",\"status\":\"Done\",\"target\":\"22\",\"limit\":\"20\",\"reviewer\":\"Thomas Wilson\"},{\"id\":27,\"header\":\"Testing Methodology\",\"type\":\"Technical content\",\"status\":\"In Process\",\"target\":\"17\",\"limit\":\"14\",\"reviewer\":\"Assign reviewer\"},{\"id\":28,\"header\":\"Deployment Strategy\",\"type\":\"Narrative\",\"status\":\"Done\",\"target\":\"26\",\"limit\":\"30\",\"reviewer\":\"Eddie Lake\"},{\"id\":29,\"header\":\"Budget Breakdown\",\"type\":\"Financial\",\"status\":\"In Process\",\"target\":\"13\",\"limit\":\"16\",\"reviewer\":\"Jamik Tashpulatov\"},{\"id\":30,\"header\":\"Market Analysis\",\"type\":\"Research\",\"status\":\"Done\",\"target\":\"29\",\"limit\":\"32\",\"reviewer\":\"Sophia Martinez\"},{\"id\":31,\"header\":\"Competitor Comparison\",\"type\":\"Research\",\"status\":\"In Process\",\"target\":\"21\",\"limit\":\"19\",\"reviewer\":\"Assign reviewer\"},{\"id\":32,\"header\":\"Maintenance Plan\",\"type\":\"Technical content\",\"status\":\"Done\",\"target\":\"16\",\"limit\":\"23\",\"reviewer\":\"Alex Thompson\"},{\"id\":33,\"header\":\"User Personas\",\"type\":\"Research\",\"status\":\"In Process\",\"target\":\"27\",\"limit\":\"24\",\"reviewer\":\"Nina Patel\"},{\"id\":34,\"header\":\"Accessibility Compliance\",\"type\":\"Legal\",\"status\":\"Done\",\"target\":\"18\",\"limit\":\"21\",\"reviewer\":\"Assign reviewer\"},{\"id\":35,\"header\":\"Performance Metrics\",\"type\":\"Technical content\",\"status\":\"In Process\",\"target\":\"23\",\"limit\":\"26\",\"reviewer\":\"David Kim\"},{\"id\":36,\"header\":\"Disaster Recovery Plan\",\"type\":\"Technical content\",\"status\":\"Done\",\"target\":\"14\",\"limit\":\"17\",\"reviewer\":\"Jamik Tashpulatov\"},{\"id\":37,\"header\":\"Third-party Integrations\",\"type\":\"Technical content\",\"status\":\"In Process\",\"target\":\"25\",\"limit\":\"28\",\"reviewer\":\"Eddie Lake\"},{\"id\":38,\"header\":\"User Feedback Summary\",\"type\":\"Research\",\"status\":\"Done\",\"target\":\"20\",\"limit\":\"15\",\"reviewer\":\"Assign reviewer\"},{\"id\":39,\"header\":\"Localization Strategy\",\"type\":\"Narrative\",\"status\":\"In Process\",\"target\":\"12\",\"limit\":\"19\",\"reviewer\":\"Maria Garcia\"},{\"id\":40,\"header\":\"Mobile Compatibility\",\"type\":\"Technical content\",\"status\":\"Done\",\"target\":\"28\",\"limit\":\"31\",\"reviewer\":\"James Wilson\"},{\"id\":41,\"header\":\"Data Migration Plan\",\"type\":\"Technical content\",\"status\":\"In Process\",\"target\":\"19\",\"limit\":\"22\",\"reviewer\":\"Assign reviewer\"},{\"id\":42,\"header\":\"Quality Assurance Protocols\",\"type\":\"Technical content\",\"status\":\"Done\",\"target\":\"30\",\"limit\":\"33\",\"reviewer\":\"Priya Singh\"},{\"id\":43,\"header\":\"Stakeholder Analysis\",\"type\":\"Research\",\"status\":\"In Process\",\"target\":\"11\",\"limit\":\"14\",\"reviewer\":\"Eddie Lake\"},{\"id\":44,\"header\":\"Environmental Impact Assessment\",\"type\":\"Research\",\"status\":\"Done\",\"target\":\"24\",\"limit\":\"27\",\"reviewer\":\"Assign reviewer\"},{\"id\":45,\"header\":\"Intellectual Property Rights\",\"type\":\"Legal\",\"status\":\"In Process\",\"target\":\"17\",\"limit\":\"20\",\"reviewer\":\"Sarah Johnson\"},{\"id\":46,\"header\":\"Customer Support Framework\",\"type\":\"Narrative\",\"status\":\"Done\",\"target\":\"22\",\"limit\":\"25\",\"reviewer\":\"Jamik Tashpulatov\"},{\"id\":47,\"header\":\"Version Control Strategy\",\"type\":\"Technical content\",\"status\":\"In Process\",\"target\":\"15\",\"limit\":\"18\",\"reviewer\":\"Assign reviewer\"},{\"id\":48,\"header\":\"Continuous Integration Pipeline\",\"type\":\"Technical content\",\"status\":\"Done\",\"target\":\"26\",\"limit\":\"29\",\"reviewer\":\"Michael Chen\"},{\"id\":49,\"header\":\"Regulatory Compliance\",\"type\":\"Legal\",\"status\":\"In Process\",\"target\":\"13\",\"limit\":\"16\",\"reviewer\":\"Assign reviewer\"},{\"id\":50,\"header\":\"User Authentication System\",\"type\":\"Technical content\",\"status\":\"Done\",\"target\":\"28\",\"limit\":\"31\",\"reviewer\":\"Eddie Lake\"},{\"id\":51,\"header\":\"Data Analytics Framework\",\"type\":\"Technical content\",\"status\":\"In Process\",\"target\":\"21\",\"limit\":\"24\",\"reviewer\":\"Jamik Tashpulatov\"},{\"id\":52,\"header\":\"Cloud Infrastructure\",\"type\":\"Technical content\",\"status\":\"Done\",\"target\":\"16\",\"limit\":\"19\",\"reviewer\":\"Assign reviewer\"},{\"id\":53,\"header\":\"Network Security Measures\",\"type\":\"Technical content\",\"status\":\"In Process\",\"target\":\"29\",\"limit\":\"32\",\"reviewer\":\"Lisa Wong\"},{\"id\":54,\"header\":\"Project Timeline\",\"type\":\"Planning\",\"status\":\"Done\",\"target\":\"14\",\"limit\":\"17\",\"reviewer\":\"Eddie Lake\"},{\"id\":55,\"header\":\"Resource Allocation\",\"type\":\"Planning\",\"status\":\"In Process\",\"target\":\"27\",\"limit\":\"30\",\"reviewer\":\"Assign reviewer\"},{\"id\":56,\"header\":\"Team Structure and Roles\",\"type\":\"Planning\",\"status\":\"Done\",\"target\":\"20\",\"limit\":\"23\",\"reviewer\":\"Jamik Tashpulatov\"},{\"id\":57,\"header\":\"Communication Protocols\",\"type\":\"Planning\",\"status\":\"In Process\",\"target\":\"15\",\"limit\":\"18\",\"reviewer\":\"Assign reviewer\"},{\"id\":58,\"header\":\"Success Metrics\",\"type\":\"Planning\",\"status\":\"Done\",\"target\":\"30\",\"limit\":\"33\",\"reviewer\":\"Eddie Lake\"},{\"id\":59,\"header\":\"Internationalization Support\",\"type\":\"Technical content\",\"status\":\"In Process\",\"target\":\"23\",\"limit\":\"26\",\"reviewer\":\"Jamik Tashpulatov\"},{\"id\":60,\"header\":\"Backup and Recovery Procedures\",\"type\":\"Technical content\",\"status\":\"Done\",\"target\":\"18\",\"limit\":\"21\",\"reviewer\":\"Assign reviewer\"},{\"id\":61,\"header\":\"Monitoring and Alerting System\",\"type\":\"Technical content\",\"status\":\"In Process\",\"target\":\"25\",\"limit\":\"28\",\"reviewer\":\"Daniel Park\"},{\"id\":62,\"header\":\"Code Review Guidelines\",\"type\":\"Technical content\",\"status\":\"Done\",\"target\":\"12\",\"limit\":\"15\",\"reviewer\":\"Eddie Lake\"},{\"id\":63,\"header\":\"Documentation Standards\",\"type\":\"Technical content\",\"status\":\"In Process\",\"target\":\"27\",\"limit\":\"30\",\"reviewer\":\"Jamik Tashpulatov\"},{\"id\":64,\"header\":\"Release Management Process\",\"type\":\"Planning\",\"status\":\"Done\",\"target\":\"22\",\"limit\":\"25\",\"reviewer\":\"Assign reviewer\"},{\"id\":65,\"header\":\"Feature Prioritization Matrix\",\"type\":\"Planning\",\"status\":\"In Process\",\"target\":\"19\",\"limit\":\"22\",\"reviewer\":\"Emma Davis\"},{\"id\":66,\"header\":\"Technical Debt Assessment\",\"type\":\"Technical content\",\"status\":\"Done\",\"target\":\"24\",\"limit\":\"27\",\"reviewer\":\"Eddie Lake\"},{\"id\":67,\"header\":\"Capacity Planning\",\"type\":\"Planning\",\"status\":\"In Process\",\"target\":\"21\",\"limit\":\"24\",\"reviewer\":\"Jamik Tashpulatov\"},{\"id\":68,\"header\":\"Service Level Agreements\",\"type\":\"Legal\",\"status\":\"Done\",\"target\":\"26\",\"limit\":\"29\",\"reviewer\":\"Assign reviewer\"}]");
//#endregion
//#region app/routes/dashboard/dashboard.tsx
var dashboard_exports = /* @__PURE__ */ __exportAll({
	default: () => dashboard_default,
	meta: () => meta
});
function meta({}) {
	return [{ title: "React App" }, {
		name: "description",
		content: "Welcome to React Router!"
	}];
}
var dashboard_default = UNSAFE_withComponentProps(function Dashboard() {
	return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(DataTable, { data: data_default }) });
});
//#endregion
export { cn$1 as C, API as S, useIsMobile as T, DropdownMenuSeparator as _, SelectGroup as a, Input$1 as b, SelectValue as c, Badge as d, DropdownMenu as f, DropdownMenuLabel as g, DropdownMenuItem as h, SelectContent as i, Label as l, DropdownMenuGroup as m, dashboard_exports as n, SelectItem as o, DropdownMenuContent as p, Select$1 as r, SelectTrigger as s, dashboard_default as t, Checkbox$1 as u, DropdownMenuTrigger as v, items as w, Button$1 as x, Separator$1 as y };

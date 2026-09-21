import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@react-router/node";
import { Link, Links, Meta, Outlet, Route, Routes, Scripts, ScrollRestoration, ServerRouter, UNSAFE_withComponentProps, UNSAFE_withErrorBoundaryProps, isRouteErrorResponse, useLocation, useNavigate } from "react-router";
import { isbot } from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import * as React$1 from "react";
import React, { useEffect, useRef, useState } from "react";
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
import { AlertTriangle, AlertTriangleIcon, ArrowRight, Bell, BellIcon, Building2, CalendarArrowUp, ChartPie, CheckCircle2, CheckCircle2Icon, CheckIcon, ChevronDownIcon, ChevronLeftIcon, ChevronRightIcon, ChevronUpIcon, ChevronsLeftIcon, ChevronsRightIcon, CircleCheckIcon, CircleDollarSign, CirclePlus, CircleUserRoundIcon, Columns3Icon, CommandIcon, EllipsisVerticalIcon, FileText, Gauge, GripVerticalIcon, Home, Landmark, ListCheck, Loader2, LoaderIcon, LogOutIcon, Mail, MailIcon, MapPin, MoreHorizontalIcon, PanelLeftIcon, Pencil, PhoneIcon, Plus, PlusIcon, Search, Send, SendToBack, SettingsIcon, ShoppingCart, Star, Trash2, TrendingUpIcon, UserRoundCog, UserRoundIcon, Users, VolumeOffIcon, X, XIcon } from "lucide-react";
import { Tooltip } from "@base-ui/react/tooltip";
import { Avatar } from "@base-ui/react/avatar";
import { Menu } from "@base-ui/react/menu";
import { ClerkProvider, Show, SignIn, SignOutButton, SignUp, SignUpButton, getToken, useAuth, useUser } from "@clerk/react-router";
import { clerkMiddleware, rootAuthLoader } from "@clerk/react-router/server";
import * as z$1 from "zod";
import { z } from "zod";
import { Toast } from "@base-ui/react/toast";
import { AnimatePresence, motion } from "motion/react";
import { OTPInput, OTPInputContext } from "input-otp";
import { Switch } from "@base-ui/react/switch";
import { Controller, useForm } from "react-hook-form";
import { Select } from "@base-ui/react/select";
import { zodResolver } from "@hookform/resolvers/zod";
import { DndContext, KeyboardSensor, MouseSensor, TouchSensor, closestCenter, useSensor, useSensors } from "@dnd-kit/core";
import { restrictToVerticalAxis } from "@dnd-kit/modifiers";
import { SortableContext, arrayMove, useSortable, verticalListSortingStrategy } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { FlexRender, columnFilteringFeature, columnVisibilityFeature, createColumnHelper, createFilteredRowModel, createPaginatedRowModel, createSortedRowModel, rowPaginationFeature, rowSelectionFeature, rowSortingFeature, tableFeatures, useTable } from "@tanstack/react-table";
import * as RechartsPrimitive from "recharts";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";
import { toast } from "sonner";
import { Checkbox } from "@base-ui/react/checkbox";
import { Drawer } from "@base-ui/react/drawer";
import { Tabs } from "@base-ui/react/tabs";
import { frFR } from "@clerk/localizations/fr-FR";
//#region \0rolldown/runtime.js
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
//#endregion
//#region node_modules/@react-router/dev/dist/config/defaults/entry.server.node.tsx
var entry_server_node_exports = /* @__PURE__ */ __exportAll({
	default: () => handleRequest,
	streamTimeout: () => streamTimeout
});
var streamTimeout = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, routerContext, loadContext) {
	if (request.method.toUpperCase() === "HEAD") return new Response(null, {
		status: responseStatusCode,
		headers: responseHeaders
	});
	return new Promise((resolve, reject) => {
		let shellRendered = false;
		let userAgent = request.headers.get("user-agent");
		let readyOption = userAgent && isbot(userAgent) || routerContext.isSpaMode ? "onAllReady" : "onShellReady";
		let timeoutId = setTimeout(() => abort(), 6e3);
		const { pipe, abort } = renderToPipeableStream(/* @__PURE__ */ jsx(ServerRouter, {
			context: routerContext,
			url: request.url
		}), {
			[readyOption]() {
				shellRendered = true;
				const body = new PassThrough({ final(callback) {
					clearTimeout(timeoutId);
					timeoutId = void 0;
					callback();
				} });
				const stream = createReadableStreamFromReadable(body);
				responseHeaders.set("Content-Type", "text/html");
				pipe(body);
				resolve(new Response(stream, {
					headers: responseHeaders,
					status: responseStatusCode
				}));
			},
			onShellError(error) {
				reject(error);
			},
			onError(error) {
				responseStatusCode = 500;
				if (shellRendered) console.error(error);
			}
		});
	});
}
//#endregion
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
//#region app/components/ui/sheet.tsx
function Sheet({ ...props }) {
	return /* @__PURE__ */ jsx(Dialog.Root, {
		"data-slot": "sheet",
		...props
	});
}
function SheetPortal({ ...props }) {
	return /* @__PURE__ */ jsx(Dialog.Portal, {
		"data-slot": "sheet-portal",
		...props
	});
}
function SheetOverlay({ className, ...props }) {
	return /* @__PURE__ */ jsx(Dialog.Backdrop, {
		"data-slot": "sheet-overlay",
		className: cn$1("fixed inset-0 z-50 bg-black/10 transition-opacity duration-150 data-ending-style:opacity-0 data-starting-style:opacity-0 supports-backdrop-filter:backdrop-blur-xs", className),
		...props
	});
}
function SheetContent({ className, children, side = "right", showCloseButton = true, ...props }) {
	return /* @__PURE__ */ jsxs(SheetPortal, { children: [/* @__PURE__ */ jsx(SheetOverlay, {}), /* @__PURE__ */ jsxs(Dialog.Popup, {
		"data-slot": "sheet-content",
		"data-side": side,
		className: cn$1("fixed z-50 flex flex-col gap-4 bg-popover bg-clip-padding text-sm text-popover-foreground shadow-lg transition duration-200 ease-in-out data-ending-style:opacity-0 data-starting-style:opacity-0 data-[side=bottom]:inset-x-0 data-[side=bottom]:bottom-0 data-[side=bottom]:h-auto data-[side=bottom]:border-t data-[side=bottom]:data-ending-style:translate-y-[2.5rem] data-[side=bottom]:data-starting-style:translate-y-[2.5rem] data-[side=left]:inset-y-0 data-[side=left]:left-0 data-[side=left]:h-full data-[side=left]:w-3/4 data-[side=left]:border-r data-[side=left]:data-ending-style:translate-x-[-2.5rem] data-[side=left]:data-starting-style:translate-x-[-2.5rem] data-[side=right]:inset-y-0 data-[side=right]:right-0 data-[side=right]:h-full data-[side=right]:w-3/4 data-[side=right]:border-l data-[side=right]:data-ending-style:translate-x-[2.5rem] data-[side=right]:data-starting-style:translate-x-[2.5rem] data-[side=top]:inset-x-0 data-[side=top]:top-0 data-[side=top]:h-auto data-[side=top]:border-b data-[side=top]:data-ending-style:translate-y-[-2.5rem] data-[side=top]:data-starting-style:translate-y-[-2.5rem] data-[side=left]:sm:max-w-sm data-[side=right]:sm:max-w-sm", className),
		...props,
		children: [children, showCloseButton && /* @__PURE__ */ jsxs(Dialog.Close, {
			"data-slot": "sheet-close",
			render: /* @__PURE__ */ jsx(Button$1, {
				variant: "ghost",
				className: "absolute top-3 right-3",
				size: "icon-sm"
			}),
			children: [/* @__PURE__ */ jsx(XIcon, {}), /* @__PURE__ */ jsx("span", {
				className: "sr-only",
				children: "Close"
			})]
		})]
	})] });
}
function SheetHeader({ className, ...props }) {
	return /* @__PURE__ */ jsx("div", {
		"data-slot": "sheet-header",
		className: cn$1("flex flex-col gap-0.5 p-4", className),
		...props
	});
}
function SheetTitle({ className, ...props }) {
	return /* @__PURE__ */ jsx(Dialog.Title, {
		"data-slot": "sheet-title",
		className: cn$1("font-heading text-base font-medium text-foreground", className),
		...props
	});
}
function SheetDescription({ className, ...props }) {
	return /* @__PURE__ */ jsx(Dialog.Description, {
		"data-slot": "sheet-description",
		className: cn$1("text-sm text-muted-foreground", className),
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
//#region app/components/ui/tooltip.tsx
function Tooltip$1({ ...props }) {
	return /* @__PURE__ */ jsx(Tooltip.Root, {
		"data-slot": "tooltip",
		...props
	});
}
function TooltipTrigger({ ...props }) {
	return /* @__PURE__ */ jsx(Tooltip.Trigger, {
		"data-slot": "tooltip-trigger",
		...props
	});
}
function TooltipContent({ className, side = "top", sideOffset = 4, align = "center", alignOffset = 0, children, ...props }) {
	return /* @__PURE__ */ jsx(Tooltip.Portal, { children: /* @__PURE__ */ jsx(Tooltip.Positioner, {
		align,
		alignOffset,
		side,
		sideOffset,
		className: "isolate z-50",
		children: /* @__PURE__ */ jsxs(Tooltip.Popup, {
			"data-slot": "tooltip-content",
			className: cn$1("z-50 inline-flex w-fit max-w-xs origin-(--transform-origin) items-center gap-1.5 rounded-md bg-foreground px-3 py-1.5 text-xs text-background has-data-[slot=kbd]:pr-1.5 data-[side=bottom]:slide-in-from-top-2 data-[side=inline-end]:slide-in-from-left-2 data-[side=inline-start]:slide-in-from-right-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 **:data-[slot=kbd]:relative **:data-[slot=kbd]:isolate **:data-[slot=kbd]:z-50 **:data-[slot=kbd]:rounded-sm data-[state=delayed-open]:animate-in data-[state=delayed-open]:fade-in-0 data-[state=delayed-open]:zoom-in-95 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95", className),
			...props,
			children: [children, /* @__PURE__ */ jsx(Tooltip.Arrow, { className: "z-50 size-2.5 translate-y-[calc(-50%-2px)] rotate-45 rounded-[2px] bg-foreground fill-foreground data-[side=bottom]:top-1 data-[side=inline-end]:top-1/2! data-[side=inline-end]:-left-1 data-[side=inline-end]:-translate-y-1/2 data-[side=inline-start]:top-1/2! data-[side=inline-start]:-right-1 data-[side=inline-start]:-translate-y-1/2 data-[side=left]:top-1/2! data-[side=left]:-right-1 data-[side=left]:-translate-y-1/2 data-[side=right]:top-1/2! data-[side=right]:-left-1 data-[side=right]:-translate-y-1/2 data-[side=top]:-bottom-2.5" })]
		})
	}) });
}
//#endregion
//#region app/components/ui/sidebar.tsx
var SIDEBAR_COOKIE_NAME = "sidebar_state";
var SIDEBAR_COOKIE_MAX_AGE = 604800;
var SIDEBAR_WIDTH = "16rem";
var SIDEBAR_WIDTH_MOBILE = "18rem";
var SIDEBAR_WIDTH_ICON = "3rem";
var SIDEBAR_KEYBOARD_SHORTCUT = "b";
var SidebarContext = React$1.createContext(null);
function useSidebar() {
	const context = React$1.useContext(SidebarContext);
	if (!context) throw new Error("useSidebar must be used within a SidebarProvider.");
	return context;
}
function SidebarProvider({ defaultOpen = true, open: openProp, onOpenChange: setOpenProp, className, style, children, ...props }) {
	const isMobile = useIsMobile();
	const [openMobile, setOpenMobile] = React$1.useState(false);
	const [_open, _setOpen] = React$1.useState(defaultOpen);
	const open = openProp ?? _open;
	const setOpen = React$1.useCallback((value) => {
		const openState = typeof value === "function" ? value(open) : value;
		if (setOpenProp) setOpenProp(openState);
		else _setOpen(openState);
		document.cookie = `${SIDEBAR_COOKIE_NAME}=${openState}; path=/; max-age=${SIDEBAR_COOKIE_MAX_AGE}`;
	}, [setOpenProp, open]);
	const toggleSidebar = React$1.useCallback(() => {
		return isMobile ? setOpenMobile((open) => !open) : setOpen((open) => !open);
	}, [
		isMobile,
		setOpen,
		setOpenMobile
	]);
	React$1.useEffect(() => {
		const handleKeyDown = (event) => {
			if (event.key === SIDEBAR_KEYBOARD_SHORTCUT && (event.metaKey || event.ctrlKey)) {
				event.preventDefault();
				toggleSidebar();
			}
		};
		window.addEventListener("keydown", handleKeyDown);
		return () => window.removeEventListener("keydown", handleKeyDown);
	}, [toggleSidebar]);
	const state = open ? "expanded" : "collapsed";
	const contextValue = React$1.useMemo(() => ({
		state,
		open,
		setOpen,
		isMobile,
		openMobile,
		setOpenMobile,
		toggleSidebar
	}), [
		state,
		open,
		setOpen,
		isMobile,
		openMobile,
		setOpenMobile,
		toggleSidebar
	]);
	return /* @__PURE__ */ jsx(SidebarContext.Provider, {
		value: contextValue,
		children: /* @__PURE__ */ jsx("div", {
			"data-slot": "sidebar-wrapper",
			style: {
				"--sidebar-width": SIDEBAR_WIDTH,
				"--sidebar-width-icon": SIDEBAR_WIDTH_ICON,
				...style
			},
			className: cn$1("group/sidebar-wrapper flex min-h-svh w-full has-data-[variant=inset]:bg-sidebar", className),
			...props,
			children
		})
	});
}
function Sidebar({ side = "left", variant = "sidebar", collapsible = "offcanvas", className, children, dir, ...props }) {
	const { isMobile, state, openMobile, setOpenMobile } = useSidebar();
	if (collapsible === "none") return /* @__PURE__ */ jsx("div", {
		"data-slot": "sidebar",
		className: cn$1("flex h-full w-(--sidebar-width) flex-col bg-sidebar text-sidebar-foreground", className),
		...props,
		children
	});
	if (isMobile) return /* @__PURE__ */ jsx(Sheet, {
		open: openMobile,
		onOpenChange: setOpenMobile,
		...props,
		children: /* @__PURE__ */ jsxs(SheetContent, {
			dir,
			"data-sidebar": "sidebar",
			"data-slot": "sidebar",
			"data-mobile": "true",
			className: "w-(--sidebar-width) bg-sidebar p-0 text-sidebar-foreground [&>button]:hidden",
			style: { "--sidebar-width": SIDEBAR_WIDTH_MOBILE },
			side,
			children: [/* @__PURE__ */ jsxs(SheetHeader, {
				className: "sr-only",
				children: [/* @__PURE__ */ jsx(SheetTitle, { children: "Sidebar" }), /* @__PURE__ */ jsx(SheetDescription, { children: "Displays the mobile sidebar." })]
			}), /* @__PURE__ */ jsx("div", {
				className: "flex h-full w-full flex-col",
				children
			})]
		})
	});
	return /* @__PURE__ */ jsxs("div", {
		className: "group peer hidden text-sidebar-foreground md:block",
		"data-state": state,
		"data-collapsible": state === "collapsed" ? collapsible : "",
		"data-variant": variant,
		"data-side": side,
		"data-slot": "sidebar",
		children: [/* @__PURE__ */ jsx("div", {
			"data-slot": "sidebar-gap",
			className: cn$1("relative w-(--sidebar-width) bg-transparent transition-[width] duration-200 ease-linear", "group-data-[collapsible=offcanvas]:w-0", "group-data-[side=right]:rotate-180", variant === "floating" || variant === "inset" ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4)))]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon)")
		}), /* @__PURE__ */ jsx("div", {
			"data-slot": "sidebar-container",
			"data-side": side,
			className: cn$1("fixed inset-y-0 z-10 hidden h-svh w-(--sidebar-width) transition-[left,right,width] duration-200 ease-linear data-[side=left]:left-0 data-[side=left]:group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)] data-[side=right]:right-0 data-[side=right]:group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)] md:flex", variant === "floating" || variant === "inset" ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4))+2px)]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[side=left]:border-r group-data-[side=right]:border-l", className),
			...props,
			children: /* @__PURE__ */ jsx("div", {
				"data-sidebar": "sidebar",
				"data-slot": "sidebar-inner",
				className: "flex size-full flex-col bg-sidebar group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:shadow-sm group-data-[variant=floating]:ring-1 group-data-[variant=floating]:ring-sidebar-border",
				children
			})
		})]
	});
}
function SidebarTrigger({ className, onClick, ...props }) {
	const { toggleSidebar } = useSidebar();
	return /* @__PURE__ */ jsxs(Button$1, {
		"data-sidebar": "trigger",
		"data-slot": "sidebar-trigger",
		variant: "ghost",
		size: "icon-sm",
		className: cn$1(className),
		onClick: (event) => {
			onClick?.(event);
			toggleSidebar();
		},
		...props,
		children: [/* @__PURE__ */ jsx(PanelLeftIcon, {}), /* @__PURE__ */ jsx("span", {
			className: "sr-only",
			children: "Toggle Sidebar"
		})]
	});
}
function SidebarInset({ className, ...props }) {
	return /* @__PURE__ */ jsx("main", {
		"data-slot": "sidebar-inset",
		className: cn$1("relative flex w-full flex-1 flex-col bg-background md:peer-data-[variant=inset]:m-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow-sm md:peer-data-[variant=inset]:peer-data-[state=collapsed]:ml-2", className),
		...props
	});
}
function SidebarHeader({ className, ...props }) {
	return /* @__PURE__ */ jsx("div", {
		"data-slot": "sidebar-header",
		"data-sidebar": "header",
		className: cn$1("flex flex-col gap-2 p-2", className),
		...props
	});
}
function SidebarFooter({ className, ...props }) {
	return /* @__PURE__ */ jsx("div", {
		"data-slot": "sidebar-footer",
		"data-sidebar": "footer",
		className: cn$1("flex flex-col gap-2 p-2", className),
		...props
	});
}
function SidebarContent({ className, ...props }) {
	return /* @__PURE__ */ jsx("div", {
		"data-slot": "sidebar-content",
		"data-sidebar": "content",
		className: cn$1("no-scrollbar flex min-h-0 flex-1 flex-col gap-0 overflow-auto group-data-[collapsible=icon]:overflow-hidden", className),
		...props
	});
}
function SidebarGroup({ className, ...props }) {
	return /* @__PURE__ */ jsx("div", {
		"data-slot": "sidebar-group",
		"data-sidebar": "group",
		className: cn$1("relative flex w-full min-w-0 flex-col p-2", className),
		...props
	});
}
function SidebarGroupContent({ className, ...props }) {
	return /* @__PURE__ */ jsx("div", {
		"data-slot": "sidebar-group-content",
		"data-sidebar": "group-content",
		className: cn$1("w-full text-sm", className),
		...props
	});
}
function SidebarMenu({ className, ...props }) {
	return /* @__PURE__ */ jsx("ul", {
		"data-slot": "sidebar-menu",
		"data-sidebar": "menu",
		className: cn$1("flex w-full min-w-0 flex-col gap-0", className),
		...props
	});
}
function SidebarMenuItem({ className, ...props }) {
	return /* @__PURE__ */ jsx("li", {
		"data-slot": "sidebar-menu-item",
		"data-sidebar": "menu-item",
		className: cn$1("group/menu-item relative", className),
		...props
	});
}
var sidebarMenuButtonVariants = cva("peer/menu-button group/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm ring-sidebar-ring outline-hidden transition-[width,height,padding] group-has-data-[sidebar=menu-action]/menu-item:pr-8 group-data-[collapsible=icon]:size-8! group-data-[collapsible=icon]:p-2! hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground data-active:bg-sidebar-accent data-active:font-medium data-active:text-sidebar-accent-foreground [&_svg]:size-4 [&_svg]:shrink-0 [&>span:last-child]:truncate", {
	variants: {
		variant: {
			default: "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
			outline: "bg-background shadow-[0_0_0_1px_var(--sidebar-border)] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground hover:shadow-[0_0_0_1px_var(--sidebar-accent)]"
		},
		size: {
			default: "h-8 text-sm",
			sm: "h-7 text-xs",
			lg: "h-12 text-sm group-data-[collapsible=icon]:p-0!"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
function SidebarMenuButton({ render, isActive = false, variant = "default", size = "default", tooltip, className, ...props }) {
	const { isMobile, state } = useSidebar();
	const comp = useRender({
		defaultTagName: "button",
		props: mergeProps({ className: cn$1(sidebarMenuButtonVariants({
			variant,
			size
		}), className) }, props),
		render: !tooltip ? render : /* @__PURE__ */ jsx(TooltipTrigger, { render }),
		state: {
			slot: "sidebar-menu-button",
			sidebar: "menu-button",
			size,
			active: isActive
		}
	});
	if (!tooltip) return comp;
	if (typeof tooltip === "string") tooltip = { children: tooltip };
	return /* @__PURE__ */ jsxs(Tooltip$1, { children: [comp, /* @__PURE__ */ jsx(TooltipContent, {
		side: "right",
		align: "center",
		hidden: state !== "collapsed" || isMobile,
		...tooltip
	})] });
}
//#endregion
//#region app/components/nav-main.tsx
function NavMain({ items }) {
	const location = useLocation();
	return /* @__PURE__ */ jsx(SidebarGroup, { children: /* @__PURE__ */ jsx(SidebarGroupContent, {
		className: "flex flex-col",
		children: /* @__PURE__ */ jsx(SidebarMenu, { children: items.map((item) => {
			const isActive = location.pathname === item.url;
			return /* @__PURE__ */ jsx(SidebarMenuItem, { children: /* @__PURE__ */ jsxs(SidebarMenuButton, {
				isActive,
				render: /* @__PURE__ */ jsx(Link, { to: item.url }),
				tooltip: item.title,
				className: `transition-colors ${isActive ? "bg-primary! text-white!" : "hover:bg-muted"}`,
				children: [item.icon, /* @__PURE__ */ jsx("span", { children: item.title })]
			}) }, item.title);
		}) })
	}) });
}
//#endregion
//#region app/components/ui/avatar.tsx
function Avatar$1({ className, size = "default", ...props }) {
	return /* @__PURE__ */ jsx(Avatar.Root, {
		"data-slot": "avatar",
		"data-size": size,
		className: cn$1("group/avatar relative flex size-8 shrink-0 rounded-full select-none after:absolute after:inset-0 after:rounded-full after:border after:border-border after:mix-blend-darken data-[size=lg]:size-10 data-[size=sm]:size-6 dark:after:mix-blend-lighten", className),
		...props
	});
}
function AvatarImage({ className, ...props }) {
	return /* @__PURE__ */ jsx(Avatar.Image, {
		"data-slot": "avatar-image",
		className: cn$1("aspect-square size-full rounded-full object-cover", className),
		...props
	});
}
function AvatarFallback({ className, ...props }) {
	return /* @__PURE__ */ jsx(Avatar.Fallback, {
		"data-slot": "avatar-fallback",
		className: cn$1("flex size-full items-center justify-center rounded-full bg-muted text-sm text-muted-foreground group-data-[size=sm]/avatar:text-xs", className),
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
//#region app/components/ui/card.tsx
function Card({ className, size = "default", ...props }) {
	return /* @__PURE__ */ jsx("div", {
		"data-slot": "card",
		"data-size": size,
		className: cn$1("group/card flex flex-col gap-(--card-spacing) overflow-hidden rounded-xl bg-card py-(--card-spacing) text-sm text-card-foreground ring-1 ring-foreground/10 [--card-spacing:--spacing(4)] has-data-[slot=card-footer]:pb-0 has-[>img:first-child]:pt-0 data-[size=sm]:[--card-spacing:--spacing(3)] data-[size=sm]:has-data-[slot=card-footer]:pb-0 *:[img:first-child]:rounded-t-xl *:[img:last-child]:rounded-b-xl", className),
		...props
	});
}
function CardHeader({ className, ...props }) {
	return /* @__PURE__ */ jsx("div", {
		"data-slot": "card-header",
		className: cn$1("group/card-header @container/card-header grid auto-rows-min items-start gap-1 rounded-t-xl px-(--card-spacing) has-data-[slot=card-action]:grid-cols-[1fr_auto] has-data-[slot=card-description]:grid-rows-[auto_auto] [.border-b]:pb-(--card-spacing)", className),
		...props
	});
}
function CardTitle({ className, ...props }) {
	return /* @__PURE__ */ jsx("div", {
		"data-slot": "card-title",
		className: cn$1("font-heading text-base leading-snug font-medium group-data-[size=sm]/card:text-sm", className),
		...props
	});
}
function CardDescription({ className, ...props }) {
	return /* @__PURE__ */ jsx("div", {
		"data-slot": "card-description",
		className: cn$1("text-sm text-muted-foreground", className),
		...props
	});
}
function CardContent({ className, ...props }) {
	return /* @__PURE__ */ jsx("div", {
		"data-slot": "card-content",
		className: cn$1("px-(--card-spacing)", className),
		...props
	});
}
//#endregion
//#region app/components/all-skeletons.tsx
function UserProfileSkeleton() {
	return /* @__PURE__ */ jsx("div", {
		className: "flex items-center justify-center p-10",
		children: /* @__PURE__ */ jsxs("div", {
			className: "grid grid-cols-1 gap-10 md:grid-cols-3",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "hidden md:block",
				children: [/* @__PURE__ */ jsx(Skeleton, { className: "h-6 w-48" }), /* @__PURE__ */ jsx(Skeleton, { className: "mt-2 h-4 w-64" })]
			}), /* @__PURE__ */ jsxs("div", {
				className: "sm:max-w-3xl md:col-span-2",
				children: [/* @__PURE__ */ jsx("div", {
					className: "grid grid-cols-1 mb-6",
					children: /* @__PURE__ */ jsxs("div", {
						className: "flex flex-col items-center justify-center",
						children: [
							/* @__PURE__ */ jsx(Skeleton, { className: "h-24 w-24 rounded-full mb-2" }),
							/* @__PURE__ */ jsx(Skeleton, { className: "h-4 w-28 mb-1" }),
							/* @__PURE__ */ jsx(Skeleton, { className: "h-3 w-36 mb-3" }),
							/* @__PURE__ */ jsx(Skeleton, { className: "h-9 w-28 rounded-md" })
						]
					})
				}), /* @__PURE__ */ jsxs("div", {
					className: "grid grid-cols-1 gap-4 sm:grid-cols-6",
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "col-span-full sm:col-span-3 space-y-2",
							children: [/* @__PURE__ */ jsx(Skeleton, { className: "h-4 w-16" }), /* @__PURE__ */ jsx(Skeleton, { className: "h-10 w-full rounded-md" })]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "col-span-full sm:col-span-3 space-y-2",
							children: [/* @__PURE__ */ jsx(Skeleton, { className: "h-4 w-20" }), /* @__PURE__ */ jsx(Skeleton, { className: "h-10 w-full rounded-md" })]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "col-span-full space-y-2",
							children: [/* @__PURE__ */ jsx(Skeleton, { className: "h-4 w-24" }), /* @__PURE__ */ jsx(Skeleton, { className: "h-10 w-full rounded-md" })]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "col-span-full sm:col-span-3 space-y-2",
							children: [/* @__PURE__ */ jsx(Skeleton, { className: "h-4 w-32" }), /* @__PURE__ */ jsx(Skeleton, { className: "h-10 w-full rounded-md" })]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "col-span-full sm:col-span-3 space-y-2",
							children: [
								/* @__PURE__ */ jsx(Skeleton, { className: "h-4 w-12" }),
								/* @__PURE__ */ jsx(Skeleton, { className: "h-10 w-full rounded-md" }),
								/* @__PURE__ */ jsx(Skeleton, { className: "h-3 w-56" })
							]
						})
					]
				})]
			})]
		})
	});
}
function UserNavSkeleton() {
	return /* @__PURE__ */ jsx(SidebarMenu, { children: /* @__PURE__ */ jsx(SidebarMenuItem, { children: /* @__PURE__ */ jsxs(SidebarMenuButton, {
		size: "lg",
		className: "pointer-events-none",
		children: [
			/* @__PURE__ */ jsx(Skeleton, { className: "size-8 rounded-lg shrink-0 bg-muted-foreground" }),
			/* @__PURE__ */ jsxs("div", {
				className: "grid flex-1 gap-1.5 text-left",
				children: [/* @__PURE__ */ jsx(Skeleton, { className: "h-3.5 w-24 bg-muted-foreground" }), /* @__PURE__ */ jsx(Skeleton, { className: "h-2.5 w-32 bg-muted-foreground" })]
			}),
			/* @__PURE__ */ jsx(Skeleton, { className: "ml-auto size-4 rounded-full shrink-0 bg-muted-foreground" })
		]
	}) }) });
}
function ContactsListSkeleton() {
	return /* @__PURE__ */ jsx(Fragment, { children: Array.from({ length: 3 }).map((_, index) => /* @__PURE__ */ jsxs(Card, {
		className: "relative",
		children: [/* @__PURE__ */ jsxs(CardHeader, {
			className: "flex flex-row items-center justify-between pb-2 space-y-0",
			children: [/* @__PURE__ */ jsx(Skeleton, { className: "h-5 w-1/2" }), /* @__PURE__ */ jsx(Skeleton, { className: "size-8 rounded-md" })]
		}), /* @__PURE__ */ jsxs(CardContent, {
			className: "space-y-3",
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ jsx(Skeleton, { className: "size-4 rounded-full shrink-0" }), /* @__PURE__ */ jsx(Skeleton, { className: "h-4 w-2/3" })]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ jsx(Skeleton, { className: "size-4 rounded-full shrink-0" }), /* @__PURE__ */ jsx(Skeleton, { className: "h-4 w-4/5" })]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "flex items-center justify-between pt-2 border-t border-border",
					children: [/* @__PURE__ */ jsx(Skeleton, { className: "h-5 w-20 rounded-full" }), /* @__PURE__ */ jsx(Skeleton, { className: "h-5 w-16 rounded-full" })]
				})
			]
		})]
	}, index)) });
}
//#endregion
//#region app/components/nav-user.tsx
function NavUser({ user, isLoaded }) {
	const { isMobile } = useSidebar();
	if (!isLoaded) return UserNavSkeleton();
	return /* @__PURE__ */ jsx(SidebarMenu, { children: /* @__PURE__ */ jsx(SidebarMenuItem, { children: /* @__PURE__ */ jsxs(DropdownMenu, { children: [/* @__PURE__ */ jsxs(DropdownMenuTrigger, {
		render: /* @__PURE__ */ jsx(SidebarMenuButton, {
			size: "lg",
			className: "aria-expanded:bg-muted"
		}),
		children: [
			/* @__PURE__ */ jsxs(Avatar$1, {
				className: "size-8 rounded-lg",
				children: [/* @__PURE__ */ jsx(AvatarImage, {
					src: user.avatar,
					alt: user.name ?? void 0
				}), /* @__PURE__ */ jsx(AvatarFallback, {
					className: "rounded-lg",
					children: "CN"
				})]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "grid flex-1 text-left text-sm leading-tight",
				children: [/* @__PURE__ */ jsx("span", {
					className: "truncate font-medium",
					children: user.name
				}), /* @__PURE__ */ jsx("span", {
					className: "truncate text-xs text-foreground/70",
					children: user.email
				})]
			}),
			/* @__PURE__ */ jsx(EllipsisVerticalIcon, { className: "ml-auto size-4" })
		]
	}), /* @__PURE__ */ jsxs(DropdownMenuContent, {
		className: "min-w-56",
		side: isMobile ? "bottom" : "right",
		align: "end",
		sideOffset: 4,
		children: [
			/* @__PURE__ */ jsx(DropdownMenuGroup, { children: /* @__PURE__ */ jsx(DropdownMenuLabel, {
				className: "p-0 font-normal",
				children: /* @__PURE__ */ jsxs("div", {
					className: "flex items-center gap-2 px-1 py-1.5 text-left text-sm",
					children: [/* @__PURE__ */ jsxs(Avatar$1, {
						className: "size-8",
						children: [/* @__PURE__ */ jsx(AvatarImage, {
							src: user.avatar,
							alt: user.name ?? void 0
						}), /* @__PURE__ */ jsx(AvatarFallback, {
							className: "rounded-lg",
							children: "CN"
						})]
					}), /* @__PURE__ */ jsxs("div", {
						className: "grid flex-1 text-left text-sm leading-tight",
						children: [/* @__PURE__ */ jsx("span", {
							className: "truncate font-medium",
							children: user.name
						}), /* @__PURE__ */ jsx("span", {
							className: "truncate text-xs text-muted-foreground",
							children: user.email
						})]
					})]
				})
			}) }),
			/* @__PURE__ */ jsx(DropdownMenuSeparator, {}),
			/* @__PURE__ */ jsxs(DropdownMenuGroup, { children: [
				/* @__PURE__ */ jsxs(DropdownMenuItem, {
					render: /* @__PURE__ */ jsx(Link, { to: "/profile" }),
					children: [/* @__PURE__ */ jsx(CircleUserRoundIcon, {}), "Profile"]
				}),
				/* @__PURE__ */ jsxs(DropdownMenuItem, {
					render: /* @__PURE__ */ jsx(Link, { to: "/notifications" }),
					children: [/* @__PURE__ */ jsx(BellIcon, {}), "Notifications"]
				}),
				/* @__PURE__ */ jsxs(DropdownMenuItem, {
					render: /* @__PURE__ */ jsx(Link, { to: "/parametres" }),
					children: [/* @__PURE__ */ jsx(SettingsIcon, {}), "Paramètres"]
				})
			] }),
			/* @__PURE__ */ jsx(DropdownMenuSeparator, {}),
			/* @__PURE__ */ jsxs(DropdownMenuItem, { children: [/* @__PURE__ */ jsx(LogOutIcon, {}), /* @__PURE__ */ jsx(Show, {
				when: "signed-in",
				children: /* @__PURE__ */ jsx(SignOutButton, { children: "Se déconnecter" })
			})] })
		]
	})] }) }) });
}
//#endregion
//#region app/components/app-sidebar.tsx
var data = {
	user: {
		name: "",
		email: "",
		avatar: ""
	},
	navMain: [
		{
			title: "Acceuil",
			url: "/acceuil",
			icon: /* @__PURE__ */ jsx(Home, {})
		},
		{
			title: "Tableau de bord",
			url: "/dashboard",
			icon: /* @__PURE__ */ jsx(Gauge, {})
		},
		{
			title: "Mes commandes",
			url: "/commandes",
			icon: /* @__PURE__ */ jsx(CalendarArrowUp, {})
		},
		{
			title: "Historique des ventes",
			url: "/ventes",
			icon: /* @__PURE__ */ jsx(FileText, {})
		},
		{
			title: "Créer un business",
			url: "/businesses/creer",
			icon: /* @__PURE__ */ jsx(ChartPie, {})
		},
		{
			title: "Gestion des articles",
			url: "/articles",
			icon: /* @__PURE__ */ jsx(CirclePlus, {})
		},
		{
			title: "Opération d'achats",
			url: "/achats",
			icon: /* @__PURE__ */ jsx(ShoppingCart, {})
		},
		{
			title: "Clients",
			url: "/clients",
			icon: /* @__PURE__ */ jsx(Users, {})
		},
		{
			title: "Fournisseurs",
			url: "/fournisseurs",
			icon: /* @__PURE__ */ jsx(Building2, {})
		},
		{
			title: "Travailleurs",
			url: "/travailleurs",
			icon: /* @__PURE__ */ jsx(UserRoundCog, {})
		},
		{
			title: "Caisses",
			url: "/caisses",
			icon: /* @__PURE__ */ jsx(CircleDollarSign, {})
		},
		{
			title: "Businesses",
			url: "/admin/businesses",
			icon: /* @__PURE__ */ jsx(Landmark, {})
		},
		{
			title: "Offres",
			url: "/admin/offres",
			icon: /* @__PURE__ */ jsx(SendToBack, {})
		},
		{
			title: "Catégories",
			url: "/admin/categories",
			icon: /* @__PURE__ */ jsx(ListCheck, {})
		}
	]
};
function AppSidebar({ ...props }) {
	const { user, isLoaded } = useUser();
	return /* @__PURE__ */ jsxs(Sidebar, {
		collapsible: "icon",
		...props,
		children: [
			/* @__PURE__ */ jsx(SidebarHeader, { children: /* @__PURE__ */ jsx(SidebarMenu, { children: /* @__PURE__ */ jsx(SidebarMenuItem, { children: /* @__PURE__ */ jsxs(SidebarMenuButton, {
				className: "data-[slot=sidebar-menu-button]:p-1.5!",
				render: /* @__PURE__ */ jsx(Link, { to: "/" }),
				children: [/* @__PURE__ */ jsx(CommandIcon, { className: "size-5!" }), /* @__PURE__ */ jsx("span", {
					className: "text-base font-semibold",
					children: "Ratel Market"
				})]
			}) }) }) }),
			/* @__PURE__ */ jsx(SidebarContent, { children: /* @__PURE__ */ jsx(NavMain, { items: data.navMain }) }),
			/* @__PURE__ */ jsx(SidebarFooter, { children: /* @__PURE__ */ jsx(NavUser, {
				user: user ? {
					name: user.fullName,
					email: user.emailAddresses[0]?.emailAddress,
					avatar: user.imageUrl
				} : {
					name: "",
					email: "",
					avatar: ""
				},
				isLoaded: true
			}) })
		]
	});
}
//#endregion
//#region app/components/site-header.tsx
function SiteHeader({ title }) {
	return /* @__PURE__ */ jsx("header", {
		className: "sticky top-0 z-5 flex h-(--header-height) shrink-0 items-center gap-2 md:border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height) rounded-t-2xl",
		children: /* @__PURE__ */ jsxs("div", {
			className: "flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6",
			children: [
				/* @__PURE__ */ jsx(SidebarTrigger, { className: "-ml-1" }),
				/* @__PURE__ */ jsx(Separator$1, {
					orientation: "vertical",
					className: "mx-2 h-4 data-vertical:self-auto"
				}),
				/* @__PURE__ */ jsx("h1", {
					className: "text-base font-medium",
					children: title
				})
			]
		})
	});
}
//#endregion
//#region app/app.css?url
var app_default = "/assets/app-FYIdOEZ3.css";
//#endregion
//#region app/routes/acceuil/acceuil.tsx
var acceuil_exports = /* @__PURE__ */ __exportAll({
	default: () => acceuil_default,
	meta: () => meta$20
});
function meta$20({}) {
	return [{ title: "My Admin App" }, {
		name: "description",
		content: "Welcome to React Router!"
	}];
}
var acceuil_default = UNSAFE_withComponentProps(function Acceuil() {
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("p", { children: "the same done with design" }), /* @__PURE__ */ jsxs("ul", { children: [
		/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
			to: "https://react-hook-form.com/",
			children: "React Form"
		}) }),
		/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
			to: "https://clerk.com/docs",
			children: "Clerck"
		}) }),
		/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
			to: "https://ui.shadcn.com/docs/components",
			children: "Shadcn doc"
		}) }),
		/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
			to: "https://blocks.so/",
			children: "Blocks"
		}) }),
		/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
			to: "https://play.blocks.so/",
			children: "Play Blocks"
		}) }),
		/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
			to: "https://shadcnstudio.com/blocks/free",
			children: "shadcn studio"
		}) }),
		/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
			to: "https://shadcnspace.com/components",
			children: "shadcn space"
		}) })
	] })] });
});
//#endregion
//#region app/components/ui/alert.tsx
var alertVariants = cva("group/alert relative grid w-full gap-0.5 rounded-lg border px-2.5 py-2 text-left text-sm has-data-[slot=alert-action]:relative has-data-[slot=alert-action]:pr-18 has-[>svg]:grid-cols-[auto_1fr] has-[>svg]:gap-x-2 *:[svg]:row-span-2 *:[svg]:translate-y-0.5 *:[svg]:text-current *:[svg:not([class*='size-'])]:size-4", {
	variants: { variant: {
		default: "bg-card text-card-foreground",
		destructive: "bg-card text-destructive *:data-[slot=alert-description]:text-destructive/90 *:[svg]:text-current"
	} },
	defaultVariants: { variant: "default" }
});
function Alert({ className, variant, ...props }) {
	return /* @__PURE__ */ jsx("div", {
		"data-slot": "alert",
		role: "alert",
		className: cn$1(alertVariants({ variant }), className),
		...props
	});
}
function AlertTitle({ className, ...props }) {
	return /* @__PURE__ */ jsx("div", {
		"data-slot": "alert-title",
		className: cn$1("font-medium group-has-[>svg]/alert:col-start-2 [&_a]:underline [&_a]:underline-offset-3 [&_a]:hover:text-foreground", className),
		...props
	});
}
function AlertDescription({ className, ...props }) {
	return /* @__PURE__ */ jsx("div", {
		"data-slot": "alert-description",
		className: cn$1("text-sm text-balance text-muted-foreground md:text-pretty [&_a]:underline [&_a]:underline-offset-3 [&_a]:hover:text-foreground [&_p:not(:last-child)]:mb-4", className),
		...props
	});
}
//#endregion
//#region app/routes/home.tsx
var home_exports = /* @__PURE__ */ __exportAll({ default: () => home_default });
var home_default = UNSAFE_withComponentProps(function Home() {
	const my_route = async () => {
		const data = await (await fetch(`${API}/protected`, {
			method: "GET",
			credentials: "include",
			headers: { "Content-Type": "application/json" }
		})).json();
		console.log(data);
	};
	return /* @__PURE__ */ jsxs("div", { children: [
		/* @__PURE__ */ jsx("header", { className: "flex items-center justify-center py-8 px-4" }),
		/* @__PURE__ */ jsx("h1", { children: "Welcome back" }),
		/* @__PURE__ */ jsx("br", {}),
		/* @__PURE__ */ jsx(Link, {
			to: "/acceuil",
			children: "Acceuil"
		}),
		/* @__PURE__ */ jsx("br", {}),
		/* @__PURE__ */ jsx(SignUpButton, { children: "Desconnected" }),
		/* @__PURE__ */ jsx("br", {}),
		/* @__PURE__ */ jsx(Button$1, {
			variant: "outline",
			className: "border-destructive text-destructive hover:bg-destructive/10",
			children: "Destructive Outline"
		}),
		/* @__PURE__ */ jsx("button", {
			onClick: my_route,
			children: "my route"
		})
	] });
});
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
//#region app/components/ui/field.tsx
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
//#endregion
//#region app/components/ui/button-group.tsx
var buttonGroupVariants = cva("flex w-fit items-stretch *:focus-visible:relative *:focus-visible:z-10 has-[>[data-slot=button-group]]:gap-2 has-[select[aria-hidden=true]:last-child]:[&>[data-slot=select-trigger]:last-of-type]:rounded-r-lg [&>[data-slot=select-trigger]:not([class*='w-'])]:w-fit [&>input]:flex-1", {
	variants: { orientation: {
		horizontal: "*:data-slot:rounded-r-none [&>[data-slot]:not(:has(~[data-slot]))]:rounded-r-lg! [&>[data-slot]~[data-slot]]:rounded-l-none [&>[data-slot]~[data-slot]]:border-l-0",
		vertical: "flex-col *:data-slot:rounded-b-none [&>[data-slot]:not(:has(~[data-slot]))]:rounded-b-lg! [&>[data-slot]~[data-slot]]:rounded-t-none [&>[data-slot]~[data-slot]]:border-t-0"
	} },
	defaultVariants: { orientation: "horizontal" }
});
function ButtonGroup({ className, orientation, ...props }) {
	return /* @__PURE__ */ jsx("div", {
		role: "group",
		"data-slot": "button-group",
		"data-orientation": orientation,
		className: cn$1(buttonGroupVariants({ orientation }), className),
		...props
	});
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
z$1.object({ nom: z$1.string().min(4, "Pas moins de 4 caractères").max(50, "Pas plus de 50 caractères").toLowerCase().trim() });
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
z$1.object({
	designation: z$1.string().min(4, "Pas moins de 4 caractères").max(50, "Pas plus de 50 caractères").toLowerCase().trim(),
	pu: z$1.number().finite(),
	description: z$1.string().optional(),
	categorieId: z$1.string(),
	deviseId: z$1.string()
});
z$1.object({
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
z$1.object({
	firstName: z$1.string().min(4, "Pas moin de 4 caractères").max(50, "Pas plus de 50 caractères").toLowerCase().trim().optional(),
	lastName: z$1.string().min(4, "Pas moin de 4 caractères").max(50, "Pas plus de 50 caractères").toLowerCase().trim().optional(),
	fullName: z$1.string().toLowerCase().trim().optional(),
	email: z$1.email({ message: "l'adresse mail est invalide" }).trim().toLowerCase().optional(),
	sex: z$1.enum(UserSex, "le sexe est incorrecte").optional(),
	birthday: z$1.date("le format n'est pas pris en charge").optional(),
	profile: z$1.url({ message: "l'url est invalide" }).trim().toLowerCase().optional()
});
z$1.object({
	nom: z$1.string().min(4, "Pas moin de 4 caractères").max(50, "Pas plus de 50 caractères").toLowerCase().trim().optional(),
	logo: z$1.url("le lien est incorrecte").optional(),
	email: z$1.email({ message: "l'adresse mail est invalide" }).optional(),
	website: z$1.url({ message: "le lien est incorrecte" }).optional(),
	description: z$1.string().min(4, "Pas moin de 4 caractères").max(100, "Pas plus de 100 caractères").toLowerCase().trim().optional()
});
z$1.object({
	nom: z$1.string().min(4, "Pas moin de 4 caractères").max(50, "Pas plus de 50 caractères").toLowerCase().trim(),
	solde: z$1.number("le contenu n'est pas un nombre"),
	deviseId: z$1.string("la devise est incorrecte")
});
z$1.object({
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
//#region app/components/ui/toast.tsx
var toast$1 = Toast.createToastManager();
Toast.createToastManager;
Toast.useToastManager;
//#endregion
//#region app/components/contacts/input-opt.tsx
var SPRING_TRANSITION = {
	type: "spring",
	stiffness: 450,
	damping: 28
};
var primaryColorMix = (opacityPercent) => `color-mix(in srgb, var(--primary) ${opacityPercent}%, transparent)`;
var CustomOTPSlot = ({ index }) => {
	const { char, hasFakeCaret, isActive } = React.useContext(OTPInputContext)?.slots[index] ?? {};
	const [pulseKey, setPulseKey] = useState(0);
	const prevCharRef = useRef(char);
	useEffect(() => {
		if (char && char !== prevCharRef.current) setPulseKey((prev) => prev + 1);
		prevCharRef.current = char;
	}, [char]);
	return /* @__PURE__ */ jsxs("div", {
		className: cn$1("relative flex h-12 w-10 items-center justify-center rounded-lg border border-input text-foreground transition-all duration-200", "bg-linear-to-br from-muted/30 to-background dark:from-muted/10 dark:to-card/50", "shadow-xs select-none", isActive && "border-primary/50"),
		children: [
			/* @__PURE__ */ jsx(AnimatePresence, {
				mode: "popLayout",
				children: char ? /* @__PURE__ */ jsx(motion.span, {
					initial: {
						opacity: 0,
						scale: .5,
						y: 4
					},
					animate: {
						opacity: 1,
						scale: 1,
						y: 0
					},
					exit: {
						opacity: 0,
						scale: .7,
						y: -4
					},
					transition: SPRING_TRANSITION,
					className: "absolute font-mono text-lg font-bold text-foreground",
					children: char
				}, `char-${char}`) : null
			}),
			/* @__PURE__ */ jsx(AnimatePresence, { children: pulseKey > 0 && /* @__PURE__ */ jsx(motion.div, {
				className: "absolute inset-0 rounded-lg border border-primary pointer-events-none",
				initial: {
					opacity: .8,
					scale: .9,
					filter: "blur(0px)"
				},
				animate: {
					opacity: 0,
					scale: 1.4,
					filter: "blur(2px)"
				},
				exit: { opacity: 0 },
				transition: {
					duration: .4,
					ease: "easeOut"
				},
				style: { boxShadow: `inset 0 0 12px ${primaryColorMix(50)}` }
			}, pulseKey) }),
			isActive && /* @__PURE__ */ jsx(motion.div, {
				layoutId: "active-glow",
				className: "absolute inset-0 rounded-lg border border-primary pointer-events-none z-10",
				initial: { opacity: 0 },
				animate: { opacity: 1 },
				exit: { opacity: 0 },
				transition: SPRING_TRANSITION,
				style: { boxShadow: `inset 0 0 12px ${primaryColorMix(40)}, 0 0 8px ${primaryColorMix(20)}` },
				children: /* @__PURE__ */ jsx("svg", {
					viewBox: "0 0 20 20",
					className: "absolute inset-0 h-full w-full",
					strokeWidth: "0.4",
					children: /* @__PURE__ */ jsx(motion.path, {
						d: "M 3 18 h 14",
						className: "stroke-primary",
						initial: { pathLength: 0 },
						animate: { pathLength: 1 },
						transition: {
							duration: .2,
							ease: "easeOut"
						}
					})
				})
			}),
			hasFakeCaret && /* @__PURE__ */ jsx("div", {
				className: "pointer-events-none absolute inset-0 flex items-center justify-center",
				children: /* @__PURE__ */ jsx(motion.div, {
					className: "bg-primary h-5 w-[2px]",
					animate: { opacity: [
						1,
						0,
						1
					] },
					transition: {
						repeat: Infinity,
						duration: 1,
						ease: "easeInOut"
					}
				})
			})
		]
	});
};
var AnimatedOTP = ({ value, onChange, maxLength = 6 }) => {
	return /* @__PURE__ */ jsx(OTPInput, {
		maxLength,
		value,
		onChange,
		containerClassName: "group flex items-center justify-center gap-3",
		children: /* @__PURE__ */ jsx("div", {
			className: "flex items-center gap-3",
			children: Array.from({ length: maxLength }).map((_, idx) => /* @__PURE__ */ jsx(CustomOTPSlot, { index: idx }, idx))
		})
	});
};
function InputOTPDemo({ value, getToken }) {
	return /* @__PURE__ */ jsxs("div", {
		className: cn$1("relative flex flex-col items-center justify-center gap-4", "bg-card text-card-foreground p-5"),
		children: [/* @__PURE__ */ jsx(AnimatedOTP, {
			value,
			onChange: (v) => getToken(v)
		}), /* @__PURE__ */ jsx("div", {
			className: "text-xs text-muted-foreground select-none",
			children: value ? /* @__PURE__ */ jsxs(Fragment, { children: ["Entered Code: ", /* @__PURE__ */ jsx("span", {
				className: "font-mono font-semibold text-foreground tracking-wider",
				children: value
			})] }) : "Type to see the entered code"
		})]
	});
}
//#endregion
//#region app/components/contacts/success-message.tsx
function SuccessMessage({ type }) {
	return /* @__PURE__ */ jsxs("div", {
		className: "flex flex-col items-center text-center gap-4 py-2",
		children: [
			/* @__PURE__ */ jsx("div", {
				className: "flex items-center justify-center size-16 rounded-full bg-teal-400/10 text-teal-400",
				children: /* @__PURE__ */ jsx(CheckCircle2Icon, {
					size: 32,
					strokeWidth: 1.5
				})
			}),
			/* @__PURE__ */ jsxs(DialogHeader, {
				className: "items-center",
				children: [/* @__PURE__ */ jsx(DialogTitle, {
					className: "text-lg",
					children: "Message de succès !"
				}), /* @__PURE__ */ jsxs(DialogDescription, { children: [
					"Votre ",
					type == "EMAIL" ? "adresse mail" : "numéro de téléphone",
					" a été verifié avec succès !"
				] })]
			}),
			/* @__PURE__ */ jsx(DialogClose, {
				render: /* @__PURE__ */ jsx(Button$1, { className: "w-full cursor-pointer hover:bg-primary/80" }),
				children: "Fermer"
			})
		]
	});
}
//#endregion
//#region app/lib/apis.ts
var creer_user = async () => {
	const token = await getToken();
	const response = await fetch(`${API}/auth/createUser`, {
		method: "POST",
		headers: {
			"Authorization": `${token}`,
			"Content-Type": "application/json"
		}
	});
	const result = await response.json();
	if (!response.ok) throw new Error(result.message || "Create data failed");
	console.log(result);
	return result;
};
var is_welcome = async () => {
	const token = await getToken();
	const response = await fetch(`${API}/auth/is-welcome`, {
		method: "PUT",
		headers: {
			"Authorization": `${token}`,
			"Content-Type": "application/json"
		}
	});
	const result = await response.json();
	if (!response.ok) throw new Error(result.message || "Create data failed");
	console.log(result);
	return result;
};
var supprimer_user = async () => {
	const token = await getToken();
	try {
		await fetch(`${API}/auth/deleteUser`, {
			method: "POST",
			headers: {
				"Authorization": `${token}`,
				"Content-Type": "application/json"
			}
		});
	} catch (error) {
		console.error(error);
	}
};
var creer_contact = async (form) => {
	const token = await getToken();
	const response = await fetch(`${API}/contacts`, {
		method: "POST",
		headers: {
			"Authorization": `${token}`,
			"Content-Type": "application/json"
		},
		body: JSON.stringify(form)
	});
	const result = await response.json();
	if (!response.ok) throw new Error(result.message || "Form validation failed");
	console.log(result);
	return result;
};
var items_contact = async () => {
	const token = await getToken();
	const response = await fetch(`${API}/contacts`, {
		method: "GET",
		headers: {
			"Authorization": `${token}`,
			"Content-Type": "application/json"
		}
	});
	const result = await response.json();
	if (!response.ok) throw new Error(result.message || "Fetching data failed");
	return result;
};
var supprimer_contact = async (id) => {
	const token = await getToken();
	const response = await fetch(`${API}/contacts/${id}`, {
		method: "DELETE",
		headers: {
			"Authorization": `${token}`,
			"Content-Type": "application/json"
		}
	});
	const result = await response.json();
	if (!response.ok) throw new Error(result.message || "Remove data failed");
	console.log(result);
	return result;
};
var verifier_contact = async (contactId, token) => {
	const client_token = await getToken();
	const response = await fetch(`${API}/contacts/${contactId}/verifier`, {
		method: "PUT",
		headers: {
			"Authorization": `${client_token}`,
			"Content-Type": "application/json"
		},
		body: JSON.stringify({ token })
	});
	const result = await response.json();
	if (!response.ok) throw new Error(result.message || "Verfication data failed");
	console.log(result);
	return result;
};
var items_adresse = async (businessId, clientId, fournisseurId) => {
	const token = await getToken();
	const response = await fetch(`${API}/adresses`, {
		method: "GET",
		headers: {
			"Authorization": `${token}`,
			"Content-Type": "application/json"
		}
	});
	const result = await response.json();
	if (!response.ok) throw new Error(result.message || "get data failed");
	console.log(result);
	return result;
};
var creer_adresse = async (form) => {
	const token = await getToken();
	const response = await fetch(`${API}/adresses`, {
		method: "POST",
		headers: {
			"Authorization": `${token}`,
			"Content-Type": "application/json"
		},
		body: JSON.stringify(form)
	});
	const result = await response.json();
	if (!response.ok) throw new Error(result.message || "Create data failed");
	console.log(result);
	return result;
};
var supprimer_adresse = async (id) => {
	const token = await getToken();
	const response = await fetch(`${API}/adresses/${id}`, {
		method: "DELETE",
		headers: {
			"Authorization": `${token}`,
			"Content-Type": "application/json"
		}
	});
	const result = await response.json();
	if (!response.ok) throw new Error(result.message || "Delete data failed");
	console.log(result);
	return result;
};
var modifier_adresse = async (id, form) => {
	const token = await getToken();
	const response = await fetch(`${API}/adresses/${id}`, {
		method: "PUT",
		headers: {
			"Authorization": `${token}`,
			"Content-Type": "application/json"
		},
		body: JSON.stringify(form)
	});
	const result = await response.json();
	if (!response.ok) throw new Error(result.message || "update data failed");
	console.log(result);
	return result;
};
//#endregion
//#region app/components/contacts/verification.tsx
function VerificationForm({ isLoaded, setIsLoaded, contactId, setHide, closeDialog }) {
	const [token, setToken] = useState("");
	const handleSublit = async (e) => {
		e.preventDefault();
		setIsLoaded(true);
		await verifier_contact(contactId, token).then((res) => {
			if (res.success) {
				setTimeout(() => {
					setHide("success");
					setIsLoaded(false);
				}, 500);
				setTimeout(() => {
					toast$1.add({
						type: "success",
						description: `${res.message}`
					});
				}, 1e3);
			}
		});
	};
	return /* @__PURE__ */ jsxs("form", {
		onSubmit: handleSublit,
		children: [/* @__PURE__ */ jsx(InputOTPDemo, {
			value: token,
			getToken: (v) => setToken(v)
		}), /* @__PURE__ */ jsxs("div", {
			className: "pt-2",
			children: [/* @__PURE__ */ jsxs(Button$1, {
				type: "submit",
				className: "w-full",
				disabled: isLoaded,
				children: ["Enregistrer ", isLoaded && /* @__PURE__ */ jsx(Loader2, { className: "mr-2 h-4 w-4 animate-spin" })]
			}), /* @__PURE__ */ jsx("div", {
				className: "flex justify-center",
				children: /* @__PURE__ */ jsx(DialogClose, { render: /* @__PURE__ */ jsx(Button$1, {
					type: "button",
					className: "text-foreground",
					variant: "link",
					onClick: closeDialog,
					children: "Close"
				}) })
			})]
		})]
	});
}
//#endregion
//#region app/components/contacts/form-contact.tsx
var FormContact = ({ isLoaded, setIsLoaded, form, setForm, setContactId, new_contact, setHide, closeDialog }) => {
	const [errors, setErrors] = useState({});
	const [response, setResponse] = useState({
		success: null,
		message: "",
		data: null
	});
	const handleSubmit = async (e) => {
		e.preventDefault();
		setResponse({
			success: false,
			message: "",
			data: null
		});
		setIsLoaded(false);
		const result = ContactSchema.safeParse(form);
		if (!result.success) {
			const fieldErrors = {};
			result.error.issues.forEach((issue) => {
				const fieldName = issue.path[0];
				fieldErrors[fieldName] = issue.message;
			});
			setErrors(fieldErrors);
		} else {
			setIsLoaded(true);
			await creer_contact(form).then((res) => {
				setErrors({});
				setIsLoaded(true);
				if (!res.success) {
					setResponse({
						...response,
						message: res.message
					});
					setIsLoaded(false);
				}
				if (res.success) {
					setForm({
						...form,
						phone: "",
						email: ""
					});
					setResponse({
						success: res.success,
						message: res.message,
						data: res.data
					});
					setContactId(res.data.id);
					new_contact(res.data);
					setErrors({});
					setHide("form-token");
					setIsLoaded(false);
				}
			}).catch((err) => {
				console.log(err);
			});
		}
	};
	return /* @__PURE__ */ jsxs("form", {
		onSubmit: handleSubmit,
		children: [
			form.type == "PHONE" && /* @__PURE__ */ jsxs("div", {
				className: "space-y-2",
				children: [
					/* @__PURE__ */ jsx(Label, {
						htmlFor: "valeur",
						children: "Numéro de téléphone"
					}),
					/* @__PURE__ */ jsx(Input$1, {
						id: "valeur",
						placeholder: "Ex. +(243) 98 09 667",
						value: form.phone ?? "",
						onChange: (e) => setForm({
							...form,
							phone: e.target.value
						})
					}),
					errors.phone && /* @__PURE__ */ jsx("span", {
						className: "text-red-500 text-1xl ml-2",
						children: errors.phone
					}),
					!errors.phone && /* @__PURE__ */ jsx("span", {
						className: `text-${response.success ? "primary" : "red"}-500 text-1xl ml-2`,
						children: response.message
					})
				]
			}),
			form.type == "EMAIL" && /* @__PURE__ */ jsxs("div", {
				className: "space-y-2",
				children: [
					/* @__PURE__ */ jsx(Label, {
						htmlFor: "valeur",
						children: "Adresse mail"
					}),
					/* @__PURE__ */ jsx(Input$1, {
						id: "valeur",
						placeholder: "ex: john@example.com",
						value: form.email ?? "",
						onChange: (e) => setForm({
							...form,
							email: e.target.value
						})
					}),
					errors.email && /* @__PURE__ */ jsx("span", {
						className: "text-red-500 text-1xl ml-2",
						children: errors.email
					}),
					!errors.email && /* @__PURE__ */ jsx("span", {
						className: `text-${response.success ? "primary" : "red"}-500 text-1xl ml-2`,
						children: response.message
					})
				]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "pt-2",
				children: [/* @__PURE__ */ jsxs(Button$1, {
					type: "submit",
					className: "w-full",
					disabled: isLoaded,
					children: ["Enregistrer ", isLoaded && /* @__PURE__ */ jsx(Loader2, { className: "mr-2 h-4 w-4 animate-spin" })]
				}), /* @__PURE__ */ jsx("div", {
					className: "flex justify-center",
					children: /* @__PURE__ */ jsx(DialogClose, { render: /* @__PURE__ */ jsx(Button$1, {
						type: "button",
						className: "text-foreground",
						variant: "link",
						onClick: closeDialog,
						children: "Close"
					}) })
				})]
			})
		]
	});
};
//#endregion
//#region app/components/contacts/form.tsx
function Form$1({ type, new_contact }) {
	const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
	const [form, setForm] = useState({
		type,
		phone: "",
		email: ""
	});
	const [isLoaded, setIsLoaded] = useState(false);
	const [hide, setHide] = useState("form-contact");
	const [contactId, setContactId] = useState("");
	const closeDialog = () => {
		setForm({
			...form,
			phone: "",
			email: ""
		});
	};
	return /* @__PURE__ */ jsxs(DialogContent, {
		className: "sm:max-w-[425px]",
		showCloseButton: false,
		children: [
			/* @__PURE__ */ jsxs(DialogHeader, {
				className: `${hide !== "success" ? "" : "hidden"}`,
				children: [/* @__PURE__ */ jsx(DialogTitle, { children: "Create Contact" }), /* @__PURE__ */ jsx(DialogDescription, { children: "Anyone who has this link will be able to view this." })]
			}),
			/* @__PURE__ */ jsx("div", {
				className: `space-y-4 py-2 ${hide == "form-contact" ? "" : "hidden"}`,
				children: /* @__PURE__ */ jsx(FormContact, {
					isLoaded,
					setIsLoaded: (v) => setIsLoaded(v),
					form,
					setForm: (v) => setForm(v),
					setContactId: (v) => setContactId(v),
					new_contact,
					setHide: (v) => setHide(v),
					closeDialog
				})
			}),
			/* @__PURE__ */ jsx("div", {
				className: `space-y-4 py-2 ${hide == "form-token" ? "" : "hidden"}`,
				children: /* @__PURE__ */ jsx(VerificationForm, {
					isLoaded,
					setIsLoaded: (v) => setIsLoaded(v),
					contactId,
					setHide: (v) => setHide(v),
					closeDialog
				})
			}),
			/* @__PURE__ */ jsx("div", {
				className: `${hide == "success" ? "" : "hidden"}`,
				children: /* @__PURE__ */ jsx(SuccessMessage, { type: "EMAIL" })
			})
		]
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
//#region app/components/ui/switch.tsx
function Switch$1({ className, size = "default", ...props }) {
	return /* @__PURE__ */ jsx(Switch.Root, {
		"data-slot": "switch",
		"data-size": size,
		className: cn$1("peer group/switch relative inline-flex shrink-0 items-center rounded-full border border-transparent transition-all outline-none group-has-[:focus-visible]/field-label:border-transparent group-has-[:focus-visible]/field-label:ring-0 after:absolute after:-inset-x-3 after:-inset-y-2 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 data-[size=default]:h-[18.4px] data-[size=default]:w-[32px] data-[size=sm]:h-[14px] data-[size=sm]:w-[24px] dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 data-checked:bg-primary data-unchecked:bg-input dark:data-unchecked:bg-input/80 data-disabled:cursor-not-allowed data-disabled:opacity-50", className),
		...props,
		children: /* @__PURE__ */ jsx(Switch.Thumb, {
			"data-slot": "switch-thumb",
			className: "pointer-events-none block rounded-full bg-background ring-0 transition-transform group-data-[size=default]/switch:size-4 group-data-[size=sm]/switch:size-3 group-data-[size=default]/switch:data-checked:translate-x-[calc(100%-2px)] group-data-[size=sm]/switch:data-checked:translate-x-[calc(100%-2px)] dark:data-checked:bg-primary-foreground group-data-[size=default]/switch:data-unchecked:translate-x-0 group-data-[size=sm]/switch:data-unchecked:translate-x-0 dark:data-unchecked:bg-foreground"
		})
	});
}
//#endregion
//#region app/components/contacts/item.tsx
function Item({ contact, removedContact }) {
	const updateParDefaut = async (contact) => {};
	const removeItem = async (contact) => {
		if (!contact.id) return;
		await supprimer_contact(contact.id).then((res) => {
			if (res.success) {
				removedContact(res.data, res.newDefault);
				console.log(res.newDefault);
				toast$1.add({
					type: "success",
					description: `${res.message}`
				});
			} else toast$1.add({
				type: "warning",
				description: `${res.message}`
			});
		});
	};
	return /* @__PURE__ */ jsxs(Card, {
		className: "relative",
		children: [/* @__PURE__ */ jsxs(CardHeader, {
			className: "flex flex-row items-center justify-between pb-2 space-y-0",
			children: [/* @__PURE__ */ jsx(CardTitle, {
				className: "text-base font-semibold",
				children: contact.label
			}), /* @__PURE__ */ jsxs(DropdownMenu, { children: [/* @__PURE__ */ jsx(DropdownMenuTrigger, { children: /* @__PURE__ */ jsxs(Button$1, {
				variant: "ghost",
				size: "icon",
				className: "size-8",
				children: [/* @__PURE__ */ jsx(MoreHorizontalIcon, { className: "h-4 w-4" }), /* @__PURE__ */ jsx("span", {
					className: "sr-only",
					children: "Open menu"
				})]
			}) }), /* @__PURE__ */ jsxs(DropdownMenuContent, {
				align: "end",
				children: [
					/* @__PURE__ */ jsx(DropdownMenuItem, { children: "Edit" }),
					/* @__PURE__ */ jsx(DropdownMenuItem, { children: "Duplicate" }),
					/* @__PURE__ */ jsx(DropdownMenuSeparator, {}),
					/* @__PURE__ */ jsx(DropdownMenuItem, {
						variant: "destructive",
						onClick: (id) => removeItem(contact),
						children: "Delete"
					})
				]
			})] })]
		}), /* @__PURE__ */ jsxs(CardContent, {
			className: "space-y-3",
			children: [
				contact.phone && /* @__PURE__ */ jsxs("div", {
					className: "flex items-center text-sm text-muted-foreground",
					children: [/* @__PURE__ */ jsx(PhoneIcon, { className: "mr-2 h-4 w-4 shrink-0" }), /* @__PURE__ */ jsx("span", { children: contact.phone || "—" })]
				}),
				contact.email && /* @__PURE__ */ jsxs("div", {
					className: "flex items-center text-sm text-muted-foreground",
					children: [/* @__PURE__ */ jsx(MailIcon, { className: "mr-2 h-4 w-4 shrink-0" }), /* @__PURE__ */ jsx("span", {
						className: "truncate",
						children: contact.email || "—"
					})]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "flex items-center justify-between pt-2 border-t border-border",
					children: [/* @__PURE__ */ jsx(Switch$1, {
						checked: contact.parDefaut,
						onCheckedChange: () => updateParDefaut(contact)
					}), contact.status !== "VERIFIE" ? /* @__PURE__ */ jsx(Button$1, {
						type: "button",
						className: "text-foreground btn-sm cursor-pointer",
						variant: "link",
						children: "Verifier"
					}) : ""]
				})
			]
		})]
	}, contact.id);
}
//#endregion
//#region app/components/contacts/items.tsx
function Items({ isLoaded, contacts, removedContact }) {
	return /* @__PURE__ */ jsxs("div", {
		className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",
		children: [!isLoaded && /* @__PURE__ */ jsx(ContactsListSkeleton, {}), contacts.map((contact) => /* @__PURE__ */ jsx(Item, {
			contact,
			removedContact
		}, contact.id))]
	});
}
//#endregion
//#region app/components/contacts/contacts.tsx
function ContactsManager() {
	const [contacts, setContacts] = useState([]);
	const [isLoaded, setIsLoaded] = useState(false);
	useEffect(() => {
		const fetchDatas = async () => {
			await items_contact().then((resp) => {
				setContacts(resp.data);
				setIsLoaded(true);
			});
		};
		fetchDatas();
	}, []);
	const [activeDialog, setActiveDialog] = useState(null);
	return /* @__PURE__ */ jsxs("div", {
		className: "w-full max-w-6xl mx-auto p-6 space-y-6",
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4",
				children: [
					/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h1", {
						className: "text-2xl font-bold tracking-tight",
						children: "Contacts"
					}), /* @__PURE__ */ jsx("p", {
						className: "text-sm text-muted-foreground",
						children: "Manage your customer accounts and leads."
					})] }),
					/* @__PURE__ */ jsxs(ButtonGroup, { children: [/* @__PURE__ */ jsxs(Dialog$1, {
						open: activeDialog === "PHONE",
						onOpenChange: (open) => setActiveDialog(open ? "PHONE" : null),
						children: [/* @__PURE__ */ jsx(DialogTrigger, { children: /* @__PURE__ */ jsx(Button$1, {
							variant: "outline",
							children: "New phone"
						}) }), /* @__PURE__ */ jsx(DialogContent, { children: /* @__PURE__ */ jsx(Form$1, {
							type: "PHONE",
							new_contact: (newContact) => {
								setContacts([...contacts, newContact]);
							}
						}) })]
					}), /* @__PURE__ */ jsxs(DropdownMenu, { children: [/* @__PURE__ */ jsx(DropdownMenuTrigger, { children: /* @__PURE__ */ jsx(Button$1, {
						variant: "outline",
						className: "pl-2",
						children: /* @__PURE__ */ jsx(ChevronDownIcon, {})
					}) }), /* @__PURE__ */ jsx(DropdownMenuContent, {
						align: "end",
						className: "w-44",
						children: /* @__PURE__ */ jsxs(DropdownMenuGroup, { children: [/* @__PURE__ */ jsxs(DropdownMenuItem, {
							onClick: () => setActiveDialog("PHONE"),
							children: [/* @__PURE__ */ jsx(VolumeOffIcon, {}), " New phone"]
						}), /* @__PURE__ */ jsxs(DropdownMenuItem, {
							onClick: () => setActiveDialog("EMAIL"),
							children: [/* @__PURE__ */ jsx(VolumeOffIcon, {}), " New email"]
						})] })
					})] })] }),
					/* @__PURE__ */ jsx(Dialog$1, {
						open: activeDialog === "EMAIL",
						onOpenChange: (open) => setActiveDialog(open ? "EMAIL" : null),
						children: /* @__PURE__ */ jsx(DialogContent, { children: /* @__PURE__ */ jsx(Form$1, {
							type: "EMAIL",
							new_contact: (newContact) => {
								setContacts([...contacts, newContact]);
							}
						}) })
					})
				]
			}),
			contacts && /* @__PURE__ */ jsx(Items, {
				isLoaded,
				contacts,
				removedContact: (removedItem, newDefault) => {
					setContacts((contacts) => contacts.filter((contact) => contact.id !== removedItem.id).map((contact) => ({
						...contact,
						parDefaut: contact.id === newDefault ? true : contact.parDefaut
					})));
				}
			}),
			isLoaded && contacts.length === 0 && /* @__PURE__ */ jsx("span", { children: "empty" })
		]
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
//#region app/components/adresses/form.tsx
function Form({ isLoaded, setAdresse, adresse }) {
	const { register, handleSubmit, control, formState: { errors } } = useForm({
		resolver: zodResolver(AdresseSchema),
		defaultValues: {
			adresse: adresse?.adresse ? adresse.adresse : "",
			region: adresse?.region ? adresse.region : "",
			ville: adresse?.ville ? adresse.ville : "",
			codePostal: adresse?.codePostal ? adresse.codePostal : "",
			pays: adresse?.pays ? adresse.pays : ""
		}
	});
	const [hide, setHide] = useState("form-adress");
	const onSubmit = async (form) => {
		await creer_adresse(form).then((res) => {
			if (res.success) {
				setHide("successed-form");
				setAdresse(res.data);
			}
		});
	};
	const onUpdate = async (form) => {
		const id = adresse?.id;
		if (id) await modifier_adresse(id, form).then((res) => {
			if (res.success) {
				setHide("successed-form");
				setAdresse(res.data);
			}
		});
	};
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsxs("form", {
		className: `${hide == "form-adress" ? "" : "hidden"}`,
		onSubmit: !adresse ? handleSubmit(onSubmit) : handleSubmit(onUpdate),
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "space-y-2",
				children: [
					/* @__PURE__ */ jsx(Label, {
						htmlFor: "adresse",
						children: "Votre adresse"
					}),
					/* @__PURE__ */ jsx(Input$1, {
						id: "adresse",
						placeholder: "Votre adresse",
						...register("adresse")
					}),
					errors.adresse && /* @__PURE__ */ jsx("span", {
						className: "text-red-500 text-1xl ml-2",
						children: errors.adresse.message
					})
				]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "grid grid-cols-2 gap-4",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "space-y-2 mt-3",
					children: [
						/* @__PURE__ */ jsx(Label, {
							htmlFor: "region",
							children: "Region"
						}),
						/* @__PURE__ */ jsx(Input$1, {
							id: "region",
							placeholder: "Region / Province",
							...register("region")
						}),
						errors.region && /* @__PURE__ */ jsx("span", {
							className: "text-red-500 text-1xl ml-2",
							children: errors.region.message
						})
					]
				}), /* @__PURE__ */ jsxs("div", {
					className: "space-y-2 mt-3",
					children: [
						/* @__PURE__ */ jsx(Label, {
							htmlFor: "ville",
							children: "Ville"
						}),
						/* @__PURE__ */ jsx(Input$1, {
							id: "ville",
							placeholder: "Ville",
							...register("ville")
						}),
						errors.ville && /* @__PURE__ */ jsx("span", {
							className: "text-red-500 text-1xl ml-2",
							children: errors.ville.message
						})
					]
				})]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "space-y-2 mt-3",
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "space-y-2 mt-3",
						children: [
							/* @__PURE__ */ jsx(Label, {
								htmlFor: "code-postal",
								children: "Code postal"
							}),
							/* @__PURE__ */ jsx(Input$1, {
								id: "code-postal",
								placeholder: "Code postal (Optional)",
								...register("codePostal")
							}),
							errors.codePostal && /* @__PURE__ */ jsx("span", {
								className: "text-red-500 text-1xl ml-2",
								children: errors.codePostal.message
							})
						]
					}),
					/* @__PURE__ */ jsx(Label, {
						htmlFor: "pays",
						children: "Pays"
					}),
					/* @__PURE__ */ jsx(Controller, {
						name: "pays",
						control,
						render: ({ field }) => /* @__PURE__ */ jsxs(Select$1, {
							id: "pays",
							value: field.value,
							onValueChange: (value) => field.onChange(value),
							children: [/* @__PURE__ */ jsx(SelectTrigger, {
								className: "w-full",
								children: /* @__PURE__ */ jsx(SelectValue, { placeholder: "Select a country" })
							}), /* @__PURE__ */ jsx(SelectContent, { children: /* @__PURE__ */ jsx(SelectGroup, { children: items.map((item) => /* @__PURE__ */ jsx(SelectItem, {
								value: item.value,
								children: item.label
							}, item.value)) }) })]
						})
					}),
					errors.pays && /* @__PURE__ */ jsx("span", {
						className: "text-red-500 text-1xl ml-2",
						children: errors.pays.message
					})
				]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "pt-2",
				children: [/* @__PURE__ */ jsxs(Button$1, {
					type: "submit",
					className: "w-full",
					disabled: isLoaded,
					children: [
						!adresse ? "Enregistrer" : "Modifer",
						" ",
						isLoaded && /* @__PURE__ */ jsx(Loader2, { className: "mr-2 h-4 w-4 animate-spin" })
					]
				}), /* @__PURE__ */ jsx("div", {
					className: "flex justify-center",
					children: /* @__PURE__ */ jsx(DialogClose, { render: /* @__PURE__ */ jsx(Button$1, {
						type: "button",
						className: "text-foreground",
						variant: "link",
						children: "Fermer"
					}) })
				})]
			})
		]
	}), /* @__PURE__ */ jsxs("div", {
		className: `${hide == "successed-form" ? "" : "hidden"} flex flex-col items-center text-center gap-4 py-2`,
		children: [
			/* @__PURE__ */ jsx("div", {
				className: "flex items-center justify-center size-16 rounded-full bg-teal-400/10 text-teal-400",
				children: /* @__PURE__ */ jsx(CheckCircle2Icon, {
					size: 32,
					strokeWidth: 1.5
				})
			}),
			/* @__PURE__ */ jsxs(DialogHeader, {
				className: "items-center",
				children: [/* @__PURE__ */ jsx(DialogTitle, {
					className: "text-lg",
					children: "Message de succès !"
				}), /* @__PURE__ */ jsx(DialogDescription, { children: "Votre adresse a été verifié avec succès !" })]
			}),
			/* @__PURE__ */ jsx(DialogClose, {
				render: /* @__PURE__ */ jsx(Button$1, { className: "w-full cursor-pointer hover:bg-primary/80" }),
				children: "Fermer"
			})
		]
	})] });
}
//#endregion
//#region app/components/adresses/data.tsx
function Data({ adresse, setAdress, isLoaded }) {
	const onRemove = async () => {
		if (adresse.id) {
			const removeRequest = supprimer_adresse(adresse.id).then((res) => {
				setAdress(null);
				return res;
			});
			toast$1.promise(removeRequest, {
				loading: "Removing address…",
				success: `${(await removeRequest).message}`,
				error: (err) => err.message || "Could not remove address."
			});
		}
	};
	return /* @__PURE__ */ jsx("div", {
		className: "group relative flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:border-slate-300 hover:shadow-md dark:border-slate-800 dark:bg-slate-950",
		children: /* @__PURE__ */ jsxs("div", {
			className: "flex items-start justify-between gap-4",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "flex items-start gap-3",
				children: [/* @__PURE__ */ jsx("div", {
					className: "mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400",
					children: /* @__PURE__ */ jsx(MapPin, { className: "h-4 w-4" })
				}), /* @__PURE__ */ jsxs("div", {
					className: "space-y-1",
					children: [
						/* @__PURE__ */ jsx("p", {
							className: "font-medium leading-none text-slate-900 dark:text-slate-100",
							children: adresse.adresse
						}),
						/* @__PURE__ */ jsxs("p", {
							className: "text-sm text-slate-500 dark:text-slate-400",
							children: [
								adresse.ville,
								", ",
								adresse.region,
								" ",
								adresse.codePostal
							]
						}),
						/* @__PURE__ */ jsx("p", {
							className: "text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500",
							children: adresse.pays
						})
					]
				})]
			}), /* @__PURE__ */ jsxs("div", {
				className: "flex items-center gap-1",
				children: [/* @__PURE__ */ jsxs(Dialog$1, { children: [/* @__PURE__ */ jsx(DialogTrigger, { children: /* @__PURE__ */ jsx("button", {
					type: "button",
					"aria-label": "Edit address",
					className: "rounded-lg p-2 text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-100",
					children: /* @__PURE__ */ jsx(Pencil, { className: "h-4 w-4" })
				}) }), /* @__PURE__ */ jsxs(DialogContent, {
					className: "sm:max-w-[425px]",
					showCloseButton: false,
					children: [/* @__PURE__ */ jsxs(DialogHeader, { children: [/* @__PURE__ */ jsx(DialogTitle, { children: "Create Adress" }), /* @__PURE__ */ jsx(DialogDescription, { children: "Anyone who has this link will be able to view this." })] }), /* @__PURE__ */ jsx(Form, {
						isLoaded,
						setAdresse: setAdress,
						adresse
					})]
				})] }), /* @__PURE__ */ jsx("button", {
					type: "button",
					onClick: onRemove,
					"aria-label": "Remove address",
					className: "rounded-lg p-2 text-slate-500 transition-colors hover:bg-red-50 hover:text-red-600 dark:text-slate-400 dark:hover:bg-red-950/50 dark:hover:text-red-400",
					children: /* @__PURE__ */ jsx(Trash2, { className: "h-4 w-4" })
				})]
			})]
		})
	});
}
//#endregion
//#region app/components/adresses/adresses.tsx
function AdressesManager() {
	const [adresse, setAdresse] = useState();
	const [isLoaded, setIsLoaded] = useState(false);
	useEffect(() => {
		const fetchDatas = async () => {
			await items_adresse(null, null, null).then((resp) => {
				setAdresse(resp.data);
			});
		};
		fetchDatas();
	}, []);
	return /* @__PURE__ */ jsxs("div", {
		className: "w-full max-w-6xl mx-auto p-6 space-y-6",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4",
			children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h1", {
				className: "text-2xl font-bold tracking-tight",
				children: "Adresse"
			}), /* @__PURE__ */ jsx("p", {
				className: "text-sm text-muted-foreground",
				children: "Manage your customer accounts and leads."
			})] }), /* @__PURE__ */ jsxs(Dialog$1, { children: [/* @__PURE__ */ jsx(DialogTrigger, { children: /* @__PURE__ */ jsx(Button$1, {
				variant: "outline",
				children: "New adress"
			}) }), /* @__PURE__ */ jsxs(DialogContent, {
				className: "sm:max-w-[425px]",
				showCloseButton: false,
				children: [/* @__PURE__ */ jsxs(DialogHeader, { children: [/* @__PURE__ */ jsx(DialogTitle, { children: "Create Adress" }), /* @__PURE__ */ jsx(DialogDescription, { children: "Anyone who has this link will be able to view this." })] }), /* @__PURE__ */ jsx(Form, {
					isLoaded,
					setAdresse: (v) => setAdresse(v),
					adresse: null
				})]
			})] })]
		}), adresse && /* @__PURE__ */ jsx(Data, {
			adresse,
			isLoaded,
			setAdress: (v) => setAdresse(v)
		})]
	});
}
//#endregion
//#region app/routes/profile/profile.tsx
var profile_exports = /* @__PURE__ */ __exportAll({
	default: () => profile_default,
	meta: () => meta$19
});
function meta$19({}) {
	return [{ title: "Profile" }, {
		name: "description",
		content: "Personalisez vos informations!"
	}];
}
var profile_default = UNSAFE_withComponentProps(function Profile() {
	const [open, setOpen] = useState(true);
	const [authorName, setAuthorName] = useState("Ephraim Duncan");
	const [title, setTitle] = useState("Design Engineer");
	const [image, setImage] = useState(null);
	const fileInputRef = useRef(null);
	const handleFileChange = (e) => {
		const file = e.target.files?.[0];
		if (file) {
			if (file.size > 1048576) {
				alert("File size exceeds 1MB limit");
				return;
			}
			const reader = new FileReader();
			reader.onload = (event) => {
				setImage(event.target?.result);
			};
			reader.readAsDataURL(file);
		}
	};
	const triggerFileInput = () => {
		fileInputRef.current?.click();
	};
	const { user, isLoaded } = useUser();
	if (!isLoaded) return UserProfileSkeleton();
	return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx("div", {
		className: "flex items-center justify-center p-10",
		children: /* @__PURE__ */ jsxs("div", { children: [
			/* @__PURE__ */ jsxs("div", {
				className: "grid grid-cols-1 gap-10 md:grid-cols-3",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "hidden md:block",
					children: [/* @__PURE__ */ jsx("h2", {
						className: "text-balance font-semibold text-foreground dark:text-foreground",
						children: "Informations personnels"
					}), /* @__PURE__ */ jsx("p", {
						className: "mt-1 text-pretty text-muted-foreground text-sm leading-6 dark:text-muted-foreground",
						children: "Personnalisez vos informations"
					})]
				}), /* @__PURE__ */ jsxs("div", {
					className: "sm:max-w-3xl md:col-span-2",
					children: [/* @__PURE__ */ jsx("div", {
						className: "grid grid-cols-1 mb-6",
						children: /* @__PURE__ */ jsxs("div", {
							className: "flex flex-col items-center justify-center",
							children: [
								/* @__PURE__ */ jsxs("div", {
									className: "relative mb-2",
									children: [/* @__PURE__ */ jsxs(Avatar$1, {
										className: "h-24 w-24 border-2 border-muted",
										children: [/* @__PURE__ */ jsx(AvatarImage, {
											alt: "Profile",
											src: image || user?.imageUrl
										}), /* @__PURE__ */ jsx(AvatarFallback, { children: /* @__PURE__ */ jsx(UserRoundIcon, {
											"aria-hidden": "true",
											className: "text-muted-foreground",
											size: 52
										}) })]
									}), /* @__PURE__ */ jsxs(Button$1, {
										className: "-top-0.5 -right-0.5 absolute rounded-full border-[3px] border-background bg-accent hover:bg-accent",
										onClick: () => {
											if (image) {
												setImage(null);
												if (fileInputRef.current) fileInputRef.current.value = "";
											} else triggerFileInput();
										},
										size: "icon-sm",
										variant: "ghost",
										children: [image ? /* @__PURE__ */ jsx(X, { className: "h-4 w-4 text-muted-foreground" }) : /* @__PURE__ */ jsx(Plus, { className: "h-3 w-3 text-muted-foreground" }), /* @__PURE__ */ jsx("span", {
											className: "sr-only",
											children: image ? "Remove image" : "Upload image"
										})]
									})]
								}),
								/* @__PURE__ */ jsx("p", {
									className: "text-pretty text-center font-medium",
									children: user?.fullName
								}),
								/* @__PURE__ */ jsx("p", {
									className: "text-pretty text-center text-muted-foreground text-sm",
									children: "Max file size: 1MB"
								}),
								/* @__PURE__ */ jsx("input", {
									accept: "image/*",
									className: "hidden",
									onChange: handleFileChange,
									ref: fileInputRef,
									type: "file"
								}),
								" ",
								/* @__PURE__ */ jsx(Button$1, {
									className: "mt-2",
									onClick: triggerFileInput,
									size: "sm",
									variant: "outline",
									children: "Add Image"
								})
							]
						})
					}), /* @__PURE__ */ jsxs("div", {
						className: "grid grid-cols-1 gap-4 sm:grid-cols-6",
						children: [
							/* @__PURE__ */ jsx("div", {
								className: "col-span-full sm:col-span-3",
								children: /* @__PURE__ */ jsxs(Field, {
									className: "gap-2",
									children: [/* @__PURE__ */ jsx(FieldLabel, {
										htmlFor: "first-name",
										children: "Nom"
									}), /* @__PURE__ */ jsx(Input$1, {
										autoComplete: "given-name",
										id: "first-name",
										name: "first-name",
										placeholder: `${user?.firstName}`,
										type: "text"
									})]
								})
							}),
							/* @__PURE__ */ jsx("div", {
								className: "col-span-full sm:col-span-3",
								children: /* @__PURE__ */ jsxs(Field, {
									className: "gap-2",
									children: [/* @__PURE__ */ jsx(FieldLabel, {
										htmlFor: "last-name",
										children: "Post-nom"
									}), /* @__PURE__ */ jsx(Input$1, {
										autoComplete: "family-name",
										id: "last-name",
										name: "last-name",
										placeholder: `${user?.lastName}`,
										type: "text"
									})]
								})
							}),
							/* @__PURE__ */ jsx("div", {
								className: "col-span-full",
								children: /* @__PURE__ */ jsxs(Field, {
									className: "gap-2",
									children: [/* @__PURE__ */ jsx(FieldLabel, {
										htmlFor: "email",
										children: "Adresse mail"
									}), /* @__PURE__ */ jsx(Input$1, {
										autoComplete: "email",
										id: "email",
										name: "email",
										placeholder: `${user?.emailAddresses[0].emailAddress}`,
										type: "email"
									})]
								})
							}),
							/* @__PURE__ */ jsx("div", {
								className: "col-span-full sm:col-span-3",
								children: /* @__PURE__ */ jsxs(Field, {
									className: "gap-2",
									children: [/* @__PURE__ */ jsx(FieldLabel, {
										htmlFor: "birthyear",
										children: "Date de naissance"
									}), /* @__PURE__ */ jsx(Input$1, {
										id: "birthyear",
										name: "year",
										placeholder: ``,
										type: "date"
									})]
								})
							}),
							/* @__PURE__ */ jsx("div", {
								className: "col-span-full sm:col-span-3",
								children: /* @__PURE__ */ jsxs(Field, {
									className: "gap-2",
									children: [
										/* @__PURE__ */ jsx(FieldLabel, {
											htmlFor: "role",
											children: "Role"
										}),
										/* @__PURE__ */ jsx(Input$1, {
											disabled: true,
											id: "role",
											name: "role",
											placeholder: `${user?.publicMetadata?.role || "User"}`,
											type: "text"
										}),
										/* @__PURE__ */ jsx(FieldDescription, { children: "Roles can only be changed by system admin." })
									]
								})
							})
						]
					})]
				})]
			}),
			/* @__PURE__ */ jsx(Separator$1, { className: "my-8" }),
			/* @__PURE__ */ jsx(ContactsManager, {}),
			/* @__PURE__ */ jsx(Separator$1, { className: "my-8" }),
			/* @__PURE__ */ jsx(AdressesManager, {})
		] })
	}) });
});
//#endregion
//#region app/routes/notifications/notifications.tsx
var notifications_exports = /* @__PURE__ */ __exportAll({
	default: () => notifications_default,
	meta: () => meta$18
});
function meta$18({}) {
	return [{ title: "My Admin App" }, {
		name: "description",
		content: "Welcome to React Router!"
	}];
}
var notifications_default = UNSAFE_withComponentProps(function Notifications() {
	return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("h1", { children: "aides" }) });
});
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
	meta: () => meta$17
});
function meta$17({}) {
	return [{ title: "React App" }, {
		name: "description",
		content: "Welcome to React Router!"
	}];
}
var dashboard_default = UNSAFE_withComponentProps(function Dashboard() {
	return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(DataTable, { data: data_default }) });
});
//#endregion
//#region app/routes/commandes/commandes.tsx
var commandes_exports = /* @__PURE__ */ __exportAll({
	default: () => commandes_default,
	meta: () => meta$16
});
function meta$16({}) {
	return [{ title: "React App" }, {
		name: "description",
		content: "Welcome to React Router!"
	}];
}
var commandes_default = UNSAFE_withComponentProps(function Commandes() {
	return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("h1", { children: "commandes" }) });
});
//#endregion
//#region app/routes/ventes/ventes.tsx
var ventes_exports = /* @__PURE__ */ __exportAll({
	default: () => ventes_default,
	meta: () => meta$15
});
function meta$15({}) {
	return [{ title: "React App" }, {
		name: "description",
		content: "Welcome to React Router!"
	}];
}
var ventes_default = UNSAFE_withComponentProps(function Ventes() {
	return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("h1", { children: "historique des ventes" }) });
});
//#endregion
//#region app/routes/articles/articles.tsx
var articles_exports = /* @__PURE__ */ __exportAll({
	default: () => articles_default,
	meta: () => meta$14
});
function meta$14({}) {
	return [{ title: "React App" }, {
		name: "description",
		content: "Welcome to React Router!"
	}];
}
var articles_default = UNSAFE_withComponentProps(function Articles() {
	const [articles, setArticles] = useState([]);
	return /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h1", { children: "articles" }), /* @__PURE__ */ jsx("ul", {})] });
});
//#endregion
//#region app/routes/achats/achats.tsx
var achats_exports = /* @__PURE__ */ __exportAll({
	default: () => achats_default,
	meta: () => meta$13
});
function meta$13({}) {
	return [{ title: "My Admin App" }, {
		name: "description",
		content: "Welcome to React Router!"
	}];
}
var achats_default = UNSAFE_withComponentProps(function Achats() {
	return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("h1", { children: "Achats" }) });
});
//#endregion
//#region app/routes/clients/clients.tsx
var clients_exports = /* @__PURE__ */ __exportAll({
	default: () => clients_default,
	meta: () => meta$12
});
function meta$12({}) {
	return [{ title: "My Admin App" }, {
		name: "description",
		content: "Welcome to React Router!"
	}];
}
var clients_default = UNSAFE_withComponentProps(function Clients() {
	return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("h1", { children: "Achats" }) });
});
//#endregion
//#region app/routes/fournisseurs/fournisseurs.tsx
var fournisseurs_exports = /* @__PURE__ */ __exportAll({
	default: () => fournisseurs_default,
	meta: () => meta$11
});
function meta$11({}) {
	return [{ title: "My Admin App" }, {
		name: "description",
		content: "Welcome to React Router!"
	}];
}
var fournisseurs_default = UNSAFE_withComponentProps(function Fournisseurs() {
	return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("h1", { children: "fournisseurs" }) });
});
//#endregion
//#region app/routes/travailleurs/travailleurs.tsx
var travailleurs_exports = /* @__PURE__ */ __exportAll({
	default: () => travailleurs_default,
	meta: () => meta$10
});
function meta$10({}) {
	return [{ title: "My Admin App" }, {
		name: "description",
		content: "Welcome to React Router!"
	}];
}
var travailleurs_default = UNSAFE_withComponentProps(function Travailleurs() {
	return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("h1", { children: "Achats" }) });
});
//#endregion
//#region app/routes/caisses/caisses.tsx
var caisses_exports = /* @__PURE__ */ __exportAll({
	default: () => caisses_default,
	meta: () => meta$9
});
function meta$9({}) {
	return [{ title: "My Admin App" }, {
		name: "description",
		content: "Welcome to React Router!"
	}];
}
var caisses_default = UNSAFE_withComponentProps(function Caisses() {
	return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("h1", { children: "caisse" }) });
});
//#endregion
//#region app/routes/admin/businesses.tsx
var businesses_exports = /* @__PURE__ */ __exportAll({
	default: () => businesses_default,
	meta: () => meta$8
});
function meta$8({}) {
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
	meta: () => meta$7
});
function meta$7({}) {
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
var categories_exports = /* @__PURE__ */ __exportAll({
	default: () => categories_default,
	meta: () => meta$6
});
function meta$6({}) {
	return [{ title: "My Admin App" }, {
		name: "description",
		content: "Welcome to React Router!"
	}];
}
var categories_default = UNSAFE_withComponentProps(function Categories() {
	return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("h1", { children: "categorie" }) });
});
//#endregion
//#region app/routes/parametres/parametres.tsx
var parametres_exports = /* @__PURE__ */ __exportAll({
	default: () => parametres_default,
	meta: () => meta$5
});
function meta$5({}) {
	return [{ title: "Parametres" }, {
		name: "description",
		content: "Welcome to React Router!"
	}];
}
var parametres_default = UNSAFE_withComponentProps(function Parametres() {
	const [open, setOpen] = useState(false);
	const removeAccount = async () => {
		await supprimer_user();
	};
	return /* @__PURE__ */ jsxs("div", { children: [
		/* @__PURE__ */ jsx("li", { children: "application" }),
		/* @__PURE__ */ jsx("li", { children: "devises" }),
		/* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsxs(CardHeader, { children: [
			/* @__PURE__ */ jsx(CardTitle, { children: "Danger zone" }),
			/* @__PURE__ */ jsx(CardDescription, { children: "Description" }),
			/* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs(Dialog$1, {
				onOpenChange: setOpen,
				open,
				children: [/* @__PURE__ */ jsx(DialogTrigger, {
					render: /* @__PURE__ */ jsx(Button$1, { variant: "destructive" }),
					children: "Supprimer le comte"
				}), /* @__PURE__ */ jsxs(DialogContent, {
					className: "sm:max-w-lg",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "flex items-start space-x-4",
						children: [/* @__PURE__ */ jsx("div", {
							className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-red-100",
							children: /* @__PURE__ */ jsx(AlertTriangleIcon, { className: "h-6 w-6 text-red-600" })
						}), /* @__PURE__ */ jsxs(DialogHeader, { children: [/* @__PURE__ */ jsx(DialogTitle, { children: "Supprimer le compte" }), /* @__PURE__ */ jsx(DialogDescription, { children: "Are you sure you want to delete your account? All of your data will be permanently removed. This action cannot be undone." })] })]
					}), /* @__PURE__ */ jsx(DialogFooter, { children: /* @__PURE__ */ jsx(Button$1, {
						variant: "destructive",
						onClick: removeAccount
					}) })]
				})]
			}) })
		] }) })
	] });
});
//#endregion
//#region app/auth/sign-in/[[...sign-in]]/page.tsx
var page_exports$2 = /* @__PURE__ */ __exportAll({
	default: () => page_default$2,
	meta: () => meta$4
});
function meta$4({}) {
	return [{ title: "Connectez-vous sur Ratel" }, {
		name: "description",
		content: "Se connecter pour continuer vers Ratel!"
	}];
}
var page_default$2 = UNSAFE_withComponentProps(function SignInPage({ className, ...props }) {
	return /* @__PURE__ */ jsx("div", {
		className: "flex min-h-svh bg-muted flex-col items-center justify-center p-6 md:p-10",
		children: /* @__PURE__ */ jsx(Card, {
			className: "overflow-hidden p-0",
			children: /* @__PURE__ */ jsx("div", {
				className: "m-auto",
				children: /* @__PURE__ */ jsx(SignIn, { appearance: {
					options: {
						logoImageUrl: "/favicon.ico",
						logoPlacement: "inside",
						socialButtonsPlacement: "bottom",
						socialButtonsVariant: "iconButton",
						animations: true,
						autoFocus: true,
						logoLinkUrl: "http://localhost:5173"
					},
					variables: {
						colorPrimary: "var(--primary)",
						colorForeground: "#000000",
						colorBackground: "var(--background)",
						colorInputForeground: "var(--foreground)",
						colorBorder: "var(--foreground)",
						colorShadow: "var(--muted)"
					},
					elements: {
						formFieldInput: { backgroundColor: "var(--background)" },
						formButtonPrimary: { color: "var(--primary-foreground)" },
						buttonArrowIcon: { display: "none" },
						footerItem: { display: "none" },
						socialButtonsBlockButtonText: { color: "var(--secondary-foreground)" }
					}
				} })
			})
		})
	});
});
//#endregion
//#region app/auth/sign-up/[[...sign-up]]/page.tsx
var page_exports$1 = /* @__PURE__ */ __exportAll({
	default: () => page_default$1,
	meta: () => meta$3
});
function meta$3({}) {
	return [{ title: "Créez votre compte" }, {
		name: "description",
		content: "Créez votre compte pour continuer vers Ratel sur Ratel Market!"
	}];
}
var page_default$1 = UNSAFE_withComponentProps(function SignUpPage({ className, ...props }) {
	return /* @__PURE__ */ jsx("div", {
		className: "flex min-h-svh bg-muted flex-col items-center justify-center p-6 md:p-10",
		children: /* @__PURE__ */ jsx(Card, {
			className: "overflow-hidden p-0",
			children: /* @__PURE__ */ jsx("div", {
				className: "m-auto",
				children: /* @__PURE__ */ jsx(SignUp, { appearance: {
					options: {
						logoImageUrl: "/favicon.ico",
						logoPlacement: "inside",
						socialButtonsPlacement: "bottom",
						socialButtonsVariant: "iconButton",
						animations: true,
						autoFocus: true,
						helpPageUrl: "http://localhost:5173/aides/auth",
						logoLinkUrl: "http://localhost:5173"
					},
					variables: {
						colorPrimary: "var(--primary)",
						colorForeground: "#000000",
						colorBackground: "var(--background)",
						colorInputForeground: "var(--foreground)",
						colorBorder: "var(--foreground)",
						colorShadow: "var(--muted)"
					},
					elements: {
						formFieldInput: { backgroundColor: "var(--background)" },
						formButtonPrimary: { color: "var(--primary-foreground)" },
						buttonArrowIcon: { display: "none" },
						footerItem: { display: "none" },
						socialButtonsBlockButtonText: { color: "var(--secondary-foreground)" }
					}
				} })
			})
		})
	});
});
//#endregion
//#region app/routes/welcome/welcome.tsx
var welcome_exports = /* @__PURE__ */ __exportAll({
	default: () => welcome_default,
	meta: () => meta$2
});
function meta$2({}) {
	return [{ title: "Bienvenu sur Ratel Market" }, {
		name: "description",
		content: "Welcome to React Router!"
	}];
}
var welcome_default = UNSAFE_withComponentProps(function Welcome() {
	const navigate = useNavigate();
	useEffect(() => {
		const creerUser = async () => {
			await creer_user().then((res) => {
				if (!res.success && res.redirect) navigate("/", { replace: true });
			});
		};
		creerUser();
	}, []);
	const isWelcome = async () => {
		await is_welcome().then((res) => {
			if (res.success) navigate("/");
		});
	};
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsx("p", { children: "the welcome page" }),
		/* @__PURE__ */ jsx(Link, {
			to: "/",
			children: "Home page"
		}),
		/* @__PURE__ */ jsx(Button$1, {
			className: "primary",
			onClick: isWelcome,
			children: "Home page"
		})
	] });
});
//#endregion
//#region app/root.tsx
var root_exports = /* @__PURE__ */ __exportAll({
	ErrorBoundary: () => ErrorBoundary,
	Layout: () => Layout,
	ProtectedRoute: () => ProtectedRoute,
	default: () => root_default,
	links: () => links,
	loader: () => loader,
	middleware: () => middleware
});
var middleware = [clerkMiddleware()];
var loader = (args) => rootAuthLoader(args);
var links = () => [
	{
		rel: "preconnect",
		href: "https://fonts.googleapis.com"
	},
	{
		rel: "preconnect",
		href: "https://fonts.gstatic.com",
		crossOrigin: "anonymous"
	},
	{
		rel: "stylesheet",
		href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
	},
	{
		rel: "stylesheet",
		href: app_default
	}
];
function Layout({ children }) {
	return /* @__PURE__ */ jsxs("html", {
		lang: "en",
		children: [/* @__PURE__ */ jsxs("head", { children: [
			/* @__PURE__ */ jsx("meta", { charSet: "utf-8" }),
			/* @__PURE__ */ jsx("meta", {
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			}),
			/* @__PURE__ */ jsx(Meta, {}),
			/* @__PURE__ */ jsx(Links, {})
		] }), /* @__PURE__ */ jsxs("body", { children: [
			/* @__PURE__ */ jsx(SidebarProvider, {
				style: {
					"--sidebar-width": "calc(var(--spacing) * 72)",
					"--header-height": "calc(var(--spacing) * 12)"
				},
				children
			}),
			/* @__PURE__ */ jsx(ScrollRestoration, {}),
			/* @__PURE__ */ jsx(Scripts, {})
		] })]
	});
}
var ProtectedRoute = () => {
	const { isLoaded, isSignedIn } = useAuth();
	if (!isLoaded) return /* @__PURE__ */ jsx("div", { children: "Loading authentication..." });
	const navigate = useNavigate();
	if (!isSignedIn) navigate("/sign-up", { replace: true });
	return /* @__PURE__ */ jsx(Outlet, {});
};
var root_default = UNSAFE_withComponentProps(function App({ loaderData }) {
	const location = useLocation();
	const shouldHideNavbar = [
		"/",
		"/login",
		"/sign-in",
		"/sign-up",
		"/sign-in/factor-one",
		"/welcome"
	].includes(location.pathname);
	let [page, setPage] = useState("Current Page");
	return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs(ClerkProvider, {
		loaderData,
		localization: frFR,
		children: [!shouldHideNavbar && /* @__PURE__ */ jsx(AppSidebar, { variant: "inset" }), /* @__PURE__ */ jsxs(SidebarInset, { children: [!shouldHideNavbar && /* @__PURE__ */ jsx(SiteHeader, { title: `${page}` }), /* @__PURE__ */ jsx("div", {
			className: `flex flex-1 flex-col md:rounded-xl ${!shouldHideNavbar && "md:m-4"}`,
			children: /* @__PURE__ */ jsx("div", {
				className: `flex flex-col gap-4 ${!shouldHideNavbar && "py-4"} md:gap-6 ${!shouldHideNavbar && "md:py-1"}`,
				children: /* @__PURE__ */ jsxs(Routes, { children: [
					/* @__PURE__ */ jsx(Route, {
						path: "/*",
						element: /* @__PURE__ */ jsx(home_default, {})
					}),
					/* @__PURE__ */ jsx(Route, {
						path: "/sign-in/*",
						element: /* @__PURE__ */ jsx(page_default$2, {})
					}),
					/* @__PURE__ */ jsx(Route, {
						path: "/sign-up/*",
						element: /* @__PURE__ */ jsx(page_default$1, {})
					}),
					/* @__PURE__ */ jsx(Route, {
						path: "/acceuil",
						element: /* @__PURE__ */ jsx(acceuil_default, {})
					}),
					/* @__PURE__ */ jsxs(Route, {
						element: /* @__PURE__ */ jsx(ProtectedRoute, {}),
						children: [
							/* @__PURE__ */ jsx(Route, {
								path: "/welcome",
								element: /* @__PURE__ */ jsx(welcome_default, {})
							}),
							/* @__PURE__ */ jsx(Route, {
								path: "/dashboard",
								element: /* @__PURE__ */ jsx(dashboard_default, {})
							}),
							/* @__PURE__ */ jsx(Route, {
								path: "/commandes",
								element: /* @__PURE__ */ jsx(commandes_default, {})
							}),
							/* @__PURE__ */ jsx(Route, {
								path: "/ventes",
								element: /* @__PURE__ */ jsx(ventes_default, {})
							}),
							/* @__PURE__ */ jsx(Route, {
								path: "/articles",
								element: /* @__PURE__ */ jsx(articles_default, {})
							}),
							/* @__PURE__ */ jsx(Route, {
								path: "/achats",
								element: /* @__PURE__ */ jsx(achats_default, {})
							}),
							/* @__PURE__ */ jsx(Route, {
								path: "/clients",
								element: /* @__PURE__ */ jsx(clients_default, {})
							}),
							/* @__PURE__ */ jsx(Route, {
								path: "/fournisseurs",
								element: /* @__PURE__ */ jsx(fournisseurs_default, {})
							}),
							/* @__PURE__ */ jsx(Route, {
								path: "/travailleurs",
								element: /* @__PURE__ */ jsx(travailleurs_default, {})
							}),
							/* @__PURE__ */ jsx(Route, {
								path: "/caisses",
								element: /* @__PURE__ */ jsx(caisses_default, {})
							}),
							/* @__PURE__ */ jsx(Route, {
								path: "/admin/businesses",
								element: /* @__PURE__ */ jsx(businesses_default, {})
							}),
							/* @__PURE__ */ jsx(Route, {
								path: "/admin/offres",
								element: /* @__PURE__ */ jsx(offres_default, {})
							}),
							/* @__PURE__ */ jsx(Route, {
								path: "/admin/categories",
								element: /* @__PURE__ */ jsx(categories_default, {})
							}),
							/* @__PURE__ */ jsx(Route, {
								path: "/notifications",
								element: /* @__PURE__ */ jsx(notifications_default, {})
							}),
							/* @__PURE__ */ jsx(Route, {
								path: "/profile",
								element: /* @__PURE__ */ jsx(profile_default, {})
							}),
							/* @__PURE__ */ jsx(Route, {
								path: "/parametres",
								element: /* @__PURE__ */ jsx(parametres_default, {})
							})
						]
					})
				] })
			})
		})] })]
	}) });
});
var ErrorBoundary = UNSAFE_withErrorBoundaryProps(function ErrorBoundary({ error }) {
	let message = "Oops!";
	let details = "An unexpected error occurred.";
	let stack;
	if (isRouteErrorResponse(error)) {
		message = error.status === 404 ? "404" : "Error";
		details = error.status === 404 ? "The requested page could not be found." : error.statusText || details;
	}
	return /* @__PURE__ */ jsxs("main", {
		className: "pt-16 p-4 container mx-auto",
		children: [
			/* @__PURE__ */ jsx("h1", { children: message }),
			/* @__PURE__ */ jsx("p", { children: details }),
			stack
		]
	});
});
//#endregion
//#region app/routes/docs.tsx
var docs_exports = /* @__PURE__ */ __exportAll({ default: () => docs_default });
var docs_default = UNSAFE_withComponentProps(function ShadcnInteractiveVariants() {
	const [copiedLabel, setCopiedLabel] = useState(null);
	const [search, setSearch] = useState("");
	const handleVariantClick = (label, code) => {
		navigator.clipboard.writeText(code);
		setCopiedLabel(label);
		setTimeout(() => setCopiedLabel(null), 2500);
	};
	return /* @__PURE__ */ jsxs("div", {
		className: "min-h-screen bg-background text-foreground p-6 md:p-12 space-y-10 max-w-7xl mx-auto",
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "flex flex-col md:flex-row md:items-center justify-between gap-4 border-b pb-6",
				children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h1", {
					className: "text-3xl font-bold tracking-tight",
					children: "Interactive Component Variants"
				}), /* @__PURE__ */ jsx("p", {
					className: "text-muted-foreground text-sm mt-1",
					children: "Click any variant directly to test interaction and instantly copy its source code."
				})] }), /* @__PURE__ */ jsxs("div", {
					className: "relative w-full md:w-72",
					children: [/* @__PURE__ */ jsx(Search, { className: "absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" }), /* @__PURE__ */ jsx(Input$1, {
						type: "search",
						placeholder: "Search variant name...",
						className: "pl-8 text-xs",
						value: search,
						onChange: (e) => setSearch(e.target.value)
					})]
				})]
			}),
			copiedLabel && /* @__PURE__ */ jsxs("div", {
				className: "fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-emerald-600 text-white px-4 py-2.5 rounded-xl shadow-lg animate-in fade-in slide-in-from-bottom-3 text-xs font-medium",
				children: [/* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4" }), /* @__PURE__ */ jsxs("span", { children: [
					"Copied source code for ",
					/* @__PURE__ */ jsxs("strong", { children: [
						"\"",
						copiedLabel,
						"\""
					] }),
					"!"
				] })]
			}),
			/* @__PURE__ */ jsx("div", {
				className: "space-y-12",
				children: [
					{
						title: "Button Variants & States",
						variants: [
							{
								id: "btn-default",
								label: "Default",
								code: `<Button variant="default">Default</Button>`,
								component: (onClick) => /* @__PURE__ */ jsx(Button$1, {
									onClick,
									children: "Default"
								})
							},
							{
								id: "btn-outline",
								label: "Outline",
								code: `<Button variant="outline">Outline</Button>`,
								component: (onClick) => /* @__PURE__ */ jsx(Button$1, {
									variant: "outline",
									onClick,
									children: "Outline"
								})
							},
							{
								id: "btn-secondary",
								label: "Secondary",
								code: `<Button variant="secondary">Secondary</Button>`,
								component: (onClick) => /* @__PURE__ */ jsx(Button$1, {
									variant: "secondary",
									onClick,
									children: "Secondary"
								})
							},
							{
								id: "btn-destructive",
								label: "Destructive",
								code: `<Button variant="destructive">Destructive</Button>`,
								component: (onClick) => /* @__PURE__ */ jsx(Button$1, {
									variant: "destructive",
									onClick,
									children: "Destructive"
								})
							},
							{
								id: "btn-destructive-outline",
								label: "Destructive Outline",
								code: `<Button variant="outline" className="border-destructive text-destructive hover:bg-destructive/10">Destructive Outline</Button>`,
								component: (onClick) => /* @__PURE__ */ jsx(Button$1, {
									variant: "outline",
									className: "border-destructive text-destructive hover:bg-destructive/10",
									onClick,
									children: "Destructive Outline"
								})
							},
							{
								id: "btn-ghost",
								label: "Ghost",
								code: `<Button variant="ghost">Ghost</Button>`,
								component: (onClick) => /* @__PURE__ */ jsx(Button$1, {
									variant: "ghost",
									onClick,
									children: "Ghost"
								})
							},
							{
								id: "btn-link",
								label: "Link",
								code: `<Button variant="link">Link</Button>`,
								component: (onClick) => /* @__PURE__ */ jsx(Button$1, {
									variant: "link",
									onClick,
									children: "Link"
								})
							},
							{
								id: "btn-xs",
								label: "Extra-small Size",
								code: `<Button size="sm" className="h-7 px-2 text-xs">Extra-small</Button>`,
								component: (onClick) => /* @__PURE__ */ jsx(Button$1, {
									size: "sm",
									className: "h-7 px-2 text-xs",
									onClick,
									children: "Extra-small"
								})
							},
							{
								id: "btn-sm",
								label: "Small Size",
								code: `<Button size="sm">Small Size</Button>`,
								component: (onClick) => /* @__PURE__ */ jsx(Button$1, {
									size: "sm",
									onClick,
									children: "Small Size"
								})
							},
							{
								id: "btn-lg",
								label: "Large Size",
								code: `<Button size="lg">Large Size</Button>`,
								component: (onClick) => /* @__PURE__ */ jsx(Button$1, {
									size: "lg",
									onClick,
									children: "Large Size"
								})
							},
							{
								id: "btn-xl",
								label: "Extra-large Size",
								code: `<Button className="h-12 px-6 text-base">Extra-large Size</Button>`,
								component: (onClick) => /* @__PURE__ */ jsx(Button$1, {
									className: "h-12 px-6 text-base",
									onClick,
									children: "Extra-large Size"
								})
							},
							{
								id: "btn-disabled",
								label: "Disabled",
								code: `<Button disabled>Disabled</Button>`,
								component: (onClick) => /* @__PURE__ */ jsx(Button$1, {
									disabled: true,
									onClick,
									children: "Disabled"
								})
							},
							{
								id: "btn-icon",
								label: "Icon",
								code: `<Button size="icon"><Trash2 className="h-4 w-4" /></Button>`,
								component: (onClick) => /* @__PURE__ */ jsx(Button$1, {
									size: "icon",
									onClick,
									children: /* @__PURE__ */ jsx(Trash2, { className: "h-4 w-4" })
								})
							},
							{
								id: "btn-icon-sm",
								label: "Icon Small Size",
								code: `<Button size="icon" className="h-7 w-7"><Plus className="h-3.5 w-3.5" /></Button>`,
								component: (onClick) => /* @__PURE__ */ jsx(Button$1, {
									size: "icon",
									className: "h-7 w-7",
									onClick,
									children: /* @__PURE__ */ jsx(Plus, { className: "h-3.5 w-3.5" })
								})
							},
							{
								id: "btn-icon-lg",
								label: "Icon Large Size",
								code: `<Button size="icon" className="h-11 w-11"><Send className="h-5 w-5" /></Button>`,
								component: (onClick) => /* @__PURE__ */ jsx(Button$1, {
									size: "icon",
									className: "h-11 w-11",
									onClick,
									children: /* @__PURE__ */ jsx(Send, { className: "h-5 w-5" })
								})
							},
							{
								id: "btn-with-icon",
								label: "With Icon",
								code: `<Button><Mail className="mr-2 h-4 w-4" /> Login with Email</Button>`,
								component: (onClick) => /* @__PURE__ */ jsxs(Button$1, {
									onClick,
									children: [/* @__PURE__ */ jsx(Mail, { className: "mr-2 h-4 w-4" }), " Login with Email"]
								})
							},
							{
								id: "btn-with-link",
								label: "With Link",
								code: `<Button asChild><a href="#link">Navigate <ArrowRight className="ml-2 h-4 w-4" /></a></Button>`,
								component: (onClick) => /* @__PURE__ */ jsxs(Button$1, {
									onClick,
									children: ["Navigate ", /* @__PURE__ */ jsx(ArrowRight, { className: "ml-2 h-4 w-4" })]
								})
							},
							{
								id: "btn-loading-prop",
								label: "Loading (Built-in Prop)",
								code: `<Button disabled><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Please wait</Button>`,
								component: (onClick) => /* @__PURE__ */ jsxs(Button$1, {
									disabled: true,
									onClick,
									children: [/* @__PURE__ */ jsx(Loader2, { className: "mr-2 h-4 w-4 animate-spin" }), " Please wait"]
								})
							},
							{
								id: "btn-loading-custom",
								label: "Loading (Custom Composition)",
								code: `<Button variant="outline" className="gap-2"><span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" /> Syncing Data</Button>`,
								component: (onClick) => /* @__PURE__ */ jsxs(Button$1, {
									variant: "outline",
									className: "gap-2",
									onClick,
									children: [/* @__PURE__ */ jsx("span", { className: "h-2 w-2 rounded-full bg-emerald-500 animate-pulse" }), " Syncing Data"]
								})
							}
						]
					},
					{
						title: "Badge Variants",
						variants: [
							{
								id: "badge-default",
								label: "Default Badge",
								code: `<Badge>Default</Badge>`,
								component: (onClick) => /* @__PURE__ */ jsx(Badge, {
									className: "cursor-pointer",
									onClick,
									children: "Default"
								})
							},
							{
								id: "badge-secondary",
								label: "Secondary Badge",
								code: `<Badge variant="secondary">Secondary</Badge>`,
								component: (onClick) => /* @__PURE__ */ jsx(Badge, {
									variant: "secondary",
									className: "cursor-pointer",
									onClick,
									children: "Secondary"
								})
							},
							{
								id: "badge-outline",
								label: "Outline Badge",
								code: `<Badge variant="outline">Outline</Badge>`,
								component: (onClick) => /* @__PURE__ */ jsx(Badge, {
									variant: "outline",
									className: "cursor-pointer",
									onClick,
									children: "Outline"
								})
							},
							{
								id: "badge-destructive",
								label: "Destructive Badge",
								code: `<Badge variant="destructive">Destructive</Badge>`,
								component: (onClick) => /* @__PURE__ */ jsx(Badge, {
									variant: "destructive",
									className: "cursor-pointer",
									onClick,
									children: "Destructive"
								})
							},
							{
								id: "badge-icon",
								label: "With Icon Badge",
								code: `<Badge className="gap-1"><Star className="h-3 w-3 fill-current" /> Featured</Badge>`,
								component: (onClick) => /* @__PURE__ */ jsxs(Badge, {
									className: "gap-1 cursor-pointer",
									onClick,
									children: [/* @__PURE__ */ jsx(Star, { className: "h-3 w-3 fill-current" }), " Featured"]
								})
							}
						]
					},
					{
						title: "Input Variants & Controls",
						variants: [
							{
								id: "input-default",
								label: "Standard Input",
								code: `<Input placeholder="Standard input..." />`,
								component: (onClick) => /* @__PURE__ */ jsx(Input$1, {
									placeholder: "Standard input...",
									onClick,
									className: "cursor-pointer max-w-xs"
								})
							},
							{
								id: "input-icon",
								label: "Input with Left Icon",
								code: `<div className="relative"><Mail className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" /><Input className="pl-9" placeholder="Email..." /></div>`,
								component: (onClick) => /* @__PURE__ */ jsxs("div", {
									className: "relative max-w-xs w-full",
									onClick,
									children: [/* @__PURE__ */ jsx(Mail, { className: "absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" }), /* @__PURE__ */ jsx(Input$1, {
										className: "pl-9 cursor-pointer",
										placeholder: "Email address...",
										readOnly: true
									})]
								})
							},
							{
								id: "input-file",
								label: "File Input",
								code: `<Input type="file" />`,
								component: (onClick) => /* @__PURE__ */ jsx(Input$1, {
									type: "file",
									onClick,
									className: "cursor-pointer max-w-xs"
								})
							},
							{
								id: "input-disabled",
								label: "Disabled Input",
								code: `<Input placeholder="Disabled..." disabled />`,
								component: (onClick) => /* @__PURE__ */ jsx(Input$1, {
									placeholder: "Disabled...",
									disabled: true,
									onClick,
									className: "max-w-xs"
								})
							}
						]
					},
					{
						title: "Switches & Checkboxes",
						variants: [
							{
								id: "switch-checked",
								label: "Switch (Active)",
								code: `<Switch defaultChecked />`,
								component: (onClick) => /* @__PURE__ */ jsxs("div", {
									className: "flex items-center gap-2 cursor-pointer",
									onClick,
									children: [/* @__PURE__ */ jsx(Switch$1, {
										defaultChecked: true,
										readOnly: true
									}), /* @__PURE__ */ jsx("span", {
										className: "text-xs font-medium",
										children: "Notifications On"
									})]
								})
							},
							{
								id: "switch-off",
								label: "Switch (Off)",
								code: `<Switch />`,
								component: (onClick) => /* @__PURE__ */ jsxs("div", {
									className: "flex items-center gap-2 cursor-pointer",
									onClick,
									children: [/* @__PURE__ */ jsx(Switch$1, { readOnly: true }), /* @__PURE__ */ jsx("span", {
										className: "text-xs font-medium",
										children: "Notifications Off"
									})]
								})
							},
							{
								id: "checkbox-checked",
								label: "Checkbox (Checked)",
								code: `<Checkbox defaultChecked />`,
								component: (onClick) => /* @__PURE__ */ jsxs("div", {
									className: "flex items-center gap-2 cursor-pointer",
									onClick,
									children: [/* @__PURE__ */ jsx(Checkbox$1, {
										defaultChecked: true,
										readOnly: true
									}), /* @__PURE__ */ jsx("span", {
										className: "text-xs font-medium",
										children: "Accept terms"
									})]
								})
							}
						]
					},
					{
						title: "Alerts & Status",
						variants: [{
							id: "alert-default",
							label: "Default Alert",
							code: `<Alert><AlertTitle>Update Available</AlertTitle><AlertDescription>A new software version is ready.</AlertDescription></Alert>`,
							component: (onClick) => /* @__PURE__ */ jsxs(Alert, {
								className: "cursor-pointer max-w-sm",
								onClick,
								children: [
									/* @__PURE__ */ jsx(Bell, { className: "h-4 w-4" }),
									/* @__PURE__ */ jsx(AlertTitle, {
										className: "text-xs font-semibold",
										children: "Update Available"
									}),
									/* @__PURE__ */ jsx(AlertDescription, {
										className: "text-xs text-muted-foreground",
										children: "Click to copy code."
									})
								]
							})
						}, {
							id: "alert-destructive",
							label: "Destructive Alert",
							code: `<Alert variant="destructive"><AlertTitle>Database Connection Failed</AlertTitle></Alert>`,
							component: (onClick) => /* @__PURE__ */ jsxs(Alert, {
								variant: "destructive",
								className: "cursor-pointer max-w-sm",
								onClick,
								children: [
									/* @__PURE__ */ jsx(AlertTriangle, { className: "h-4 w-4" }),
									/* @__PURE__ */ jsx(AlertTitle, {
										className: "text-xs font-semibold",
										children: "System Failure"
									}),
									/* @__PURE__ */ jsx(AlertDescription, {
										className: "text-xs",
										children: "Unable to establish connection to cluster."
									})
								]
							})
						}]
					}
				].map((section) => {
					const filteredVariants = section.variants.filter((v) => v.label.toLowerCase().includes(search.toLowerCase()));
					if (filteredVariants.length === 0) return null;
					return /* @__PURE__ */ jsxs("div", {
						className: "space-y-4",
						children: [/* @__PURE__ */ jsx("h2", {
							className: "text-xl font-bold border-b pb-2 text-foreground",
							children: section.title
						}), /* @__PURE__ */ jsx("div", {
							className: "flex flex-wrap items-center gap-4 pt-2",
							children: filteredVariants.map((v) => /* @__PURE__ */ jsxs("div", {
								className: "flex flex-col items-start gap-1.5 p-2 rounded-lg hover:bg-muted/40 transition-colors",
								children: [/* @__PURE__ */ jsx("span", {
									className: "text-[10px] font-semibold text-muted-foreground tracking-wide uppercase",
									children: v.label
								}), /* @__PURE__ */ jsx("div", { children: v.component(() => handleVariantClick(v.label, v.code)) })]
							}, v.id))
						})]
					}, section.title);
				})
			})
		]
	});
});
//#endregion
//#region app/routes/businesses/page.tsx
var page_exports = /* @__PURE__ */ __exportAll({ default: () => page_default });
var formSchema = z.object({
	nom: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
	slogan: z.string().optional(),
	website: z.string().url("Veuillez entrer une URL valide (ex: https://example.com)").or(z.literal("")),
	description: z.string().min(10, "La description doit faire au moins 10 caractères").max(500, "La description ne doit pas dépasser 500 caractères")
});
var page_default = UNSAFE_withComponentProps(function BusinessForm() {
	const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm({
		resolver: zodResolver(formSchema),
		defaultValues: {
			nom: "",
			slogan: "",
			website: "",
			description: ""
		}
	});
	const onSubmit = async (data) => {
		const savePromise = new Promise((resolve) => setTimeout(resolve, 1500));
		toast.promise(savePromise, {
			loading: "Enregistrement en cours...",
			success: () => {
				reset();
				return "Informations enregistrées avec succès !";
			},
			error: "Une erreur est survenue."
		});
	};
	return /* @__PURE__ */ jsxs("form", {
		onSubmit: handleSubmit(onSubmit),
		className: "max-w-lg space-y-5 rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950",
		children: [
			/* @__PURE__ */ jsx("h2", {
				className: "text-xl font-semibold text-slate-900 dark:text-slate-100",
				children: "Informations de l'entreprise"
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "space-y-1",
				children: [
					/* @__PURE__ */ jsxs("label", {
						htmlFor: "nom",
						className: "text-sm font-medium text-slate-700 dark:text-slate-300",
						children: ["Nom ", /* @__PURE__ */ jsx("span", {
							className: "text-red-500",
							children: "*"
						})]
					}),
					/* @__PURE__ */ jsx("input", {
						id: "nom",
						type: "text",
						placeholder: "Ex: Ratel Xpress",
						...register("nom"),
						className: "w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900 dark:border-slate-700 dark:text-slate-100 dark:focus:ring-slate-300"
					}),
					errors.nom && /* @__PURE__ */ jsx("p", {
						className: "text-xs text-red-500",
						children: errors.nom.message
					})
				]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "space-y-1",
				children: [
					/* @__PURE__ */ jsx("label", {
						htmlFor: "slogan",
						className: "text-sm font-medium text-slate-700 dark:text-slate-300",
						children: "Slogan"
					}),
					/* @__PURE__ */ jsx("input", {
						id: "slogan",
						type: "text",
						placeholder: "Ex: L'innovation à votre portée",
						...register("slogan"),
						className: "w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900 dark:border-slate-700 dark:text-slate-100 dark:focus:ring-slate-300"
					}),
					errors.slogan && /* @__PURE__ */ jsx("p", {
						className: "text-xs text-red-500",
						children: errors.slogan.message
					})
				]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "space-y-1",
				children: [
					/* @__PURE__ */ jsx("label", {
						htmlFor: "website",
						className: "text-sm font-medium text-slate-700 dark:text-slate-300",
						children: "Site Web"
					}),
					/* @__PURE__ */ jsx("input", {
						id: "website",
						type: "url",
						placeholder: "https://example.com",
						...register("website"),
						className: "w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900 dark:border-slate-700 dark:text-slate-100 dark:focus:ring-slate-300"
					}),
					errors.website && /* @__PURE__ */ jsx("p", {
						className: "text-xs text-red-500",
						children: errors.website.message
					})
				]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "space-y-1",
				children: [
					/* @__PURE__ */ jsxs("label", {
						htmlFor: "description",
						className: "text-sm font-medium text-slate-700 dark:text-slate-300",
						children: ["Description ", /* @__PURE__ */ jsx("span", {
							className: "text-red-500",
							children: "*"
						})]
					}),
					/* @__PURE__ */ jsx("textarea", {
						id: "description",
						rows: 4,
						placeholder: "Présentez votre activité en quelques mots...",
						...register("description"),
						className: "w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900 dark:border-slate-700 dark:text-slate-100 dark:focus:ring-slate-300"
					}),
					errors.description && /* @__PURE__ */ jsx("p", {
						className: "text-xs text-red-500",
						children: errors.description.message
					})
				]
			}),
			/* @__PURE__ */ jsx("button", {
				type: "submit",
				disabled: isSubmitting,
				className: "w-full rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-slate-800 disabled:opacity-50 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-slate-200",
				children: isSubmitting ? "Enregistrement..." : "Enregistrer"
			})
		]
	});
});
//#endregion
//#region app/routes/promotions/promotions.tsx
var promotions_exports = /* @__PURE__ */ __exportAll({
	default: () => promotions_default,
	meta: () => meta$1
});
function meta$1({}) {
	return [{ title: "React App" }, {
		name: "description",
		content: "Welcome to React Router!"
	}];
}
var promotions_default = UNSAFE_withComponentProps(function Promotions() {
	return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("h1", { children: "promotions" }) });
});
//#endregion
//#region app/routes/aides/aides.tsx
var aides_exports = /* @__PURE__ */ __exportAll({
	default: () => aides_default,
	meta: () => meta
});
function meta({}) {
	return [{ title: "My Admin App" }, {
		name: "description",
		content: "Welcome to React Router!"
	}];
}
var aides_default = UNSAFE_withComponentProps(function Aides() {
	return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("h1", { children: "aides" }) });
});
//#endregion
//#region \0virtual:react-router/server-manifest
var server_manifest_default = {
	"entry": {
		"module": "/assets/entry.client-Ba5XIVZ4.js",
		"imports": [
			"/assets/jsx-runtime-B9qScohU.js",
			"/assets/client-AfruLELa.js",
			"/assets/react-dom-C5JLuhBW.js",
			"/assets/errorBoundaries-BYfV-3e4.js"
		],
		"css": []
	},
	"routes": {
		"root": {
			"id": "root",
			"parentId": void 0,
			"path": "",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": true,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": true,
			"module": "/assets/root-DKx7GP0o.js",
			"imports": [
				"/assets/jsx-runtime-B9qScohU.js",
				"/assets/client-AfruLELa.js",
				"/assets/react-dom-C5JLuhBW.js",
				"/assets/errorBoundaries-BYfV-3e4.js",
				"/assets/lib-BiFrAgfg.js",
				"/assets/select-Bok1ZqHb.js",
				"/assets/createLucideIcon-c6PmoYjp.js",
				"/assets/profile-BAFDoaYr.js",
				"/assets/dashboard-RBZ4TE8t.js",
				"/assets/bell-CXEIZ8xs.js",
				"/assets/switch-DqyIKVbV.js",
				"/assets/dist-B8M8I00-.js",
				"/assets/uiComponents-CYPSg6ix.js",
				"/assets/acceuil-CWHMR_xY.js",
				"/assets/home-Dl3bQC4x.js",
				"/assets/notifications-DP9yb1zB.js",
				"/assets/commandes-DcuLfldL.js",
				"/assets/ventes-DgEr2TI5.js",
				"/assets/articles-jq7xbtay.js",
				"/assets/achats-DnRkKTZX.js",
				"/assets/clients-DnRkKTZX.js",
				"/assets/fournisseurs-DiUnUo6K.js",
				"/assets/travailleurs-Xkb3AWdW.js",
				"/assets/caisses-h62d_HgT.js",
				"/assets/businesses-2dJBd141.js",
				"/assets/offres-BJnl1l-4.js",
				"/assets/categories-DvyKWesB.js",
				"/assets/parametres-D8wWqCTH.js",
				"/assets/page-FcQOGv_l.js",
				"/assets/page-BtQhw8dw.js",
				"/assets/welcome-DKSafy7n.js",
				"/assets/button-XM_pXia6.js",
				"/assets/badge-uDQOvEhF.js",
				"/assets/utils-BNR2rReu.js",
				"/assets/DialogTrigger-DJPDLm6Y.js",
				"/assets/dialog-pKQWYl5Q.js",
				"/assets/card-OmR3RLzg.js",
				"/assets/schemas-DgYuqh6l.js",
				"/assets/apis-Cc7GnBxh.js",
				"/assets/zod-0AkiZPTt.js",
				"/assets/checkbox-Cp_6fYYl.js",
				"/assets/dist-BB3ZMYai.js",
				"/assets/alert-CNO8AjTz.js",
				"/assets/triangle-alert-QBPRRFOC.js"
			],
			"css": ["/assets/app-CV0mj40Z.css"],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"routes/home": {
			"id": "routes/home",
			"parentId": "root",
			"path": void 0,
			"index": true,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/home-CQpNoIKP.js",
			"imports": [
				"/assets/home-Dl3bQC4x.js",
				"/assets/jsx-runtime-B9qScohU.js",
				"/assets/lib-BiFrAgfg.js",
				"/assets/button-XM_pXia6.js",
				"/assets/utils-BNR2rReu.js",
				"/assets/dist-B8M8I00-.js",
				"/assets/alert-CNO8AjTz.js",
				"/assets/errorBoundaries-BYfV-3e4.js",
				"/assets/client-AfruLELa.js",
				"/assets/react-dom-C5JLuhBW.js"
			],
			"css": [],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"routes/docs": {
			"id": "routes/docs",
			"parentId": "root",
			"path": "/docs",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/docs-QcLSeuao.js",
			"imports": [
				"/assets/jsx-runtime-B9qScohU.js",
				"/assets/button-XM_pXia6.js",
				"/assets/badge-uDQOvEhF.js",
				"/assets/createLucideIcon-c6PmoYjp.js",
				"/assets/checkbox-Cp_6fYYl.js",
				"/assets/bell-CXEIZ8xs.js",
				"/assets/switch-DqyIKVbV.js",
				"/assets/triangle-alert-QBPRRFOC.js",
				"/assets/alert-CNO8AjTz.js",
				"/assets/utils-BNR2rReu.js",
				"/assets/react-dom-C5JLuhBW.js"
			],
			"css": [],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"auth/sign-in/[[...sign-in]]/page": {
			"id": "auth/sign-in/[[...sign-in]]/page",
			"parentId": "root",
			"path": "/sign-in/*",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/page-CCj51wN2.js",
			"imports": [
				"/assets/page-FcQOGv_l.js",
				"/assets/jsx-runtime-B9qScohU.js",
				"/assets/uiComponents-CYPSg6ix.js",
				"/assets/card-OmR3RLzg.js",
				"/assets/dist-B8M8I00-.js",
				"/assets/client-AfruLELa.js",
				"/assets/react-dom-C5JLuhBW.js",
				"/assets/utils-BNR2rReu.js"
			],
			"css": [],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"auth/sign-up/[[...sign-up]]/page": {
			"id": "auth/sign-up/[[...sign-up]]/page",
			"parentId": "root",
			"path": "/sign-up/*",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/page-B6T5M5C6.js",
			"imports": [
				"/assets/page-BtQhw8dw.js",
				"/assets/jsx-runtime-B9qScohU.js",
				"/assets/uiComponents-CYPSg6ix.js",
				"/assets/card-OmR3RLzg.js",
				"/assets/dist-B8M8I00-.js",
				"/assets/client-AfruLELa.js",
				"/assets/react-dom-C5JLuhBW.js",
				"/assets/utils-BNR2rReu.js"
			],
			"css": [],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"routes/welcome/welcome": {
			"id": "routes/welcome/welcome",
			"parentId": "root",
			"path": "/welcome",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/welcome-C9i0APxp.js",
			"imports": [
				"/assets/welcome-DKSafy7n.js",
				"/assets/jsx-runtime-B9qScohU.js",
				"/assets/lib-BiFrAgfg.js",
				"/assets/button-XM_pXia6.js",
				"/assets/apis-Cc7GnBxh.js",
				"/assets/errorBoundaries-BYfV-3e4.js",
				"/assets/utils-BNR2rReu.js",
				"/assets/dist-B8M8I00-.js",
				"/assets/client-AfruLELa.js",
				"/assets/react-dom-C5JLuhBW.js"
			],
			"css": [],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"routes/acceuil/acceuil": {
			"id": "routes/acceuil/acceuil",
			"parentId": "root",
			"path": "/acceuil",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/acceuil-Cbsk7BSU.js",
			"imports": [
				"/assets/acceuil-CWHMR_xY.js",
				"/assets/jsx-runtime-B9qScohU.js",
				"/assets/lib-BiFrAgfg.js",
				"/assets/errorBoundaries-BYfV-3e4.js"
			],
			"css": [],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"routes/dashboard/dashboard": {
			"id": "routes/dashboard/dashboard",
			"parentId": "root",
			"path": "/dashboard",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/dashboard-BBeBJsGd.js",
			"imports": [
				"/assets/dashboard-RBZ4TE8t.js",
				"/assets/jsx-runtime-B9qScohU.js",
				"/assets/react-dom-C5JLuhBW.js",
				"/assets/button-XM_pXia6.js",
				"/assets/badge-uDQOvEhF.js",
				"/assets/utils-BNR2rReu.js",
				"/assets/select-Bok1ZqHb.js",
				"/assets/createLucideIcon-c6PmoYjp.js",
				"/assets/DialogTrigger-DJPDLm6Y.js",
				"/assets/checkbox-Cp_6fYYl.js",
				"/assets/schemas-DgYuqh6l.js",
				"/assets/dist-BB3ZMYai.js"
			],
			"css": [],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"routes/commandes/commandes": {
			"id": "routes/commandes/commandes",
			"parentId": "root",
			"path": "/commandes",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/commandes-D3FJGtVZ.js",
			"imports": ["/assets/commandes-DcuLfldL.js", "/assets/jsx-runtime-B9qScohU.js"],
			"css": [],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"routes/ventes/ventes": {
			"id": "routes/ventes/ventes",
			"parentId": "root",
			"path": "/ventes",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/ventes-DvfJjmoD.js",
			"imports": ["/assets/ventes-DgEr2TI5.js", "/assets/jsx-runtime-B9qScohU.js"],
			"css": [],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"routes/businesses/page": {
			"id": "routes/businesses/page",
			"parentId": "root",
			"path": "/businesses",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/page-C1jsj2IC.js",
			"imports": [
				"/assets/jsx-runtime-B9qScohU.js",
				"/assets/schemas-DgYuqh6l.js",
				"/assets/zod-0AkiZPTt.js",
				"/assets/dist-BB3ZMYai.js",
				"/assets/react-dom-C5JLuhBW.js"
			],
			"css": [],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"routes/profile/profile": {
			"id": "routes/profile/profile",
			"parentId": "root",
			"path": "/profile",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/profile-DDzChUb4.js",
			"imports": [
				"/assets/profile-BAFDoaYr.js",
				"/assets/jsx-runtime-B9qScohU.js",
				"/assets/react-dom-C5JLuhBW.js",
				"/assets/button-XM_pXia6.js",
				"/assets/badge-uDQOvEhF.js",
				"/assets/utils-BNR2rReu.js",
				"/assets/select-Bok1ZqHb.js",
				"/assets/createLucideIcon-c6PmoYjp.js",
				"/assets/DialogTrigger-DJPDLm6Y.js",
				"/assets/dialog-pKQWYl5Q.js",
				"/assets/switch-DqyIKVbV.js",
				"/assets/dist-B8M8I00-.js",
				"/assets/card-OmR3RLzg.js",
				"/assets/schemas-DgYuqh6l.js",
				"/assets/apis-Cc7GnBxh.js",
				"/assets/zod-0AkiZPTt.js",
				"/assets/client-AfruLELa.js"
			],
			"css": [],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"routes/notifications/notifications": {
			"id": "routes/notifications/notifications",
			"parentId": "root",
			"path": "/notifications",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/notifications-DBMjVEE_.js",
			"imports": ["/assets/notifications-DP9yb1zB.js", "/assets/jsx-runtime-B9qScohU.js"],
			"css": [],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"routes/achats/achats": {
			"id": "routes/achats/achats",
			"parentId": "root",
			"path": "/achats",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/achats-BAEqAQG5.js",
			"imports": ["/assets/achats-DnRkKTZX.js", "/assets/jsx-runtime-B9qScohU.js"],
			"css": [],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"routes/travailleurs/travailleurs": {
			"id": "routes/travailleurs/travailleurs",
			"parentId": "root",
			"path": "/travailleurs",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/travailleurs-DNxU9gz-.js",
			"imports": ["/assets/travailleurs-Xkb3AWdW.js", "/assets/jsx-runtime-B9qScohU.js"],
			"css": [],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"routes/clients/clients": {
			"id": "routes/clients/clients",
			"parentId": "root",
			"path": "/clients",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/clients-BxNmyNq-.js",
			"imports": ["/assets/clients-DnRkKTZX.js", "/assets/jsx-runtime-B9qScohU.js"],
			"css": [],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"routes/fournisseurs/fournisseurs": {
			"id": "routes/fournisseurs/fournisseurs",
			"parentId": "root",
			"path": "/fournisseurs",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/fournisseurs-gU-yQuwH.js",
			"imports": ["/assets/fournisseurs-DiUnUo6K.js", "/assets/jsx-runtime-B9qScohU.js"],
			"css": [],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"routes/articles/articles": {
			"id": "routes/articles/articles",
			"parentId": "root",
			"path": "/articles",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/articles-DjAwMJFX.js",
			"imports": ["/assets/articles-jq7xbtay.js", "/assets/jsx-runtime-B9qScohU.js"],
			"css": [],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"routes/promotions/promotions": {
			"id": "routes/promotions/promotions",
			"parentId": "root",
			"path": "/promotions",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/promotions-ChSvTY8y.js",
			"imports": ["/assets/jsx-runtime-B9qScohU.js"],
			"css": [],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"routes/caisses/caisses": {
			"id": "routes/caisses/caisses",
			"parentId": "root",
			"path": "/caisses",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/caisses-DLBzN9hw.js",
			"imports": ["/assets/caisses-h62d_HgT.js", "/assets/jsx-runtime-B9qScohU.js"],
			"css": [],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"routes/aides/aides": {
			"id": "routes/aides/aides",
			"parentId": "root",
			"path": "/aides",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/aides-DOGTjHxq.js",
			"imports": ["/assets/jsx-runtime-B9qScohU.js"],
			"css": [],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"routes/parametres/parametres": {
			"id": "routes/parametres/parametres",
			"parentId": "root",
			"path": "/parametres",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/parametres-fiVjmzwh.js",
			"imports": [
				"/assets/parametres-D8wWqCTH.js",
				"/assets/jsx-runtime-B9qScohU.js",
				"/assets/button-XM_pXia6.js",
				"/assets/dialog-pKQWYl5Q.js",
				"/assets/triangle-alert-QBPRRFOC.js",
				"/assets/card-OmR3RLzg.js",
				"/assets/apis-Cc7GnBxh.js",
				"/assets/utils-BNR2rReu.js",
				"/assets/createLucideIcon-c6PmoYjp.js",
				"/assets/DialogTrigger-DJPDLm6Y.js",
				"/assets/react-dom-C5JLuhBW.js",
				"/assets/dist-B8M8I00-.js",
				"/assets/client-AfruLELa.js"
			],
			"css": [],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"routes/admin/businesses": {
			"id": "routes/admin/businesses",
			"parentId": "root",
			"path": "/admin/businesses",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/businesses-9otHEDYh.js",
			"imports": ["/assets/businesses-2dJBd141.js", "/assets/jsx-runtime-B9qScohU.js"],
			"css": [],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"routes/admin/offres": {
			"id": "routes/admin/offres",
			"parentId": "root",
			"path": "/admin/offres",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/offres-BpyTdcIy.js",
			"imports": ["/assets/offres-BJnl1l-4.js", "/assets/jsx-runtime-B9qScohU.js"],
			"css": [],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"routes/admin/categories": {
			"id": "routes/admin/categories",
			"parentId": "root",
			"path": "/admin/categories",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/categories-Bi6fgvsA.js",
			"imports": ["/assets/categories-DvyKWesB.js", "/assets/jsx-runtime-B9qScohU.js"],
			"css": [],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		}
	},
	"url": "/assets/manifest-c974ae1b.js",
	"version": "c974ae1b",
	"sri": void 0
};
//#endregion
//#region \0virtual:react-router/server-build
var assetsBuildDirectory = "build\\client";
var basename = "/";
var future = {
	"unstable_enableNodeReadableStream": false,
	"unstable_optimizeDeps": false
};
var ssr = true;
var isSpaMode = false;
var prerender = [];
var routeDiscovery = {
	"mode": "lazy",
	"manifestPath": "/__manifest"
};
var publicPath = "/";
var entry = { module: entry_server_node_exports };
var routes = {
	"root": {
		id: "root",
		parentId: void 0,
		path: "",
		index: void 0,
		caseSensitive: void 0,
		module: root_exports
	},
	"routes/home": {
		id: "routes/home",
		parentId: "root",
		path: void 0,
		index: true,
		caseSensitive: void 0,
		module: home_exports
	},
	"routes/docs": {
		id: "routes/docs",
		parentId: "root",
		path: "/docs",
		index: void 0,
		caseSensitive: void 0,
		module: docs_exports
	},
	"auth/sign-in/[[...sign-in]]/page": {
		id: "auth/sign-in/[[...sign-in]]/page",
		parentId: "root",
		path: "/sign-in/*",
		index: void 0,
		caseSensitive: void 0,
		module: page_exports$2
	},
	"auth/sign-up/[[...sign-up]]/page": {
		id: "auth/sign-up/[[...sign-up]]/page",
		parentId: "root",
		path: "/sign-up/*",
		index: void 0,
		caseSensitive: void 0,
		module: page_exports$1
	},
	"routes/welcome/welcome": {
		id: "routes/welcome/welcome",
		parentId: "root",
		path: "/welcome",
		index: void 0,
		caseSensitive: void 0,
		module: welcome_exports
	},
	"routes/acceuil/acceuil": {
		id: "routes/acceuil/acceuil",
		parentId: "root",
		path: "/acceuil",
		index: void 0,
		caseSensitive: void 0,
		module: acceuil_exports
	},
	"routes/dashboard/dashboard": {
		id: "routes/dashboard/dashboard",
		parentId: "root",
		path: "/dashboard",
		index: void 0,
		caseSensitive: void 0,
		module: dashboard_exports
	},
	"routes/commandes/commandes": {
		id: "routes/commandes/commandes",
		parentId: "root",
		path: "/commandes",
		index: void 0,
		caseSensitive: void 0,
		module: commandes_exports
	},
	"routes/ventes/ventes": {
		id: "routes/ventes/ventes",
		parentId: "root",
		path: "/ventes",
		index: void 0,
		caseSensitive: void 0,
		module: ventes_exports
	},
	"routes/businesses/page": {
		id: "routes/businesses/page",
		parentId: "root",
		path: "/businesses",
		index: void 0,
		caseSensitive: void 0,
		module: page_exports
	},
	"routes/profile/profile": {
		id: "routes/profile/profile",
		parentId: "root",
		path: "/profile",
		index: void 0,
		caseSensitive: void 0,
		module: profile_exports
	},
	"routes/notifications/notifications": {
		id: "routes/notifications/notifications",
		parentId: "root",
		path: "/notifications",
		index: void 0,
		caseSensitive: void 0,
		module: notifications_exports
	},
	"routes/achats/achats": {
		id: "routes/achats/achats",
		parentId: "root",
		path: "/achats",
		index: void 0,
		caseSensitive: void 0,
		module: achats_exports
	},
	"routes/travailleurs/travailleurs": {
		id: "routes/travailleurs/travailleurs",
		parentId: "root",
		path: "/travailleurs",
		index: void 0,
		caseSensitive: void 0,
		module: travailleurs_exports
	},
	"routes/clients/clients": {
		id: "routes/clients/clients",
		parentId: "root",
		path: "/clients",
		index: void 0,
		caseSensitive: void 0,
		module: clients_exports
	},
	"routes/fournisseurs/fournisseurs": {
		id: "routes/fournisseurs/fournisseurs",
		parentId: "root",
		path: "/fournisseurs",
		index: void 0,
		caseSensitive: void 0,
		module: fournisseurs_exports
	},
	"routes/articles/articles": {
		id: "routes/articles/articles",
		parentId: "root",
		path: "/articles",
		index: void 0,
		caseSensitive: void 0,
		module: articles_exports
	},
	"routes/promotions/promotions": {
		id: "routes/promotions/promotions",
		parentId: "root",
		path: "/promotions",
		index: void 0,
		caseSensitive: void 0,
		module: promotions_exports
	},
	"routes/caisses/caisses": {
		id: "routes/caisses/caisses",
		parentId: "root",
		path: "/caisses",
		index: void 0,
		caseSensitive: void 0,
		module: caisses_exports
	},
	"routes/aides/aides": {
		id: "routes/aides/aides",
		parentId: "root",
		path: "/aides",
		index: void 0,
		caseSensitive: void 0,
		module: aides_exports
	},
	"routes/parametres/parametres": {
		id: "routes/parametres/parametres",
		parentId: "root",
		path: "/parametres",
		index: void 0,
		caseSensitive: void 0,
		module: parametres_exports
	},
	"routes/admin/businesses": {
		id: "routes/admin/businesses",
		parentId: "root",
		path: "/admin/businesses",
		index: void 0,
		caseSensitive: void 0,
		module: businesses_exports
	},
	"routes/admin/offres": {
		id: "routes/admin/offres",
		parentId: "root",
		path: "/admin/offres",
		index: void 0,
		caseSensitive: void 0,
		module: offres_exports
	},
	"routes/admin/categories": {
		id: "routes/admin/categories",
		parentId: "root",
		path: "/admin/categories",
		index: void 0,
		caseSensitive: void 0,
		module: categories_exports
	}
};
var allowedActionOrigins = false;
//#endregion
export { allowedActionOrigins, server_manifest_default as assets, assetsBuildDirectory, basename, entry, future, isSpaMode, prerender, publicPath, routeDiscovery, routes, ssr };

import { t as __exportAll } from "./assets/rolldown-runtime-D7D4PA-g.js";
import { t as entry_server_node_exports } from "./assets/router-DKeukR6m.js";
import { _ as DropdownMenuItem, a as TabsList, b as DropdownMenuTrigger, c as SelectContent, d as SelectTrigger, f as SelectValue, g as DropdownMenuGroup, h as DropdownMenuContent, i as TabsContent, l as SelectGroup, m as DropdownMenu, n as dashboard_exports, o as TabsTrigger, p as Checkbox, r as Tabs, s as Select, t as dashboard_default, u as SelectItem, v as DropdownMenuLabel, x as useIsMobile, y as DropdownMenuSeparator } from "./assets/dashboard-CQMOTT75.js";
import { $ as listerCategories, At as TableCell, B as creerFournisseurAvecLogo, Bt as Input, C as FieldError, Ct as supprimerFournisseur, D as FieldSet, Dt as validerInvitationFournisseur, E as FieldLegend, Et as validerInvitationClient, F as changerStatusAchat, Ft as Badge, G as lireAgent, Gt as items, H as inviterUtilisateursCommeAgents, Ht as API, I as changerStatusPromotion, It as BusinessProvider, J as lireFournisseur, K as lireArticle, Kt as tronquerAvecEllipses, L as creerArticleAvecImages, Lt as useBusiness, M as activerAgent, Mt as TableHeader, N as bloquerAgent, Nt as TableRow, O as useListe, Ot as Table, P as caisseParDefaut, Pt as Label, Q as listerCaisses, R as creerCaisse, Rt as Skeleton, S as FieldDescription, St as supprimerClient, T as FieldLabel, Tt as validerInvitationAgent, U as inviterUtilisateursCommeClients, Ut as champsRequis, V as creerPromotion, Vt as Button, W as inviterUtilisateursCommeFournisseurs, Wt as cn$1, X as listerAgents, Y as listerAchats, Z as listerArticles, _ as DialogFooter, _t as renvoyerInvitationFournisseur, a as businesses_default, at as listerUtilisateursAgentDisponibles, b as DialogTrigger, bt as supprimerArticle, c as BusinessSchema, ct as modifierArticleAvecImages, d as FournisseurSchema, dt as modifierClientAvecLogo, et as listerClients, f as PromotionSchema, ft as modifierFournisseur, g as DialogDescription, gt as renvoyerInvitationClient, h as DialogContent, ht as renvoyerInvitationAgent, i as offres_exports, it as listerPromotions, jt as TableHead, k as PageRessource, kt as TableBody, l as CaisseSchema, lt as modifierCaisse, m as DialogClose, mt as modifierModeAffichageArticles, n as categories_exports, nt as listerFournisseurs, o as businesses_exports, ot as listerUtilisateursClientDisponibles, p as Dialog$1, pt as modifierFournisseurAvecLogo, q as lireClient, r as offres_default, rt as listerJaimes, s as AdresseSchema, st as listerUtilisateursFournisseurDisponibles, t as categories_default, tt as listerDevises, u as ContactSchema, ut as modifierClient, v as DialogHeader, vt as supprimerAchat, w as FieldGroup, wt as supprimerPromotion, x as Field, xt as supprimerCaisse, y as DialogTitle, yt as supprimerAgent, z as creerClientAvecLogo, zt as Separator } from "./assets/admin-BBWRalwY.js";
import { Link, Links, Meta, Navigate, Outlet, Route, Routes, Scripts, ScrollRestoration, UNSAFE_withComponentProps, UNSAFE_withErrorBoundaryProps, isRouteErrorResponse, useLocation, useNavigate, useParams } from "react-router";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import * as React$1 from "react";
import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { mergeProps } from "@base-ui/react/merge-props";
import { useRender } from "@base-ui/react/use-render";
import { cva } from "class-variance-authority";
import "cn";
import { Dialog } from "@base-ui/react/dialog";
import { AlertTriangle, AlertTriangleIcon, ArrowLeft, ArrowRight, BadgePercent, BanIcon, Bell, BellIcon, Building2, CalendarArrowUp, CalendarDays, ChartPie, Check, CheckCircle2, CheckCircle2Icon, CheckIcon, ChevronDownIcon, CircleDollarSign, CirclePlus, CircleUserRoundIcon, CommandIcon, EllipsisVerticalIcon, FileText, Gauge, Grid2X2, Heart, Home, ImagePlus, ImagePlusIcon, Landmark, List, ListCheck, Loader2, Loader2Icon, LogOutIcon, Mail, MailIcon, MapPin, MapPinIcon, MessageSquare, MoreHorizontalIcon, PanelLeftIcon, Pencil, PencilIcon, Phone, PhoneIcon, Plus, PlusIcon, Search, SearchIcon, Send, SendIcon, SendToBack, SettingsIcon, ShoppingCart, Star, Trash2, Trash2Icon, Upload, UploadIcon, UserPlusIcon, UserRoundCog, UserRoundIcon, Users, VolumeOffIcon, X, XIcon } from "lucide-react";
import { Tooltip } from "@base-ui/react/tooltip";
import { Avatar } from "@base-ui/react/avatar";
import { ClerkProvider, Show, SignIn, SignOutButton, SignUp, UserButton, getToken, useAuth, useUser } from "@clerk/react-router";
import { toast } from "sonner";
import { clerkMiddleware, rootAuthLoader } from "@clerk/react-router/server";
import { frFR } from "@clerk/localizations/fr-FR";
import { z } from "zod";
import { AlertDialog } from "@base-ui/react/alert-dialog";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Toast } from "@base-ui/react/toast";
import { AnimatePresence, motion } from "motion/react";
import { OTPInput, OTPInputContext } from "input-otp";
import { Switch } from "@base-ui/react/switch";
import { Collapsible } from "@base-ui/react/collapsible";
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
			render: /* @__PURE__ */ jsx(Button, {
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
	return /* @__PURE__ */ jsxs(Button, {
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
function SidebarGroupLabel({ className, render, ...props }) {
	return useRender({
		defaultTagName: "div",
		props: mergeProps({ className: cn$1("flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium text-sidebar-foreground/70 ring-sidebar-ring outline-hidden transition-[margin,opacity] duration-200 ease-linear group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0 focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0", className) }, props),
		render,
		state: {
			slot: "sidebar-group-label",
			sidebar: "group-label"
		}
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
function Items$1({ items }) {
	const location = useLocation();
	return /* @__PURE__ */ jsx(SidebarMenu, { children: items.map((item) => {
		const isActive = location.pathname === item.url;
		return /* @__PURE__ */ jsx(SidebarMenuItem, { children: /* @__PURE__ */ jsxs(SidebarMenuButton, {
			isActive,
			render: /* @__PURE__ */ jsx(Link, { to: item.url }),
			tooltip: item.title,
			className: `transition-colors ${isActive ? "bg-primary! text-white!" : "hover:bg-muted"}`,
			children: [item.icon, /* @__PURE__ */ jsx("span", { children: item.title })]
		}) }, item.title);
	}) });
}
function NavMain({ items, groupes }) {
	if (groupes) return /* @__PURE__ */ jsx(Fragment, { children: groupes.map((groupe) => /* @__PURE__ */ jsxs(SidebarGroup, { children: [/* @__PURE__ */ jsx(SidebarGroupLabel, { children: groupe.label }), /* @__PURE__ */ jsx(SidebarGroupContent, {
		className: "flex flex-col",
		children: /* @__PURE__ */ jsx(Items$1, { items: groupe.items })
	})] }, groupe.label)) });
	return /* @__PURE__ */ jsx(SidebarGroup, { children: /* @__PURE__ */ jsx(SidebarGroupContent, {
		className: "flex flex-col",
		children: /* @__PURE__ */ jsx(Items$1, { items: items ?? [] })
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
	groupeUtilisateur: {
		label: "Utilisateur",
		items: [
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
			}
		]
	},
	lienCreationBusiness: {
		title: "Créer un business",
		url: "/businesses/creer",
		icon: /* @__PURE__ */ jsx(ChartPie, {})
	},
	/** Affiché seulement à qui possède déjà un business. */
	groupeBusiness: {
		label: "Business",
		items: [
			{
				title: "Gestion des articles",
				url: "/articles",
				icon: /* @__PURE__ */ jsx(CirclePlus, {})
			},
			{
				title: "Promotions",
				url: "/promotions",
				icon: /* @__PURE__ */ jsx(BadgePercent, {})
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
			}
		]
	},
	/** Réservé aux rôles ADMIN et MANAGER. */
	groupeAdmin: {
		label: "Admin",
		items: [
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
	}
};
function AppSidebar({ ...props }) {
	const { user, isLoaded } = useUser();
	const { aUnBusiness, estAdmin, pret } = useBusiness();
	const groupes = [
		{
			...data.groupeUtilisateur,
			items: [...data.groupeUtilisateur.items, ...pret && !aUnBusiness ? [data.lienCreationBusiness] : []]
		},
		...pret && aUnBusiness ? [data.groupeBusiness] : [],
		...pret && estAdmin ? [data.groupeAdmin] : []
	];
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
			/* @__PURE__ */ jsx(SidebarContent, { children: /* @__PURE__ */ jsx(NavMain, { groupes }) }),
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
				isLoaded
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
				/* @__PURE__ */ jsx(Separator, {
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
var app_default = "/assets/app-CIjMoGwK.css";
//#endregion
//#region app/routes/acceuil/acceuil.tsx
var acceuil_exports = /* @__PURE__ */ __exportAll({
	default: () => acceuil_default,
	meta: () => meta$9
});
function meta$9({}) {
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
	return /* @__PURE__ */ jsxs("div", { children: [
		/* @__PURE__ */ jsx("header", {
			className: "flex items-center justify-center py-8 px-4",
			children: /* @__PURE__ */ jsx(Show, {
				when: "signed-in",
				children: /* @__PURE__ */ jsx(UserButton, {})
			})
		}),
		/* @__PURE__ */ jsx("h1", { children: "Welcome back" }),
		/* @__PURE__ */ jsx("br", {}),
		/* @__PURE__ */ jsx(Link, {
			to: "/acceuil",
			children: "Acceuil"
		}),
		/* @__PURE__ */ jsx("br", {}),
		/* @__PURE__ */ jsxs(Show, {
			when: "signed-out",
			children: [
				/* @__PURE__ */ jsx("br", {}),
				/* @__PURE__ */ jsx(Link, {
					to: "/sign-in",
					children: "login"
				}),
				/* @__PURE__ */ jsx("br", {}),
				/* @__PURE__ */ jsx("br", {}),
				/* @__PURE__ */ jsx(Link, {
					to: "/sign-up",
					children: "New account up"
				}),
				/* @__PURE__ */ jsx("br", {})
			]
		})
	] });
});
//#endregion
//#region app/routes/notifications/notifications.tsx
var notifications_exports = /* @__PURE__ */ __exportAll({
	default: () => notifications_default,
	meta: () => meta$8
});
function meta$8({}) {
	return [{ title: "My Admin App" }, {
		name: "description",
		content: "Welcome to React Router!"
	}];
}
var notifications_default = UNSAFE_withComponentProps(function Notifications() {
	return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("h1", { children: "aides" }) });
});
//#endregion
//#region app/routes/commandes/commandes.tsx
var commandes_exports = /* @__PURE__ */ __exportAll({
	default: () => commandes_default,
	meta: () => meta$7
});
function meta$7({}) {
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
	meta: () => meta$6
});
function meta$6({}) {
	return [{ title: "React App" }, {
		name: "description",
		content: "Welcome to React Router!"
	}];
}
var ventes_default = UNSAFE_withComponentProps(function Ventes() {
	return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("h1", { children: "historique des ventes" }) });
});
//#endregion
//#region app/components/ui/native-select.tsx
function NativeSelect({ className, size = "default", ...props }) {
	return /* @__PURE__ */ jsxs("div", {
		className: cn$1("group/native-select relative w-fit has-[select:disabled]:opacity-50", className),
		"data-slot": "native-select-wrapper",
		"data-size": size,
		children: [/* @__PURE__ */ jsx("select", {
			"data-slot": "native-select",
			"data-size": size,
			className: "h-8 w-full min-w-0 appearance-none rounded-lg border border-input bg-transparent py-1 pr-8 pl-2.5 text-sm transition-colors outline-none select-none selection:bg-primary selection:text-primary-foreground placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:cursor-not-allowed aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 data-[size=sm]:h-7 data-[size=sm]:rounded-[min(var(--radius-md),10px)] data-[size=sm]:py-0.5 dark:bg-input/30 dark:hover:bg-input/50 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40",
			...props
		}), /* @__PURE__ */ jsx(ChevronDownIcon, {
			className: "pointer-events-none absolute top-1/2 right-2.5 size-4 -translate-y-1/2 text-muted-foreground select-none",
			"aria-hidden": "true",
			"data-slot": "native-select-icon"
		})]
	});
}
function NativeSelectOption({ className, ...props }) {
	return /* @__PURE__ */ jsx("option", {
		"data-slot": "native-select-option",
		className: cn$1("bg-[Canvas] text-[CanvasText]", className),
		...props
	});
}
//#endregion
//#region app/components/ui/alert-dialog.tsx
function AlertDialog$1({ ...props }) {
	return /* @__PURE__ */ jsx(AlertDialog.Root, {
		"data-slot": "alert-dialog",
		...props
	});
}
function AlertDialogPortal({ ...props }) {
	return /* @__PURE__ */ jsx(AlertDialog.Portal, {
		"data-slot": "alert-dialog-portal",
		...props
	});
}
function AlertDialogOverlay({ className, ...props }) {
	return /* @__PURE__ */ jsx(AlertDialog.Backdrop, {
		"data-slot": "alert-dialog-overlay",
		className: cn$1("fixed inset-0 isolate z-50 bg-black/10 duration-100 supports-backdrop-filter:backdrop-blur-xs data-open:animate-in data-open:fade-in-0 data-closed:animate-out data-closed:fade-out-0", className),
		...props
	});
}
function AlertDialogContent({ className, size = "default", ...props }) {
	return /* @__PURE__ */ jsxs(AlertDialogPortal, { children: [/* @__PURE__ */ jsx(AlertDialogOverlay, {}), /* @__PURE__ */ jsx(AlertDialog.Popup, {
		"data-slot": "alert-dialog-content",
		"data-size": size,
		className: cn$1("group/alert-dialog-content fixed top-1/2 left-1/2 z-50 grid w-full -translate-x-1/2 -translate-y-1/2 gap-4 rounded-xl bg-popover p-4 text-popover-foreground ring-1 ring-foreground/10 duration-100 outline-none data-[size=default]:max-w-xs data-[size=sm]:max-w-xs data-[size=default]:sm:max-w-sm data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95", className),
		...props
	})] });
}
function AlertDialogHeader({ className, ...props }) {
	return /* @__PURE__ */ jsx("div", {
		"data-slot": "alert-dialog-header",
		className: cn$1("grid grid-rows-[auto_1fr] place-items-center gap-1.5 text-center has-data-[slot=alert-dialog-media]:grid-rows-[auto_auto_1fr] has-data-[slot=alert-dialog-media]:gap-x-4 sm:group-data-[size=default]/alert-dialog-content:place-items-start sm:group-data-[size=default]/alert-dialog-content:text-left sm:group-data-[size=default]/alert-dialog-content:has-data-[slot=alert-dialog-media]:grid-rows-[auto_1fr]", className),
		...props
	});
}
function AlertDialogFooter({ className, ...props }) {
	return /* @__PURE__ */ jsx("div", {
		"data-slot": "alert-dialog-footer",
		className: cn$1("-mx-4 -mb-4 flex flex-col-reverse gap-2 rounded-b-xl border-t bg-muted/50 p-4 group-data-[size=sm]/alert-dialog-content:grid group-data-[size=sm]/alert-dialog-content:grid-cols-2 sm:flex-row sm:justify-end", className),
		...props
	});
}
function AlertDialogTitle({ className, ...props }) {
	return /* @__PURE__ */ jsx(AlertDialog.Title, {
		"data-slot": "alert-dialog-title",
		className: cn$1("font-heading text-base font-medium sm:group-data-[size=default]/alert-dialog-content:group-has-data-[slot=alert-dialog-media]/alert-dialog-content:col-start-2", className),
		...props
	});
}
function AlertDialogDescription({ className, ...props }) {
	return /* @__PURE__ */ jsx(AlertDialog.Description, {
		"data-slot": "alert-dialog-description",
		className: cn$1("text-sm text-balance text-muted-foreground md:text-pretty *:[a]:underline *:[a]:underline-offset-3 *:[a]:hover:text-foreground", className),
		...props
	});
}
function AlertDialogAction({ className, ...props }) {
	return /* @__PURE__ */ jsx(Button, {
		"data-slot": "alert-dialog-action",
		className: cn$1(className),
		...props
	});
}
function AlertDialogCancel({ className, variant = "outline", size = "default", ...props }) {
	return /* @__PURE__ */ jsx(AlertDialog.Close, {
		"data-slot": "alert-dialog-cancel",
		className: cn$1(className),
		render: /* @__PURE__ */ jsx(Button, {
			variant,
			size
		}),
		...props
	});
}
//#endregion
//#region app/routes/articles/articles.tsx
var articles_exports = /* @__PURE__ */ __exportAll({ default: () => articles_default });
var TAILLE_PAGE = 10;
var IMAGE_PAR_DEFAUT$1 = "/images/articles/article-par-defaut.svg";
var articles_default = UNSAFE_withComponentProps(function Articles() {
	const { businessId, user, pret } = useBusiness();
	const [recherche, setRecherche] = useState("");
	const [categorieId, setCategorieId] = useState("");
	const [selection, setSelection] = useState([]);
	const [page, setPage] = useState(0);
	const [suppressionCibles, setSuppressionCibles] = useState([]);
	const [suppressionEnCours, setSuppressionEnCours] = useState(false);
	const [modeAffichage, setModeAffichage] = useState("TABLE");
	const [sauvegardeMode, setSauvegardeMode] = useState(false);
	const chargerArticles = useCallback(() => businessId ? listerArticles(businessId) : Promise.resolve([]), [businessId]);
	const chargerCategories = useCallback(() => businessId ? listerCategories(businessId) : Promise.resolve([]), [businessId]);
	const { donnees: articles, chargement, erreur, recharger } = useListe(chargerArticles, !!businessId);
	const { donnees: categories } = useListe(chargerCategories, !!businessId);
	const articlesFiltres = useMemo(() => {
		const terme = recherche.trim().toLocaleLowerCase("fr");
		return articles.filter((article) => {
			const correspondRecherche = !terme || article.designation.toLocaleLowerCase("fr").includes(terme) || (article.description ?? "").toLocaleLowerCase("fr").includes(terme);
			const correspondCategorie = !categorieId || article.categorieId === categorieId;
			return correspondRecherche && correspondCategorie;
		});
	}, [
		articles,
		categorieId,
		recherche
	]);
	const nombrePages = Math.ceil(articlesFiltres.length / TAILLE_PAGE);
	const pageCourante = Math.min(page, Math.max(0, nombrePages - 1));
	const articlesPage = articlesFiltres.slice(pageCourante * TAILLE_PAGE, (pageCourante + 1) * TAILLE_PAGE);
	const idsPage = articlesPage.map((article) => article.id);
	const tousSelectionnes = idsPage.length > 0 && idsPage.every((articleId) => selection.includes(articleId));
	useEffect(() => {
		setPage(0);
	}, [recherche, categorieId]);
	useEffect(() => {
		if (pret) setModeAffichage(user?.articlesViewMode === "GRID" ? "GRID" : "TABLE");
	}, [pret, user?.articlesViewMode]);
	const changerModeAffichage = async () => {
		if (sauvegardeMode) return;
		const modeSuivant = modeAffichage === "TABLE" ? "GRID" : "TABLE";
		setSauvegardeMode(true);
		try {
			await modifierModeAffichageArticles(modeSuivant);
			setModeAffichage(modeSuivant);
		} catch (cause) {
			toast.error(cause instanceof Error ? cause.message : "Le mode d’affichage n’a pas pu être enregistré.");
		} finally {
			setSauvegardeMode(false);
		}
	};
	const basculerSelection = (articleId) => {
		setSelection((courante) => courante.includes(articleId) ? courante.filter((id) => id !== articleId) : [...courante, articleId]);
	};
	const basculerPage = () => {
		setSelection((courante) => tousSelectionnes ? courante.filter((id) => !idsPage.includes(id)) : [.../* @__PURE__ */ new Set([...courante, ...idsPage])]);
	};
	const ouvrirSuppression = (ids) => {
		setSuppressionCibles(ids);
	};
	const supprimerSelection = async () => {
		if (suppressionCibles.length === 0) return;
		setSuppressionEnCours(true);
		const resultats = await Promise.allSettled(suppressionCibles.map((id) => supprimerArticle(id)));
		const nombreSupprimes = resultats.filter((resultat) => resultat.status === "fulfilled").length;
		const echecs = resultats.filter((resultat) => resultat.status === "rejected");
		await new Promise((resolve) => {
			recharger();
			window.setTimeout(resolve, 0);
		});
		setSelection((courante) => courante.filter((id) => resultats[suppressionCibles.indexOf(id)]?.status !== "fulfilled"));
		if (nombreSupprimes > 0) toast.success(nombreSupprimes === 1 ? "L’article a été supprimé." : `${nombreSupprimes} articles ont été supprimés.`);
		if (echecs.length > 0) {
			const premierEchec = echecs[0].reason;
			toast.error(premierEchec instanceof Error ? `${echecs.length} suppression(s) ont échoué : ${premierEchec.message}` : `${echecs.length} suppression(s) ont échoué.`);
		}
		setSuppressionEnCours(false);
		setSuppressionCibles([]);
	};
	return /* @__PURE__ */ jsxs(PageRessource, {
		titre: "Gestion des articles",
		description: "Le catalogue de votre business.",
		businessRequis: true,
		businessId,
		chargement,
		erreur,
		vide: articles.length === 0,
		messageVide: "Aucun article au catalogue pour le moment.",
		onReessayer: recharger,
		action: /* @__PURE__ */ jsxs(Button, {
			render: /* @__PURE__ */ jsx(Link, { to: "/articles/nouveau" }),
			children: [/* @__PURE__ */ jsx(PlusIcon, { className: "size-4" }), "Nouvel article"]
		}),
		outils: /* @__PURE__ */ jsxs("div", {
			className: "flex flex-wrap items-center gap-3",
			children: [
				/* @__PURE__ */ jsxs("label", {
					className: "relative min-w-[min(100%,18rem)] flex-1",
					children: [/* @__PURE__ */ jsx(Search, { className: "pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" }), /* @__PURE__ */ jsx(Input, {
						value: recherche,
						onChange: (event) => setRecherche(event.currentTarget.value),
						placeholder: "Rechercher un article…",
						"aria-label": "Rechercher un article",
						className: "pl-9"
					})]
				}),
				/* @__PURE__ */ jsxs(NativeSelect, {
					value: categorieId,
					onChange: (event) => setCategorieId(event.currentTarget.value),
					"aria-label": "Filtrer par catégorie",
					className: "w-full sm:w-56",
					children: [/* @__PURE__ */ jsx(NativeSelectOption, {
						value: "",
						children: "Toutes les catégories"
					}), categories.map((categorie) => /* @__PURE__ */ jsx(NativeSelectOption, {
						value: categorie.id,
						children: categorie.nom
					}, categorie.id))]
				}),
				/* @__PURE__ */ jsx(Button, {
					type: "button",
					variant: "outline",
					size: "icon",
					"aria-label": modeAffichage === "TABLE" ? "Afficher les articles en grille" : "Afficher les articles en tableau",
					"aria-pressed": modeAffichage === "GRID",
					onClick: () => void changerModeAffichage(),
					disabled: !pret || sauvegardeMode,
					children: modeAffichage === "TABLE" ? /* @__PURE__ */ jsx(Grid2X2, {}) : /* @__PURE__ */ jsx(List, {})
				}),
				/* @__PURE__ */ jsxs(Button, {
					type: "button",
					variant: "destructive",
					disabled: selection.length === 0,
					onClick: () => ouvrirSuppression(selection),
					children: [
						/* @__PURE__ */ jsx(Trash2, {}),
						" Supprimer (",
						selection.length,
						")"
					]
				})
			]
		}),
		children: [/* @__PURE__ */ jsxs("div", {
			className: "space-y-3",
			children: [modeAffichage === "TABLE" ? /* @__PURE__ */ jsx("div", {
				className: "overflow-hidden rounded-lg border",
				children: /* @__PURE__ */ jsxs(Table, { children: [/* @__PURE__ */ jsx(TableHeader, { children: /* @__PURE__ */ jsxs(TableRow, { children: [
					/* @__PURE__ */ jsx(TableHead, {
						className: "w-10",
						children: /* @__PURE__ */ jsx("input", {
							type: "checkbox",
							"aria-label": "Sélectionner les articles de cette page",
							checked: tousSelectionnes,
							onChange: basculerPage,
							disabled: idsPage.length === 0,
							className: "size-4 bg-transparent accent-primary opacity-70"
						})
					}),
					/* @__PURE__ */ jsx(TableHead, { children: "Image" }),
					/* @__PURE__ */ jsx(TableHead, { children: "Désignation" }),
					/* @__PURE__ */ jsx(TableHead, { children: "Catégorie" }),
					/* @__PURE__ */ jsx(TableHead, {
						className: "text-right",
						children: "PU"
					}),
					/* @__PURE__ */ jsx(TableHead, {
						className: "text-right",
						children: "En stock"
					})
				] }) }), /* @__PURE__ */ jsx(TableBody, { children: articlesPage.length > 0 ? articlesPage.map((article) => {
					const image = (article.images?.find((item) => item.isDefault))?.url || IMAGE_PAR_DEFAUT$1;
					return /* @__PURE__ */ jsxs(TableRow, { children: [
						/* @__PURE__ */ jsx(TableCell, { children: /* @__PURE__ */ jsx("input", {
							type: "checkbox",
							"aria-label": `Sélectionner ${article.designation}`,
							checked: selection.includes(article.id),
							onChange: () => basculerSelection(article.id),
							className: "size-4 bg-transparent accent-primary opacity-70"
						}) }),
						/* @__PURE__ */ jsx(TableCell, { children: /* @__PURE__ */ jsx("img", {
							src: image,
							alt: "",
							className: "size-12 rounded-md border bg-muted object-cover",
							onError: (event) => {
								event.currentTarget.src = IMAGE_PAR_DEFAUT$1;
							}
						}) }),
						/* @__PURE__ */ jsx(TableCell, { children: /* @__PURE__ */ jsx(Link, {
							to: `/articles/${article.id}`,
							className: "font-medium text-primary underline-offset-4 hover:underline",
							children: article.designation
						}) }),
						/* @__PURE__ */ jsx(TableCell, { children: article.categorie?.nom ?? "—" }),
						/* @__PURE__ */ jsxs(TableCell, {
							className: "text-right tabular-nums",
							children: [
								Number(article.pu).toLocaleString("fr-FR"),
								" ",
								/* @__PURE__ */ jsx("span", {
									className: "text-muted-foreground",
									children: article.devise?.symbole ?? ""
								})
							]
						}),
						/* @__PURE__ */ jsx(TableCell, {
							className: "text-right tabular-nums",
							children: article.stocks?.reduce((total, stock) => total + stock.qtteDisponible, 0) || "vide"
						})
					] }, article.id);
				}) : /* @__PURE__ */ jsx(TableRow, { children: /* @__PURE__ */ jsx(TableCell, {
					colSpan: 6,
					className: "h-24 text-center text-muted-foreground",
					children: "Aucun article ne correspond à la recherche."
				}) }) })] })
			}) : /* @__PURE__ */ jsx("div", {
				className: "grid gap-4 sm:grid-cols-2 xl:grid-cols-3",
				children: articlesPage.length > 0 ? articlesPage.map((article) => {
					const image = (article.images?.find((item) => item.isDefault))?.url || IMAGE_PAR_DEFAUT$1;
					const stockDisponible = article.stocks?.reduce((total, stock) => total + stock.qtteDisponible, 0) || 0;
					return /* @__PURE__ */ jsxs("article", {
						className: "relative space-y-3 rounded-lg border p-4",
						children: [
							/* @__PURE__ */ jsx("input", {
								type: "checkbox",
								"aria-label": `Sélectionner ${article.designation}`,
								checked: selection.includes(article.id),
								onChange: () => basculerSelection(article.id),
								className: "absolute right-4 top-4 size-4 bg-transparent accent-primary opacity-70"
							}),
							/* @__PURE__ */ jsx("img", {
								src: image,
								alt: "",
								className: "aspect-[4/3] w-full rounded-md border bg-muted object-cover",
								onError: (event) => {
									event.currentTarget.src = IMAGE_PAR_DEFAUT$1;
								}
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "space-y-2",
								children: [
									/* @__PURE__ */ jsx(Link, {
										to: `/articles/${article.id}`,
										className: "block pr-8 font-medium text-primary underline-offset-4 hover:underline",
										children: article.designation
									}),
									/* @__PURE__ */ jsx("p", {
										className: "text-sm text-muted-foreground",
										children: article.categorie?.nom ?? "—"
									}),
									/* @__PURE__ */ jsxs("p", {
										className: "text-sm tabular-nums",
										children: [
											"PU : ",
											Number(article.pu).toLocaleString("fr-FR"),
											" ",
											/* @__PURE__ */ jsx("span", {
												className: "text-muted-foreground",
												children: article.devise?.symbole ?? ""
											})
										]
									}),
									/* @__PURE__ */ jsxs("p", {
										className: "text-sm",
										children: ["En stock : ", stockDisponible || "vide"]
									})
								]
							})
						]
					}, article.id);
				}) : /* @__PURE__ */ jsx("p", {
					className: "col-span-full py-10 text-center text-muted-foreground",
					children: "Aucun article ne correspond à la recherche."
				})
			}), /* @__PURE__ */ jsxs("nav", {
				"aria-label": "Pagination des articles",
				className: "flex flex-wrap items-center justify-between gap-3",
				children: [/* @__PURE__ */ jsx("p", {
					"aria-live": "polite",
					className: "text-sm text-muted-foreground",
					children: articlesFiltres.length === 0 ? "0 article" : `${pageCourante * TAILLE_PAGE + 1}–${Math.min((pageCourante + 1) * TAILLE_PAGE, articlesFiltres.length)} sur ${articlesFiltres.length}`
				}), /* @__PURE__ */ jsxs("div", {
					className: "flex items-center gap-2",
					children: [
						/* @__PURE__ */ jsx(Button, {
							type: "button",
							variant: "outline",
							size: "sm",
							onClick: () => setPage((courante) => Math.max(0, courante - 1)),
							disabled: pageCourante === 0,
							children: "Précédent"
						}),
						/* @__PURE__ */ jsxs("span", {
							className: "text-sm tabular-nums",
							children: [
								nombrePages === 0 ? 0 : pageCourante + 1,
								" / ",
								nombrePages
							]
						}),
						/* @__PURE__ */ jsx(Button, {
							type: "button",
							variant: "outline",
							size: "sm",
							onClick: () => setPage((courante) => Math.min(nombrePages - 1, courante + 1)),
							disabled: pageCourante >= nombrePages - 1,
							children: "Suivant"
						})
					]
				})]
			})]
		}), /* @__PURE__ */ jsx(AlertDialog$1, {
			open: suppressionCibles.length > 0,
			onOpenChange: (open) => {
				if (!open && !suppressionEnCours) setSuppressionCibles([]);
			},
			children: /* @__PURE__ */ jsxs(AlertDialogContent, { children: [/* @__PURE__ */ jsxs(AlertDialogHeader, { children: [/* @__PURE__ */ jsxs(AlertDialogTitle, { children: [
				"Supprimer ",
				suppressionCibles.length === 1 ? "cet article" : "ces articles",
				" ?"
			] }), /* @__PURE__ */ jsx(AlertDialogDescription, { children: suppressionCibles.length === 1 ? "Cette suppression est définitive." : `Cette action supprimera définitivement les ${suppressionCibles.length} articles sélectionnés.` })] }), /* @__PURE__ */ jsxs(AlertDialogFooter, { children: [/* @__PURE__ */ jsx(AlertDialogCancel, {
				disabled: suppressionEnCours,
				children: "Annuler"
			}), /* @__PURE__ */ jsx(AlertDialogAction, {
				onClick: (event) => {
					event.preventDefault();
					supprimerSelection();
				},
				disabled: suppressionEnCours,
				className: "bg-destructive text-white hover:bg-destructive/90",
				children: suppressionEnCours ? "Suppression…" : "Confirmer la suppression"
			})] })] })
		})]
	});
});
//#endregion
//#region app/components/ui/textarea.tsx
function Textarea({ className, ...props }) {
	return /* @__PURE__ */ jsx("textarea", {
		"data-slot": "textarea",
		className: cn$1("flex field-sizing-content min-h-16 w-full rounded-lg border border-input bg-transparent px-2.5 py-2 text-base transition-colors outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:bg-input/50 disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 md:text-sm dark:bg-input/30 dark:disabled:bg-input/80 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40", className),
		...props
	});
}
//#endregion
//#region app/components/articles/formulaire-article.tsx
var NOMBRE_IMAGES_MAX = 5;
var TAILLE_MAX_IMAGE = 2097152;
var TYPES_IMAGE = /* @__PURE__ */ new Set([
	"image/jpeg",
	"image/png",
	"image/webp",
	"image/gif"
]);
var IMAGE_PAR_DEFAUT = "/images/articles/article-par-defaut.svg";
var creerCleImage = () => `nouvelle-${Date.now()}-${Math.random().toString(36).slice(2)}`;
var imagesInitiales = (article) => {
	const images = article?.images?.slice().sort((a, b) => a.position - b.position).slice(0, NOMBRE_IMAGES_MAX);
	if (images?.length) return images.map((existing) => ({
		key: existing.id,
		existing,
		file: null
	}));
	return [{
		key: creerCleImage(),
		file: null
	}];
};
var cleImageParDefaut = (images) => images.find((image) => image.existing?.isDefault)?.key ?? images.find((image) => image.existing)?.key ?? null;
function FormulaireArticle({ article, enregistrement, onCancel, onSave }) {
	const { businessId } = useBusiness();
	const chargerCategories = useCallback(() => businessId ? listerCategories(businessId) : Promise.resolve([]), [businessId]);
	const chargerDevises = useCallback(() => businessId ? listerDevises(businessId) : Promise.resolve([]), [businessId]);
	const { donnees: categories, chargement: chargementCategories } = useListe(chargerCategories, !!businessId);
	const { donnees: devises, chargement: chargementDevises } = useListe(chargerDevises, !!businessId);
	const [valeurs, setValeurs] = useState({
		designation: article?.designation ?? "",
		categorieId: article?.categorieId ?? "",
		deviseId: article?.deviseId ?? "",
		pu: article ? String(article.pu) : "",
		description: article?.description ?? ""
	});
	const [images, setImages] = useState(() => imagesInitiales(article));
	const [imagePrincipaleKey, setImagePrincipaleKey] = useState(() => cleImageParDefaut(imagesInitiales(article)));
	const [erreursImages, setErreursImages] = useState({});
	const [glisserImageKey, setGlisserImageKey] = useState(null);
	const [apercus, setApercus] = useState({});
	useEffect(() => {
		const nouveauxApercus = {};
		for (const image of images) if (image.file) nouveauxApercus[image.key] = URL.createObjectURL(image.file);
		setApercus(nouveauxApercus);
		return () => {
			Object.values(nouveauxApercus).forEach(URL.revokeObjectURL);
		};
	}, [images]);
	useEffect(() => {
		setValeurs({
			designation: article?.designation ?? "",
			categorieId: article?.categorieId ?? "",
			deviseId: article?.deviseId ?? "",
			pu: article ? String(article.pu) : "",
			description: article?.description ?? ""
		});
		const imagesArticle = imagesInitiales(article);
		setImages(imagesArticle);
		setImagePrincipaleKey(cleImageParDefaut(imagesArticle));
		setErreursImages({});
	}, [article]);
	const changerValeur = (champ, valeur) => {
		setValeurs((courant) => ({
			...courant,
			[champ]: valeur
		}));
	};
	const traiterFichier = (key, fichier) => {
		if (!fichier) return;
		if (!TYPES_IMAGE.has(fichier.type)) {
			setErreursImages((courantes) => ({
				...courantes,
				[key]: "Format non pris en charge (JPEG, PNG, WebP ou GIF)."
			}));
			return;
		}
		if (fichier.size > TAILLE_MAX_IMAGE) {
			setErreursImages((courantes) => ({
				...courantes,
				[key]: "Chaque image ne doit pas dépasser 2 Mo."
			}));
			return;
		}
		setErreursImages((courantes) => {
			const suivantes = { ...courantes };
			delete suivantes[key];
			return suivantes;
		});
		setImages((courantes) => courantes.map((image) => image.key === key ? {
			...image,
			existing: void 0,
			file: fichier
		} : image));
		setImagePrincipaleKey((courant) => courant ?? key);
	};
	const ajouterImage = () => {
		if (images.length >= NOMBRE_IMAGES_MAX) return;
		setImages((courantes) => [...courantes, {
			key: creerCleImage(),
			file: null
		}]);
	};
	const supprimerImage = (key) => {
		const restantes = images.filter((image) => image.key !== key);
		setImages(restantes);
		setErreursImages((courantes) => {
			const suivantes = { ...courantes };
			delete suivantes[key];
			return suivantes;
		});
		if (imagePrincipaleKey === key) setImagePrincipaleKey(restantes.find((image) => image.file || image.existing)?.key ?? null);
	};
	const soumettre = async (event) => {
		event.preventDefault();
		if (!valeurs.designation.trim() || !valeurs.categorieId || !valeurs.deviseId || !valeurs.pu) {
			toast.error("Renseignez la désignation, la catégorie, la devise et le prix unitaire.");
			return;
		}
		const prix = Number(valeurs.pu);
		if (!Number.isFinite(prix) || prix < 0) {
			toast.error("Le prix unitaire doit être un nombre positif ou nul.");
			return;
		}
		const imagesRenseignees = images.filter((image) => image.file || image.existing);
		const principale = imagesRenseignees.find((image) => image.key === imagePrincipaleKey);
		const ordreImages = [...principale ? [principale] : [], ...imagesRenseignees.filter((image) => image.key !== principale?.key)];
		const data = new FormData();
		data.append("designation", valeurs.designation);
		data.append("categorieId", valeurs.categorieId);
		data.append("deviseId", valeurs.deviseId);
		data.append("pu", String(prix));
		data.append("description", valeurs.description);
		ordreImages.forEach((image, position) => {
			if (image.file) data.append(`image${position}`, image.file);
			else if (image.existing) data.append(`existingImage${position}`, image.existing.id);
			data.append(`isDefault${position}`, String(image.key === imagePrincipaleKey));
		});
		await onSave(data);
	};
	const imageAffichee = (image) => apercus[image.key] ?? image.existing?.url ?? null;
	const chargementOptions = chargementCategories || chargementDevises;
	return /* @__PURE__ */ jsxs("form", {
		className: "space-y-5",
		onSubmit: (event) => void soumettre(event),
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "grid gap-4 sm:grid-cols-2",
				children: [
					/* @__PURE__ */ jsxs(Field, {
						className: "sm:col-span-2",
						children: [/* @__PURE__ */ jsx(FieldLabel, {
							htmlFor: "article-designation",
							children: "Désignation"
						}), /* @__PURE__ */ jsx(Input, {
							id: "article-designation",
							value: valeurs.designation,
							onChange: (event) => changerValeur("designation", event.currentTarget.value),
							minLength: 4,
							maxLength: 50,
							required: true
						})]
					}),
					/* @__PURE__ */ jsxs(Field, { children: [
						/* @__PURE__ */ jsx(FieldLabel, {
							htmlFor: "article-categorie",
							children: "Catégorie"
						}),
						/* @__PURE__ */ jsxs(NativeSelect, {
							id: "article-categorie",
							value: valeurs.categorieId,
							onChange: (event) => changerValeur("categorieId", event.currentTarget.value),
							required: true,
							disabled: chargementOptions,
							children: [/* @__PURE__ */ jsx(NativeSelectOption, {
								value: "",
								children: "Sélectionner une catégorie"
							}), categories.map((categorie) => /* @__PURE__ */ jsx(NativeSelectOption, {
								value: categorie.id,
								children: categorie.nom
							}, categorie.id))]
						}),
						categories.length === 0 && !chargementCategories && /* @__PURE__ */ jsx("p", {
							className: "text-sm text-destructive",
							children: "Aucune catégorie disponible pour ce business."
						})
					] }),
					/* @__PURE__ */ jsxs(Field, { children: [
						/* @__PURE__ */ jsx(FieldLabel, {
							htmlFor: "article-devise",
							children: "Devise"
						}),
						/* @__PURE__ */ jsxs(NativeSelect, {
							id: "article-devise",
							value: valeurs.deviseId,
							onChange: (event) => changerValeur("deviseId", event.currentTarget.value),
							required: true,
							disabled: chargementOptions,
							children: [/* @__PURE__ */ jsx(NativeSelectOption, {
								value: "",
								children: "Sélectionner une devise"
							}), devises.map((devise) => /* @__PURE__ */ jsxs(NativeSelectOption, {
								value: devise.id,
								children: [
									devise.nom ?? devise.type,
									" ",
									devise.symbole ? `(${devise.symbole})` : ""
								]
							}, devise.id))]
						}),
						devises.length === 0 && !chargementDevises && /* @__PURE__ */ jsx("p", {
							className: "text-sm text-destructive",
							children: "Aucune devise disponible pour ce business."
						})
					] }),
					/* @__PURE__ */ jsxs(Field, {
						className: "sm:col-span-2",
						children: [/* @__PURE__ */ jsx(FieldLabel, {
							htmlFor: "article-pu",
							children: "Prix unitaire (PU)"
						}), /* @__PURE__ */ jsx(Input, {
							id: "article-pu",
							type: "number",
							step: "0.0001",
							min: "0",
							inputMode: "decimal",
							value: valeurs.pu,
							onChange: (event) => changerValeur("pu", event.currentTarget.value),
							required: true
						})]
					}),
					/* @__PURE__ */ jsxs(Field, {
						className: "sm:col-span-2",
						children: [/* @__PURE__ */ jsx(FieldLabel, {
							htmlFor: "article-description",
							children: "Description"
						}), /* @__PURE__ */ jsx(Textarea, {
							id: "article-description",
							rows: 4,
							value: valeurs.description,
							onChange: (event) => changerValeur("description", event.currentTarget.value)
						})]
					})
				]
			}),
			/* @__PURE__ */ jsxs("section", {
				className: "space-y-3",
				children: [
					/* @__PURE__ */ jsx("h2", {
						className: "font-medium",
						children: "Images de l’article"
					}),
					/* @__PURE__ */ jsx("p", {
						className: "text-sm text-muted-foreground",
						children: "Déposez les images dans la zone ou cliquez pour les choisir. Jusqu’à cinq images, 2 Mo par image."
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
						children: [images.map((image, position) => {
							const apercu = imageAffichee(image);
							const aUnFichier = Boolean(image.file || image.existing);
							return /* @__PURE__ */ jsxs("div", {
								className: `h-full space-y-3 rounded-lg border p-3 ${glisserImageKey === image.key ? "border-primary bg-primary/5" : ""}`,
								onDragOver: (event) => {
									event.preventDefault();
									setGlisserImageKey(image.key);
								},
								onDragLeave: () => setGlisserImageKey(null),
								onDrop: (event) => {
									event.preventDefault();
									setGlisserImageKey(null);
									traiterFichier(image.key, event.dataTransfer.files[0]);
								},
								children: [
									/* @__PURE__ */ jsxs("div", {
										className: "flex items-center justify-between gap-2",
										children: [/* @__PURE__ */ jsxs("span", {
											className: "text-sm font-medium",
											children: ["Image ", position + 1]
										}), /* @__PURE__ */ jsx(Button, {
											type: "button",
											variant: "ghost",
											size: "icon",
											"aria-label": `Retirer l’image ${position + 1}`,
											onClick: () => supprimerImage(image.key),
											children: /* @__PURE__ */ jsx(Trash2, { className: "size-4" })
										})]
									}),
									/* @__PURE__ */ jsxs("label", {
										htmlFor: `article-image-${image.key}`,
										className: "flex min-h-36 cursor-pointer flex-col items-center justify-center gap-2 rounded-md border border-dashed bg-muted/30 p-3 text-center hover:border-primary",
										children: [
											apercu ? /* @__PURE__ */ jsx("img", {
												src: apercu,
												alt: `Aperçu de l’image ${position + 1}`,
												className: "h-28 w-full rounded object-cover",
												onError: (event) => {
													event.currentTarget.src = IMAGE_PAR_DEFAUT;
												}
											}) : /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(ImagePlus, { className: "size-8 text-muted-foreground" }), /* @__PURE__ */ jsx("span", {
												className: "text-sm",
												children: "Glisser-déposer ou choisir une image"
											})] }),
											/* @__PURE__ */ jsx("span", {
												className: "text-xs text-muted-foreground",
												children: image.file?.name ?? (image.existing ? "Image enregistrée" : "JPEG, PNG, WebP ou GIF")
											}),
											/* @__PURE__ */ jsx("input", {
												id: `article-image-${image.key}`,
												type: "file",
												accept: "image/jpeg,image/png,image/webp,image/gif",
												className: "sr-only",
												onChange: (event) => {
													traiterFichier(image.key, event.currentTarget.files?.[0]);
													event.currentTarget.value = "";
												}
											})
										]
									}),
									erreursImages[image.key] && /* @__PURE__ */ jsx("p", {
										role: "alert",
										className: "text-sm text-destructive",
										children: erreursImages[image.key]
									}),
									/* @__PURE__ */ jsxs("label", {
										className: "flex items-center gap-2 text-sm",
										children: [/* @__PURE__ */ jsx("input", {
											type: "radio",
											name: "image-principale",
											checked: imagePrincipaleKey === image.key,
											onChange: () => setImagePrincipaleKey(image.key),
											disabled: !aUnFichier,
											className: "size-4 accent-primary"
										}), "Définir par défaut"]
									})
								]
							}, image.key);
						}), images.length < NOMBRE_IMAGES_MAX && /* @__PURE__ */ jsxs(Button, {
							type: "button",
							variant: "outline",
							onClick: ajouterImage,
							className: "h-full w-full min-h-56 border-dashed",
							children: [/* @__PURE__ */ jsx(Plus, {}), " Ajouter une image"]
						})]
					}),
					images.length === NOMBRE_IMAGES_MAX && /* @__PURE__ */ jsx("p", {
						className: "text-sm text-muted-foreground",
						children: "La limite de cinq images est atteinte."
					})
				]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "flex flex-wrap justify-end gap-2",
				children: [/* @__PURE__ */ jsx(Button, {
					type: "button",
					variant: "outline",
					onClick: onCancel,
					disabled: enregistrement,
					children: "Annuler"
				}), /* @__PURE__ */ jsx(Button, {
					type: "submit",
					disabled: enregistrement || chargementOptions || categories.length === 0 || devises.length === 0 || Object.keys(erreursImages).length > 0,
					children: enregistrement ? "Enregistrement…" : article ? "Enregistrer les modifications" : "Créer l’article"
				})]
			})
		]
	});
}
//#endregion
//#region app/routes/articles/nouveau.tsx
var nouveau_exports = /* @__PURE__ */ __exportAll({ default: () => nouveau_default });
var nouveau_default = UNSAFE_withComponentProps(function NouvelArticle() {
	const { businessId } = useBusiness();
	const navigate = useNavigate();
	const [enregistrement, setEnregistrement] = useState(false);
	const enregistrer = async (form) => {
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
	return /* @__PURE__ */ jsx(PageRessource, {
		titre: "Nouvel article",
		description: "Renseignez les informations et les images du nouvel article.",
		businessRequis: true,
		businessId,
		action: /* @__PURE__ */ jsxs(Button, {
			variant: "outline",
			render: /* @__PURE__ */ jsx(Link, { to: "/articles" }),
			children: [/* @__PURE__ */ jsx(ArrowLeft, {}), " Retour aux articles"]
		}),
		children: /* @__PURE__ */ jsx("div", {
			className: "max-w-4xl rounded-xl border p-4 lg:p-6",
			children: /* @__PURE__ */ jsx(FormulaireArticle, {
				enregistrement,
				onCancel: () => navigate("/articles"),
				onSave: enregistrer
			})
		})
	});
});
//#endregion
//#region app/routes/articles/detail.tsx
var detail_exports$3 = /* @__PURE__ */ __exportAll({ default: () => detail_default$3 });
var dateLisible = (date) => new Date(date).toLocaleString("fr-FR", {
	dateStyle: "medium",
	timeStyle: "short"
});
var detail_default$3 = UNSAFE_withComponentProps(function DetailArticle() {
	const { id } = useParams();
	const { businessId } = useBusiness();
	const navigate = useNavigate();
	const [article, setArticle] = useState(null);
	const [nombreJaimes, setNombreJaimes] = useState(0);
	const [chargement, setChargement] = useState(true);
	const [erreur, setErreur] = useState(null);
	const [enregistrement, setEnregistrement] = useState(false);
	const [suppressionOuverte, setSuppressionOuverte] = useState(false);
	const [suppressionEnCours, setSuppressionEnCours] = useState(false);
	const [erreurConfirmations, setErreurConfirmations] = useState(null);
	useEffect(() => {
		if (!id || !businessId) return;
		let annule = false;
		setChargement(true);
		setErreur(null);
		setArticle(null);
		setNombreJaimes(0);
		setErreurConfirmations(null);
		const charger = async () => {
			const [articleResultat, jaimesResultat] = await Promise.allSettled([lireArticle(id), listerJaimes(id)]);
			if (annule) return;
			if (articleResultat.status === "fulfilled") setArticle(articleResultat.value);
			else setErreur(articleResultat.reason instanceof Error ? articleResultat.reason.message : "Le chargement de l’article a échoué.");
			if (jaimesResultat.status === "fulfilled") setNombreJaimes(Number(jaimesResultat.value) || 0);
			else setErreurConfirmations((courante) => courante ?? (jaimesResultat.reason instanceof Error ? jaimesResultat.reason.message : "Le chargement des confirmations a échoué."));
			setChargement(false);
		};
		charger();
		return () => {
			annule = true;
		};
	}, [id, businessId]);
	const enregistrer = async (form) => {
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
	return /* @__PURE__ */ jsxs(PageRessource, {
		titre: article?.designation ?? "Détail de l’article",
		description: "Activités, confirmations et gestion de l’article.",
		businessRequis: true,
		businessId,
		chargement,
		erreur,
		onReessayer: () => {
			if (id) {
				setChargement(true);
				lireArticle(id).then(setArticle).catch((cause) => setErreur(cause instanceof Error ? cause.message : "Le chargement de l’article a échoué.")).finally(() => setChargement(false));
			}
		},
		action: /* @__PURE__ */ jsxs(Button, {
			variant: "outline",
			render: /* @__PURE__ */ jsx(Link, { to: "/articles" }),
			children: [/* @__PURE__ */ jsx(ArrowLeft, {}), " Retour aux articles"]
		}),
		children: [article && /* @__PURE__ */ jsxs("div", {
			className: "space-y-6",
			children: [
				/* @__PURE__ */ jsxs(Tabs, {
					defaultValue: "activites",
					className: "w-full",
					children: [
						/* @__PURE__ */ jsxs(TabsList, { children: [/* @__PURE__ */ jsxs(TabsTrigger, {
							value: "activites",
							children: [/* @__PURE__ */ jsx(MessageSquare, {}), " Activités"]
						}), /* @__PURE__ */ jsxs(TabsTrigger, {
							value: "confirmations",
							children: [/* @__PURE__ */ jsx(Heart, {}), " Confirmations"]
						})] }),
						/* @__PURE__ */ jsx(TabsContent, { value: "activites" }),
						/* @__PURE__ */ jsx(TabsContent, {
							value: "confirmations",
							className: "pt-4",
							children: /* @__PURE__ */ jsxs("div", {
								className: "space-y-4",
								children: [/* @__PURE__ */ jsxs("section", {
									className: "space-y-2 rounded-xl border p-4",
									children: [
										/* @__PURE__ */ jsx("h2", {
											className: "font-semibold",
											children: "Confirmations d’intérêt"
										}),
										/* @__PURE__ */ jsx("p", {
											className: "text-sm text-muted-foreground",
											children: "Nombre de mentions « J’aime » enregistrées pour cet article."
										}),
										/* @__PURE__ */ jsxs("p", {
											className: "flex items-center gap-2 text-2xl font-semibold tabular-nums",
											children: [
												/* @__PURE__ */ jsx(Heart, { className: "size-5 text-primary" }),
												" ",
												nombreJaimes
											]
										}),
										erreurConfirmations && /* @__PURE__ */ jsx("p", {
											role: "alert",
											className: "text-sm text-destructive",
											children: erreurConfirmations
										})
									]
								}), /* @__PURE__ */ jsxs("section", {
									className: "space-y-4 rounded-xl border p-4",
									children: [/* @__PURE__ */ jsx("h2", {
										className: "font-semibold",
										children: "Historique de l’article"
									}), /* @__PURE__ */ jsxs("ol", {
										className: "space-y-3",
										children: [/* @__PURE__ */ jsxs("li", {
											className: "flex gap-3",
											children: [/* @__PURE__ */ jsx(CalendarDays, { className: "mt-0.5 size-4 shrink-0 text-muted-foreground" }), /* @__PURE__ */ jsxs("span", { children: ["Article créé le ", /* @__PURE__ */ jsx("time", {
												dateTime: article.createdAt,
												children: dateLisible(article.createdAt)
											})] })]
										}), article.updatedAt !== article.createdAt && /* @__PURE__ */ jsxs("li", {
											className: "flex gap-3",
											children: [/* @__PURE__ */ jsx(CalendarDays, { className: "mt-0.5 size-4 shrink-0 text-muted-foreground" }), /* @__PURE__ */ jsxs("span", { children: ["Dernière mise à jour le ", /* @__PURE__ */ jsx("time", {
												dateTime: article.updatedAt,
												children: dateLisible(article.updatedAt)
											})] })]
										})]
									})]
								})]
							})
						})
					]
				}),
				/* @__PURE__ */ jsxs("section", {
					className: "space-y-4 rounded-xl border p-4 lg:p-6",
					children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h2", {
						className: "font-semibold",
						children: "Modifier l’article"
					}), /* @__PURE__ */ jsx("p", {
						className: "text-sm text-muted-foreground",
						children: "Mettez à jour les informations, la catégorie, la devise et les images."
					})] }), /* @__PURE__ */ jsx(FormulaireArticle, {
						article,
						enregistrement,
						onCancel: () => navigate("/articles"),
						onSave: enregistrer
					})]
				}),
				/* @__PURE__ */ jsxs("section", {
					className: "space-y-3 rounded-xl border border-destructive/40 p-4",
					children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h2", {
						className: "font-semibold",
						children: "Zone de danger"
					}), /* @__PURE__ */ jsx("p", {
						className: "text-sm text-muted-foreground",
						children: "La suppression de cet article est définitive."
					})] }), /* @__PURE__ */ jsxs(Button, {
						variant: "destructive",
						onClick: () => setSuppressionOuverte(true),
						disabled: suppressionEnCours,
						children: [/* @__PURE__ */ jsx(Trash2, {}), " Supprimer l’article"]
					})]
				})
			]
		}), /* @__PURE__ */ jsx(AlertDialog$1, {
			open: suppressionOuverte,
			onOpenChange: setSuppressionOuverte,
			children: /* @__PURE__ */ jsxs(AlertDialogContent, { children: [/* @__PURE__ */ jsxs(AlertDialogHeader, { children: [/* @__PURE__ */ jsx(AlertDialogTitle, { children: "Supprimer cet article ?" }), /* @__PURE__ */ jsx(AlertDialogDescription, { children: "Cette action est définitive. L’article et les données qui lui sont liées seront supprimés." })] }), /* @__PURE__ */ jsxs(AlertDialogFooter, { children: [/* @__PURE__ */ jsx(AlertDialogCancel, {
				disabled: suppressionEnCours,
				children: "Annuler"
			}), /* @__PURE__ */ jsx(AlertDialogAction, {
				onClick: (event) => {
					event.preventDefault();
					confirmerSuppression();
				},
				disabled: suppressionEnCours,
				className: "bg-destructive text-white hover:bg-destructive/90",
				children: suppressionEnCours ? "Suppression…" : "Supprimer"
			})] })] })
		})]
	});
});
//#endregion
//#region app/routes/achats/achats.tsx
var achats_exports = /* @__PURE__ */ __exportAll({ default: () => achats_default });
var STATUTS$1 = [
	"EN_COURS",
	"VALIDE",
	"ANNULE"
];
var achats_default = UNSAFE_withComponentProps(function Achats() {
	const { businessId } = useBusiness();
	const charger = useCallback(() => listerAchats(businessId), [businessId]);
	const { donnees, chargement, erreur, recharger } = useListe(charger, !!businessId);
	const changerStatut = async (achat, status) => {
		await toast.promise(changerStatusAchat(businessId, achat.id, { status }), {
			loading: "Mise à jour…",
			success: () => {
				recharger();
				return status === "VALIDE" ? "Achat validé, les articles passent en stock" : "Statut mis à jour";
			},
			error: (e) => e.message
		}).unwrap();
	};
	const supprimer = async (achat) => {
		await toast.promise(supprimerAchat(businessId, achat.id), {
			loading: "Suppression…",
			success: () => {
				recharger();
				return "Achat supprimé";
			},
			error: (e) => e.message
		}).unwrap();
	};
	return /* @__PURE__ */ jsx(PageRessource, {
		titre: "Opérations d'achats",
		description: "Vos approvisionnements. Valider un achat fait entrer ses lignes en stock.",
		businessRequis: true,
		businessId,
		chargement,
		erreur,
		vide: donnees.length === 0,
		messageVide: "Aucun achat enregistré pour le moment.",
		onReessayer: recharger,
		children: /* @__PURE__ */ jsx("div", {
			className: "overflow-hidden rounded-lg border",
			children: /* @__PURE__ */ jsxs(Table, { children: [/* @__PURE__ */ jsx(TableHeader, { children: /* @__PURE__ */ jsxs(TableRow, { children: [
				/* @__PURE__ */ jsx(TableHead, { children: "Référence" }),
				/* @__PURE__ */ jsx(TableHead, { children: "Date d'achat" }),
				/* @__PURE__ */ jsx(TableHead, { children: "Statut" }),
				/* @__PURE__ */ jsx(TableHead, {
					className: "w-[1%] text-right",
					children: "Actions"
				})
			] }) }), /* @__PURE__ */ jsx(TableBody, { children: donnees.map((achat) => /* @__PURE__ */ jsxs(TableRow, { children: [
				/* @__PURE__ */ jsx(TableCell, {
					className: "font-mono text-sm",
					children: achat.id
				}),
				/* @__PURE__ */ jsx(TableCell, {
					className: "text-muted-foreground",
					children: achat.dateAchat ? new Date(achat.dateAchat).toLocaleDateString("fr-FR") : "—"
				}),
				/* @__PURE__ */ jsx(TableCell, { children: /* @__PURE__ */ jsx(Badge, {
					variant: achat.status === "VALIDE" ? "default" : "secondary",
					children: achat.status
				}) }),
				/* @__PURE__ */ jsxs(TableCell, {
					className: "text-right whitespace-nowrap",
					children: [/* @__PURE__ */ jsx(NativeSelect, {
						"aria-label": `Changer le statut de l'achat ${achat.id}`,
						value: achat.status,
						onChange: (e) => changerStatut(achat, e.target.value),
						className: "inline-block w-auto",
						children: STATUTS$1.map((s) => /* @__PURE__ */ jsx(NativeSelectOption, {
							value: s,
							children: s
						}, s))
					}), /* @__PURE__ */ jsx(Button, {
						variant: "ghost",
						size: "sm",
						"aria-label": `Supprimer l'achat ${achat.id}`,
						onClick: () => supprimer(achat),
						children: /* @__PURE__ */ jsx(Trash2Icon, { className: "size-4 text-destructive" })
					})]
				})
			] }, achat.id)) })] })
		})
	});
});
//#endregion
//#region app/components/clients/creer-client.tsx
/**
* Le nom est le seul champ obligatoire à la création. Le minimum de 4 caractères
* reflète ClientSchema côté serveur : en-dessous, la requête serait rejetée.
*/
var formulaireClientSchema = z.object({
	lastName: z.string().trim().min(4, "Le nom doit contenir au moins 4 caractères.").max(50, "Le nom ne peut pas dépasser 50 caractères."),
	firstName: z.string().trim().max(50, "Le prénom ne peut pas dépasser 50 caractères.").refine((valeur) => valeur.length === 0 || valeur.length >= 4, "Le prénom doit contenir au moins 4 caractères.").optional(),
	email: z.union([z.literal(""), z.email("Saisissez une adresse e-mail valide.")]).optional()
});
function nomUtilisateur$2(utilisateur) {
	return utilisateur.full_name?.trim() || utilisateur.email?.trim() || `Utilisateur ${utilisateur.id.slice(-6)}`;
}
function CreerClient({ businessId, onCreated, onInvited }) {
	const [ouvert, setOuvert] = useState(false);
	const [logo, setLogo] = useState(null);
	const [erreurLogo, setErreurLogo] = useState(null);
	const [apercuLogo, setApercuLogo] = useState(null);
	const inputLogoRef = useRef(null);
	const [recherche, setRecherche] = useState("");
	const [utilisateurs, setUtilisateurs] = useState([]);
	const [selection, setSelection] = useState(() => /* @__PURE__ */ new Set());
	const [chargement, setChargement] = useState(false);
	const [erreurRecherche, setErreurRecherche] = useState(null);
	const [rattachementEnCours, setRattachementEnCours] = useState(false);
	const { register, handleSubmit, reset, formState: { errors, isSubmitting, isValid } } = useForm({
		resolver: zodResolver(formulaireClientSchema),
		mode: "onTouched",
		defaultValues: {
			lastName: "",
			firstName: "",
			email: ""
		}
	});
	useEffect(() => {
		if (!logo) {
			setApercuLogo(null);
			return;
		}
		const url = URL.createObjectURL(logo);
		setApercuLogo(url);
		return () => URL.revokeObjectURL(url);
	}, [logo]);
	useEffect(() => {
		if (!ouvert) {
			setRecherche("");
			setUtilisateurs([]);
			setSelection(/* @__PURE__ */ new Set());
			setErreurRecherche(null);
		}
	}, [ouvert]);
	useEffect(() => {
		if (!ouvert) return;
		const terme = recherche.trim();
		if (!terme || !businessId) {
			setUtilisateurs([]);
			setChargement(false);
			return;
		}
		let annule = false;
		setChargement(true);
		setErreurRecherche(null);
		const timeout = window.setTimeout(() => {
			listerUtilisateursClientDisponibles(businessId, terme).then((resultat) => {
				if (!annule) setUtilisateurs(resultat);
			}).catch((error) => {
				if (!annule) setErreurRecherche(error.message || "Impossible de charger les utilisateurs.");
			}).finally(() => {
				if (!annule) setChargement(false);
			});
		}, 300);
		return () => {
			annule = true;
			window.clearTimeout(timeout);
		};
	}, [
		businessId,
		ouvert,
		recherche
	]);
	const choisirLogo = (fichier) => {
		setErreurLogo(null);
		if (!fichier) {
			setLogo(null);
			return;
		}
		if (![
			"image/jpeg",
			"image/png",
			"image/webp",
			"image/gif"
		].includes(fichier.type)) {
			setLogo(null);
			setErreurLogo("Choisissez une image JPG, PNG, WebP ou GIF.");
			return;
		}
		if (fichier.size > 2097152) {
			setLogo(null);
			setErreurLogo("L’image ne doit pas dépasser 2 Mo.");
			return;
		}
		setLogo(fichier);
	};
	const reinitialiser = () => {
		reset({
			lastName: "",
			firstName: "",
			email: ""
		});
		setLogo(null);
		setErreurLogo(null);
		if (inputLogoRef.current) inputLogoRef.current.value = "";
	};
	const onSubmit = async (valeurs) => {
		if (!businessId) {
			toast.error("Aucun business n’est sélectionné.");
			return;
		}
		const lastName = valeurs.lastName.trim();
		const firstName = valeurs.firstName?.trim();
		const email = valeurs.email?.trim();
		const client = {
			lastName,
			...firstName ? { firstName } : {},
			...email ? { email } : {},
			fullName: [firstName, lastName].filter(Boolean).join(" ")
		};
		await toast.promise(creerClientAvecLogo(businessId, client, logo ?? void 0), {
			loading: "Création du client…",
			success: ({ data: cree, message }) => {
				reinitialiser();
				setOuvert(false);
				onCreated(cree);
				return message;
			},
			error: (error) => error.message
		}).unwrap();
	};
	const basculerSelection = (id) => {
		setSelection((courante) => {
			const suivante = new Set(courante);
			if (suivante.has(id)) suivante.delete(id);
			else suivante.add(id);
			return suivante;
		});
	};
	const rattacher = async () => {
		if (!businessId || selection.size === 0) return;
		setRattachementEnCours(true);
		try {
			await toast.promise(inviterUtilisateursCommeClients(businessId, Array.from(selection)), {
				loading: "Rattachement du compte…",
				success: ({ message }) => {
					setOuvert(false);
					onInvited();
					return message;
				},
				error: (error) => error.message
			}).unwrap();
		} finally {
			setRattachementEnCours(false);
		}
	};
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsxs(Button, {
		type: "button",
		disabled: !businessId,
		onClick: () => setOuvert(true),
		children: [/* @__PURE__ */ jsx(PlusIcon, { className: "size-4" }), "Nouveau client"]
	}), /* @__PURE__ */ jsx(Dialog$1, {
		open: ouvert,
		onOpenChange: setOuvert,
		children: /* @__PURE__ */ jsxs(DialogContent, {
			className: "sm:max-w-lg",
			children: [/* @__PURE__ */ jsxs(DialogHeader, { children: [/* @__PURE__ */ jsx(DialogTitle, { children: "Nouveau client" }), /* @__PURE__ */ jsx(DialogDescription, { children: "Enregistrez un client sans compte, ou rattachez-le à un compte utilisateur existant." })] }), /* @__PURE__ */ jsxs(Tabs, {
				defaultValue: "sans-compte",
				className: "w-full",
				children: [
					/* @__PURE__ */ jsxs(TabsList, {
						className: "grid w-full grid-cols-2",
						children: [/* @__PURE__ */ jsx(TabsTrigger, {
							value: "sans-compte",
							children: "Sans compte"
						}), /* @__PURE__ */ jsx(TabsTrigger, {
							value: "compte-existant",
							children: "Compte existant"
						})]
					}),
					/* @__PURE__ */ jsx(TabsContent, {
						value: "sans-compte",
						className: "pt-4",
						children: /* @__PURE__ */ jsxs("form", {
							onSubmit: handleSubmit(onSubmit),
							noValidate: true,
							children: [/* @__PURE__ */ jsxs(FieldGroup, { children: [
								/* @__PURE__ */ jsxs(Field, {
									"data-invalid": !!erreurLogo,
									children: [
										/* @__PURE__ */ jsx("input", {
											ref: inputLogoRef,
											id: "nouveau-client-photo",
											type: "file",
											accept: "image/jpeg,image/png,image/webp,image/gif",
											className: "sr-only",
											"aria-label": "Photo du client (facultative)",
											"aria-invalid": !!erreurLogo,
											"aria-describedby": erreurLogo ? "nouveau-client-photo-erreur" : "nouveau-client-photo-aide",
											onChange: (event) => choisirLogo(event.currentTarget.files?.[0])
										}),
										/* @__PURE__ */ jsxs("label", {
											htmlFor: "nouveau-client-photo",
											className: "group flex cursor-pointer items-center gap-4 rounded-xl border border-dashed border-border bg-muted/30 p-4 transition-colors hover:border-primary/50 hover:bg-muted/60 focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2",
											children: [
												/* @__PURE__ */ jsx("span", {
													className: "flex size-16 shrink-0 items-center justify-center overflow-hidden rounded-xl border bg-background text-muted-foreground shadow-sm",
													children: apercuLogo ? /* @__PURE__ */ jsx("img", {
														src: apercuLogo,
														alt: "Aperçu de la photo du client",
														className: "size-full object-cover"
													}) : /* @__PURE__ */ jsx(ImagePlusIcon, {
														className: "size-7",
														"aria-hidden": "true"
													})
												}),
												/* @__PURE__ */ jsxs("span", {
													className: "min-w-0 max-w-full flex-1 overflow-hidden",
													children: [/* @__PURE__ */ jsx("span", {
														className: "block max-w-full truncate text-sm font-medium text-foreground",
														title: logo?.name,
														children: logo ? tronquerAvecEllipses(logo.name) : "Choisir une photo (facultatif)"
													}), /* @__PURE__ */ jsx("span", {
														id: "nouveau-client-photo-aide",
														className: "mt-1 block text-xs text-muted-foreground",
														children: "JPG, PNG, WebP ou GIF · 2 Mo maximum"
													})]
												}),
												/* @__PURE__ */ jsx(UploadIcon, {
													className: "size-4 shrink-0 text-muted-foreground transition-colors group-hover:text-foreground",
													"aria-hidden": "true"
												})
											]
										}),
										logo && /* @__PURE__ */ jsxs(Button, {
											type: "button",
											variant: "ghost",
											size: "sm",
											className: "w-fit",
											onClick: () => {
												setLogo(null);
												if (inputLogoRef.current) inputLogoRef.current.value = "";
											},
											children: [/* @__PURE__ */ jsx(XIcon, { className: "size-4" }), "Retirer la photo"]
										}),
										erreurLogo && /* @__PURE__ */ jsx("p", {
											id: "nouveau-client-photo-erreur",
											role: "alert",
											className: "text-sm text-destructive",
											children: erreurLogo
										})
									]
								}),
								/* @__PURE__ */ jsxs(Field, {
									"data-invalid": !!errors.lastName,
									children: [
										/* @__PURE__ */ jsx(FieldLabel, {
											htmlFor: "nouveau-client-nom",
											children: "Nom"
										}),
										/* @__PURE__ */ jsx(Input, {
											id: "nouveau-client-nom",
											autoComplete: "family-name",
											placeholder: "Ex. : Mukendi",
											"aria-invalid": !!errors.lastName,
											"aria-describedby": errors.lastName ? "nouveau-client-nom-erreur" : void 0,
											...register("lastName")
										}),
										/* @__PURE__ */ jsx(FieldError, {
											id: "nouveau-client-nom-erreur",
											errors: [errors.lastName]
										})
									]
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "grid grid-cols-1 gap-4 sm:grid-cols-2",
									children: [/* @__PURE__ */ jsxs(Field, {
										"data-invalid": !!errors.firstName,
										children: [
											/* @__PURE__ */ jsxs(FieldLabel, {
												htmlFor: "nouveau-client-prenom",
												children: [
													"Prénom",
													" ",
													/* @__PURE__ */ jsx("span", {
														className: "font-normal text-muted-foreground",
														children: "(facultatif)"
													})
												]
											}),
											/* @__PURE__ */ jsx(Input, {
												id: "nouveau-client-prenom",
												autoComplete: "given-name",
												placeholder: "Ex. : Amani",
												"aria-invalid": !!errors.firstName,
												"aria-describedby": errors.firstName ? "nouveau-client-prenom-erreur" : void 0,
												...register("firstName")
											}),
											/* @__PURE__ */ jsx(FieldError, {
												id: "nouveau-client-prenom-erreur",
												errors: [errors.firstName]
											})
										]
									}), /* @__PURE__ */ jsxs(Field, {
										"data-invalid": !!errors.email,
										children: [
											/* @__PURE__ */ jsxs(FieldLabel, {
												htmlFor: "nouveau-client-email",
												children: [
													"E-mail",
													" ",
													/* @__PURE__ */ jsx("span", {
														className: "font-normal text-muted-foreground",
														children: "(facultatif)"
													})
												]
											}),
											/* @__PURE__ */ jsx(Input, {
												id: "nouveau-client-email",
												type: "email",
												autoComplete: "email",
												placeholder: "client@exemple.cd",
												"aria-invalid": !!errors.email,
												"aria-describedby": errors.email ? "nouveau-client-email-erreur" : void 0,
												...register("email")
											}),
											/* @__PURE__ */ jsx(FieldError, {
												id: "nouveau-client-email-erreur",
												errors: [errors.email]
											})
										]
									})]
								})
							] }), /* @__PURE__ */ jsxs(DialogFooter, {
								className: "mt-6",
								children: [/* @__PURE__ */ jsx(Button, {
									type: "button",
									variant: "outline",
									onClick: () => setOuvert(false),
									disabled: isSubmitting,
									children: "Annuler"
								}), /* @__PURE__ */ jsx(Button, {
									type: "submit",
									disabled: !isValid || isSubmitting || !!erreurLogo,
									children: isSubmitting ? "Création…" : "Créer le client"
								})]
							})]
						})
					}),
					/* @__PURE__ */ jsxs(TabsContent, {
						value: "compte-existant",
						className: "pt-4",
						children: [/* @__PURE__ */ jsxs(FieldGroup, { children: [/* @__PURE__ */ jsxs(Field, { children: [
							/* @__PURE__ */ jsx(FieldLabel, {
								htmlFor: "rattacher-recherche",
								children: "Rechercher un utilisateur"
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "relative",
								children: [/* @__PURE__ */ jsx(SearchIcon, { className: "pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" }), /* @__PURE__ */ jsx(Input, {
									id: "rattacher-recherche",
									value: recherche,
									onChange: (event) => setRecherche(event.currentTarget.value),
									placeholder: "Nom ou adresse e-mail…",
									className: "pl-9"
								})]
							}),
							/* @__PURE__ */ jsx(FieldDescription, { children: "Une invitation sera envoyée à cette personne pour qu’elle confirme son rattachement." })
						] }), /* @__PURE__ */ jsx("div", {
							className: "max-h-56 min-h-32 overflow-y-auto rounded-lg border",
							"aria-busy": chargement,
							children: chargement ? /* @__PURE__ */ jsx("p", {
								className: "p-6 text-center text-sm text-muted-foreground",
								role: "status",
								children: "Recherche en cours…"
							}) : erreurRecherche ? /* @__PURE__ */ jsx("p", {
								className: "p-6 text-center text-sm text-destructive",
								children: erreurRecherche
							}) : utilisateurs.length === 0 ? /* @__PURE__ */ jsx("p", {
								className: "p-6 text-center text-sm text-muted-foreground",
								children: recherche.trim() ? "Aucun utilisateur disponible ne correspond." : "Saisissez un nom ou un e-mail pour chercher."
							}) : /* @__PURE__ */ jsx("ul", {
								className: "divide-y",
								children: utilisateurs.map((utilisateur) => {
									const selectionne = selection.has(utilisateur.id);
									return /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("button", {
										type: "button",
										onClick: () => basculerSelection(utilisateur.id),
										"aria-pressed": selectionne,
										"aria-label": `${selectionne ? "Désélectionner" : "Sélectionner"} ${nomUtilisateur$2(utilisateur)}`,
										className: `flex w-full items-center gap-3 px-4 py-3 text-left transition-colors hover:bg-muted/50 ${selectionne ? "bg-primary/10" : ""}`,
										children: [
											/* @__PURE__ */ jsxs(Avatar$1, {
												className: "size-9 shrink-0",
												children: [/* @__PURE__ */ jsx(AvatarImage, {
													src: utilisateur.image ?? void 0,
													alt: ""
												}), /* @__PURE__ */ jsx(AvatarFallback, {
													className: "bg-primary/10 text-sm font-medium text-primary",
													children: nomUtilisateur$2(utilisateur).charAt(0).toLocaleUpperCase("fr")
												})]
											}),
											/* @__PURE__ */ jsxs("span", {
												className: "min-w-0 flex-1",
												children: [/* @__PURE__ */ jsx("span", {
													className: "block truncate text-sm font-medium",
													children: nomUtilisateur$2(utilisateur)
												}), /* @__PURE__ */ jsx("span", {
													className: "block truncate text-xs text-muted-foreground",
													children: utilisateur.email || "E-mail non renseigné"
												})]
											}),
											/* @__PURE__ */ jsx("span", {
												className: `flex size-5 shrink-0 items-center justify-center rounded-full border ${selectionne ? "border-primary bg-primary text-primary-foreground" : "border-muted-foreground/40"}`,
												"aria-hidden": "true",
												children: selectionne && /* @__PURE__ */ jsx(Check, { className: "size-3" })
											})
										]
									}) }, utilisateur.id);
								})
							})
						})] }), /* @__PURE__ */ jsxs(DialogFooter, {
							className: "mt-6",
							children: [/* @__PURE__ */ jsx(Button, {
								type: "button",
								variant: "outline",
								onClick: () => setOuvert(false),
								disabled: rattachementEnCours,
								children: "Annuler"
							}), /* @__PURE__ */ jsx(Button, {
								type: "button",
								onClick: rattacher,
								disabled: selection.size === 0 || rattachementEnCours,
								children: rattachementEnCours ? "Rattachement…" : `Rattacher ${selection.size > 1 ? `${selection.size} comptes` : "le compte"}`
							})]
						})]
					})
				]
			})]
		})
	})] });
}
//#endregion
//#region app/routes/clients/clients.tsx
var clients_exports = /* @__PURE__ */ __exportAll({ default: () => clients_default });
var FormulaireClientSchema = z.object({
	firstName: z.string().trim().max(50, "Le prénom ne peut pas dépasser 50 caractères.").refine((value) => value.length === 0 || value.length >= 4, "Le prénom doit contenir au moins 4 caractères."),
	lastName: z.string().trim().max(50, "Le nom ne peut pas dépasser 50 caractères.").refine((value) => value.length === 0 || value.length >= 4, "Le nom doit contenir au moins 4 caractères."),
	email: z.string().trim().toLowerCase().refine((value) => value.length === 0 || z.email().safeParse(value).success, "L’adresse e-mail est invalide.")
}).refine(({ firstName, lastName, email }) => Boolean(firstName || lastName || email), {
	message: "Renseignez au moins un nom, un prénom ou une adresse e-mail.",
	path: ["email"]
});
var clients_default = UNSAFE_withComponentProps(function Clients() {
	const { businessId } = useBusiness();
	const [recherche, setRecherche] = useState("");
	const [saisie, setSaisie] = useState("");
	const [filtreCompte, setFiltreCompte] = useState("tous");
	const [filtreVerification, setFiltreVerification] = useState("tous");
	const [taillePage, setTaillePage] = useState(10);
	const [page, setPage] = useState(0);
	const [ouvert, setOuvert] = useState(false);
	const [enEdition, setEnEdition] = useState(null);
	const [aSupprimer, setASupprimer] = useState(null);
	const [suppressionEnCours, setSuppressionEnCours] = useState(false);
	const [renvoiEnCours, setRenvoiEnCours] = useState(null);
	const [logo, setLogo] = useState(null);
	const [erreurLogo, setErreurLogo] = useState(null);
	const [apercuLogo, setApercuLogo] = useState(null);
	const inputLogoRef = useRef(null);
	const charger = useCallback(() => listerClients(businessId, recherche || void 0), [businessId, recherche]);
	const { donnees, chargement, erreur, recharger, ajouter, retirer } = useListe(charger, !!businessId);
	useEffect(() => {
		if (!logo) {
			setApercuLogo(enEdition?.profile === "http://localhost:3000/public/images/profile-logo/image-par-defaut.png" ? enEdition.userImage ?? enEdition.profile : enEdition?.profile ?? null);
			return;
		}
		const url = URL.createObjectURL(logo);
		setApercuLogo(url);
		return () => URL.revokeObjectURL(url);
	}, [logo, enEdition]);
	useEffect(() => {
		const timeout = window.setTimeout(() => {
			setRecherche(saisie.trim());
			setPage(0);
		}, 300);
		return () => window.clearTimeout(timeout);
	}, [saisie]);
	const clientsFiltres = donnees.filter((client) => {
		if (filtreCompte === "avec-compte" && !client.userId) return false;
		if (filtreCompte === "sans-compte" && client.userId) return false;
		if (filtreVerification === "verifies" && client.isVerified === false) return false;
		if (filtreVerification === "en-attente" && client.isVerified !== false) return false;
		return true;
	});
	const nombrePages = Math.ceil(clientsFiltres.length / taillePage);
	const pageCourante = Math.min(page, Math.max(0, nombrePages - 1));
	const clientsAffiches = clientsFiltres.slice(pageCourante * taillePage, (pageCourante + 1) * taillePage);
	const debut = clientsFiltres.length === 0 ? 0 : pageCourante * taillePage + 1;
	const fin = Math.min((pageCourante + 1) * taillePage, clientsFiltres.length);
	const { register, handleSubmit, reset, formState: { errors, isSubmitting, isValid } } = useForm({
		resolver: zodResolver(FormulaireClientSchema),
		mode: "onChange",
		defaultValues: {
			firstName: "",
			lastName: "",
			email: ""
		}
	});
	const ajouterClientCree = (client) => {
		ajouter(client);
		setPage(0);
		recharger();
	};
	const ouvrirEdition = (client) => {
		setEnEdition(client);
		setLogo(null);
		setErreurLogo(null);
		if (inputLogoRef.current) inputLogoRef.current.value = "";
		reset({
			firstName: client.firstName ?? "",
			lastName: client.lastName ?? "",
			email: client.email ?? ""
		});
		setOuvert(true);
	};
	const onSubmit = async (form) => {
		if (!businessId || !enEdition) return;
		const donneesModification = {
			firstName: form.firstName || null,
			lastName: form.lastName || null,
			email: form.email || null
		};
		const action = logo ? modifierClientAvecLogo(businessId, enEdition.id, donneesModification, logo) : modifierClient(businessId, enEdition.id, donneesModification);
		await toast.promise(action, {
			loading: "Modification…",
			success: () => {
				setOuvert(false);
				setLogo(null);
				recharger();
				return "Client modifié";
			},
			error: (e) => e.message
		}).unwrap();
	};
	const choisirLogo = (fichier) => {
		setErreurLogo(null);
		if (!fichier) {
			setLogo(null);
			return;
		}
		if (![
			"image/jpeg",
			"image/png",
			"image/webp",
			"image/gif"
		].includes(fichier.type)) {
			setLogo(null);
			setErreurLogo("Choisissez une image JPG, PNG, WebP ou GIF.");
			return;
		}
		if (fichier.size > 2097152) {
			setLogo(null);
			setErreurLogo("L’image ne doit pas dépasser 2 Mo.");
			return;
		}
		setLogo(fichier);
	};
	const renvoyerInvitation = async (client) => {
		if (!businessId) return;
		setRenvoiEnCours(client.id);
		try {
			const result = await renvoyerInvitationClient(businessId, client.id);
			toast.success(result.message);
			recharger();
		} catch (error) {
			toast.error(error instanceof Error ? error.message : "Le renvoi de l’invitation a échoué.");
		} finally {
			setRenvoiEnCours(null);
		}
	};
	const supprimer = async (client) => {
		if (!businessId) return;
		setSuppressionEnCours(true);
		try {
			await toast.promise(supprimerClient(businessId, client.id), {
				loading: "Suppression…",
				success: () => {
					retirer(client.id, (element) => element.id);
					setASupprimer(null);
					return "Client supprimé";
				},
				error: (e) => e.message
			}).unwrap();
		} finally {
			setSuppressionEnCours(false);
		}
	};
	return /* @__PURE__ */ jsxs(PageRessource, {
		titre: "Clients",
		description: "Les clients rattachés à votre business.",
		businessRequis: true,
		businessId,
		chargement,
		erreur,
		onReessayer: recharger,
		action: /* @__PURE__ */ jsx(CreerClient, {
			businessId,
			onCreated: ajouterClientCree,
			onInvited: recharger
		}),
		outils: /* @__PURE__ */ jsxs("div", {
			className: "flex w-full max-w-3xl flex-wrap items-center gap-2",
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "relative min-w-48 flex-1",
					children: [/* @__PURE__ */ jsx(SearchIcon, { className: "pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" }), /* @__PURE__ */ jsx(Input, {
						value: saisie,
						onChange: (e) => setSaisie(e.target.value),
						placeholder: "Rechercher par nom ou e-mail…",
						"aria-label": "Rechercher un client",
						className: "pl-9"
					})]
				}),
				/* @__PURE__ */ jsxs(NativeSelect, {
					value: filtreCompte,
					onChange: (event) => {
						const valeur = event.currentTarget.value;
						if (valeur === "tous" || valeur === "avec-compte" || valeur === "sans-compte") {
							setFiltreCompte(valeur);
							setPage(0);
						}
					},
					"aria-label": "Filtrer les clients par compte utilisateur",
					className: "min-w-40",
					children: [
						/* @__PURE__ */ jsx(NativeSelectOption, {
							value: "tous",
							children: "Tous les clients"
						}),
						/* @__PURE__ */ jsx(NativeSelectOption, {
							value: "avec-compte",
							children: "Avec compte"
						}),
						/* @__PURE__ */ jsx(NativeSelectOption, {
							value: "sans-compte",
							children: "Sans compte"
						})
					]
				}),
				/* @__PURE__ */ jsxs(NativeSelect, {
					value: filtreVerification,
					onChange: (event) => {
						const valeur = event.currentTarget.value;
						if (valeur === "tous" || valeur === "verifies" || valeur === "en-attente") {
							setFiltreVerification(valeur);
							setPage(0);
						}
					},
					"aria-label": "Filtrer les clients par état de vérification",
					className: "min-w-40",
					children: [
						/* @__PURE__ */ jsx(NativeSelectOption, {
							value: "tous",
							children: "Vérifiés et en attente"
						}),
						/* @__PURE__ */ jsx(NativeSelectOption, {
							value: "verifies",
							children: "Vérifiés"
						}),
						/* @__PURE__ */ jsx(NativeSelectOption, {
							value: "en-attente",
							children: "En attente"
						})
					]
				})
			]
		}),
		children: [
			/* @__PURE__ */ jsx("div", {
				className: "overflow-hidden rounded-lg border",
				children: /* @__PURE__ */ jsxs(Table, { children: [/* @__PURE__ */ jsx(TableHeader, { children: /* @__PURE__ */ jsxs(TableRow, { children: [/* @__PURE__ */ jsx(TableHead, { children: "Nom du client" }), /* @__PURE__ */ jsx(TableHead, {
					className: "w-[1%] text-right",
					children: "Actions"
				})] }) }), /* @__PURE__ */ jsx(TableBody, { children: clientsAffiches.length === 0 ? /* @__PURE__ */ jsx(TableRow, { children: /* @__PURE__ */ jsx(TableCell, {
					colSpan: 2,
					className: "h-24 text-center text-muted-foreground",
					children: recherche || filtreCompte !== "tous" || filtreVerification !== "tous" ? "Aucun client ne correspond à ce filtre." : "Aucun client enregistré pour le moment."
				}) }) : clientsAffiches.map((client) => /* @__PURE__ */ jsxs(TableRow, { children: [/* @__PURE__ */ jsx(TableCell, { children: /* @__PURE__ */ jsxs("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ jsxs(Avatar$1, {
						className: "size-9",
						children: [/* @__PURE__ */ jsx(AvatarImage, {
							src: client.userImage && client.profile === "http://localhost:3000/public/images/profile-logo/image-par-defaut.png" ? client.userImage : client.profile || client.userImage || "http://localhost:3000/public/images/profile-logo/image-par-defaut.png",
							alt: client.fullName || "Profil du client"
						}), /* @__PURE__ */ jsx(AvatarFallback, { children: (client.fullName || [client.firstName, client.lastName].filter(Boolean).join(" ") || "C").charAt(0).toLocaleUpperCase("fr") })]
					}), /* @__PURE__ */ jsxs("div", {
						className: "min-w-0",
						children: [
							/* @__PURE__ */ jsx(Link, {
								to: `/clients/${client.id}`,
								className: "font-medium text-primary underline-offset-4 hover:underline",
								children: tronquerAvecEllipses(client.fullName || [client.firstName, client.lastName].filter(Boolean).join(" ") || "—", 42)
							}),
							/* @__PURE__ */ jsx("p", {
								className: "truncate text-sm text-muted-foreground",
								children: client.email || "E-mail non renseigné"
							}),
							client.isVerified === false && /* @__PURE__ */ jsx("p", {
								className: "text-xs text-amber-700",
								children: "Invitation en attente de validation"
							})
						]
					})]
				}) }), /* @__PURE__ */ jsxs(TableCell, {
					className: "text-right whitespace-nowrap",
					children: [
						client.isVerified === false && client.invitationExpiresAt && new Date(client.invitationExpiresAt).getTime() <= Date.now() && /* @__PURE__ */ jsx(Button, {
							type: "button",
							variant: "ghost",
							size: "icon",
							className: "border",
							onClick: () => void renvoyerInvitation(client),
							disabled: renvoiEnCours === client.id,
							"aria-label": `Renvoyer l’invitation à ${client.fullName ?? "ce client"}`,
							title: "Renvoyer l’invitation",
							children: /* @__PURE__ */ jsx(SendIcon, { className: "size-4" })
						}),
						/* @__PURE__ */ jsx(Button, {
							variant: "ghost",
							size: "icon",
							className: "border",
							onClick: () => ouvrirEdition(client),
							disabled: Boolean(client.userId),
							"aria-label": `Modifier ${client.fullName ?? "ce client"}`,
							title: "Modifier",
							children: /* @__PURE__ */ jsx(PencilIcon, { className: "size-4" })
						}),
						/* @__PURE__ */ jsx(Button, {
							variant: "ghost",
							size: "icon",
							className: "border border-destructive/30 text-destructive hover:bg-destructive/10",
							"aria-label": `Supprimer ${client.fullName ?? "ce client"}`,
							title: "Supprimer",
							onClick: () => setASupprimer(client),
							children: /* @__PURE__ */ jsx(Trash2Icon, { className: "size-4 text-destructive" })
						})
					]
				})] }, client.id)) })] })
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "flex flex-wrap items-center justify-between gap-4",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "flex items-center gap-2 text-sm text-muted-foreground",
					children: [
						/* @__PURE__ */ jsx("label", {
							htmlFor: "clients-par-page",
							children: "Clients par page"
						}),
						/* @__PURE__ */ jsxs(NativeSelect, {
							id: "clients-par-page",
							value: taillePage,
							onChange: (event) => {
								setTaillePage(Number(event.currentTarget.value));
								setPage(0);
							},
							"aria-label": "Nombre de clients par page",
							children: [
								/* @__PURE__ */ jsx(NativeSelectOption, {
									value: 10,
									children: "10"
								}),
								/* @__PURE__ */ jsx(NativeSelectOption, {
									value: 20,
									children: "20"
								}),
								/* @__PURE__ */ jsx(NativeSelectOption, {
									value: 50,
									children: "50"
								})
							]
						}),
						/* @__PURE__ */ jsxs("span", {
							"aria-live": "polite",
							children: [
								debut,
								"–",
								fin,
								" sur ",
								clientsFiltres.length
							]
						})
					]
				}), /* @__PURE__ */ jsxs("nav", {
					"aria-label": "Pagination des clients",
					className: "flex items-center gap-2",
					children: [
						/* @__PURE__ */ jsx(Button, {
							type: "button",
							variant: "outline",
							size: "sm",
							onClick: () => setPage(pageCourante - 1),
							disabled: pageCourante === 0,
							"aria-label": "Page précédente",
							children: "Précédent"
						}),
						/* @__PURE__ */ jsxs("span", {
							"aria-current": "page",
							className: "text-sm tabular-nums",
							children: [
								nombrePages === 0 ? 0 : pageCourante + 1,
								" / ",
								nombrePages
							]
						}),
						/* @__PURE__ */ jsx(Button, {
							type: "button",
							variant: "outline",
							size: "sm",
							onClick: () => setPage(pageCourante + 1),
							disabled: pageCourante >= nombrePages - 1,
							"aria-label": "Page suivante",
							children: "Suivant"
						})
					]
				})]
			}),
			/* @__PURE__ */ jsx(Dialog$1, {
				open: ouvert,
				onOpenChange: setOuvert,
				children: /* @__PURE__ */ jsxs(DialogContent, { children: [/* @__PURE__ */ jsxs(DialogHeader, { children: [/* @__PURE__ */ jsx(DialogTitle, { children: "Modifier le client" }), /* @__PURE__ */ jsx(DialogDescription, { children: "Renseignez au moins un nom, un prénom ou une adresse e-mail pour retrouver ce client." })] }), /* @__PURE__ */ jsxs("form", {
					onSubmit: handleSubmit(onSubmit),
					noValidate: true,
					children: [/* @__PURE__ */ jsx(FieldGroup, { children: /* @__PURE__ */ jsxs(FieldSet, { children: [
						/* @__PURE__ */ jsx(FieldLegend, {
							variant: "label",
							children: "Identité"
						}),
						/* @__PURE__ */ jsxs(Field, {
							"data-invalid": !!erreurLogo,
							children: [
								/* @__PURE__ */ jsx("input", {
									ref: inputLogoRef,
									id: "nouveau-client-logo",
									type: "file",
									accept: "image/jpeg,image/png,image/webp,image/gif",
									className: "sr-only",
									"aria-label": "Logo du client (facultatif)",
									"aria-invalid": !!erreurLogo,
									onChange: (event) => choisirLogo(event.currentTarget.files?.[0])
								}),
								/* @__PURE__ */ jsxs("label", {
									htmlFor: "nouveau-client-logo",
									className: "group flex cursor-pointer items-center gap-4 rounded-xl border border-dashed border-border bg-muted/30 p-4 transition-colors hover:border-primary/50 hover:bg-muted/60",
									children: [
										/* @__PURE__ */ jsx("span", {
											className: "flex size-16 shrink-0 items-center justify-center overflow-hidden rounded-xl border bg-background text-muted-foreground shadow-sm",
											children: apercuLogo ? /* @__PURE__ */ jsx("img", {
												src: apercuLogo,
												alt: "Aperçu du profil client",
												className: "size-full object-cover"
											}) : /* @__PURE__ */ jsx(ImagePlusIcon, {
												className: "size-7",
												"aria-hidden": "true"
											})
										}),
										/* @__PURE__ */ jsxs("span", {
											className: "min-w-0 flex-1",
											children: [/* @__PURE__ */ jsx("span", {
												className: "block truncate text-sm font-medium",
												children: logo ? logo.name : "Choisir le logo du client (facultatif)"
											}), /* @__PURE__ */ jsx("span", {
												className: "mt-1 block text-xs text-muted-foreground",
												children: "JPG, PNG, WebP ou GIF · 2 Mo maximum"
											})]
										}),
										/* @__PURE__ */ jsx(UploadIcon, {
											className: "size-4 shrink-0 text-muted-foreground",
											"aria-hidden": "true"
										})
									]
								}),
								logo && /* @__PURE__ */ jsxs(Button, {
									type: "button",
									variant: "ghost",
									size: "sm",
									className: "w-fit",
									onClick: () => {
										setLogo(null);
										if (inputLogoRef.current) inputLogoRef.current.value = "";
									},
									children: [/* @__PURE__ */ jsx(XIcon, { className: "size-4" }), "Annuler le changement de logo"]
								}),
								erreurLogo && /* @__PURE__ */ jsx("p", {
									role: "alert",
									className: "text-sm text-destructive",
									children: erreurLogo
								})
							]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "grid grid-cols-1 gap-4 sm:grid-cols-2",
							children: [/* @__PURE__ */ jsxs(Field, {
								"data-invalid": !!errors.lastName,
								children: [
									/* @__PURE__ */ jsx(FieldLabel, {
										htmlFor: "lastName",
										children: "Nom"
									}),
									/* @__PURE__ */ jsx(Input, {
										id: "lastName",
										placeholder: "Ex : Kabila",
										"aria-invalid": !!errors.lastName,
										...register("lastName")
									}),
									/* @__PURE__ */ jsx(FieldError, { errors: [errors.lastName] })
								]
							}), /* @__PURE__ */ jsxs(Field, {
								"data-invalid": !!errors.firstName,
								children: [
									/* @__PURE__ */ jsx(FieldLabel, {
										htmlFor: "firstName",
										children: "Prénom"
									}),
									/* @__PURE__ */ jsx(Input, {
										id: "firstName",
										placeholder: "Ex : Amani",
										"aria-invalid": !!errors.firstName,
										...register("firstName")
									}),
									/* @__PURE__ */ jsx(FieldError, { errors: [errors.firstName] })
								]
							})]
						}),
						/* @__PURE__ */ jsxs(Field, {
							"data-invalid": !!errors.email,
							children: [
								/* @__PURE__ */ jsx(FieldLabel, {
									htmlFor: "email",
									children: "Email"
								}),
								/* @__PURE__ */ jsx(Input, {
									id: "email",
									type: "email",
									placeholder: "client@exemple.cd",
									"aria-invalid": !!errors.email,
									disabled: !!enEdition?.userId,
									...register("email")
								}),
								enEdition?.userId ? /* @__PURE__ */ jsx(FieldDescription, { children: "Cette adresse provient du compte utilisateur rattaché." }) : errors.email ? /* @__PURE__ */ jsx(FieldError, { errors: [errors.email] }) : /* @__PURE__ */ jsx(FieldDescription, { children: "Sert à rattacher le client à un compte existant." })
							]
						})
					] }) }), /* @__PURE__ */ jsxs(DialogFooter, {
						className: "mt-6",
						children: [/* @__PURE__ */ jsx(Button, {
							type: "button",
							variant: "outline",
							onClick: () => setOuvert(false),
							disabled: isSubmitting,
							children: "Annuler"
						}), /* @__PURE__ */ jsx(Button, {
							type: "submit",
							disabled: !isValid || isSubmitting || !!erreurLogo,
							children: isSubmitting ? "Enregistrement…" : "Enregistrer"
						})]
					})]
				})] })
			}),
			/* @__PURE__ */ jsx(AlertDialog$1, {
				open: aSupprimer !== null,
				onOpenChange: (open) => {
					if (!open && !suppressionEnCours) setASupprimer(null);
				},
				children: /* @__PURE__ */ jsxs(AlertDialogContent, { children: [/* @__PURE__ */ jsxs(AlertDialogHeader, { children: [/* @__PURE__ */ jsx(AlertDialogTitle, { children: "Supprimer ce client ?" }), /* @__PURE__ */ jsxs(AlertDialogDescription, { children: [
					"Le client « ",
					aSupprimer?.fullName || "sans nom",
					" » sera supprimé. Cette action est irréversible."
				] })] }), /* @__PURE__ */ jsxs(AlertDialogFooter, { children: [/* @__PURE__ */ jsx(AlertDialogCancel, {
					disabled: suppressionEnCours,
					children: "Annuler"
				}), /* @__PURE__ */ jsx(AlertDialogAction, {
					variant: "destructive",
					disabled: suppressionEnCours,
					onClick: () => {
						if (aSupprimer) supprimer(aSupprimer);
					},
					children: suppressionEnCours ? "Suppression…" : "Supprimer"
				})] })] })
			})
		]
	});
});
//#endregion
//#region app/lib/apis.ts
var creer_business = async (form) => {
	const token = await getToken();
	const response = await fetch(`${API}/api/businesses`, {
		method: "POST",
		headers: {
			"Authorization": `${token}`,
			"Content-Type": "application/json"
		},
		body: JSON.stringify(form)
	});
	const responseText = await response.text();
	let result = null;
	if (responseText) try {
		result = JSON.parse(responseText);
	} catch {
		result = { message: responseText };
	}
	if (!response.ok) throw new Error(result?.message || "La création du business a échoué");
	return result;
};
var creer_user = async () => {
	const token = await getToken();
	if (!token) throw new Error("Votre session a expiré. Veuillez vous reconnecter.");
	const response = await fetch(`${API}/auth/createUser`, {
		method: "POST",
		headers: {
			"Authorization": `${token}`,
			"Content-Type": "application/json"
		}
	});
	const responseText = await response.text();
	let result = null;
	if (responseText) try {
		result = JSON.parse(responseText);
	} catch {
		result = null;
	}
	if (!response.ok) throw new Error(result?.message || `L'enregistrement a échoué (HTTP ${response.status}).`);
	if (!result) throw new Error("Le serveur a renvoyé une réponse invalide lors de l'enregistrement.");
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
var modifier_contact = async (id, form) => {
	const token = await getToken();
	const response = await fetch(`${API}/contacts/${id}`, {
		method: "PUT",
		headers: {
			"Authorization": `${token}`,
			"Content-Type": "application/json"
		},
		body: JSON.stringify(form)
	});
	const result = await response.json();
	if (!response.ok || result.success === false) throw new Error(result.message || "La modification du contact a échoué.");
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
//#region app/components/ressource/avatar-ressource.tsx
/**
* Les images « par défaut » du serveur pointent sur localhost et renvoient
* souvent un 404 : on les traite comme absentes pour afficher directement
* l'avatar généré plutôt qu'attendre l'échec du chargement.
*/
function estImagePlaceholder(url) {
	if (!url?.trim()) return true;
	return url.includes("image-par-defaut") || url.includes("default-logo") || url.includes("image-par-default");
}
function initiales(nom) {
	const mots = nom.trim().split(/\s+/).filter((mot) => /\p{L}/u.test(mot));
	if (mots.length === 0) return "?";
	if (mots.length === 1) return mots[0].slice(0, 2).toLocaleUpperCase("fr");
	return (mots[0][0] + mots[1][0]).toLocaleUpperCase("fr");
}
/** Teinte stable dérivée du nom, pour que chaque fiche garde la même couleur. */
var TEINTES = [
	"bg-sky-100 text-sky-900",
	"bg-emerald-100 text-emerald-900",
	"bg-amber-100 text-amber-900",
	"bg-violet-100 text-violet-900",
	"bg-rose-100 text-rose-900",
	"bg-teal-100 text-teal-900"
];
function teinte(nom) {
	let somme = 0;
	for (const caractere of nom) somme = (somme + caractere.codePointAt(0)) % 4096;
	return TEINTES[somme % TEINTES.length];
}
/**
* Affiche le logo ou la photo si elle existe, sinon un avatar généré à partir
* des initiales. Utilisé sur les fiches client, fournisseur et travailleur.
*/
function AvatarRessource({ src, nom, className, classNameTexte }) {
	const image = estImagePlaceholder(src) ? null : src;
	return /* @__PURE__ */ jsxs(Avatar$1, {
		className: cn$1("size-16", className),
		children: [image && /* @__PURE__ */ jsx(AvatarImage, {
			src: image,
			alt: nom,
			className: "object-cover"
		}), /* @__PURE__ */ jsx(AvatarFallback, {
			className: cn$1("font-semibold", teinte(nom), classNameTexte),
			children: initiales(nom)
		})]
	});
}
//#endregion
//#region app/routes/clients/detail.tsx
var detail_exports$2 = /* @__PURE__ */ __exportAll({ default: () => detail_default$2 });
var InformationsClientSchema = z.object({
	firstName: z.string().trim().max(50, "Le prénom ne peut pas dépasser 50 caractères.").refine((value) => value.length === 0 || value.length >= 4, "Le prénom doit contenir au moins 4 caractères."),
	lastName: z.string().trim().max(50, "Le nom ne peut pas dépasser 50 caractères.").refine((value) => value.length === 0 || value.length >= 4, "Le nom doit contenir au moins 4 caractères."),
	email: z.union([z.literal(""), z.email("L’adresse e-mail est invalide.")]),
	sex: z.enum(["HOMME", "FEMME"]).or(z.literal("")),
	birthday: z.union([z.literal(""), z.iso.date("La date de naissance est invalide.")]),
	pays: z.string().max(50, "Le pays ne peut pas dépasser 50 caractères."),
	ville: z.string().max(50, "La ville ne peut pas dépasser 50 caractères."),
	region: z.string().max(50, "La région ne peut pas dépasser 50 caractères."),
	adresse: z.string().max(50, "L’adresse ne peut pas dépasser 50 caractères."),
	codePostal: z.string().max(20, "Le code postal ne peut pas dépasser 20 caractères.")
});
var detail_default$2 = UNSAFE_withComponentProps(function DetailClient() {
	const { businessId } = useBusiness();
	const { id } = useParams();
	const navigate = useNavigate();
	const [client, setClient] = useState(null);
	const [chargement, setChargement] = useState(true);
	const [erreur, setErreur] = useState(null);
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [sex, setSex] = useState("");
	const [birthday, setBirthday] = useState("");
	const [pays, setPays] = useState("");
	const [ville, setVille] = useState("");
	const [region, setRegion] = useState("");
	const [adresse, setAdresse] = useState("");
	const [codePostal, setCodePostal] = useState("");
	const [erreursFormulaire, setErreursFormulaire] = useState({});
	const [contactEdite, setContactEdite] = useState(null);
	const [typeContact, setTypeContact] = useState("PHONE");
	const [emailContact, setEmailContact] = useState("");
	const [telephone, setTelephone] = useState("");
	const [dialogContact, setDialogContact] = useState(false);
	const [aSupprimer, setASupprimer] = useState(null);
	const [enCours, setEnCours] = useState(false);
	const [enregistrementInfos, setEnregistrementInfos] = useState(false);
	const [logo, setLogo] = useState(null);
	const [apercuLogo, setApercuLogo] = useState(null);
	const [erreurLogo, setErreurLogo] = useState(null);
	const [renvoiEnCours, setRenvoiEnCours] = useState(false);
	const inputLogoRef = useRef(null);
	const charger = useCallback(async () => {
		if (!businessId || !id) return;
		setChargement(true);
		setErreur(null);
		try {
			const resultat = await lireClient(businessId, id);
			setClient(resultat);
			setFirstName(resultat.firstName ?? "");
			setLastName(resultat.lastName ?? "");
			setEmail(resultat.email ?? "");
			setSex(resultat.sex === "HOMME" || resultat.sex === "FEMME" ? resultat.sex : "");
			setBirthday(resultat.birthday?.slice(0, 10) ?? "");
			const adresseAffichee = resultat.adresses[0] ?? resultat.userAdresses[0];
			setPays(adresseAffichee?.pays ?? "");
			setVille(adresseAffichee?.ville ?? "");
			setRegion(adresseAffichee?.region ?? "");
			setAdresse(adresseAffichee?.adresse ?? "");
			setCodePostal(adresseAffichee?.codePostal ?? "");
		} catch (error) {
			setErreur(error instanceof Error ? error.message : "Impossible de charger le client.");
		} finally {
			setChargement(false);
		}
	}, [businessId, id]);
	useEffect(() => {
		charger();
	}, [charger]);
	useEffect(() => {
		if (!logo) {
			setApercuLogo(client?.profile ?? null);
			return;
		}
		const url = URL.createObjectURL(logo);
		setApercuLogo(url);
		return () => URL.revokeObjectURL(url);
	}, [client?.profile, logo]);
	const executerMutation = async (operation, succes, rafraichir = true) => {
		setEnCours(true);
		try {
			await operation();
			toast.success(succes);
			if (rafraichir) await charger();
			return true;
		} catch (error) {
			toast.error(error instanceof Error ? error.message : "L’opération a échoué.");
			return false;
		} finally {
			setEnCours(false);
		}
	};
	const enregistrerInformations = async (event) => {
		event.preventDefault();
		if (!businessId || !id || !client) return;
		const validation = InformationsClientSchema.safeParse({
			firstName,
			lastName,
			email,
			sex,
			birthday,
			pays,
			ville,
			region,
			adresse,
			codePostal
		});
		if (!validation.success) {
			const erreurs = {};
			for (const issue of validation.error.issues) {
				const champ = issue.path[0];
				if (typeof champ === "string") erreurs[champ] = issue.message;
			}
			setErreursFormulaire(erreurs);
			return;
		}
		setErreursFormulaire({});
		const values = validation.data;
		const firstNameChanged = values.firstName !== (client.firstName ?? "");
		const lastNameChanged = values.lastName !== (client.lastName ?? "");
		const emailChanged = values.email !== (client.email ?? "");
		const sexChanged = values.sex !== (client.sex ?? "");
		const birthdayChanged = values.birthday !== (client.birthday?.slice(0, 10) ?? "");
		const clientChanged = firstNameChanged || lastNameChanged || emailChanged || sexChanged || birthdayChanged;
		const existingAddress = client.adresses[0];
		const addressChanged = values.pays !== (existingAddress?.pays ?? "") || values.ville !== (existingAddress?.ville ?? "") || values.region !== (existingAddress?.region ?? "") || values.adresse !== (existingAddress?.adresse ?? "") || values.codePostal !== (existingAddress?.codePostal ?? "");
		const profileChanged = logo !== null;
		if (!clientChanged && !addressChanged && !profileChanged) return;
		setEnregistrementInfos(true);
		try {
			await executerMutation(async () => {
				if (clientChanged || profileChanged) {
					const form = {
						...firstNameChanged ? { firstName: values.firstName || null } : {},
						...lastNameChanged ? { lastName: values.lastName || null } : {},
						...emailChanged ? { email: values.email || null } : {},
						...sexChanged ? { sex: values.sex || null } : {},
						...birthdayChanged ? { birthday: values.birthday ? (/* @__PURE__ */ new Date(`${values.birthday}T00:00:00.000Z`)).toISOString() : null } : {}
					};
					let profilEnregistre = client.profile;
					if (profileChanged) profilEnregistre = (await modifierClientAvecLogo(businessId, id, form, logo)).data.profile ?? profilEnregistre;
					else await modifierClient(businessId, id, form);
					setClient((current) => current ? {
						...current,
						profile: profilEnregistre ?? current.profile ?? "http://localhost:3000/public/images/profile-logo/image-par-defaut.png"
					} : current);
					setLogo(null);
				}
				let addressUpdated = existingAddress;
				if (addressChanged) {
					const addressForm = {
						pays: values.pays,
						ville: values.ville,
						region: values.region,
						adresse: values.adresse,
						codePostal: values.codePostal,
						clientId: id
					};
					const result = existingAddress ? await modifier_adresse(existingAddress.id, addressForm) : await creer_adresse(addressForm);
					if (!result.success) throw new Error(result.message || "La mise à jour de l’adresse a échoué.");
					const addressId = existingAddress?.id ?? result.data?.id;
					if (typeof addressId !== "string") throw new Error("L’adresse a été enregistrée, mais sa référence est introuvable.");
					addressUpdated = {
						id: addressId,
						pays: values.pays,
						ville: values.ville,
						region: values.region,
						adresse: values.adresse,
						codePostal: values.codePostal || null
					};
				}
				const persistedFirstName = values.firstName;
				const persistedLastName = values.lastName;
				const persistedEmail = values.email;
				const fullName = [persistedFirstName, persistedLastName].filter(Boolean).join(" ");
				setClient((current) => current ? {
					...current,
					...clientChanged ? {
						firstName: persistedFirstName || null,
						lastName: persistedLastName || null,
						fullName: fullName || null,
						email: persistedEmail || null,
						sex: values.sex || null,
						birthday: values.birthday ? (/* @__PURE__ */ new Date(`${values.birthday}T00:00:00.000Z`)).toISOString() : null
					} : {},
					adresses: addressUpdated ? [addressUpdated, ...current.adresses.slice(1)] : current.adresses
				} : current);
				setFirstName(persistedFirstName);
				setLastName(persistedLastName);
				setEmail(persistedEmail);
				setSex(values.sex);
				setBirthday(values.birthday);
			}, "Les informations du client ont été modifiées.", false);
		} finally {
			setEnregistrementInfos(false);
		}
	};
	const choisirLogo = (fichier) => {
		setErreurLogo(null);
		if (!fichier) {
			setLogo(null);
			return;
		}
		if (![
			"image/jpeg",
			"image/png",
			"image/webp",
			"image/gif"
		].includes(fichier.type)) {
			setLogo(null);
			setErreurLogo("Choisissez une image JPG, PNG, WebP ou GIF.");
			return;
		}
		if (fichier.size > 2097152) {
			setLogo(null);
			setErreurLogo("L’image ne doit pas dépasser 2 Mo.");
			return;
		}
		setLogo(fichier);
	};
	const renvoyerInvitation = async () => {
		if (!businessId || !client) return;
		setRenvoiEnCours(true);
		try {
			const resultat = await renvoyerInvitationClient(businessId, client.id);
			toast.success(resultat.message);
			await charger();
		} catch (error) {
			toast.error(error instanceof Error ? error.message : "Le renvoi de l’invitation a échoué.");
		} finally {
			setRenvoiEnCours(false);
		}
	};
	const informationsModifiees = client !== null && (firstName !== (client.firstName ?? "") || lastName !== (client.lastName ?? "") || email !== (client.email ?? "") || sex !== (client.sex ?? "") || birthday !== (client.birthday?.slice(0, 10) ?? "") || logo !== null || pays !== (client.adresses[0]?.pays ?? "") || ville !== (client.adresses[0]?.ville ?? "") || region !== (client.adresses[0]?.region ?? "") || adresse !== (client.adresses[0]?.adresse ?? "") || codePostal !== (client.adresses[0]?.codePostal ?? ""));
	const ouvrirCreationContact = () => {
		setContactEdite(null);
		setTypeContact("PHONE");
		setEmailContact("");
		setTelephone("");
		setDialogContact(true);
	};
	const ouvrirModificationContact = (item) => {
		setContactEdite(item);
		setTypeContact(item.type === "EMAIL" ? "EMAIL" : "PHONE");
		setEmailContact(item.email ?? "");
		setTelephone(item.phone ?? "");
		setDialogContact(true);
	};
	const enregistrerContact = async (event) => {
		event.preventDefault();
		if (!id) return;
		const form = typeContact === "EMAIL" ? {
			type: "EMAIL",
			email: emailContact,
			phone: null,
			clientId: id
		} : {
			type: "PHONE",
			phone: telephone,
			email: null,
			clientId: id
		};
		if (await executerMutation(async () => {
			const result = contactEdite ? await modifier_contact(contactEdite.id, form) : await creer_contact(form);
			if (!result.success) throw new Error(result.message || "L’enregistrement du contact a échoué.");
			const contactId = contactEdite?.id ?? result.data?.id;
			if (typeof contactId !== "string") throw new Error("Le contact a été enregistré, mais sa référence est introuvable.");
			const updatedContact = {
				id: contactId,
				type: typeContact,
				label: contactEdite?.label ?? result.data?.label ?? null,
				email: typeContact === "EMAIL" ? emailContact : null,
				phone: typeContact === "PHONE" ? telephone : null,
				status: contactEdite?.status ?? result.data?.status ?? "EN_ATTENTE"
			};
			setClient((current) => current ? {
				...current,
				contacts: contactEdite ? current.contacts.map((item) => item.id === updatedContact.id ? updatedContact : item) : [...current.contacts, updatedContact]
			} : current);
		}, contactEdite ? "Le contact a été modifié." : "Le contact a été ajouté.", false)) setDialogContact(false);
	};
	const confirmerSuppression = async () => {
		if (!aSupprimer || !businessId) return;
		if (aSupprimer.type === "client") {
			if (await executerMutation(() => supprimerClient(businessId, aSupprimer.id).then(() => void 0), "Le client a été supprimé.", false)) navigate("/clients");
			return;
		}
		if (await executerMutation(async () => {
			const result = await supprimer_contact(aSupprimer.id);
			if (!result.success) throw new Error(result.message || "La suppression du contact a échoué.");
			setClient((current) => current ? {
				...current,
				contacts: current.contacts.filter((contact) => contact.id !== aSupprimer.id)
			} : current);
		}, "Le contact a été supprimé.", false)) setASupprimer(null);
	};
	if (chargement) return /* @__PURE__ */ jsx("p", {
		className: "p-6 text-sm text-muted-foreground",
		children: "Chargement du client…"
	});
	if (erreur || !client) return /* @__PURE__ */ jsxs("main", {
		className: "space-y-4 p-6",
		children: [/* @__PURE__ */ jsx("p", {
			role: "alert",
			className: "text-destructive",
			children: erreur ?? "Client introuvable."
		}), /* @__PURE__ */ jsx(Link, {
			to: "/clients",
			className: "inline-flex h-8 items-center rounded-lg border px-3 text-sm hover:bg-muted",
			children: "Retour aux clients"
		})]
	});
	const nomClient = client.fullName || [client.firstName, client.lastName].filter(Boolean).join(" ") || "Client";
	const compteExistant = Boolean(client.userId);
	const imageClient = client.userImage || (client.profile && client.profile !== "http://localhost:3000/public/images/profile-logo/image-par-defaut.png" ? client.profile : "/images/profil-client-par-defaut.svg");
	const paysSelect = items.find((item) => item.value?.toLowerCase() === pays.toLowerCase())?.value ?? null;
	const adresseDuCompte = client.adresses.length === 0 && client.userAdresses.length > 0;
	return /* @__PURE__ */ jsxs("main", {
		className: "space-y-5 p-4 lg:p-6",
		children: [
			/* @__PURE__ */ jsxs(Link, {
				to: "/clients",
				className: "inline-flex h-8 w-fit items-center gap-2 rounded-lg px-2.5 text-sm font-medium hover:bg-muted",
				children: [/* @__PURE__ */ jsx(ArrowLeft, { className: "size-4" }), " Retour aux clients"]
			}),
			/* @__PURE__ */ jsxs("header", { children: [
				/* @__PURE__ */ jsx("h1", {
					className: "text-2xl font-semibold",
					children: nomClient
				}),
				/* @__PURE__ */ jsx("p", {
					className: "text-sm text-muted-foreground",
					children: client.isVerified ? "Client vérifié" : "Invitation en attente de validation"
				}),
				client.isVerified === false && client.invitationExpiresAt && new Date(client.invitationExpiresAt).getTime() <= Date.now() && /* @__PURE__ */ jsxs(Button, {
					type: "button",
					variant: "outline",
					className: "mt-2",
					onClick: () => void renvoyerInvitation(),
					disabled: renvoiEnCours,
					children: [/* @__PURE__ */ jsx(Send, { className: "size-4" }), renvoiEnCours ? "Envoi…" : "Renvoyer l’invitation"]
				})
			] }),
			/* @__PURE__ */ jsxs(Tabs, {
				defaultValue: "activites",
				className: "w-full",
				children: [
					/* @__PURE__ */ jsxs(TabsList, {
						className: "h-auto w-full flex-wrap justify-start",
						children: [/* @__PURE__ */ jsx(TabsTrigger, {
							value: "activites",
							children: "Activités"
						}), /* @__PURE__ */ jsx(TabsTrigger, {
							value: "informations",
							children: "Informations"
						})]
					}),
					/* @__PURE__ */ jsxs(TabsContent, {
						value: "activites",
						className: "space-y-3 pt-4",
						children: [/* @__PURE__ */ jsx("h2", {
							className: "text-lg font-medium",
							children: "Activités du client"
						}), /* @__PURE__ */ jsx("p", {
							className: "rounded-lg border p-5 text-sm text-muted-foreground",
							children: "Les opérations de vente ne sont pas encore associées aux clients dans les données actuelles."
						})]
					}),
					/* @__PURE__ */ jsxs(TabsContent, {
						value: "informations",
						className: "space-y-4 pt-4",
						children: [
							/* @__PURE__ */ jsxs("section", {
								className: "space-y-4 rounded-xl border p-4",
								children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h2", {
									className: "font-semibold",
									children: "Informations du client"
								}), /* @__PURE__ */ jsx("p", {
									className: "text-sm text-muted-foreground",
									children: "Identité et adresse principale."
								})] }), /* @__PURE__ */ jsx("form", {
									onSubmit: enregistrerInformations,
									children: /* @__PURE__ */ jsxs("fieldset", {
										disabled: compteExistant,
										className: "m-0 min-w-0 space-y-4 border-0 p-0",
										children: [
											/* @__PURE__ */ jsxs("div", {
												className: "space-y-2",
												children: [
													/* @__PURE__ */ jsx("span", {
														className: "text-sm font-medium",
														children: "Logo du client"
													}),
													/* @__PURE__ */ jsx("input", {
														ref: inputLogoRef,
														id: "client-profile-logo",
														type: "file",
														accept: "image/jpeg,image/png,image/webp,image/gif",
														className: "sr-only",
														"aria-label": "Logo du client",
														"aria-invalid": !!erreurLogo,
														onChange: (event) => choisirLogo(event.currentTarget.files?.[0])
													}),
													/* @__PURE__ */ jsxs("label", {
														htmlFor: "client-profile-logo",
														className: "group flex cursor-pointer items-center gap-4 rounded-xl border border-dashed border-border bg-muted/30 p-4 transition-colors hover:border-primary/50 hover:bg-muted/60",
														children: [
															/* @__PURE__ */ jsx("span", {
																className: "flex size-16 shrink-0 items-center justify-center overflow-hidden rounded-xl border bg-background text-muted-foreground shadow-sm",
																children: logo && apercuLogo ? /* @__PURE__ */ jsx("img", {
																	src: apercuLogo,
																	alt: "Aperçu du logo client",
																	className: "size-full object-cover"
																}) : /* @__PURE__ */ jsx("img", {
																	src: imageClient,
																	alt: client.userImage ? `Photo de ${nomClient}` : "Image par défaut du client",
																	className: "size-full object-cover"
																})
															}),
															/* @__PURE__ */ jsxs("span", {
																className: "min-w-0 flex-1",
																children: [/* @__PURE__ */ jsx("span", {
																	className: "block truncate text-sm font-medium",
																	children: logo?.name ?? "Choisir le logo (facultatif)"
																}), /* @__PURE__ */ jsx("span", {
																	className: "mt-1 block text-xs text-muted-foreground",
																	children: "JPG, PNG, WebP ou GIF · 2 Mo maximum"
																})]
															}),
															/* @__PURE__ */ jsx(Upload, {
																className: "size-4 shrink-0 text-muted-foreground",
																"aria-hidden": "true"
															})
														]
													}),
													logo && /* @__PURE__ */ jsxs(Button, {
														type: "button",
														variant: "ghost",
														size: "sm",
														className: "w-fit",
														onClick: () => {
															setLogo(null);
															if (inputLogoRef.current) inputLogoRef.current.value = "";
														},
														children: [/* @__PURE__ */ jsx(X, { className: "size-4" }), "Annuler le changement de logo"]
													}),
													erreurLogo && /* @__PURE__ */ jsx("p", {
														role: "alert",
														className: "text-sm text-destructive",
														children: erreurLogo
													})
												]
											}),
											/* @__PURE__ */ jsxs("div", {
												className: "grid gap-4 sm:grid-cols-2",
												children: [/* @__PURE__ */ jsxs("label", {
													className: "block space-y-1 text-sm",
													children: [
														/* @__PURE__ */ jsx("span", { children: "Nom" }),
														/* @__PURE__ */ jsx(Input, {
															value: lastName,
															onChange: (event) => setLastName(event.currentTarget.value),
															placeholder: "Nom",
															"aria-invalid": !!erreursFormulaire.lastName
														}),
														erreursFormulaire.lastName && /* @__PURE__ */ jsx("span", {
															className: "text-sm text-destructive",
															children: erreursFormulaire.lastName
														})
													]
												}), /* @__PURE__ */ jsxs("label", {
													className: "block space-y-1 text-sm",
													children: [
														/* @__PURE__ */ jsx("span", { children: "Prénom" }),
														/* @__PURE__ */ jsx(Input, {
															value: firstName,
															onChange: (event) => setFirstName(event.currentTarget.value),
															placeholder: "Prénom",
															"aria-invalid": !!erreursFormulaire.firstName
														}),
														erreursFormulaire.firstName && /* @__PURE__ */ jsx("span", {
															className: "text-sm text-destructive",
															children: erreursFormulaire.firstName
														})
													]
												})]
											}),
											/* @__PURE__ */ jsxs("label", {
												className: "block space-y-1 text-sm",
												children: [
													/* @__PURE__ */ jsx("span", { children: "E-mail" }),
													/* @__PURE__ */ jsx(Input, {
														type: "email",
														value: email,
														onChange: (event) => setEmail(event.currentTarget.value),
														placeholder: "Adresse e-mail",
														"aria-invalid": !!erreursFormulaire.email,
														disabled: !!client.userId,
														"aria-describedby": client.userId ? "client-email-aide" : void 0
													}),
													client.userId && /* @__PURE__ */ jsx("span", {
														id: "client-email-aide",
														className: "text-xs text-muted-foreground",
														children: "Cette adresse provient du compte utilisateur rattaché."
													}),
													erreursFormulaire.email && /* @__PURE__ */ jsx("span", {
														className: "text-sm text-destructive",
														children: erreursFormulaire.email
													})
												]
											}),
											/* @__PURE__ */ jsxs("div", {
												className: "grid gap-4 sm:grid-cols-2",
												children: [/* @__PURE__ */ jsxs("label", {
													className: "block space-y-1 text-sm",
													children: [/* @__PURE__ */ jsx("span", { children: "Sexe" }), /* @__PURE__ */ jsxs(Select, {
														value: sex || null,
														onValueChange: (value) => setSex(value === "HOMME" || value === "FEMME" ? value : ""),
														children: [/* @__PURE__ */ jsx(SelectTrigger, {
															className: "w-full",
															"aria-label": "Sexe",
															children: /* @__PURE__ */ jsx(SelectValue, { placeholder: "Sélectionner" })
														}), /* @__PURE__ */ jsx(SelectContent, { children: /* @__PURE__ */ jsxs(SelectGroup, { children: [/* @__PURE__ */ jsx(SelectItem, {
															value: "HOMME",
															children: "Homme"
														}), /* @__PURE__ */ jsx(SelectItem, {
															value: "FEMME",
															children: "Femme"
														})] }) })]
													})]
												}), /* @__PURE__ */ jsxs("label", {
													className: "block space-y-1 text-sm",
													children: [
														/* @__PURE__ */ jsx("span", { children: "Date de naissance" }),
														/* @__PURE__ */ jsx(Input, {
															type: "date",
															value: birthday,
															max: (/* @__PURE__ */ new Date()).toISOString().slice(0, 10),
															onChange: (event) => setBirthday(event.currentTarget.value),
															"aria-invalid": !!erreursFormulaire.birthday
														}),
														erreursFormulaire.birthday && /* @__PURE__ */ jsx("span", {
															className: "text-sm text-destructive",
															children: erreursFormulaire.birthday
														})
													]
												})]
											}),
											/* @__PURE__ */ jsxs("div", {
												className: "space-y-3",
												children: [
													/* @__PURE__ */ jsx("h3", {
														className: "text-sm font-medium",
														children: "Adresse"
													}),
													/* @__PURE__ */ jsx("p", {
														className: "text-sm text-muted-foreground",
														children: compteExistant ? "Les informations de ce compte utilisateur sont en lecture seule." : adresseDuCompte ? "Pré-remplie depuis le compte utilisateur rattaché. L’enregistrer en crée une copie propre à votre business." : "Indiquez l’adresse principale du client."
													}),
													/* @__PURE__ */ jsxs("div", {
														className: "grid gap-4 sm:grid-cols-2",
														children: [
															/* @__PURE__ */ jsxs("label", {
																className: "block space-y-1 text-sm",
																children: [/* @__PURE__ */ jsx("span", { children: "Pays" }), /* @__PURE__ */ jsxs(Select, {
																	value: paysSelect,
																	onValueChange: (value) => setPays(value ?? ""),
																	children: [/* @__PURE__ */ jsx(SelectTrigger, {
																		className: "w-full",
																		"aria-label": "Pays",
																		children: /* @__PURE__ */ jsx(SelectValue, { placeholder: "Sélectionner un pays" })
																	}), /* @__PURE__ */ jsx(SelectContent, { children: /* @__PURE__ */ jsx(SelectGroup, { children: items.filter((item) => item.value !== null).map((item) => /* @__PURE__ */ jsx(SelectItem, {
																		value: item.value,
																		children: item.label
																	}, item.value)) }) })]
																})]
															}),
															/* @__PURE__ */ jsxs("label", {
																className: "block space-y-1 text-sm",
																children: [/* @__PURE__ */ jsx("span", { children: "Ville" }), /* @__PURE__ */ jsx(Input, {
																	value: ville,
																	onChange: (event) => setVille(event.currentTarget.value),
																	placeholder: "Ville"
																})]
															}),
															/* @__PURE__ */ jsxs("label", {
																className: "block space-y-1 text-sm",
																children: [/* @__PURE__ */ jsx("span", { children: "Région / Commune" }), /* @__PURE__ */ jsx(Input, {
																	value: region,
																	onChange: (event) => setRegion(event.currentTarget.value),
																	placeholder: "Région / Commune"
																})]
															}),
															/* @__PURE__ */ jsxs("label", {
																className: "block space-y-1 text-sm",
																children: [/* @__PURE__ */ jsx("span", { children: "Adresse" }), /* @__PURE__ */ jsx(Input, {
																	value: adresse,
																	onChange: (event) => setAdresse(event.currentTarget.value),
																	placeholder: "Adresse"
																})]
															}),
															/* @__PURE__ */ jsxs("label", {
																className: "col-span-full block space-y-1 text-sm",
																children: [/* @__PURE__ */ jsx("span", { children: "Code postal (optionnel)" }), /* @__PURE__ */ jsx(Input, {
																	value: codePostal,
																	onChange: (event) => setCodePostal(event.currentTarget.value),
																	placeholder: "Code postal"
																})]
															})
														]
													})
												]
											}),
											/* @__PURE__ */ jsx("div", {
												className: "flex justify-end",
												children: /* @__PURE__ */ jsxs(Button, {
													type: "submit",
													disabled: compteExistant || enCours || !informationsModifiees || !!erreurLogo,
													children: [enregistrementInfos && /* @__PURE__ */ jsx(Loader2, {
														className: "size-4 animate-spin",
														"aria-hidden": "true"
													}), "Personnaliser"]
												})
											})
										]
									})
								})]
							}),
							/* @__PURE__ */ jsx("section", {
								className: "space-y-4 rounded-xl border p-4",
								children: compteExistant ? /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h2", {
									className: "font-semibold",
									children: "Contacts de l’utilisateur invité"
								}), /* @__PURE__ */ jsx("p", {
									className: "text-sm text-muted-foreground",
									children: "Coordonnées renseignées sur son compte. Elles ne sont pas modifiables depuis votre business."
								})] }), client.userContacts.length > 0 ? /* @__PURE__ */ jsx("ul", {
									className: "grid grid-cols-1 gap-2 sm:grid-cols-2",
									children: client.userContacts.map((item) => /* @__PURE__ */ jsxs("li", {
										className: "flex items-center justify-between gap-3 rounded-lg border border-dashed bg-muted/30 p-3",
										children: [/* @__PURE__ */ jsxs("span", {
											className: "flex min-w-0 items-center gap-2 text-sm",
											children: [item.type === "EMAIL" ? /* @__PURE__ */ jsx(Mail, { className: "size-4 shrink-0" }) : /* @__PURE__ */ jsx(Phone, { className: "size-4 shrink-0" }), /* @__PURE__ */ jsx("span", {
												className: "truncate",
												children: item.email || item.phone || item.label || "Contact"
											})]
										}), item.status === "VERIFIE" && /* @__PURE__ */ jsx("span", {
											className: "shrink-0 text-xs text-muted-foreground",
											children: "Vérifié"
										})]
									}, item.id))
								}) : /* @__PURE__ */ jsx("p", {
									className: "text-sm text-muted-foreground",
									children: "Aucun contact n’est renseigné sur ce compte utilisateur."
								})] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
									/* @__PURE__ */ jsxs("div", {
										className: "flex items-start justify-between gap-3",
										children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h2", {
											className: "font-semibold",
											children: "Contacts"
										}), /* @__PURE__ */ jsx("p", {
											className: "text-sm text-muted-foreground",
											children: "Coordonnées téléphoniques et e-mail du client."
										})] }), /* @__PURE__ */ jsxs(Button, {
											variant: "outline",
											className: "border",
											onClick: ouvrirCreationContact,
											disabled: client.contacts.length >= 3,
											children: [/* @__PURE__ */ jsx(Plus, {}), " Ajouter"]
										})]
									}),
									client.contacts.length >= 3 && /* @__PURE__ */ jsx("p", {
										className: "text-sm text-muted-foreground",
										children: "Le client a atteint la limite de trois contacts."
									}),
									client.contacts.length ? /* @__PURE__ */ jsx("ul", {
										className: "grid grid-cols-1 gap-2 sm:grid-cols-2",
										children: client.contacts.map((item) => /* @__PURE__ */ jsxs("li", {
											className: "flex items-center justify-between gap-3 rounded-lg border p-3",
											children: [/* @__PURE__ */ jsxs("span", {
												className: "flex min-w-0 items-center gap-2 text-sm",
												children: [item.type === "EMAIL" ? /* @__PURE__ */ jsx(Mail, { className: "size-4 shrink-0" }) : /* @__PURE__ */ jsx(Phone, { className: "size-4 shrink-0" }), /* @__PURE__ */ jsx("span", {
													className: "truncate",
													children: item.email || item.phone || item.label || "Contact"
												})]
											}), /* @__PURE__ */ jsxs("div", {
												className: "flex shrink-0 gap-1",
												children: [/* @__PURE__ */ jsx(Button, {
													variant: "ghost",
													size: "icon",
													className: "border",
													"aria-label": "Modifier le contact",
													onClick: () => ouvrirModificationContact(item),
													children: /* @__PURE__ */ jsx(Pencil, {})
												}), /* @__PURE__ */ jsx(Button, {
													variant: "ghost",
													size: "icon",
													className: "border text-destructive",
													"aria-label": "Supprimer le contact",
													onClick: () => setASupprimer({
														type: "contact",
														id: item.id,
														label: item.email || item.phone || item.label || "ce contact"
													}),
													children: /* @__PURE__ */ jsx(Trash2, {})
												})]
											})]
										}, item.id))
									}) : /* @__PURE__ */ jsx("p", {
										className: "text-sm text-muted-foreground",
										children: "Aucun contact renseigné."
									})
								] })
							}),
							/* @__PURE__ */ jsxs("section", {
								className: "space-y-4 rounded-xl border border-destructive/30 p-4",
								children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h2", {
									className: "font-semibold",
									children: "Zone de danger"
								}), /* @__PURE__ */ jsx("p", {
									className: "text-sm text-muted-foreground",
									children: "La suppression retirera définitivement ce client du business."
								})] }), /* @__PURE__ */ jsxs(Button, {
									variant: "destructive",
									className: "border border-destructive",
									disabled: enCours,
									onClick: () => setASupprimer({
										type: "client",
										id: client.id,
										label: nomClient
									}),
									children: [/* @__PURE__ */ jsx(Trash2, {}), " Supprimer le client"]
								})]
							})
						]
					})
				]
			}),
			!compteExistant && /* @__PURE__ */ jsx(Dialog$1, {
				open: dialogContact,
				onOpenChange: setDialogContact,
				children: /* @__PURE__ */ jsxs(DialogContent, { children: [/* @__PURE__ */ jsxs(DialogHeader, { children: [/* @__PURE__ */ jsx(DialogTitle, { children: contactEdite ? "Modifier le contact" : "Ajouter un contact" }), /* @__PURE__ */ jsx(DialogDescription, { children: "Ajoutez un numéro de téléphone ou une adresse e-mail." })] }), /* @__PURE__ */ jsxs("form", {
					onSubmit: enregistrerContact,
					className: "space-y-3",
					children: [
						/* @__PURE__ */ jsxs("label", {
							className: "block space-y-1 text-sm",
							children: [/* @__PURE__ */ jsx("span", { children: "Type" }), /* @__PURE__ */ jsxs("select", {
								className: "h-9 w-full rounded-lg border border-input bg-background px-3",
								value: typeContact,
								onChange: (event) => setTypeContact(event.currentTarget.value),
								children: [/* @__PURE__ */ jsx("option", {
									value: "PHONE",
									children: "Téléphone"
								}), /* @__PURE__ */ jsx("option", {
									value: "EMAIL",
									children: "E-mail"
								})]
							})]
						}),
						typeContact === "EMAIL" ? /* @__PURE__ */ jsx(Input, {
							type: "email",
							value: emailContact,
							onChange: (event) => setEmailContact(event.currentTarget.value),
							placeholder: "Adresse e-mail",
							required: true
						}) : /* @__PURE__ */ jsxs("label", {
							className: "block space-y-1 text-sm",
							children: [/* @__PURE__ */ jsx("span", { children: "Numéro de téléphone" }), /* @__PURE__ */ jsx(Input, {
								type: "tel",
								value: telephone,
								onChange: (event) => setTelephone(event.currentTarget.value),
								placeholder: "Téléphone (+243…)",
								required: true
							})]
						}),
						/* @__PURE__ */ jsxs(DialogFooter, { children: [/* @__PURE__ */ jsx(Button, {
							type: "button",
							variant: "outline",
							onClick: () => setDialogContact(false),
							children: "Annuler"
						}), /* @__PURE__ */ jsxs(Button, {
							type: "submit",
							disabled: enCours,
							children: [enCours && /* @__PURE__ */ jsx(Loader2, {
								className: "size-4 animate-spin",
								"aria-hidden": "true"
							}), contactEdite ? "Enregistrer" : "Ajouter"]
						})] })
					]
				})] })
			}),
			/* @__PURE__ */ jsx(AlertDialog$1, {
				open: aSupprimer !== null,
				onOpenChange: (open) => {
					if (!open && !enCours) setASupprimer(null);
				},
				children: /* @__PURE__ */ jsxs(AlertDialogContent, { children: [/* @__PURE__ */ jsxs(AlertDialogHeader, { children: [/* @__PURE__ */ jsx(AlertDialogTitle, { children: "Confirmer la suppression" }), /* @__PURE__ */ jsxs(AlertDialogDescription, { children: [aSupprimer?.type === "client" ? `Le client « ${aSupprimer.label} » sera supprimé.` : `Le contact « ${aSupprimer?.label} » sera supprimé.`, " Cette action est irréversible."] })] }), /* @__PURE__ */ jsxs(AlertDialogFooter, { children: [/* @__PURE__ */ jsx(AlertDialogCancel, {
					disabled: enCours,
					children: "Annuler"
				}), /* @__PURE__ */ jsx(AlertDialogAction, {
					variant: "destructive",
					disabled: enCours,
					onClick: () => void confirmerSuppression(),
					children: enCours ? "Suppression…" : "Supprimer"
				})] })] })
			})
		]
	});
});
//#endregion
//#region app/routes/clients/valider-invitation.tsx
var valider_invitation_exports$2 = /* @__PURE__ */ __exportAll({ default: () => valider_invitation_default$2 });
var valider_invitation_default$2 = UNSAFE_withComponentProps(function ValiderInvitationClient() {
	const { invitationId } = useParams();
	const navigate = useNavigate();
	const [code, setCode] = useState("");
	const [enCours, setEnCours] = useState(false);
	const valider = async (event) => {
		event.preventDefault();
		if (!invitationId || !/^\d{6}$/.test(code)) {
			toast.error("Saisissez le code à 6 chiffres reçu par e-mail.");
			return;
		}
		setEnCours(true);
		try {
			const resultat = await validerInvitationClient(invitationId, code);
			toast.success(resultat.message);
			navigate("/acceuil", { replace: true });
		} catch (error) {
			toast.error(error instanceof Error ? error.message : "Impossible de valider cette invitation.");
		} finally {
			setEnCours(false);
		}
	};
	return /* @__PURE__ */ jsx("main", {
		className: "mx-auto flex w-full max-w-md flex-1 items-center px-4 py-10",
		children: /* @__PURE__ */ jsxs("form", {
			onSubmit: valider,
			className: "w-full space-y-5 rounded-xl border p-6",
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "space-y-2",
					children: [/* @__PURE__ */ jsx("h1", {
						className: "text-xl font-semibold",
						children: "Valider l’invitation client"
					}), /* @__PURE__ */ jsx("p", {
						className: "text-sm text-muted-foreground",
						children: "Connectez-vous avec le compte invité, puis saisissez le code à 6 chiffres envoyé par e-mail. Le code expire après 15 minutes."
					})]
				}),
				/* @__PURE__ */ jsx(Input, {
					value: code,
					onChange: (event) => setCode(event.currentTarget.value.replace(/\D/g, "").slice(0, 6)),
					inputMode: "numeric",
					autoComplete: "one-time-code",
					placeholder: "000000",
					"aria-label": "Code de validation à 6 chiffres",
					required: true,
					className: "h-11 text-center text-lg tracking-[0.5em]"
				}),
				/* @__PURE__ */ jsx(Button, {
					type: "submit",
					className: "w-full",
					disabled: enCours || code.length !== 6,
					children: enCours ? "Validation…" : "Confirmer l’invitation"
				})
			]
		})
	});
});
//#endregion
//#region app/components/fournisseurs/creer-fournisseur.tsx
var formulaireFournisseurSchema = z.object({
	nom: z.string().trim().min(4, "Le nom doit contenir au moins 4 caractères.").max(50, "Le nom ne peut pas dépasser 50 caractères."),
	email: z.union([z.literal(""), z.email("Saisissez une adresse e-mail valide.")]).optional()
});
function nomUtilisateur$1(utilisateur) {
	return utilisateur.full_name?.trim() || utilisateur.clients?.fullName?.trim() || utilisateur.contacts.find((contact) => contact.label?.trim())?.label?.trim() || utilisateur.contacts.find((contact) => contact.email?.trim())?.email?.trim() || `Utilisateur ${utilisateur.id.slice(-6)}`;
}
function emailUtilisateur$1(utilisateur) {
	if (utilisateur.email?.trim()) return utilisateur.email.trim();
	if (utilisateur.clients?.email?.trim()) return utilisateur.clients.email.trim();
	return utilisateur.contacts.find((contact) => contact.label?.trim())?.email?.trim() || utilisateur.contacts.find((contact) => contact.email?.trim())?.email?.trim() || "E-mail non renseigné";
}
function CreerFournisseur({ businessId, onCreated, onInvited }) {
	const [ouvert, setOuvert] = useState(false);
	const [logo, setLogo] = useState(null);
	const [erreurLogo, setErreurLogo] = useState(null);
	const [apercuLogo, setApercuLogo] = useState(null);
	const inputLogoRef = useRef(null);
	const [recherche, setRecherche] = useState("");
	const [utilisateurs, setUtilisateurs] = useState([]);
	const [selection, setSelection] = useState(() => /* @__PURE__ */ new Set());
	const [chargement, setChargement] = useState(false);
	const [erreurRecherche, setErreurRecherche] = useState(null);
	const [rattachementEnCours, setRattachementEnCours] = useState(false);
	const { register, handleSubmit, reset, formState: { errors, isSubmitting, isValid } } = useForm({
		resolver: zodResolver(formulaireFournisseurSchema),
		mode: "onTouched",
		defaultValues: {
			nom: "",
			email: ""
		}
	});
	useEffect(() => {
		if (!logo) {
			setApercuLogo(null);
			return;
		}
		const url = URL.createObjectURL(logo);
		setApercuLogo(url);
		return () => URL.revokeObjectURL(url);
	}, [logo]);
	useEffect(() => {
		if (!ouvert) {
			setRecherche("");
			setUtilisateurs([]);
			setSelection(/* @__PURE__ */ new Set());
			setErreurRecherche(null);
		}
	}, [ouvert]);
	useEffect(() => {
		if (!ouvert) return;
		const terme = recherche.trim();
		if (!terme || !businessId) {
			setUtilisateurs([]);
			setChargement(false);
			return;
		}
		let annule = false;
		setChargement(true);
		setErreurRecherche(null);
		const timeout = window.setTimeout(() => {
			listerUtilisateursFournisseurDisponibles(businessId, terme).then((resultat) => {
				if (!annule) setUtilisateurs(resultat);
			}).catch((error) => {
				if (!annule) setErreurRecherche(error.message || "Impossible de charger les utilisateurs.");
			}).finally(() => {
				if (!annule) setChargement(false);
			});
		}, 300);
		return () => {
			annule = true;
			window.clearTimeout(timeout);
		};
	}, [
		businessId,
		ouvert,
		recherche
	]);
	const choisirLogo = (fichier) => {
		setErreurLogo(null);
		if (!fichier) {
			setLogo(null);
			return;
		}
		if (![
			"image/jpeg",
			"image/png",
			"image/webp",
			"image/gif"
		].includes(fichier.type)) {
			setLogo(null);
			setErreurLogo("Choisissez une image JPG, PNG, WebP ou GIF.");
			return;
		}
		if (fichier.size > 2097152) {
			setLogo(null);
			setErreurLogo("L’image ne doit pas dépasser 2 Mo.");
			return;
		}
		setLogo(fichier);
	};
	const basculerSelection = (id) => {
		setSelection((courante) => {
			const suivante = new Set(courante);
			if (suivante.has(id)) suivante.delete(id);
			else suivante.add(id);
			return suivante;
		});
	};
	const onSubmit = async (valeurs) => {
		if (!businessId) {
			toast.error("Aucun business n’est sélectionné.");
			return;
		}
		const fournisseur = {
			nom: valeurs.nom.trim(),
			...valeurs.email?.trim() ? { email: valeurs.email.trim() } : {}
		};
		await toast.promise(creerFournisseurAvecLogo(businessId, fournisseur, logo ?? void 0), {
			loading: "Création du fournisseur…",
			success: ({ data: cree, message }) => {
				reset({
					nom: "",
					email: ""
				});
				setLogo(null);
				setErreurLogo(null);
				if (inputLogoRef.current) inputLogoRef.current.value = "";
				setOuvert(false);
				onCreated(cree);
				return message;
			},
			error: (error) => error.message
		}).unwrap();
	};
	const rattacher = async () => {
		if (!businessId || selection.size === 0) return;
		setRattachementEnCours(true);
		try {
			await toast.promise(inviterUtilisateursCommeFournisseurs(businessId, Array.from(selection)), {
				loading: "Envoi des invitations fournisseur…",
				success: ({ data, message }) => {
					setOuvert(false);
					onInvited(data);
					return message;
				},
				error: (error) => error.message
			}).unwrap();
		} finally {
			setRattachementEnCours(false);
		}
	};
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsxs(Button, {
		type: "button",
		disabled: !businessId,
		onClick: () => setOuvert(true),
		children: [/* @__PURE__ */ jsx(PlusIcon, { className: "size-4" }), "Nouveau fournisseur"]
	}), /* @__PURE__ */ jsx(Dialog$1, {
		open: ouvert,
		onOpenChange: setOuvert,
		children: /* @__PURE__ */ jsxs(DialogContent, {
			className: "sm:max-w-lg",
			children: [/* @__PURE__ */ jsxs(DialogHeader, { children: [/* @__PURE__ */ jsx(DialogTitle, { children: "Nouveau fournisseur" }), /* @__PURE__ */ jsx(DialogDescription, { children: "Enregistrez un fournisseur sans compte, ou rattachez-le à un compte utilisateur existant." })] }), /* @__PURE__ */ jsxs(Tabs, {
				defaultValue: "sans-compte",
				className: "w-full",
				children: [
					/* @__PURE__ */ jsxs(TabsList, {
						className: "grid w-full grid-cols-2",
						children: [/* @__PURE__ */ jsx(TabsTrigger, {
							value: "sans-compte",
							children: "Sans compte"
						}), /* @__PURE__ */ jsx(TabsTrigger, {
							value: "compte-existant",
							children: "Compte existant"
						})]
					}),
					/* @__PURE__ */ jsx(TabsContent, {
						value: "sans-compte",
						className: "pt-4",
						children: /* @__PURE__ */ jsxs("form", {
							onSubmit: handleSubmit(onSubmit),
							noValidate: true,
							children: [/* @__PURE__ */ jsxs(FieldGroup, { children: [
								/* @__PURE__ */ jsxs(Field, {
									"data-invalid": !!erreurLogo,
									children: [
										/* @__PURE__ */ jsx("input", {
											ref: inputLogoRef,
											id: "nouveau-fournisseur-logo",
											type: "file",
											accept: "image/jpeg,image/png,image/webp,image/gif",
											className: "sr-only",
											"aria-label": "Icône du fournisseur (facultative)",
											"aria-invalid": !!erreurLogo,
											"aria-describedby": erreurLogo ? "nouveau-fournisseur-logo-erreur" : "nouveau-fournisseur-logo-aide",
											onChange: (event) => choisirLogo(event.currentTarget.files?.[0])
										}),
										/* @__PURE__ */ jsxs("label", {
											htmlFor: "nouveau-fournisseur-logo",
											className: "group flex cursor-pointer items-center gap-4 rounded-xl border border-dashed border-border bg-muted/30 p-4 transition-colors hover:border-primary/50 hover:bg-muted/60 focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2",
											children: [
												/* @__PURE__ */ jsx("span", {
													className: "flex size-16 shrink-0 items-center justify-center overflow-hidden rounded-xl border bg-background text-muted-foreground shadow-sm",
													children: apercuLogo ? /* @__PURE__ */ jsx("img", {
														src: apercuLogo,
														alt: "Aperçu de l’icône du fournisseur",
														className: "size-full object-cover"
													}) : /* @__PURE__ */ jsx(ImagePlusIcon, {
														className: "size-7",
														"aria-hidden": "true"
													})
												}),
												/* @__PURE__ */ jsxs("span", {
													className: "min-w-0 max-w-full flex-1 overflow-hidden",
													children: [/* @__PURE__ */ jsx("span", {
														className: "block max-w-full truncate text-sm font-medium text-foreground",
														title: logo?.name,
														children: logo ? tronquerAvecEllipses(logo.name) : "Choisir une icône (facultatif)"
													}), /* @__PURE__ */ jsx("span", {
														id: "nouveau-fournisseur-logo-aide",
														className: "mt-1 block text-xs text-muted-foreground",
														children: "JPG, PNG, WebP ou GIF · 2 Mo maximum"
													})]
												}),
												/* @__PURE__ */ jsx(UploadIcon, {
													className: "size-4 shrink-0 text-muted-foreground transition-colors group-hover:text-foreground",
													"aria-hidden": "true"
												})
											]
										}),
										logo && /* @__PURE__ */ jsxs(Button, {
											type: "button",
											variant: "ghost",
											size: "sm",
											className: "w-fit",
											onClick: () => {
												setLogo(null);
												if (inputLogoRef.current) inputLogoRef.current.value = "";
											},
											children: [/* @__PURE__ */ jsx(XIcon, { className: "size-4" }), "Retirer l’icône"]
										}),
										erreurLogo && /* @__PURE__ */ jsx("p", {
											id: "nouveau-fournisseur-logo-erreur",
											role: "alert",
											className: "text-sm text-destructive",
											children: erreurLogo
										})
									]
								}),
								/* @__PURE__ */ jsxs(Field, {
									"data-invalid": !!errors.nom,
									children: [
										/* @__PURE__ */ jsx(FieldLabel, {
											htmlFor: "nouveau-fournisseur-nom",
											children: "Nom"
										}),
										/* @__PURE__ */ jsx(Input, {
											id: "nouveau-fournisseur-nom",
											autoComplete: "organization",
											placeholder: "Ex. : Textile Bukavu",
											"aria-invalid": !!errors.nom,
											"aria-describedby": errors.nom ? "nouveau-fournisseur-nom-erreur" : void 0,
											...register("nom")
										}),
										/* @__PURE__ */ jsx(FieldError, {
											id: "nouveau-fournisseur-nom-erreur",
											errors: [errors.nom]
										})
									]
								}),
								/* @__PURE__ */ jsxs(Field, {
									"data-invalid": !!errors.email,
									children: [
										/* @__PURE__ */ jsxs(FieldLabel, {
											htmlFor: "nouveau-fournisseur-email",
											children: [
												"E-mail",
												" ",
												/* @__PURE__ */ jsx("span", {
													className: "font-normal text-muted-foreground",
													children: "(facultatif)"
												})
											]
										}),
										/* @__PURE__ */ jsx(Input, {
											id: "nouveau-fournisseur-email",
											type: "email",
											autoComplete: "email",
											placeholder: "contact@exemple.cd",
											"aria-invalid": !!errors.email,
											"aria-describedby": errors.email ? "nouveau-fournisseur-email-erreur" : void 0,
											...register("email")
										}),
										/* @__PURE__ */ jsx(FieldError, {
											id: "nouveau-fournisseur-email-erreur",
											errors: [errors.email]
										})
									]
								})
							] }), /* @__PURE__ */ jsxs(DialogFooter, {
								className: "mt-6",
								children: [/* @__PURE__ */ jsx(Button, {
									type: "button",
									variant: "outline",
									onClick: () => setOuvert(false),
									disabled: isSubmitting,
									children: "Annuler"
								}), /* @__PURE__ */ jsx(Button, {
									type: "submit",
									disabled: !isValid || isSubmitting || !!erreurLogo,
									children: isSubmitting ? "Création…" : "Créer le fournisseur"
								})]
							})]
						})
					}),
					/* @__PURE__ */ jsxs(TabsContent, {
						value: "compte-existant",
						className: "pt-4",
						children: [/* @__PURE__ */ jsxs(FieldGroup, { children: [/* @__PURE__ */ jsxs(Field, { children: [
							/* @__PURE__ */ jsx(FieldLabel, {
								htmlFor: "rattacher-fournisseur-recherche",
								children: "Rechercher un utilisateur"
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "relative",
								children: [/* @__PURE__ */ jsx(SearchIcon, { className: "pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" }), /* @__PURE__ */ jsx(Input, {
									id: "rattacher-fournisseur-recherche",
									value: recherche,
									onChange: (event) => setRecherche(event.currentTarget.value),
									placeholder: "Nom, e-mail ou téléphone…",
									className: "pl-9"
								})]
							}),
							/* @__PURE__ */ jsx(FieldDescription, { children: "Une invitation sera envoyée à chaque personne pour qu’elle confirme son rattachement." })
						] }), /* @__PURE__ */ jsx("div", {
							className: "max-h-56 min-h-32 overflow-y-auto rounded-lg border",
							"aria-busy": chargement,
							children: chargement ? /* @__PURE__ */ jsx("p", {
								className: "p-6 text-center text-sm text-muted-foreground",
								role: "status",
								children: "Recherche en cours…"
							}) : erreurRecherche ? /* @__PURE__ */ jsx("p", {
								className: "p-6 text-center text-sm text-destructive",
								children: erreurRecherche
							}) : utilisateurs.length === 0 ? /* @__PURE__ */ jsx("p", {
								className: "p-6 text-center text-sm text-muted-foreground",
								children: recherche.trim() ? "Aucun utilisateur disponible ne correspond." : "Saisissez un nom, un e-mail ou un téléphone pour chercher."
							}) : /* @__PURE__ */ jsx("ul", {
								className: "divide-y",
								children: utilisateurs.map((utilisateur) => {
									const selectionne = selection.has(utilisateur.id);
									return /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("button", {
										type: "button",
										onClick: () => basculerSelection(utilisateur.id),
										"aria-pressed": selectionne,
										"aria-label": `${selectionne ? "Désélectionner" : "Sélectionner"} ${nomUtilisateur$1(utilisateur)}`,
										className: `flex w-full items-center gap-3 px-4 py-3 text-left transition-colors hover:bg-muted/50 ${selectionne ? "bg-primary/10" : ""}`,
										children: [
											/* @__PURE__ */ jsxs(Avatar$1, {
												className: "size-9 shrink-0",
												children: [/* @__PURE__ */ jsx(AvatarImage, {
													src: utilisateur.image ?? utilisateur.clients?.profile,
													alt: ""
												}), /* @__PURE__ */ jsx(AvatarFallback, {
													className: "bg-primary/10 text-sm font-medium text-primary",
													children: nomUtilisateur$1(utilisateur).charAt(0).toLocaleUpperCase("fr")
												})]
											}),
											/* @__PURE__ */ jsxs("span", {
												className: "min-w-0 flex-1",
												children: [/* @__PURE__ */ jsx("span", {
													className: "block truncate text-sm font-medium",
													children: nomUtilisateur$1(utilisateur)
												}), /* @__PURE__ */ jsx("span", {
													className: "block truncate text-xs text-muted-foreground",
													children: emailUtilisateur$1(utilisateur)
												})]
											}),
											/* @__PURE__ */ jsx("span", {
												className: `flex size-5 shrink-0 items-center justify-center rounded-full border ${selectionne ? "border-primary bg-primary text-primary-foreground" : "border-muted-foreground/40"}`,
												"aria-hidden": "true",
												children: selectionne && /* @__PURE__ */ jsx(Check, { className: "size-3" })
											})
										]
									}) }, utilisateur.id);
								})
							})
						})] }), /* @__PURE__ */ jsxs(DialogFooter, {
							className: "mt-6",
							children: [/* @__PURE__ */ jsx(Button, {
								type: "button",
								variant: "outline",
								onClick: () => setOuvert(false),
								disabled: rattachementEnCours,
								children: "Annuler"
							}), /* @__PURE__ */ jsx(Button, {
								type: "button",
								onClick: rattacher,
								disabled: selection.size === 0 || rattachementEnCours,
								children: rattachementEnCours ? "Rattachement…" : `Rattacher ${selection.size > 1 ? `${selection.size} comptes` : "le compte"}`
							})]
						})]
					})
				]
			})]
		})
	})] });
}
//#endregion
//#region app/routes/fournisseurs/fournisseurs.tsx
var fournisseurs_exports = /* @__PURE__ */ __exportAll({ default: () => fournisseurs_default });
var fournisseurs_default = UNSAFE_withComponentProps(function Fournisseurs() {
	const { businessId } = useBusiness();
	const [recherche, setRecherche] = useState("");
	const [saisie, setSaisie] = useState("");
	const [filtreCompte, setFiltreCompte] = useState("tous");
	const [taillePage, setTaillePage] = useState(10);
	const [page, setPage] = useState(0);
	const [ouvert, setOuvert] = useState(false);
	const [enEdition, setEnEdition] = useState(null);
	const [aSupprimer, setASupprimer] = useState(null);
	const [suppressionEnCours, setSuppressionEnCours] = useState(false);
	const [renvoiEnCours, setRenvoiEnCours] = useState(null);
	const [logo, setLogo] = useState(null);
	const [erreurLogo, setErreurLogo] = useState(null);
	const [logoInitial, setLogoInitial] = useState(null);
	const [apercuLogo, setApercuLogo] = useState(null);
	const inputLogoRef = useRef(null);
	useEffect(() => {
		if (!logo) {
			setApercuLogo(logoInitial);
			return;
		}
		const url = URL.createObjectURL(logo);
		setApercuLogo(url);
		return () => URL.revokeObjectURL(url);
	}, [logo, logoInitial]);
	useEffect(() => {
		const timeout = window.setTimeout(() => {
			setRecherche(saisie.trim());
			setPage(0);
		}, 300);
		return () => window.clearTimeout(timeout);
	}, [saisie]);
	const charger = useCallback(async () => {
		return (await listerFournisseurs(businessId, recherche || void 0)).map((fournisseur) => ({
			id: fournisseur.id,
			nom: fournisseur.nom ?? void 0,
			email: fournisseur.email ?? void 0,
			logo: fournisseur.logo,
			userImage: fournisseur.userImage,
			website: fournisseur.website ?? void 0,
			userId: fournisseur.userId,
			isVerified: fournisseur.isVerified,
			invitationExpiresAt: fournisseur.invitationExpiresAt
		}));
	}, [businessId, recherche]);
	const { donnees, chargement, erreur, recharger, ajouter, mettreAJour, retirer } = useListe(charger, !!businessId);
	const fournisseursFiltres = donnees.filter((fournisseur) => {
		if (filtreCompte === "avec-compte") return !!fournisseur.userId;
		if (filtreCompte === "sans-compte") return !fournisseur.userId;
		return true;
	});
	const nombrePages = Math.ceil(fournisseursFiltres.length / taillePage);
	const pageCourante = Math.min(page, Math.max(0, nombrePages - 1));
	const fournisseursAffiches = fournisseursFiltres.slice(pageCourante * taillePage, (pageCourante + 1) * taillePage);
	const debut = fournisseursFiltres.length === 0 ? 0 : pageCourante * taillePage + 1;
	const fin = Math.min((pageCourante + 1) * taillePage, fournisseursFiltres.length);
	const { register, handleSubmit, reset, formState: { errors, isSubmitting, isValid } } = useForm({
		resolver: zodResolver(FournisseurSchema),
		mode: "onTouched",
		defaultValues: {
			nom: "",
			email: "",
			website: ""
		}
	});
	const ouvrirEdition = (f) => {
		setEnEdition(f);
		setLogo(null);
		setErreurLogo(null);
		setLogoInitial(f.logo ?? null);
		if (inputLogoRef.current) inputLogoRef.current.value = "";
		reset({
			nom: f.nom ?? "",
			email: f.email ?? "",
			website: f.website ?? ""
		});
		setOuvert(true);
	};
	const choisirLogo = (fichier) => {
		setErreurLogo(null);
		if (!fichier) {
			setLogo(null);
			return;
		}
		if (![
			"image/jpeg",
			"image/png",
			"image/webp",
			"image/gif"
		].includes(fichier.type)) {
			setLogo(null);
			setErreurLogo("Choisissez une image JPG, PNG, WebP ou GIF.");
			return;
		}
		if (fichier.size > 2097152) {
			setLogo(null);
			setErreurLogo("L’image ne doit pas dépasser 2 Mo.");
			return;
		}
		setLogo(fichier);
	};
	const onSubmit = async (form) => {
		if (!enEdition) return;
		const utiles = {
			...form.nom?.trim() ? { nom: form.nom.trim() } : {},
			...form.email?.trim() ? { email: form.email.trim() } : {},
			...form.website?.trim() ? { website: form.website.trim() } : {}
		};
		await toast.promise(modifierFournisseurAvecLogo(businessId, enEdition.id, utiles, logo ?? void 0), {
			loading: "Modification…",
			success: ({ data: fournisseur, message }) => {
				const fournisseurMisAJour = {
					id: fournisseur.id,
					nom: fournisseur.nom ?? void 0,
					email: fournisseur.email ?? void 0,
					logo: fournisseur.logo,
					userImage: enEdition.userImage,
					website: fournisseur.website ?? void 0,
					userId: fournisseur.userId,
					isVerified: fournisseur.isVerified,
					invitationExpiresAt: fournisseur.invitationExpiresAt
				};
				const terme = recherche.trim().toLocaleLowerCase("fr");
				if (!terme || fournisseurMisAJour.nom?.toLocaleLowerCase("fr").includes(terme)) mettreAJour(fournisseurMisAJour, (element) => element.id);
				else retirer(fournisseurMisAJour.id, (element) => element.id);
				setOuvert(false);
				setLogo(null);
				setLogoInitial(null);
				setErreurLogo(null);
				if (inputLogoRef.current) inputLogoRef.current.value = "";
				return message;
			},
			error: (e) => e.message
		}).unwrap();
	};
	const confirmerSuppression = async () => {
		if (!aSupprimer || !businessId) return;
		setSuppressionEnCours(true);
		try {
			await toast.promise(supprimerFournisseur(businessId, aSupprimer.id), {
				loading: "Suppression…",
				success: ({ data: fournisseur, message }) => {
					retirer(fournisseur.id, (element) => element.id);
					return message;
				},
				error: (e) => e.message
			}).unwrap();
			setASupprimer(null);
		} finally {
			setSuppressionEnCours(false);
		}
	};
	const ajouterFournisseurCree = (fournisseur) => {
		const terme = recherche.trim().toLocaleLowerCase("fr");
		if (terme && !fournisseur.nom?.toLocaleLowerCase("fr").includes(terme)) return;
		ajouter({
			id: fournisseur.id,
			nom: fournisseur.nom ?? void 0,
			email: fournisseur.email ?? void 0,
			logo: fournisseur.logo,
			userImage: fournisseur.userImage,
			website: fournisseur.website ?? void 0,
			userId: fournisseur.userId,
			isVerified: fournisseur.isVerified,
			invitationExpiresAt: fournisseur.invitationExpiresAt
		});
		setPage(0);
	};
	const ajouterUtilisateursFournisseurs = (fournisseurs) => {
		const terme = recherche.trim().toLocaleLowerCase("fr");
		const correspondants = fournisseurs.filter((fournisseur) => !terme || fournisseur.nom?.toLocaleLowerCase("fr").includes(terme));
		correspondants.forEach((fournisseur) => {
			ajouter({
				id: fournisseur.id,
				nom: fournisseur.nom ?? void 0,
				email: fournisseur.email ?? void 0,
				logo: fournisseur.logo,
				userImage: fournisseur.userImage,
				website: fournisseur.website ?? void 0,
				userId: fournisseur.userId,
				isVerified: fournisseur.isVerified,
				invitationExpiresAt: fournisseur.invitationExpiresAt
			});
		});
		if (correspondants.length > 0) setPage(0);
		recharger();
	};
	const renvoyerInvitation = async (fournisseur) => {
		if (!businessId) return;
		setRenvoiEnCours(fournisseur.id);
		try {
			await renvoyerInvitationFournisseur(businessId, fournisseur.id);
		} catch {} finally {
			setRenvoiEnCours(null);
		}
	};
	return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs(PageRessource, {
		titre: "Fournisseurs",
		description: "Les fournisseurs auprès desquels vous vous approvisionnez.",
		businessRequis: true,
		businessId,
		chargement,
		erreur,
		vide: donnees.length === 0,
		messageVide: "Aucun fournisseur enregistré pour le moment.",
		onReessayer: recharger,
		action: /* @__PURE__ */ jsx(CreerFournisseur, {
			businessId,
			onCreated: ajouterFournisseurCree,
			onInvited: ajouterUtilisateursFournisseurs
		}),
		outils: /* @__PURE__ */ jsxs("div", {
			className: "flex w-full max-w-3xl flex-wrap items-center gap-2",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "relative min-w-48 flex-1",
				children: [/* @__PURE__ */ jsx(SearchIcon, { className: "pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" }), /* @__PURE__ */ jsx(Input, {
					value: saisie,
					onChange: (e) => setSaisie(e.target.value),
					placeholder: "Rechercher par nom…",
					"aria-label": "Rechercher un fournisseur",
					className: "pl-9"
				})]
			}), /* @__PURE__ */ jsxs(NativeSelect, {
				value: filtreCompte,
				onChange: (event) => {
					const valeur = event.currentTarget.value;
					if (valeur === "tous" || valeur === "avec-compte" || valeur === "sans-compte") {
						setFiltreCompte(valeur);
						setPage(0);
					}
				},
				"aria-label": "Filtrer les fournisseurs par compte utilisateur",
				className: "min-w-40",
				children: [
					/* @__PURE__ */ jsx(NativeSelectOption, {
						value: "tous",
						children: "Tous les fournisseurs"
					}),
					/* @__PURE__ */ jsx(NativeSelectOption, {
						value: "avec-compte",
						children: "Avec compte"
					}),
					/* @__PURE__ */ jsx(NativeSelectOption, {
						value: "sans-compte",
						children: "Sans compte"
					})
				]
			})]
		}),
		children: [
			/* @__PURE__ */ jsx("div", {
				className: "overflow-hidden rounded-lg border",
				children: /* @__PURE__ */ jsxs(Table, { children: [/* @__PURE__ */ jsx(TableHeader, { children: /* @__PURE__ */ jsxs(TableRow, { children: [/* @__PURE__ */ jsx(TableHead, { children: "Nom du fournisseur" }), /* @__PURE__ */ jsx(TableHead, {
					className: "w-[1%] text-right",
					children: "Actions"
				})] }) }), /* @__PURE__ */ jsx(TableBody, { children: fournisseursAffiches.length === 0 ? /* @__PURE__ */ jsx(TableRow, { children: /* @__PURE__ */ jsx(TableCell, {
					colSpan: 2,
					className: "h-24 text-center text-muted-foreground",
					children: "Aucun fournisseur ne correspond à ce filtre."
				}) }) : fournisseursAffiches.map((f) => /* @__PURE__ */ jsxs(TableRow, { children: [/* @__PURE__ */ jsx(TableCell, { children: /* @__PURE__ */ jsxs("div", {
					className: "flex items-center gap-3 font-medium",
					children: [/* @__PURE__ */ jsxs(Avatar$1, {
						className: "size-9",
						children: [/* @__PURE__ */ jsx(AvatarImage, {
							src: f.logo && f.logo !== "http://localhost:3000/uploads/fournisseurs/default-logo-fournisseur.png" ? f.logo : f.userImage || f.logo || "http://localhost:3000/uploads/fournisseurs/default-logo-fournisseur.png",
							alt: f.nom || "Logo du fournisseur"
						}), /* @__PURE__ */ jsx(AvatarFallback, { children: (f.nom || "F").charAt(0).toLocaleUpperCase("fr") })]
					}), /* @__PURE__ */ jsx(Link, {
						to: `/fournisseurs/${f.id}`,
						className: "text-primary underline-offset-4 hover:underline",
						children: f.nom || "—"
					})]
				}) }), /* @__PURE__ */ jsx(TableCell, {
					className: "text-right whitespace-nowrap",
					children: /* @__PURE__ */ jsxs("div", {
						className: "flex items-center justify-end gap-1",
						children: [
							f.isVerified === false && f.invitationExpiresAt !== null && f.invitationExpiresAt !== void 0 && new Date(f.invitationExpiresAt).getTime() <= Date.now() && /* @__PURE__ */ jsx(Button, {
								type: "button",
								variant: "ghost",
								size: "icon",
								className: "size-8 border border-border text-muted-foreground",
								onClick: () => void renvoyerInvitation(f),
								disabled: renvoiEnCours === f.id,
								"aria-label": `Renvoyer l’invitation à ${f.nom ?? "ce fournisseur"}`,
								title: "Renvoyer l’invitation",
								children: /* @__PURE__ */ jsx(SendIcon, { className: "size-4" })
							}),
							!f.userId && /* @__PURE__ */ jsx(Button, {
								type: "button",
								variant: "ghost",
								size: "icon",
								className: "size-8 border border-border text-muted-foreground",
								onClick: () => ouvrirEdition(f),
								"aria-label": `Modifier ${f.nom ?? "ce fournisseur"}`,
								title: "Modifier",
								children: /* @__PURE__ */ jsx(PencilIcon, { className: "size-4" })
							}),
							/* @__PURE__ */ jsx(Button, {
								type: "button",
								variant: "ghost",
								size: "icon",
								className: "size-8 border border-destructive/30 text-destructive hover:bg-destructive/10 hover:text-destructive",
								onClick: () => setASupprimer(f),
								"aria-label": `Supprimer ${f.nom ?? "ce fournisseur"}`,
								title: "Supprimer",
								children: /* @__PURE__ */ jsx(Trash2Icon, { className: "size-4" })
							})
						]
					})
				})] }, f.id)) })] })
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "flex flex-wrap items-center justify-between gap-4",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "flex items-center gap-2 text-sm text-muted-foreground",
					children: [
						/* @__PURE__ */ jsx("label", {
							htmlFor: "fournisseurs-par-page",
							children: "Fournisseurs par page"
						}),
						/* @__PURE__ */ jsxs(NativeSelect, {
							id: "fournisseurs-par-page",
							value: taillePage,
							onChange: (event) => {
								setTaillePage(Number(event.currentTarget.value));
								setPage(0);
							},
							"aria-label": "Nombre de fournisseurs par page",
							children: [
								/* @__PURE__ */ jsx(NativeSelectOption, {
									value: 10,
									children: "10"
								}),
								/* @__PURE__ */ jsx(NativeSelectOption, {
									value: 20,
									children: "20"
								}),
								/* @__PURE__ */ jsx(NativeSelectOption, {
									value: 50,
									children: "50"
								})
							]
						}),
						/* @__PURE__ */ jsxs("span", {
							"aria-live": "polite",
							children: [
								debut,
								"–",
								fin,
								" sur ",
								fournisseursFiltres.length
							]
						})
					]
				}), /* @__PURE__ */ jsxs("nav", {
					"aria-label": "Pagination des fournisseurs",
					className: "flex items-center gap-2",
					children: [
						/* @__PURE__ */ jsx(Button, {
							type: "button",
							variant: "outline",
							size: "sm",
							onClick: () => setPage(pageCourante - 1),
							disabled: pageCourante === 0,
							"aria-label": "Page précédente",
							children: "Précédent"
						}),
						/* @__PURE__ */ jsxs("span", {
							"aria-current": "page",
							className: "text-sm tabular-nums",
							children: [
								nombrePages === 0 ? 0 : pageCourante + 1,
								" / ",
								nombrePages
							]
						}),
						/* @__PURE__ */ jsx(Button, {
							type: "button",
							variant: "outline",
							size: "sm",
							onClick: () => setPage(pageCourante + 1),
							disabled: pageCourante >= nombrePages - 1,
							"aria-label": "Page suivante",
							children: "Suivant"
						})
					]
				})]
			}),
			/* @__PURE__ */ jsx(AlertDialog$1, {
				open: aSupprimer !== null,
				onOpenChange: (open) => {
					if (!open && !suppressionEnCours) setASupprimer(null);
				},
				children: /* @__PURE__ */ jsxs(AlertDialogContent, { children: [/* @__PURE__ */ jsxs(AlertDialogHeader, { children: [/* @__PURE__ */ jsx(AlertDialogTitle, { children: "Supprimer ce fournisseur ?" }), /* @__PURE__ */ jsxs(AlertDialogDescription, { children: [
					"Le fournisseur « ",
					aSupprimer?.nom || "sans nom",
					" » sera supprimé. Cette action est irréversible."
				] })] }), /* @__PURE__ */ jsxs(AlertDialogFooter, { children: [/* @__PURE__ */ jsx(AlertDialogCancel, {
					disabled: suppressionEnCours,
					children: "Annuler"
				}), /* @__PURE__ */ jsx(AlertDialogAction, {
					variant: "destructive",
					disabled: suppressionEnCours,
					onClick: confirmerSuppression,
					children: suppressionEnCours ? "Suppression…" : "Supprimer"
				})] })] })
			}),
			/* @__PURE__ */ jsx(Dialog$1, {
				open: ouvert,
				onOpenChange: setOuvert,
				children: /* @__PURE__ */ jsxs(DialogContent, { children: [/* @__PURE__ */ jsxs(DialogHeader, { children: [/* @__PURE__ */ jsx(DialogTitle, { children: "Modifier le fournisseur" }), /* @__PURE__ */ jsx(DialogDescription, { children: "Renseignez au moins le nom pour identifier ce fournisseur dans vos achats." })] }), /* @__PURE__ */ jsxs("form", {
					onSubmit: handleSubmit(onSubmit),
					noValidate: true,
					children: [/* @__PURE__ */ jsx(FieldGroup, { children: /* @__PURE__ */ jsxs(FieldSet, { children: [
						/* @__PURE__ */ jsx(FieldLegend, {
							variant: "label",
							children: "Coordonnées"
						}),
						/* @__PURE__ */ jsxs(Field, {
							"data-invalid": !!erreurLogo,
							children: [
								/* @__PURE__ */ jsx("input", {
									ref: inputLogoRef,
									id: "modifier-fournisseur-logo",
									type: "file",
									accept: "image/jpeg,image/png,image/webp,image/gif",
									className: "sr-only",
									"aria-label": "Icône du fournisseur (facultative)",
									"aria-invalid": !!erreurLogo,
									"aria-describedby": erreurLogo ? "modifier-fournisseur-logo-erreur" : "modifier-fournisseur-logo-aide",
									onChange: (event) => choisirLogo(event.currentTarget.files?.[0])
								}),
								/* @__PURE__ */ jsxs("label", {
									htmlFor: "modifier-fournisseur-logo",
									className: "group flex cursor-pointer items-center gap-4 rounded-xl border border-dashed border-border bg-muted/30 p-4 transition-colors hover:border-primary/50 hover:bg-muted/60 focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2",
									children: [
										/* @__PURE__ */ jsx("span", {
											className: "flex size-16 shrink-0 items-center justify-center overflow-hidden rounded-xl border bg-background text-muted-foreground shadow-sm",
											children: apercuLogo ? /* @__PURE__ */ jsx("img", {
												src: apercuLogo,
												alt: "Aperçu de l’icône du fournisseur",
												className: "size-full object-cover"
											}) : /* @__PURE__ */ jsx(ImagePlusIcon, {
												className: "size-7",
												"aria-hidden": "true"
											})
										}),
										/* @__PURE__ */ jsxs("span", {
											className: "min-w-0 max-w-full flex-1 overflow-hidden",
											children: [/* @__PURE__ */ jsx("span", {
												className: "block max-w-full truncate text-sm font-medium text-foreground",
												title: logo?.name,
												children: logo ? tronquerAvecEllipses(logo.name) : "Changer l’icône (facultatif)"
											}), /* @__PURE__ */ jsx("span", {
												id: "modifier-fournisseur-logo-aide",
												className: "mt-1 block text-xs text-muted-foreground",
												children: "JPG, PNG, WebP ou GIF · 2 Mo maximum"
											})]
										}),
										/* @__PURE__ */ jsx(UploadIcon, {
											className: "size-4 shrink-0 text-muted-foreground transition-colors group-hover:text-foreground",
											"aria-hidden": "true"
										})
									]
								}),
								logo && /* @__PURE__ */ jsxs(Button, {
									type: "button",
									variant: "ghost",
									size: "sm",
									className: "w-fit",
									onClick: () => {
										setLogo(null);
										if (inputLogoRef.current) inputLogoRef.current.value = "";
									},
									children: [/* @__PURE__ */ jsx(XIcon, { className: "size-4" }), "Annuler le changement d’icône"]
								}),
								erreurLogo && /* @__PURE__ */ jsx("p", {
									id: "modifier-fournisseur-logo-erreur",
									role: "alert",
									className: "text-sm text-destructive",
									children: erreurLogo
								})
							]
						}),
						/* @__PURE__ */ jsxs(Field, {
							"data-invalid": !!errors.nom,
							children: [
								/* @__PURE__ */ jsx(FieldLabel, {
									htmlFor: "nom",
									children: "Nom"
								}),
								/* @__PURE__ */ jsx(Input, {
									id: "nom",
									placeholder: "Ex : Textile Bukavu",
									"aria-invalid": !!errors.nom,
									...register("nom")
								}),
								/* @__PURE__ */ jsx(FieldError, { errors: [errors.nom] })
							]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "grid grid-cols-1 gap-4 sm:grid-cols-2",
							children: [/* @__PURE__ */ jsxs(Field, {
								"data-invalid": !!errors.email,
								children: [
									/* @__PURE__ */ jsx(FieldLabel, {
										htmlFor: "email",
										children: "Email"
									}),
									/* @__PURE__ */ jsx(Input, {
										id: "email",
										type: "email",
										placeholder: "contact@exemple.cd",
										"aria-invalid": !!errors.email,
										disabled: !!enEdition?.userId,
										...register("email")
									}),
									enEdition?.userId ? /* @__PURE__ */ jsx(FieldDescription, { children: "Cette adresse provient du compte utilisateur rattaché." }) : /* @__PURE__ */ jsx(FieldError, { errors: [errors.email] })
								]
							}), /* @__PURE__ */ jsxs(Field, {
								"data-invalid": !!errors.website,
								children: [
									/* @__PURE__ */ jsx(FieldLabel, {
										htmlFor: "website",
										children: "Site web"
									}),
									/* @__PURE__ */ jsx(Input, {
										id: "website",
										type: "url",
										placeholder: "https://exemple.cd",
										"aria-invalid": !!errors.website,
										...register("website")
									}),
									/* @__PURE__ */ jsx(FieldError, { errors: [errors.website] })
								]
							})]
						})
					] }) }), /* @__PURE__ */ jsxs(DialogFooter, {
						className: "mt-6",
						children: [/* @__PURE__ */ jsx(Button, {
							type: "button",
							variant: "outline",
							onClick: () => setOuvert(false),
							disabled: isSubmitting,
							children: "Annuler"
						}), /* @__PURE__ */ jsx(Button, {
							type: "submit",
							disabled: !isValid || isSubmitting,
							children: isSubmitting ? "Enregistrement…" : enEdition ? "Enregistrer" : "Créer le fournisseur"
						})]
					})]
				})] })
			})
		]
	}) });
});
//#endregion
//#region app/routes/fournisseurs/valider-invitation.tsx
var valider_invitation_exports$1 = /* @__PURE__ */ __exportAll({ default: () => valider_invitation_default$1 });
var valider_invitation_default$1 = UNSAFE_withComponentProps(function ValiderInvitationFournisseur() {
	const { invitationId } = useParams();
	const navigate = useNavigate();
	const [code, setCode] = useState("");
	const [enCours, setEnCours] = useState(false);
	const valider = async (event) => {
		event.preventDefault();
		if (!invitationId || !/^\d{6}$/.test(code)) {
			toast.error("Saisissez le code à 6 chiffres reçu par e-mail.");
			return;
		}
		setEnCours(true);
		try {
			const resultat = await validerInvitationFournisseur(invitationId, code);
			toast.success(resultat.message);
			navigate("/acceuil", { replace: true });
		} catch (error) {
			toast.error(error instanceof Error ? error.message : "Impossible de valider cette invitation.");
		} finally {
			setEnCours(false);
		}
	};
	return /* @__PURE__ */ jsx("main", {
		className: "mx-auto flex w-full max-w-md flex-1 items-center px-4 py-10",
		children: /* @__PURE__ */ jsxs("form", {
			onSubmit: valider,
			className: "w-full space-y-5 rounded-xl border p-6",
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "space-y-2",
					children: [/* @__PURE__ */ jsx("h1", {
						className: "text-xl font-semibold",
						children: "Valider l’invitation fournisseur"
					}), /* @__PURE__ */ jsx("p", {
						className: "text-sm text-muted-foreground",
						children: "Saisissez le code à 6 chiffres envoyé à l’adresse e-mail associée à votre compte. Le code expire après 15 minutes."
					})]
				}),
				/* @__PURE__ */ jsx(Input, {
					value: code,
					onChange: (event) => setCode(event.currentTarget.value.replace(/\D/g, "").slice(0, 6)),
					inputMode: "numeric",
					autoComplete: "one-time-code",
					placeholder: "000000",
					"aria-label": "Code de validation à 6 chiffres",
					required: true,
					className: "h-11 text-center text-lg tracking-[0.5em]"
				}),
				/* @__PURE__ */ jsx(Button, {
					type: "submit",
					className: "w-full",
					disabled: enCours || code.length !== 6,
					children: enCours ? "Validation…" : "Confirmer l’invitation"
				})
			]
		})
	});
});
//#endregion
//#region app/routes/fournisseurs/detail.tsx
var detail_exports$1 = /* @__PURE__ */ __exportAll({ default: () => detail_default$1 });
var InformationsFournisseurSchema = z.object({
	nom: z.string().trim().min(4, "Le nom doit contenir au moins 4 caractères.").max(50, "Le nom ne peut pas dépasser 50 caractères."),
	email: z.union([z.literal(""), z.email("L’adresse e-mail est invalide.")]),
	website: z.union([z.literal(""), z.url("L’adresse du site web est invalide.")]),
	pays: z.string().max(50, "Le pays ne peut pas dépasser 50 caractères."),
	ville: z.string().max(50, "La ville ne peut pas dépasser 50 caractères."),
	region: z.string().max(50, "La région ne peut pas dépasser 50 caractères."),
	adresse: z.string().max(50, "L’adresse ne peut pas dépasser 50 caractères."),
	codePostal: z.string().max(20, "Le code postal ne peut pas dépasser 20 caractères.")
});
var detail_default$1 = UNSAFE_withComponentProps(function DetailFournisseur() {
	const { businessId } = useBusiness();
	const { id } = useParams();
	const navigate = useNavigate();
	const [fournisseur, setFournisseur] = useState(null);
	const [chargement, setChargement] = useState(true);
	const [erreur, setErreur] = useState(null);
	const [nom, setNom] = useState("");
	const [email, setEmail] = useState("");
	const [website, setWebsite] = useState("");
	const [adresse, setAdresse] = useState("");
	const [ville, setVille] = useState("");
	const [region, setRegion] = useState("");
	const [pays, setPays] = useState("");
	const [codePostal, setCodePostal] = useState("");
	const [erreursFormulaire, setErreursFormulaire] = useState({});
	const [telephone, setTelephone] = useState("");
	const [contactEdite, setContactEdite] = useState(null);
	const [dialogContact, setDialogContact] = useState(false);
	const [aSupprimer, setASupprimer] = useState(null);
	const [enCours, setEnCours] = useState(false);
	const [enregistrementInfos, setEnregistrementInfos] = useState(false);
	const charger = useCallback(async () => {
		if (!businessId || !id) return;
		setChargement(true);
		setErreur(null);
		try {
			const resultat = await lireFournisseur(businessId, id);
			setFournisseur(resultat);
			setNom(resultat.nom ?? "");
			setEmail(resultat.email ?? "");
			setWebsite(resultat.website ?? "");
			const adresseAffichee = resultat.adresses[0] ?? resultat.userAdresses[0];
			setPays(adresseAffichee?.pays ?? "");
			setVille(adresseAffichee?.ville ?? "");
			setRegion(adresseAffichee?.region ?? "");
			setAdresse(adresseAffichee?.adresse ?? "");
			setCodePostal(adresseAffichee?.codePostal ?? "");
		} catch (error) {
			setErreur(error instanceof Error ? error.message : "Impossible de charger le fournisseur.");
		} finally {
			setChargement(false);
		}
	}, [businessId, id]);
	useEffect(() => {
		charger();
	}, [charger]);
	const executerMutation = async (operation, succes, afficherSucces = true, afficherErreur = true, rafraichir = true) => {
		setEnCours(true);
		try {
			await operation();
			if (afficherSucces) toast.success(succes);
			if (rafraichir) await charger();
			return true;
		} catch (error) {
			if (afficherErreur) toast.error(error instanceof Error ? error.message : "L’opération a échoué.");
			return false;
		} finally {
			setEnCours(false);
		}
	};
	const enregistrerInfos = async (event) => {
		event.preventDefault();
		if (!businessId || !id || !fournisseur) return;
		const validation = InformationsFournisseurSchema.safeParse({
			nom,
			email,
			website,
			pays,
			ville,
			region,
			adresse,
			codePostal
		});
		if (!validation.success) {
			const erreurs = {};
			for (const issue of validation.error.issues) {
				const champ = issue.path[0];
				if (typeof champ === "string") erreurs[champ] = issue.message;
			}
			setErreursFormulaire(erreurs);
			return;
		}
		setErreursFormulaire({});
		const valeurs = validation.data;
		const nomModifie = valeurs.nom !== (fournisseur.nom ?? "");
		const emailModifie = valeurs.email !== (fournisseur.email ?? "");
		const websiteModifie = valeurs.website !== (fournisseur.website ?? "");
		const fournisseurModifie = nomModifie || emailModifie || websiteModifie;
		const adresseExistante = fournisseur.adresses[0];
		const adresseModifiee = valeurs.pays !== (adresseExistante?.pays ?? "") || valeurs.ville !== (adresseExistante?.ville ?? "") || valeurs.region !== (adresseExistante?.region ?? "") || valeurs.adresse !== (adresseExistante?.adresse ?? "") || valeurs.codePostal !== (adresseExistante?.codePostal ?? "");
		setEnregistrementInfos(true);
		try {
			await executerMutation(async () => {
				if (fournisseurModifie) {
					const fournisseurForm = {
						...nomModifie ? { nom: valeurs.nom } : {},
						...emailModifie ? { email: valeurs.email } : {},
						...websiteModifie ? { website: valeurs.website } : {}
					};
					await modifierFournisseur(businessId, id, fournisseurForm);
				}
				let adresseMiseAJour = adresseExistante;
				if (adresseModifiee) {
					const adresseForm = {
						pays: valeurs.pays,
						ville: valeurs.ville,
						region: valeurs.region,
						adresse: valeurs.adresse,
						codePostal: valeurs.codePostal,
						fournisseurId: id
					};
					const resultatAdresse = adresseExistante ? await modifier_adresse(adresseExistante.id, adresseForm) : await creer_adresse(adresseForm);
					if (!resultatAdresse.success) throw new Error(resultatAdresse.message || "La mise à jour de l’adresse a échoué.");
					const adresseId = adresseExistante?.id ?? resultatAdresse.data?.id;
					if (typeof adresseId !== "string") throw new Error("L’adresse a été enregistrée, mais sa référence est introuvable.");
					adresseMiseAJour = {
						id: adresseId,
						pays: valeurs.pays,
						ville: valeurs.ville,
						region: valeurs.region,
						adresse: valeurs.adresse,
						codePostal: valeurs.codePostal || null
					};
				}
				setFournisseur((courant) => courant ? {
					...courant,
					...fournisseurModifie ? {
						nom: valeurs.nom,
						email: valeurs.email || null,
						website: valeurs.website || null
					} : {},
					adresses: adresseMiseAJour ? [adresseMiseAJour, ...courant.adresses.slice(1)] : courant.adresses
				} : courant);
			}, "Les informations du fournisseur ont été modifiées.", true, true, false);
		} finally {
			setEnregistrementInfos(false);
		}
	};
	const informationsModifiees = fournisseur !== null && (nom !== (fournisseur.nom ?? "") || email !== (fournisseur.email ?? "") || website !== (fournisseur.website ?? "") || pays !== (fournisseur.adresses[0]?.pays ?? "") || ville !== (fournisseur.adresses[0]?.ville ?? "") || region !== (fournisseur.adresses[0]?.region ?? "") || adresse !== (fournisseur.adresses[0]?.adresse ?? "") || codePostal !== (fournisseur.adresses[0]?.codePostal ?? ""));
	const ouvrirCreationContact = () => {
		setContactEdite(null);
		setTelephone("");
		setDialogContact(true);
	};
	const ouvrirModificationContact = (item) => {
		setContactEdite(item);
		setTelephone(item.phone ?? "");
		setDialogContact(true);
	};
	const enregistrerContact = async (event) => {
		event.preventDefault();
		if (!id) return;
		const form = {
			type: "PHONE",
			phone: telephone,
			email: null,
			fournisseurId: id
		};
		if (await executerMutation(async () => {
			const resultat = contactEdite ? await modifier_contact(contactEdite.id, form) : await creer_contact(form);
			if (!resultat.success) throw new Error(resultat.message);
			const contactId = contactEdite?.id ?? resultat.data?.id;
			if (typeof contactId !== "string") throw new Error("Le contact a été enregistré, mais sa référence est introuvable.");
			const contactMisAJour = {
				id: contactId,
				type: "PHONE",
				label: contactEdite?.label ?? resultat.data?.label ?? null,
				email: null,
				phone: telephone,
				status: contactEdite?.status ?? resultat.data?.status ?? "EN_ATTENTE"
			};
			setFournisseur((courant) => {
				if (!courant) return courant;
				const contacts = contactEdite ? courant.contacts.map((contact) => contact.id === contactMisAJour.id ? contactMisAJour : contact) : [...courant.contacts, contactMisAJour];
				return {
					...courant,
					contacts
				};
			});
		}, contactEdite ? "Le contact a été modifié." : "Le contact a été ajouté.", true, true, false)) setDialogContact(false);
	};
	const confirmerSuppression = async () => {
		if (!aSupprimer) return;
		if (aSupprimer.type === "fournisseur" && businessId) {
			if (await executerMutation(() => supprimerFournisseur(businessId, aSupprimer.id), "Le fournisseur a été supprimé.", false, false)) navigate("/fournisseurs");
		} else if (aSupprimer.type === "contact") {
			if (await executerMutation(async () => {
				const resultat = await supprimer_contact(aSupprimer.id);
				if (!resultat.success) throw new Error(resultat.message || "La suppression du contact a échoué.");
				setFournisseur((courant) => courant ? {
					...courant,
					contacts: courant.contacts.filter((contact) => contact.id !== aSupprimer.id)
				} : courant);
			}, "Le contact a été supprimé.", true, true, false)) setASupprimer(null);
		}
	};
	if (chargement) return /* @__PURE__ */ jsx("p", {
		className: "p-6 text-sm text-muted-foreground",
		children: "Chargement du fournisseur…"
	});
	if (erreur || !fournisseur) return /* @__PURE__ */ jsxs("main", {
		className: "space-y-4 p-6",
		children: [/* @__PURE__ */ jsx("p", {
			role: "alert",
			className: "text-destructive",
			children: erreur ?? "Fournisseur introuvable."
		}), /* @__PURE__ */ jsx(Link, {
			to: "/fournisseurs",
			className: "inline-flex h-8 items-center rounded-lg border px-3 text-sm hover:bg-muted",
			children: "Retour aux fournisseurs"
		})]
	});
	const adresseDuCompte = fournisseur.adresses.length === 0 && fournisseur.userAdresses.length > 0;
	const compteExistant = Boolean(fournisseur.userId);
	const invitationExpiree = fournisseur.invitationExpiresAt !== null && fournisseur.invitationExpiresAt !== void 0 && new Date(fournisseur.invitationExpiresAt).getTime() <= Date.now();
	return /* @__PURE__ */ jsxs("main", {
		className: "space-y-5 p-4 lg:p-6",
		children: [
			/* @__PURE__ */ jsxs(Link, {
				to: "/fournisseurs",
				className: "inline-flex h-8 w-fit items-center gap-2 rounded-lg px-2.5 text-sm font-medium hover:bg-muted",
				children: [/* @__PURE__ */ jsx(ArrowLeft, { className: "size-4" }), " Retour aux fournisseurs"]
			}),
			/* @__PURE__ */ jsxs("header", { children: [/* @__PURE__ */ jsx("h1", {
				className: "text-2xl font-semibold",
				children: fournisseur.nom || "Fournisseur"
			}), /* @__PURE__ */ jsx("p", {
				className: "text-sm text-muted-foreground",
				children: fournisseur.isVerified ? "Fournisseur vérifié" : "Invitation en attente de validation"
			})] }),
			/* @__PURE__ */ jsxs(Tabs, {
				defaultValue: "activites",
				className: "w-full",
				children: [
					/* @__PURE__ */ jsxs(TabsList, {
						className: "h-auto w-full flex-wrap justify-start",
						children: [/* @__PURE__ */ jsx(TabsTrigger, {
							value: "activites",
							children: "Activités"
						}), /* @__PURE__ */ jsx(TabsTrigger, {
							value: "informations",
							children: "Informations"
						})]
					}),
					/* @__PURE__ */ jsxs(TabsContent, {
						value: "activites",
						className: "space-y-3 pt-4",
						children: [/* @__PURE__ */ jsx("h2", {
							className: "text-lg font-medium",
							children: "Activités du fournisseur"
						}), fournisseur.details.length === 0 ? /* @__PURE__ */ jsx("p", {
							className: "rounded-lg border p-5 text-sm text-muted-foreground",
							children: "Aucune activité d’achat enregistrée."
						}) : /* @__PURE__ */ jsx("ul", {
							className: "grid grid-cols-1 gap-2 sm:grid-cols-2",
							children: fournisseur.details.map((detail) => /* @__PURE__ */ jsxs("li", {
								className: "rounded-lg border p-4",
								children: [
									/* @__PURE__ */ jsx("p", {
										className: "font-medium",
										children: detail.article.designation
									}),
									/* @__PURE__ */ jsxs("p", {
										className: "text-sm text-muted-foreground",
										children: [
											detail.qtte,
											" unité(s) · ",
											detail.pu,
											" ",
											detail.devise.symbole,
											" / unité · Total",
											" ",
											detail.pt,
											" ",
											detail.devise.symbole
										]
									}),
									/* @__PURE__ */ jsxs("p", {
										className: "text-xs text-muted-foreground",
										children: [new Date(detail.achat?.dateAchat ?? detail.createdAt).toLocaleString("fr-FR"), detail.achat ? ` · Achat ${detail.achat.status.toLowerCase()}` : ""]
									})
								]
							}, detail.id))
						})]
					}),
					/* @__PURE__ */ jsxs(TabsContent, {
						value: "informations",
						className: "space-y-4 pt-4",
						children: [
							/* @__PURE__ */ jsxs("section", {
								className: "space-y-4 rounded-xl border p-4",
								children: [/* @__PURE__ */ jsxs("div", {
									className: "flex items-center gap-4",
									children: [/* @__PURE__ */ jsxs(Avatar$1, {
										className: "size-16",
										children: [/* @__PURE__ */ jsx(AvatarImage, {
											src: fournisseur.userImage || (fournisseur.logo && fournisseur.logo !== "http://localhost:3000/uploads/fournisseurs/default-logo-fournisseur.png" ? fournisseur.logo : "/images/fournisseurs/fournisseur-par-defaut.svg"),
											alt: fournisseur.nom || "Logo du fournisseur",
											className: "object-cover"
										}), /* @__PURE__ */ jsx(AvatarFallback, {
											className: "bg-background",
											children: /* @__PURE__ */ jsx("img", {
												src: "/images/fournisseurs/fournisseur-par-defaut.svg",
												alt: "",
												className: "size-full object-cover"
											})
										})]
									}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h2", {
										className: "font-semibold",
										children: "Informations du fournisseur"
									}), /* @__PURE__ */ jsx("p", {
										className: "text-sm text-muted-foreground",
										children: "Coordonnées et identité du fournisseur."
									})] })]
								}), /* @__PURE__ */ jsx("form", {
									onSubmit: enregistrerInfos,
									children: /* @__PURE__ */ jsxs("fieldset", {
										disabled: compteExistant,
										className: "m-0 min-w-0 space-y-4 border-0 p-0",
										children: [
											/* @__PURE__ */ jsxs("label", {
												className: "block space-y-1 text-sm",
												children: [
													/* @__PURE__ */ jsx("span", { children: "Nom" }),
													/* @__PURE__ */ jsx(Input, {
														value: nom,
														onChange: (event) => setNom(event.currentTarget.value),
														placeholder: "Nom du fournisseur",
														required: true,
														"aria-invalid": !!erreursFormulaire.nom
													}),
													erreursFormulaire.nom && /* @__PURE__ */ jsx("span", {
														className: "text-sm text-destructive",
														children: erreursFormulaire.nom
													})
												]
											}),
											/* @__PURE__ */ jsxs("div", {
												className: "grid gap-4 sm:grid-cols-2",
												children: [/* @__PURE__ */ jsxs("label", {
													className: "block space-y-1 text-sm",
													children: [
														/* @__PURE__ */ jsx("span", { children: "E-mail" }),
														/* @__PURE__ */ jsx(Input, {
															type: "email",
															value: email,
															onChange: (event) => setEmail(event.currentTarget.value),
															placeholder: "Adresse e-mail",
															"aria-invalid": !!erreursFormulaire.email,
															disabled: !!fournisseur.userId,
															"aria-describedby": fournisseur.userId ? "fournisseur-email-aide" : void 0
														}),
														fournisseur.userId ? /* @__PURE__ */ jsx("span", {
															id: "fournisseur-email-aide",
															className: "text-xs text-muted-foreground",
															children: "Cette adresse provient du compte utilisateur rattaché."
														}) : erreursFormulaire.email && /* @__PURE__ */ jsx("span", {
															className: "text-sm text-destructive",
															children: erreursFormulaire.email
														})
													]
												}), /* @__PURE__ */ jsxs("label", {
													className: "block space-y-1 text-sm",
													children: [
														/* @__PURE__ */ jsx("span", { children: "Site web" }),
														/* @__PURE__ */ jsx(Input, {
															type: "url",
															value: website,
															onChange: (event) => setWebsite(event.currentTarget.value),
															placeholder: "https://exemple.com",
															"aria-invalid": !!erreursFormulaire.website
														}),
														erreursFormulaire.website && /* @__PURE__ */ jsx("span", {
															className: "text-sm text-destructive",
															children: erreursFormulaire.website
														})
													]
												})]
											}),
											/* @__PURE__ */ jsxs("div", {
												className: "space-y-3",
												children: [
													/* @__PURE__ */ jsx("h3", {
														className: "text-sm font-medium",
														children: "Adresse"
													}),
													/* @__PURE__ */ jsx("p", {
														className: "text-sm text-muted-foreground",
														children: compteExistant ? "Les informations de ce compte utilisateur sont en lecture seule." : adresseDuCompte ? "Pré-remplie depuis le compte utilisateur rattaché. L’enregistrer en crée une copie propre à votre business." : "Indiquez l’adresse principale du fournisseur."
													}),
													/* @__PURE__ */ jsxs("div", {
														className: "grid gap-4 sm:grid-cols-2",
														children: [
															/* @__PURE__ */ jsxs("label", {
																className: "block space-y-1 text-sm",
																children: [
																	/* @__PURE__ */ jsx("span", { children: "Pays" }),
																	/* @__PURE__ */ jsxs(Select, {
																		value: pays || null,
																		onValueChange: (value) => setPays(value ?? ""),
																		children: [/* @__PURE__ */ jsx(SelectTrigger, {
																			className: "w-full",
																			"aria-label": "Pays",
																			children: /* @__PURE__ */ jsx(SelectValue, { placeholder: "Sélectionner un pays" })
																		}), /* @__PURE__ */ jsx(SelectContent, { children: /* @__PURE__ */ jsx(SelectGroup, { children: items.filter((item) => item.value !== null).map((item) => /* @__PURE__ */ jsx(SelectItem, {
																			value: item.value,
																			children: item.label
																		}, item.value)) }) })]
																	}),
																	erreursFormulaire.pays && /* @__PURE__ */ jsx("span", {
																		className: "text-sm text-destructive",
																		children: erreursFormulaire.pays
																	})
																]
															}),
															/* @__PURE__ */ jsxs("label", {
																className: "block space-y-1 text-sm",
																children: [
																	/* @__PURE__ */ jsx("span", { children: "Ville" }),
																	/* @__PURE__ */ jsx(Input, {
																		value: ville,
																		onChange: (event) => setVille(event.currentTarget.value),
																		placeholder: "Ville",
																		"aria-invalid": !!erreursFormulaire.ville
																	}),
																	erreursFormulaire.ville && /* @__PURE__ */ jsx("span", {
																		className: "text-sm text-destructive",
																		children: erreursFormulaire.ville
																	})
																]
															}),
															/* @__PURE__ */ jsxs("label", {
																className: "block space-y-1 text-sm",
																children: [
																	/* @__PURE__ */ jsx("span", { children: "Région / Commune" }),
																	/* @__PURE__ */ jsx(Input, {
																		value: region,
																		onChange: (event) => setRegion(event.currentTarget.value),
																		placeholder: "Région / Commune",
																		"aria-invalid": !!erreursFormulaire.region
																	}),
																	erreursFormulaire.region && /* @__PURE__ */ jsx("span", {
																		className: "text-sm text-destructive",
																		children: erreursFormulaire.region
																	})
																]
															}),
															/* @__PURE__ */ jsxs("label", {
																className: "block space-y-1 text-sm",
																children: [
																	/* @__PURE__ */ jsx("span", { children: "Adresse" }),
																	/* @__PURE__ */ jsx(Input, {
																		value: adresse,
																		onChange: (event) => setAdresse(event.currentTarget.value),
																		placeholder: "Adresse",
																		"aria-invalid": !!erreursFormulaire.adresse
																	}),
																	erreursFormulaire.adresse && /* @__PURE__ */ jsx("span", {
																		className: "text-sm text-destructive",
																		children: erreursFormulaire.adresse
																	})
																]
															}),
															/* @__PURE__ */ jsxs("label", {
																className: "col-span-full block space-y-1 text-sm",
																children: [
																	/* @__PURE__ */ jsx("span", { children: "Code postal (optionnel)" }),
																	/* @__PURE__ */ jsx(Input, {
																		value: codePostal,
																		onChange: (event) => setCodePostal(event.currentTarget.value),
																		placeholder: "Code postal",
																		"aria-invalid": !!erreursFormulaire.codePostal
																	}),
																	erreursFormulaire.codePostal && /* @__PURE__ */ jsx("span", {
																		className: "text-sm text-destructive",
																		children: erreursFormulaire.codePostal
																	})
																]
															})
														]
													})
												]
											}),
											/* @__PURE__ */ jsx("div", {
												className: "flex justify-end",
												children: /* @__PURE__ */ jsxs(Button, {
													type: "submit",
													disabled: compteExistant || enCours || !informationsModifiees,
													children: [enregistrementInfos && /* @__PURE__ */ jsx(Loader2, {
														className: "size-4 animate-spin",
														"aria-hidden": "true"
													}), "Personnaliser"]
												})
											})
										]
									})
								})]
							}),
							/* @__PURE__ */ jsx("section", {
								className: "space-y-4 rounded-xl border p-4",
								children: compteExistant ? /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h2", {
									className: "font-semibold",
									children: "Contacts de l’utilisateur invité"
								}), /* @__PURE__ */ jsx("p", {
									className: "text-sm text-muted-foreground",
									children: "Coordonnées renseignées sur son compte. Elles ne sont pas modifiables depuis votre business."
								})] }), fournisseur.userContacts.length > 0 ? /* @__PURE__ */ jsx("ul", {
									className: "grid grid-cols-1 gap-2 sm:grid-cols-2",
									children: fournisseur.userContacts.map((item) => /* @__PURE__ */ jsxs("li", {
										className: "flex items-center justify-between gap-3 rounded-lg border border-dashed bg-muted/30 p-3",
										children: [/* @__PURE__ */ jsxs("span", {
											className: "flex min-w-0 items-center gap-2 text-sm",
											children: [item.type === "EMAIL" ? /* @__PURE__ */ jsx(Mail, { className: "size-4 shrink-0" }) : /* @__PURE__ */ jsx(Phone, { className: "size-4 shrink-0" }), /* @__PURE__ */ jsx("span", {
												className: "truncate",
												children: item.email || item.phone || item.label || "Contact"
											})]
										}), item.status === "VERIFIE" && /* @__PURE__ */ jsx("span", {
											className: "shrink-0 text-xs text-muted-foreground",
											children: "Vérifié"
										})]
									}, item.id))
								}) : /* @__PURE__ */ jsx("p", {
									className: "text-sm text-muted-foreground",
									children: "Aucun contact n’est renseigné sur ce compte utilisateur."
								})] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
									/* @__PURE__ */ jsxs("div", {
										className: "flex items-start justify-between gap-3",
										children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h2", {
											className: "font-semibold",
											children: "Contacts"
										}), /* @__PURE__ */ jsx("p", {
											className: "text-sm text-muted-foreground",
											children: "Ajoutez jusqu’à deux contacts pour joindre le fournisseur."
										})] }), /* @__PURE__ */ jsxs(Button, {
											variant: "outline",
											className: "border",
											onClick: ouvrirCreationContact,
											disabled: fournisseur.contacts.length >= 2,
											children: [/* @__PURE__ */ jsx(Plus, {}), " Ajouter"]
										})]
									}),
									fournisseur.contacts.length >= 2 && /* @__PURE__ */ jsx("p", {
										className: "text-sm text-muted-foreground",
										children: "Le fournisseur a atteint la limite de deux contacts."
									}),
									fournisseur.contacts.length ? /* @__PURE__ */ jsx("ul", {
										className: "grid grid-cols-2 gap-2",
										children: fournisseur.contacts.map((item) => /* @__PURE__ */ jsxs("li", {
											className: "flex items-center justify-between gap-3 rounded-lg border p-3",
											children: [/* @__PURE__ */ jsxs("span", {
												className: "flex min-w-0 items-center gap-2 text-sm",
												children: [item.type === "EMAIL" ? /* @__PURE__ */ jsx(Mail, { className: "size-4 shrink-0" }) : /* @__PURE__ */ jsx(Phone, { className: "size-4 shrink-0" }), /* @__PURE__ */ jsx("span", {
													className: "truncate",
													children: item.email || item.phone || item.label || "Contact"
												})]
											}), /* @__PURE__ */ jsxs("div", {
												className: "flex shrink-0 gap-1",
												children: [/* @__PURE__ */ jsx(Button, {
													variant: "ghost",
													size: "icon",
													className: "border",
													"aria-label": "Modifier le contact",
													onClick: () => ouvrirModificationContact(item),
													children: /* @__PURE__ */ jsx(Pencil, {})
												}), /* @__PURE__ */ jsx(Button, {
													variant: "ghost",
													size: "icon",
													className: "border text-destructive",
													"aria-label": "Supprimer le contact",
													onClick: () => setASupprimer({
														type: "contact",
														id: item.id,
														label: item.email || item.phone || item.label || "ce contact"
													}),
													children: /* @__PURE__ */ jsx(Trash2, {})
												})]
											})]
										}, item.id))
									}) : /* @__PURE__ */ jsx("p", {
										className: "text-sm text-muted-foreground",
										children: "Aucun contact renseigné."
									})
								] })
							}),
							/* @__PURE__ */ jsxs("section", {
								className: "space-y-4 rounded-xl border p-4",
								children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h2", {
									className: "font-semibold",
									children: "Zone de danger"
								}), /* @__PURE__ */ jsx("p", {
									className: "text-sm text-muted-foreground",
									children: "La suppression du fournisseur supprimera également toutes ses opérations."
								})] }), /* @__PURE__ */ jsxs("div", {
									className: "flex flex-wrap gap-2",
									children: [
										!fournisseur.isVerified && invitationExpiree && /* @__PURE__ */ jsxs(Button, {
											variant: "outline",
											className: "border",
											disabled: enCours,
											onClick: () => void executerMutation(() => renvoyerInvitationFournisseur(businessId, fournisseur.id), "Le courriel d’invitation a été renvoyé.", false, false),
											children: [/* @__PURE__ */ jsx(Send, {}), " Renvoyer l’invitation"]
										}),
										!fournisseur.isVerified && !invitationExpiree && /* @__PURE__ */ jsx("p", {
											className: "self-center text-sm text-muted-foreground",
											children: "L’invitation n’a pas encore expiré."
										}),
										/* @__PURE__ */ jsxs(Button, {
											variant: "destructive",
											className: "border border-destructive",
											disabled: enCours,
											onClick: () => setASupprimer({
												type: "fournisseur",
												id: fournisseur.id,
												label: fournisseur.nom || "ce fournisseur"
											}),
											children: [/* @__PURE__ */ jsx(Trash2, {}), " Supprimer le fournisseur"]
										})
									]
								})]
							})
						]
					})
				]
			}),
			!compteExistant && /* @__PURE__ */ jsx(Dialog$1, {
				open: dialogContact,
				onOpenChange: setDialogContact,
				children: /* @__PURE__ */ jsxs(DialogContent, { children: [/* @__PURE__ */ jsxs(DialogHeader, { children: [/* @__PURE__ */ jsx(DialogTitle, { children: contactEdite ? "Modifier le contact" : "Ajouter un contact" }), /* @__PURE__ */ jsx(DialogDescription, { children: "Ajoutez une adresse e-mail ou un numéro de téléphone." })] }), /* @__PURE__ */ jsxs("form", {
					onSubmit: enregistrerContact,
					className: "space-y-3",
					children: [/* @__PURE__ */ jsxs("label", {
						className: "block space-y-1 text-sm",
						children: [/* @__PURE__ */ jsx("span", { children: "Numéro de téléphone" }), /* @__PURE__ */ jsx(Input, {
							type: "tel",
							value: telephone,
							onChange: (event) => setTelephone(event.currentTarget.value),
							placeholder: "Téléphone (+243…)",
							required: true
						})]
					}), /* @__PURE__ */ jsxs(DialogFooter, { children: [/* @__PURE__ */ jsx(Button, {
						type: "button",
						variant: "outline",
						onClick: () => setDialogContact(false),
						children: "Annuler"
					}), /* @__PURE__ */ jsxs(Button, {
						type: "submit",
						disabled: enCours,
						children: [enCours && /* @__PURE__ */ jsx(Loader2, {
							className: "size-4 animate-spin",
							"aria-hidden": "true"
						}), contactEdite ? "Enregistrer" : "Ajouter"]
					})] })]
				})] })
			}),
			/* @__PURE__ */ jsx(AlertDialog$1, {
				open: aSupprimer !== null,
				onOpenChange: (open) => {
					if (!open && !enCours) setASupprimer(null);
				},
				children: /* @__PURE__ */ jsxs(AlertDialogContent, { children: [/* @__PURE__ */ jsxs(AlertDialogHeader, { children: [/* @__PURE__ */ jsx(AlertDialogTitle, { children: "Confirmer la suppression" }), /* @__PURE__ */ jsxs(AlertDialogDescription, { children: [
					aSupprimer?.type === "fournisseur" ? `Le fournisseur « ${aSupprimer.label} » sera supprimé.` : `Le contact « ${aSupprimer?.label} » sera supprimé.`,
					" ",
					"Cette action est irréversible."
				] })] }), /* @__PURE__ */ jsxs(AlertDialogFooter, { children: [/* @__PURE__ */ jsx(AlertDialogCancel, {
					disabled: enCours,
					children: "Annuler"
				}), /* @__PURE__ */ jsx(AlertDialogAction, {
					variant: "destructive",
					disabled: enCours,
					onClick: () => void confirmerSuppression(),
					children: enCours ? "Suppression…" : "Supprimer"
				})] })] })
			})
		]
	});
});
//#endregion
//#region app/components/travailleurs/inviter-travailleur.tsx
function nomUtilisateur(utilisateur) {
	return utilisateur.full_name?.trim() || utilisateur.contacts.find((contact) => contact.label?.trim())?.label?.trim() || utilisateur.contacts.find((contact) => contact.email?.trim())?.email?.trim() || `Utilisateur ${utilisateur.id.slice(-6)}`;
}
function emailUtilisateur(utilisateur) {
	if (utilisateur.email?.trim()) return utilisateur.email.trim();
	return utilisateur.contacts.find((contact) => contact.label?.trim())?.email?.trim() || utilisateur.contacts.find((contact) => contact.email?.trim())?.email?.trim() || "E-mail non renseigné";
}
function InviterTravailleur({ businessId, open, onOpenChange, onAdded }) {
	const [utilisateurs, setUtilisateurs] = useState([]);
	const [selection, setSelection] = useState(() => /* @__PURE__ */ new Set());
	const [recherche, setRecherche] = useState("");
	const [chargement, setChargement] = useState(false);
	const [erreur, setErreur] = useState(null);
	const [ajoutEnCours, setAjoutEnCours] = useState(false);
	useEffect(() => {
		if (!open) return;
		setSelection(/* @__PURE__ */ new Set());
		setRecherche("");
		setUtilisateurs([]);
		setErreur(null);
	}, [open]);
	useEffect(() => {
		if (!open) return;
		const terme = recherche.trim();
		if (!terme) {
			setUtilisateurs([]);
			setErreur(null);
			setChargement(false);
			return;
		}
		if (!businessId) {
			setErreur("Aucun business n’est sélectionné.");
			return;
		}
		let annule = false;
		setChargement(true);
		setErreur(null);
		setUtilisateurs([]);
		const timeout = window.setTimeout(() => {
			listerUtilisateursAgentDisponibles(businessId, terme).then((resultat) => {
				if (!annule) setUtilisateurs(resultat);
			}).catch((error) => {
				if (!annule) setErreur(error.message || "Impossible de charger les utilisateurs.");
			}).finally(() => {
				if (!annule) setChargement(false);
			});
		}, 300);
		return () => {
			annule = true;
			window.clearTimeout(timeout);
		};
	}, [
		businessId,
		open,
		recherche
	]);
	const basculerSelection = (id) => {
		setSelection((courante) => {
			const suivante = new Set(courante);
			if (suivante.has(id)) suivante.delete(id);
			else suivante.add(id);
			return suivante;
		});
	};
	const ajouterSelection = async () => {
		if (!businessId || selection.size === 0) return;
		setAjoutEnCours(true);
		try {
			await toast.promise(inviterUtilisateursCommeAgents(businessId, Array.from(selection)), {
				loading: "Envoi des invitations…",
				success: ({ data, message }) => {
					onAdded(data);
					onOpenChange(false);
					return message;
				},
				error: (error) => error.message
			}).unwrap();
		} finally {
			setAjoutEnCours(false);
		}
	};
	return /* @__PURE__ */ jsx(Dialog$1, {
		open,
		onOpenChange: (ouvert) => {
			if (!ajoutEnCours) onOpenChange(ouvert);
		},
		children: /* @__PURE__ */ jsxs(DialogContent, {
			className: "flex max-h-[85dvh] flex-col gap-0 overflow-hidden",
			children: [
				/* @__PURE__ */ jsxs(DialogHeader, {
					className: "pb-3",
					children: [/* @__PURE__ */ jsx(DialogTitle, { children: "Inviter des travailleurs" }), /* @__PURE__ */ jsx(DialogDescription, { children: "Sélectionnez les utilisateurs à inviter dans votre équipe. Les personnes déjà rattachées à ce business et votre propre compte ne sont pas proposées." })]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "relative pb-3",
					children: [/* @__PURE__ */ jsx(SearchIcon, { className: "pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" }), /* @__PURE__ */ jsx(Input, {
						value: recherche,
						onChange: (event) => setRecherche(event.currentTarget.value),
						placeholder: "Rechercher par nom, e-mail ou téléphone…",
						"aria-label": "Rechercher un utilisateur",
						className: "pl-9"
					})]
				}),
				/* @__PURE__ */ jsx("div", {
					className: "min-h-32 max-h-[40dvh] overflow-y-auto rounded-lg border",
					"aria-busy": chargement,
					children: chargement ? /* @__PURE__ */ jsx("p", {
						className: "p-6 text-center text-sm text-muted-foreground",
						role: "status",
						children: "Chargement des utilisateurs…"
					}) : erreur ? /* @__PURE__ */ jsxs("div", {
						className: "space-y-3 p-6 text-center",
						children: [/* @__PURE__ */ jsx("p", {
							className: "text-sm text-destructive",
							children: erreur
						}), /* @__PURE__ */ jsx(Button, {
							type: "button",
							variant: "outline",
							size: "sm",
							onClick: () => onOpenChange(false),
							children: "Fermer"
						})]
					}) : utilisateurs.length === 0 ? /* @__PURE__ */ jsx("p", {
						className: "p-6 text-center text-sm text-muted-foreground",
						children: recherche.trim() ? "Aucun utilisateur ne correspond à la recherche." : "Lancez une recherche pour afficher les utilisateurs."
					}) : /* @__PURE__ */ jsx("ul", {
						className: "divide-y",
						children: utilisateurs.map((utilisateur) => {
							const selectionne = selection.has(utilisateur.id);
							return /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("button", {
								type: "button",
								onClick: () => basculerSelection(utilisateur.id),
								"aria-pressed": selectionne,
								"aria-label": `${selectionne ? "Désélectionner" : "Sélectionner"} ${nomUtilisateur(utilisateur)}`,
								className: `flex w-full items-center gap-3 px-4 py-3 text-left transition-colors hover:bg-muted/50 ${selectionne ? "bg-primary/10" : ""}`,
								children: [
									/* @__PURE__ */ jsxs(Avatar$1, {
										className: "size-9 shrink-0",
										children: [/* @__PURE__ */ jsx(AvatarImage, {
											src: utilisateur.image ?? void 0,
											alt: ""
										}), /* @__PURE__ */ jsx(AvatarFallback, {
											className: "bg-primary/10 text-sm font-medium text-primary",
											children: nomUtilisateur(utilisateur).charAt(0).toLocaleUpperCase("fr")
										})]
									}),
									/* @__PURE__ */ jsxs("span", {
										className: "min-w-0 flex-1",
										children: [/* @__PURE__ */ jsx("span", {
											className: "block truncate text-sm font-medium",
											children: nomUtilisateur(utilisateur)
										}), /* @__PURE__ */ jsx("span", {
											className: "block truncate text-xs text-muted-foreground",
											children: emailUtilisateur(utilisateur)
										})]
									}),
									/* @__PURE__ */ jsx("span", {
										className: `flex size-5 shrink-0 items-center justify-center rounded-full border ${selectionne ? "border-primary bg-primary text-primary-foreground" : "border-muted-foreground/40"}`,
										"aria-hidden": "true",
										children: selectionne && /* @__PURE__ */ jsx(Check, { className: "size-3" })
									})
								]
							}) }, utilisateur.id);
						})
					})
				}),
				/* @__PURE__ */ jsxs(DialogFooter, {
					className: "mt-4 flex-row items-center justify-between gap-3",
					children: [/* @__PURE__ */ jsx(Button, {
						type: "button",
						variant: "outline",
						onClick: () => onOpenChange(false),
						disabled: ajoutEnCours,
						children: "Annuler"
					}), /* @__PURE__ */ jsx(Button, {
						type: "button",
						onClick: ajouterSelection,
						disabled: chargement || !!erreur || selection.size === 0 || ajoutEnCours,
						children: ajoutEnCours ? "Envoi…" : `Envoyer les invitations (${selection.size})`
					})]
				})
			]
		})
	});
}
//#endregion
//#region app/routes/travailleurs/travailleurs.tsx
var travailleurs_exports = /* @__PURE__ */ __exportAll({ default: () => travailleurs_default });
function nomAgent$1(agent) {
	return agent.fullName?.trim() || agent.email?.trim() || "Travailleur sans nom";
}
var travailleurs_default = UNSAFE_withComponentProps(function Travailleurs() {
	const { businessId } = useBusiness();
	const [recherche, setRecherche] = useState("");
	const [saisie, setSaisie] = useState("");
	const [filtreStatut, setFiltreStatut] = useState("tous");
	const [taillePage, setTaillePage] = useState(10);
	const [page, setPage] = useState(0);
	const [invitationOuverte, setInvitationOuverte] = useState(false);
	const [aSupprimer, setASupprimer] = useState(null);
	const [changementStatutAConfirmer, setChangementStatutAConfirmer] = useState(null);
	const [suppressionEnCours, setSuppressionEnCours] = useState(false);
	const [renvoiEnCours, setRenvoiEnCours] = useState(null);
	const [statutEnCours, setStatutEnCours] = useState(null);
	useEffect(() => {
		const timeout = window.setTimeout(() => {
			setRecherche(saisie.trim());
			setPage(0);
		}, 300);
		return () => window.clearTimeout(timeout);
	}, [saisie]);
	const charger = useCallback(() => listerAgents(businessId, {
		...recherche ? { search: recherche } : {},
		...filtreStatut === "tous" ? {} : { status: filtreStatut }
	}), [
		businessId,
		recherche,
		filtreStatut
	]);
	const { donnees, chargement, erreur, recharger, ajouter, mettreAJour, retirer } = useListe(charger, !!businessId);
	const nombrePages = Math.ceil(donnees.length / taillePage);
	const pageCourante = Math.min(page, Math.max(0, nombrePages - 1));
	const agentsAffiches = donnees.slice(pageCourante * taillePage, (pageCourante + 1) * taillePage);
	const debut = donnees.length === 0 ? 0 : pageCourante * taillePage + 1;
	const fin = Math.min((pageCourante + 1) * taillePage, donnees.length);
	const ajouterAgentsInvites = (agents) => {
		agents.forEach((agent) => ajouter(agent));
		if (agents.length > 0) setPage(0);
		recharger();
	};
	const changerStatut = async (agent, bloquer) => {
		if (!businessId) return;
		setStatutEnCours(agent.id);
		try {
			await toast.promise(bloquer ? bloquerAgent(businessId, agent.id) : activerAgent(businessId, agent.id), {
				loading: bloquer ? "Blocage…" : "Réactivation…",
				success: ({ message }) => {
					mettreAJour({
						...agent,
						status: bloquer ? "BLOQUE" : "ACTIF"
					}, (element) => element.id);
					return message;
				},
				error: (e) => e.message
			}).unwrap();
		} finally {
			setStatutEnCours(null);
		}
	};
	const renvoyerInvitation = async (agent) => {
		if (!businessId) return;
		setRenvoiEnCours(agent.id);
		try {
			const resultat = await renvoyerInvitationAgent(businessId, agent.id);
			toast.success(resultat.message);
			recharger();
		} catch (error) {
			toast.error(error instanceof Error ? error.message : "Le renvoi de l’invitation a échoué.");
		} finally {
			setRenvoiEnCours(null);
		}
	};
	const confirmerSuppression = async () => {
		if (!aSupprimer || !businessId) return;
		setSuppressionEnCours(true);
		try {
			await toast.promise(supprimerAgent(businessId, aSupprimer.id), {
				loading: "Retrait…",
				success: ({ message }) => {
					retirer(aSupprimer.id, (element) => element.id);
					return message;
				},
				error: (e) => e.message
			}).unwrap();
			setASupprimer(null);
		} finally {
			setSuppressionEnCours(false);
		}
	};
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsxs(PageRessource, {
		titre: "Travailleurs",
		description: "Les agents rattachés à votre business. Ils rejoignent l’équipe en acceptant une invitation.",
		businessRequis: true,
		businessId,
		chargement,
		erreur,
		vide: donnees.length === 0 && !recherche && filtreStatut === "tous",
		messageVide: "Aucun travailleur dans votre équipe. Invitez quelqu’un pour commencer.",
		onReessayer: recharger,
		action: /* @__PURE__ */ jsxs(Button, {
			type: "button",
			disabled: !businessId,
			onClick: () => setInvitationOuverte(true),
			children: [/* @__PURE__ */ jsx(UserPlusIcon, { className: "size-4" }), "Inviter un travailleur"]
		}),
		outils: /* @__PURE__ */ jsxs("div", {
			className: "flex w-full max-w-3xl flex-wrap items-center gap-2",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "relative min-w-48 flex-1",
				children: [/* @__PURE__ */ jsx(SearchIcon, { className: "pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" }), /* @__PURE__ */ jsx(Input, {
					value: saisie,
					onChange: (e) => setSaisie(e.target.value),
					placeholder: "Rechercher par nom ou e-mail…",
					"aria-label": "Rechercher un travailleur",
					className: "pl-9"
				})]
			}), /* @__PURE__ */ jsxs(NativeSelect, {
				value: filtreStatut,
				onChange: (event) => {
					const valeur = event.currentTarget.value;
					if (valeur === "tous" || valeur === "ACTIF" || valeur === "BLOQUE") {
						setFiltreStatut(valeur);
						setPage(0);
					}
				},
				"aria-label": "Filtrer les travailleurs par statut",
				className: "min-w-40",
				children: [
					/* @__PURE__ */ jsx(NativeSelectOption, {
						value: "tous",
						children: "Tous les statuts"
					}),
					/* @__PURE__ */ jsx(NativeSelectOption, {
						value: "ACTIF",
						children: "Actifs"
					}),
					/* @__PURE__ */ jsx(NativeSelectOption, {
						value: "BLOQUE",
						children: "Bloqués"
					})
				]
			})]
		}),
		children: [
			/* @__PURE__ */ jsx("div", {
				className: "overflow-hidden rounded-lg border",
				children: /* @__PURE__ */ jsxs(Table, { children: [/* @__PURE__ */ jsx(TableHeader, { children: /* @__PURE__ */ jsxs(TableRow, { children: [
					/* @__PURE__ */ jsx(TableHead, { children: "Travailleur" }),
					/* @__PURE__ */ jsx(TableHead, { children: "Statut" }),
					/* @__PURE__ */ jsx(TableHead, { children: "Depuis" }),
					/* @__PURE__ */ jsx(TableHead, {
						className: "w-[1%] text-right",
						children: "Actions"
					})
				] }) }), /* @__PURE__ */ jsx(TableBody, { children: agentsAffiches.length === 0 ? /* @__PURE__ */ jsx(TableRow, { children: /* @__PURE__ */ jsx(TableCell, {
					colSpan: 4,
					className: "h-24 text-center text-muted-foreground",
					children: "Aucun travailleur ne correspond à ce filtre."
				}) }) : agentsAffiches.map((agent) => /* @__PURE__ */ jsxs(TableRow, { children: [
					/* @__PURE__ */ jsx(TableCell, { children: /* @__PURE__ */ jsxs("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ jsxs(Avatar$1, {
							className: "size-9",
							children: [/* @__PURE__ */ jsx(AvatarImage, {
								src: agent.userImage ?? void 0,
								alt: nomAgent$1(agent)
							}), /* @__PURE__ */ jsx(AvatarFallback, { children: nomAgent$1(agent).charAt(0).toLocaleUpperCase("fr") })]
						}), /* @__PURE__ */ jsxs("div", {
							className: "min-w-0",
							children: [
								/* @__PURE__ */ jsx(Link, {
									to: `/travailleurs/${agent.id}`,
									className: "font-medium text-primary underline-offset-4 hover:underline",
									children: tronquerAvecEllipses(nomAgent$1(agent), 42)
								}),
								/* @__PURE__ */ jsx("p", {
									className: "truncate text-sm text-muted-foreground",
									children: agent.email || "E-mail non renseigné"
								}),
								!agent.isVerified && /* @__PURE__ */ jsx("p", {
									className: "text-xs text-amber-700",
									children: "Invitation en attente de validation"
								})
							]
						})]
					}) }),
					/* @__PURE__ */ jsx(TableCell, { children: /* @__PURE__ */ jsx(Badge, {
						variant: agent.status === "ACTIF" ? "secondary" : "destructive",
						children: agent.status === "ACTIF" ? "Actif" : "Bloqué"
					}) }),
					/* @__PURE__ */ jsx(TableCell, {
						className: "text-muted-foreground",
						children: agent.createdAt ? new Date(agent.createdAt).toLocaleDateString("fr-FR") : "—"
					}),
					/* @__PURE__ */ jsx(TableCell, {
						className: "text-right whitespace-nowrap",
						children: /* @__PURE__ */ jsxs("div", {
							className: "flex items-center justify-end gap-1",
							children: [
								!agent.isVerified && agent.invitationExpiresAt && new Date(agent.invitationExpiresAt).getTime() <= Date.now() && /* @__PURE__ */ jsx(Button, {
									type: "button",
									variant: "ghost",
									size: "icon",
									className: "size-8 border border-border text-muted-foreground",
									onClick: () => void renvoyerInvitation(agent),
									disabled: renvoiEnCours === agent.id,
									"aria-label": `Renvoyer l’invitation à ${nomAgent$1(agent)}`,
									title: "Renvoyer l’invitation",
									children: /* @__PURE__ */ jsx(SendIcon, { className: "size-4" })
								}),
								/* @__PURE__ */ jsx(Button, {
									type: "button",
									variant: "ghost",
									size: "icon",
									className: "size-8 border border-border text-muted-foreground",
									onClick: () => {
										setChangementStatutAConfirmer({
											agent,
											bloquer: agent.status === "ACTIF"
										});
									},
									disabled: statutEnCours === agent.id,
									"aria-label": agent.status === "ACTIF" ? `Bloquer ${nomAgent$1(agent)}` : `Réactiver ${nomAgent$1(agent)}`,
									title: agent.status === "ACTIF" ? "Bloquer" : "Réactiver",
									children: agent.status === "ACTIF" ? /* @__PURE__ */ jsx(BanIcon, { className: "size-4" }) : /* @__PURE__ */ jsx(CheckCircle2Icon, { className: "size-4" })
								}),
								/* @__PURE__ */ jsx(Button, {
									type: "button",
									variant: "ghost",
									size: "icon",
									className: "size-8 border border-destructive/30 text-destructive hover:bg-destructive/10 hover:text-destructive",
									onClick: () => setASupprimer(agent),
									"aria-label": `Retirer ${nomAgent$1(agent)}`,
									title: "Retirer de l’équipe",
									children: /* @__PURE__ */ jsx(Trash2Icon, { className: "size-4" })
								})
							]
						})
					})
				] }, agent.id)) })] })
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "flex flex-wrap items-center justify-between gap-4",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "flex items-center gap-2 text-sm text-muted-foreground",
					children: [
						/* @__PURE__ */ jsx("label", {
							htmlFor: "travailleurs-par-page",
							children: "Travailleurs par page"
						}),
						/* @__PURE__ */ jsxs(NativeSelect, {
							id: "travailleurs-par-page",
							value: taillePage,
							onChange: (event) => {
								setTaillePage(Number(event.currentTarget.value));
								setPage(0);
							},
							"aria-label": "Nombre de travailleurs par page",
							children: [
								/* @__PURE__ */ jsx(NativeSelectOption, {
									value: 10,
									children: "10"
								}),
								/* @__PURE__ */ jsx(NativeSelectOption, {
									value: 20,
									children: "20"
								}),
								/* @__PURE__ */ jsx(NativeSelectOption, {
									value: 50,
									children: "50"
								})
							]
						}),
						/* @__PURE__ */ jsxs("span", {
							"aria-live": "polite",
							children: [
								debut,
								"–",
								fin,
								" sur ",
								donnees.length
							]
						})
					]
				}), /* @__PURE__ */ jsxs("nav", {
					"aria-label": "Pagination des travailleurs",
					className: "flex items-center gap-2",
					children: [
						/* @__PURE__ */ jsx(Button, {
							type: "button",
							variant: "outline",
							size: "sm",
							onClick: () => setPage(pageCourante - 1),
							disabled: pageCourante === 0,
							"aria-label": "Page précédente",
							children: "Précédent"
						}),
						/* @__PURE__ */ jsxs("span", {
							"aria-current": "page",
							className: "text-sm tabular-nums",
							children: [
								nombrePages === 0 ? 0 : pageCourante + 1,
								" / ",
								nombrePages
							]
						}),
						/* @__PURE__ */ jsx(Button, {
							type: "button",
							variant: "outline",
							size: "sm",
							onClick: () => setPage(pageCourante + 1),
							disabled: pageCourante >= nombrePages - 1,
							"aria-label": "Page suivante",
							children: "Suivant"
						})
					]
				})]
			}),
			/* @__PURE__ */ jsx(AlertDialog$1, {
				open: aSupprimer !== null,
				onOpenChange: (open) => {
					if (!open && !suppressionEnCours) setASupprimer(null);
				},
				children: /* @__PURE__ */ jsxs(AlertDialogContent, { children: [/* @__PURE__ */ jsxs(AlertDialogHeader, { children: [/* @__PURE__ */ jsx(AlertDialogTitle, { children: "Retirer ce travailleur ?" }), /* @__PURE__ */ jsxs(AlertDialogDescription, { children: [
					"« ",
					aSupprimer ? nomAgent$1(aSupprimer) : "",
					" » sera retiré de votre équipe et perdra ses accès. Cette action est irréversible."
				] })] }), /* @__PURE__ */ jsxs(AlertDialogFooter, { children: [/* @__PURE__ */ jsx(AlertDialogCancel, {
					disabled: suppressionEnCours,
					children: "Annuler"
				}), /* @__PURE__ */ jsx(AlertDialogAction, {
					variant: "destructive",
					disabled: suppressionEnCours,
					onClick: confirmerSuppression,
					children: suppressionEnCours ? "Retrait…" : "Retirer"
				})] })] })
			}),
			/* @__PURE__ */ jsx(AlertDialog$1, {
				open: changementStatutAConfirmer !== null,
				onOpenChange: (open) => {
					if (!statutEnCours && !open) setChangementStatutAConfirmer(null);
				},
				children: /* @__PURE__ */ jsxs(AlertDialogContent, { children: [/* @__PURE__ */ jsxs(AlertDialogHeader, { children: [/* @__PURE__ */ jsx(AlertDialogTitle, { children: changementStatutAConfirmer?.bloquer ? "Bloquer ce travailleur ?" : "Débloquer ce travailleur ?" }), /* @__PURE__ */ jsx(AlertDialogDescription, { children: changementStatutAConfirmer?.bloquer ? `« ${nomAgent$1(changementStatutAConfirmer.agent)} » ne pourra plus accéder à ce business tant qu’il ne sera pas réactivé.` : changementStatutAConfirmer ? `« ${nomAgent$1(changementStatutAConfirmer.agent)} » pourra de nouveau accéder à ce business.` : "" })] }), /* @__PURE__ */ jsxs(AlertDialogFooter, { children: [/* @__PURE__ */ jsx(AlertDialogCancel, {
					disabled: statutEnCours !== null,
					children: "Annuler"
				}), /* @__PURE__ */ jsx(AlertDialogAction, {
					variant: changementStatutAConfirmer?.bloquer ? "destructive" : "default",
					disabled: statutEnCours !== null,
					onClick: () => {
						if (!changementStatutAConfirmer) return;
						const confirmation = changementStatutAConfirmer;
						setChangementStatutAConfirmer(null);
						changerStatut(confirmation.agent, confirmation.bloquer);
					},
					children: statutEnCours ? changementStatutAConfirmer?.bloquer ? "Blocage…" : "Réactivation…" : changementStatutAConfirmer?.bloquer ? "Bloquer" : "Débloquer"
				})] })] })
			})
		]
	}), /* @__PURE__ */ jsx(InviterTravailleur, {
		businessId,
		open: invitationOuverte,
		onOpenChange: setInvitationOuverte,
		onAdded: ajouterAgentsInvites
	})] });
});
//#endregion
//#region app/routes/travailleurs/detail.tsx
var detail_exports = /* @__PURE__ */ __exportAll({ default: () => detail_default });
function nomAgent(agent) {
	return agent.fullName?.trim() || agent.email?.trim() || "Travailleur sans nom";
}
var detail_default = UNSAFE_withComponentProps(function DetailTravailleur() {
	const { id } = useParams();
	const navigate = useNavigate();
	const { businessId } = useBusiness();
	const [agent, setAgent] = useState(null);
	const [chargement, setChargement] = useState(true);
	const [erreur, setErreur] = useState(null);
	const [suppressionOuverte, setSuppressionOuverte] = useState(false);
	const [changementStatutOuvert, setChangementStatutOuvert] = useState(false);
	const [enCours, setEnCours] = useState(false);
	const charger = useCallback(async () => {
		if (!businessId || !id) return;
		setChargement(true);
		setErreur(null);
		try {
			setAgent(await lireAgent(businessId, id));
		} catch (error) {
			setErreur(error instanceof Error ? error.message : "Travailleur introuvable.");
		} finally {
			setChargement(false);
		}
	}, [businessId, id]);
	useEffect(() => {
		charger();
	}, [charger]);
	const changerStatut = async () => {
		if (!agent || !businessId) return;
		const bloquer = agent.status === "ACTIF";
		setEnCours(true);
		try {
			await toast.promise(bloquer ? bloquerAgent(businessId, agent.id) : activerAgent(businessId, agent.id), {
				loading: bloquer ? "Blocage…" : "Réactivation…",
				success: ({ message }) => {
					setAgent({
						...agent,
						status: bloquer ? "BLOQUE" : "ACTIF"
					});
					return message;
				},
				error: (e) => e.message
			}).unwrap();
		} finally {
			setEnCours(false);
		}
	};
	const renvoyerInvitation = async () => {
		if (!agent || !businessId) return;
		setEnCours(true);
		try {
			const resultat = await renvoyerInvitationAgent(businessId, agent.id);
			toast.success(resultat.message);
			await charger();
		} catch (error) {
			toast.error(error instanceof Error ? error.message : "Le renvoi de l’invitation a échoué.");
		} finally {
			setEnCours(false);
		}
	};
	const confirmerSuppression = async () => {
		if (!agent || !businessId) return;
		setEnCours(true);
		try {
			await toast.promise(supprimerAgent(businessId, agent.id), {
				loading: "Retrait…",
				success: ({ message }) => message,
				error: (e) => e.message
			}).unwrap();
			navigate("/travailleurs");
		} finally {
			setEnCours(false);
		}
	};
	if (chargement) return /* @__PURE__ */ jsx("p", {
		className: "p-6 text-sm text-muted-foreground",
		children: "Chargement du travailleur…"
	});
	if (erreur || !agent) return /* @__PURE__ */ jsxs("main", {
		className: "space-y-4 p-6",
		children: [/* @__PURE__ */ jsx("p", {
			role: "alert",
			className: "text-destructive",
			children: erreur ?? "Travailleur introuvable."
		}), /* @__PURE__ */ jsx(Link, {
			to: "/travailleurs",
			className: "inline-flex h-8 items-center rounded-lg border px-3 text-sm hover:bg-muted",
			children: "Retour aux travailleurs"
		})]
	});
	const adressePrincipale = agent.adresses[0] ?? null;
	const autresAdresses = agent.adresses.slice(1);
	const invitationExpiree = !agent.isVerified && agent.invitationExpiresAt !== null && new Date(agent.invitationExpiresAt).getTime() <= Date.now();
	return /* @__PURE__ */ jsxs("main", {
		className: "space-y-5 p-4 lg:p-6",
		children: [
			/* @__PURE__ */ jsxs(Link, {
				to: "/travailleurs",
				className: "inline-flex h-8 w-fit items-center gap-2 rounded-lg px-2.5 text-sm font-medium hover:bg-muted",
				children: [/* @__PURE__ */ jsx(ArrowLeft, { className: "size-4" }), " Retour aux travailleurs"]
			}),
			/* @__PURE__ */ jsxs("header", {
				className: "flex flex-wrap items-start justify-between gap-4",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "flex items-center gap-4",
					children: [/* @__PURE__ */ jsx(AvatarRessource, {
						src: agent.userImage,
						nom: nomAgent(agent),
						className: "size-14",
						classNameTexte: "text-lg"
					}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsxs("div", {
						className: "flex flex-wrap items-center gap-2",
						children: [/* @__PURE__ */ jsx("h1", {
							className: "text-2xl font-semibold",
							children: nomAgent(agent)
						}), /* @__PURE__ */ jsx(Badge, {
							variant: agent.status === "ACTIF" ? "secondary" : "destructive",
							children: agent.status === "ACTIF" ? "Actif" : "Bloqué"
						})]
					}), /* @__PURE__ */ jsx("p", {
						className: "text-sm text-muted-foreground",
						children: agent.isVerified ? `Dans l’équipe depuis le ${new Date(agent.createdAt).toLocaleDateString("fr-FR")}` : "Invitation en attente de validation"
					})] })]
				}), /* @__PURE__ */ jsxs("div", {
					className: "flex flex-wrap items-center gap-2",
					children: [
						invitationExpiree && /* @__PURE__ */ jsxs(Button, {
							type: "button",
							variant: "outline",
							onClick: () => void renvoyerInvitation(),
							disabled: enCours,
							children: [/* @__PURE__ */ jsx(SendIcon, { className: "size-4" }), "Renvoyer l’invitation"]
						}),
						/* @__PURE__ */ jsx(Button, {
							type: "button",
							variant: "outline",
							onClick: () => {
								setChangementStatutOuvert(true);
							},
							disabled: enCours,
							children: agent.status === "ACTIF" ? /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(BanIcon, { className: "size-4" }), "Bloquer"] }) : /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(CheckCircle2Icon, { className: "size-4" }), "Réactiver"] })
						}),
						/* @__PURE__ */ jsxs(Button, {
							type: "button",
							variant: "outline",
							className: "border-destructive/30 text-destructive hover:bg-destructive/10 hover:text-destructive",
							onClick: () => setSuppressionOuverte(true),
							disabled: enCours,
							children: [/* @__PURE__ */ jsx(Trash2Icon, { className: "size-4" }), "Retirer"]
						})
					]
				})]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "space-y-4",
				children: [
					/* @__PURE__ */ jsxs("section", {
						className: "space-y-4 rounded-xl border p-4",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "flex items-center gap-4",
							children: [/* @__PURE__ */ jsx(AvatarRessource, {
								src: agent.userImage,
								nom: nomAgent(agent)
							}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h2", {
								className: "font-semibold",
								children: "Identité"
							}), /* @__PURE__ */ jsx("p", {
								className: "text-sm text-muted-foreground",
								children: "Ces informations proviennent du compte utilisateur et ne sont pas modifiables depuis votre business."
							})] })]
						}), /* @__PURE__ */ jsxs("dl", {
							className: "grid grid-cols-1 gap-4 sm:grid-cols-2",
							children: [
								/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("dt", {
									className: "text-sm text-muted-foreground",
									children: "Nom complet"
								}), /* @__PURE__ */ jsx("dd", {
									className: "font-medium",
									children: agent.fullName || "—"
								})] }),
								/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("dt", {
									className: "text-sm text-muted-foreground",
									children: "E-mail"
								}), /* @__PURE__ */ jsx("dd", {
									className: "font-medium",
									children: agent.email || "—"
								})] }),
								/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("dt", {
									className: "text-sm text-muted-foreground",
									children: "Date de naissance"
								}), /* @__PURE__ */ jsx("dd", {
									className: "font-medium",
									children: agent.birthday ? new Date(agent.birthday).toLocaleDateString("fr-FR") : "—"
								})] }),
								/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("dt", {
									className: "text-sm text-muted-foreground",
									children: "Membre depuis"
								}), /* @__PURE__ */ jsx("dd", {
									className: "font-medium",
									children: new Date(agent.createdAt).toLocaleDateString("fr-FR")
								})] }),
								agent.bio && /* @__PURE__ */ jsxs("div", {
									className: "sm:col-span-2",
									children: [/* @__PURE__ */ jsx("dt", {
										className: "text-sm text-muted-foreground",
										children: "Bio"
									}), /* @__PURE__ */ jsx("dd", { children: agent.bio })]
								})
							]
						})]
					}),
					/* @__PURE__ */ jsxs("section", {
						className: "space-y-3 rounded-xl border p-4",
						children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h2", {
							className: "font-semibold",
							children: "Adresse"
						}), /* @__PURE__ */ jsx("p", {
							className: "text-sm text-muted-foreground",
							children: adressePrincipale ? "Renseignée par la personne sur son compte. Elle n’est pas modifiable depuis votre business." : "Aucune adresse enregistrée sur ce compte."
						})] }), adressePrincipale && /* @__PURE__ */ jsxs("div", {
							className: "grid gap-4 sm:grid-cols-2",
							children: [
								/* @__PURE__ */ jsxs("label", {
									className: "block space-y-1 text-sm",
									children: [/* @__PURE__ */ jsx("span", { children: "Pays" }), /* @__PURE__ */ jsx(Input, {
										value: adressePrincipale.pays,
										disabled: true
									})]
								}),
								/* @__PURE__ */ jsxs("label", {
									className: "block space-y-1 text-sm",
									children: [/* @__PURE__ */ jsx("span", { children: "Ville" }), /* @__PURE__ */ jsx(Input, {
										value: adressePrincipale.ville,
										disabled: true
									})]
								}),
								/* @__PURE__ */ jsxs("label", {
									className: "block space-y-1 text-sm",
									children: [/* @__PURE__ */ jsx("span", { children: "Région" }), /* @__PURE__ */ jsx(Input, {
										value: adressePrincipale.region,
										disabled: true
									})]
								}),
								/* @__PURE__ */ jsxs("label", {
									className: "block space-y-1 text-sm",
									children: [/* @__PURE__ */ jsx("span", { children: "Code postal" }), /* @__PURE__ */ jsx(Input, {
										value: adressePrincipale.codePostal ?? "",
										disabled: true
									})]
								}),
								/* @__PURE__ */ jsxs("label", {
									className: "block space-y-1 text-sm sm:col-span-2",
									children: [/* @__PURE__ */ jsx("span", { children: "Adresse" }), /* @__PURE__ */ jsx(Input, {
										value: adressePrincipale.adresse,
										disabled: true
									})]
								})
							]
						})]
					}),
					/* @__PURE__ */ jsxs("section", {
						className: "space-y-3 rounded-xl border p-4",
						children: [/* @__PURE__ */ jsx("h2", {
							className: "font-semibold",
							children: "Contacts"
						}), agent.contacts.length === 0 ? /* @__PURE__ */ jsx("p", {
							className: "text-sm text-muted-foreground",
							children: "Aucun contact enregistré sur ce compte."
						}) : /* @__PURE__ */ jsx("ul", {
							className: "grid grid-cols-1 gap-2 sm:grid-cols-2",
							children: agent.contacts.map((contact) => /* @__PURE__ */ jsxs("li", {
								className: "flex items-start gap-3 rounded-lg border p-3",
								children: [contact.type === "EMAIL" ? /* @__PURE__ */ jsx(MailIcon, { className: "mt-0.5 size-4 shrink-0 text-muted-foreground" }) : /* @__PURE__ */ jsx(PhoneIcon, { className: "mt-0.5 size-4 shrink-0 text-muted-foreground" }), /* @__PURE__ */ jsxs("div", {
									className: "min-w-0",
									children: [/* @__PURE__ */ jsx("p", {
										className: "truncate font-medium",
										children: contact.email || contact.phone || "—"
									}), /* @__PURE__ */ jsxs("p", {
										className: "text-xs text-muted-foreground",
										children: [contact.label || contact.type.toLowerCase(), contact.status === "VERIFIE" ? " · vérifié" : ""]
									})]
								})]
							}, contact.id))
						})]
					}),
					autresAdresses.length > 0 && /* @__PURE__ */ jsxs("section", {
						className: "space-y-3 rounded-xl border p-4",
						children: [/* @__PURE__ */ jsx("h2", {
							className: "font-semibold",
							children: "Autres adresses"
						}), /* @__PURE__ */ jsx("ul", {
							className: "grid grid-cols-1 gap-2 sm:grid-cols-2",
							children: autresAdresses.map((adresse) => /* @__PURE__ */ jsxs("li", {
								className: "flex items-start gap-3 rounded-lg border p-3",
								children: [/* @__PURE__ */ jsx(MapPinIcon, { className: "mt-0.5 size-4 shrink-0 text-muted-foreground" }), /* @__PURE__ */ jsxs("div", {
									className: "min-w-0",
									children: [/* @__PURE__ */ jsx("p", {
										className: "font-medium",
										children: adresse.adresse
									}), /* @__PURE__ */ jsxs("p", {
										className: "text-sm text-muted-foreground",
										children: [[
											adresse.ville,
											adresse.region,
											adresse.pays
										].filter(Boolean).join(", "), adresse.codePostal ? ` · ${adresse.codePostal}` : ""]
									})]
								})]
							}, adresse.id))
						})]
					})
				]
			}),
			/* @__PURE__ */ jsx(AlertDialog$1, {
				open: suppressionOuverte,
				onOpenChange: (open) => {
					if (!enCours) setSuppressionOuverte(open);
				},
				children: /* @__PURE__ */ jsxs(AlertDialogContent, { children: [/* @__PURE__ */ jsxs(AlertDialogHeader, { children: [/* @__PURE__ */ jsx(AlertDialogTitle, { children: "Retirer ce travailleur ?" }), /* @__PURE__ */ jsxs(AlertDialogDescription, { children: [
					"« ",
					nomAgent(agent),
					" » sera retiré de votre équipe et perdra ses accès. Cette action est irréversible."
				] })] }), /* @__PURE__ */ jsxs(AlertDialogFooter, { children: [/* @__PURE__ */ jsx(AlertDialogCancel, {
					disabled: enCours,
					children: "Annuler"
				}), /* @__PURE__ */ jsx(AlertDialogAction, {
					variant: "destructive",
					disabled: enCours,
					onClick: confirmerSuppression,
					children: enCours ? "Retrait…" : "Retirer"
				})] })] })
			}),
			/* @__PURE__ */ jsx(AlertDialog$1, {
				open: changementStatutOuvert,
				onOpenChange: (open) => {
					if (!enCours) setChangementStatutOuvert(open);
				},
				children: /* @__PURE__ */ jsxs(AlertDialogContent, { children: [/* @__PURE__ */ jsxs(AlertDialogHeader, { children: [/* @__PURE__ */ jsx(AlertDialogTitle, { children: agent.status === "ACTIF" ? "Bloquer ce travailleur ?" : "Débloquer ce travailleur ?" }), /* @__PURE__ */ jsx(AlertDialogDescription, { children: agent.status === "ACTIF" ? `« ${nomAgent(agent)} » ne pourra plus accéder à ce business tant qu’il ne sera pas réactivé.` : `« ${nomAgent(agent)} » pourra de nouveau accéder à ce business.` })] }), /* @__PURE__ */ jsxs(AlertDialogFooter, { children: [/* @__PURE__ */ jsx(AlertDialogCancel, {
					disabled: enCours,
					children: "Annuler"
				}), /* @__PURE__ */ jsx(AlertDialogAction, {
					variant: agent.status === "ACTIF" ? "destructive" : "default",
					disabled: enCours,
					onClick: () => {
						setChangementStatutOuvert(false);
						changerStatut();
					},
					children: enCours ? agent.status === "ACTIF" ? "Blocage…" : "Réactivation…" : agent.status === "ACTIF" ? "Bloquer" : "Débloquer"
				})] })] })
			})
		]
	});
});
//#endregion
//#region app/routes/travailleurs/valider-invitation.tsx
var valider_invitation_exports = /* @__PURE__ */ __exportAll({ default: () => valider_invitation_default });
var valider_invitation_default = UNSAFE_withComponentProps(function ValiderInvitationTravailleur() {
	const { invitationId } = useParams();
	const navigate = useNavigate();
	const [code, setCode] = useState("");
	const [enCours, setEnCours] = useState(false);
	const valider = async (event) => {
		event.preventDefault();
		if (!invitationId || !/^\d{6}$/.test(code)) {
			toast.error("Saisissez le code à 6 chiffres reçu par e-mail.");
			return;
		}
		setEnCours(true);
		try {
			const resultat = await validerInvitationAgent(invitationId, code);
			toast.success(resultat.message);
			navigate("/acceuil", { replace: true });
		} catch (error) {
			toast.error(error instanceof Error ? error.message : "Impossible de valider cette invitation.");
		} finally {
			setEnCours(false);
		}
	};
	return /* @__PURE__ */ jsx("main", {
		className: "mx-auto flex w-full max-w-md flex-1 items-center px-4 py-10",
		children: /* @__PURE__ */ jsxs("form", {
			onSubmit: valider,
			className: "w-full space-y-5 rounded-xl border p-6",
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "space-y-2",
					children: [/* @__PURE__ */ jsx("h1", {
						className: "text-xl font-semibold",
						children: "Valider votre invitation"
					}), /* @__PURE__ */ jsx("p", {
						className: "text-sm text-muted-foreground",
						children: "Saisissez le code à 6 chiffres envoyé à l’adresse e-mail associée à votre compte. Le code expire après 15 minutes."
					})]
				}),
				/* @__PURE__ */ jsx(Input, {
					value: code,
					onChange: (event) => setCode(event.currentTarget.value.replace(/\D/g, "").slice(0, 6)),
					inputMode: "numeric",
					autoComplete: "one-time-code",
					placeholder: "000000",
					"aria-label": "Code de validation à 6 chiffres",
					required: true,
					className: "h-11 text-center text-lg tracking-[0.5em]"
				}),
				/* @__PURE__ */ jsx(Button, {
					type: "submit",
					className: "w-full",
					disabled: enCours || code.length !== 6,
					children: enCours ? "Validation…" : "Confirmer l’invitation"
				})
			]
		})
	});
});
//#endregion
//#region app/routes/caisses/caisses.tsx
var caisses_exports = /* @__PURE__ */ __exportAll({ default: () => caisses_default });
var requis$2 = champsRequis(CaisseSchema.shape);
var caisses_default = UNSAFE_withComponentProps(function Caisses() {
	const { businessId } = useBusiness();
	const [ouvert, setOuvert] = useState(false);
	const [enEdition, setEnEdition] = useState(null);
	const chargerCaisses = useCallback(() => listerCaisses(businessId), [businessId]);
	const chargerDevises = useCallback(() => listerDevises(businessId), [businessId]);
	const { donnees, chargement, erreur, recharger } = useListe(chargerCaisses, !!businessId);
	const { donnees: devises } = useListe(chargerDevises, !!businessId);
	const { register, handleSubmit, reset, formState: { errors, isSubmitting, isValid } } = useForm({
		resolver: zodResolver(CaisseSchema),
		mode: "onTouched"
	});
	const ouvrirCreation = () => {
		setEnEdition(null);
		reset({
			nom: "",
			solde: 0,
			deviseId: devises[0]?.id ?? ""
		});
		setOuvert(true);
	};
	const ouvrirEdition = (caisse) => {
		setEnEdition(caisse);
		reset({
			nom: caisse.nom,
			solde: Number(caisse.solde),
			deviseId: caisse.deviseId
		});
		setOuvert(true);
	};
	const onSubmit = async (form) => {
		const action = enEdition ? modifierCaisse(businessId, enEdition.id, form) : creerCaisse(businessId, form);
		await toast.promise(action, {
			loading: enEdition ? "Modification…" : "Création…",
			success: () => {
				setOuvert(false);
				recharger();
				return enEdition ? "Caisse modifiée" : "Caisse créée";
			},
			error: (e) => e.message
		}).unwrap();
	};
	const definirParDefaut = async (caisse) => {
		await toast.promise(caisseParDefaut(businessId, caisse.id), {
			loading: "Mise à jour…",
			success: () => {
				recharger();
				return `« ${caisse.nom} » est la caisse par défaut`;
			},
			error: (e) => e.message
		}).unwrap();
	};
	const supprimer = async (caisse) => {
		await toast.promise(supprimerCaisse(businessId, caisse.id), {
			loading: "Suppression…",
			success: () => {
				recharger();
				return "Caisse supprimée";
			},
			error: (e) => e.message
		}).unwrap();
	};
	const symbole = (deviseId) => devises.find((d) => d.id === deviseId)?.symbole ?? "";
	return /* @__PURE__ */ jsxs(PageRessource, {
		titre: "Caisses",
		description: "Vos caisses et leur solde, une par devise.",
		businessRequis: true,
		businessId,
		chargement,
		erreur,
		vide: donnees.length === 0,
		messageVide: "Aucune caisse ouverte pour le moment.",
		onReessayer: recharger,
		action: /* @__PURE__ */ jsxs(Button, {
			onClick: ouvrirCreation,
			children: [/* @__PURE__ */ jsx(PlusIcon, { className: "size-4" }), "Nouvelle caisse"]
		}),
		children: [/* @__PURE__ */ jsx("div", {
			className: "overflow-hidden rounded-lg border",
			children: /* @__PURE__ */ jsxs(Table, { children: [/* @__PURE__ */ jsx(TableHeader, { children: /* @__PURE__ */ jsxs(TableRow, { children: [
				/* @__PURE__ */ jsx(TableHead, { children: "Nom" }),
				/* @__PURE__ */ jsx(TableHead, {
					className: "text-right",
					children: "Solde"
				}),
				/* @__PURE__ */ jsx(TableHead, { children: "Statut" }),
				/* @__PURE__ */ jsx(TableHead, {
					className: "w-[1%] text-right",
					children: "Actions"
				})
			] }) }), /* @__PURE__ */ jsx(TableBody, { children: donnees.map((caisse) => /* @__PURE__ */ jsxs(TableRow, { children: [
				/* @__PURE__ */ jsx(TableCell, {
					className: "font-medium",
					children: caisse.nom
				}),
				/* @__PURE__ */ jsxs(TableCell, {
					className: "text-right tabular-nums",
					children: [
						Number(caisse.solde).toLocaleString("fr-FR"),
						" ",
						/* @__PURE__ */ jsx("span", {
							className: "text-muted-foreground",
							children: symbole(caisse.deviseId)
						})
					]
				}),
				/* @__PURE__ */ jsx(TableCell, { children: caisse.parDefaut ? /* @__PURE__ */ jsx(Badge, {
					variant: "secondary",
					children: "Par défaut"
				}) : /* @__PURE__ */ jsxs(Button, {
					variant: "ghost",
					size: "sm",
					onClick: () => definirParDefaut(caisse),
					children: [/* @__PURE__ */ jsx(CheckIcon, { className: "size-4" }), "Définir par défaut"]
				}) }),
				/* @__PURE__ */ jsxs(TableCell, {
					className: "text-right whitespace-nowrap",
					children: [/* @__PURE__ */ jsx(Button, {
						variant: "ghost",
						size: "sm",
						onClick: () => ouvrirEdition(caisse),
						children: "Modifier"
					}), /* @__PURE__ */ jsx(Button, {
						variant: "ghost",
						size: "sm",
						"aria-label": `Supprimer la caisse ${caisse.nom}`,
						onClick: () => supprimer(caisse),
						children: /* @__PURE__ */ jsx(Trash2Icon, { className: "size-4 text-destructive" })
					})]
				})
			] }, caisse.id)) })] })
		}), /* @__PURE__ */ jsx(Dialog$1, {
			open: ouvert,
			onOpenChange: setOuvert,
			children: /* @__PURE__ */ jsxs(DialogContent, { children: [/* @__PURE__ */ jsxs(DialogHeader, { children: [/* @__PURE__ */ jsx(DialogTitle, { children: enEdition ? "Modifier la caisse" : "Nouvelle caisse" }), /* @__PURE__ */ jsx(DialogDescription, { children: "Une caisse porte un solde dans une seule devise." })] }), /* @__PURE__ */ jsxs("form", {
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
								children: ["Nom ", requis$2.has("nom") && /* @__PURE__ */ jsx("span", {
									className: "text-destructive",
									children: "*"
								})]
							}),
							/* @__PURE__ */ jsx(Input, {
								id: "nom",
								placeholder: "Ex : Caisse principale",
								"aria-required": requis$2.has("nom"),
								"aria-invalid": !!errors.nom,
								...register("nom")
							}),
							/* @__PURE__ */ jsx(FieldError, { errors: [errors.nom] })
						]
					}),
					/* @__PURE__ */ jsxs(Field, {
						"data-invalid": !!errors.solde,
						children: [
							/* @__PURE__ */ jsxs(FieldLabel, {
								htmlFor: "solde",
								children: [
									"Solde initial",
									" ",
									requis$2.has("solde") && /* @__PURE__ */ jsx("span", {
										className: "text-destructive",
										children: "*"
									})
								]
							}),
							/* @__PURE__ */ jsx(Input, {
								id: "solde",
								type: "number",
								step: "0.01",
								inputMode: "decimal",
								placeholder: "0",
								"aria-required": requis$2.has("solde"),
								"aria-invalid": !!errors.solde,
								...register("solde", { valueAsNumber: true })
							}),
							/* @__PURE__ */ jsx(FieldError, { errors: [errors.solde] })
						]
					}),
					/* @__PURE__ */ jsxs(Field, {
						"data-invalid": !!errors.deviseId,
						children: [
							/* @__PURE__ */ jsxs(FieldLabel, {
								htmlFor: "deviseId",
								children: [
									"Devise",
									" ",
									requis$2.has("deviseId") && /* @__PURE__ */ jsx("span", {
										className: "text-destructive",
										children: "*"
									})
								]
							}),
							/* @__PURE__ */ jsxs(NativeSelect, {
								id: "deviseId",
								"aria-required": requis$2.has("deviseId"),
								"aria-invalid": !!errors.deviseId,
								...register("deviseId"),
								children: [/* @__PURE__ */ jsx(NativeSelectOption, {
									value: "",
									children: "Sélectionner une devise"
								}), devises.map((devise) => /* @__PURE__ */ jsxs(NativeSelectOption, {
									value: devise.id,
									children: [
										devise.nom ?? devise.type,
										" (",
										devise.symbole,
										")"
									]
								}, devise.id))]
							}),
							/* @__PURE__ */ jsx(FieldError, { errors: [errors.deviseId] })
						]
					})
				] }) }), /* @__PURE__ */ jsxs(DialogFooter, {
					className: "mt-6",
					children: [/* @__PURE__ */ jsx(Button, {
						type: "button",
						variant: "outline",
						onClick: () => setOuvert(false),
						disabled: isSubmitting,
						children: "Annuler"
					}), /* @__PURE__ */ jsx(Button, {
						type: "submit",
						disabled: !isValid || isSubmitting,
						children: isSubmitting ? "Enregistrement…" : enEdition ? "Enregistrer" : "Créer la caisse"
					})]
				})]
			})] })
		})]
	});
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
					render: /* @__PURE__ */ jsx(Button, { variant: "destructive" }),
					children: "Supprimer le comte"
				}), /* @__PURE__ */ jsxs(DialogContent, {
					className: "sm:max-w-lg",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "flex items-start space-x-4",
						children: [/* @__PURE__ */ jsx("div", {
							className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-red-100",
							children: /* @__PURE__ */ jsx(AlertTriangleIcon, { className: "h-6 w-6 text-red-600" })
						}), /* @__PURE__ */ jsxs(DialogHeader, { children: [/* @__PURE__ */ jsx(DialogTitle, { children: "Supprimer le compte" }), /* @__PURE__ */ jsx(DialogDescription, { children: "Are you sure you want to delete your account? All of your data will be permanently removed. This action cannot be undone." })] })]
					}), /* @__PURE__ */ jsx(DialogFooter, { children: /* @__PURE__ */ jsx(Button, {
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
	const [erreur, setErreur] = useState(null);
	const [tentative, setTentative] = useState(0);
	const [enregistrementEnCours, setEnregistrementEnCours] = useState(true);
	useEffect(() => {
		let annule = false;
		const creerUser = async () => {
			setEnregistrementEnCours(true);
			setErreur(null);
			try {
				const res = await creer_user();
				if (!res.success && res.redirect) navigate("/", { replace: true });
			} catch (error) {
				if (!annule) setErreur(error instanceof Error ? error.message : "Impossible d'enregistrer les informations de votre compte.");
			} finally {
				if (!annule) setEnregistrementEnCours(false);
			}
		};
		creerUser();
		return () => {
			annule = true;
		};
	}, [navigate, tentative]);
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
		enregistrementEnCours && /* @__PURE__ */ jsx("p", {
			role: "status",
			children: "Enregistrement des informations de votre compte…"
		}),
		erreur && /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
			role: "alert",
			children: erreur
		}), /* @__PURE__ */ jsx(Button, {
			type: "button",
			disabled: enregistrementEnCours,
			onClick: () => setTentative((valeur) => valeur + 1),
			children: "Réessayer"
		})] }),
		/* @__PURE__ */ jsx(Button, {
			className: "primary",
			onClick: isWelcome,
			children: "Home page"
		})
	] });
});
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
				render: /* @__PURE__ */ jsx(Button, { className: "w-full cursor-pointer hover:bg-primary/80" }),
				children: "Fermer"
			})
		]
	});
}
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
			children: [/* @__PURE__ */ jsxs(Button, {
				type: "submit",
				className: "w-full",
				disabled: isLoaded,
				children: ["Enregistrer ", isLoaded && /* @__PURE__ */ jsx(Loader2, { className: "mr-2 h-4 w-4 animate-spin" })]
			}), /* @__PURE__ */ jsx("div", {
				className: "flex justify-center",
				children: /* @__PURE__ */ jsx(DialogClose, { render: /* @__PURE__ */ jsx(Button, {
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
					/* @__PURE__ */ jsx(Input, {
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
					/* @__PURE__ */ jsx(Input, {
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
				children: [/* @__PURE__ */ jsxs(Button, {
					type: "submit",
					className: "w-full",
					disabled: isLoaded,
					children: ["Enregistrer ", isLoaded && /* @__PURE__ */ jsx(Loader2, { className: "mr-2 h-4 w-4 animate-spin" })]
				}), /* @__PURE__ */ jsx("div", {
					className: "flex justify-center",
					children: /* @__PURE__ */ jsx(DialogClose, { render: /* @__PURE__ */ jsx(Button, {
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
			}), /* @__PURE__ */ jsxs(DropdownMenu, { children: [/* @__PURE__ */ jsx(DropdownMenuTrigger, { children: /* @__PURE__ */ jsxs(Button, {
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
					}), contact.status !== "VERIFIE" ? /* @__PURE__ */ jsx(Button, {
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
						children: [/* @__PURE__ */ jsx(DialogTrigger, { children: /* @__PURE__ */ jsx(Button, {
							variant: "outline",
							children: "New phone"
						}) }), /* @__PURE__ */ jsx(DialogContent, { children: /* @__PURE__ */ jsx(Form$1, {
							type: "PHONE",
							new_contact: (newContact) => {
								setContacts([...contacts, newContact]);
							}
						}) })]
					}), /* @__PURE__ */ jsxs(DropdownMenu, { children: [/* @__PURE__ */ jsx(DropdownMenuTrigger, { children: /* @__PURE__ */ jsx(Button, {
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
					/* @__PURE__ */ jsx(Input, {
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
						/* @__PURE__ */ jsx(Input, {
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
						/* @__PURE__ */ jsx(Input, {
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
							/* @__PURE__ */ jsx(Input, {
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
						render: ({ field }) => /* @__PURE__ */ jsxs(Select, {
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
				children: [/* @__PURE__ */ jsxs(Button, {
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
					children: /* @__PURE__ */ jsx(DialogClose, { render: /* @__PURE__ */ jsx(Button, {
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
				render: /* @__PURE__ */ jsx(Button, { className: "w-full cursor-pointer hover:bg-primary/80" }),
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
			})] }), /* @__PURE__ */ jsxs(Dialog$1, { children: [/* @__PURE__ */ jsx(DialogTrigger, { children: /* @__PURE__ */ jsx(Button, {
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
	meta: () => meta$1
});
function meta$1({}) {
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
									}), /* @__PURE__ */ jsxs(Button, {
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
								/* @__PURE__ */ jsx(Button, {
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
									}), /* @__PURE__ */ jsx(Input, {
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
									}), /* @__PURE__ */ jsx(Input, {
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
									}), /* @__PURE__ */ jsx(Input, {
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
									}), /* @__PURE__ */ jsx(Input, {
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
										/* @__PURE__ */ jsx(Input, {
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
			/* @__PURE__ */ jsx(Separator, { className: "my-8" }),
			/* @__PURE__ */ jsx(ContactsManager, {}),
			/* @__PURE__ */ jsx(Separator, { className: "my-8" }),
			/* @__PURE__ */ jsx(AdressesManager, {})
		] })
	}) });
});
//#endregion
//#region app/components/ui/collapsible.tsx
function Collapsible$1({ ...props }) {
	return /* @__PURE__ */ jsx(Collapsible.Root, {
		"data-slot": "collapsible",
		...props
	});
}
function CollapsibleTrigger({ ...props }) {
	return /* @__PURE__ */ jsx(Collapsible.Trigger, {
		"data-slot": "collapsible-trigger",
		...props
	});
}
function CollapsibleContent({ ...props }) {
	return /* @__PURE__ */ jsx(Collapsible.Panel, {
		"data-slot": "collapsible-content",
		...props
	});
}
//#endregion
//#region app/routes/businesses/page.tsx
var page_exports = /* @__PURE__ */ __exportAll({ default: () => page_default });
var requis$1 = champsRequis(BusinessSchema.shape);
function Requis() {
	return /* @__PURE__ */ jsx("span", {
		className: "text-destructive",
		"aria-hidden": "true",
		children: "*"
	});
}
var page_default = UNSAFE_withComponentProps(function BusinessForm() {
	const navigate = useNavigate();
	const { aUnBusiness, pret, recharger } = useBusiness();
	const [complementsOuverts, setComplementsOuverts] = useState(false);
	const { register, handleSubmit, reset, formState: { errors, isSubmitting, isValid } } = useForm({
		resolver: zodResolver(BusinessSchema),
		mode: "onTouched",
		reValidateMode: "onChange",
		defaultValues: {
			nom: "",
			slogan: "",
			website: "",
			description: ""
		}
	});
	if (!pret) return /* @__PURE__ */ jsx("div", {
		role: "status",
		className: "p-4",
		children: "Chargement…"
	});
	if (aUnBusiness) return /* @__PURE__ */ jsx(Navigate, {
		to: "/acceuil",
		replace: true
	});
	const onSubmit = async (data) => {
		const form = {
			nom: data.nom,
			...data.slogan?.trim() ? { slogan: data.slogan.trim() } : {},
			...data.website?.trim() ? { website: data.website.trim() } : {},
			...data.description?.trim() ? { description: data.description.trim() } : {}
		};
		await toast.promise(creer_business(form), {
			loading: "Création du business en cours…",
			success: (result) => {
				reset();
				recharger();
				navigate("/acceuil");
				return result?.message || "Votre business a été créé";
			},
			error: (err) => err.message || "La création a échoué"
		}).unwrap().catch(() => void 0);
	};
	return /* @__PURE__ */ jsx("div", {
		className: "mx-auto w-full max-w-2xl px-4 py-6 lg:px-6",
		children: /* @__PURE__ */ jsxs(Card, { children: [/* @__PURE__ */ jsxs(CardHeader, { children: [/* @__PURE__ */ jsx(CardTitle, {
			className: "text-xl font-semibold",
			children: "Créer un business"
		}), /* @__PURE__ */ jsx(CardDescription, { children: "Seul le nom est nécessaire pour démarrer. Vos catégories, attributs et devise par défaut sont créés automatiquement." })] }), /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx("form", {
			onSubmit: handleSubmit(onSubmit),
			noValidate: true,
			children: /* @__PURE__ */ jsxs(FieldGroup, { children: [
				/* @__PURE__ */ jsxs(FieldSet, { children: [/* @__PURE__ */ jsx(FieldLegend, {
					variant: "label",
					children: "Informations requises"
				}), /* @__PURE__ */ jsxs(Field, {
					"data-invalid": !!errors.nom,
					children: [
						/* @__PURE__ */ jsxs(FieldLabel, {
							htmlFor: "nom",
							children: ["Nom du business ", requis$1.has("nom") && /* @__PURE__ */ jsx(Requis, {})]
						}),
						/* @__PURE__ */ jsx(Input, {
							id: "nom",
							type: "text",
							autoComplete: "organization",
							placeholder: "Ex : Maison Kivu",
							"aria-required": requis$1.has("nom"),
							"aria-invalid": !!errors.nom,
							"aria-describedby": errors.nom ? "nom-error" : "nom-aide",
							...register("nom")
						}),
						errors.nom ? /* @__PURE__ */ jsx(FieldError, {
							id: "nom-error",
							errors: [errors.nom]
						}) : /* @__PURE__ */ jsx(FieldDescription, {
							id: "nom-aide",
							children: "Entre 4 et 50 caractères. C'est le nom que verront vos clients."
						})
					]
				})] }),
				/* @__PURE__ */ jsxs(Collapsible$1, {
					open: complementsOuverts,
					onOpenChange: setComplementsOuverts,
					children: [/* @__PURE__ */ jsxs(CollapsibleTrigger, {
						className: cn$1("flex w-full items-center justify-between rounded-md py-2 text-sm font-medium", "text-muted-foreground transition-colors hover:text-foreground", "focus-visible:ring-ring/50 focus-visible:outline-none focus-visible:ring-[3px]"),
						children: ["Informations complémentaires", /* @__PURE__ */ jsxs("span", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ jsx("span", {
								className: "text-xs font-normal",
								children: "facultatif"
							}), /* @__PURE__ */ jsx(ChevronDownIcon, { className: cn$1("size-4 transition-transform duration-200", complementsOuverts && "rotate-180") })]
						})]
					}), /* @__PURE__ */ jsx(CollapsibleContent, { children: /* @__PURE__ */ jsxs(FieldGroup, {
						className: "pt-4",
						children: [
							/* @__PURE__ */ jsxs(Field, {
								"data-invalid": !!errors.slogan,
								children: [
									/* @__PURE__ */ jsx(FieldLabel, {
										htmlFor: "slogan",
										children: "Slogan"
									}),
									/* @__PURE__ */ jsx(Input, {
										id: "slogan",
										type: "text",
										placeholder: "Ex : Le meilleur du Kivu, livré chez vous",
										"aria-invalid": !!errors.slogan,
										...register("slogan")
									}),
									/* @__PURE__ */ jsx(FieldError, { errors: [errors.slogan] })
								]
							}),
							/* @__PURE__ */ jsxs(Field, {
								"data-invalid": !!errors.website,
								children: [
									/* @__PURE__ */ jsx(FieldLabel, {
										htmlFor: "website",
										children: "Site web"
									}),
									/* @__PURE__ */ jsx(Input, {
										id: "website",
										type: "url",
										inputMode: "url",
										placeholder: "https://exemple.cd",
										"aria-invalid": !!errors.website,
										...register("website")
									}),
									/* @__PURE__ */ jsx(FieldError, { errors: [errors.website] })
								]
							}),
							/* @__PURE__ */ jsxs(Field, {
								"data-invalid": !!errors.description,
								children: [
									/* @__PURE__ */ jsx(FieldLabel, {
										htmlFor: "description",
										children: "Description"
									}),
									/* @__PURE__ */ jsx(Textarea, {
										id: "description",
										rows: 4,
										placeholder: "Présentez votre activité en quelques mots…",
										"aria-invalid": !!errors.description,
										...register("description")
									}),
									/* @__PURE__ */ jsx(FieldError, { errors: [errors.description] })
								]
							})
						]
					}) })]
				}),
				/* @__PURE__ */ jsxs(Field, {
					orientation: "horizontal",
					className: "justify-end pt-2",
					children: [/* @__PURE__ */ jsx(Button, {
						type: "button",
						variant: "outline",
						disabled: isSubmitting,
						onClick: () => navigate("/acceuil"),
						children: "Annuler"
					}), /* @__PURE__ */ jsxs(Button, {
						type: "submit",
						disabled: !isValid || isSubmitting,
						children: [isSubmitting && /* @__PURE__ */ jsx(Loader2Icon, { className: "size-4 animate-spin" }), isSubmitting ? "Création…" : "Créer le business"]
					})]
				})
			] })
		}) })] })
	});
});
//#endregion
//#region app/routes/promotions/promotions.tsx
var promotions_exports = /* @__PURE__ */ __exportAll({ default: () => promotions_default });
var requis = champsRequis(PromotionSchema.shape);
var Etoile = () => /* @__PURE__ */ jsx("span", {
	className: "text-destructive",
	children: "*"
});
var TYPES = [
	{
		valeur: "POURCENTAGE",
		libelle: "Pourcentage"
	},
	{
		valeur: "MONTANT_FIXE",
		libelle: "Montant fixe"
	},
	{
		valeur: "BOGO",
		libelle: "Un acheté, un offert"
	},
	{
		valeur: "LIVRAISON_GRATUITE",
		libelle: "Livraison gratuite"
	}
];
var STATUTS = [
	"EN_ATTENTE",
	"DRAFT",
	"ACTIVE",
	"PAUSE",
	"EXPIRE"
];
var promotions_default = UNSAFE_withComponentProps(function Promotions() {
	const { businessId } = useBusiness();
	const [ouvert, setOuvert] = useState(false);
	const charger = useCallback(() => listerPromotions(businessId), [businessId]);
	const { donnees, chargement, erreur, recharger } = useListe(charger, !!businessId);
	const { register, handleSubmit, reset, formState: { errors, isSubmitting, isValid } } = useForm({
		resolver: zodResolver(PromotionSchema),
		mode: "onTouched"
	});
	const ouvrirCreation = () => {
		reset({
			nom: "",
			codePromo: "",
			type: "POURCENTAGE",
			valeur: 0,
			description: ""
		});
		setOuvert(true);
	};
	const onSubmit = async (form) => {
		await toast.promise(creerPromotion(businessId, form), {
			loading: "Création…",
			success: () => {
				setOuvert(false);
				recharger();
				return "Promotion créée";
			},
			error: (e) => e.message
		}).unwrap();
	};
	const changerStatut = async (promo, status) => {
		await toast.promise(changerStatusPromotion(businessId, promo.id, { status }), {
			loading: "Mise à jour…",
			success: () => {
				recharger();
				return "Statut mis à jour";
			},
			error: (e) => e.message
		}).unwrap();
	};
	const supprimer = async (promo) => {
		await toast.promise(supprimerPromotion(businessId, promo.id), {
			loading: "Suppression…",
			success: () => {
				recharger();
				return "Promotion supprimée";
			},
			error: (e) => e.message
		}).unwrap();
	};
	return /* @__PURE__ */ jsxs(PageRessource, {
		titre: "Promotions",
		description: "Vos campagnes promotionnelles et leur cycle de vie.",
		businessRequis: true,
		businessId,
		chargement,
		erreur,
		vide: donnees.length === 0,
		messageVide: "Aucune promotion créée pour le moment.",
		onReessayer: recharger,
		action: /* @__PURE__ */ jsxs(Button, {
			onClick: ouvrirCreation,
			children: [/* @__PURE__ */ jsx(PlusIcon, { className: "size-4" }), "Nouvelle promotion"]
		}),
		children: [/* @__PURE__ */ jsx("div", {
			className: "overflow-hidden rounded-lg border",
			children: /* @__PURE__ */ jsxs(Table, { children: [/* @__PURE__ */ jsx(TableHeader, { children: /* @__PURE__ */ jsxs(TableRow, { children: [
				/* @__PURE__ */ jsx(TableHead, { children: "Nom" }),
				/* @__PURE__ */ jsx(TableHead, { children: "Code" }),
				/* @__PURE__ */ jsx(TableHead, { children: "Type" }),
				/* @__PURE__ */ jsx(TableHead, { children: "Statut" }),
				/* @__PURE__ */ jsx(TableHead, {
					className: "w-[1%] text-right",
					children: "Actions"
				})
			] }) }), /* @__PURE__ */ jsx(TableBody, { children: donnees.map((promo) => /* @__PURE__ */ jsxs(TableRow, { children: [
				/* @__PURE__ */ jsx(TableCell, {
					className: "font-medium",
					children: promo.nom || "—"
				}),
				/* @__PURE__ */ jsx(TableCell, {
					className: "font-mono text-sm text-muted-foreground",
					children: promo.codePromo || "—"
				}),
				/* @__PURE__ */ jsx(TableCell, {
					className: "text-muted-foreground",
					children: TYPES.find((t) => t.valeur === promo.type)?.libelle ?? "—"
				}),
				/* @__PURE__ */ jsx(TableCell, { children: /* @__PURE__ */ jsx(Badge, {
					variant: promo.status === "ACTIVE" ? "default" : "secondary",
					children: promo.status ?? "—"
				}) }),
				/* @__PURE__ */ jsxs(TableCell, {
					className: "text-right whitespace-nowrap",
					children: [/* @__PURE__ */ jsx(NativeSelect, {
						"aria-label": `Changer le statut de ${promo.nom ?? "la promotion"}`,
						value: promo.status ?? "",
						onChange: (e) => changerStatut(promo, e.target.value),
						className: "inline-block w-auto",
						children: STATUTS.map((s) => /* @__PURE__ */ jsx(NativeSelectOption, {
							value: s,
							children: s
						}, s))
					}), /* @__PURE__ */ jsx(Button, {
						variant: "ghost",
						size: "sm",
						"aria-label": `Supprimer ${promo.nom ?? "cette promotion"}`,
						onClick: () => supprimer(promo),
						children: /* @__PURE__ */ jsx(Trash2Icon, { className: "size-4 text-destructive" })
					})]
				})
			] }, promo.id)) })] })
		}), /* @__PURE__ */ jsx(Dialog$1, {
			open: ouvert,
			onOpenChange: setOuvert,
			children: /* @__PURE__ */ jsxs(DialogContent, { children: [/* @__PURE__ */ jsxs(DialogHeader, { children: [/* @__PURE__ */ jsx(DialogTitle, { children: "Nouvelle promotion" }), /* @__PURE__ */ jsx(DialogDescription, { children: "La date de fin doit être postérieure à la date de début." })] }), /* @__PURE__ */ jsxs("form", {
				onSubmit: handleSubmit(onSubmit),
				noValidate: true,
				children: [/* @__PURE__ */ jsxs(FieldGroup, { children: [/* @__PURE__ */ jsxs(FieldSet, { children: [
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
							/* @__PURE__ */ jsx(Input, {
								id: "nom",
								placeholder: "Ex : Soldes de fin d'année",
								"aria-required": requis.has("nom"),
								"aria-invalid": !!errors.nom,
								...register("nom")
							}),
							/* @__PURE__ */ jsx(FieldError, { errors: [errors.nom] })
						]
					}),
					/* @__PURE__ */ jsxs(Field, {
						"data-invalid": !!errors.codePromo,
						children: [
							/* @__PURE__ */ jsxs(FieldLabel, {
								htmlFor: "codePromo",
								children: ["Code promo ", requis.has("codePromo") && /* @__PURE__ */ jsx(Etoile, {})]
							}),
							/* @__PURE__ */ jsx(Input, {
								id: "codePromo",
								placeholder: "Ex : NOEL2026",
								"aria-required": requis.has("codePromo"),
								"aria-invalid": !!errors.codePromo,
								...register("codePromo")
							}),
							/* @__PURE__ */ jsx(FieldError, { errors: [errors.codePromo] })
						]
					}),
					/* @__PURE__ */ jsxs(Field, {
						"data-invalid": !!errors.type,
						children: [
							/* @__PURE__ */ jsxs(FieldLabel, {
								htmlFor: "type",
								children: ["Type ", requis.has("type") && /* @__PURE__ */ jsx(Etoile, {})]
							}),
							/* @__PURE__ */ jsx(NativeSelect, {
								id: "type",
								"aria-required": requis.has("type"),
								"aria-invalid": !!errors.type,
								...register("type"),
								children: TYPES.map((t) => /* @__PURE__ */ jsx(NativeSelectOption, {
									value: t.valeur,
									children: t.libelle
								}, t.valeur))
							}),
							/* @__PURE__ */ jsx(FieldError, { errors: [errors.type] })
						]
					}),
					/* @__PURE__ */ jsxs(Field, {
						"data-invalid": !!errors.valeur,
						children: [
							/* @__PURE__ */ jsxs(FieldLabel, {
								htmlFor: "valeur",
								children: ["Valeur ", requis.has("valeur") && /* @__PURE__ */ jsx(Etoile, {})]
							}),
							/* @__PURE__ */ jsx(Input, {
								id: "valeur",
								type: "number",
								step: "0.01",
								inputMode: "decimal",
								"aria-required": requis.has("valeur"),
								"aria-invalid": !!errors.valeur,
								...register("valeur", { valueAsNumber: true })
							}),
							/* @__PURE__ */ jsx(FieldError, { errors: [errors.valeur] })
						]
					}),
					/* @__PURE__ */ jsxs(Field, {
						"data-invalid": !!errors.dateDebut,
						children: [
							/* @__PURE__ */ jsxs(FieldLabel, {
								htmlFor: "dateDebut",
								children: ["Date de début ", requis.has("dateDebut") && /* @__PURE__ */ jsx(Etoile, {})]
							}),
							/* @__PURE__ */ jsx(Input, {
								id: "dateDebut",
								type: "datetime-local",
								"aria-required": requis.has("dateDebut"),
								"aria-invalid": !!errors.dateDebut,
								...register("dateDebut")
							}),
							/* @__PURE__ */ jsx(FieldError, { errors: [errors.dateDebut] })
						]
					}),
					/* @__PURE__ */ jsxs(Field, {
						"data-invalid": !!errors.dateFin,
						children: [
							/* @__PURE__ */ jsxs(FieldLabel, {
								htmlFor: "dateFin",
								children: ["Date de fin ", requis.has("dateFin") && /* @__PURE__ */ jsx(Etoile, {})]
							}),
							/* @__PURE__ */ jsx(Input, {
								id: "dateFin",
								type: "datetime-local",
								"aria-required": requis.has("dateFin"),
								"aria-invalid": !!errors.dateFin,
								...register("dateFin")
							}),
							/* @__PURE__ */ jsx(FieldError, { errors: [errors.dateFin] })
						]
					})
				] }), /* @__PURE__ */ jsxs(Field, {
					"data-invalid": !!errors.description,
					children: [
						/* @__PURE__ */ jsxs(FieldLabel, {
							htmlFor: "description",
							children: [
								"Description",
								" ",
								/* @__PURE__ */ jsx("span", {
									className: "text-muted-foreground",
									children: "(facultatif)"
								})
							]
						}),
						/* @__PURE__ */ jsx(Textarea, {
							id: "description",
							rows: 3,
							"aria-invalid": !!errors.description,
							...register("description")
						}),
						/* @__PURE__ */ jsx(FieldError, { errors: [errors.description] })
					]
				})] }), /* @__PURE__ */ jsxs(DialogFooter, {
					className: "mt-6",
					children: [/* @__PURE__ */ jsx(Button, {
						type: "button",
						variant: "outline",
						onClick: () => setOuvert(false),
						disabled: isSubmitting,
						children: "Annuler"
					}), /* @__PURE__ */ jsx(Button, {
						type: "submit",
						disabled: !isValid || isSubmitting,
						children: isSubmitting ? "Enregistrement…" : "Créer la promotion"
					})]
				})]
			})] })
		})]
	});
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
	if (!isSignedIn) return /* @__PURE__ */ jsx(Navigate, {
		to: "/sign-up",
		replace: true
	});
	return /* @__PURE__ */ jsx(Outlet, {});
};
var root_default = UNSAFE_withComponentProps(function App({ loaderData }) {
	const location = useLocation();
	const shouldHideNavbar = [
		"/",
		"/sign-in",
		"/sign-up",
		"/sign-in/factor-one",
		"/welcome",
		"/clients/valider-invitation/:invitationId",
		"/fournisseurs/valider-invitation/:invitationId",
		"/travailleurs/valider-invitation/:invitationId"
	].includes(location.pathname);
	let [page, setPage] = useState("Current Page");
	return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(ClerkProvider, {
		loaderData,
		localization: frFR,
		children: /* @__PURE__ */ jsxs(BusinessProvider, { children: [!shouldHideNavbar && /* @__PURE__ */ jsx(AppSidebar, { variant: "inset" }), /* @__PURE__ */ jsxs(SidebarInset, { children: [!shouldHideNavbar && /* @__PURE__ */ jsx(SiteHeader, { title: `${page}` }), /* @__PURE__ */ jsx("div", {
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
					/* @__PURE__ */ jsxs(Route, {
						element: /* @__PURE__ */ jsx(ProtectedRoute, {}),
						children: [
							/* @__PURE__ */ jsx(Route, {
								path: "/welcome",
								element: /* @__PURE__ */ jsx(welcome_default, {})
							}),
							/* @__PURE__ */ jsx(Route, {
								path: "/acceuil",
								element: /* @__PURE__ */ jsx(acceuil_default, {})
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
								path: "/articles/nouveau",
								element: /* @__PURE__ */ jsx(nouveau_default, {})
							}),
							/* @__PURE__ */ jsx(Route, {
								path: "/articles/:id",
								element: /* @__PURE__ */ jsx(detail_default$3, {})
							}),
							/* @__PURE__ */ jsx(Route, {
								path: "/businesses/creer",
								element: /* @__PURE__ */ jsx(page_default, {})
							}),
							/* @__PURE__ */ jsx(Route, {
								path: "/promotions",
								element: /* @__PURE__ */ jsx(promotions_default, {})
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
								path: "/clients/valider-invitation/:invitationId",
								element: /* @__PURE__ */ jsx(valider_invitation_default$2, {})
							}),
							/* @__PURE__ */ jsx(Route, {
								path: "/clients/:id",
								element: /* @__PURE__ */ jsx(detail_default$2, {})
							}),
							/* @__PURE__ */ jsx(Route, {
								path: "/fournisseurs",
								element: /* @__PURE__ */ jsx(fournisseurs_default, {})
							}),
							/* @__PURE__ */ jsx(Route, {
								path: "/fournisseurs/:id",
								element: /* @__PURE__ */ jsx(detail_default$1, {})
							}),
							/* @__PURE__ */ jsx(Route, {
								path: "/fournisseurs/valider-invitation/:invitationId",
								element: /* @__PURE__ */ jsx(valider_invitation_default$1, {})
							}),
							/* @__PURE__ */ jsx(Route, {
								path: "/travailleurs",
								element: /* @__PURE__ */ jsx(travailleurs_default, {})
							}),
							/* @__PURE__ */ jsx(Route, {
								path: "/travailleurs/valider-invitation/:invitationId",
								element: /* @__PURE__ */ jsx(valider_invitation_default, {})
							}),
							/* @__PURE__ */ jsx(Route, {
								path: "/travailleurs/:id",
								element: /* @__PURE__ */ jsx(detail_default, {})
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
		})] })] })
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
					children: [/* @__PURE__ */ jsx(Search, { className: "absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" }), /* @__PURE__ */ jsx(Input, {
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
								component: (onClick) => /* @__PURE__ */ jsx(Button, {
									onClick,
									children: "Default"
								})
							},
							{
								id: "btn-outline",
								label: "Outline",
								code: `<Button variant="outline">Outline</Button>`,
								component: (onClick) => /* @__PURE__ */ jsx(Button, {
									variant: "outline",
									onClick,
									children: "Outline"
								})
							},
							{
								id: "btn-secondary",
								label: "Secondary",
								code: `<Button variant="secondary">Secondary</Button>`,
								component: (onClick) => /* @__PURE__ */ jsx(Button, {
									variant: "secondary",
									onClick,
									children: "Secondary"
								})
							},
							{
								id: "btn-destructive",
								label: "Destructive",
								code: `<Button variant="destructive">Destructive</Button>`,
								component: (onClick) => /* @__PURE__ */ jsx(Button, {
									variant: "destructive",
									onClick,
									children: "Destructive"
								})
							},
							{
								id: "btn-destructive-outline",
								label: "Destructive Outline",
								code: `<Button variant="outline" className="border-destructive text-destructive hover:bg-destructive/10">Destructive Outline</Button>`,
								component: (onClick) => /* @__PURE__ */ jsx(Button, {
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
								component: (onClick) => /* @__PURE__ */ jsx(Button, {
									variant: "ghost",
									onClick,
									children: "Ghost"
								})
							},
							{
								id: "btn-link",
								label: "Link",
								code: `<Button variant="link">Link</Button>`,
								component: (onClick) => /* @__PURE__ */ jsx(Button, {
									variant: "link",
									onClick,
									children: "Link"
								})
							},
							{
								id: "btn-xs",
								label: "Extra-small Size",
								code: `<Button size="sm" className="h-7 px-2 text-xs">Extra-small</Button>`,
								component: (onClick) => /* @__PURE__ */ jsx(Button, {
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
								component: (onClick) => /* @__PURE__ */ jsx(Button, {
									size: "sm",
									onClick,
									children: "Small Size"
								})
							},
							{
								id: "btn-lg",
								label: "Large Size",
								code: `<Button size="lg">Large Size</Button>`,
								component: (onClick) => /* @__PURE__ */ jsx(Button, {
									size: "lg",
									onClick,
									children: "Large Size"
								})
							},
							{
								id: "btn-xl",
								label: "Extra-large Size",
								code: `<Button className="h-12 px-6 text-base">Extra-large Size</Button>`,
								component: (onClick) => /* @__PURE__ */ jsx(Button, {
									className: "h-12 px-6 text-base",
									onClick,
									children: "Extra-large Size"
								})
							},
							{
								id: "btn-disabled",
								label: "Disabled",
								code: `<Button disabled>Disabled</Button>`,
								component: (onClick) => /* @__PURE__ */ jsx(Button, {
									disabled: true,
									onClick,
									children: "Disabled"
								})
							},
							{
								id: "btn-icon",
								label: "Icon",
								code: `<Button size="icon"><Trash2 className="h-4 w-4" /></Button>`,
								component: (onClick) => /* @__PURE__ */ jsx(Button, {
									size: "icon",
									onClick,
									children: /* @__PURE__ */ jsx(Trash2, { className: "h-4 w-4" })
								})
							},
							{
								id: "btn-icon-sm",
								label: "Icon Small Size",
								code: `<Button size="icon" className="h-7 w-7"><Plus className="h-3.5 w-3.5" /></Button>`,
								component: (onClick) => /* @__PURE__ */ jsx(Button, {
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
								component: (onClick) => /* @__PURE__ */ jsx(Button, {
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
								component: (onClick) => /* @__PURE__ */ jsxs(Button, {
									onClick,
									children: [/* @__PURE__ */ jsx(Mail, { className: "mr-2 h-4 w-4" }), " Login with Email"]
								})
							},
							{
								id: "btn-with-link",
								label: "With Link",
								code: `<Button asChild><a href="#link">Navigate <ArrowRight className="ml-2 h-4 w-4" /></a></Button>`,
								component: (onClick) => /* @__PURE__ */ jsxs(Button, {
									onClick,
									children: ["Navigate ", /* @__PURE__ */ jsx(ArrowRight, { className: "ml-2 h-4 w-4" })]
								})
							},
							{
								id: "btn-loading-prop",
								label: "Loading (Built-in Prop)",
								code: `<Button disabled><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Please wait</Button>`,
								component: (onClick) => /* @__PURE__ */ jsxs(Button, {
									disabled: true,
									onClick,
									children: [/* @__PURE__ */ jsx(Loader2, { className: "mr-2 h-4 w-4 animate-spin" }), " Please wait"]
								})
							},
							{
								id: "btn-loading-custom",
								label: "Loading (Custom Composition)",
								code: `<Button variant="outline" className="gap-2"><span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" /> Syncing Data</Button>`,
								component: (onClick) => /* @__PURE__ */ jsxs(Button, {
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
								component: (onClick) => /* @__PURE__ */ jsx(Input, {
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
									children: [/* @__PURE__ */ jsx(Mail, { className: "absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" }), /* @__PURE__ */ jsx(Input, {
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
								component: (onClick) => /* @__PURE__ */ jsx(Input, {
									type: "file",
									onClick,
									className: "cursor-pointer max-w-xs"
								})
							},
							{
								id: "input-disabled",
								label: "Disabled Input",
								code: `<Input placeholder="Disabled..." disabled />`,
								component: (onClick) => /* @__PURE__ */ jsx(Input, {
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
									children: [/* @__PURE__ */ jsx(Checkbox, {
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
		"module": "/assets/entry.client-BwbdmzkL.js",
		"imports": ["/assets/rolldown-runtime-hePW80VL.js", "/assets/admin-C1UJaEuc.js"],
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
			"module": "/assets/root-DTuWUUoI.js",
			"imports": [
				"/assets/rolldown-runtime-hePW80VL.js",
				"/assets/admin-C1UJaEuc.js",
				"/assets/dashboard-iFgxSVNy.js",
				"/assets/ui-CACRHaBU.js",
				"/assets/profile-D0Bnxe5V.js",
				"/assets/avatar-DWFVrUED.js",
				"/assets/clerk-CH-P7nbE.js",
				"/assets/acceuil-fU45-Kzl.js",
				"/assets/home-Wt-hoFsN.js",
				"/assets/notifications-CXKyw1jg.js",
				"/assets/commandes-B-paHrIE.js",
				"/assets/ventes-Dlsl8E13.js",
				"/assets/articles-UG4QxWpg.js",
				"/assets/nouveau-Bdd8kSAM.js",
				"/assets/detail-BQJw5zOo.js",
				"/assets/achats-Cmoq9Re7.js",
				"/assets/clients-BFOQK-Jo.js",
				"/assets/detail-Bk7cmrtM.js",
				"/assets/valider-invitation-WxSava4B.js",
				"/assets/fournisseurs-CnabY807.js",
				"/assets/valider-invitation-CdJY_eYh.js",
				"/assets/detail-Doe9vuJg.js",
				"/assets/travailleurs-BN-xzefy.js",
				"/assets/detail-DSTiuG0U.js",
				"/assets/valider-invitation-8LKHRzyo.js",
				"/assets/caisses-DtGnHyTr.js",
				"/assets/parametres-Bc-E4WT4.js",
				"/assets/page-wVr7zRcc.js",
				"/assets/page-CCZmrRcp.js",
				"/assets/welcome-CVUIrMG-.js",
				"/assets/page-SipFcOiW.js",
				"/assets/promotions-BYqu70fm.js",
				"/assets/charts-CqGBh3FX.js",
				"/assets/vendor-uXzeSch6.js",
				"/assets/card-CXiHH_Xb.js",
				"/assets/apis-RB_cg0fH.js",
				"/assets/switch-CTf8gaW1.js",
				"/assets/alert-CgGRRxqd.js",
				"/assets/native-select-_BnVK_AK.js",
				"/assets/alert-dialog-Bn4N_nIq.js",
				"/assets/formulaire-article-Bz-PbCxX.js",
				"/assets/textarea-CsZ-ZDAL.js",
				"/assets/forms-CdgaCzaC.js",
				"/assets/avatar-ressource-BTSKVq2i.js"
			],
			"css": ["/assets/app-DyEC_6oK.css"],
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
			"module": "/assets/home-z0GbMTv2.js",
			"imports": [
				"/assets/home-Wt-hoFsN.js",
				"/assets/rolldown-runtime-hePW80VL.js",
				"/assets/admin-C1UJaEuc.js",
				"/assets/alert-CgGRRxqd.js"
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
			"module": "/assets/docs-B95P9fIa.js",
			"imports": [
				"/assets/rolldown-runtime-hePW80VL.js",
				"/assets/admin-C1UJaEuc.js",
				"/assets/dashboard-iFgxSVNy.js",
				"/assets/ui-CACRHaBU.js",
				"/assets/avatar-DWFVrUED.js",
				"/assets/alert-CgGRRxqd.js",
				"/assets/switch-CTf8gaW1.js",
				"/assets/charts-CqGBh3FX.js",
				"/assets/vendor-uXzeSch6.js"
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
			"module": "/assets/page-DT5F-6r-.js",
			"imports": [
				"/assets/page-wVr7zRcc.js",
				"/assets/rolldown-runtime-hePW80VL.js",
				"/assets/admin-C1UJaEuc.js",
				"/assets/clerk-CH-P7nbE.js",
				"/assets/card-CXiHH_Xb.js"
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
			"module": "/assets/page-761FXAjG.js",
			"imports": [
				"/assets/page-CCZmrRcp.js",
				"/assets/rolldown-runtime-hePW80VL.js",
				"/assets/admin-C1UJaEuc.js",
				"/assets/clerk-CH-P7nbE.js",
				"/assets/card-CXiHH_Xb.js"
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
			"module": "/assets/welcome-KIVxYSqL.js",
			"imports": [
				"/assets/welcome-CVUIrMG-.js",
				"/assets/rolldown-runtime-hePW80VL.js",
				"/assets/admin-C1UJaEuc.js",
				"/assets/apis-RB_cg0fH.js"
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
			"module": "/assets/acceuil-CPf7u2c5.js",
			"imports": [
				"/assets/acceuil-fU45-Kzl.js",
				"/assets/rolldown-runtime-hePW80VL.js",
				"/assets/admin-C1UJaEuc.js"
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
			"module": "/assets/dashboard-DScwM4dR.js",
			"imports": [
				"/assets/dashboard-iFgxSVNy.js",
				"/assets/rolldown-runtime-hePW80VL.js",
				"/assets/admin-C1UJaEuc.js",
				"/assets/charts-CqGBh3FX.js"
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
			"module": "/assets/commandes-BSNB1pjk.js",
			"imports": [
				"/assets/commandes-B-paHrIE.js",
				"/assets/rolldown-runtime-hePW80VL.js",
				"/assets/admin-C1UJaEuc.js"
			],
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
			"module": "/assets/ventes-VGA4CS_Z.js",
			"imports": [
				"/assets/ventes-Dlsl8E13.js",
				"/assets/rolldown-runtime-hePW80VL.js",
				"/assets/admin-C1UJaEuc.js"
			],
			"css": [],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"routes/businesses/page": {
			"id": "routes/businesses/page",
			"parentId": "root",
			"path": "/businesses/creer",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/page-BuXvMY1W.js",
			"imports": [
				"/assets/page-SipFcOiW.js",
				"/assets/rolldown-runtime-hePW80VL.js",
				"/assets/admin-C1UJaEuc.js",
				"/assets/dashboard-iFgxSVNy.js",
				"/assets/vendor-uXzeSch6.js",
				"/assets/ui-CACRHaBU.js",
				"/assets/card-CXiHH_Xb.js",
				"/assets/textarea-CsZ-ZDAL.js",
				"/assets/apis-RB_cg0fH.js",
				"/assets/charts-CqGBh3FX.js"
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
			"module": "/assets/profile-DXWtIIP3.js",
			"imports": [
				"/assets/profile-D0Bnxe5V.js",
				"/assets/rolldown-runtime-hePW80VL.js",
				"/assets/admin-C1UJaEuc.js",
				"/assets/dashboard-iFgxSVNy.js",
				"/assets/vendor-uXzeSch6.js",
				"/assets/ui-CACRHaBU.js",
				"/assets/avatar-DWFVrUED.js",
				"/assets/card-CXiHH_Xb.js",
				"/assets/apis-RB_cg0fH.js",
				"/assets/switch-CTf8gaW1.js",
				"/assets/charts-CqGBh3FX.js"
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
			"module": "/assets/notifications-CGEW3Lwo.js",
			"imports": [
				"/assets/notifications-CXKyw1jg.js",
				"/assets/rolldown-runtime-hePW80VL.js",
				"/assets/admin-C1UJaEuc.js"
			],
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
			"module": "/assets/achats-LEGNODSF.js",
			"imports": [
				"/assets/achats-Cmoq9Re7.js",
				"/assets/rolldown-runtime-hePW80VL.js",
				"/assets/admin-C1UJaEuc.js",
				"/assets/native-select-_BnVK_AK.js",
				"/assets/dashboard-iFgxSVNy.js",
				"/assets/charts-CqGBh3FX.js"
			],
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
			"module": "/assets/travailleurs-DvJtjdKH.js",
			"imports": [
				"/assets/travailleurs-BN-xzefy.js",
				"/assets/rolldown-runtime-hePW80VL.js",
				"/assets/admin-C1UJaEuc.js",
				"/assets/dashboard-iFgxSVNy.js",
				"/assets/ui-CACRHaBU.js",
				"/assets/avatar-DWFVrUED.js",
				"/assets/native-select-_BnVK_AK.js",
				"/assets/alert-dialog-Bn4N_nIq.js",
				"/assets/charts-CqGBh3FX.js",
				"/assets/vendor-uXzeSch6.js"
			],
			"css": [],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"routes/travailleurs/detail": {
			"id": "routes/travailleurs/detail",
			"parentId": "root",
			"path": "/travailleurs/:id",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/detail-qIkLtkBv.js",
			"imports": [
				"/assets/detail-DSTiuG0U.js",
				"/assets/rolldown-runtime-hePW80VL.js",
				"/assets/admin-C1UJaEuc.js",
				"/assets/dashboard-iFgxSVNy.js",
				"/assets/ui-CACRHaBU.js",
				"/assets/alert-dialog-Bn4N_nIq.js",
				"/assets/avatar-ressource-BTSKVq2i.js",
				"/assets/charts-CqGBh3FX.js",
				"/assets/vendor-uXzeSch6.js",
				"/assets/avatar-DWFVrUED.js"
			],
			"css": [],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"routes/travailleurs/valider-invitation": {
			"id": "routes/travailleurs/valider-invitation",
			"parentId": "root",
			"path": "/travailleurs/valider-invitation/:invitationId",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/valider-invitation-1YWKyFBZ.js",
			"imports": [
				"/assets/valider-invitation-8LKHRzyo.js",
				"/assets/rolldown-runtime-hePW80VL.js",
				"/assets/admin-C1UJaEuc.js"
			],
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
			"module": "/assets/clients-Ds1vhdGS.js",
			"imports": [
				"/assets/clients-BFOQK-Jo.js",
				"/assets/rolldown-runtime-hePW80VL.js",
				"/assets/admin-C1UJaEuc.js",
				"/assets/dashboard-iFgxSVNy.js",
				"/assets/ui-CACRHaBU.js",
				"/assets/avatar-DWFVrUED.js",
				"/assets/native-select-_BnVK_AK.js",
				"/assets/alert-dialog-Bn4N_nIq.js",
				"/assets/charts-CqGBh3FX.js",
				"/assets/vendor-uXzeSch6.js"
			],
			"css": [],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"routes/clients/detail": {
			"id": "routes/clients/detail",
			"parentId": "root",
			"path": "/clients/:id",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/detail-Beaw_jyd.js",
			"imports": [
				"/assets/detail-Bk7cmrtM.js",
				"/assets/rolldown-runtime-hePW80VL.js",
				"/assets/admin-C1UJaEuc.js",
				"/assets/dashboard-iFgxSVNy.js",
				"/assets/ui-CACRHaBU.js",
				"/assets/forms-CdgaCzaC.js",
				"/assets/alert-dialog-Bn4N_nIq.js",
				"/assets/apis-RB_cg0fH.js",
				"/assets/avatar-ressource-BTSKVq2i.js",
				"/assets/charts-CqGBh3FX.js",
				"/assets/vendor-uXzeSch6.js",
				"/assets/avatar-DWFVrUED.js"
			],
			"css": [],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"routes/clients/valider-invitation": {
			"id": "routes/clients/valider-invitation",
			"parentId": "root",
			"path": "/clients/valider-invitation/:invitationId",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/valider-invitation-GJj5rVd-.js",
			"imports": [
				"/assets/valider-invitation-WxSava4B.js",
				"/assets/rolldown-runtime-hePW80VL.js",
				"/assets/admin-C1UJaEuc.js"
			],
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
			"module": "/assets/fournisseurs-CYz5Ifyb.js",
			"imports": [
				"/assets/fournisseurs-CnabY807.js",
				"/assets/rolldown-runtime-hePW80VL.js",
				"/assets/admin-C1UJaEuc.js",
				"/assets/dashboard-iFgxSVNy.js",
				"/assets/ui-CACRHaBU.js",
				"/assets/avatar-DWFVrUED.js",
				"/assets/native-select-_BnVK_AK.js",
				"/assets/alert-dialog-Bn4N_nIq.js",
				"/assets/charts-CqGBh3FX.js",
				"/assets/vendor-uXzeSch6.js"
			],
			"css": [],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"routes/fournisseurs/detail": {
			"id": "routes/fournisseurs/detail",
			"parentId": "root",
			"path": "/fournisseurs/:id",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/detail-Cuuokb7o.js",
			"imports": [
				"/assets/detail-Doe9vuJg.js",
				"/assets/rolldown-runtime-hePW80VL.js",
				"/assets/admin-C1UJaEuc.js",
				"/assets/dashboard-iFgxSVNy.js",
				"/assets/ui-CACRHaBU.js",
				"/assets/avatar-DWFVrUED.js",
				"/assets/alert-dialog-Bn4N_nIq.js",
				"/assets/apis-RB_cg0fH.js",
				"/assets/avatar-ressource-BTSKVq2i.js",
				"/assets/charts-CqGBh3FX.js",
				"/assets/vendor-uXzeSch6.js"
			],
			"css": [],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"routes/fournisseurs/valider-invitation": {
			"id": "routes/fournisseurs/valider-invitation",
			"parentId": "root",
			"path": "/fournisseurs/valider-invitation/:invitationId",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/valider-invitation-DD98siD4.js",
			"imports": [
				"/assets/valider-invitation-CdJY_eYh.js",
				"/assets/rolldown-runtime-hePW80VL.js",
				"/assets/admin-C1UJaEuc.js"
			],
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
			"module": "/assets/articles-DLlY0A3z.js",
			"imports": [
				"/assets/articles-UG4QxWpg.js",
				"/assets/rolldown-runtime-hePW80VL.js",
				"/assets/admin-C1UJaEuc.js",
				"/assets/ui-CACRHaBU.js",
				"/assets/native-select-_BnVK_AK.js",
				"/assets/alert-dialog-Bn4N_nIq.js",
				"/assets/dashboard-iFgxSVNy.js",
				"/assets/charts-CqGBh3FX.js",
				"/assets/vendor-uXzeSch6.js"
			],
			"css": [],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"routes/articles/nouveau": {
			"id": "routes/articles/nouveau",
			"parentId": "root",
			"path": "/articles/nouveau",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/nouveau-CPDIio79.js",
			"imports": [
				"/assets/nouveau-Bdd8kSAM.js",
				"/assets/rolldown-runtime-hePW80VL.js",
				"/assets/admin-C1UJaEuc.js",
				"/assets/ui-CACRHaBU.js",
				"/assets/formulaire-article-Bz-PbCxX.js",
				"/assets/native-select-_BnVK_AK.js",
				"/assets/textarea-CsZ-ZDAL.js",
				"/assets/dashboard-iFgxSVNy.js",
				"/assets/charts-CqGBh3FX.js"
			],
			"css": [],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"routes/articles/detail": {
			"id": "routes/articles/detail",
			"parentId": "root",
			"path": "/articles/:id",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/detail-CZWk9mog.js",
			"imports": [
				"/assets/detail-BQJw5zOo.js",
				"/assets/rolldown-runtime-hePW80VL.js",
				"/assets/admin-C1UJaEuc.js",
				"/assets/dashboard-iFgxSVNy.js",
				"/assets/ui-CACRHaBU.js",
				"/assets/alert-dialog-Bn4N_nIq.js",
				"/assets/formulaire-article-Bz-PbCxX.js",
				"/assets/charts-CqGBh3FX.js",
				"/assets/vendor-uXzeSch6.js",
				"/assets/native-select-_BnVK_AK.js",
				"/assets/textarea-CsZ-ZDAL.js"
			],
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
			"module": "/assets/promotions-CpVcgPlR.js",
			"imports": [
				"/assets/promotions-BYqu70fm.js",
				"/assets/rolldown-runtime-hePW80VL.js",
				"/assets/admin-C1UJaEuc.js",
				"/assets/native-select-_BnVK_AK.js",
				"/assets/textarea-CsZ-ZDAL.js",
				"/assets/dashboard-iFgxSVNy.js",
				"/assets/charts-CqGBh3FX.js"
			],
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
			"module": "/assets/caisses-krFchDnq.js",
			"imports": [
				"/assets/caisses-DtGnHyTr.js",
				"/assets/rolldown-runtime-hePW80VL.js",
				"/assets/admin-C1UJaEuc.js",
				"/assets/dashboard-iFgxSVNy.js",
				"/assets/native-select-_BnVK_AK.js",
				"/assets/charts-CqGBh3FX.js"
			],
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
			"module": "/assets/aides-C0c32YKP.js",
			"imports": ["/assets/rolldown-runtime-hePW80VL.js", "/assets/admin-C1UJaEuc.js"],
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
			"module": "/assets/parametres-BbJh5Uyc.js",
			"imports": [
				"/assets/parametres-Bc-E4WT4.js",
				"/assets/rolldown-runtime-hePW80VL.js",
				"/assets/admin-C1UJaEuc.js",
				"/assets/ui-CACRHaBU.js",
				"/assets/card-CXiHH_Xb.js",
				"/assets/apis-RB_cg0fH.js"
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
			"module": "/assets/businesses-tC2_vuh7.js",
			"imports": ["/assets/admin-C1UJaEuc.js", "/assets/rolldown-runtime-hePW80VL.js"],
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
			"module": "/assets/offres-DohuYrTM.js",
			"imports": ["/assets/admin-C1UJaEuc.js", "/assets/rolldown-runtime-hePW80VL.js"],
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
			"module": "/assets/categories-CWuXEFKy.js",
			"imports": ["/assets/admin-C1UJaEuc.js", "/assets/rolldown-runtime-hePW80VL.js"],
			"css": [],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		}
	},
	"url": "/assets/manifest-fc486b62.js",
	"version": "fc486b62",
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
		path: "/businesses/creer",
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
	"routes/travailleurs/detail": {
		id: "routes/travailleurs/detail",
		parentId: "root",
		path: "/travailleurs/:id",
		index: void 0,
		caseSensitive: void 0,
		module: detail_exports
	},
	"routes/travailleurs/valider-invitation": {
		id: "routes/travailleurs/valider-invitation",
		parentId: "root",
		path: "/travailleurs/valider-invitation/:invitationId",
		index: void 0,
		caseSensitive: void 0,
		module: valider_invitation_exports
	},
	"routes/clients/clients": {
		id: "routes/clients/clients",
		parentId: "root",
		path: "/clients",
		index: void 0,
		caseSensitive: void 0,
		module: clients_exports
	},
	"routes/clients/detail": {
		id: "routes/clients/detail",
		parentId: "root",
		path: "/clients/:id",
		index: void 0,
		caseSensitive: void 0,
		module: detail_exports$2
	},
	"routes/clients/valider-invitation": {
		id: "routes/clients/valider-invitation",
		parentId: "root",
		path: "/clients/valider-invitation/:invitationId",
		index: void 0,
		caseSensitive: void 0,
		module: valider_invitation_exports$2
	},
	"routes/fournisseurs/fournisseurs": {
		id: "routes/fournisseurs/fournisseurs",
		parentId: "root",
		path: "/fournisseurs",
		index: void 0,
		caseSensitive: void 0,
		module: fournisseurs_exports
	},
	"routes/fournisseurs/detail": {
		id: "routes/fournisseurs/detail",
		parentId: "root",
		path: "/fournisseurs/:id",
		index: void 0,
		caseSensitive: void 0,
		module: detail_exports$1
	},
	"routes/fournisseurs/valider-invitation": {
		id: "routes/fournisseurs/valider-invitation",
		parentId: "root",
		path: "/fournisseurs/valider-invitation/:invitationId",
		index: void 0,
		caseSensitive: void 0,
		module: valider_invitation_exports$1
	},
	"routes/articles/articles": {
		id: "routes/articles/articles",
		parentId: "root",
		path: "/articles",
		index: void 0,
		caseSensitive: void 0,
		module: articles_exports
	},
	"routes/articles/nouveau": {
		id: "routes/articles/nouveau",
		parentId: "root",
		path: "/articles/nouveau",
		index: void 0,
		caseSensitive: void 0,
		module: nouveau_exports
	},
	"routes/articles/detail": {
		id: "routes/articles/detail",
		parentId: "root",
		path: "/articles/:id",
		index: void 0,
		caseSensitive: void 0,
		module: detail_exports$3
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

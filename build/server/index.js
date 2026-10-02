import { t as __exportAll } from "./assets/rolldown-runtime-D7D4PA-g.js";
import { t as entry_server_node_exports } from "./assets/router-DKeukR6m.js";
import { _ as useIsMobile, a as SelectGroup, c as SelectValue, d as DropdownMenuContent, f as DropdownMenuGroup, g as DropdownMenuTrigger, h as DropdownMenuSeparator, i as SelectContent, l as Checkbox, m as DropdownMenuLabel, n as dashboard_exports, o as SelectItem, p as DropdownMenuItem, r as Select, s as SelectTrigger, t as dashboard_default, u as DropdownMenu } from "./assets/dashboard-DqaksMjj.js";
import { $ as supprimerPromotion, A as creerCaisse, B as listerDevises, C as PageRessource, Ct as champsRequis, D as changerStatusAchat, E as caisseParDefaut, F as listerAgents, G as modifierClient, H as listerPromotions, I as listerArticles, J as supprimerAgent, K as modifierFournisseur, L as listerCaisses, M as creerFournisseur, N as creerPromotion, O as changerStatusPromotion, P as listerAchats, Q as supprimerFournisseur, R as listerCategories, S as useListe, St as API, T as bloquerAgent, Tt as items, U as modifierArticle, V as listerFournisseurs, W as modifierCaisse, X as supprimerCaisse, Y as supprimerArticle, Z as supprimerClient, _ as DialogDescription, _t as Badge, a as businesses_default, at as CaisseSchema, b as DialogTitle, bt as Input, c as FieldDescription, ct as FournisseurSchema, d as FieldLabel, dt as TableBody, et as BusinessProvider, f as FieldLegend, ft as TableCell, g as DialogContent, gt as Label, h as DialogClose, ht as TableRow, i as offres_exports, it as BusinessSchema, j as creerClient, k as creerArticle, l as FieldError, lt as PromotionSchema, m as Dialog$1, mt as TableHeader, n as categories_exports, nt as AdresseSchema, o as businesses_exports, ot as ClientSchema, p as FieldSet, pt as TableHead, q as supprimerAchat, r as offres_default, rt as ArticleSchema, s as Field, st as ContactSchema, t as categories_default, tt as useBusiness, u as FieldGroup, ut as Table, v as DialogFooter, vt as Skeleton, w as activerAgent, wt as cn$1, x as DialogTrigger, xt as Button, y as DialogHeader, yt as Separator, z as listerClients } from "./assets/admin-DrDAZoTE.js";
import { Link, Links, Meta, Outlet, Route, Routes, Scripts, ScrollRestoration, UNSAFE_withComponentProps, UNSAFE_withErrorBoundaryProps, isRouteErrorResponse, useLocation, useNavigate } from "react-router";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import * as React$1 from "react";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { mergeProps } from "@base-ui/react/merge-props";
import { useRender } from "@base-ui/react/use-render";
import { cva } from "class-variance-authority";
import "cn";
import { Dialog } from "@base-ui/react/dialog";
import { AlertTriangle, AlertTriangleIcon, ArrowRight, BadgePercent, BanIcon, Bell, BellIcon, Building2, CalendarArrowUp, ChartPie, CheckCircle2, CheckCircle2Icon, CheckIcon, ChevronDownIcon, CircleDollarSign, CirclePlus, CircleUserRoundIcon, CommandIcon, EllipsisVerticalIcon, FileText, Gauge, Home, Landmark, ListCheck, Loader2, Loader2Icon, LogOutIcon, Mail, MailIcon, MapPin, MoreHorizontalIcon, PanelLeftIcon, Pencil, PhoneIcon, Plus, PlusIcon, Search, SearchIcon, Send, SendToBack, SettingsIcon, ShoppingCart, Star, Trash2, Trash2Icon, UserRoundCog, UserRoundIcon, Users, VolumeOffIcon, X, XIcon } from "lucide-react";
import { Tooltip } from "@base-ui/react/tooltip";
import { Avatar } from "@base-ui/react/avatar";
import { ClerkProvider, Show, SignIn, SignOutButton, SignUp, UserButton, getToken, useAuth, useUser } from "@clerk/react-router";
import { clerkMiddleware, rootAuthLoader } from "@clerk/react-router/server";
import { frFR } from "@clerk/localizations/fr-FR";
import { toast } from "sonner";
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
	groupes: [
		{
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
				},
				{
					title: "Notifications",
					url: "/notifications",
					icon: /* @__PURE__ */ jsx(Bell, {})
				}
			]
		},
		{
			label: "Business",
			items: [
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
		{
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
			/* @__PURE__ */ jsx(SidebarContent, { children: /* @__PURE__ */ jsx(NavMain, { groupes: data.groupes }) }),
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
var app_default = "/assets/app-CZ20jkVq.css";
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
//#region app/components/ui/textarea.tsx
function Textarea({ className, ...props }) {
	return /* @__PURE__ */ jsx("textarea", {
		"data-slot": "textarea",
		className: cn$1("flex field-sizing-content min-h-16 w-full rounded-lg border border-input bg-transparent px-2.5 py-2 text-base transition-colors outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:bg-input/50 disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 md:text-sm dark:bg-input/30 dark:disabled:bg-input/80 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40", className),
		...props
	});
}
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
//#region app/routes/articles/articles.tsx
var articles_exports = /* @__PURE__ */ __exportAll({ default: () => articles_default });
var requis$3 = champsRequis(ArticleSchema.shape);
var Etoile$1 = () => /* @__PURE__ */ jsx("span", {
	className: "text-destructive",
	children: "*"
});
var articles_default = UNSAFE_withComponentProps(function Articles() {
	const { businessId } = useBusiness();
	const [ouvert, setOuvert] = useState(false);
	const [enEdition, setEnEdition] = useState(null);
	const chargerArticles = useCallback(() => listerArticles(), []);
	const chargerCategories = useCallback(() => listerCategories(businessId), [businessId]);
	const chargerDevises = useCallback(() => listerDevises(businessId), [businessId]);
	const { donnees, chargement, erreur, recharger } = useListe(chargerArticles);
	const { donnees: categories } = useListe(chargerCategories, !!businessId);
	const { donnees: devises } = useListe(chargerDevises, !!businessId);
	const { register, handleSubmit, reset, formState: { errors, isSubmitting, isValid } } = useForm({
		resolver: zodResolver(ArticleSchema),
		mode: "onTouched"
	});
	const ouvrirCreation = () => {
		setEnEdition(null);
		reset({
			designation: "",
			pu: 0,
			description: "",
			categorieId: categories[0]?.id ?? "",
			deviseId: devises[0]?.id ?? ""
		});
		setOuvert(true);
	};
	const ouvrirEdition = (article) => {
		setEnEdition(article);
		reset({
			designation: article.designation,
			pu: Number(article.pu),
			description: article.description ?? "",
			categorieId: article.categorieId,
			deviseId: article.deviseId
		});
		setOuvert(true);
	};
	const onSubmit = async (form) => {
		const action = enEdition ? modifierArticle(enEdition.id, form) : creerArticle(businessId, form);
		await toast.promise(action, {
			loading: enEdition ? "Modification…" : "Création…",
			success: () => {
				setOuvert(false);
				recharger();
				return enEdition ? "Article modifié" : "Article créé";
			},
			error: (e) => e.message
		}).unwrap();
	};
	const supprimer = async (article) => {
		await toast.promise(supprimerArticle(article.id), {
			loading: "Suppression…",
			success: () => {
				recharger();
				return "Article supprimé";
			},
			error: (e) => e.message
		}).unwrap();
	};
	return /* @__PURE__ */ jsxs(PageRessource, {
		titre: "Gestion des articles",
		description: "Le catalogue de votre business.",
		businessRequis: true,
		businessId,
		chargement,
		erreur,
		vide: donnees.length === 0,
		messageVide: "Aucun article au catalogue pour le moment.",
		onReessayer: recharger,
		action: /* @__PURE__ */ jsxs(Button, {
			onClick: ouvrirCreation,
			children: [/* @__PURE__ */ jsx(PlusIcon, { className: "size-4" }), "Nouvel article"]
		}),
		children: [/* @__PURE__ */ jsx("div", {
			className: "overflow-hidden rounded-lg border",
			children: /* @__PURE__ */ jsxs(Table, { children: [/* @__PURE__ */ jsx(TableHeader, { children: /* @__PURE__ */ jsxs(TableRow, { children: [
				/* @__PURE__ */ jsx(TableHead, { children: "Désignation" }),
				/* @__PURE__ */ jsx(TableHead, { children: "Catégorie" }),
				/* @__PURE__ */ jsx(TableHead, {
					className: "text-right",
					children: "Prix unitaire"
				}),
				/* @__PURE__ */ jsx(TableHead, {
					className: "w-[1%] text-right",
					children: "Actions"
				})
			] }) }), /* @__PURE__ */ jsx(TableBody, { children: donnees.map((article) => /* @__PURE__ */ jsxs(TableRow, { children: [
				/* @__PURE__ */ jsx(TableCell, {
					className: "font-medium",
					children: article.designation
				}),
				/* @__PURE__ */ jsx(TableCell, {
					className: "text-muted-foreground",
					children: article.categorie?.nom ?? "—"
				}),
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
				/* @__PURE__ */ jsxs(TableCell, {
					className: "text-right whitespace-nowrap",
					children: [/* @__PURE__ */ jsx(Button, {
						variant: "ghost",
						size: "sm",
						onClick: () => ouvrirEdition(article),
						children: "Modifier"
					}), /* @__PURE__ */ jsx(Button, {
						variant: "ghost",
						size: "sm",
						"aria-label": `Supprimer ${article.designation}`,
						onClick: () => supprimer(article),
						children: /* @__PURE__ */ jsx(Trash2Icon, { className: "size-4 text-destructive" })
					})]
				})
			] }, article.id)) })] })
		}), /* @__PURE__ */ jsx(Dialog$1, {
			open: ouvert,
			onOpenChange: setOuvert,
			children: /* @__PURE__ */ jsxs(DialogContent, { children: [/* @__PURE__ */ jsxs(DialogHeader, { children: [/* @__PURE__ */ jsx(DialogTitle, { children: enEdition ? "Modifier l'article" : "Nouvel article" }), /* @__PURE__ */ jsx(DialogDescription, { children: "Les champs marqués d'une étoile sont exigés par le serveur." })] }), /* @__PURE__ */ jsxs("form", {
				onSubmit: handleSubmit(onSubmit),
				noValidate: true,
				children: [/* @__PURE__ */ jsxs(FieldGroup, { children: [/* @__PURE__ */ jsxs(FieldSet, { children: [
					/* @__PURE__ */ jsx(FieldLegend, {
						variant: "label",
						children: "Informations requises"
					}),
					/* @__PURE__ */ jsxs(Field, {
						"data-invalid": !!errors.designation,
						children: [
							/* @__PURE__ */ jsxs(FieldLabel, {
								htmlFor: "designation",
								children: ["Désignation ", requis$3.has("designation") && /* @__PURE__ */ jsx(Etoile$1, {})]
							}),
							/* @__PURE__ */ jsx(Input, {
								id: "designation",
								placeholder: "Ex : Pagne wax 6 yards",
								"aria-required": requis$3.has("designation"),
								"aria-invalid": !!errors.designation,
								...register("designation")
							}),
							/* @__PURE__ */ jsx(FieldError, { errors: [errors.designation] })
						]
					}),
					/* @__PURE__ */ jsxs(Field, {
						"data-invalid": !!errors.pu,
						children: [
							/* @__PURE__ */ jsxs(FieldLabel, {
								htmlFor: "pu",
								children: ["Prix unitaire ", requis$3.has("pu") && /* @__PURE__ */ jsx(Etoile$1, {})]
							}),
							/* @__PURE__ */ jsx(Input, {
								id: "pu",
								type: "number",
								step: "0.01",
								inputMode: "decimal",
								placeholder: "0",
								"aria-required": requis$3.has("pu"),
								"aria-invalid": !!errors.pu,
								...register("pu", { valueAsNumber: true })
							}),
							/* @__PURE__ */ jsx(FieldError, { errors: [errors.pu] })
						]
					}),
					/* @__PURE__ */ jsxs(Field, {
						"data-invalid": !!errors.categorieId,
						children: [
							/* @__PURE__ */ jsxs(FieldLabel, {
								htmlFor: "categorieId",
								children: ["Catégorie ", requis$3.has("categorieId") && /* @__PURE__ */ jsx(Etoile$1, {})]
							}),
							/* @__PURE__ */ jsxs(NativeSelect, {
								id: "categorieId",
								"aria-required": requis$3.has("categorieId"),
								"aria-invalid": !!errors.categorieId,
								...register("categorieId"),
								children: [/* @__PURE__ */ jsx(NativeSelectOption, {
									value: "",
									children: "Sélectionner une catégorie"
								}), categories.map((c) => /* @__PURE__ */ jsx(NativeSelectOption, {
									value: c.id,
									children: c.nom
								}, c.id))]
							}),
							/* @__PURE__ */ jsx(FieldError, { errors: [errors.categorieId] })
						]
					}),
					/* @__PURE__ */ jsxs(Field, {
						"data-invalid": !!errors.deviseId,
						children: [
							/* @__PURE__ */ jsxs(FieldLabel, {
								htmlFor: "deviseId",
								children: ["Devise ", requis$3.has("deviseId") && /* @__PURE__ */ jsx(Etoile$1, {})]
							}),
							/* @__PURE__ */ jsxs(NativeSelect, {
								id: "deviseId",
								"aria-required": requis$3.has("deviseId"),
								"aria-invalid": !!errors.deviseId,
								...register("deviseId"),
								children: [/* @__PURE__ */ jsx(NativeSelectOption, {
									value: "",
									children: "Sélectionner une devise"
								}), devises.map((d) => /* @__PURE__ */ jsxs(NativeSelectOption, {
									value: d.id,
									children: [
										d.nom ?? d.type,
										" (",
										d.symbole,
										")"
									]
								}, d.id))]
							}),
							/* @__PURE__ */ jsx(FieldError, { errors: [errors.deviseId] })
						]
					})
				] }), /* @__PURE__ */ jsxs(Field, {
					"data-invalid": !!errors.description,
					children: [
						/* @__PURE__ */ jsxs(FieldLabel, {
							htmlFor: "description",
							children: ["Description ", /* @__PURE__ */ jsx("span", {
								className: "text-muted-foreground",
								children: "(facultatif)"
							})]
						}),
						/* @__PURE__ */ jsx(Textarea, {
							id: "description",
							rows: 3,
							placeholder: "Matière, dimensions, provenance…",
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
						children: isSubmitting ? "Enregistrement…" : enEdition ? "Enregistrer" : "Créer l'article"
					})]
				})]
			})] })
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
//#region app/routes/clients/clients.tsx
var clients_exports = /* @__PURE__ */ __exportAll({ default: () => clients_default });
var clients_default = UNSAFE_withComponentProps(function Clients() {
	const { businessId } = useBusiness();
	const [recherche, setRecherche] = useState("");
	const [saisie, setSaisie] = useState("");
	const [ouvert, setOuvert] = useState(false);
	const [enEdition, setEnEdition] = useState(null);
	const charger = useCallback(() => listerClients(businessId, recherche || void 0), [businessId, recherche]);
	const { donnees, chargement, erreur, recharger } = useListe(charger, !!businessId);
	const { register, handleSubmit, reset, formState: { errors, isSubmitting, isValid } } = useForm({
		resolver: zodResolver(ClientSchema),
		mode: "onTouched",
		defaultValues: {
			firstName: "",
			lastName: "",
			email: ""
		}
	});
	const ouvrirCreation = () => {
		setEnEdition(null);
		reset({
			firstName: "",
			lastName: "",
			email: ""
		});
		setOuvert(true);
	};
	const ouvrirEdition = (client) => {
		setEnEdition(client);
		reset({
			firstName: client.firstName ?? "",
			lastName: client.lastName ?? "",
			email: client.email ?? ""
		});
		setOuvert(true);
	};
	const onSubmit = async (form) => {
		const donneesUtiles = {
			...form.firstName?.trim() ? { firstName: form.firstName.trim() } : {},
			...form.lastName?.trim() ? { lastName: form.lastName.trim() } : {},
			...form.email?.trim() ? { email: form.email.trim() } : {}
		};
		const action = enEdition ? modifierClient(businessId, enEdition.id, donneesUtiles) : creerClient(businessId, donneesUtiles);
		await toast.promise(action, {
			loading: enEdition ? "Modification…" : "Création…",
			success: () => {
				setOuvert(false);
				recharger();
				return enEdition ? "Client modifié" : "Client créé";
			},
			error: (e) => e.message
		}).unwrap();
	};
	const supprimer = async (client) => {
		await toast.promise(supprimerClient(businessId, client.id), {
			loading: "Suppression…",
			success: () => {
				recharger();
				return "Client supprimé";
			},
			error: (e) => e.message
		}).unwrap();
	};
	return /* @__PURE__ */ jsxs(PageRessource, {
		titre: "Clients",
		description: "Les clients rattachés à votre business.",
		businessRequis: true,
		businessId,
		chargement,
		erreur,
		vide: donnees.length === 0,
		messageVide: "Aucun client enregistré pour le moment.",
		onReessayer: recharger,
		action: /* @__PURE__ */ jsxs(Button, {
			onClick: ouvrirCreation,
			children: [/* @__PURE__ */ jsx(PlusIcon, { className: "size-4" }), "Nouveau client"]
		}),
		outils: /* @__PURE__ */ jsxs("form", {
			onSubmit: (e) => {
				e.preventDefault();
				setRecherche(saisie);
			},
			className: "flex max-w-sm items-center gap-2",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "relative flex-1",
				children: [/* @__PURE__ */ jsx(SearchIcon, { className: "pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" }), /* @__PURE__ */ jsx(Input, {
					value: saisie,
					onChange: (e) => setSaisie(e.target.value),
					placeholder: "Rechercher un client…",
					"aria-label": "Rechercher un client",
					className: "pl-9"
				})]
			}), /* @__PURE__ */ jsx(Button, {
				type: "submit",
				variant: "outline",
				children: "Rechercher"
			})]
		}),
		children: [/* @__PURE__ */ jsx("div", {
			className: "overflow-hidden rounded-lg border",
			children: /* @__PURE__ */ jsxs(Table, { children: [/* @__PURE__ */ jsx(TableHeader, { children: /* @__PURE__ */ jsxs(TableRow, { children: [
				/* @__PURE__ */ jsx(TableHead, { children: "Nom" }),
				/* @__PURE__ */ jsx(TableHead, { children: "Email" }),
				/* @__PURE__ */ jsx(TableHead, {
					className: "w-[1%] text-right",
					children: "Actions"
				})
			] }) }), /* @__PURE__ */ jsx(TableBody, { children: donnees.map((client) => /* @__PURE__ */ jsxs(TableRow, { children: [
				/* @__PURE__ */ jsx(TableCell, {
					className: "font-medium",
					children: client.fullName || [client.firstName, client.lastName].filter(Boolean).join(" ") || "—"
				}),
				/* @__PURE__ */ jsx(TableCell, {
					className: "text-muted-foreground",
					children: client.email || "—"
				}),
				/* @__PURE__ */ jsxs(TableCell, {
					className: "text-right whitespace-nowrap",
					children: [/* @__PURE__ */ jsx(Button, {
						variant: "ghost",
						size: "sm",
						onClick: () => ouvrirEdition(client),
						children: "Modifier"
					}), /* @__PURE__ */ jsx(Button, {
						variant: "ghost",
						size: "sm",
						"aria-label": `Supprimer ${client.fullName ?? "ce client"}`,
						onClick: () => supprimer(client),
						children: /* @__PURE__ */ jsx(Trash2Icon, { className: "size-4 text-destructive" })
					})]
				})
			] }, client.id)) })] })
		}), /* @__PURE__ */ jsx(Dialog$1, {
			open: ouvert,
			onOpenChange: setOuvert,
			children: /* @__PURE__ */ jsxs(DialogContent, { children: [/* @__PURE__ */ jsxs(DialogHeader, { children: [/* @__PURE__ */ jsx(DialogTitle, { children: enEdition ? "Modifier le client" : "Nouveau client" }), /* @__PURE__ */ jsx(DialogDescription, { children: "Tous les champs sont facultatifs côté serveur : renseignez au moins un identifiant pour retrouver ce client." })] }), /* @__PURE__ */ jsxs("form", {
				onSubmit: handleSubmit(onSubmit),
				noValidate: true,
				children: [/* @__PURE__ */ jsx(FieldGroup, { children: /* @__PURE__ */ jsxs(FieldSet, { children: [
					/* @__PURE__ */ jsx(FieldLegend, {
						variant: "label",
						children: "Identité"
					}),
					/* @__PURE__ */ jsxs(Field, {
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
					}),
					/* @__PURE__ */ jsxs(Field, {
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
								...register("email")
							}),
							errors.email ? /* @__PURE__ */ jsx(FieldError, { errors: [errors.email] }) : /* @__PURE__ */ jsx(FieldDescription, { children: "Sert à rattacher le client à un compte existant." })
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
						children: isSubmitting ? "Enregistrement…" : enEdition ? "Enregistrer" : "Créer le client"
					})]
				})]
			})] })
		})]
	});
});
//#endregion
//#region app/routes/fournisseurs/fournisseurs.tsx
var fournisseurs_exports = /* @__PURE__ */ __exportAll({ default: () => fournisseurs_default });
var fournisseurs_default = UNSAFE_withComponentProps(function Fournisseurs() {
	const { businessId } = useBusiness();
	const [recherche, setRecherche] = useState("");
	const [saisie, setSaisie] = useState("");
	const [ouvert, setOuvert] = useState(false);
	const [enEdition, setEnEdition] = useState(null);
	const charger = useCallback(() => listerFournisseurs(businessId, recherche || void 0), [businessId, recherche]);
	const { donnees, chargement, erreur, recharger } = useListe(charger, !!businessId);
	const { register, handleSubmit, reset, formState: { errors, isSubmitting, isValid } } = useForm({
		resolver: zodResolver(FournisseurSchema),
		mode: "onTouched",
		defaultValues: {
			nom: "",
			email: "",
			website: "",
			description: ""
		}
	});
	const ouvrirCreation = () => {
		setEnEdition(null);
		reset({
			nom: "",
			email: "",
			website: "",
			description: ""
		});
		setOuvert(true);
	};
	const ouvrirEdition = (f) => {
		setEnEdition(f);
		reset({
			nom: f.nom ?? "",
			email: f.email ?? "",
			website: f.website ?? "",
			description: f.description ?? ""
		});
		setOuvert(true);
	};
	const onSubmit = async (form) => {
		const utiles = {
			...form.nom?.trim() ? { nom: form.nom.trim() } : {},
			...form.email?.trim() ? { email: form.email.trim() } : {},
			...form.website?.trim() ? { website: form.website.trim() } : {},
			...form.description?.trim() ? { description: form.description.trim() } : {}
		};
		const action = enEdition ? modifierFournisseur(businessId, enEdition.id, utiles) : creerFournisseur(businessId, utiles);
		await toast.promise(action, {
			loading: enEdition ? "Modification…" : "Création…",
			success: () => {
				setOuvert(false);
				recharger();
				return enEdition ? "Fournisseur modifié" : "Fournisseur créé";
			},
			error: (e) => e.message
		}).unwrap();
	};
	const supprimer = async (f) => {
		await toast.promise(supprimerFournisseur(businessId, f.id), {
			loading: "Suppression…",
			success: () => {
				recharger();
				return "Fournisseur supprimé";
			},
			error: (e) => e.message
		}).unwrap();
	};
	return /* @__PURE__ */ jsxs(PageRessource, {
		titre: "Fournisseurs",
		description: "Les fournisseurs auprès desquels vous vous approvisionnez.",
		businessRequis: true,
		businessId,
		chargement,
		erreur,
		vide: donnees.length === 0,
		messageVide: "Aucun fournisseur enregistré pour le moment.",
		onReessayer: recharger,
		action: /* @__PURE__ */ jsxs(Button, {
			onClick: ouvrirCreation,
			children: [/* @__PURE__ */ jsx(PlusIcon, { className: "size-4" }), "Nouveau fournisseur"]
		}),
		outils: /* @__PURE__ */ jsxs("form", {
			onSubmit: (e) => {
				e.preventDefault();
				setRecherche(saisie);
			},
			className: "flex max-w-sm items-center gap-2",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "relative flex-1",
				children: [/* @__PURE__ */ jsx(SearchIcon, { className: "pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" }), /* @__PURE__ */ jsx(Input, {
					value: saisie,
					onChange: (e) => setSaisie(e.target.value),
					placeholder: "Rechercher par nom…",
					"aria-label": "Rechercher un fournisseur",
					className: "pl-9"
				})]
			}), /* @__PURE__ */ jsx(Button, {
				type: "submit",
				variant: "outline",
				children: "Rechercher"
			})]
		}),
		children: [/* @__PURE__ */ jsx("div", {
			className: "overflow-hidden rounded-lg border",
			children: /* @__PURE__ */ jsxs(Table, { children: [/* @__PURE__ */ jsx(TableHeader, { children: /* @__PURE__ */ jsxs(TableRow, { children: [
				/* @__PURE__ */ jsx(TableHead, { children: "Nom" }),
				/* @__PURE__ */ jsx(TableHead, { children: "Email" }),
				/* @__PURE__ */ jsx(TableHead, { children: "Site web" }),
				/* @__PURE__ */ jsx(TableHead, {
					className: "w-[1%] text-right",
					children: "Actions"
				})
			] }) }), /* @__PURE__ */ jsx(TableBody, { children: donnees.map((f) => /* @__PURE__ */ jsxs(TableRow, { children: [
				/* @__PURE__ */ jsx(TableCell, {
					className: "font-medium",
					children: f.nom || "—"
				}),
				/* @__PURE__ */ jsx(TableCell, {
					className: "text-muted-foreground",
					children: f.email || "—"
				}),
				/* @__PURE__ */ jsx(TableCell, {
					className: "text-muted-foreground",
					children: f.website || "—"
				}),
				/* @__PURE__ */ jsxs(TableCell, {
					className: "text-right whitespace-nowrap",
					children: [/* @__PURE__ */ jsx(Button, {
						variant: "ghost",
						size: "sm",
						onClick: () => ouvrirEdition(f),
						children: "Modifier"
					}), /* @__PURE__ */ jsx(Button, {
						variant: "ghost",
						size: "sm",
						"aria-label": `Supprimer ${f.nom ?? "ce fournisseur"}`,
						onClick: () => supprimer(f),
						children: /* @__PURE__ */ jsx(Trash2Icon, { className: "size-4 text-destructive" })
					})]
				})
			] }, f.id)) })] })
		}), /* @__PURE__ */ jsx(Dialog$1, {
			open: ouvert,
			onOpenChange: setOuvert,
			children: /* @__PURE__ */ jsxs(DialogContent, { children: [/* @__PURE__ */ jsxs(DialogHeader, { children: [/* @__PURE__ */ jsx(DialogTitle, { children: enEdition ? "Modifier le fournisseur" : "Nouveau fournisseur" }), /* @__PURE__ */ jsx(DialogDescription, { children: "Renseignez au moins le nom pour identifier ce fournisseur dans vos achats." })] }), /* @__PURE__ */ jsxs("form", {
				onSubmit: handleSubmit(onSubmit),
				noValidate: true,
				children: [/* @__PURE__ */ jsx(FieldGroup, { children: /* @__PURE__ */ jsxs(FieldSet, { children: [
					/* @__PURE__ */ jsx(FieldLegend, {
						variant: "label",
						children: "Coordonnées"
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
								placeholder: "contact@exemple.cd",
								"aria-invalid": !!errors.email,
								...register("email")
							}),
							/* @__PURE__ */ jsx(FieldError, { errors: [errors.email] })
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
								rows: 3,
								placeholder: "Ce qu'il fournit, conditions…",
								"aria-invalid": !!errors.description,
								...register("description")
							}),
							/* @__PURE__ */ jsx(FieldError, { errors: [errors.description] })
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
						children: isSubmitting ? "Enregistrement…" : enEdition ? "Enregistrer" : "Créer le fournisseur"
					})]
				})]
			})] })
		})]
	});
});
//#endregion
//#region app/routes/travailleurs/travailleurs.tsx
var travailleurs_exports = /* @__PURE__ */ __exportAll({ default: () => travailleurs_default });
var travailleurs_default = UNSAFE_withComponentProps(function Travailleurs() {
	const { businessId } = useBusiness();
	const charger = useCallback(() => listerAgents(businessId), [businessId]);
	const { donnees, chargement, erreur, recharger } = useListe(charger, !!businessId);
	const agir = async (promesse, enCours, succes) => {
		await toast.promise(promesse, {
			loading: enCours,
			success: () => {
				recharger();
				return succes;
			},
			error: (e) => e.message
		}).unwrap();
	};
	return /* @__PURE__ */ jsx(PageRessource, {
		titre: "Travailleurs",
		description: "Les agents rattachés à votre business. Ils rejoignent l'équipe en acceptant une invitation.",
		businessRequis: true,
		businessId,
		chargement,
		erreur,
		vide: donnees.length === 0,
		messageVide: "Aucun agent dans votre équipe. Invitez quelqu'un pour commencer.",
		onReessayer: recharger,
		children: /* @__PURE__ */ jsx("div", {
			className: "overflow-hidden rounded-lg border",
			children: /* @__PURE__ */ jsxs(Table, { children: [/* @__PURE__ */ jsx(TableHeader, { children: /* @__PURE__ */ jsxs(TableRow, { children: [
				/* @__PURE__ */ jsx(TableHead, { children: "Agent" }),
				/* @__PURE__ */ jsx(TableHead, { children: "Statut" }),
				/* @__PURE__ */ jsx(TableHead, { children: "Depuis" }),
				/* @__PURE__ */ jsx(TableHead, {
					className: "w-[1%] text-right",
					children: "Actions"
				})
			] }) }), /* @__PURE__ */ jsx(TableBody, { children: donnees.map((agent) => /* @__PURE__ */ jsxs(TableRow, { children: [
				/* @__PURE__ */ jsx(TableCell, {
					className: "font-medium",
					children: agent.userId
				}),
				/* @__PURE__ */ jsx(TableCell, { children: /* @__PURE__ */ jsx(Badge, {
					variant: agent.status === "ACTIF" ? "secondary" : "destructive",
					children: agent.status === "ACTIF" ? "Actif" : "Bloqué"
				}) }),
				/* @__PURE__ */ jsx(TableCell, {
					className: "text-muted-foreground",
					children: agent.createdAt ? new Date(agent.createdAt).toLocaleDateString("fr-FR") : "—"
				}),
				/* @__PURE__ */ jsxs(TableCell, {
					className: "text-right whitespace-nowrap",
					children: [agent.status === "ACTIF" ? /* @__PURE__ */ jsxs(Button, {
						variant: "ghost",
						size: "sm",
						onClick: () => agir(bloquerAgent(businessId, agent.id), "Blocage…", "Agent bloqué"),
						children: [/* @__PURE__ */ jsx(BanIcon, { className: "size-4" }), "Bloquer"]
					}) : /* @__PURE__ */ jsxs(Button, {
						variant: "ghost",
						size: "sm",
						onClick: () => agir(activerAgent(businessId, agent.id), "Activation…", "Agent réactivé"),
						children: [/* @__PURE__ */ jsx(CheckCircle2Icon, { className: "size-4" }), "Réactiver"]
					}), /* @__PURE__ */ jsx(Button, {
						variant: "ghost",
						size: "sm",
						"aria-label": "Retirer cet agent",
						onClick: () => agir(supprimerAgent(businessId, agent.id), "Retrait…", "Agent retiré"),
						children: /* @__PURE__ */ jsx(Trash2Icon, { className: "size-4 text-destructive" })
					})]
				})
			] }, agent.id)) })] })
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
	const result = await response.json();
	if (!response.ok) throw new Error(result.message || "Create data failed");
	return result;
};
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
	const onSubmit = async (data) => {
		const form = {
			nom: data.nom,
			...data.slogan?.trim() ? { slogan: data.slogan.trim() } : {},
			...data.website?.trim() ? { website: data.website.trim() } : {},
			...data.description?.trim() ? { description: data.description.trim() } : {}
		};
		await toast.promise(creer_business(form), {
			loading: "Création du business en cours…",
			success: () => {
				reset();
				navigate("/acceuil");
				return "Votre business a été créé";
			},
			error: (err) => err.message || "La création a échoué"
		}).unwrap();
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
	const navigate = useNavigate();
	if (!isLoaded) return /* @__PURE__ */ jsx("div", { children: "Loading authentication..." });
	if (!isSignedIn) navigate("/sign-up", { replace: true });
	return /* @__PURE__ */ jsx(Outlet, {});
};
var root_default = UNSAFE_withComponentProps(function App({ loaderData }) {
	const location = useLocation();
	const shouldHideNavbar = [
		"/",
		"/sign-in",
		"/sign-up",
		"/sign-in/factor-one",
		"/welcome"
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
		"module": "/assets/entry.client-B44Z6adk.js",
		"imports": [
			"/assets/rolldown-runtime-hePW80VL.js",
			"/assets/admin-BtS6y-sF.js",
			"/assets/clerk-RS1SG_Tj.js"
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
			"module": "/assets/root-BRTMlXn0.js",
			"imports": [
				"/assets/rolldown-runtime-hePW80VL.js",
				"/assets/admin-BtS6y-sF.js",
				"/assets/clerk-RS1SG_Tj.js",
				"/assets/dashboard-CbjJJbrC.js",
				"/assets/ui-BVD8b3OD.js",
				"/assets/profile-CLnHleqN.js",
				"/assets/switch-B0hxJjCq.js",
				"/assets/acceuil-DFiTNjLE.js",
				"/assets/home-DBYFGNSx.js",
				"/assets/notifications-BQTYrczU.js",
				"/assets/commandes-D9t7yzUw.js",
				"/assets/ventes-CWkYckbk.js",
				"/assets/articles-D62uVdvs2.js",
				"/assets/achats-Byd4dohw.js",
				"/assets/clients-DfujkNt6.js",
				"/assets/fournisseurs-B07G7vzF.js",
				"/assets/travailleurs-D8UD8Gws.js",
				"/assets/caisses-3jnr_ym9.js",
				"/assets/parametres-Dqtkjhmc.js",
				"/assets/page-BHM7HG-p.js",
				"/assets/page-Chm-XXSY.js",
				"/assets/welcome-D1W2lZVs.js",
				"/assets/page-D8siq90n.js",
				"/assets/promotions-CSMWynN7.js",
				"/assets/charts-CX2LHfGF.js",
				"/assets/vendor-BB_HCXhT.js",
				"/assets/card-DuTL90fD.js",
				"/assets/apis-B8R9BB44.js",
				"/assets/alert-Dw1x3RUG.js",
				"/assets/textarea-ClEOVw9l.js",
				"/assets/native-select-DpVQMhiZ.js"
			],
			"css": ["/assets/app-C0pQUMKt.css"],
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
			"module": "/assets/home-C5ADRk4t.js",
			"imports": [
				"/assets/home-DBYFGNSx.js",
				"/assets/rolldown-runtime-hePW80VL.js",
				"/assets/admin-BtS6y-sF.js",
				"/assets/clerk-RS1SG_Tj.js",
				"/assets/alert-Dw1x3RUG.js"
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
			"module": "/assets/docs-BnJRwLKJ.js",
			"imports": [
				"/assets/rolldown-runtime-hePW80VL.js",
				"/assets/admin-BtS6y-sF.js",
				"/assets/dashboard-CbjJJbrC.js",
				"/assets/ui-BVD8b3OD.js",
				"/assets/switch-B0hxJjCq.js",
				"/assets/alert-Dw1x3RUG.js",
				"/assets/charts-CX2LHfGF.js",
				"/assets/vendor-BB_HCXhT.js"
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
			"module": "/assets/page-DWpSH94h.js",
			"imports": [
				"/assets/page-BHM7HG-p.js",
				"/assets/rolldown-runtime-hePW80VL.js",
				"/assets/admin-BtS6y-sF.js",
				"/assets/clerk-RS1SG_Tj.js",
				"/assets/card-DuTL90fD.js"
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
			"module": "/assets/page-8nbdRn60.js",
			"imports": [
				"/assets/page-Chm-XXSY.js",
				"/assets/rolldown-runtime-hePW80VL.js",
				"/assets/admin-BtS6y-sF.js",
				"/assets/clerk-RS1SG_Tj.js",
				"/assets/card-DuTL90fD.js"
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
			"module": "/assets/welcome-IaiRLLKd.js",
			"imports": [
				"/assets/welcome-D1W2lZVs.js",
				"/assets/rolldown-runtime-hePW80VL.js",
				"/assets/admin-BtS6y-sF.js",
				"/assets/apis-B8R9BB44.js"
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
			"module": "/assets/acceuil-CAnanP9z.js",
			"imports": [
				"/assets/acceuil-DFiTNjLE.js",
				"/assets/rolldown-runtime-hePW80VL.js",
				"/assets/admin-BtS6y-sF.js"
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
			"module": "/assets/dashboard-jtal3xzL.js",
			"imports": [
				"/assets/dashboard-CbjJJbrC.js",
				"/assets/rolldown-runtime-hePW80VL.js",
				"/assets/admin-BtS6y-sF.js",
				"/assets/charts-CX2LHfGF.js"
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
			"module": "/assets/commandes-BjLIVFGv.js",
			"imports": [
				"/assets/commandes-D9t7yzUw.js",
				"/assets/rolldown-runtime-hePW80VL.js",
				"/assets/admin-BtS6y-sF.js"
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
			"module": "/assets/ventes-Be4hMFtM.js",
			"imports": [
				"/assets/ventes-CWkYckbk.js",
				"/assets/rolldown-runtime-hePW80VL.js",
				"/assets/admin-BtS6y-sF.js"
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
			"module": "/assets/page-TT-g2GDI.js",
			"imports": [
				"/assets/page-D8siq90n.js",
				"/assets/rolldown-runtime-hePW80VL.js",
				"/assets/admin-BtS6y-sF.js",
				"/assets/dashboard-CbjJJbrC.js",
				"/assets/vendor-BB_HCXhT.js",
				"/assets/ui-BVD8b3OD.js",
				"/assets/card-DuTL90fD.js",
				"/assets/textarea-ClEOVw9l.js",
				"/assets/apis-B8R9BB44.js",
				"/assets/charts-CX2LHfGF.js"
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
			"module": "/assets/profile-C7WOqcFk.js",
			"imports": [
				"/assets/profile-CLnHleqN.js",
				"/assets/rolldown-runtime-hePW80VL.js",
				"/assets/admin-BtS6y-sF.js",
				"/assets/clerk-RS1SG_Tj.js",
				"/assets/dashboard-CbjJJbrC.js",
				"/assets/vendor-BB_HCXhT.js",
				"/assets/ui-BVD8b3OD.js",
				"/assets/switch-B0hxJjCq.js",
				"/assets/card-DuTL90fD.js",
				"/assets/apis-B8R9BB44.js",
				"/assets/charts-CX2LHfGF.js"
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
			"module": "/assets/notifications-DuL86q_f.js",
			"imports": [
				"/assets/notifications-BQTYrczU.js",
				"/assets/rolldown-runtime-hePW80VL.js",
				"/assets/admin-BtS6y-sF.js"
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
			"module": "/assets/achats-DpRo4Pxj.js",
			"imports": [
				"/assets/achats-Byd4dohw.js",
				"/assets/rolldown-runtime-hePW80VL.js",
				"/assets/admin-BtS6y-sF.js",
				"/assets/native-select-DpVQMhiZ.js",
				"/assets/dashboard-CbjJJbrC.js",
				"/assets/charts-CX2LHfGF.js"
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
			"module": "/assets/travailleurs-By9symnu.js",
			"imports": [
				"/assets/travailleurs-D8UD8Gws.js",
				"/assets/rolldown-runtime-hePW80VL.js",
				"/assets/admin-BtS6y-sF.js",
				"/assets/dashboard-CbjJJbrC.js",
				"/assets/ui-BVD8b3OD.js",
				"/assets/charts-CX2LHfGF.js"
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
			"module": "/assets/clients-Wopo-WWf.js",
			"imports": [
				"/assets/clients-DfujkNt6.js",
				"/assets/rolldown-runtime-hePW80VL.js",
				"/assets/admin-BtS6y-sF.js",
				"/assets/ui-BVD8b3OD.js"
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
			"module": "/assets/fournisseurs-DnfQngPt.js",
			"imports": [
				"/assets/fournisseurs-B07G7vzF.js",
				"/assets/rolldown-runtime-hePW80VL.js",
				"/assets/admin-BtS6y-sF.js",
				"/assets/ui-BVD8b3OD.js",
				"/assets/textarea-ClEOVw9l.js"
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
			"module": "/assets/articles-CIuCsCcP.js",
			"imports": [
				"/assets/articles-D62uVdvs2.js",
				"/assets/rolldown-runtime-hePW80VL.js",
				"/assets/admin-BtS6y-sF.js",
				"/assets/textarea-ClEOVw9l.js",
				"/assets/native-select-DpVQMhiZ.js",
				"/assets/dashboard-CbjJJbrC.js",
				"/assets/charts-CX2LHfGF.js"
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
			"module": "/assets/promotions-DYMFKdec.js",
			"imports": [
				"/assets/promotions-CSMWynN7.js",
				"/assets/rolldown-runtime-hePW80VL.js",
				"/assets/admin-BtS6y-sF.js",
				"/assets/textarea-ClEOVw9l.js",
				"/assets/native-select-DpVQMhiZ.js",
				"/assets/dashboard-CbjJJbrC.js",
				"/assets/charts-CX2LHfGF.js"
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
			"module": "/assets/caisses-DtvWEe6Y.js",
			"imports": [
				"/assets/caisses-3jnr_ym9.js",
				"/assets/rolldown-runtime-hePW80VL.js",
				"/assets/admin-BtS6y-sF.js",
				"/assets/dashboard-CbjJJbrC.js",
				"/assets/native-select-DpVQMhiZ.js",
				"/assets/charts-CX2LHfGF.js"
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
			"module": "/assets/aides-CmDLymHb.js",
			"imports": ["/assets/rolldown-runtime-hePW80VL.js", "/assets/admin-BtS6y-sF.js"],
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
			"module": "/assets/parametres-CFro1KYP.js",
			"imports": [
				"/assets/parametres-Dqtkjhmc.js",
				"/assets/rolldown-runtime-hePW80VL.js",
				"/assets/admin-BtS6y-sF.js",
				"/assets/ui-BVD8b3OD.js",
				"/assets/card-DuTL90fD.js",
				"/assets/apis-B8R9BB44.js"
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
			"module": "/assets/businesses-D_9aZ2Bm.js",
			"imports": ["/assets/admin-BtS6y-sF.js", "/assets/rolldown-runtime-hePW80VL.js"],
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
			"module": "/assets/offres-DGQi5TJj.js",
			"imports": ["/assets/admin-BtS6y-sF.js", "/assets/rolldown-runtime-hePW80VL.js"],
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
			"module": "/assets/categories-CD9LMZ0R.js",
			"imports": ["/assets/admin-BtS6y-sF.js", "/assets/rolldown-runtime-hePW80VL.js"],
			"css": [],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		}
	},
	"url": "/assets/manifest-7f23e464.js",
	"version": "7f23e464",
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

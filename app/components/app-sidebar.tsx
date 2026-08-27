"use client"

import * as React from "react"

import { NavMain } from "./nav-main"
import { NavSecondary } from "./nav-secondary"
import { NavUser } from "./nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "./ui/sidebar"
import { Settings2Icon, CircleHelpIcon, SearchIcon, CommandIcon, Gauge, ShoppingCart, Building2, CircleDollarSign, Landmark, CirclePlus, CalendarArrowUp, Contact, ListCheck, SendToBack, UserRoundCog, FileText, Users, Home, Component } from "lucide-react"
import { NavBusiness } from "./nav-business"
import { NavAdmin } from "./nav-admin"
import { Link, useLocation } from "react-router"

const data = {
  user: {
    name: "demo",
    email: "demo@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Docs",
      url: "https://ui.shadcn.com/docs/components",
      icon: (
        <Component />
      ),
    },
    {
      title: "Acceuil",
      url: "/acceuil",
      icon: (
        <Home />
      ),
    },
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: (
        <Gauge />
      ),
    },
    {
      title: "Commandes",
      url: "/commandes",
      icon: (
        <CalendarArrowUp />
      ),
    },
    {
      title: "Historique des ventes",
      url: "/historique-des-ventes",
      icon: (
        <FileText />
      ),
    },
  ],
  navBusiness: [
    {
      title: "Articles",
      url: "/articles",
      icon: (
        <CirclePlus />
      ),
    },
    {
      title: "Achats",
      url: "/achats",
      icon: (
        <ShoppingCart />
      ),
    },
    {
      title: "Clients",
      url: "/clients",
      icon: (
        <Contact />
      ),
    },
    {
      title: "Fournisseurs",
      url: "/fournisseurs",
      icon: (
        <Building2 />
      ),
    },
    {
      title: "Caisses",
      url: "/caisses",
      icon: (
        <CircleDollarSign />
      ),
    },
    {
      title: "Agents",
      url: "/agents",
      icon: (
        <Users />
      ),
    },
  ],
  navAdmin: [
    {
      title: "Acteurs",
      url: "/admin/users",
      icon: (
        <UserRoundCog />
      ),
    },
    {
      title: "Businesses",
      url: "/admin/businesses",
      icon: (
        <Landmark />
      ),
    },
    {
      title: "Offres",
      url: "/admin/offres",
      icon: (
        <SendToBack />
      ),
    },
    {
      title: "Catégories",
      url: "/admin/categories",
      icon: (
        <ListCheck />
      ),
    },
  ],
  navSecondary: [
    {
      title: "Paramètres",
      url: "/parametres",
      icon: (
        <Settings2Icon
        />
      ),
    },
    {
      title: "Recherche",
      url: "/recherches",
      icon: (
        <SearchIcon
        />
      ),
    },
    {
      title: "Aides",
      url: "/aides",
      icon: (
        <CircleHelpIcon
        />
      ),
    },
  ],
}
export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              className="data-[slot=sidebar-menu-button]:p-1.5!"
              render={<Link to="/" />}
            >
              <CommandIcon className="size-5!" />
              <span className="text-base font-semibold">Ratel Market</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavBusiness items={data.navBusiness} />
        <NavAdmin items={data.navAdmin} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>  
  )
}

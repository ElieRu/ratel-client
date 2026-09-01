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
import { Settings2Icon, CommandIcon, Gauge, ShoppingCart, Building2, CircleDollarSign, Landmark, CirclePlus, CalendarArrowUp, Contact, ListCheck, SendToBack, UserRoundCog, FileText, Users, Home, Component } from "lucide-react"
import { Link } from "react-router"

const data = {
  user: {
    name: "demo",
    email: "demo@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Acceuil",
      url: "/acceuil",
      icon: (
        <Home />
      ),
    },
    {
      title: "Tableau de bord",
      url: "/dashboard",
      icon: (
        <Gauge />
      ),
    },
    {
      title: "Mes commandes",
      url: "/commandes",
      icon: (
        <CalendarArrowUp />
      ),
    },
    {
      title: "Historique des ventes",
      url: "/ventes",
      icon: (
        <FileText />
      ),
    },
    {
      title: "Gestion des articles",
      url: "/articles",
      icon: (
        <CirclePlus />
      ),
    },
    {
      title: "Opération d'achats",
      url: "/achats",
      icon: (
        <ShoppingCart />
      ),
    },
    {
      title: "Clients",
      url: "/clients",
      icon: (
        <Users />
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
      title: "Travailleurs",
      url: "/travailleurs",
      icon: (
        <UserRoundCog />
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
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>  
  )
}

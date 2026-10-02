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
import { CommandIcon, Gauge, ShoppingCart, Building2, CircleDollarSign, Landmark, CirclePlus, CalendarArrowUp, ListCheck, SendToBack, UserRoundCog, FileText, Users, Home, ChartPie, Bell, BadgePercent } from "lucide-react"
import { Link } from "react-router"
import { useUser } from "@clerk/react-router"
import { useBusiness } from "@/lib/business-context"

const data = {
  user: {
    name: "",
    email: "",
    avatar: "",
  },
  groupeUtilisateur: {
      label: "Utilisateur",
      items: [
        { title: "Acceuil", url: "/acceuil", icon: <Home /> },
        { title: "Tableau de bord", url: "/dashboard", icon: <Gauge /> },
        { title: "Mes commandes", url: "/commandes", icon: <CalendarArrowUp /> },
        { title: "Historique des ventes", url: "/ventes", icon: <FileText /> },
      ],
  },

  lienCreationBusiness: {
    title: "Créer un business",
    url: "/businesses/creer",
    icon: <ChartPie />,
  },

  /** Affiché seulement à qui possède déjà un business. */
  groupeBusiness: {
    label: "Business",
    items: [
      { title: "Gestion des articles", url: "/articles", icon: <CirclePlus /> },
      { title: "Promotions", url: "/promotions", icon: <BadgePercent /> },
      { title: "Opération d'achats", url: "/achats", icon: <ShoppingCart /> },
      { title: "Clients", url: "/clients", icon: <Users /> },
      { title: "Fournisseurs", url: "/fournisseurs", icon: <Building2 /> },
      { title: "Travailleurs", url: "/travailleurs", icon: <UserRoundCog /> },
      { title: "Caisses", url: "/caisses", icon: <CircleDollarSign /> },
    ],
  },

  /** Réservé aux rôles ADMIN et MANAGER. */
  groupeAdmin: {
    label: "Admin",
    items: [
      { title: "Businesses", url: "/admin/businesses", icon: <Landmark /> },
      { title: "Offres", url: "/admin/offres", icon: <SendToBack /> },
      { title: "Catégories", url: "/admin/categories", icon: <ListCheck /> },
    ],
  },
}
export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { user, isLoaded } = useUser();
  const { aUnBusiness, estAdmin, pret } = useBusiness();

  // Tant que la session n'est pas résolue, la création n'est pas proposée.
  const groupes = [
    {
      ...data.groupeUtilisateur,
      items: [
        ...data.groupeUtilisateur.items,
        ...(pret && !aUnBusiness ? [data.lienCreationBusiness] : []),
      ],
    },
    ...(pret && aUnBusiness ? [data.groupeBusiness] : []),
    ...(pret && estAdmin ? [data.groupeAdmin] : []),
  ];

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
        <NavMain groupes={groupes} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser
          user={user ? {
            name: user.fullName,
            email: user.emailAddresses[0]?.emailAddress,
            avatar: user.imageUrl,
          } : {
            name: "",
            email: "",
            avatar: "",
          }}
          isLoaded={isLoaded}
        />
      </SidebarFooter>
    </Sidebar>
  )
}

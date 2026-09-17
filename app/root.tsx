import type { Route } from "./+types/root";
import "./app.css";
import { SidebarInset, SidebarProvider } from "./components/ui/sidebar";
import { AppSidebar } from "./components/app-sidebar";
import { SiteHeader } from "./components/site-header";
import { clerkMiddleware, rootAuthLoader } from '@clerk/react-router/server'

import { isRouteErrorResponse, Links, Meta, Navigate, Outlet, Route as MyRoute, Routes, Scripts, ScrollRestoration, useLocation, useNavigate, Link } from 'react-router'
import stylesheet from './app.css?url'
import { ClerkProvider, useAuth } from '@clerk/react-router'

import AcceuilPage from "./routes/acceuil/acceuil";
import Home from "./routes/home";
import Profile from "./routes/profile/profile";
import Notifications from "./routes/notifications/notifications";
import Dashboard from "./routes/dashboard/dashboard";
import Commandes from "./routes/commandes/commandes";
import Ventes from "./routes/ventes/ventes";
import Articles from "./routes/articles/articles";
import Achats from "./routes/achats/achats";
import Clients from "./routes/clients/clients";
import Fournisseurs from "./routes/fournisseurs/fournisseurs";
import Travailleurs from "./routes/travailleurs/travailleurs";
import Caisses from "./routes/caisses/caisses";
import Businesses from "./routes/admin/businesses";
import Offres from "./routes/admin/offres";
import Categories from "./routes/admin/categories";
import Parametres from "./routes/parametres/parametres";
import SignInPage from "./auth/sign-in/[[...sign-in]]/page";
import { frFR } from '@clerk/localizations/fr-FR'
import SignUpPage from "./auth/sign-up/[[...sign-up]]/page";
import Welcome from "./routes/welcome/welcome";
import { useState } from "react";

export const middleware: Route.MiddlewareFunction[] = [clerkMiddleware()]
export const loader = (args: Route.LoaderArgs) => rootAuthLoader(args)

export const links: Route.LinksFunction = () => [
  { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
  {
    rel: 'preconnect',
    href: 'https://fonts.gstatic.com',
    crossOrigin: 'anonymous',
  },
  {
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap',
  },
  { rel: 'stylesheet', href: stylesheet },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <SidebarProvider
          style={
            {
              "--sidebar-width": "calc(var(--spacing) * 72)",
              "--header-height": "calc(var(--spacing) * 12)",
            } as React.CSSProperties
          }
        >
          {children}
        </SidebarProvider>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export const ProtectedRoute = () => {
  const { isLoaded, isSignedIn } = useAuth();

  if (!isLoaded) return <div>Loading authentication...</div>;

  if (!isSignedIn) {
    const navigate = useNavigate();
    navigate('/sign-up', { replace: true });
  }
  
};

export default function App({ loaderData }: Route.ComponentProps) {
  const location = useLocation();
  const hideNavbarPaths = [
    '/',
    '/login',
    '/sign-in',
    '/sign-up',
    '/sign-in/factor-one',
    '/welcome'
  ];
  const shouldHideNavbar = hideNavbarPaths.includes(location.pathname);
  let [page, setPage] = useState("");

  return (
    <>
      <ClerkProvider loaderData={loaderData} localization={frFR}>
        {!shouldHideNavbar && <AppSidebar variant="inset" />}
        <SidebarInset>
          {!shouldHideNavbar && <SiteHeader title={`${page}`} />}
          <div className={`flex flex-1 flex-col md:rounded-xl ${!shouldHideNavbar && 'md:m-4'}`}>
            <div className={`flex flex-col gap-4 ${!shouldHideNavbar && 'py-4'} md:gap-6 ${!shouldHideNavbar && 'md:py-1'}`}>
              <Link to="/docs">Documentstion</Link>
              <Outlet />
              <Routes>
                <MyRoute path="/" element={<Home />} />
                <MyRoute path="/sign-in/*" element={<SignInPage />} />
                <MyRoute path="/sign-up/*" element={<SignUpPage />} />

                <MyRoute element={<ProtectedRoute />}>
                  <MyRoute path="/acceuil" element={<AcceuilPage />} />
                  <MyRoute path="/welcome" element={<Welcome />} />
                  <MyRoute path="/dashboard" element={<Dashboard />} />
                  <MyRoute path="/commandes" element={<Commandes />} />
                  <MyRoute path="/ventes" element={<Ventes />} />
                  <MyRoute path="/articles" element={<Articles />} />
                  <MyRoute path="/achats" element={<Achats />} />
                  <MyRoute path="/clients" element={<Clients />} />
                  <MyRoute path="/fournisseurs" element={<Fournisseurs />} />
                  <MyRoute path="/travailleurs" element={<Travailleurs />} />
                  <MyRoute path="/caisses" element={<Caisses />} />
                  <MyRoute path="/admin/businesses" element={<Businesses />} />
                  <MyRoute path="/admin/offres" element={<Offres />} />
                  <MyRoute path="/admin/categories" element={<Categories />} />
                  <MyRoute path="/notifications" element={<Notifications />} />
                  <MyRoute path="/profile" element={<Profile />} />
                  <MyRoute path="/parametres" element={<Parametres />} />
                </MyRoute>
              </Routes>
            </div>
          </div>
        </SidebarInset>
      </ClerkProvider>
    </>
  )
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}

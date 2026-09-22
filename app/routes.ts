import {
  type RouteConfig,
  route,
  index,
  layout,
  prefix,
} from "@react-router/dev/routes";

const nav_admin = "./routes/admin";

export default [
  index("./routes/home.tsx"),
  route("/docs", `./routes/docs.tsx`),
  route("/sign-in/*", `./auth/sign-in/[[...sign-in]]/page.tsx`),
  route("/sign-up/*", `./auth/sign-up/[[...sign-up]]/page.tsx`),
  // route("/api/webhooks(.*)", ""),
  
  // main* routes
  route("/welcome", `./routes/welcome/welcome.tsx`),
  route("/acceuil", `./routes/acceuil/acceuil.tsx`),
  route("/dashboard", `./routes/dashboard/dashboard.tsx`),
  route("/commandes", `./routes/commandes/commandes.tsx`),
  route("/ventes", `./routes/ventes/ventes.tsx`),

  // business* routes
  route("/businesses", `./routes/businesses/page.tsx`),
  route("/profile", `./routes/profile/profile.tsx`),
  route("/notifications", `./routes/notifications/notifications.tsx`),
  route("/achats", `./routes/achats/achats.tsx`),
  route("/travailleurs", `./routes/travailleurs/travailleurs.tsx`),
  route("/clients", `./routes/clients/clients.tsx`),
  route("/fournisseurs", `./routes/fournisseurs/fournisseurs.tsx`),
  route("/articles", `./routes/articles/articles.tsx`),
  route("/promotions", `./routes/promotions/promotions.tsx`),
  route("/caisses", `./routes/caisses/caisses.tsx`),
  route("/aides", `./routes/aides/aides.tsx`),
  route("/parametres", `./routes/parametres/parametres.tsx`),

  // admin* routes
  route("/admin/businesses", `${nav_admin}/businesses.tsx`),
  route("/admin/offres", `${nav_admin}/offres.tsx`),
  route("/admin/categories", `${nav_admin}/categories.tsx`),

  // layout("./auth/layout.tsx", [
  //   route("sign-in", "../app/auth/sign-in/[[...sign-in]]/page.tsx"),
  //   route("sign-up", "../app/auth/sign-up/[[...sign-up]]/page.tsx"),
  //   route("register", "./auth/register.tsx"),
  // ]),

  // ...prefix("concerts", [
    // index("./routes/home.tsx"),
    // route(":city", "./concerts/city.tsx"),
    // route("trending", "./concerts/trending.tsx"),
  // ]),
] satisfies RouteConfig;


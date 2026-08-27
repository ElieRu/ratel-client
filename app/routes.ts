// import { 
//     type RouteConfig, 
//     route, 
// } from "@react-router/dev/routes";

// export default [
//     route("/", "routes/home.tsx"),
//     route("/admins", "routes/admins.tsx"),
// ] satisfies RouteConfig;


import {
  type RouteConfig,
  route,
  index,
  layout,
  prefix,
} from "@react-router/dev/routes";

const main = "./routes/main";
const nav_business = "./routes/business";
const nav_admin = "./routes/admin";
const nav_secondary = "./routes/secondary";
const nav_user = "./routes/user";
export default [
  index("./routes/home.tsx"),

  route("/register", `./routes/auth/register.tsx`),
  route("/login", `./routes/auth/login.tsx`),

  // main* routes
  route("/acceuil", `${main}/acceuil.tsx`),
  route("/dashboard", `${main}/dashboard.tsx`),
  route("/commandes", `${main}/commandes.tsx`),
  route("/historique-des-ventes", `${main}/historique-des-ventes.tsx`),

  // business* routes
  route("/achats", `${nav_business}/achats.tsx`),
  route("/agents", `${nav_business}/agents.tsx`),
  route("/clients", `${nav_business}/clients.tsx`),
  route("/fournisseurs", `${nav_business}/fournisseurs.tsx`),
  route("/articles", `${nav_business}/articles.tsx`),
  route("/promotions", `${nav_business}/promotions.tsx`),
  route("/caisses", `${nav_business}/caisses.tsx`),

  // admin* routes
  route("/admin/users", `${nav_admin}/users.tsx`),
  route("/admin/businesses", `${nav_admin}/businesses.tsx`),
  route("/admin/offres", `${nav_admin}/offres.tsx`),
  route("/admin/categories", `${nav_admin}/categories.tsx`),

  // secondary* routes
  route("/parametres", `${nav_secondary}/parametres.tsx`),
  route("/recherches", `${nav_secondary}/recherches.tsx`),
  route("/aides", `${nav_secondary}/aides.tsx`),

  // user* routes
  route("/profile", `${nav_user}/profile.tsx`),
  route("/notifications", `${nav_user}/notifications.tsx`),
  route("/mon-compte", `${nav_user}/compte.tsx`),

  // layout("./auth/layout.tsx", [
    // route("sign-in", "../app/auth/sign-in/[[...sign-in]]/page.tsx"),
    // route("sign-up", "../app/auth/sign-up/[[...sign-up]]/page.tsx"),
  //   route("register", "./auth/register.tsx"),
  // ]),

  // ...prefix("concerts", [
    // index("./routes/home.tsx"),
    // route(":city", "./concerts/city.tsx"),
    // route("trending", "./concerts/trending.tsx"),
  // ]),
] satisfies RouteConfig;


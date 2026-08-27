import type { Route } from "./+types/recherches";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "My Admin App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function RecherchePage() {
  return <div>
    <h1>Accueil</h1>
  </div>;
}

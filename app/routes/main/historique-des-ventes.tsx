import type { Route } from "./+types/historique-des-ventes";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "React App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function HistoriqueDesVentesPage() {
  return <div>
    <h1>historique des ventes</h1>
  </div>;
}

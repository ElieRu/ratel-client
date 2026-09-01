import type { Route } from "./+types/ventes";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "React App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Ventes() {
  return <div>
    <h1>historique des ventes</h1>
  </div>;
}

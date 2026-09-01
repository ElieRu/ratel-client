import type { Route } from "./+types/travailleurs";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "My Admin App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Travailleurs() {
  return <div>
    <h1>Achats</h1>
  </div>;
}

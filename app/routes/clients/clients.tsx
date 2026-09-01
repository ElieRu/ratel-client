import type { Route } from "./+types/clients";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "My Admin App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Clients() {
  return <div>
    <h1>Achats</h1>
  </div>;
}

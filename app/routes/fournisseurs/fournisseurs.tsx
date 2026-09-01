import type { Route } from "./+types/fournisseurs";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "My Admin App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Fournisseurs() {
  return <div>
    <h1>fournisseurs</h1>
  </div>;
}

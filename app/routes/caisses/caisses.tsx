import type { Route } from "./+types/caisses";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "My Admin App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Caisses() {
  return <div>
    <h1>caisse</h1>
  </div>;
}

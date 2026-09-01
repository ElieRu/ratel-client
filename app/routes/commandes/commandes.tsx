import type { Route } from "./+types/commandes";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "React App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Commandes() {
  return <div>
    <h1>commandes</h1>
  </div>;
}

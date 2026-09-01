import type { Route } from "./+types/categories";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "My Admin App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Categories() {
  return <div>
    <h1>categorie</h1>
  </div>;
}

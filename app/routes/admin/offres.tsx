import type { Route } from "./+types/offres";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "My Admin App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Offres() {
  return <div>
    <h1>offres</h1>
  </div>;
}

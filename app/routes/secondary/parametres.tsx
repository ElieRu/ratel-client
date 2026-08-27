import type { Route } from "./+types/parametres";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "My Admin App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function ParametrePage() {
  return <div>
    <ul>
      <li>application</li>
      <li>devises</li>
    </ul>
  </div>;
}

import type { Route } from "./+types/agents";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "My Admin App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function AgentPage() {
  return <div>
    <h1>Achats</h1>
  </div>;
}

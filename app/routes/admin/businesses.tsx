import type { Route } from "./+types/businesses";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "My Admin App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Businesses() {
  return <div>
    <h1>user</h1>
  </div>;
}

import type { Route } from "./+types/compte";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "My Admin App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function ComptePage() {
  return <div>
    <h1>compte</h1>
  </div>;
}

import type { Route } from "./+types/aides";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "My Admin App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function AidePage() {
  return <div>
    <h1>aides</h1>
  </div>;
}

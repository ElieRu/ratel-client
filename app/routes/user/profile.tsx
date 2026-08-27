import type { Route } from "./+types/profile";
export function meta({ }: Route.MetaArgs) {
  return [
    { title: "My Admin App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function ProfilePage() {
  return <div>
    profile
  </div>;
}

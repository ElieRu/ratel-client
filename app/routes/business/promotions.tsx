import type { Route } from "./+types/promotions";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "React App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function PromotionPage() {
  return <div>
    <h1>promotions</h1>
  </div>;
}

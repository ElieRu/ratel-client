import { DataTable } from "@/components/data-table";
import type { Route } from "./+types/dashboard";
import data from "../../data.json"

export function meta({}: Route.MetaArgs) {
  return [
    { title: "React App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Dashboard() {
  return <div>
    <DataTable data={data} />
  </div>;
}

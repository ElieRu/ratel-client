"use client"

import { Link } from "react-router";
import type { Route } from "./+types/welcome";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Bienvenu sur Ratel Market" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Welcome() {
  return <>
    <p>the welcome page</p>
    <Link to='/'>Homa page</Link>
  </>
    ;
}

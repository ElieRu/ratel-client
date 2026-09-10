"use client"

import { Link } from "react-router";
import type { Route } from "./+types/acceuil";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "My Admin App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Acceuil() {
  return <>
    <p>the same done with design</p>
    <ul>
      <li><Link to={'https://react-hook-form.com/'}>React Form</Link></li>
      <li><Link to={'https://clerk.com/docs'}>Clerck</Link></li>
      <li><Link to={'https://ui.shadcn.com/docs/components'}>Shadcn doc</Link></li>
      <li><Link to={'https://blocks.so/'}>Blocks</Link></li>
      <li><Link to={'https://play.blocks.so/'}>Play Blocks</Link></li>
      <li><Link to={'https://shadcnstudio.com/blocks/free'}>shadcn studio</Link></li>
      <li><Link to={'https://shadcnspace.com/components'}>shadcn space</Link></li>
    </ul>
  </>
    ;
}

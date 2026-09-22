import { Link } from "react-router";
import { API } from "@/lib/utils";
import { Alert, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Show, SignUpButton, UserButton } from "@clerk/react-router";
// import { Show, UserButton, getToken } from '@clerk/react-router'

export default function Home() {
  return (
    <div>
      <header className="flex items-center justify-center py-8 px-4">

        <Show when="signed-in">
          <UserButton />
        </Show>
      </header>
      <h1>Welcome back</h1>
      <br />
      <Link to={'/acceuil'}>Acceuil</Link>
      <br />
      <Show when="signed-out">
        <br />
        <Link to={'/sign-in'}>login</Link>
        <br />
        <br />
        <Link to={'/sign-up'}>New account up</Link>
        <br />
      </Show>
    </div>
  )
}



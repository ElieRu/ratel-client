import { Link } from "react-router";
import { API } from "@/lib/utils";
import { Alert, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { SignUpButton } from "@clerk/react-router";
// import { Show, UserButton, getToken } from '@clerk/react-router'

export default function Home() {
  const my_route = async () => {
    const res = await fetch(`${API}/protected`, {
      method: "GET",
      credentials: 'include',
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    console.log(data);
  }


  return (
    <div>
      <header className="flex items-center justify-center py-8 px-4">
        {/* <Show when="signed-out">
          <br />
          <Link to={'/sign-in'}>sign-in</Link>
          <br />
          <Link to={'/sign-up'}>Sign up</Link>
          <br />
        </Show>
        <Show when="signed-in">
          <UserButton />
        </Show> */}
      </header>
      <h1>Welcome back</h1>
      <br />
      <Link to={'/acceuil'}>Acceuil</Link>
      <br />
      <SignUpButton>Desconnected</SignUpButton>
      <br />
      <Button variant="outline" className="border-destructive text-destructive hover:bg-destructive/10">Destructive Outline</Button>
      <button onClick={my_route}>my route</button>
    </div>
  )
}



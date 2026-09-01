import { Link } from "react-router";
import { API } from "~/lib/utils";
import { Show, UserButton, getToken } from '@clerk/react-router'

export default function Home() {
  const protected_route = async () => {
    const res = await fetch(`${API}/auth/protected`, {
      method: "GET",
      credentials: 'include',
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    console.log(data);
  }

  const protectedCall = async () => {
    const token = await getToken();
    const res = await fetch('http://localhost:3000/protected', {
      method: 'GET',
      // credentials: 'same-origin',
      headers: {
        'Authorization': `${token}`,
        'Content-Type': 'application/json',
      },
    });
    const data = await res.json();
    console.log(data);
  };
  return (
    <div>
      <header className="flex items-center justify-center py-8 px-4">
        <Show when="signed-out">
          <br />
          <Link to={'/sign-in'}>sign-in</Link>
          <br />
          <Link to={'/sign-up'}>Sign up</Link>
          <br />
          {/* <SignInButton /> */}
          {/* <SignUpButton /> */}
        </Show>
        <Show when="signed-in">
          <UserButton />
        </Show>
      </header>
      <h1>Welcome back</h1>
      <br />
      <Link to={'/acceuil'}>Acceuil</Link>
      <button onClick={protectedCall}>call protected route</button>
    </div>
  )
}




"use client"

import { useNavigate } from "react-router";
import { API } from "~/lib/utils";

export default function LoginPage() {
  const navigation = useNavigate();

  const submit = async () => {
    const response = await fetch(`${API}/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName: "John",
        email: "john90@gmail.com",
        password: "bnbnbnbnbb",
      }),
    }).then(async (res) => {
      navigation("/", { replace: true });
      console.log(await res.json());
    });
  }

  const submitLogin = async () => {
    const res = await fetch(`${API}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: "john@gmail.com",
        password: "bnbnbnbnbb",
      }),
    });
    const data = await res.json();
    if (data.user) navigation("/", { replace: true });
    console.log(data);
  }

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

  const logout = async () => {
    const res = await fetch(`${API}/auth/logout`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    console.log(data);    
  }

  // useEffect(() => {
  //   const getCoockie = async () => {
  //     return await fetch("http://localhost:3000/auth/get-cookies", {
  //       method: "GET",
  //       // headers: {
  //       //   "Content-Type": "application/json",
  //       // },
  //     });
  //     }
  //     getCoockie();
  // }, []);

  return (
    <div>
      
    </div>
    // <div className="flex min-h-svh flex-col items-center justify-center bg-muted p-6 md:p-10">
    //   <div className="w-full max-w-sm md:max-w-4xl">
    //     <LoginForm />
    //   </div>
    // </div>
  )
}

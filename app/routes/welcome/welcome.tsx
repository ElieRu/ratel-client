"use client"

import { Link } from "react-router";
import type { Route } from "./+types/welcome";
import { useEffect } from "react";
import { creer_user, is_welcome } from "@/lib/apis";
import { useNavigate } from "react-router";
import { Button } from "@/components/ui/button";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Bienvenu sur Ratel Market" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Welcome() {
  const navigate = useNavigate();
  useEffect(() => {
    const creerUser = async () => {
      await creer_user().then((res) => {
        if (!res.success && res.redirect) navigate('/', { replace: true });
      });
    }
    creerUser()
  }, []);

  const isWelcome = async () => {
    await is_welcome().then((res) => {
      if (res.success) navigate('/');
    });
  }

  return <>
    <p>the welcome page</p>
    <Link to='/'>Home page</Link>

    <Button className={'primary'} onClick={isWelcome}>Home page</Button>
  </>
    ;
}

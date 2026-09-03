import { Button } from "~/components/ui/button";
import type { Route } from "./+types/parametres";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "~/components/ui/dialog";
import { AlertTriangleIcon } from "lucide-react";
import { useState } from "react";
import { SignOutButton, } from "@clerk/react-router";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "~/components/ui/card";
import { getRemoveAccount } from "~/lib/apis";


export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Parametres" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Parametres() {
  const [open, setOpen] = useState(false);

  const removeAccount = async () => {
    await getRemoveAccount();
  }

  return <div>
    <li>application</li>
    <li>devises</li>
    <Card>
      <CardHeader>
        <CardTitle>Danger zone</CardTitle>
        <CardDescription>Description</CardDescription>
        <CardContent>
          <Dialog onOpenChange={setOpen} open={open}>
            <DialogTrigger render={<Button variant="destructive" />}>
              Supprimer le comte
            </DialogTrigger>
            <DialogContent className="sm:max-w-lg">
              <div className="flex items-start space-x-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-red-100">
                  <AlertTriangleIcon className="h-6 w-6 text-red-600" />
                </div>
                <DialogHeader>
                  <DialogTitle>Supprimer le compte</DialogTitle>
                  <DialogDescription>
                    Are you sure you want to delete your account? All of your data
                    will be permanently removed. This action cannot be undone.
                  </DialogDescription>
                </DialogHeader>
              </div>
              <DialogFooter>
                <Button variant="destructive" onClick={removeAccount}>
                  <SignOutButton>Supprimer</SignOutButton>
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </CardContent>
      </CardHeader>
    </Card>
  </div>;
}

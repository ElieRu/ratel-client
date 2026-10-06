import { Button } from "@/components/ui/button";
import type { Route } from "./+types/parametres";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { AlertTriangleIcon } from "lucide-react";
import { useState } from "react";
// import { SignOutButton, } from "@clerk/react-router";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { supprimer_user } from "@/lib/apis";
import { useBusiness } from "@/lib/business-context";
import { GestionDevises } from "@/components/devises/gestion-devises";
// import { Show } from "@clerk/react-router";


export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Parametres" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Parametres() {
  const [open, setOpen] = useState(false);
  const { businessId } = useBusiness();

  const removeAccount = async () => {
    await supprimer_user();
  }

  return <div className="space-y-4 p-4 lg:p-6">
    {businessId && (
      <Card>
        <CardContent className="pt-6">
          <GestionDevises inline />
        </CardContent>
      </Card>
    )}
    <Card>
      <CardHeader>
        <CardTitle>Zone de danger</CardTitle>
        <CardDescription>Gérez les paramètres sensibles de votre compte et de votre business.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <section className="space-y-3 rounded-lg border border-destructive/40 p-4">
          <div>
            <h2 className="font-medium">Suppression du compte</h2>
            <p className="text-sm text-muted-foreground">
              La suppression du compte est définitive.
            </p>
          </div>
          <Dialog onOpenChange={setOpen} open={open}>
            <DialogTrigger render={<Button variant="destructive" />}>
              Supprimer le compte
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
                  {/* <Show when="signed-in">
                    <SignOutButton>Supprimer</SignOutButton>
                  </Show> */}
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </section>
      </CardContent>
    </Card>
  </div>;
}

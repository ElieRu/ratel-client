"use client";

import { CheckCircle2Icon } from "lucide-react";
import {
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export default function SuccessMessage({ type }: { type: 'EMAIL' | 'PHONE' }) {
    return (
        <div className="flex flex-col items-center text-center gap-4 py-2">
            <div className="flex items-center justify-center size-16 rounded-full bg-teal-400/10 text-teal-400">
                <CheckCircle2Icon size={32} strokeWidth={1.5} />
            </div>
            <DialogHeader className="items-center">
                <DialogTitle className="text-lg">Message de succès !</DialogTitle>
                <DialogDescription>
                    Votre {type == 'EMAIL' ? 'adresse mail' : 'numéro de téléphone'} a été verifié avec succès !
                </DialogDescription>
            </DialogHeader>
            <DialogClose render={<Button className="w-full cursor-pointer hover:bg-primary/80" />}>
                Fermer
            </DialogClose>
        </div>
    );
}

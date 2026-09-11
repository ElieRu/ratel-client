"use client"

import { Loader2, Plus } from "lucide-react";
import { Button } from "../ui/button";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { useRef, useState } from "react";
import { contactVerfication, createContact } from "@/lib/apis";
import { ContactSchema, type Contact } from "@/lib/validations";
import type { Response } from "@/lib/types";
import { toast } from "../ui/toast";
import InputOTPDemo from "./input-opt";
import SuccessMessage from "./success-message";
import { VerificationForm } from "./verification";
import { FormContact } from "./form-contact";

export type HideType = 'form-contact' | 'form-token' | 'success'

export function Form({ type, new_contact }: { type: 'PHONE' | 'EMAIL', new_contact: (newContact: Contact) => void }) {

    const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
    // New Contact Form State
    const [form, setForm] = useState<Contact>({
        type: type as Contact["type"],
        phone: "",
        email: "",
    });
    
    const [isLoaded, setIsLoaded] = useState(false);

    const [hide, setHide] = useState<HideType>("form-contact");
    const [contactId, setContactId] = useState("");    

    const closeDialog = () => {
        setForm({
            ...form,
            phone: "",
            email: ""
        });
    }

    return <DialogContent className="sm:max-w-[425px]" showCloseButton={false}>
        <DialogHeader className={`${hide !== 'success' ? '' : 'hidden'}`}>
            <DialogTitle>Create Contact</DialogTitle>
            <DialogDescription>
                Anyone who has this link will be able to view this.
            </DialogDescription>
        </DialogHeader>

        {/* contact validation form */}
        <div className={`space-y-4 py-2 ${hide == 'form-contact' ? '' : 'hidden'}`}>
            <FormContact 
                isLoaded={isLoaded}
                setIsLoaded={(v: boolean) => setIsLoaded(v)}
                form={form}
                setForm={(v: Contact) => setForm(v)}
                setContactId={(v: string) => setContactId(v)}
                new_contact={new_contact}
                setHide={(v: HideType) => setHide(v)}
                closeDialog={closeDialog}
            />
        </div>

        {/* form to verify the contacts */}
        <div className={`space-y-4 py-2 ${hide == 'form-token' ? '' : 'hidden'}`}>
            <VerificationForm
                isLoaded={isLoaded}
                setIsLoaded={(v: boolean) => setIsLoaded(v)}
                contactId={contactId}
                setHide={(v: HideType) => setHide(v)}
                closeDialog={closeDialog}
            />
        </div>

        {/* the box dedicated to succced information  */}
        <div className={`${hide == 'success' ? '' : 'hidden'}`}>
            <SuccessMessage type="EMAIL" />
        </div>

    </DialogContent>
}



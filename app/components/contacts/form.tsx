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

export function Form({ type, new_contact }: { type: 'PHONE' | 'EMAIL', new_contact: (newContact: Contact) => void }) {

    const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
    // New Contact Form State
    const [form, setForm] = useState<Contact>({
        type: type as Contact["type"],
        phone: "",
        email: "",
    });
    const [errors, setErrors] = useState<Partial<Record<keyof Contact, string>>>({});
    const [response, setResponse] = useState<Response>({
        success: null,
        message: "",
        data: null
    });
    const [isLoaded, setIsLoaded] = useState(false);
    const [hideForm, setHideForm] = useState(false);
    const [contactId, setContactId] = useState("");

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        setResponse({
            success: false,
            message: "",
            data: null
        });
        setIsLoaded(false);
        const result = ContactSchema.safeParse(form);
        if (!result.success) {
            const fieldErrors: Partial<Record<keyof Contact, string>> = {};
            result.error.issues.forEach((issue) => {
                const fieldName = issue.path[0] as keyof Contact;
                fieldErrors[fieldName] = issue.message;
            });
            setErrors(fieldErrors);
        } else {
            setIsLoaded(true);
            await createContact(form).then((res) => {
                setErrors({});
                setIsLoaded(true);
                if (!res.success) {
                    setResponse({
                        ...response,
                        message: res.message
                    });
                    // i must pick informations*
                    // setErrors(res.errors);
                    // setErrors({});
                    setIsLoaded(false);
                }
                if (res.success) {
                    setForm({
                        ...form,
                        phone: "",
                        email: "",
                    });
                    setResponse({
                        success: res.success,
                        message: res.message,
                        data: res.data
                    });
                    setContactId(res.data.id);
                    new_contact(res.data);
                    setErrors({});
                    setHideForm(true);
                    setIsLoaded(false);
                }
            }).catch((err) => {
                console.log(err);
                // setErrors({});
                // setFormError(err.message);
            });
            // setIsAddDialogOpen(false);
        }
    };

    const closeDialog = () => {
        setForm({
            ...form,
            phone: "",
            email: ""
        });
    }

    const closeButtonRef = useRef<HTMLButtonElement>(null);
    const [token, setToken] = useState("");
    const handle = async (e: any) => {
        e.preventDefault();
        setIsLoaded(true);
        await contactVerfication(contactId, token).then((res) => {
            if (res.success) {
                setTimeout(() => {
                    if (closeButtonRef.current) {
                        closeButtonRef.current.click();
                    }
                    setIsLoaded(false);
                }, 500);
                setTimeout(() => {
                    toast.add({
                        type: "success",
                        description: `${res.message}`
                    })
                }, 1000);
            }
        });

    }

    return <DialogContent className="sm:max-w-[425px]" showCloseButton={false}>
        <DialogHeader>
            <DialogTitle>Create Contact</DialogTitle>
            <DialogDescription>
                Anyone who has this link will be able to view this.
            </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className={`space-y-4 py-2 ${hideForm ? 'hidden' : ''}`}>
            {form.type == 'PHONE' && <div className="space-y-2">
                <Label htmlFor="valeur">Numéro de téléphone</Label>
                <Input
                    id="valeur"
                    placeholder="Ex. +(243) 98 09 667"
                    value={form.phone ?? ""}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                />
                {errors.phone && <span className="text-red-500 text-1xl ml-2">{errors.phone}</span>}
                {!errors.phone && <span className={`text-${response.success ? 'primary' : 'red'}-500 text-1xl ml-2`}>{response.message}</span>}
            </div>}

            {form.type == 'EMAIL' && <div className="space-y-2">
                <Label htmlFor="valeur">Adresse mail</Label>
                <Input
                    id="valeur"
                    placeholder="ex: john@example.com"
                    value={form.email ?? ""}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
                {errors.email && <span className="text-red-500 text-1xl ml-2">{errors.email}</span>}
                {!errors.email && <span className={`text-${response.success ? 'primary' : 'red'}-500 text-1xl ml-2`}>{response.message}</span>}
            </div>}

            {/* Action Button */}
            <div className="pt-2">
                <Button type="submit" className="w-full" disabled={isLoaded}>
                    Enregistrer {isLoaded && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                </Button>
                <div className="flex justify-center">
                    <DialogClose render={<Button type="button" className="text-foreground" variant={'link'} onClick={closeDialog}>Close</Button>} />
                </div>
            </div>
        </form>

        {/* form to updqte the stutus of contacts */}
        {/*  */}
        <form onSubmit={handle} className={`space-y-4 py-2 ${hideForm ? '' : 'hidden'}`}>
            <InputOTPDemo value={token} getToken={v => setToken(v)} />
            <div className="pt-2">
                <Button type="submit" className="w-full" disabled={isLoaded}>
                    Enregistrer {isLoaded && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                </Button>
                <div className="flex justify-center">
                    <DialogClose render={<Button type="button" ref={closeButtonRef} className="text-foreground" variant={'link'} onClick={closeDialog}>Close</Button>} />
                </div>
            </div>
        </form>
    </DialogContent>
}



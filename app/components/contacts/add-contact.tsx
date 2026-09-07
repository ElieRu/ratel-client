"use client"

import { Plus } from "lucide-react";
import { Button } from "../ui/button";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { useState } from "react";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "../ui/select";
import { createContact } from "@/lib/apis";
import { ContactSchema, type Contact } from "@/lib/definitions";
import type { Response } from "@/lib/types";

export function AddContact({ type }: { type: 'PHONE' | 'EMAIL' }) {
    const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
    // New Contact Form State
    const [form, setForm] = useState<Contact>({
        label: "",
        type: type,
        phone: "",
        email: "",
    });
    const [errors, setErrors] = useState<Partial<Record<keyof Contact, string>>>({});
    const [response, setResponse] = useState<Response>({
        success: null,
        message: "",
        data: null
    });

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        setResponse({
            success: false,
            message: "",
            data: null
        });
        console.log(form)
        const result = ContactSchema.safeParse(form);
        if (!result.success) {
            const fieldErrors: Partial<Record<keyof Contact, string>> = {};
            result.error.issues.forEach((issue) => {
                const fieldName = issue.path[0] as keyof Contact;
                fieldErrors[fieldName] = issue.message;
            });
            setErrors(fieldErrors);
        } else {
            setErrors({});
            await createContact(form).then((res) => {
                if (res.error) {
                    if (!res.error.success) setResponse({
                        ...response,
                        message: res.error.message
                    });
                }
                if (res.success) {
                    setForm({
                        ...form,
                        label: "",
                        type: 'PHONE',
                        phone: "",
                        email: "",
                    });
                    setResponse({
                        success: res.success,
                        message: res.message,
                        data: res.data
                    });
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
            label: "",
            phone: "",
            email: ""
        });
    }

    return <DialogContent className="sm:max-w-[425px]" showCloseButton={false}>
        <DialogHeader>
            <DialogTitle>Create Contact</DialogTitle>
            <DialogDescription>
                Anyone who has this link will be able to view this.
            </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 py-2">
            <div className="space-y-2">
                <Label htmlFor="label">Libellé</Label>
                <Input
                    id="label"
                    placeholder="ex: Personal, etc."
                    value={form.label}
                    onChange={(e) => setForm({ ...form, label: e.target.value })}
                />
                {errors.label && <span className="text-red-500 text-1xl ml-2">{errors.label}</span>}
            </div>

            {form.type == 'PHONE' && <div className="space-y-2">
                <Label htmlFor="valeur">Numéro de téléphone</Label>
                <Input
                    id="valeur"
                    placeholder="Ex. +(243) 98 09 667"
                    value={form.phone}
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
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
                {errors.email && <span className="text-red-500 text-1xl ml-2">{errors.email}</span>}
                {!errors.email && <span className={`text-${response.success ? 'primary' : 'red'}-500 text-1xl ml-2`}>{response.message}</span>}
            </div>}

            {/* Action Button */}
            <div className="pt-2">
                <Button type="submit" className="w-full">
                    Enregistrer
                </Button>
                <div className="flex justify-center">
                    <DialogClose render={<Button type="button" className="text-foreground" variant={'link'} onClick={closeDialog}>Close</Button>} />
                </div>
            </div>
        </form>
    </DialogContent>

    // <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
    {/* <ButtonGroup>
            <Button variant="outline">Follow</Button>
            <DropdownMenu>
                <DropdownMenuTrigger render={<Button variant="outline" className="pl-2!"><ChevronDownIcon /></Button>} />
                <DropdownMenuContent align="end" className="w-44">
                    <DropdownMenuGroup>
                        <DropdownMenuItem>
                            <VolumeOffIcon />
                            Mute Conversation
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <CheckIcon />
                            Mark as Read
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <AlertTriangleIcon />
                            Report Conversation
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <UserRoundXIcon />
                            Block User
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <ShareIcon />
                            Share Conversation
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <CopyIcon />
                            Copy Conversation
                        </DropdownMenuItem>
                    </DropdownMenuGroup>
                    <DropdownMenuSeparator />
                    <DropdownMenuGroup>
                        <DropdownMenuItem variant="destructive">
                            <TrashIcon />
                            Delete Conversation
                        </DropdownMenuItem>
                    </DropdownMenuGroup>
                </DropdownMenuContent>
            </DropdownMenu>
        </ButtonGroup>

        <DialogTrigger>
            <ButtonGroup>
                <Button variant="outline">Follow</Button>
            </ButtonGroup>
        </DialogTrigger>
        {blockData} */}
    // </Dialog>
}
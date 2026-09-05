"use client"

import { Plus } from "lucide-react";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { useState } from "react";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "../ui/select";
import { createContact } from "@/lib/apis";
import { ContactSchema, type ContactForm } from "@/lib/definitions";

export function AddContact() {
    const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
    // New Contact Form State
    const [form, setForm] = useState<ContactForm>({
        label: "",
        type: "PHONE",
        valeur: ""
    });
    const [errors, setErrors] = useState<Partial<Record<keyof ContactForm, string>>>({});
    const [response, setResponse] = useState({
        success: "",
        message: ""
    });

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        setResponse({
            success: "",
            message: ""
        });
        const result = ContactSchema.safeParse(form);
        if (!result.success) {
            const fieldErrors: Partial<Record<keyof ContactForm, string>> = {};

            result.error.issues.forEach((issue) => {
                const fieldName = issue.path[0] as keyof ContactForm;
                fieldErrors[fieldName] = issue.message;
            });
            setErrors(fieldErrors);
        } else {
            setErrors({});
            await createContact(form).then((res) => {
                console.log(res);
                if (res.error) {
                    if (!res.error.success) setResponse({
                        ...response,
                        message: res.error.message
                    });
                }
                if (res.success) {
                    setForm({
                        label: "",
                        type: 'PHONE',
                        valeur: ""
                    });
                    setResponse({
                        success: res.success,
                        message: res.message
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

    const items: { label: string; value: NonNullable<ContactForm["type"]> }[] = [
        { label: "Téléphone", value: "PHONE" },
        { label: "Adresse mail", value: "EMAIL" },
    ];

    return <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
        <DialogTrigger>
            <Button className="gap-2">
                <Plus className="h-4 w-4" /> Add Contact
            </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
                <DialogTitle>Create Contact</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4 py-2">

                <div className="space-y-2">
                    <Label htmlFor="valeur">Libellé</Label>
                    <Input
                        id="valeur"
                        placeholder="ex: Personal, etc."
                        value={form.label}
                        onChange={(e) => setForm({ ...form, label: e.target.value })}
                    />
                    {errors.label && <span className="text-red-500 text-1xl ml-2">{errors.label}</span>}
                </div>

                {/* Label Field */}
                <div className="space-y-2">
                    <Label htmlFor="type">Type</Label>
                    <Select items={items} value={form.type} onValueChange={(value) => setForm({ ...form, type: value as ContactForm["type"] })}>
                        <SelectTrigger className="w-full">
                            <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>Type de contact</SelectLabel>
                                {items.map((item) => (
                                    <SelectItem key={item.value} value={item.value}>
                                        {item.label}
                                    </SelectItem>
                                ))}
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                    {errors.type && <span className="text-red-500 text-1xl ml-2">{errors.type}</span>}
                </div>

                <div className="space-y-2">
                    <Label htmlFor="valeur">{form.type === "EMAIL" ? "Adresse mail" : "Numéro de téléphone"}</Label>
                    <Input
                        id="valeur"
                        placeholder={`${form.type === "EMAIL" ? "ex: john@example.com" : "ex: 123-456-7890"}`}
                        value={form.valeur}
                        onChange={(e) => setForm({ ...form, valeur: e.target.value })}
                    />
                    {errors.valeur && <span className="text-red-500 text-1xl ml-2">{errors.valeur}</span>}
                    {!errors.valeur && <span className={`text-${response.success ? 'primary' : 'red'}-500 text-1xl ml-2`}>{response.message}</span>}
                </div>


                {/* Action Button */}
                <div className="pt-2">
                    <Button type="submit" className="w-full">
                        Enregistrer
                    </Button>
                </div>
            </form>
        </DialogContent>
    </Dialog>
}


import React, { useState } from 'react'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { DialogClose } from '../ui/dialog'
import { Loader2 } from 'lucide-react'
import { ContactSchema, type Contact } from '@/lib/validations'
import type { Response } from '@/lib/types'
import { creer_contact } from '@/lib/apis'
import type { HideType } from './form'

export const FormContact = ({
    isLoaded,
    setIsLoaded,
    form,
    setForm,
    setContactId,
    new_contact,
    setHide,
    closeDialog
}: {
    isLoaded: boolean,
    setIsLoaded: (v: boolean) => void,
    form: Contact,
    setForm: (v: Contact) => void,
    setContactId: (v: string) => void,
    new_contact: (v: Contact) => void,
    setHide: (v: HideType) => void,
    closeDialog: () => void
}) => {

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
            await creer_contact(form).then((res) => {
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
                    setHide('form-token');
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

    return (
        <form onSubmit={handleSubmit}>
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
    )
}



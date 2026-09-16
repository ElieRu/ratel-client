import { Button } from "@/components/ui/button";
import {
    CheckCircle2Icon,
    Loader2,
} from "lucide-react"
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import { AdresseSchema, type Adresse } from "@/lib/validations";
import { createAdresse } from "@/lib/apis";
import { Controller, useForm } from 'react-hook-form';
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import type { Response } from "@/lib/types";

export function Form({
    isLoaded,
    isExistedAdress,
    setAdresse
}: {
    isLoaded: boolean,
    isExistedAdress: number | null,
    setAdresse: (v: Adresse) => void
}) {

    const {
        register,
        handleSubmit,
        control,
        formState: { errors, isSubmitting }
    } = useForm<Adresse>({
        resolver: zodResolver(AdresseSchema),
        defaultValues: {
            adresse: "kasali, ancien cooperative",
            region: "kadutu",
            ville: "bukavu",
            pays: ""
        }
    });

    const items = [
        { label: "Select a fruit", value: null },
        { label: "Apple", value: "apple" },
        { label: "Banana", value: "banana" },
        { label: "Blueberry", value: "blueberry" },
        { label: "Grapes", value: "grapes" },
        { label: "Pineapple", value: "pineapple" },
    ];

    const [hide, setHide] = useState<'form-adress' | 'successed-form'>("form-adress");
    const [response, setResponse] = useState<Response>();
    const onSubmit = async (form: Adresse) => {
        await createAdresse(form).then((res) => {
            setResponse(res);
            if (res.success) {
                setHide('successed-form');
                setAdresse(res.data);
            }
        });
    }

    return <Dialog>
        <DialogTrigger>
            <Button variant="outline">New adress {isExistedAdress}</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]" showCloseButton={false}>
            <DialogHeader>
                <DialogTitle>Create Adress</DialogTitle>
                <DialogDescription>
                    Anyone who has this link will be able to view this.
                </DialogDescription>
            </DialogHeader>

            <form className={`${hide == 'form-adress' ? '' : 'hidden'}`} onSubmit={handleSubmit(onSubmit)}>
                <div className="space-y-2">
                    <Label htmlFor="adresse">Votre adresse</Label>
                    <Input
                        id="adresse"
                        placeholder="Votre adresse"
                        {...register("adresse")}
                    />
                    {errors.adresse && <span className="text-red-500 text-1xl ml-2">{errors.adresse.message}</span>}
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2 mt-3">
                        <Label htmlFor="region">Region</Label>
                        <Input
                            id="region"
                            placeholder="Region / Province"
                            {...register("region")}
                        />
                        {errors.region && <span className="text-red-500 text-1xl ml-2">{errors.region.message}</span>}
                    </div>

                    <div className="space-y-2 mt-3">
                        <Label htmlFor="ville">Ville</Label>
                        <Input
                            id="ville"
                            placeholder="Ville"
                            {...register("ville")}
                        />
                        {errors.ville && <span className="text-red-500 text-1xl ml-2">{errors.ville.message}</span>}
                    </div>
                </div>
                <div className="space-y-2 mt-3">
                    <Label htmlFor="pays">Pays</Label>
                    <Controller
                        name="pays"
                        control={control}
                        render={({ field }) => (
                            <Select
                                value={field.value}
                                onValueChange={(value) => field.onChange(value)}
                            >
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Select a country" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        {items.map((item) => (
                                            <SelectItem key={item.value} value={item.value}>
                                                {item.label}
                                            </SelectItem>
                                        ))}
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        )}
                    />
                    {errors.pays && <span className="text-red-500 text-1xl ml-2">{errors.pays.message}</span>}
                </div>

                <div className="pt-2">
                    <Button type="submit" className="w-full" disabled={isLoaded}>
                        Enregistrer {isLoaded && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                    </Button>
                    <div className="flex justify-center">
                        <DialogClose render={<Button type="button" className="text-foreground" variant={'link'}>Fermer</Button>} />
                    </div>
                </div>
            </form>

            <div className={`${hide == 'successed-form' ? '' : 'hidden'} flex flex-col items-center text-center gap-4 py-2`}>
                <div className="flex items-center justify-center size-16 rounded-full bg-teal-400/10 text-teal-400">
                    <CheckCircle2Icon size={32} strokeWidth={1.5} />
                </div>
                <DialogHeader className="items-center">
                    <DialogTitle className="text-lg">Message de succès !</DialogTitle>
                    <DialogDescription>
                        Votre adresse a été verifié avec succès !
                    </DialogDescription>
                </DialogHeader>
                <DialogClose render={<Button className="w-full cursor-pointer hover:bg-primary/80" />}>
                    Fermer
                </DialogClose>
            </div>
        </DialogContent>
    </Dialog>
}
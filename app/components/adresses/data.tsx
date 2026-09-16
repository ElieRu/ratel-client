import { removeAdress } from "@/lib/apis";
import type { Adresse } from "@/lib/validations";
import { Building, Globe, Mail, MapPin, Pencil, Trash2 } from "lucide-react";
import { toast } from "../ui/toast";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import { Form } from "./form";

export function Data({
    adresse, setAdress,
    isLoaded
}: {
    adresse: Adresse,
    isLoaded: boolean,
    setAdress: (v: Adresse | null) => void
}) {

    const onRemove = async () => {
        if (adresse.id) {
            const removeRequest = removeAdress(adresse.id).then((res) => {
                setAdress(null);
                return res;
            });

            toast.promise(removeRequest, {
                loading: 'Removing address…',
                success: `${(await removeRequest).message}`,
                error: (err) => err.message || 'Could not remove address.',
            });
        }
    }

    return <div className="group relative flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:border-slate-300 hover:shadow-md dark:border-slate-800 dark:bg-slate-950">
        <div className="flex items-start justify-between gap-4">
            {/* Address Info */}
            <div className="flex items-start gap-3">
                <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400">
                    <MapPin className="h-4 w-4" />
                </div>
                <div className="space-y-1">
                    <p className="font-medium leading-none text-slate-900 dark:text-slate-100">
                        {adresse.adresse}
                    </p>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                        {adresse.ville}, {adresse.region} {adresse.codePostal}
                    </p>
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                        {adresse.pays}
                    </p>
                </div>
            </div>

            {/* Action Icon Buttons */}
            <div className="flex items-center gap-1">
                <Dialog>
                    <DialogTrigger>
                        <button
                            type="button"
                            aria-label="Edit address"
                            className="rounded-lg p-2 text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-100"
                        >
                            <Pencil className="h-4 w-4" />
                        </button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]" showCloseButton={false}>
                        <DialogHeader>
                            <DialogTitle>Create Adress</DialogTitle>
                            <DialogDescription>
                                Anyone who has this link will be able to view this.
                            </DialogDescription>
                        </DialogHeader>
                        <Form
                            isLoaded={isLoaded}
                            setAdresse={setAdress}
                            adresse={adresse}
                        />
                    </DialogContent>
                </Dialog>

                <button
                    type="button"
                    onClick={onRemove}
                    aria-label="Remove address"
                    className="rounded-lg p-2 text-slate-500 transition-colors hover:bg-red-50 hover:text-red-600 dark:text-slate-400 dark:hover:bg-red-950/50 dark:hover:text-red-400"
                >
                    <Trash2 className="h-4 w-4" />
                </button>
            </div>
        </div>
    </div>
}
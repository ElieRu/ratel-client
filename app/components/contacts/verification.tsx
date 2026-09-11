import { Loader2 } from "lucide-react";
import { Button } from "../ui/button";
import InputOTPDemo from "./input-opt";
import { DialogClose } from "../ui/dialog";
import { contactVerfication } from "@/lib/apis";
import { useState } from "react";
import { toast } from "../ui/toast";
import type { HideType } from "./form";


export function VerificationForm({
    isLoaded, setIsLoaded, contactId, setHide, closeDialog
}: {
    isLoaded: boolean,
    setIsLoaded: (v: boolean) => void,
    contactId: string,
    setHide: (v: HideType) => void,
    closeDialog: () => void,
}) {

    const [token, setToken] = useState("");
    const handleSublit = async (e: any) => {
        e.preventDefault();
        setIsLoaded(true);
        await contactVerfication(contactId, token).then((res) => {
            if (res.success) {
                setTimeout(() => {
                    setHide('success');
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

    return <form onSubmit={handleSublit}>
        <InputOTPDemo value={token} getToken={v => setToken(v)} />
        <div className="pt-2">
            <Button type="submit" className="w-full" disabled={isLoaded}>
                Enregistrer {isLoaded && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            </Button>
            <div className="flex justify-center">
                <DialogClose render={<Button type="button" className="text-foreground" variant={'link'} onClick={closeDialog}>Close</Button>} />
            </div>
        </div>
    </form>
}


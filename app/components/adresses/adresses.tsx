"use client"

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
    Loader2,
} from "lucide-react"
import { type Adresse } from "@/lib/validations";
import { getAdresse } from "@/lib/apis";
import { Data } from "./data";
import { Form } from "./form";

export default function AdressesManager() {
    const [adresse, setAdresse] = useState<Adresse>();
    const [isLoaded, setIsLoaded] = useState(false);
    useEffect(() => {
        const fetchDatas = async () => {
            await getAdresse().then((resp) => {
                setAdresse(resp.data);
            });
        };
        fetchDatas();
    }, []);

    return (
        <div className="w-full max-w-6xl mx-auto p-6 space-y-6">
            {/* Header & Controls */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                    <h1 className="text-2xl font-bold tracking-tight">Adresse</h1>
                    <p className="text-sm text-muted-foreground">
                        Manage your customer accounts and leads.
                    </p>
                </div>
                <Form 
                    isLoaded={isLoaded} 
                    isExistedAdress={0}
                    setAdresse={(v: Adresse) => setAdresse(v)}
                />
            </div>

            {/* Contacts Data Table */}
            {adresse && <Data adresse={adresse} />}
            {/* {isLoaded && adresse. === 0 && <span>empty</span>} */}

        </div>
    );
}

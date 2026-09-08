"use client"

import { useEffect, useState } from "react";
import { listContact } from "@/lib/apis";
import type { Contact } from "@/lib/validations";
import { ContactsListSkeleton } from "../all-skeletons";
import { ItemContacts } from "./item-contact";

export function ItemsContacts() {
    const [contacts, setContacts] = useState<Contact[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);
    useEffect(() => {
        const fetchDatas = async () => {
            await listContact().then((resp) => {
                setContacts(resp.data);
                setIsLoaded(true);
            });
        };
        fetchDatas();
    }, []);

    return <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {!isLoaded && <ContactsListSkeleton />}
        {contacts.map((contact) => (
            <ItemContacts key={contact.id} contact={contact} />
        ))}
    </div>
}

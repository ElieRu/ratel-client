"use client"

import type { Contact } from "@/lib/validations";
import { ContactsListSkeleton } from "../all-skeletons";
import { Item } from "./item";

export function Items({ 
    isLoaded, contacts, removedContact 
}: { 
    isLoaded: boolean, contacts: Contact[], removedContact: (data: Contact) => void
}) {
    return <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {!isLoaded && <ContactsListSkeleton />}
        {contacts.map((contact) => (
            <Item key={contact.id} contact={contact} removedContact={removedContact} />
        ))}
    </div>
}

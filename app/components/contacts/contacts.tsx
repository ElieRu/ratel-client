"use client"

import { useEffect, useState } from "react";
// shadcn UI Primitives
import { Button } from "@/components/ui/button";
import {
    ChevronDownIcon,
    VolumeOffIcon,
} from "lucide-react"
import { ButtonGroup } from "@/components/ui/button-group"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import { Form } from "./form";
import { Items } from "./items";
import type { Contact } from "@/lib/validations";
import { listContact } from "@/lib/apis";

export default function ContactsManager() {
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
    const [activeDialog, setActiveDialog] = useState<"PHONE" | "EMAIL" | null>(null);

    return (
        <div className="w-full max-w-6xl mx-auto p-6 space-y-6">
            {/* Header & Controls */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                    <h1 className="text-2xl font-bold tracking-tight">Contacts</h1>
                    <p className="text-sm text-muted-foreground">
                        Manage your customer accounts and leads.
                    </p>
                </div>

                {/* Add Contact Modal */}
                <ButtonGroup>
                    {/* Main Phone Button & Dialog */}
                    <Dialog open={activeDialog === "PHONE"} onOpenChange={(open) => setActiveDialog(open ? "PHONE" : null)}>
                        <DialogTrigger>
                            <Button variant="outline">New phone</Button>
                        </DialogTrigger>
                        <DialogContent>
                            <Form type="PHONE" new_contact={(newContact: Contact) => {
                                setContacts([...contacts, newContact])
                            }} />
                        </DialogContent>
                    </Dialog>

                    {/* Dropdown Menu */}
                    <DropdownMenu>
                        <DropdownMenuTrigger>
                            <Button variant="outline" className="pl-2">
                                <ChevronDownIcon />
                            </Button>
                        </DropdownMenuTrigger>

                        <DropdownMenuContent align="end" className="w-44">
                            <DropdownMenuGroup>
                                <DropdownMenuItem onClick={() => setActiveDialog("PHONE")}>
                                    <VolumeOffIcon /> New phone
                                </DropdownMenuItem>
                                <DropdownMenuItem onClick={() => setActiveDialog("EMAIL")}>
                                    <VolumeOffIcon /> New email
                                </DropdownMenuItem>
                            </DropdownMenuGroup>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </ButtonGroup>

                {/* Standalone Dialog for Dropdown Item: Email */}
                <Dialog open={activeDialog === "EMAIL"} onOpenChange={(open) => setActiveDialog(open ? "EMAIL" : null)}>
                    <DialogContent>
                        <Form type="EMAIL" new_contact={(newContact: Contact) => {
                            setContacts([...contacts, newContact])
                        }} />
                    </DialogContent>
                </Dialog>
            </div>
            {/* Contacts Data Table */}
            <Items isLoaded={isLoaded} contacts={contacts} removedContact={(removedItem: Contact) => {
                setContacts((contacts) => contacts.filter((contact) => contact.id !== removedItem.id)
                );
            }} />
        </div>
    );
}

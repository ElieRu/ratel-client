"use client"

import React, { useEffect, useState } from "react";
import { Plus, Search, MoreVertical, Mail, Phone, Building2, Filter } from "lucide-react";

// shadcn UI Primitives
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// import { MOCK_CONTACTS, type Contact } from "./contacts-data";
import { listContact } from "@/lib/apis";
import type { Contact } from "@/lib/definitions";

export function ContactsList() {

    const [contacts, setContacts] = useState<Contact[]>([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedContact, setSelectedContact] = useState<Contact | null>(null);
    const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);

    const [isLoaded, setIsLoaded] = useState();
    useEffect(() => {
        const fetchDatas = async () => {
            setContacts(await listContact());
        };
        fetchDatas();
    }, []);

    // Filter contacts by search query
    // const filteredContacts = contacts.filter(
    //     (c) =>
    //         // c.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
    //         c.valeur.toLowerCase().includes(searchQuery.toLowerCase()) ||
    //         c.type.toLowerCase().includes(searchQuery.toLowerCase())
    // );


    const getStatusBadge = (status: Contact["status"]) => {
        switch (status) {
            case "Active":
                return <Badge className="bg-emerald-500/15 text-emerald-700 hover:bg-emerald-500/25 dark:text-emerald-400">Active</Badge>;
            case "Lead":
                return <Badge className="bg-blue-500/15 text-blue-700 hover:bg-blue-500/25 dark:text-blue-400">Lead</Badge>;
            case "Inactive":
                return <Badge variant="secondary">Inactive</Badge>;
        }
    };

    return <div className="border rounded-lg bg-card">
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>Contact</TableHead>
                    <TableHead className="hidden md:table-cell">Company</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="hidden lg:table-cell">Phone</TableHead>
                    <TableHead className="w-[50px]"></TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {/* {contacts.map((contact) => (
                    <TableRow
                        key={contact.label}
                        className="cursor-pointer hover:bg-muted/50"
                        onClick={() => setSelectedContact(contact)}
                    >
                        <TableCell>
                            <div className="flex items-center gap-3">
                                <Avatar className="h-9 w-9">
                                    <AvatarImage src={contact.valeur} alt={contact.valeur} />
                                    <AvatarFallback>{contact.valeur.substring(0, 2).toUpperCase()}</AvatarFallback>
                                </Avatar>
                                <div className="grid">
                                    <span className="font-medium text-sm leading-none">{contact.valeur}</span>
                                    <span className="text-xs text-muted-foreground mt-1">{contact.valeur}</span>
                                </div>
                            </div>
                        </TableCell>
                        <TableCell className="hidden md:table-cell text-sm">{contact.type}</TableCell>
                        <TableCell>{getStatusBadge(contact.status)}</TableCell>
                        <TableCell className="hidden lg:table-cell text-sm text-muted-foreground">
                            {contact.type}
                        </TableCell>
                        <TableCell onClick={(e) => e.stopPropagation()}>
                            <DropdownMenu>
                                <DropdownMenuTrigger>
                                    <Button variant="ghost" size="icon" className="h-8 w-8">
                                        <MoreVertical className="h-4 w-4" />
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                    <DropdownMenuItem onClick={() => setSelectedContact(contact)}>
                                        View details
                                    </DropdownMenuItem>
                                    <DropdownMenuItem className="text-destructive">Delete</DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </TableCell>
                    </TableRow>
                ))
                } */}
            </TableBody>
        </Table>
    </div>
}

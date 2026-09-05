"use client"

import React, { useState } from "react";
import { Plus, Search, MoreVertical, Mail, Phone, Building2, Filter } from "lucide-react";

// shadcn UI Primitives
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetDescription,
} from "@/components/ui/sheet";

import { MOCK_CONTACTS, type Contact } from "./contacts-data";
import { AddContact } from "./add-contact";

export default function ContactsManager() {
    const [contacts, setContacts] = useState<Contact[]>(MOCK_CONTACTS);
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedContact, setSelectedContact] = useState<Contact | null>(null);
    const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);

    // New Contact Form State
    const [newContact, setNewContact] = useState({
        valeur: "",
        label: "",
        parDefaut: "",
        status: "",
    });

    // Filter contacts by search query
    const filteredContacts = contacts.filter(
        (c) =>
            c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            c.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
            c.company.toLowerCase().includes(searchQuery.toLowerCase())
    );


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
                <AddContact />
            </div>

            {/* Filter & Search Toolbar */}
            <div className="flex items-center gap-3">
                <div className="relative flex-1 max-w-sm">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                        placeholder="Filter by name, email, or company..."
                        className="pl-9"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
                <Button variant="outline" size="icon">
                    <Filter className="h-4 w-4 text-muted-foreground" />
                </Button>
            </div>

            {/* Contacts Data Table */}
            <div className="border rounded-lg bg-card">
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
                        {filteredContacts.length === 0 ? (
                            <TableRow>
                                <TableCell colSpan={5} className="text-center py-8 text-muted-foreground">
                                    No contacts found.
                                </TableCell>
                            </TableRow>
                        ) : (
                            filteredContacts.map((contact) => (
                                <TableRow
                                    key={contact.id}
                                    className="cursor-pointer hover:bg-muted/50"
                                    onClick={() => setSelectedContact(contact)}
                                >
                                    <TableCell>
                                        <div className="flex items-center gap-3">
                                            <Avatar className="h-9 w-9">
                                                <AvatarImage src={contact.avatar} alt={contact.name} />
                                                <AvatarFallback>{contact.name.substring(0, 2).toUpperCase()}</AvatarFallback>
                                            </Avatar>
                                            <div className="grid">
                                                <span className="font-medium text-sm leading-none">{contact.name}</span>
                                                <span className="text-xs text-muted-foreground mt-1">{contact.email}</span>
                                            </div>
                                        </div>
                                    </TableCell>
                                    <TableCell className="hidden md:table-cell text-sm">{contact.company}</TableCell>
                                    <TableCell>{getStatusBadge(contact.status)}</TableCell>
                                    <TableCell className="hidden lg:table-cell text-sm text-muted-foreground">
                                        {contact.phone}
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
                        )}
                    </TableBody>
                </Table>
            </div>

            {/* Slide-over Contact Details Drawer */}
            <Sheet open={!!selectedContact} onOpenChange={() => setSelectedContact(null)}>
                <SheetContent className="sm:max-w-md">
                    {selectedContact && (
                        <>
                            <SheetHeader className="text-left">
                                <div className="flex items-center gap-4 mb-2">
                                    <Avatar className="h-16 w-16">
                                        <AvatarImage src={selectedContact.avatar} />
                                        <AvatarFallback>{selectedContact.name.substring(0, 2)}</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <SheetTitle>{selectedContact.name}</SheetTitle>
                                        <SheetDescription>{getStatusBadge(selectedContact.status)}</SheetDescription>
                                    </div>
                                </div>
                            </SheetHeader>

                            <div className="space-y-6 pt-6 text-sm">
                                <div className="space-y-3">
                                    <div className="flex items-center gap-3 text-muted-foreground">
                                        <Mail className="h-4 w-4" />
                                        <span className="text-foreground font-medium">{selectedContact.email}</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-muted-foreground">
                                        <Phone className="h-4 w-4" />
                                        <span className="text-foreground">{selectedContact.phone || "N/A"}</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-muted-foreground">
                                        <Building2 className="h-4 w-4" />
                                        <span className="text-foreground">{selectedContact.company}</span>
                                    </div>
                                </div>

                                <div className="pt-4 border-t flex gap-2">
                                    <Button className="flex-1" variant="default">
                                        Send Message
                                    </Button>
                                    <Button variant="outline">Edit</Button>
                                </div>
                            </div>
                        </>
                    )}
                </SheetContent>
            </Sheet>
        </div>
    );
}

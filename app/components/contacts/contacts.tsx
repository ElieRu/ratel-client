"use client"

import React, { useState } from "react";
import { Search, Mail, Phone, Building2, Filter } from "lucide-react";

// shadcn UI Primitives
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetDescription,
} from "@/components/ui/sheet";
import {
    AlertTriangleIcon,
    CheckIcon,
    ChevronDownIcon,
    CopyIcon,
    ShareIcon,
    TrashIcon,
    UserRoundXIcon,
    VolumeOffIcon,
} from "lucide-react"
import { ButtonGroup } from "@/components/ui/button-group"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import { MOCK_CONTACTS, type Contact } from "./contacts-data";
import { ContactsList } from "./contacts-list";
import { FormContact } from "./form-contact";

export default function ContactsManager() {
    const [contacts, setContacts] = useState<Contact[]>(MOCK_CONTACTS);
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedContact, setSelectedContact] = useState<Contact | null>(null);
    const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);

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

    const [activeDialog, setActiveDialog] = useState<"PHONE" | "EMAIL" | null>(null)
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
                            <FormContact type="PHONE" />
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
                        <FormContact type="EMAIL" />
                    </DialogContent>
                </Dialog>
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
            <ContactsList />

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

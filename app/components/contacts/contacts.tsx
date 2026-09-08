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
import { FormContact } from "./form-contact";
import { ItemsContacts } from "./items-contacts";

export default function ContactsManager() {
    
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

            {/* Contacts Data Table */}
            <ItemsContacts />

            
        </div>
    );
}

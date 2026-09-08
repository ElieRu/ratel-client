"use client"

import React, { useEffect, useState } from "react";
import { Plus, Search, MoreVertical, Mail, Phone, Building2, Filter, MoreHorizontalIcon } from "lucide-react";

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
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// import { MOCK_CONTACTS, type Contact } from "./contacts-data";
import { listContact } from "@/lib/apis";
import type { Contact } from "@/lib/validations";

import {
    PhoneIcon,
    MailIcon,
    StarIcon,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ContactsListSkeleton } from "../all-skeletons";

export function ItemContacts({ contact }: { contact: Contact }) {
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

    return <Card key={contact.id} className="relative">
        <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            {/* Label */}
            <CardTitle className="text-base font-semibold">
                {contact.label}
            </CardTitle>

            {/* Actions Dropdown */}
            <DropdownMenu>
                <DropdownMenuTrigger>
                    <Button variant="ghost" size="icon" className="size-8">
                        <MoreHorizontalIcon className="h-4 w-4" />
                        <span className="sr-only">Open menu</span>
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                    <DropdownMenuItem>Edit</DropdownMenuItem>
                    <DropdownMenuItem>Duplicate</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem variant="destructive">
                        Delete
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </CardHeader>
        <CardContent className="space-y-3">
            {/* Phone */}
            {contact.phone && <div className="flex items-center text-sm text-muted-foreground">
                <PhoneIcon className="mr-2 h-4 w-4 shrink-0" />
                <span>{contact.phone || "—"}</span>
            </div>}

            {/* Email */}
            {contact.email && <div className="flex items-center text-sm text-muted-foreground">
                <MailIcon className="mr-2 h-4 w-4 shrink-0" />
                <span className="truncate">{contact.email || "—"}</span>
            </div>}

            {/* Badges Footer: Par défaut & Status */}
            <div className="flex items-center justify-between pt-2 border-t border-border">
                {/* Par défaut */}
                {contact.parDefaut ? (
                    <Badge variant="secondary" className="gap-1 text-xs bg-amber-500/10 text-amber-600 border-amber-500/20">
                        <StarIcon className="h-3 w-3 fill-amber-500 text-amber-500" /> Par défaut
                    </Badge>
                ) : (
                    <span />
                )}

                {/* Status */}
                <Badge
                    variant="outline"
                    className={
                        contact.status === "VALIDE"
                            ? "text-emerald-600 border-emerald-500/30 bg-emerald-500/10"
                            : "text-amber-600 border-amber-500/30 bg-amber-500/10"
                    }
                >
                    {contact.status === "VALIDE" ? "Validé" : "En attente"}
                </Badge>
            </div>
        </CardContent>
    </Card>
}

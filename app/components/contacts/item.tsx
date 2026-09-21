"use client"

import React, { useEffect, useState } from "react";
import { Plus, Search, MoreVertical, Mail, Phone, Building2, Filter, MoreHorizontalIcon, Type } from "lucide-react";

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
import { supprimer_contact } from "@/lib/apis";
import type { Contact } from "@/lib/validations";

import {
    PhoneIcon,
    MailIcon,
    StarIcon,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { toast } from "../ui/toast";
import { Switch } from "../ui/switch";
import { Link } from "react-router";

export function Item({ contact, removedContact }: { contact: Contact, removedContact: (data: Contact, newDefault: string) => void }) {

    const updateParDefaut = async (contact: Contact) => {
        // await changerParDefaut(contact.id)
    }

    const removeItem = async (contact: Contact) => {
        if (!contact.id) return;
        await supprimer_contact(contact.id).then((res) => {
            if (res.success) {
                removedContact(res.data, res.newDefault);
                console.log(res.newDefault)
                toast.add({
                    type: "success",
                    description: `${res.message}`,
                });
            } else {
                toast.add({
                    type: "warning",
                    description: `${res.message}`,
                })
            }
        });
    }

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
                    <DropdownMenuItem variant="destructive" onClick={(id) => removeItem(contact)}>
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
                <Switch checked={contact.parDefaut} onCheckedChange={() => updateParDefaut(contact)} />

                {/* Status */}
                {contact.status !== "VERIFIE" ? <Button type="button" className="text-foreground btn-sm cursor-pointer" variant={'link'}>Verifier</Button> : ''}
            </div>
        </CardContent>
    </Card>
}

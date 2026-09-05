"use client";

import React, { useState } from "react";
import {
  Loader2,
  Mail,
  Search,
  Send,
  Trash2,
  Plus,
  Check,
  ChevronRight,
  ArrowRight,
  Paperclip,
  CheckCircle2,
  AlertTriangle,
  Bell,
  Star,
} from "lucide-react";

// Shadcn UI Imports
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Checkbox } from "@/components/ui/checkbox";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { Skeleton } from "@/components/ui/skeleton";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

interface VariantItem {
  id: string;
  label: string;
  code: string;
  component: (onClick: () => void) => React.ReactNode;
}

interface ComponentSection {
  title: string;
  variants: VariantItem[];
}

export default function ShadcnInteractiveVariants() {
  const [copiedLabel, setCopiedLabel] = useState<string | null>(null);
  const [search, setSearch] = useState("");

  const handleVariantClick = (label: string, code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedLabel(label);
    setTimeout(() => setCopiedLabel(null), 2500);
  };

  const sections: ComponentSection[] = [
    // --- BUTTONS ---
    {
      title: "Button Variants & States",
      variants: [
        {
          id: "btn-default",
          label: "Default",
          code: `<Button variant="default">Default</Button>`,
          component: (onClick) => <Button onClick={onClick}>Default</Button>,
        },
        {
          id: "btn-outline",
          label: "Outline",
          code: `<Button variant="outline">Outline</Button>`,
          component: (onClick) => <Button variant="outline" onClick={onClick}>Outline</Button>,
        },
        {
          id: "btn-secondary",
          label: "Secondary",
          code: `<Button variant="secondary">Secondary</Button>`,
          component: (onClick) => <Button variant="secondary" onClick={onClick}>Secondary</Button>,
        },
        {
          id: "btn-destructive",
          label: "Destructive",
          code: `<Button variant="destructive">Destructive</Button>`,
          component: (onClick) => <Button variant="destructive" onClick={onClick}>Destructive</Button>,
        },
        {
          id: "btn-destructive-outline",
          label: "Destructive Outline",
          code: `<Button variant="outline" className="border-destructive text-destructive hover:bg-destructive/10">Destructive Outline</Button>`,
          component: (onClick) => (
            <Button variant="outline" className="border-destructive text-destructive hover:bg-destructive/10" onClick={onClick}>
              Destructive Outline
            </Button>
          ),
        },
        {
          id: "btn-ghost",
          label: "Ghost",
          code: `<Button variant="ghost">Ghost</Button>`,
          component: (onClick) => <Button variant="ghost" onClick={onClick}>Ghost</Button>,
        },
        {
          id: "btn-link",
          label: "Link",
          code: `<Button variant="link">Link</Button>`,
          component: (onClick) => <Button variant="link" onClick={onClick}>Link</Button>,
        },
        {
          id: "btn-xs",
          label: "Extra-small Size",
          code: `<Button size="sm" className="h-7 px-2 text-xs">Extra-small</Button>`,
          component: (onClick) => <Button size="sm" className="h-7 px-2 text-xs" onClick={onClick}>Extra-small</Button>,
        },
        {
          id: "btn-sm",
          label: "Small Size",
          code: `<Button size="sm">Small Size</Button>`,
          component: (onClick) => <Button size="sm" onClick={onClick}>Small Size</Button>,
        },
        {
          id: "btn-lg",
          label: "Large Size",
          code: `<Button size="lg">Large Size</Button>`,
          component: (onClick) => <Button size="lg" onClick={onClick}>Large Size</Button>,
        },
        {
          id: "btn-xl",
          label: "Extra-large Size",
          code: `<Button className="h-12 px-6 text-base">Extra-large Size</Button>`,
          component: (onClick) => <Button className="h-12 px-6 text-base" onClick={onClick}>Extra-large Size</Button>,
        },
        {
          id: "btn-disabled",
          label: "Disabled",
          code: `<Button disabled>Disabled</Button>`,
          component: (onClick) => <Button disabled onClick={onClick}>Disabled</Button>,
        },
        {
          id: "btn-icon",
          label: "Icon",
          code: `<Button size="icon"><Trash2 className="h-4 w-4" /></Button>`,
          component: (onClick) => (
            <Button size="icon" onClick={onClick}>
              <Trash2 className="h-4 w-4" />
            </Button>
          ),
        },
        {
          id: "btn-icon-sm",
          label: "Icon Small Size",
          code: `<Button size="icon" className="h-7 w-7"><Plus className="h-3.5 w-3.5" /></Button>`,
          component: (onClick) => (
            <Button size="icon" className="h-7 w-7" onClick={onClick}>
              <Plus className="h-3.5 w-3.5" />
            </Button>
          ),
        },
        {
          id: "btn-icon-lg",
          label: "Icon Large Size",
          code: `<Button size="icon" className="h-11 w-11"><Send className="h-5 w-5" /></Button>`,
          component: (onClick) => (
            <Button size="icon" className="h-11 w-11" onClick={onClick}>
              <Send className="h-5 w-5" />
            </Button>
          ),
        },
        {
          id: "btn-with-icon",
          label: "With Icon",
          code: `<Button><Mail className="mr-2 h-4 w-4" /> Login with Email</Button>`,
          component: (onClick) => (
            <Button onClick={onClick}>
              <Mail className="mr-2 h-4 w-4" /> Login with Email
            </Button>
          ),
        },
        {
          id: "btn-with-link",
          label: "With Link",
          code: `<Button asChild><a href="#link">Navigate <ArrowRight className="ml-2 h-4 w-4" /></a></Button>`,
          component: (onClick) => (
            <Button onClick={onClick}>
              Navigate <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          ),
        },
        {
          id: "btn-loading-prop",
          label: "Loading (Built-in Prop)",
          code: `<Button disabled><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Please wait</Button>`,
          component: (onClick) => (
            <Button disabled onClick={onClick}>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Please wait
            </Button>
          ),
        },
        {
          id: "btn-loading-custom",
          label: "Loading (Custom Composition)",
          code: `<Button variant="outline" className="gap-2"><span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" /> Syncing Data</Button>`,
          component: (onClick) => (
            <Button variant="outline" className="gap-2" onClick={onClick}>
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" /> Syncing Data
            </Button>
          ),
        },
      ],
    },

    // --- BADGES ---
    {
      title: "Badge Variants",
      variants: [
        {
          id: "badge-default",
          label: "Default Badge",
          code: `<Badge>Default</Badge>`,
          component: (onClick) => <Badge className="cursor-pointer" onClick={onClick}>Default</Badge>,
        },
        {
          id: "badge-secondary",
          label: "Secondary Badge",
          code: `<Badge variant="secondary">Secondary</Badge>`,
          component: (onClick) => <Badge variant="secondary" className="cursor-pointer" onClick={onClick}>Secondary</Badge>,
        },
        {
          id: "badge-outline",
          label: "Outline Badge",
          code: `<Badge variant="outline">Outline</Badge>`,
          component: (onClick) => <Badge variant="outline" className="cursor-pointer" onClick={onClick}>Outline</Badge>,
        },
        {
          id: "badge-destructive",
          label: "Destructive Badge",
          code: `<Badge variant="destructive">Destructive</Badge>`,
          component: (onClick) => <Badge variant="destructive" className="cursor-pointer" onClick={onClick}>Destructive</Badge>,
        },
        {
          id: "badge-icon",
          label: "With Icon Badge",
          code: `<Badge className="gap-1"><Star className="h-3 w-3 fill-current" /> Featured</Badge>`,
          component: (onClick) => (
            <Badge className="gap-1 cursor-pointer" onClick={onClick}>
              <Star className="h-3 w-3 fill-current" /> Featured
            </Badge>
          ),
        },
      ],
    },

    // --- INPUTS ---
    {
      title: "Input Variants & Controls",
      variants: [
        {
          id: "input-default",
          label: "Standard Input",
          code: `<Input placeholder="Standard input..." />`,
          component: (onClick) => (
            <Input placeholder="Standard input..." onClick={onClick} className="cursor-pointer max-w-xs" />
          ),
        },
        {
          id: "input-icon",
          label: "Input with Left Icon",
          code: `<div className="relative"><Mail className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" /><Input className="pl-9" placeholder="Email..." /></div>`,
          component: (onClick) => (
            <div className="relative max-w-xs w-full" onClick={onClick}>
              <Mail className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input className="pl-9 cursor-pointer" placeholder="Email address..." readOnly />
            </div>
          ),
        },
        {
          id: "input-file",
          label: "File Input",
          code: `<Input type="file" />`,
          component: (onClick) => (
            <Input type="file" onClick={onClick} className="cursor-pointer max-w-xs" />
          ),
        },
        {
          id: "input-disabled",
          label: "Disabled Input",
          code: `<Input placeholder="Disabled..." disabled />`,
          component: (onClick) => (
            <Input placeholder="Disabled..." disabled onClick={onClick} className="max-w-xs" />
          ),
        },
      ],
    },

    // --- TOGGLES & CHECKBOXES ---
    {
      title: "Switches & Checkboxes",
      variants: [
        {
          id: "switch-checked",
          label: "Switch (Active)",
          code: `<Switch defaultChecked />`,
          component: (onClick) => (
            <div className="flex items-center gap-2 cursor-pointer" onClick={onClick}>
              <Switch defaultChecked readOnly />
              <span className="text-xs font-medium">Notifications On</span>
            </div>
          ),
        },
        {
          id: "switch-off",
          label: "Switch (Off)",
          code: `<Switch />`,
          component: (onClick) => (
            <div className="flex items-center gap-2 cursor-pointer" onClick={onClick}>
              <Switch readOnly />
              <span className="text-xs font-medium">Notifications Off</span>
            </div>
          ),
        },
        {
          id: "checkbox-checked",
          label: "Checkbox (Checked)",
          code: `<Checkbox defaultChecked />`,
          component: (onClick) => (
            <div className="flex items-center gap-2 cursor-pointer" onClick={onClick}>
              <Checkbox defaultChecked readOnly />
              <span className="text-xs font-medium">Accept terms</span>
            </div>
          ),
        },
      ],
    },

    // --- FEEDBACK & ALERTS ---
    {
      title: "Alerts & Status",
      variants: [
        {
          id: "alert-default",
          label: "Default Alert",
          code: `<Alert><AlertTitle>Update Available</AlertTitle><AlertDescription>A new software version is ready.</AlertDescription></Alert>`,
          component: (onClick) => (
            <Alert className="cursor-pointer max-w-sm" onClick={onClick}>
              <Bell className="h-4 w-4" />
              <AlertTitle className="text-xs font-semibold">Update Available</AlertTitle>
              <AlertDescription className="text-xs text-muted-foreground">
                Click to copy code.
              </AlertDescription>
            </Alert>
          ),
        },
        {
          id: "alert-destructive",
          label: "Destructive Alert",
          code: `<Alert variant="destructive"><AlertTitle>Database Connection Failed</AlertTitle></Alert>`,
          component: (onClick) => (
            <Alert variant="destructive" className="cursor-pointer max-w-sm" onClick={onClick}>
              <AlertTriangle className="h-4 w-4" />
              <AlertTitle className="text-xs font-semibold">System Failure</AlertTitle>
              <AlertDescription className="text-xs">
                Unable to establish connection to cluster.
              </AlertDescription>
            </Alert>
          ),
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground p-6 md:p-12 space-y-10 max-w-7xl mx-auto">
      {/* Top Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b pb-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Interactive Component Variants</h1>
          <p className="text-muted-foreground text-sm mt-1">
            Click any variant directly to test interaction and instantly copy its source code.
          </p>
        </div>

        <div className="relative w-full md:w-72">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search variant name..."
            className="pl-8 text-xs"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      {/* Floating Copy Feedback Bar */}
      {copiedLabel && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-emerald-600 text-white px-4 py-2.5 rounded-xl shadow-lg animate-in fade-in slide-in-from-bottom-3 text-xs font-medium">
          <CheckCircle2 className="h-4 w-4" />
          <span>Copied source code for <strong>"{copiedLabel}"</strong>!</span>
        </div>
      )}

      {/* DIRECT UNWRAPPED COMPONENT LIST */}
      <div className="space-y-12">
        {sections.map((section) => {
          const filteredVariants = section.variants.filter((v) =>
            v.label.toLowerCase().includes(search.toLowerCase())
          );

          if (filteredVariants.length === 0) return null;

          return (
            <div key={section.title} className="space-y-4">
              <h2 className="text-xl font-bold border-b pb-2 text-foreground">
                {section.title}
              </h2>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                {filteredVariants.map((v) => (
                  <div
                    key={v.id}
                    className="flex flex-col items-start gap-1.5 p-2 rounded-lg hover:bg-muted/40 transition-colors"
                  >
                    <span className="text-[10px] font-semibold text-muted-foreground tracking-wide uppercase">
                      {v.label}
                    </span>
                    <div>{v.component(() => handleVariantClick(v.label, v.code))}</div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
'use client'

import { useAuth, UserProfile, useUser } from "@clerk/react-router";
import type { Route } from "./+types/profile";
import { Checkbox } from "~/components/ui/checkbox";
import { Field, FieldDescription, FieldLabel } from "~/components/ui/field";
import { Input } from "~/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { Plus, UserRoundIcon, X } from "lucide-react";
import { useRef, useState } from "react";

import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog";
import { Separator } from "~/components/ui/separator";
import { Textarea } from "~/components/ui/textarea";
import { Button } from "~/components/ui/button";
import { Label } from "~/components/ui/label";
import { Skeleton } from "~/components/ui/skeleton";


export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Profile" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Profile() {
  const [open, setOpen] = useState(true);
  const [authorName, setAuthorName] = useState("Ephraim Duncan");
  const [title, setTitle] = useState("Design Engineer");
  const [image, setImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 1_048_576) {
        alert("File size exceeds 1MB limit");
        return;
      }

      const reader = new FileReader();
      reader.onload = (event) => {
        setImage(event.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  const { user, isLoaded } = useUser();

  if (!isLoaded) {
    return <div className="flex items-center justify-center p-10">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
        {/* Left Column: Section Title & Description */}
        <div className="hidden md:block">
          <Skeleton className="h-6 w-48" />
          <Skeleton className="mt-2 h-4 w-64" />
        </div>

        {/* Right Column: Form Area */}
        <div className="sm:max-w-3xl md:col-span-2">
          {/* Avatar & Upload Button Section */}
          <div className="grid grid-cols-1 mb-6">
            <div className="flex flex-col items-center justify-center">
              {/* Avatar Circle */}
              <Skeleton className="h-24 w-24 rounded-full mb-2" />
              {/* Upload Label */}
              <Skeleton className="h-4 w-28 mb-1" />
              {/* Max File Size Label */}
              <Skeleton className="h-3 w-36 mb-3" />
              {/* Add Image Button */}
              <Skeleton className="h-9 w-28 rounded-md" />
            </div>
          </div>

          {/* Input Fields Grid */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-6">
            {/* Nom Field */}
            <div className="col-span-full sm:col-span-3 space-y-2">
              <Skeleton className="h-4 w-16" />
              <Skeleton className="h-10 w-full rounded-md" />
            </div>

            {/* Post-nom Field */}
            <div className="col-span-full sm:col-span-3 space-y-2">
              <Skeleton className="h-4 w-20" />
              <Skeleton className="h-10 w-full rounded-md" />
            </div>

            {/* Email Field */}
            <div className="col-span-full space-y-2">
              <Skeleton className="h-4 w-24" />
              <Skeleton className="h-10 w-full rounded-md" />
            </div>

            {/* Date de naissance Field */}
            <div className="col-span-full sm:col-span-3 space-y-2">
              <Skeleton className="h-4 w-32" />
              <Skeleton className="h-10 w-full rounded-md" />
            </div>

            {/* Role Field & Description */}
            <div className="col-span-full sm:col-span-3 space-y-2">
              <Skeleton className="h-4 w-12" />
              <Skeleton className="h-10 w-full rounded-md" />
              <Skeleton className="h-3 w-56" />
            </div>
          </div>
        </div>
      </div>
    </div>
  }
  // if (!isSignedIn) return <div>Loading...</div>;

  return <>
    <div className="flex items-center justify-center p-10">
      <form>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div className="hidden md:block">
            <h2 className="text-balance font-semibold text-foreground dark:text-foreground">
              Informations personnels
            </h2>
            <p className="mt-1 text-pretty text-muted-foreground text-sm leading-6 dark:text-muted-foreground">
              Personnalisez vos informations
            </p>
          </div>
          <div className="sm:max-w-3xl md:col-span-2">
            <div className="grid grid-cols-1 mb-6">
              <div className="flex flex-col items-center justify-center">
                <div className="relative mb-2">
                  <Avatar className="h-24 w-24 border-2 border-muted">
                    <AvatarImage alt="Profile" src={image || user?.imageUrl} />
                    <AvatarFallback>
                      <UserRoundIcon
                        aria-hidden="true"
                        className="text-muted-foreground"
                        size={52}
                      />
                    </AvatarFallback>
                  </Avatar>
                  <Button
                    className="-top-0.5 -right-0.5 absolute rounded-full border-[3px] border-background bg-accent hover:bg-accent"
                    onClick={() => {
                      if (image) {
                        setImage(null);
                        if (fileInputRef.current) {
                          fileInputRef.current.value = '';
                        }
                      } else {
                        triggerFileInput();
                      }
                    }}
                    size="icon-sm"
                    variant="ghost"
                  >
                    {image ? (
                      <X className="h-4 w-4 text-muted-foreground" />
                    ) : (
                      <Plus className="h-3 w-3 text-muted-foreground" />
                    )}
                    <span className="sr-only">
                      {image ? 'Remove image' : 'Upload image'}
                    </span>
                  </Button>
                </div>

                <p className="text-pretty text-center font-medium">{user?.fullName}</p>
                <p className="text-pretty text-center text-muted-foreground text-sm">
                  Max file size: 1MB
                </p>
                <input
                  accept="image/*"
                  className="hidden"
                  onChange={handleFileChange}
                  ref={fileInputRef}
                  type="file"
                /> <Button
                  className="mt-2"
                  onClick={triggerFileInput}
                  size="sm"
                  variant="outline"
                >
                  Add Image
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-6">
              <div className="col-span-full sm:col-span-3">
                <Field className="gap-2">
                  <FieldLabel htmlFor="first-name">Nom</FieldLabel>
                  <Input
                    autoComplete="given-name"
                    id="first-name"
                    name="first-name"
                    placeholder={`${user?.firstName}`}
                    type="text"
                  />
                </Field>
              </div>
              <div className="col-span-full sm:col-span-3">
                <Field className="gap-2">
                  <FieldLabel htmlFor="last-name">Post-nom</FieldLabel>
                  <Input
                    autoComplete="family-name"
                    id="last-name"
                    name="last-name"
                    placeholder={`${user?.lastName}`}
                    type="text"
                  />
                </Field>
              </div>
              <div className="col-span-full">
                <Field className="gap-2">
                  <FieldLabel htmlFor="email">Adresse mail</FieldLabel>
                  <Input
                    autoComplete="email"
                    id="email"
                    name="email"
                    placeholder={`${user?.emailAddresses[0].emailAddress}`}
                    type="email"
                  />
                </Field>
              </div>
              <div className="col-span-full sm:col-span-3">
                <Field className="gap-2">
                  <FieldLabel htmlFor="birthyear">
                    Date de naissance
                  </FieldLabel>
                  <Input
                    id="birthyear"
                    name="year"
                    placeholder={``}
                    type="date"
                  />
                </Field>
              </div>
              <div className="col-span-full sm:col-span-3">
                <Field className="gap-2">
                  <FieldLabel htmlFor="role">Role</FieldLabel>
                  <Input
                    disabled
                    id="role"
                    name="role"
                    placeholder={`${user?.publicMetadata?.role || "User"}`}
                    type="text"
                  />
                  <FieldDescription>
                    Roles can only be changed by system admin.
                  </FieldDescription>
                </Field>
              </div>
            </div>
          </div>
        </div>
        {/* <Separator className="my-8" />
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div>
            <h2 className="text-balance font-semibold text-foreground dark:text-foreground">
              Workspace settings
            </h2>
            <p className="mt-1 text-pretty text-muted-foreground text-sm leading-6 dark:text-muted-foreground">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
            </p>
          </div>
          <div className="sm:max-w-3xl md:col-span-2">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-6">
              <div className="col-span-full sm:col-span-3">
                <Field className="gap-2">
                  <FieldLabel htmlFor="workspace-name">
                    Workspace name
                  </FieldLabel>
                  <Input
                    id="workspace-name"
                    name="workspace-name"
                    placeholder="Test workspace"
                    type="text"
                  />
                </Field>
              </div>
              <div className="col-span-full sm:col-span-3">
                <Field className="gap-2">
                  <FieldLabel htmlFor="visibility">Visibility</FieldLabel>
                  <Select
                    defaultValue="private"
                    items={{ private: "Private", public: "Public" }}
                    name="visibility"
                  >
                    <SelectTrigger id="visibility">
                      <SelectValue placeholder="Select visibility" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="public">Public</SelectItem>
                      <SelectItem value="private">Private</SelectItem>
                    </SelectContent>
                  </Select>
                </Field>
              </div>
              <div className="col-span-full">
                <Field className="gap-2">
                  <FieldLabel htmlFor="workspace-description">
                    Workspace description
                  </FieldLabel>
                  <Textarea
                    id="workspace-description"
                    name="workspace-description"
                    rows={4}
                  />
                  <FieldDescription>
                    Note: description provided will not be displayed
                    externally.
                  </FieldDescription>
                </Field>
              </div>
            </div>
          </div>
        </div>  */}
        {/* <Separator className="my-8" />
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div>
            <h2 className="text-balance font-semibold text-foreground dark:text-foreground">
              Notification settings
            </h2>
            <p className="mt-1 text-pretty text-muted-foreground text-sm leading-6 dark:text-muted-foreground">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
            </p>
          </div>
          <div className="sm:max-w-3xl md:col-span-2">
            <fieldset>
              <legend className="font-medium text-foreground text-sm dark:text-foreground">
                Team
              </legend>
              <FieldDescription className="mt-1 leading-6">
                Configure the types of team alerts you want to receive.
              </FieldDescription>
              <div className="mt-2">
                <div className="flex items-center gap-x-3 py-1">
                  <Checkbox
                    defaultChecked
                    id="team-requests"
                    name="team-requests"
                  />
                  <FieldLabel className="font-normal" htmlFor="team-requests">
                    Team join requests
                  </FieldLabel>
                </div>
                <div className="flex items-center gap-x-3 py-1">
                  <Checkbox
                    id="team-activity-digest"
                    name="team-activity-digest"
                  />
                  <FieldLabel
                    className="font-normal"
                    htmlFor="team-activity-digest"
                  >
                    Weekly team activity digest
                  </FieldLabel>
                </div>
              </div>
            </fieldset>
            <fieldset className="mt-6">
              <legend className="font-medium text-foreground text-sm dark:text-foreground">
                Usage
              </legend>
              <FieldDescription className="mt-1 leading-6">
                Configure the types of usage alerts you want to receive.
              </FieldDescription>
              <div className="mt-2">
                <div className="flex items-center gap-x-3 py-1">
                  <Checkbox id="api-requests" name="api-requests" />
                  <FieldLabel className="font-normal" htmlFor="api-requests">
                    API requests
                  </FieldLabel>
                </div>
                <div className="flex items-center gap-x-3 py-1">
                  <Checkbox
                    id="workspace-execution"
                    name="workspace-execution"
                  />
                  <FieldLabel
                    className="font-normal"
                    htmlFor="workspace-execution"
                  >
                    Workspace loading times
                  </FieldLabel>
                </div>
                <div className="flex items-center gap-x-3 py-1">
                  <Checkbox
                    defaultChecked
                    id="query-caching"
                    name="query-caching"
                  />
                  <FieldLabel className="font-normal" htmlFor="query-caching">
                    Query caching
                  </FieldLabel>
                </div>
                <div className="flex items-center gap-x-3 py-1">
                  <Checkbox defaultChecked id="storage" name="storage" />
                  <FieldLabel className="font-normal" htmlFor="storage">
                    Storage
                  </FieldLabel>
                </div>
              </div>
            </fieldset>
          </div>
        </div> 
        <Separator className="my-8" /> */}
        <div className="flex items-center justify-end space-x-4">
          <Button className="whitespace-nowrap" type="submit">
            Save settings
          </Button>
        </div>
      </form>
    </div >
  </>;
}

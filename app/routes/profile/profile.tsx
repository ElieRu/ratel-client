'use client'

// import { useUser } from "@clerk/react-router";
import type { Route } from "./+types/profile";
import { Field, FieldDescription, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Plus, UserRoundIcon, X } from "lucide-react";
import { useRef, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import type { UserForm } from "@/lib/definitions";
import { API } from "@/lib/utils";
import { UserProfileSkeleton } from "@/components/all-skeletons";


export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Profile" },
    { name: "description", content: "Personalisez vos informations!" },
  ];
}

import { Separator } from "@/components/ui/separator";
import ContactsManager from "@/components/contacts/contacts";
import { useUser } from "@clerk/react-router";



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
  if (!isLoaded) return UserProfileSkeleton();

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = {
      firstName: formData.get('first-name') as string,
      lastName: formData.get('last-name') as string,
      email: formData.get('email') as string,
      // birthday: formData.get('year') as string,
    };
    console.log(data);
    fetch(`${API}/profile`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }

  return <>
    <div className="flex items-center justify-center p-10">
      <form onSubmit={submit}>
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
        <Separator className="my-8" />

        <ContactsManager />

        {/* other contacts... */}
        
      </form>
    </div >
  </>;
}

import { Card, CardContent, CardHeader } from "./ui/card";
import { SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "./ui/sidebar";
import { Skeleton } from "./ui/skeleton";

export function UserProfileSkeleton() {
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

export function UserNavSkeleton() {
    return <SidebarMenu>
        <SidebarMenuItem>
            <SidebarMenuButton size="lg" className="pointer-events-none">
                {/* Avatar Skeleton */}
                <Skeleton className="size-8 rounded-lg shrink-0 bg-muted-foreground" />

                {/* User Name & Email Text Lines Skeleton */}
                <div className="grid flex-1 gap-1.5 text-left">
                    <Skeleton className="h-3.5 w-24 bg-muted-foreground" />
                    <Skeleton className="h-2.5 w-32 bg-muted-foreground" />
                </div>

                {/* Ellipsis Icon Skeleton */}
                <Skeleton className="ml-auto size-4 rounded-full shrink-0 bg-muted-foreground" />
            </SidebarMenuButton>
        </SidebarMenuItem>
    </SidebarMenu>
}

export function ContactsListSkeleton () {
    return <>
      {Array.from({ length: 3 }).map((_, index) => (
        <Card key={index} className="relative">
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            {/* Label Skeleton */}
            <Skeleton className="h-5 w-1/2" />

            {/* Actions Button Skeleton */}
            <Skeleton className="size-8 rounded-md" />
          </CardHeader>

          <CardContent className="space-y-3">
            {/* Phone Skeleton */}
            <div className="flex items-center gap-2">
              <Skeleton className="size-4 rounded-full shrink-0" />
              <Skeleton className="h-4 w-2/3" />
            </div>

            {/* Email Skeleton */}
            <div className="flex items-center gap-2">
              <Skeleton className="size-4 rounded-full shrink-0" />
              <Skeleton className="h-4 w-4/5" />
            </div>

            {/* Badges Footer Skeleton */}
            <div className="flex items-center justify-between pt-2 border-t border-border">
              {/* Par défaut Badge Skeleton */}
              <Skeleton className="h-5 w-20 rounded-full" />

              {/* Status Badge Skeleton */}
              <Skeleton className="h-5 w-16 rounded-full" />
            </div>
          </CardContent>
        </Card>
      ))}
    </>
}
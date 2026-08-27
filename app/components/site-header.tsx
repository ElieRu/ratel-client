import { Separator } from "./ui/separator"
import { SidebarTrigger } from "./ui/sidebar"

export function SiteHeader({ title }: { title: String }) {
  return (
    <header className="sticky top-0 z-5 flex h-(--header-height) shrink-0 items-center gap-2 md:border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height) rounded-t-2xl">
      <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
        <SidebarTrigger className="-ml-1" />
        <Separator
          orientation="vertical"
          className="mx-2 h-4 data-vertical:self-auto"
        />
        <h1 className="text-base font-medium">{title}</h1>
      </div>
    </header>
  )
}

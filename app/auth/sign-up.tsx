import { Card } from "~/components/ui/card"
import type { Route } from "./sign-up/[[...sign-up]]/+types/page";
import { SignUp } from "@clerk/react-router";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "My Admin App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function SignUpPage({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return <div className="flex min-h-svh bg-muted flex-col items-center justify-center p-6 md:p-10">
    <Card className="overflow-hidden p-0">
      <div className="m-auto">
        <SignUp
          appearance={{
            options: {
              logoImageUrl: '/favicon.ico',
              logoPlacement: 'inside',
              socialButtonsPlacement: 'bottom',
              socialButtonsVariant: 'iconButton',
              animations: true,
              autoFocus: true,
              // elevation: 'flush',
              helpPageUrl: 'http://localhost:5173/aides/auth',
              logoLinkUrl: 'http://localhost:5173',
              // privacyPageUrl: 'http://localhost:5654/privacy',
              // termsPageUrl: 'https://clerk.com/terms'
            },
            variables: {
              colorPrimary: 'var(--primary)',
              colorForeground: '#000000',
              colorBackground: 'var(--background)',
              colorInputForeground: 'var(--foreground)',
              colorBorder: 'var(--foreground)',
              colorShadow: 'var(--muted)'
            },
            elements: {
              // cardBox: {},
              // card: {},
              formFieldInput: {
                backgroundColor: 'var(--background)',
              },
              formButtonPrimary: {
                color: 'var(--primary-foreground)',
              },
              buttonArrowIcon: {
                display: 'none'
              },
              footerItem: {
                display: 'none'
              },
              socialButtonsBlockButtonText: {
                color: 'var(--secondary-foreground)'
              }
            },
          }}
        />
      </div>
    </Card>
  </div>
}

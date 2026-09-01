"use client"

import { cn } from "~/lib/utils"
import { Card, CardContent } from "~/components/ui/card"
import {
  FieldDescription,
} from "~/components/ui/field"
// import { SignIn } from "@clerk/react-router"

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="overflow-hidden p-0">
        <CardContent className="grid p-0 md:grid-cols-2">
          <div className="m-auto">
            {/* <LoginForm /> */}
          </div>
          <div className="relative hidden bg-muted md:block">
            <img
              src="/login-img.jpg"
              alt="Image"
              className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
            />
          </div>
        </CardContent>
      </Card>
      <FieldDescription className="px-6 text-center">
        By clicking continue, you agree to our <a href="#">Terms of Service</a>{" "}
        and <a href="#">Privacy Policy</a>.
      </FieldDescription>
    </div>
  )
}

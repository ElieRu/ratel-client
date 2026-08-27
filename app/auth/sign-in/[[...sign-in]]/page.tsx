import { SignIn } from "@clerk/react-router";
import { LoginForm } from "~/components/login-form";
import type { Route } from "../../../+types/root";

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "My Admin App" },
        { name: "description", content: "Welcome to React Router!" },
    ];
}

export default function Page() {
    return <div className="flex min-h-svh flex-col items-center justify-center bg-muted p-6 md:p-10">
        <div className="w-full max-w-sm md:max-w-4xl">
            {/* <LoginForm /> */}
            <SignIn
                appearance={{
                    variables: {
                        colorPrimary: '#ff0000',
                        colorBackground: '#373737',
                        borderRadius: '0.5rem'
                    },
                    elements: {
                        formButtonPrimary: 'bg-black hover:bg-gray-800 text-sm normal-case',
                        card: 'shadow-md border border-gray-100'
                    }
                }}
            />
        </div>
    </div>
}
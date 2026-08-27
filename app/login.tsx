import type { Route } from "./auth/+types/login";

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "My Admin App" },
        { name: "description", content: "Welcome to React Router!" },
    ];
}

export default function Page() {
    return <div>
        login
    </div>
}
import type { Contact } from "./definitions";


export interface Response {
    success: boolean | null;
    message: string | null,
    data: Contact | null;
}

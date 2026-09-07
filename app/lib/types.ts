import type { Contact } from "./validations";


export interface Response {
    success: boolean | null;
    message: string | null,
    data: Contact | null;
}

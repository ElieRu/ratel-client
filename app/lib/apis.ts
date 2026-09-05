// import { getToken } from "@clerk/react-router";
import type { ContactForm } from "./definitions";
import { API } from "./utils";

export const getRemoveAccount = async () => {
    // const token = await getToken();
    try {
        await fetch(`${API}/users/deleteUser`, {
            method: "POST",
            headers: {
                // 'Authorization': `${token}`,
                'Content-Type': 'application/json',
            },
        });
    } catch (error) {
        console.error(error);
    }
}

export const createContact = async (form: ContactForm) => {
    // const token = await getToken();
    return await fetch(`${API}/contacts`, {
        method: "POST",
        headers: {
            // 'Authorization': `${token}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
    }).then(async (res) => {
        console.log(await res.json());
        return await res.json();
    }).catch((err) => {
        return err;
    });
}





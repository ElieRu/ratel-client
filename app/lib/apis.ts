// import { getToken } from "@clerk/react-router";
import type { Contact } from "./validations";
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

export const createContact = async (form: Contact) => {
    // const token = await getToken();
    const response = await fetch(`${API}/contacts`, {
        method: "POST",
        headers: {
            // 'Authorization': `${token}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
    });
    
    const result = await response.json();
    if (!response.ok) {
        throw new Error(result.message || 'Form validation failed');
    }
    console.log(result);
    return result;
}


export const listContact = async () => {
    // const token = await getToken();
    const response = await fetch(`${API}/contacts`, {
        method: "GET",
        headers: {
            // 'Authorization': `${token}`,
            'Content-Type': 'application/json',
        },
    });

    const result = await response.json();
    if (!response.ok) {
        throw new Error(result.message || 'Fetching data failed');
    }
    
    return result;
}





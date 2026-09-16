// import { getToken } from "@clerk/react-router";
import type { Adresse, Contact } from "./validations";
import { API } from "./utils";
import type { Response } from "./types";

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


export const removeContact = async (id: string) => {
    // const token = await getToken();
    const response = await fetch(`${API}/contacts/${id}`, {
        method: "DELETE",
        headers: {
            // 'Authorization': `${token}`,
            'Content-Type': 'application/json',
        },
    });

    const result = await response.json();
    if (!response.ok) {
        throw new Error(result.message || 'Remove data failed');
    }
    console.log(result);
    return result;
}

export const changerParDefaut = async (id: string) => {
    // const token = await getToken();
    const response = await fetch(`${API}/contacts/${id}/par-defaut`, {
        method: "PUT",
        headers: {
            // 'Authorization': `${token}`,
            'Content-Type': 'application/json',
        },
    });

    const result = await response.json();
    if (!response.ok) {
        throw new Error(result.message || 'Update data failed');
    }
    console.log(result);
    return result;
}


export const contactVerfication = async (contactId: string, token: string) => {
    // const token = await getToken();
    const response = await fetch(`${API}/contacts/${contactId}/verifier`, {
        method: "PUT",
        headers: {
            // 'Authorization': `${token}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            token: token
        }),
    });

    const result = await response.json();
    if (!response.ok) {
        throw new Error(result.message || 'Verfication data failed');
    }
    console.log(result);
    return result;
}


export const getAdresse = async () => {
    // const token = await getToken();
    const response = await fetch(`${API}/adresses`, {
        method: "GET",
        headers: {
            // 'Authorization': `${token}`,
            'Content-Type': 'application/json',
        },
    });

    const result = await response.json();
    if (!response.ok) {
        throw new Error(result.message || 'get data failed');
    }
    console.log(result);
    return result;
}

export const createAdresse = async (form: Adresse) => {
    // const token = await getToken();
    const response = await fetch(`${API}/adresses`, {
        method: "POST",
        headers: {
            // 'Authorization': `${token}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
    });

    const result = await response.json();
    if (!response.ok) {
        throw new Error(result.message || 'Create data failed');
    }
    console.log(result);
    return result;
}

export const removeAdress = async (id: string) => {
    // const token = await getToken();
    const response = await fetch(`${API}/adresses/${id}`, {
        method: "DELETE",
        headers: {
            // 'Authorization': `${token}`,
            'Content-Type': 'application/json',
        },
    });

    const result = await response.json();
    if (!response.ok) {
        throw new Error(result.message || 'Delete data failed');
    }
    console.log(result);
    return result as Promise<Response>;
}

export const updateAdress = async (id: string, form: Adresse) => {
    // const token = await getToken();
    const response = await fetch(`${API}/adresses/${id}`, {
        method: "PUT",
        headers: {
            // 'Authorization': `${token}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(form)
    });

    const result = await response.json();
    if (!response.ok) {
        throw new Error(result.message || 'update data failed');
    }
    console.log(result);
    return result;
}


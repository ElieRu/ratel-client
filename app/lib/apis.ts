import { getToken } from "@clerk/react-router";
import type { Adresse, Business, Contact, User } from "./validations";
import { API } from "./utils";
import type { Response } from "./types";

export const creer_business = async (form: Business) => {
    const token = await getToken();
    const response = await fetch(`${API}/api/businesses`, {
        method: "POST",
        headers: {
            'Authorization': `${token}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
    });

    const responseText = await response.text();
    let result: { message?: string } | null = null;
    if (responseText) {
        try {
            result = JSON.parse(responseText);
        } catch {
            result = { message: responseText };
        }
    }
    if (!response.ok) {
        throw new Error(result?.message || 'La création du business a échoué');
    }
    return result;
}

export const creer_user = async () => {
    const token = await getToken();
    if (!token) {
        throw new Error("Votre session a expiré. Veuillez vous reconnecter.");
    }

    const response = await fetch(`${API}/auth/createUser`, {
        method: "POST",
        headers: {
            'Authorization': `${token}`,
            'Content-Type': 'application/json',
        },
    });

    const responseText = await response.text();
    let result: { success?: boolean; redirect?: boolean; message?: string } | null = null;
    if (responseText) {
        try {
            result = JSON.parse(responseText);
        } catch {
            result = null;
        }
    }
    if (!response.ok) {
        throw new Error(result?.message || `L'enregistrement a échoué (HTTP ${response.status}).`);
    }
    if (!result) {
        throw new Error("Le serveur a renvoyé une réponse invalide lors de l'enregistrement.");
    }
    return result;
}

export const is_welcome = async () => {
    const token = await getToken();
    const response = await fetch(`${API}/auth/is-welcome`, {
        method: "PUT",
        headers: {
            'Authorization': `${token}`,
            'Content-Type': 'application/json',
        },
    });

    const result = await response.json();
    if (!response.ok) {
        throw new Error(result.message || 'Create data failed');
    }
    console.log(result);
    return result;
}

export const supprimer_user = async () => {
    const token = await getToken();
    try {
        await fetch(`${API}/auth/deleteUser`, {
            method: "POST",
            headers: {
                'Authorization': `${token}`,
                'Content-Type': 'application/json',
            },
        });
    } catch (error) {
        console.error(error);
    }
}

export const creer_contact = async (form: Contact & { fournisseurId?: string }) => {
    const token = await getToken();
    const response = await fetch(`${API}/contacts`, {
        method: "POST",
        headers: {
            'Authorization': `${token}`,
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

export const modifier_contact = async (
    id: string,
    form: Contact & { fournisseurId?: string }
) => {
    const token = await getToken();
    const response = await fetch(`${API}/contacts/${id}`, {
        method: "PUT",
        headers: {
            'Authorization': `${token}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
    });
    const result = await response.json();
    if (!response.ok || result.success === false) {
        throw new Error(result.message || "La modification du contact a échoué.");
    }
    return result;
}

export const items_contact = async () => {
    const token = await getToken();
    const response = await fetch(`${API}/contacts`, {
        method: "GET",
        headers: {
            'Authorization': `${token}`,
            'Content-Type': 'application/json',
        },
    });

    const result = await response.json();
    if (!response.ok) {
        throw new Error(result.message || 'Fetching data failed');
    }

    return result;
}

export const supprimer_contact = async (id: string) => {
    const token = await getToken();
    const response = await fetch(`${API}/contacts/${id}`, {
        method: "DELETE",
        headers: {
            'Authorization': `${token}`,
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

export const changer_par_defaut_contact = async (id: string) => {
    const token = await getToken();
    const response = await fetch(`${API}/contacts/${id}/par-defaut`, {
        method: "PUT",
        headers: {
            'Authorization': `${token}`,
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

export const verifier_contact = async (contactId: string, token: string) => {
    const client_token = await getToken();
    const response = await fetch(`${API}/contacts/${contactId}/verifier`, {
        method: "PUT",
        headers: {
            'Authorization': `${client_token}`,
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

export const items_adresse = async (businessId: string | null, clientId: string | null, fournisseurId: string | null) => {
    const token = await getToken();
    const response = await fetch(`${API}/adresses`, {
        method: "GET",
        headers: {
            'Authorization': `${token}`,
            'Content-Type': 'application/json',
        },
        // body: JSON.stringify({
        //     clientId: clientId,
        //     fournisseurId: fournisseurId,
        //     businessId: businessId
        // })
    });

    const result = await response.json();
    if (!response.ok) {
        throw new Error(result.message || 'get data failed');
    }
    console.log(result);
    return result;
}

export const item_adresse = async (id: string) => {
    const token = await getToken();
    const response = await fetch(`${API}/adresses/${id}`, {
        method: "GET",
        headers: {
            'Authorization': `${token}`,
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

export const creer_adresse = async (form: Adresse) => {
    const token = await getToken();
    const response = await fetch(`${API}/adresses`, {
        method: "POST",
        headers: {
            'Authorization': `${token}`,
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

export const supprimer_adresse = async (id: string) => {
    const token = await getToken();
    const response = await fetch(`${API}/adresses/${id}`, {
        method: "DELETE",
        headers: {
            'Authorization': `${token}`,
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

export const modifier_adresse = async (id: string, form: Adresse) => {
    const token = await getToken();
    const response = await fetch(`${API}/adresses/${id}`, {
        method: "PUT",
        headers: {
            'Authorization': `${token}`,
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

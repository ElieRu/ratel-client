import { getToken } from "@clerk/react-router";
import { API } from "./utils";


export const getRemoveAccount = async () => {
    const token = await getToken();
    try {
        await fetch(`${API}/users/deleteUser`, {
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
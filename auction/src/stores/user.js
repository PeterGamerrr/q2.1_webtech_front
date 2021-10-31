import {derived, writable} from "svelte/store";

export const authToken = writable("");

export const user = derived(
    authToken,
    $authToken => {
        if ($authToken) {
            let data = $authToken.split(".")[1];
            data = decodeURIComponent(escape(window.atob(data)));
            data = JSON.parse(data);
            return data;
        } else {
            return undefined;
        }
    }
)

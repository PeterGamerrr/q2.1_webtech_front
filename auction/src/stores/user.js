import {derived, writable} from "svelte/store";

//the authtoken saved when logging in
export const authToken = writable("");

//a parsed version of the jwt token in which you can access all body data using the object literal format
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

import {derived, readable, writable} from "svelte/store";
import router from "page";

export const filteredItems = writable([]);

export const authToken = writable("");

export const user = derived(
    authToken,
    async $authToken => {
        if ($authToken) {
            let data = $authToken.split(".")[1];
            data = decodeURIComponent(escape(window.atob(data)));
            data = await JSON.parse(data);
            return data;
        } else {
            return undefined;
        }

    }
)

//using old syntax because async await didnt work
export const products = readable([],function start(set) {
    fetch("http://localhost:3000/api/products")
        .then(function (response) {
            if (!response.ok) {
                throw new Error("unable to load products")
            }
            return response.json()
        })
        .then(function (data) {
            set(data);
        })
        .catch(function(e) {
            console.error(e)
        });
    return function stop(){
    };
});

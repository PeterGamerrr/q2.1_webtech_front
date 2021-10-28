import {readable, writable} from "svelte/store";
import router from "page";

export const filteredItems = writable([]);

export const authToken = writable("");

export const products = readable([],async (set) => {
    try {
        console.log("one person is subscribed to products")
        let response = await fetch("http://localhost:3000/api/products");
        console.log(response);
        if (response.ok) {
            let json = await response.json();
            console.log(json);
            set(json);
        }
        return () => console.log("no one is subscribed to products")
    } catch (e) {
        console.error(e);
    }
});

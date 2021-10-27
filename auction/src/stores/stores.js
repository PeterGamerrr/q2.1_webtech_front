import {readable, writable} from "svelte/store";
import router from "page";

export const filteredItems = writable([]);

export const authToken = writable("");

// export const products = readable(null, async (set) => {
//     let res = await fetch("http://localhost:3000/api/products");
//     console.log(res)
//     if (res.ok) {
//         res = await res.json();
//         console.log(res);
//         set(res);
//     }
// })
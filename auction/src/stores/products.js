//using old syntax because async await didnt work
import {readable} from "svelte/store";

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
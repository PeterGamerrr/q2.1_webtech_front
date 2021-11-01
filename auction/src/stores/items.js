import {derived, writable} from "svelte/store";
import {products} from "./products";


//a function that adds product data based on productid
function setProduct(data) {
    if (data instanceof Object) {
        let productList;
        products.subscribe(value => productList = value)
        data.product = productList.find(e => e.id === data.productId);
    } else {
        throw new Error("input is not an array")
    }
}

//a complete set of all the auctions
export const items = writable([], function start(set) {
    fetch("http://localhost:3000/api/auctions")
        .then(function(response) {
            if (!response.ok) {
                throw new Error("Unable to load auctions");
            }
            response.json().then(function(data) {
                console.log({data})
                set(data);
            })
        })
        .catch(function(e) {
            console.error(e);
        })
    return function stop() {
    }
});

//the value of the searchbar
export const searchBar = writable("");

//all the filter values
export const filters = writable({region: "", capacity: "", brand: ""});

//all auctions filtered on search bar and filter values.
export const filteredItems = derived(
    [items, searchBar, filters],
    ([$items,$searchbar,$filters], set) => {
        let out = $items;

        //filter by filters
        if($filters && out) {
            out = out.filter(el => {
                if (el.product === undefined) setProduct(el);
                if ($filters.region && $filters.region.toString().toLowerCase() !== el.product.region.toString().toLowerCase()) return false;
                if ($filters.capacity && $filters.capacity.toString().toLowerCase() !== el.product.capacity.toString().toLowerCase()) return false;
                if ($filters.brand && $filters.brand.toString().toLowerCase() !== el.product.brand.toString().toLowerCase()) return false;
                return true;
            })
        }

        //filter by searchbar
        if ($searchbar.length > 0 && out) {
            out = out.filter(el => {
                if (el.product) {
                    for (const val of Object.values(el.product)) {
                        if (typeof val === "string" &&
                            val.toLowerCase().includes($searchbar)) {
                            return true;
                        } else if (typeof val === "number" &&
                            val.toString().includes($searchbar)) {
                            return true;
                        }
                    }
                }
                return false;
            });
        }
        set(out);
    }
)
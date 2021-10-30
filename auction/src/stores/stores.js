import {derived, readable, writable} from "svelte/store";

let dummydata = [
    {
        id: 0,
        startPrice: 25,
        price: 30.2,
        startDate: new Date(2020, 0).getTime(),
        endDate: new Date(2022, 0).getTime(),
        productId: 0
    },
    {
        id: 1,
        startPrice: 23,
        price: 25.6,
        startDate: new Date(2005, 0).getTime(),
        endDate: new Date(2007, 0).getTime(),
        productId: 1
    },
    {
        id: 2,
        startPrice: 23,
        price: 25.6,
        startDate: new Date(2005, 0).getTime(),
        endDate: new Date(2007, 0).getTime(),
        productId: 1
    },
    {
        id: 3,
        startPrice: 23,
        price: 25.6,
        startDate: new Date(2005, 0).getTime(),
        endDate: new Date(2007, 0).getTime(),
        productId: 1
    },
    {
        id: 4,
        startPrice: 23,
        price: 25.6,
        startDate: new Date(2005, 0).getTime(),
        endDate: new Date(2007, 0).getTime(),
        productId: 1
    },
    {
        id: 5,
        startPrice: 23,
        price: 25.6,
        startDate: new Date(2005, 0).getTime(),
        endDate: new Date(2007, 0).getTime(),
        productId: 1
    },
    {
        id: 6,
        startPrice: 23,
        price: 25.6,
        startDate: new Date(2005, 0).getTime(),
        endDate: new Date(2007, 0).getTime(),
        productId: 1
    }
]

function setProduct(data) {
    if (data instanceof Object) {
        let productList;
        products.subscribe(value => productList = value)
        data.product = productList.find(e => e.id === data.productId);
    } else {
        throw new Error("input is not an array")
    }
}

export const items = writable([], function start(set) {
    fetch("http://localhost:3000/api/auctions")
        .then(function(response) {
            if (!response.ok) {
                throw new Error("Unable to load auctions");
            }
            response.json().then(function(data) {
                if (!data) {
                    console.warn("DUMMYDATA")
                    // set(dummydata)
                } else {
                    set(data);
                }
            })
        })
        .catch(function(e) {
            console.error(e);
        })
    return function stop() {
    }
});

export const searchBar = writable("");

export const filters = writable({region: "", capacity: "", brand: ""});

export const filteredItems = derived(
    [items, searchBar, filters],
    ([$items,$searchbar,$filters], set) => {
            let out = $items;

            //filter by filters
            if($filters && out) {
                out = out.filter(el => {
                    if (el.product === undefined) setProduct(el);
                    if ($filters.region && $filters.region.toLowerCase() !== el.product.region.toLowerCase()) return false;
                    if ($filters.capacity && $filters.capacity.toLowerCase() !== el.product.capacity.toLowerCase()) return false;
                    if ($filters.brand && $filters.brand.toLowerCase() !== el.product.brand.toLowerCase()) return false;
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

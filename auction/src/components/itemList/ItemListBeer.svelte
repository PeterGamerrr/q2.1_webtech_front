<script>
    import {authToken} from "../../stores/user";
    import {items} from "../../stores/items";
    import {products} from "../../stores/products";
    import router from "page";
    import {createEventDispatcher} from "svelte";

    const dispatch = createEventDispatcher();

    export let admin;
    export let beer = {
        id: undefined,
        startPrice: undefined,
        price: undefined,
        startDate: undefined,
        endDate: undefined,
        productId: undefined
    };

    $: {
        beer.product = $products.find(e => e.id === beer.productId);
    }

    //deletes an auction on the server while also deleting it on the client
    async function deleteAuction() {
        let res = await fetch("http://localhost:3000/api/auctions/"+ beer.id, {
            method: "delete",
            headers: new Headers({
                Authorization: "bearer " + $authToken
            })
        });
        if (res.ok) {
            let data = await res.json();
            items.update(oldItems => oldItems.filter(e => e.id !== beer.id));
            return data;
        } else {
            throw new Error("Couldn't fetch bids")
        }
    }

</script>

{#if beer.product}
    <div class="beer">
        <span class="title"><a href={"/auctions/"+ beer.id}>{beer.product.name}</a></span><br>
        <ul>
            <li>
                <b>Region:</b> {beer.product.region}
            </li>
            <li>
                <b>Capacity:</b> {beer.product.capacity}
            </li>
            <li>
                <b>Brand:</b> {beer.product.brand}
            </li>
            {#if admin}
                <li>
                    <b>Auction ID:</b> {beer.id}
                </li>
            {/if}
        </ul>
        {#if admin}
            <div class="admin"><button on:click={() => router.redirect("/auctions/"+beer.id+"/edit") }>Edit</button> <button on:click={deleteAuction}>Delete</button></div>
        {/if}
        </div>
    {:else}
    <div class="beer">
        loading...
    </div>
{/if}


<style>
    .beer {
        padding: 10px;
        border: 1px solid black;
    }

    .title {
        font-size: 30px;
    }

    ul {
        list-style-type: none;
    }
</style>
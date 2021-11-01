<script>
    import Navbar from "../components/Navbar.svelte";
    import {items} from "../stores/items";
    import {user} from "../stores/user";
    import router from "page";
    import Bid from "../components/Bid.svelte";
    import BidForm from "../components/form/BidForm.svelte";

    export let params;

    console.log(params);
    let item = $items.find(e => e.id === parseInt(params.params.id));
    let auction = {};

    $: {
        if (item) {
            auction = item;
        } else {
            router.redirect("/");
        }
    }

    let secondsLeft = Math.trunc((auction.endDate - Date.now())/1000);
    setInterval(() => secondsLeft = Math.trunc((auction.endDate - Date.now())/1000), 1000)

    async function getBids() {
        let res = await fetch("http://localhost:3000/api/bids?auctionId="+params.params.id);
        if (res.ok) {
            return await res.json();
        } else {
            throw new Error("couldnt fetch bids")
        }
    }

    let bidsPromise = getBids()



</script>

<main>
    <Navbar/>
    <div class="center">
        {#if auction.product}
        <h1>{auction.product.name}</h1>
        <ul class="specs">
            <h2>Specifications:</h2>
            <li>
                <b>Region:</b> {auction.product.region}
            </li>
            <li>
                <b>Capacity:</b> {auction.product.capacity}
            </li>
            <li>
                <b>Brand:</b> {auction.product.brand}
            </li>
            <li>
                <b>Time left:</b> {#if typeof secondsLeft === "number"}{#if secondsLeft > 60}{#if secondsLeft > 3600}{#if secondsLeft > 86400}{Math.trunc(secondsLeft/86400)} days {/if}{Math.trunc(secondsLeft/3600)%24}:{/if}{Math.trunc(secondsLeft/60)%60}:{/if}{secondsLeft % 60}{/if}
            </li>

        </ul>
        <div class="bids">
            <h2>Bids:</h2>
        {#await bidsPromise}
            Loading...
        {:then bids}
            <h3>Current highest bid: €{bids.reduce((prev, curr) => prev.price > curr.price ? prev : curr,{price: auction.startPrice}).price}</h3>
            <ul>
                {#each bids as bid}
                    <Bid {bid} {secondsLeft} on:deleteBid={() => bidsPromise = getBids()}/>
                {/each}
            </ul>
            {#if $user && $user.roles.includes("user") && secondsLeft > 0 }
            <BidForm on:submit={() => bidsPromise = getBids()} startPrice={auction.startPrice} auctionId={auction.id} {bids}/>
            {/if}
        {:catch err}
            <span class="error">{err}</span>
        {/await}
        </div>
        {/if}


    </div>

</main>
<style>
    main {
        width: 100vw;
        height: 100vh;
        display: grid;
        grid-template-columns: 1fr 2fr 1fr;
        grid-template-rows: 3.5rem 1fr;
        grid-template-areas:
            "navigation navigation navigation"
            ". mainarea .";
        grid-gap: 1rem;
    }

    ul {
        list-style-type: none;
    }

    .center {
        width: 100%;
        grid-area: mainarea;
        justify-self: center;
        display: grid;
        grid-template-rows: auto 1fr;
        grid-template-columns: 1fr 1fr;
        grid-template-areas:
            "header header"
            "left right";
    }

    h1 {
        text-align: center;
        grid-area: header;
        width: 100%;
        height: 100%;
        margin: 0;
    }

    .specs {
        grid-area: left;
        align-content: center;
        margin-left: 8rem;

    }

    .bids {
        grid-area: right;
        margin-left: auto;
        margin-right: 8rem;
    }
</style>
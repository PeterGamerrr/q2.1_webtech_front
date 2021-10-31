<script>
    import Navbar from "../components/Navbar.svelte";
    import {authToken, user} from "../stores/user";
    import router from "page";
    import Bid from "../components/Bid.svelte";

    export let params; //so it wont show up in the console that its not a property

    function logout() {
        router.redirect("");
        $authToken = "";
    }

    async function getWonBids() {
        //FIXME: REMOVE DUMMY DATA
        return [
            {
                id: 0,
                price: 30.2,
                hasWon: false,
                date: new Date(2021, 0).getTime(),
                userId: 0,
                auctionId: 0,
            },
            {
                id: 1,
                price: 25.6,
                hasWon: true,
                date: new Date(2006, 0).getTime(),
                userId: 1,
                auctionId: 1,
            },
        ];
        let res = await fetch("http://localhost:3000/api/bids?haswon=true&userid="+$user.id);
        if (res.ok) {
            let data = await res.json();
            return data;
        } else {
            throw new Error("Failed to fetch won Bids")
        }
    }

    let bidsPromise = getWonBids()
</script>

<main>
    <Navbar />
    {#if $user}
    <div class="center">
        <h1>{$user.username}</h1>
        <p>
            <b>email:</b> {$user.email}<br/>
            <b>roles:</b> {$user.roles.toString()}
        </p>
        <button on:click={logout}>logout</button>
        <br/>
        <div class="wonBids">
            {#await bidsPromise}
                Loading...
            {:then bids}
                <ul>
                    {#each bids as bid}
                        <Bid {bid}/>
                    {/each}
                </ul>
            {:catch err}
                {#if err}<span class="error">{err}</span>{/if}
            {/await}
        </div>
    </div>
    {/if}

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
            "leftSide mainarea rightSide";
        grid-gap: 1rem;
    }

    .center {
        grid-area: mainarea;
    }

</style>
<script>
    import {createEventDispatcher} from "svelte";
    import {authToken, user} from "../stores/user";

    const dispatch = createEventDispatcher();

    export let bid;
    export let secondsLeft = 1;

    //get the user
    async function getUser() {
        let res = await fetch("http://localhost:3000/api/users/"+ bid.userId);
        if (res.ok) {
            return await res.json();
        } else {
            throw new Error("Couldn't fetch bids")
        }
    }

    //delete a bid using and dispatching so the layer above can update
    async function deleteBid() {
        let res = await fetch("http://localhost:3000/api/bids/"+ bid.id, {
            method: "delete",
            headers: new Headers({
                Authorization: "bearer " + $authToken
            })
        });
        if (res.ok) {
            let data = await res.json();
            dispatch("deleteBid");
            return data;
        } else {
            throw new Error("Couldn't fetch bids")
        }
    }

    let userPromise = getUser();
</script>

{#await userPromise}
    Loading...
{:then u}
    <li>
        {u.username}: €{bid.price}
        {#if (secondsLeft > 0 && $user && u.id === $user.id)}
            <button on:click={deleteBid}>Delete</button>
        {/if}
    </li>
{:catch err}
    {#if err}<span class="error">{err}</span>{/if}
{/await}
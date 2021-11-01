<script>
    import NumberInput from "./Input/NumberInput.svelte";
    import {authToken} from "../../stores/user";
    import {createEventDispatcher} from "svelte";
    const dispatch = createEventDispatcher();

    let value;
    let err;
    export let bids = [];
    export let startPrice = 0;
    export let auctionId;
    let minAmount = bids.reduce((prev, curr) => prev.price > curr.price ? prev : curr, {price: startPrice});

    async function submit() {
        let res = await fetch("http://localhost:3000/api/bids", {
            method: "post",
            headers: new Headers ({
                "Content-Type": 'application/json',
                "Authorization": "bearer " + $authToken
            }),
            body: JSON.stringify({
                price: value,
                auctionId: auctionId
            })
        });
        if(res.ok){
            err = "";
            dispatch("submit")
        } else {
            err = "an error occurred with the request"
        }
    }
</script>

<form on:submit|preventDefault={submit}>
    <NumberInput name="bid" minValue="{minAmount.price}" bind:value={value}>Bid</NumberInput>
    <button type="submit" value="submit">submit</button>
</form>
{#if err}<span class="error">{err}</span>{/if}
<style>
    form {
        width: 10rem;
    }
    button {
        width: 100%;
    }
    .error {
        color: red;
    }
</style>
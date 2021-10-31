<script>
    import NumberInput from "./Input/NumberInput.svelte";

    let value;
    let err;
    export let bids = [];
    export let startPrice = 0;
    let minAmount = bids.reduce((prev, curr) => prev.price > curr.price ? prev : curr, {price: startPrice});

    async function submit() {

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
</style>
<script>

    import ProductInput from "./Input/ProductInput.svelte";
    import DateInput from "./Input/DateInput.svelte";
    import {authToken} from "../../stores/user";
    import router from "page";
    import NumberInput from "./Input/NumberInput.svelte";

    export let auction;
    export let updating = false;
    let err = "";


    //if changing it puts the data into a put request
    //if its not changing the it puts the data into a post request
    async function submit() {
        let res
        if (updating) {
            res = await fetch("http://localhost:3000/api/auctions/"+auction.id, {
                method: "put",
                headers: new Headers ({
                    "Content-Type": 'application/json',
                    "Authorization": "bearer " + $authToken
                }),
                body: JSON.stringify({
                    "startPrice": auction.startPrice,
                    "price": auction.startPrice,
                    "startDate": Date.now(),
                    "endDate": auction.endDate,
                    "productId": auction.productId
                })
            });
        } else {
            res = await fetch("http://localhost:3000/api/auctions", {
                method: "post",
                headers: new Headers ({
                    "Content-Type": 'application/json',
                    "Authorization": "bearer " + $authToken
                }),
                body: JSON.stringify({
                        "startPrice": auction.startPrice,
                        "price": auction.startPrice,
                        "startDate": Date.now(),
                        "endDate": auction.endDate,
                        "productId": auction.productId
                    }
                )
            });
        }
        if(res.ok){
            err = "";
            router.redirect("/admin");
        } else {
            err = "an error occurred with the request"
        }
    }
</script>

<form on:submit|preventDefault={submit}>
    <ProductInput bind:value={auction.productId}>Product</ProductInput>
    <DateInput bind:value={auction.endDate}>End date timestamp</DateInput>
    <NumberInput bind:value={auction.startPrice}>Startprice</NumberInput>
    <button type="submit" value="submit">submit</button>
</form>
{#if err}<span class="error">{err}</span>{/if}

<style>
    .error {
        color: red;
    }
    button {
        width: 100%;
    }
</style>
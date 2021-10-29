<script>
    import {products} from "../../stores/stores";

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

</script>

{#if beer.product}
    <div class="beer">
        <span class="title">{beer.product.name}</span><br>
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
        </ul>
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
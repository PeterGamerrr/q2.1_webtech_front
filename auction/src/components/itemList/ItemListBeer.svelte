<script>
    export let beer = {
        id: undefined,
        startPrice: undefined,
        price: undefined,
        startDate: undefined,
        endDate: undefined,
        productId: undefined
    };
</script>

//todo: make it so product is accessable through auctions
<div class="beer">
    <span class="title">{beer.productId}</span><br>
    <ul>
        <li>
            <b>Alcohol:</b> {beer.productId}
        </li>
        <li>
            <b>Capacity:</b> {beer.endDate}
        </li>
    </ul>
</div>


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
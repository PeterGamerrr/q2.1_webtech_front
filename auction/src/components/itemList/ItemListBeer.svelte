<script>
    export let beer = {
        name: "",
        alcohol: "",
        capacity: "",
    };
</script>


<div class="beer">
    <span class="title">{beer.name}</span><br>
    <ul>
        <li>
            <b>Alcohol:</b> {beer.alcohol}
        </li>
        <li>
            <b>Capacity:</b> {beer.capacity}
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
<script>
    import ItemList from "../components/itemList/ItemList.svelte";
    import Navbar from "../components/Navbar.svelte";
    import Filter from "../components/searchFilter/Filter.svelte";
    let fetchURL = "http://localhost:3000/api/auctions";

    function filter(event) {
        console.log("event",event)

    }
</script>

<main>
    <Navbar />
    <div class="center">
        <ItemList fetchURL={fetchURL} itemType="beer" listPageSize="4" />
    </div>
    <div class="left">
        <Filter on:filter={filter} />
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
            "leftSide mainarea rightSide";
        grid-gap: 1rem;
    }

    .center {
        grid-area: mainarea;
    }
    .left {
        grid-area: leftSide;
    }
</style>
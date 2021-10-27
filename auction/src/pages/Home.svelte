<script>
    import ItemList from "../components/itemList/ItemList.svelte";
    import Navbar from "../components/Navbar.svelte";
</script>

<main>
    <Navbar />
    <div class="center">
        <ItemList fetchURL="http://localhost:3000/api/auctions" itemType="beer" listPageSize="4" />
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

    .center {
        grid-area: mainarea;
    }

    nav {
        grid-area: navigation;
    }
</style>
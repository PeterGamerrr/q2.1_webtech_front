<script>
    import Navbar from "../components/Navbar.svelte";
    import ItemList from "../components/itemList/ItemList.svelte";
    import Users from "../components/Users.svelte";

    let menuSelected = "Auctions";

    export let params;  //so it wont show up in the console that its not a property

</script>

<main>
    <Navbar />
    <div class="center">
        <label for="menuselect"></label>
        <select id="menuselect" bind:value={menuSelected} name="menuselect">
            <option value="Auctions">Auctions</option>
            <option value="Accounts">Accounts</option>
        </select>
        {#if menuSelected === "Auctions"}
            <ItemList admin="true" itemType="beer" listPageSize="4"/>
        {:else if menuSelected === "Accounts"}
            <br/><Users />
        {/if}
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
</style>
<script>
    import SearchBar from "../SearchBar.svelte";
    import ItemListContent from "./ItemListContent.svelte";
    import ItemListPager from "./ItemListPager.svelte";
    import {items} from "../../stores/items";
    import router from "page";

    export let itemType = "beer";
    export let listPageSize = 1;
    export let admin = false;
    let res;

    let currListPage = 1;
    const updateCurrListPage = (event) => {
        currListPage = event.detail.text;
    }

</script>

{#await res}
    <p>...Waiting</p>
{:then responseItem}
    <SearchBar input={$items} />
    {#if admin}
        <button on:click={() => router.redirect("/auctions/new")}>add new Auction</button>
    {/if}
    <div class="content">
        <ItemListContent {admin} {currListPage} {listPageSize} {itemType}/>
    </div>
    <ItemListPager {listPageSize} on:updateCurrListPage={updateCurrListPage}/>
{:catch error}
    <p>{error.message}</p>
{/await}

<style>
    .content {
        display: flex;
        flex-direction: column;
        border: 1px solid black;
    }
</style>
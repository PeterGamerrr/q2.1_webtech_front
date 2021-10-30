<script>
    import SearchBar from "../SearchBar.svelte";
    import ItemListContent from "./ItemListContent.svelte";
    import ItemListPager from "./ItemListPager.svelte";
    import {onMount} from "svelte"
    import {authToken, items, filters, filteredItems, searchBar} from "../../stores/stores";

    export let fetchURL = "";
    export let itemType = "beer";
    export let listPageSize = 1;
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
    <div class="content">
        <ItemListContent {currListPage} {listPageSize} {itemType}/>
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
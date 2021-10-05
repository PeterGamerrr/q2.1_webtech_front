<script>
    import SearchBar from "../SearchBar.svelte";
    import ItemListContent from "./ItemListContent.svelte";
    import ItemListPager from "./ItemListPager.svelte";
    import {filteredItems} from "../../stores/filteredItems";

    export let items = [];
    export let itemType = "beer";
    export let listPageSize = 1;

    let currListPage = 1;

    $filteredItems = items;

    const updateCurrListPage = (event) => {
        currListPage = event.detail.text;
    }

    const searchBarOutput = (event) => {
        $filteredItems = event.detail.text;
    }
</script>


<SearchBar input={items} on:searchBarOutput={searchBarOutput}/>
<div class="content">
    <ItemListContent {currListPage} {listPageSize} {itemType}/>
</div>
<ItemListPager {listPageSize} on:updateCurrListPage={updateCurrListPage}/>


<style>
    .content {
        display: flex;
        flex-direction: column;
        border: 1px solid black;
    }
</style>
<script>
    import ItemListBeer from "./ItemListBeer.svelte";
    import {filteredItems} from "../../stores/items";

    export let listPageSize = 1;
    export let currListPage = 1;
    export let itemType = "";
    export let admin = false;

    let pagedItems = [];

    $: {
        currListPage = parseInt(currListPage);
        listPageSize = parseInt(listPageSize);
        let start = (currListPage - 1) * listPageSize;
        let end = start + listPageSize <= $filteredItems.length ? start + listPageSize : $filteredItems.length;
        pagedItems = $filteredItems.slice(start, end);
    }
</script>

{#each pagedItems as item}
    {#if itemType === "beer"}
        <ItemListBeer {admin} beer={item}/>
    {/if}
{/each}
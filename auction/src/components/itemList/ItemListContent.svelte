<script>
    import ItemListBeer from "./ItemListBeer.svelte";
    import {filteredItems, items} from "../../stores/stores";

    export let listPageSize = 1;
    export let currListPage = 1;
    export let itemType = "beer";

    let pagedItems = [];

    $: {
        currListPage = parseInt(currListPage);
        listPageSize = parseInt(listPageSize);
        let start = (currListPage - 1) * listPageSize;
        let end = start + listPageSize <= $items.length ? start + listPageSize : $items.length;
        pagedItems = $filteredItems.slice(start, end);
    }
</script>

{#each pagedItems as item}
    {#if itemType === "beer"}
        <ItemListBeer beer={item}/>
    {/if}
{/each}
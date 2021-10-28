<script>
    import SearchBar from "../SearchBar.svelte";
    import ItemListContent from "./ItemListContent.svelte";
    import ItemListPager from "./ItemListPager.svelte";
    import {onMount} from "svelte"
    import {authToken, filteredItems} from "../../stores/stores";

    export let fetchURL = "";
    export let itemType = "beer";
    export let listPageSize = 1;

    let items = [];

    onMount(async () => {
        items = await getData();
        $filteredItems = items;
        console.log($authToken)
    })

    async function getData() {
        const res = await fetch(fetchURL);
        if (res.ok) {
            return await res.json();
        } else {
            throw new Error(await res.text());
        }
    }

    let currListPage = 1;


    const updateCurrListPage = (event) => {
        currListPage = event.detail.text;
    }

    //FIXME: if non existing search is given output gets glitched
    const searchBarOutput = (event) => {
        console.log(event);
        console.log($filteredItems)
        $filteredItems = event.detail.text;
        console.log($filteredItems)

    }
</script>

{#await items}
    <p>...Waiting</p>
{:then items}
    <SearchBar input={items} on:searchBarOutput={searchBarOutput}/>
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
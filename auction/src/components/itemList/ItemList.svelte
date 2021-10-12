<script>
    import SearchBar from "../SearchBar.svelte";
    import ItemListContent from "./ItemListContent.svelte";
    import ItemListPager from "./ItemListPager.svelte";
    import {onMount} from "svelte"
    import {filteredItems} from "../../stores/filteredItems";

    export let items = [];
    export let itemType = "beer";
    export let listPageSize = 1;

    onMount(async () => {
        items = await getData();
        $filteredItems = items;
    })

    async function getData() {
        const res = await fetch("http://localhost:3000/api/auctions");
        console.log(res)
        if (res.ok) {
            const json = await res.json();
            console.log(json)
            return json;
        } else {
            const text = await res.text();
            throw new Error(text);
        }
    }

    let currListPage = 1;


    const updateCurrListPage = (event) => {
        currListPage = event.detail.text;
    }

    const searchBarOutput = (event) => {
        $filteredItems = event.detail.text;
    }
</script>


{#await items}
    <p>...Waiting</p>
{:then items}
    {console.log(items)}
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
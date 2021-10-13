<script>
    import ItemList from "../components/itemList/ItemList.svelte";
</script>

<main>
    <ItemList fetchURL="http://localhost:3000/api/auctions" itemType="beer" listPageSize="4"/>
</main>
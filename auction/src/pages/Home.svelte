<script>
    import ItemList from "../components/itemList/ItemList.svelte";

    let beers = [
        {
            name: "1 Grolsch, Het kanon",
            alcohol: "10%",
            capacity: "0.5L",
        },
        {
            name: "2 Grolsch, Beugel",
            alcohol: "10%",
            capacity: "0.5L",
        },
        {
            name: "3 Grolsch, Pijpje",
            alcohol: "10%",
            capacity: "0.5L",
        },
        {
            name: "4 Grolsch, Het kanon",
            alcohol: "10%",
            capacity: "0.5L",
        },
        {
            name: "5 Grolsch, Beugel",
            alcohol: "10%",
            capacity: "0.5L",
        },
        {
            name: "6 Grolsch, Pijpje",
            alcohol: "10%",
            capacity: "0.5L",
        },
        {
            name: "7 Grolsch, Het kanon",
            alcohol: "10%",
            capacity: "0.5L",
        },
        {
            name: "8 Grolsch, Beugel",
            alcohol: "10%",
            capacity: "0.5L",
        },
        {
            name: "9 Grolsch, Pijpje",
            alcohol: "10%",
            capacity: "0.5L",
        },
        {
            name: "10 Grolsch, Pijpje",
            alcohol: "10%",
            capacity: "0.5L",
        },
        {
            name: "11 Grolsch, Het kanon",
            alcohol: "10%",
            capacity: "0.5L",
        },
        {
            name: "12 Grolsch, Beugel",
            alcohol: "10%",
            capacity: "0.5L",
        },
        {
            name: "13 Grolsch, Pijpje",
            alcohol: "10%",
            capacity: "0.5L",
        },
        {
            name: "14 Grolsch, Beugel",
            alcohol: "10%",
            capacity: "0.5L",
        },
        {
            name: "15 Grolsch, Pijpje",
            alcohol: "10%",
            capacity: "0.5L",
        },
        {
            name: "16 Grolsch, Pijpje",
            alcohol: "10%",
            capacity: "0.5L",
        },
    ];
</script>

<main>
    <ItemList items={beers} itemType="beer" listPageSize="4"/>
</main>
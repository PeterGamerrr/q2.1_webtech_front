<script>
    import {createEventDispatcher} from "svelte";
    import {searchBar} from "../stores/items";

    const dispatch = createEventDispatcher();

    export let input = [];

    let output = [];
    let searchValue = "";

</script>


<input
        placeholder="Search..."
        bind:value={$searchBar}
/>
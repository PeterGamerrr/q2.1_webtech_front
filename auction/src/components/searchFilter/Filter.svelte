<script>

import FilterItem from "./FilterItem.svelte";
import {filters} from "../../stores/items";

let region;
let capacity;
let brand;


function handleSubmit() {
    $filters = {region, capacity, brand};
}

</script>

<form on:submit|preventDefault={handleSubmit}>
    <FilterItem filterItem="region" bind:value={region}/>
    <FilterItem filterItem="capacity" bind:value={capacity}/>
    <FilterItem filterItem="brand" bind:value={brand}/>
    <button type="submit" value="submit"> Filter </button>
</form>

<style>
    form {
        width: 12rem;
        margin-top: 2.9rem;
        margin-left: auto;
        border-style: solid;
        border-width: 2px;
        border-color: black;
        border-radius: 10px;
        padding: 10px;
    }

    button {
        width: 100%;
    }
</style>
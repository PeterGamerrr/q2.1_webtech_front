<script>
    import {products} from "../../stores/products";

    export let filterItem;
    export let value = "";

    let values = [""]
    $: {
        $products.forEach(item => {
            for (const [key, val] of Object.entries(item)) {
                if (
                    key.toLowerCase() === filterItem.toLowerCase() &&
                    !values.includes(val)
                ) {
                    values = [...values, val];
                }
            }
        })
    }
</script>
<label for="{filterItem}">{filterItem}</label>
<select bind:value={value} name="{filterItem}" id="{filterItem}">
    {#each values as item}
        <option value="{item}">{item}</option>
    {/each}
</select>

<style>
    select {
        width: 100%;
    }
    label {
        width: 100%;
    }
</style>

<script>
    import {products} from "../../../stores/products";

    export let name = "";
    export let placeholder = "";

    export let value = "";

</script>

<label for="{name}" ><slot/></label>
<select bind:value={value} name="{name}" id="{name}">
    {#each $products as product}
        <option value="{product.id}">{product.name}</option>
    {/each}
</select>
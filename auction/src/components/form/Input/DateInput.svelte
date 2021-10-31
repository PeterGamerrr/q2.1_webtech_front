<script>
    export let name = "";
    export let placeholder = "";

    export let value = Date.now();

</script>

<label for="{name}"><slot /></label>
<input
        bind:value={value}
        name="{name}"
        id="{name}"
        placeholder="{placeholder}"
        type="number"
/><br/>


<style>
    input {
        width: 100%;
    }
</style>

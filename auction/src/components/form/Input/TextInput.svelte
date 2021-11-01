<script>
    export let name = "";
    export let placeholder = "";

    export let value = ""; //for outside binding

</script>

<label for="{name}"><slot /></label>
<input
        bind:value={value}
        name="{name}"
        id="{name}"
        placeholder="{placeholder}"
        type="text"
/><br/>


<style>
    input {
        width: 100%;
    }
</style>

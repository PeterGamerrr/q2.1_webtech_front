<script>
    export let name = "";
    export let placeholder = "";
    export let minValue = 0;
    let err;

    export let value;
    let inValue

    $: {
        if (inValue > minValue) {
            value = inValue;
            err = null;
        } else if (!inValue){
            err = null;
        } else {
            err = "Too low."
        }
    }

</script>


<label for="{name}">
    <slot />
    {#if err}<span class="error">{err}</span>{/if}
</label>

<input
        bind:value={inValue}
        class:falseInput="{err}"
        name="{name}"
        id="{name}"
        placeholder="{placeholder}"
        type="number"
/><br/>


<style>
    input {
        width: 100%;
    }

    .error {
        color: red;
        font-size: 0.7rem;
    }

    .falseInput {
        border-color: red;
    }
</style>

<script>

    export let name = "";
    export let placeholder = "";

    let inValue = "";
    export let value = "";
    export let err;

    const re = /^\S+@\S+\.(com|nl)$/; //matches all email formats ending in .com and .nl (not sure why we cant just allow all top level domains)

    $: {
        if (re.test(inValue) || inValue === "") {
            value = inValue;
            err = "";

        } else {
            value = "";
            err = "Invalid email";

        }
    }

</script>

<label for="{name}">
    <slot />
    <span class="error">{err}</span>
</label>

<input
        bind:value={inValue}
        class:falseInput="{err}"
        name="{name}"
        id="{name}"
        placeholder="{placeholder}"
        type="text"
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

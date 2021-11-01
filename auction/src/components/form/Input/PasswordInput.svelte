<script>
    export let name = "";
    export let placeholder = "";
    export let validate = false; // if this value is set then it makes sure that the password is strong enough.
    export let sameAs = null; //if this value is set then it compares it to that value.

    let inValue = "";
    export let value = "";
    export let err = ""

    $: {
        if (validate) {
            if (validatePassword(inValue) || inValue === "") {
                value = inValue;
                err = "";
            } else {
                value = "";
                err = "Password too simple";

            }
        } else if (sameAs) {
            if (inValue === sameAs || inValue === "") {
                value = inValue;
                err = "";
            } else {
                value = "";
                err = "Different passwords";
            }
        } else {
            value = inValue;
        }
    }

    //functions checks if the password is strong enough by making sure its atleast 6 long has a capital letter and has a number
    function validatePassword(password) {
        if (password.length < 6) return false;

        let hasCapital = false;
        let hasNumber = false;

        [...password].forEach(letter => {
            if(letter === letter.toUpperCase()) hasCapital = true;
            if(!isNaN(letter)) hasNumber = true;
        })

        return hasCapital && hasNumber;
    }

</script>

<div class="falseInput" display="none"></div> <!-- to make svelte compile the css -->

<label for="{name}">
    <slot />
    <span class="error">{err}</span>
</label>

<input
        bind:value={inValue}
        name="{name}"
        id="{name}"
        class:falseInput="{err}"
        placeholder="{placeholder}"
        type="password"
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

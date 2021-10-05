<script>
    import {createEventDispatcher} from "svelte";

    const dispatch = createEventDispatcher();

    export let input = [];

    let output = [];
    let searchValue = "";

    const doSearch = () => {
        if (searchValue.length > 0) {
            searchValue = searchValue.toLowerCase();
            output = input.filter(el => {
                for (const val of Object.values(el)) {
                    if (typeof val === "string" &&
                        val.toLowerCase().includes(searchValue)) {
                        return true;
                    } else if (typeof val === "number" &&
                        val.toString().includes(searchValue)) {
                        return true;
                    }
                }

                return false;
            });
        } else {
            output = input;
        }

        sendOutput();
    }

    const sendOutput = () => {
        dispatch("searchBarOutput", {
            text: output
        });
    }
</script>


<input
        placeholder="Search..."
        bind:value={searchValue}
        on:input={doSearch}/>
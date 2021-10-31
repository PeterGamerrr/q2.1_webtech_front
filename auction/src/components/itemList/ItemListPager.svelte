<script>
    import {createEventDispatcher} from "svelte";
    import {filteredItems} from "../../stores/items";

    const dispatch = createEventDispatcher();

    export let listPageSize = 1;

    let currListPage = 1;
    let listPageCount = 1;

    $: {
        listPageCount = Math.ceil($filteredItems.length / listPageSize);
    }

    const updateCurrListPage = () => {
        dispatch("updateCurrListPage", {
           text: currListPage
        });
    }

    const onClickFirst = () => {
        if (currListPage !== 1) {
            currListPage = 1;
            updateCurrListPage();
        }
    }

    const onClickPrev = () => {
        if (currListPage > 1) {
            currListPage = currListPage - 1;
            updateCurrListPage();
        }
    }

    const onClickNext = () => {
        if (currListPage < listPageCount) {
            currListPage = currListPage + 1;
            updateCurrListPage();
        }
    }

    const onClickLast = () => {
        if (currListPage !== listPageCount) {
            currListPage = listPageCount;
            updateCurrListPage();
        }
    }
</script>


<button on:click={onClickFirst}>first</button>
<button on:click={onClickPrev}>prev</button>
<span>{currListPage}/{listPageCount}</span>
<button on:click={onClickNext}>next</button>
<button on:click={onClickLast}>last</button>
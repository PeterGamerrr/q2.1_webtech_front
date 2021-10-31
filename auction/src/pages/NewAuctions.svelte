<script>
    import Navbar from "../components/Navbar.svelte";
    import {items} from "../stores/stores";
    import router from "page";
    import AuctionForm from "../components/form/AuctionForm.svelte";

    export let params;

    console.log(params);

    let item = $items.find(e => e.id == params.params.id);
    let auction = {};

    if (item) {
        auction = item;
    } else if (params.params.id === "new") {
        console.log("new")
    } else {
        router.redirect("/admin")
    }

</script>

<main>
    <Navbar />
    <div class="center">
        <AuctionForm auction="{auction}"/>
    </div>
</main>
<style>
    main {
        width: 100vw;
        height: 100vh;
        display: grid;
        grid-template-columns: 1fr 2fr 1fr;
        grid-template-rows: 3.5rem 1fr;
        grid-template-areas:
            "navigation navigation navigation"
            ". mainarea .";
        grid-gap: 1rem;
    }

    .center {
        grid-area: mainarea;
        justify-self: center;
    }
</style>
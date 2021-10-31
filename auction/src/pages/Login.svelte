<script>
    import LoginForm from "../components/form/LoginForm.svelte";
    import Navbar from "../components/Navbar.svelte";

    export let params;  //so it wont show up in the console that its not a property

</script>

<main>
    <Navbar />
    <div class="center">
        <LoginForm/>
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
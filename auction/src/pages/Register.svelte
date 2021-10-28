<script>
    import Navbar from "../components/Navbar.svelte";
    import RegisterForm from "../components/form/RegisterForm.svelte";
</script>

<main>
    <Navbar />
    <div class="center">
        <RegisterForm />
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
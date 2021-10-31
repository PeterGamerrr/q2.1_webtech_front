<script>
	import router from "page";
	import Home from "./pages/Home.svelte";
    import Login from "./pages/Login.svelte";
    import Register from "./pages/Register.svelte";
    import Admin from "./pages/Admin.svelte";

	let page;

	router('/', (ctx) => page = Home);
    router('/login', (ctx) => page = Login);
    router('/register', (ctx) => page = Register)
    router('/admin', (ctx) => page = Admin)

	router.start();
</script>

<svelte:component this="{page}" />

<style>
    :global(body) {
        padding: 0;
        margin: 0;
    }
</style>
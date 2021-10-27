<script>
	import router from "page";
	import Home from "./pages/Home.svelte";
    import Login from "./pages/Login.svelte";

	let page;
	let params;

	router('/', (ctx) => page = Home);
    router('/login', (ctx) => page = Login);

	router.start();
</script>

<svelte:component this="{page}" {params}/>

<style>
    :global(body) {
        padding: 0;
        margin: 0;
    }
</style>
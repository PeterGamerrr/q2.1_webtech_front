<script>
	import router from "page";
	import Home from "./pages/Home.svelte";
    import LoginForm from "./components/form/LoginForm.svelte";

	let page;
	let params;

	router('/', (ctx) => page = Home);
    router('/login', (ctx) => page = LoginForm);

	router.start();
</script>

<svelte:component this="{page}" {params}/>
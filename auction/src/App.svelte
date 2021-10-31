<script>
	import router from "page";
	import Home from "./pages/Home.svelte";
    import Login from "./pages/Login.svelte";
    import Register from "./pages/Register.svelte";
    import Admin from "./pages/Admin.svelte";
    import NewAuction from "./pages/NewAuctions.svelte";
    import {user} from "./stores/user";
    import Auction from "./pages/Auction.svelte";
    import Profile from "./pages/Profile.svelte";

	let page;
    let params;

	router('/', (ctx) => page = Home);
    router('/login', (ctx) => page = Login);
    router('/register', (ctx) => page = Register);
    router('/profile', (ctx) => {
        if ($user && $user.roles.includes("user")) {
            page = Profile;
        } else {
            router.redirect("/");
        }

    });

    router('/auctions/:id', (ctx) => {
        params = ctx;
        if (params.params.id.toLowerCase() === "new") {
            if (!$user || !$user.roles.includes("admin")) {
                router.redirect("/");
            } else {
                page = NewAuction;
            }
        } else {
            page = Auction;
        }
    })
    router('/admin', (ctx) => {
        if (!$user || !$user.roles.includes("admin")) {
            router.redirect("/");
        } else {
            page = Admin;
        }
    })
    router('/auctions/:id/edit', (ctx) => {
        if (!$user || !$user.roles.includes("admin")) {
            router.redirect("/");
        } else {
            page = NewAuction;
            params = ctx;
        }
    })

	router.start();
</script>

<svelte:component this="{page}" {params}/>

<style>
    :global(body) {
        padding: 0;
        margin: 0;
    }
</style>
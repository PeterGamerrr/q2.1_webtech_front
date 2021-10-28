<script>
    import {user} from "../stores/stores";
    import {onMount} from "svelte";

    async function hasAdmin() {
        const userInfo = await $user;
        console.log({userInfo})
        if (userInfo !== undefined) {
            return !!userInfo.roles.includes("admin");
        } else {
            return false
        }
    }

    onMount(async () => {
        console.log("hasAdmin", hasAdmin())
    })
</script>

<nav>
    <div class="home">
        <a href="/"> Home </a>
    </div>
    {#await hasAdmin()}
        {:then val}
        {#if val }
            <div class="admin">
                <a href="/admin"> Admin </a>
            </div>
        {/if}
        {/await}
    <div class="register">
        <a href="/register"> Register </a>
    </div>
    <div class="login">
        <a href="/login"> Login </a>
    </div>
</nav>

<style>
    nav {
        grid-area: navigation;
        width: 100%;
        height: 100%;
        background: red;
        display: grid;
        grid-template-columns: 7rem 1fr 7rem 7rem 7rem;
        grid-template-rows: 1fr;
        grid-template-areas:
            "home spacing admin register login";
    }
    a {
        color: white;
    }

    a:hover {
        color: lightgray;
    }

    a:visited {
        color: white;
    }

    a:active {
        color: lightgray;
    }

    div {
        margin: auto;
        justify-self: center;
    }

    .home {
        grid-area: home;
    }

    .register {
        grid-area: register;
    }

    .login {
        grid-area: login;
    }
    .admin {
        grid-area: admin;
    }
</style>
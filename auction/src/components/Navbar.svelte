<script>
    import {authToken, user} from "../stores/stores";
    import router from "page";

    async function hasAdmin() {
        const userInfo = await $user;
        if (userInfo !== undefined) {
            return !!userInfo.roles.includes("admin");
        } else {
            return false
        }
    }

    async function isLoggedIn() {
        const userInfo = $authToken;
        return userInfo !== undefined;
    }

    function logout() {
        $authToken = ""
        router.redirect("/")
    }

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
    {#if $authToken}
        <div class="login">
            <a on:click={logout} href="/"> Logout </a>
        </div>
    {:else }
        <div class="login">
            <a href="/login"> Login </a>
        </div>
    {/if}
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
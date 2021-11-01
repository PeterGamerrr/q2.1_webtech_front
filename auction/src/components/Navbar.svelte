<script>
    import {authToken, user} from "../stores/user";

    function hasAdmin() {
        const userInfo = $user;
        if (userInfo !== undefined) {
            return userInfo.roles.includes("admin");
        } else {
            return false
        }
    }


</script>

<nav>
    <div class="home">
        <a href="/"> Home </a>
    </div>

    {#if hasAdmin() }
        <div class="admin">
            <a href="/admin"> Admin </a>
        </div>
    {/if}

    <div class="register">
        <a href="/register"> Register </a>
    </div>
    {#if $authToken}
        <div class="login">
            <a href="/profile"> Account </a>
        </div>
    {:else }
        <div class="login">
            <a href={"/login"}> Login </a> <!-- ?url="+encodeURIComponent(window.location.pathname) -->
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
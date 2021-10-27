<nav>
    <div class="home">
        <a href="/"> home </a>
    </div>
    <div class="register">
        <a href="/register"> register </a>
    </div>
    <div class="login">
        <a href="/login"> login </a>
    </div>
</nav>

<style>
    nav {
        grid-area: navigation;
        width: 100%;
        height: 100%;
        background: red;
        display: grid;
        grid-template-columns: 8rem 1fr 8rem 8rem;
        grid-template-rows: 1fr;
        grid-template-areas:
            "home spacing register login";
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
</style>
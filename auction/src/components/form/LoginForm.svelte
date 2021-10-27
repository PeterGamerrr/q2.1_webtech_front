<script>
    import TextInput from "./Input/TextInput.svelte";
    import {authToken} from "../../stores/stores";
    import PasswordInput from "./Input/PasswordInput.svelte";
    import router from "page";

    let username;
    let password;
    let error = null;

    async function login() {
        let res = await fetch("http://localhost:3000/api/credentials", {
            method: "POST",
            headers: {
                "Content-Type": "Application/json",
            },
            body: JSON.stringify({
                username,
                password
            })
        });
        if (res.status === 201) {
            error = null;
            res = await res.json();
            $authToken = res.token;
            router.redirect("/");
        } else {
            error = "Password or Username incorrect";
        }
    }


</script>

<div>
    <TextInput bind:value={username} type="text" placeholder="username123" name="username">username</TextInput>
    <PasswordInput bind:value={password} type="password" name="password">password</PasswordInput>
    <button on:click={login} id="Login">Login</button>

    <div id="error">{#if error}{error}{/if}</div>
    {$authToken}
</div>

<style>
    div {
        width: 14rem;
    }

    button {
        width: 100%;
        height: 2rem;
    }

    input {
        width: 100%;
    }
    #error {
        color: red;
    }
</style>
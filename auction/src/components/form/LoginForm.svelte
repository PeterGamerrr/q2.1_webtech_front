<script>
    import TextInput from "./Input/TextInput.svelte";
    import {authToken} from "../../stores/user";
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
<form on:submit|preventDefault={login}>
    <TextInput bind:value={username} placeholder="username123" name="username">username</TextInput>
    <PasswordInput bind:value={password} name="password">password</PasswordInput>
    <button type="submit" value="submit">Login</button>

    {#if error}<div id="error">{error}</div>{/if}

</form>

<style>
    button {
        width: 100%;
        height: 2rem;
    }

    #error {
        color: red;
    }
</style>
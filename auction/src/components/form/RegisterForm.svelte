<script>
    import TextInput from "./Input/TextInput.svelte";
    import EmailInput from "./Input/EmailInput.svelte";
    import PasswordInput from "./Input/PasswordInput.svelte";
    import router from "page";

    let username;
    let password;
    let password2;
    let email;

    let error

    async function registerAccount() {
        if (password2 && email && username) {
            let res = await fetch("http://localhost:3000/api/users", {
                method: "POST",
                headers: {
                    "Content-Type": "Application/json",
                },
                body: JSON.stringify({
                    username: username,
                    password: password2,
                    email: email,
                    roles: ["user"]
                })
            });
            if (res.status === 201) {
                error = null;
                router.redirect("/login");
            } else {
                error = "Data incorrect";
            }
        } else {
            error = "Data incorrect";
        }
    }


</script>

<form on:submit|preventDefault={registerAccount}>
    <TextInput bind:value={username} name="username" placeholder="username123">Username</TextInput>
    <EmailInput bind:value={email} name="email" placeholder="test@test.com">Email</EmailInput>
    <PasswordInput bind:value={password} name="password" validate=true>Password</PasswordInput>
    <PasswordInput bind:value={password2} sameAs={password} name="passwordAgain">Password again</PasswordInput>
    <button type="submit" value="submit">Register</button>
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
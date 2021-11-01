<script>
    import {authToken} from "../stores/user";

    async function getUsers() {
        const res = await fetch("http://localhost:3000/api/users",{
            method: "get",
            headers: new Headers({
                "Authorization": "bearer " + $authToken,
            })
        })
        const json = res.json();
        if (res.ok) {
            return json
        } else if (res.status === 403) {
            throw new Error("User is not authorized")
        } else {
            throw new Error("User request failed")
        }
    }

    let usersPromise = getUsers();
</script>
{#await usersPromise}
    Loading...
{:then users}
    <ul>
        {#each users as user (user.id)}
            <li>
                {user.id} - {user.username} - {user.email}
            </li>
        {/each}
    </ul>
{:catch error}
    <span class="error">{error}</span>
{/await}

<style>
    .error {
        color: red;
    }
</style>

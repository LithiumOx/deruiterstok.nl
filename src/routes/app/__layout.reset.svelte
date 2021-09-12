<script>
	import Nav from '$lib/header/Navbar.svelte';
	import Login from './auth.svelte';

	const loggedIn = false;
</script>

{#if loggedIn === true}
	<slot />
	<Nav />
{:else}
	<Login />
{/if}

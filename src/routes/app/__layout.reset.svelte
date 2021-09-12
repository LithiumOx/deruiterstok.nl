<script>
	import Nav from '$lib/header/Navbar.svelte';
	import Login from './auth.svelte';

	const loggedIn = true;
</script>

{#if loggedIn === true}
	<slot />
	<Nav />
{:else}
	<Login />
{/if}

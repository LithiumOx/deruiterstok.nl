<script context="module">
	export const load = async ({ page }) => ({
		props: {
			key: page.path
		}
	});
</script>

<script>
	import Nav from '$lib/header/Navbar.svelte';
	import Login from './auth.svelte';
	import Transition from '$lib/Transition.svelte';

	export let key;

	const loggedIn = true;
</script>

{#if loggedIn === true}
	<Transition refresh={key}>
		<slot />
	</Transition>
	<Nav />
{:else}
	<Login />
{/if}

<style global>
	::global(:root) {
		@apply bg-red-700 opacity-25;
	}
</style>

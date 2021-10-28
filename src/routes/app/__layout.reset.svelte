<script context="module">
	export const load = async ({ page }) => ({
		props: {
			key: page.path
		}
	});
</script>

<script lang="typescript">
	import Nav from '$lib/components/Navbar.svelte';
	import Header from '$lib/components/Header.svelte';
	import Login from './auth/index.svelte';
	import Transition from '$lib/components/Transition.svelte';
	export let key;

	let loggedIn = true;
</script>

{#if loggedIn === true}
	<Header />
	<Transition refresh={key}>
		<slot />
	</Transition>
	<Nav />
{:else}
	<Header />
	<Login />
	<Nav />
{/if}

<style>
	:global(body) {
		@apply bg-base-content; /* this will apply to <body> */
	}
</style>

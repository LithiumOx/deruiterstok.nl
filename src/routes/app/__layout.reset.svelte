<script context="module">
	export const load = async ({ page }) => ({
		props: {
			key: page.path
		}
	});
</script>

<script>
	import Nav from '$lib/components/Navbar.svelte';
	import Header from '$lib/components/Header.svelte';
	import Login from './auth.svelte';
	import Transition from '$lib/components/Transition.svelte';
	import { Auth0Context, isAuthenticated } from '@dopry/svelte-auth0';
	export let key;

	const loggedIn = $isAuthenticated;
</script>

<Auth0Context
	domain="devenv1.eu.auth0.com"
	client_id="ByHotM5JrhtGVsdOjmKgKVJItMox4sSz"
	callback_url="https://deruiterstok.nl/app"
	logout_url="https://deruiterstok.nl/app"
>
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
</Auth0Context>

<style>
	:global(body) {
		@apply bg-base-content; /* this will apply to <body> */
	}
</style>

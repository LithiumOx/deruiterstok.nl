<script context="module">
	export const load = async ({ page }) => ({
		props: {
			key: page.path
		}
	});
</script>

<script lang="typescript">
	import Nav from './nav.svelte';
	import Footer from './footer.svelte';
	export let key;
</script>

<div>
	<Nav />
	<slot />
	<Footer />
</div>

<svelte:head>
	<style>
		@import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
	</style>
</svelte:head>

<style>
	:global(body) {
		font-family: 'Roboto', sans-serif;
		@apply bg-base-100; /* this will apply to <body> */
	}
	div {
		@apply p-2.5;
	}
</style>

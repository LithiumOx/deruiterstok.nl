<<<<<<< HEAD
<script lang="ts">
	import '../app.postcss';
</script>

<main>
	<slot />
</main>

<style global>
	main {
		@apply bg-neutral;
	}
</style>
=======
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
	import Transition from '$lib/components/Transition.svelte';
	export let key;
</script>

<div>
	<Nav />
	<Transition refresh={key}>
		<slot />
	</Transition>
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
>>>>>>> 712d149b653c2e787a00e12c95639372d66933b5

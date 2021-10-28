<script lang="typescript">
	import Nav from '$lib/components/public/nav.svelte';
	import Footer from '$lib/components/public/footer.svelte';
	import '../styles/tailwind-output.css';
</script>

<main>
	<Nav />
	<slot />
	<Footer />
</main>

<style>
	main {
		@apply p-2;
	}
</style>

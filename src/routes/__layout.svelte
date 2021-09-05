<script lang="ts">
	import Nav from '$lib/header/Navbar.svelte';
	import '../app.postcss';
</script>

<main>
	<slot />
</main>
<Nav />

<style global>
	main {
		@apply bg-base-100;
	}
</style>

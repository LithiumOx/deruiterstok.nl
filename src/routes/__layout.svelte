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

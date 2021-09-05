<script context="module" lang="ts">
	export const prerender = true;
</script>

<script>
	import Logo from '../assets/Logo.svg';
	import Background from '../assets/topography.svg';
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<div class="hero min-h-screen bg-accent" style="background-image: url({Background});">
	<div class="hero-overlay bg-opacity-60" />
	<div class="text-center hero-content text-neutral-content">
		<div class="max-w-md">
			<img src={Logo} alt="" />
			<h1 class="mb-5 text-5xl font-bold text-neutral-content">De Ruiterstok</h1>
			<p class="mb-5">
				Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
				quasi. In deleniti eaque aut repudiandae et a id nisi.
			</p>
			<button class="btn btn-primary">Word lid!</button>
		</div>
	</div>
</div>

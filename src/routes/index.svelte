<script>
	import Background from '../assets/topography.svg';
	import Event from '$lib/components/Event.svelte';
</script>

<div
	class="hero min-h-[90vh] rounded-box bg-base-200 bg-fixed bg-origin-border"
	style="background-image: url({Background});background-repeat: repeat;"
>
	<div class="text-center grid place-items-center hero-content">
		<div class="max-w-md">
			<lottie-player
				src="https://assets5.lottiefiles.com/packages/lf20_bei3yaim.json"
				mode="bounce"
				class="w-48 h-48 mt-5 mx-auto "
				background="transparent"
				speed="1"
				loop
				autoplay
			/>
			<h1
				class="mb-6 prose text-7xl mt-2 first-line:text-6xl subpixel-antialiased font-black text-transparent bg-gradient-to-r from-orange-500 to-orange-700 bg-clip-text decoration-clone"
			>
				Koningsdag<br />2022
			</h1>

			<!-- <a href="/nieuws" class="mb-5 subpixel-antialiased btn btn-secondary">Nieuwsbrief</a> -->
		</div>
		<Event />
	</div>
</div>

<svelte:head>
	<title>Ruiterstok/home</title>
	<meta
		name="description"
		content="J.V. De Ruiterstok - Organisatie in het belang van de jeugd uit Schermerhorn"
	/>
	<meta
		name="keywords"
		content="Jeugd, Vereniging, De Ruiterstok, Ruiterstok, deruiterstok.nl, Schermerhorn"
	/>
</svelte:head>

<style>
	h1 {
		font-family: 'Staatliches', cursive;
	}
</style>

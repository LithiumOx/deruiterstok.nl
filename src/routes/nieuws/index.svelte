<script>
	import Content from './nieuwsbrief-16-feb.svelte';
	import Background from '../../assets/topography.svg';
</script>

<div
	class="rounded-box flex-wrap bg-base-200 min-h-[80vh] p-2.5 md:p-5 self-center"
	style="background-image: url({Background});background-repeat: repeat;"
>
	<!-- <lottie-player
		src="https://assets7.lottiefiles.com/private_files/lf30_ot4mddw5.json"
		background="transparent"
		speed="1"
		class="h-96 w-96"
		loop
		autoplay
	/>
	<h1 class="font-bold text-center text-base-content pt-12 text-4xl">Wordt nog aan gewerkt!</h1> -->

	<!-- <div class="flex-grow prose">
		<h1>Nieuwsbrieven</h1>
	</div> -->
	<div class="flex-grow-0"><Content /></div>
</div>

<svelte:head>
	<title>Ruiterstok/nieuws</title>
	<meta name="description" content="Nieuws over De Ruiterstok" />
	<meta name="keywords" content="Bestuur, Vereniging, Leiding, Vrijwilligers, Jeugd" />
</svelte:head>

<style>
	/* text- auto lottie-player
		margin: 0 ;
		padding-top: 5vh;
	}  */
</style>

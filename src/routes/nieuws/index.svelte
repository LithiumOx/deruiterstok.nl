<script>
	import Content from '$lib/nieuwsbrieven/nieuwsbrief1.md';

	import Background from '../../assets/topography.svg';
</script>

<div
	class="rounded-box flex-wrap bg-base-200 min-h-[80vh] bg-bottom p-2.5 md:p-5 self-center"
	style="background-image: url({Background});"
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

	<article
		class="prose underline-offset-2  prose-a:after:content-['_↗'] md:prose-lg lg:prose-xl mx-auto py-7 p-5 rounded-box bg-base-300"
	>
		<Content />
	</article>
</div>

<svelte:head>
	<title>Ruiterstok/nieuws</title>
	<meta name="description" content="Nieuws over De Ruiterstok" />
	<meta name="keywords" content="Bestuur, Vereniging, Leiding, Vrijwilligers, Jeugd" />
</svelte:head>

<script>
	import Background from '../assets/topography.svg';
</script>

<div
	class="hero min-h-[80vh] rounded-box bg-base-200"
	style="background-image: url({Background});background-repeat: repeat;"
>
	<div class="text-center place-items-center hero-content">
		<div class="max-w-md">
			<lottie-player
				src="https://assets9.lottiefiles.com/packages/lf20_Z71xVw.json"
				mode="bounce"
				class="w-48 h-48 transform -rotate-45 mt-5 z-10 mx-[30%] "
				background="transparent"
				speed="1.5"
				loop
				autoplay
			/>
			<h1
				class="mb-5 prose text-6xl mt-2 first-line:text-7xl subpixel-antialiased font-black text-transparent bg-gradient-to-b from-primary to-secondary bg-clip-text decoration-clone"
			>
				Seizoen<br />2021-2022
			</h1>
			<p class="mb-5 prose subpixel-antialiased align-middle text-base-content">
				Het nieuwe seizoen is begonnen, 2021-2022! En jeetje wat zijn we trots dat we na 1.5 jaar
				mogen zeggen dat we weer een te gek aantal ruiterstokkers hebben! Ongeveer 45 jongeren mogen
				zich een heuse Ruiterstokker noemen.<br /><br /> Lees nu de nieuwe nieuwsbrief en meld je snel
				aan!
			</p>
			<a href="/nieuws" class="mb-5 subpixel-antialiased btn btn-secondary">Nieuwsbrief</a>
		</div>
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

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
				class="w-48 h-48 transform -rotate-45 mt-5 z-10 center"
				background="transparent"
				speed="1.5"
				loop
				autoplay
			/>
			<h1
				class="mb-5 text-6xl first-line:text-7xl subpixel-antialiased font-black text-transparent bg-gradient-to-b from-primary to-secondary bg-clip-text decoration-clone"
			>
				Seizoen<br />2021-2022
			</h1>
			<p class="mb-5 subpixel-antialiased align-middle text-base-content">
				Het nieuwe seizoen is begonnen, 2021-2022! En jeetje wat zijn we trots dat we na 1.5 jaar
				mogen zeggen dat we weer een te gek aantal ruiterstokkers hebben! Ongeveer 40 jongeren mogen
				zich een heuse Ruiterstokker noemen.<br /><br /> Doordat we weinig open zijn geweest door de
				welbekende Corona, hebben we onze reeds bestaande leden de kans gegeven om het lidmaatschap kosteloos
				door te trekken naar het nieuwe seizoen. Maar natuurlijk is een (vrijwillige) bijdrage voor de
				vereniging meer dan welkom. Immers had je normaliter ook weer lid moeten worden.
			</p>
			<a href="/word-lid" class="mb-5 subpixel-antialiased btn btn-primary">Word lid!</a>
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

<script>
	import Logo from '$lib/components/public/Logo.svg';
	import NieuwLeven from '$lib/components/public/nieuw-leven.png';
	import Jeugdraad from '$lib/components/public/jeugdraad.png';
</script>

<div class="flex flex-col prose w-full">
	<div class="item">
		<h2>09:00 - 12:00</h2>
		<p><img src={Logo} alt="Ruiterstok logo" />Markt, Vrijmarkt Jeugd & Springkussen</p>
		<p>
			<img
				src="https://www.grotekerkschermerhorn.nl/wp-content/uploads/2017/05/logo-grotekerk-schermerhorn-diap.png"
				alt="Ruiterstok logo"
			/>Terras open
		</p>
	</div>
	<div class="item">
		<h2>10:00 - 12:00</h2>
		<p>
			<img src={NieuwLeven} class="bg-base-content rounded-lg" alt="Nieuwleven logo" />Rad van
			avontuur!
		</p>
	</div>
	<div class="item row-span-2">
		<h2>14:00+</h2>
		<p><img src={Logo} class="" alt="Ruiterstok logo" />Eieren gooien buiten</p>
		<blockquote>Inschrijven vanaf 13:30 <br /> O.l.v. Damian Vendel & Koen van Etten</blockquote>
		<p><img src={Jeugdraad} class="" alt="Jeugdraad logo" />Kinderdisco in de Ruiterstok</p>
	</div>
</div>

<style>
	.item {
		@apply bg-base-300 m-2 p-2 rounded-lg shadow-2xl border-t-2 border-orange-500 basis-1/3;
	}
	img {
		@apply w-20 h-auto mx-auto block object-center;
	}
	h2 {
		@apply underline decoration-wavy decoration-orange-500 underline-offset-4 mb-4;
	}
	p {
		@apply text-center;
	}
</style>

<script>
	import Background from '../../assets/topography.svg';
</script>

<div
	class="bg-base-200 min-h-[90vh] rounded-box p-3 flex flex-wrap justify-center bg-fixed bg-origin-border"
	style="background-image: url({Background});"
>
	<h1 class="self-center p-3 prose text-4xl font-extrabold text-base-content flex-nowrap">
		Huisregels
	</h1>
	<ul class="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-stretch">
		<li class="flex-wrap">
			• <p>Wij schenken alleen alcohol aan 18 jaar en ouder.</p>
			<div class="items-start alert alert-warning">
				<div class="flex-1">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						class="w-9 h-9 mx-2 stroke-current"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
						/>
					</svg>
					<!-- svelte-ignore a11y-label-has-associated-control -->
					<label
						>Hiervoor kan het zijn dat we je vragen een identiteitsbewijs te tonen, dus zorg dat je
						deze bij je hebt.</label
					>
				</div>
			</div>
		</li>
		<li class="flex-wrap">
			• <p>Roken is binnen niet toegestaan.</p>
			<div class="items-start alert alert-info">
				<div class="flex-1">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						class="h-9 w-9 mx-2 stroke-current"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
						/>
					</svg>
					<!-- svelte-ignore a11y-label-has-associated-control -->
					<label>Ook mag er niet gerookt worden in het entree als de buitendeur open staat.</label>
				</div>
			</div>
		</li>
		<li>
			• <p>
				Het bestuur stelt zich niet aansprakelijk voor diefstal, schade en/of het zoek raken van
				persoonlijke eigendommen.
			</p>
		</li>
		<li>
			• <p>Sterke dranken zitten niet in ons assortiment.</p>
		</li>
		<li>
			• <p>Indien je nog geen lid bent, kan er 3 euro entree heffing gevraagd worden.</p>
		</li>
		<li>
			• <p>Op zaterdag mag er vanaf 21:30uur alcohol geschonken worden.</p>
		</li>
		<li>
			• <p>Volg aanwijzingen van het personeel op.</p>
		</li>
		<li>
			• <p>Geen wapens of harddrugs.</p>
		</li>
		<li>
			• <p>Geen ongewenste intimiteiten.</p>
		</li>
		<li>
			• <p>Geen agressie en/of racisme.</p>
		</li>
		<li>
			• <p>Geen hinderlijk gedrag.</p>
		</li>
		<li>
			• <p>Geen eigen consumpties.</p>
		</li>
		<li>
			• <p>Geen overlast voor de buren.</p>
		</li>
		<li>
			• <p>Geen vandalisme of brandstichting.</p>
		</li>
		<li>
			• <p>
				Alle dranken en houders daarvan zijn NIET toegestaan op de GANG, in de WC, in het HALLETJE
				en BUITEN.
			</p>
		</li>
		<li>
			• <p>Alleen leiding/bestuur mag zich achter de bar bevinden.</p>
		</li>

		<li>
			• <p>Op vrijdag geldt een minimale leeftijd van 16 jaar.</p>
		</li>
	</ul>
	<div class="self-end p-2 my-auto alert alert-error">
		<div class="items-center flex-1 font-bold">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				class="mx-2 stroke-current w-7 h-7 lg:w-14 lg:h-14 animate-pulse"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
				/>
			</svg>
			<!-- svelte-ignore a11y-label-has-associated-control -->
			<label
				>Iedereen binnen het pand valt onder deze huisregels. Het overtreden van de huisregels kan
				leiden tot verwijdering, officiële waarschuwing of zelfs schorsing. Het bestuur bepaalt
				welke van deze consequenties verbonden wordt aan de overtreding.</label
			>
		</div>
	</div>
</div>

<svelte:head>
	<title>Ruiterstok/huisregels</title>
	<meta name="description" content="Huisregels van De Ruiterstok." />
	<meta name="keywords" content="Regels, Bestuur, Vereniging" />
</svelte:head>

<style>
	ul {
		@apply p-2;
	}
	li {
		@apply flex m-0.5 p-2 px-2 max-w-xl text-left font-black text-primary  bg-neutral-focus border-2 transition duration-300 border-base-300 hover:border-primary rounded-box items-center;
	}

	p {
		@apply prose ml-2 text-sm font-light text-base-content subpixel-antialiased;
	}

	label {
		@apply prose text-xs subpixel-antialiased align-middle;
	}
</style>

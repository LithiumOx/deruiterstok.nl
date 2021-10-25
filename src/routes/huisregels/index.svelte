<script>
	import { fade } from 'svelte/transition';
</script>

<div class="bg-base-200 min-h-[80vh] rounded-box p-3 mt-4 flex flex-wrap justify-center">
	<h1 class="font-bold text-base-content flex-nowrap self-center p-3">Huisregels</h1>
	<ul class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-items-stretch">
		<li transition:fade class="flex-wrap">
			• <p>Wij schenken alleen alcohol aan 18 jaar en ouder.</p>
			<div class="alert alert-warning items-start">
				<div class="flex-1">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						class="w-9 h-9 mx-2  stroke-current"
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
			<div class="alert alert-info items-start">
				<div class="flex-1">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						class="w-8 h-8  mx-2 stroke-current"
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
	<div class="alert alert-error p-2  self-end">
		<div class="flex-1 font-bold items-center">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				class="w-14 h-14 mx-2 stroke-current animate-pulse"
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

<style>
	ul {
		@apply p-2;
	}
	li {
		@apply flex m-0.5 p-2 px-2 max-w-xl text-left font-black text-primary text-2xl bg-base-300 inset-0 border-2 transition duration-300 align-middle border-base-300 hover:border-primary ease-in rounded-box items-center;
	}
	p {
		@apply first:text-xs ml-2 text-xl font-light text-base-content hover:font-medium subpixel-antialiased align-middle;
	}
	label {
		@apply text-xs subpixel-antialiased break-all align-middle;
	}
</style>

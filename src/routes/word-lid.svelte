<script>
	export let Naam, Achternaam, Dag, Maand, Jaar, Nummer;
	import Background from '../assets/topography.svg';
</script>

<div
	class="hero min-h-[80vh] rounded-box bg-base-200 mt-4"
	style="background-image: url({Background});background-repeat: repeat;"
>
	<div class="card bg-base-100 max-w-[95%] max-h-[95%] p-10">
		<a class="w-1/5 btn btn-ghost" href="/">← Terug</a>
		<h1 class="text-4xl font-extrabold mb-2.5 text-center text-base-content">Word nu lid!</h1>
		<div class="my-2 alert alert-info">
			<div class="flex-1">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					class="w-6 h-6 mx-2 stroke-current"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
					/>
				</svg>
				<label
					>Wanneer wij de mail ontvangen sturen we je zo spoedig mogelijk een tikkie terug!</label
				>
			</div>
		</div>
		<div class="space-y-2 form-control">
			<div>
				<label class="label">
					<span class="label-text">Volledige naam</span>
				</label>
				<div class="flex space-x-2">
					<input placeholder="Voornaam" class="w-1/2 input input-primary" bind:value={Naam} />
					<input
						placeholder="Achternaam"
						class="w-1/2 input input-primary"
						bind:value={Achternaam}
					/>
				</div>
			</div>
			<div>
				<label class="label">
					<span class="label-text">Geboortedatum</span>
				</label>
				<div class="flex space-x-2">
					<input
						placeholder="01"
						maxlength="2"
						type="tel"
						class="w-1/3 input input-primary"
						bind:value={Dag}
					/>
					<input
						placeholder="02"
						maxlength="2"
						type="tel"
						class="w-1/3 input input-primary"
						bind:value={Maand}
					/>
					<input
						placeholder="2000"
						maxlength="4"
						type="tel"
						class="w-1/3 input input-primary"
						bind:value={Jaar}
					/>
				</div>
				<div>
					<label class="label">
						<span class="label-text">Mobiel nummer</span>
					</label>
					<input
						placeholder="0612345678"
						type="tel"
						maxlength="10"
						class="w-full input input-primary"
						bind:value={Nummer}
					/>
				</div>
				<div class="flex mt-5">
					<a
						href="mailto:ruiterstok@outlook.com?subject={Naam}%20{Achternaam}%20wil%20lid%20worden!&body=Naam%3A%20{Naam}%20{Achternaam}%0D%0AGeboortedatum%3A%20{Dag}-{Maand}-{Jaar}%0D%0ATelefoonnummer%3A%200{Nummer}"
						class="self-end w-1/4 btn btn-primary">Mail ons!</a
					>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	label {
		@apply text-center font-semibold;
	}
</style>

<script>
	export let Naam, Achternaam, Dag, Maand, Jaar, Nummer;
	import Background from '../assets/topography.svg';
	import Tikkie from '$lib/components/tikkie-1.svg';
</script>

<div
	class="hero min-h-[80vh] rounded-box bg-base-200 mt-4"
	style="background-image: url({Background});background-repeat: repeat;"
>
	<div class="card bg-base-100 max-w-[95%] max-h-[95%] p-5">
		<h1 class="my-5 text-4xl font-extrabold text-center text-base-content">Word nu lid!</h1>
		<div class="mx-2.5 form-control">
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
				<div class="mt-10 alert alert-info">
					<div class="flex-1">
						<img src={Tikkie} class="self-center mx-2 w-7 h-7" />
						<label
							>Wanneer wij de mail ontvangen sturen we je zo spoedig mogelijk een tikkie terug!</label
						>
					</div>
				</div>
				<div class="flex mt-5">
					<a class="flex-none w-1/3 mr-1 text-center btn" href="/">← Terug</a>
					<div class="flex-grow" />
					<a
						href="mailto:ruiterstok@outlook.com?subject={Naam}%20{Achternaam}%20wil%20lid%20worden!&body=Naam%3A%20{Naam}%20{Achternaam}%0D%0AGeboortedatum%3A%20{Dag}-{Maand}-{Jaar}%0D%0ATelefoonnummer%3A%20{Nummer}"
						class="flex-none w-1/3 ml-1 place-self-end btn btn-primary">Mail ons!</a
					>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	label {
		@apply text-left;
	}
</style>

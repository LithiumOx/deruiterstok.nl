<script>
	import { onMount } from 'svelte';

	let stripeReady = false;
	let mounted = false;

	function stripeSourceHandler(source) {
		// Redirect the customer to the authorization URL.
		document.location.href = source.redirect.url;
	}

	onMount(() => {
		mounted = true;
		if (stripeReady) {
			loadStripeElements();
		}
	});

	function stripeLoaded() {
		stripeReady = true;
		if (mounted) {
			loadStripeElements();
		}
	}

	function loadStripeElements() {
		// await sleep(500);
		// Create a Stripe client.
		// Note: this merchant has been set up for demo purposes.
		const stripe = Stripe(process.env.VITE_STRIPE_PUBLIC_KEY);

		// Create an instance of Elements.
		var elements = stripe.elements();

		// Custom styling can be passed to options when creating an Element.
		// (Note that this demo uses a wider set of styles than the guide below.)
		var style = {
			base: {
				padding: '10px 12px',
				color: '#9ca3af',
				fontFamily:
					'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
				fontSmoothing: 'antialiased',
				fontSize: '16px',
				'::placeholder': {
					color: '#9ca3af'
				}
			},
			invalid: {
				color: '#fa755a'
			}
		};

		// Create an instance of the idealBank Element.
		var idealBank = elements.create('idealBank', { style: style });

		// Add an instance of the idealBank Element into the `ideal-bank-element` <div>.
		idealBank.mount('#ideal-bank-element');

		var errorMessage = document.getElementById('error-message');

		// Handle form submission.
		var form = document.getElementById('payment-form');
		form.addEventListener('submit', function (event) {
			event.preventDefault();

			var sourceData = {
				type: 'ideal',
				amount: 1099,
				currency: 'eur',
				owner: {
					name: document.querySelector('input[name="name"]').value
				},
				// Specify the URL to which the customer should be redirected
				// fter paying.
				redirect: {
					return_url: 'http://localhost:3000/payment'
				}
			};

			// Call `stripe.createSource` with the idealBank Element and additional options.
			stripe.createSource(idealBank, sourceData).then(function (result) {
				if (result.error) {
					// Inform the customer that there was an error.
					errorMessage.textContent = result.error.message;
					errorMessage.classList.add('visible');
					stopLoading();
				} else {
					// Redirect the customer to the authorization URL.
					errorMessage.classList.remove('visible');
					stripeSourceHandler(result.source);
				}
			});
		});
	}
</script>

<svelte:head>
	<script src="https://js.stripe.com/v3/" on:load={stripeLoaded}></script>
</svelte:head>

<form id="payment-form">
	<div class="form-row grid">
		<label for="name"> <span class="label-text">Naam</span> </label>
		<input id="name" name="name" placeholder="Jenny Rosen" required />
	</div>

	<div class="form-row grid">
		<label for="ideal-bank-element"> <span class="la">iDEAL Bank</span> </label>
		<div id="ideal-bank-element">
			<!-- A Stripe Element will be inserted here. -->
		</div>
	</div>
	<script src="https://js.stripe.com/v3/"></script>
	<button>Betaal</button>

	<!-- Used to display form errors. -->
	<div id="error-message" role="alert" />
</form>

<style>
	#name {
		@apply input input-bordered;
	}
	#payment-form {
		@apply m-10;
	}
	#form-row {
		@apply m-5 max-w-lg mt-5;
	}
	div #ideal-bank-element {
		@apply bg-base-100 rounded-lg border border-gray-500;
	}
	div #ideal-bank-element span {
		@apply text-base-content;
	}

	#payment-form button {
		@apply btn btn-primary mt-5;
	}
</style>

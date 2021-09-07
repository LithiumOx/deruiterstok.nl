import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		preprocess({
			postcss: true
		})
	],

	optimizeDeps: {
		include: ['svelte-hero-icons']
	},

	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		adapter: require('@sveltejs/adapter-static'),
		target: '#svelte',
		vite: {
			ssr: {
				noExternal: ['svelte-stripe-js']
			}
		}
	}
};

export default config;

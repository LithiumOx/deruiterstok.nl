import preprocess from 'svelte-preprocess';
import adapterStatic from '@sveltejs/adapter-static';

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
		files: {
			assets: 'src/static'
		},
		// hydrate the <div id="svelte"> element in src/app.html
		adapter: adapterStatic(),
		target: '#svelte',
		vite: {
			ssr: {
				noExternal: ['svelte-stripe-js']
			}
		}
	}
};

export default config;

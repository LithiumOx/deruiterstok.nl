import { defineMDSveXConfig as defineConfig } from 'mdsvex';

const config = defineConfig({
	layout: {
		_: './src/layoutNieuwsbrief.svelte' // default mdsvex layout
	},
	extensions: ['.svelte.md', '.md', '.svx'],

	smartypants: {
		quotes: true,

		dashes: 'oldschool'
	},

	remarkPlugins: [],
	rehypePlugins: []
});

export default config;

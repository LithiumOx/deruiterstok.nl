const config = {
	mode: 'jit',
	content: ['./src/**/*.{html,js,svelte,ts,svg}'],
	plugins: [require('@tailwindcss/typography'), require('daisyui')]
};

module.exports = config;

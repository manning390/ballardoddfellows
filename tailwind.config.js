/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				accent: 'rgb(115 156 175 / <alpha-value>)',
				'random-purple': 'rgb(181 167 215 / <alpha-value>)'
			}
		},
		fontFamily: {
			alegreya: ['Alegreya SC', 'serif'],
			'alegreya-sans': ['Alegreya Sans', 'sans-serif']
		}
	},
	plugins: []
};

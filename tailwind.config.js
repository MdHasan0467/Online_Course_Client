/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	themes: [
		{
			mytheme: {
				primary: '#1b628e',

				secondary: '#cce0ff',

				accent: '#f7a5c3',

				neutral: '#192024',

				'base-100': '#F3ECF4',

				info: '#518BCD',

				success: '#23B8A2',

				warning: '#C89514',

				error: '#F45648',
			},
		},
	],
	plugins: [require('daisyui')],
};

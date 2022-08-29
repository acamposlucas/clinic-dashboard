/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				"gray-900": "#464646",
				"gray-400": "#A3A3A3",
				"gray-300": "#A3A3A3",
				"gray-200": "#ECECEC",
				"gray-100": "#F6F6F6",
				"blue-500": "#4894FF",
				background: "#faf8fe",
				"yellow-500": "#FFB050",
			},
			boxShadow: {
				default: "0px 4px 16px rgba(72, 148, 255, 0.16)",
			},
			fontFamily: {
				body: ["Montserrat", "sans-serif"],
			},
			fontSize: {
				sm: [
					"clamp(0.75rem, 0.705rem + 0.23vw, 0.875rem)",
					{
						lineHeight: 1.5,
					},
				],
				base: [
					"clamp(0.875rem, 0.83rem + 0.23vw, 1rem)",
					{
						lineHeight: 1.5,
					},
				],
				"2xl": [
					"clamp(1.375rem, 1.148rem + 1.14vw, 2rem)",
					{
						lineHeight: 1.6,
					},
				],
			},
		},
	},
	plugins: [],
};

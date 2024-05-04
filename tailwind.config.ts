import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			fontFamily: {
				satoshi: ["var(--font-satoshi)", "sans-serif"],
				//use css vars
				title: ["var(--font-title)", "serif"],
			},
			colors: {
				brand: {
					blue: "#3D8BFF",
					blueDark: "#3D6FFF",
					purple: "#AB23FF",
					purpleDark: "#9123FF",
					gray: "#13171D",
				},
			},
		},
	},
	plugins: [],
};
export default config;

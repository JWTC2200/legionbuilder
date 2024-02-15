import type { Config } from "tailwindcss"
import colors from "tailwindcss/colors"

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		clipPath: {
			"octagon-sm":
				"polygon(0 0.25rem, 0.25rem 0, calc(100% - 0.25rem) 0, 100% 0.25rem, 100% calc(100% - 0.25rem), calc(100% - 0.25rem) 100%, 0.25rem 100%, 0% calc(100% - 0.25rem), 0% 0.25rem)",
			"octagon-md":
				"polygon(0 0.5rem, 0.5rem 0, calc(100% - 0.5rem) 0, 100% 0.5rem, 100% calc(100% - 0.5rem), calc(100% - 0.5rem) 100%, 0.5rem 100%, 0% calc(100% - 0.5rem), 0% 0.5rem)",
			"octagon-lg":
				"polygon(0 0.75rem, 0.75rem 0, calc(100% - 0.75rem) 0, 100% 0.75rem, 100% calc(100% - 0.75rem), calc(100% - 0.75rem) 100%, 0.75rem 100%, 0% calc(100% - 0.75rem), 0% 0.75rem)",
			"halfagon-sm":
				"polygon(0 0, calc(100% - 0.25rem) 0, 100% 0.25rem, 100% 100%, calc(100% - 0.25rem) 100%, 0.25rem 100%, 0 calc(100% - 0.25rem))",
			"halfagon-md":
				"polygon(0 0, calc(100% - 0.5rem) 0, 100% 0.5rem, 100% 100%, calc(100% - 0.5rem) 100%, 0.5rem 100%, 0 calc(100% - 0.5rem))",
			"halfagon-lg":
				"polygon(0 0, calc(100% - 0.75rem) 0, 100% 0.75rem, 100% 100%, calc(100% - 0.75rem) 100%, 0.75rem 100%, 0 calc(100% - 0.75rem))",
		},
		fontFamily: {
			subrayada: ['"Montserrat Subrayada"', "Sans-serif"],
			graduate: ["Graduate", "Sans-serif"],
		},
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
				"titanicus-bg": "url('/images/AT_bg.jpg)",
			},
			colors: {
				primary: colors.lime,
				backgrounds: colors.green,
				secondary: colors.zinc,
				tertiary: {
					"50": "hsl(53, 75%, 95%)",
					"100": "hsl(51, 80%, 88%)",
					"200": "hsl(48, 83%, 77%)",
					"300": "hsl(46, 82%, 64%)",
					"400": "hsl(44, 81%, 53%)",
					"500": "hsl(41, 78%, 49%)",
					"600": "hsl(36, 81%, 40%)",
					"700": "hsl(31, 77%, 33%)",
					"800": "hsl(27, 67%, 29%)",
					"900": "hsl(24, 60%, 26%)",
					"950": "hsl(23, 69%, 14%)",
				},
			},
			fontSize: {
				lg: "110%",
				xl: "125%",
				"2xl": "175%",
			},
			margin: {
				"1/4": "25%",
			},
			width: {
				"1/10": "10%",
				"4/10": "40%",
			},
		},
	},
	plugins: [require("tailwind-clip-path")],
}
export default config

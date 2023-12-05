import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    clipPath: {
      'octagon-sm': 'polygon(0 0.3rem, 0.3rem 0, calc(100% - 0.3rem) 0, 100% 0.3rem, 100% calc(100% - 0.3rem), calc(100% - 0.3rem) 100%, 0.3rem 100%, 0% calc(100% - 0.3rem), 0% 0.3rem)',
      'octagon-md': 'polygon(0 0.5rem, 0.5rem 0, calc(100% - 0.5rem) 0, 100% 0.5rem, 100% calc(100% - 0.5rem), calc(100% - 0.5rem) 100%, 0.5rem 100%, 0% calc(100% - 0.5rem), 0% 0.5rem)',
    },
    fontFamily: {
      subrayada: ['"Montserrat Subrayada"', "Sans-serif"],
      graduate: ["Graduate", "Sans-serif"],
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      width: {
        '1/10': '10%',
        '4/10': '40%',
      }
    },
  },
  plugins: [
    require('tailwind-clip-path'),
  ],
};
export default config;

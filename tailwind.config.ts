import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    clipPath: {
      'octagon-sm': 'polygon(0 0.25rem, 0.25rem 0, calc(100% - 0.25rem) 0, 100% 0.25rem, 100% calc(100% - 0.25rem), calc(100% - 0.25rem) 100%, 0.25rem 100%, 0% calc(100% - 0.25rem), 0% 0.25rem)',
      'octagon-md': 'polygon(0 0.5rem, 0.5rem 0, calc(100% - 0.5rem) 0, 100% 0.5rem, 100% calc(100% - 0.5rem), calc(100% - 0.5rem) 100%, 0.5rem 100%, 0% calc(100% - 0.5rem), 0% 0.5rem)',
      'halfagon-sm':   'polygon(0 0, calc(100% - 0.25rem) 0, 100% 0.25rem, 100% 100%, calc(100% - 0.25rem) 100%, 0.25rem 100%, 0 calc(100% - 0.25rem))',
      'halfagon-md':   'polygon(0 0, calc(100% - 0.5rem) 0, 100% 0.5rem, 100% 100%, calc(100% - 0.5rem) 100%, 0.5rem 100%, 0 calc(100% - 0.5rem))',
      'halfagon-lg':   'polygon(0 0, calc(100% - 0.75rem) 0, 100% 0.75rem, 100% 100%, calc(100% - 0.75rem) 100%, 0.75rem 100%, 0 calc(100% - 0.75rem))',
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
      colors: {
        primary: {
          '50': 'hsl(83, 52%, 95%)',
          '100': 'hsl(83, 53%, 89%)',
          '200': 'hsl(83, 52%, 80%)',
          '300': 'hsl(84, 49%, 67%)',
          '400': 'hsl(85, 45%, 55%)',
          '500': 'hsl(86, 47%, 44%)',
          '600': 'hsl(87, 49%, 35%)',
          '700': 'hsl(89, 45%, 27%)',
          '800': 'hsl(89, 40%, 23%)',
          '900': 'hsl(90, 35%, 20%)',
          '950': 'hsl(91, 45%, 10%)',
        },
        secondary: colors.stone,
        tertiary: {
          '50': 'hsl(64, 58%, 95%)',
          '100': 'hsl(65, 61%, 88%)',
          '200': 'hsl(62, 61%, 77%)',
          '300': 'hsl(60, 60%, 64%)',
          '400': 'hsl(57, 59%, 53%)',
          '500': 'hsl(55, 57%, 47%)',
          '600': 'hsl(50, 59%, 42%)',
          '700': 'hsl(45, 56%, 33%)',
          '800': 'hsl(41, 50%, 29%)',
          '900': 'hsl(38, 45%, 26%)',
          '950': 'hsl(37, 50%, 14%)',
        },
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

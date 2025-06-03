import {heroui} from "@heroui/theme"

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    './src/layouts/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        marc: ['Marc', 'sans-serif'],
        frick: ['Frick', 'serif'],
        // Police système pour les classes spécifiques
        sans: ['ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  safelist: [
    'font-marc',
    'font-frick',
    'font-sans',
    'font-serif',
    'font-mono',
  ],
  darkMode: "class",
  plugins: [heroui()],
}

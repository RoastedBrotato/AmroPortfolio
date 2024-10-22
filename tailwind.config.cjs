/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'nav-light': '#ffffff',
        'nav-dark': '#1a1a1a',
        'text-light': '#000000',
        'text-dark': '#ffffff',
        'background-light': '#ffffff',
        'background-dark': '#1a1a1a',
        'accent': '#007acc',
      },
    },
  },
  plugins: [],
}
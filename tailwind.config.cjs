/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: {
          light: '#ffffff',
          dark: '#121212',
        },
        text: {
          light: '#333333',
          dark: '#ffffff',
        },
        accent: '#f44336',
        nav: {
          light: '#f0f0f0',
          dark: '#1e1e1e',
        },
      },
    },
  },
  plugins: [],
};
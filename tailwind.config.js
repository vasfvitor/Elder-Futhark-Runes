/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{svelte,js,ts,jsx,tsx}", './src/**/*.{html,js,svelte,ts}', './node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}', "./node_modules/flowbite-svelte-icons/**/*.{html,js,svelte,ts}",],
  darkMode: 'class',
  theme: {
    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      lg: '1.4rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
    },
    extend: {
      colors: {
        blood: "#AA0000",
        gold: "#FFD700",
        // flowbite-svelte
        primary: {
          '50': '#ffcbcb',
          '100': '#ffb4b4',
          '200': '#ff9191',
          '300': '#ff6363',
          '400': '#ff1717',
          '500': '#ff0000',
          '600': '#ff0000',
          '700': '#d60000',
          '800': '#a80000',
          '900': '#7b0000',
          '950': '#200000',
        },
        pink: {
          '50': '#fffcf0',
          '100': '#fff5e0',
          '200': '#ffe3c7',
          '300': '#ffbe9e',
          '400': '#ff7f66',
          '500': '#ff3333',
          '600': '#ee173a',
          '700': '#c90d4c',
          '800': '#a30f59',
          '900': '#8a1563',
          '950': '#49043d',
        },
        purple: {
          '50': '#f6f6f6',
    '100': '#e7e7e7',
    '200': '#d1d1d1',
    '300': '#b0b0b0',
    '400': '#888888',
    '500': '#6d6d6d',
    '600': '#5d5d5d',
    '700': '#4f4f4f',
    '800': '#454545',
    '900': '#3d3d3d',
    '950': '#000000',
        },

        backgroundImage: {
          frey: "url('/frey.svg')",
          knot: "url('/celtic.svg')",
          cross: "url('/crossceltic.svg')",
          "noise-w": "url('/noise-white.png')",
          "noise-b": "url('/noise-black.png')",
        },
      },
    },
    plugins: [require('flowbite/plugin')],
  }
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{svelte,js,ts,jsx,tsx}"],
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
      },
      backgroundImage: {
        knot: "url('/celtic.svg')",
        cross: "url('/crossceltic.svg')",
        "noise-w": "url('/noise-white.png')",
        "noise-b": "url('/noise-black.png')",
      },
    },
    
  },
  plugins: [],
};

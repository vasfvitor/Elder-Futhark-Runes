/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{svelte,js,ts,jsx,tsx}"],
  theme: {
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

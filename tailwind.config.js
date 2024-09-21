/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#193c6b',  // Dark navy blue
        secondary: '#2d4d8f', // Slightly lighter version of navy blue
      },
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:"#74cddf"
      },
      fontFamily:{
        "primary": ['Inter', 'sans-serif'],
        cursive: ["Ephesis","cursive"]
      }
    },
  },
  plugins: [],
}


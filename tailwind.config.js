/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        gradiente: {
          100: "#326589",
          200: "#002F52"
        }
      }
    },
  },
  plugins: [],
}


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
      },
      borderRadius: {
        'barra': '50px' 
      },
      backgroundImage: {
        'gradiente-cresc': 'linear-gradient(90deg, #326589 35%, #002F52 165%)',
        'gradiente-decresc': 'linear-gradient(90deg, #002F52 35%, #326589 165%)'
      },
      height: {
        'pesquisa': '470px'
      }
    },
  },
  plugins: [],
}


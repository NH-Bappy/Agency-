/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ], 
  theme: {
    extend: {
      maxWidth: {
        Container: '1280px',
      },
      colors: {
        top : '#3661FC',
        bc: '#708FFF',
        Ic: '#FE681E'
      },
      fontFamily: {
      GF: ['Afacad Flux'],
      
        
      },
    },
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ], 
  theme: {
    extend: {
      maxWidth: {
        Container: '1400px',
      },
      colors: {
        top : '#3661FC',
        bc: '#708FFF',
        Ic: '#FE681E',
        bl:'#1A1A1A'
      },
      fontFamily: {
      dm: ['DM Mono'],
      },
      backgroundImage: {
        banneri: "url('./public/img/Add your image here.png')",
      }
    },
  },
  plugins: [],
}
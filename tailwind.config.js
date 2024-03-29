/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        paracustom: 'hsl(225, 20%, 60%)',
        headcustom:'hsl(227, 35%, 25%)',
        discountText:'hsl(15, 100%, 70%)',
        discountbg: 'hsl(14, 92%, 95%)',
      },
      fontFamily: {
        'manrope': ['Manrope', 'sans-serif'],
      },
      fontWeight: {
        'manrope': {
          '600': '600',
          '700': '700',
          '800': '800', 
        },
    },
  },
  plugins: [],
}

}
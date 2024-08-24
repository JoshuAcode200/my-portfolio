/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",  // Corrected this line
    './public/index.html'
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ['Poppins'],
      },
      screens: {
        'xs':'320px',
        'sm':'480px',
        'md':'786px',
        'lg':'1024px',
        'xl':'1280px',
        '2xl':'1440px'
      }
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,ts,tsx}', // Adjust this path if your files are in different locations
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        customPurple: '#6B46C1',
        darkpurple:'#1E1032',
        cream: '#F3EDE2'
      },
      fontSize: {
        '34': '34px',
        '30': '30px',
        '24': '24px',
        '20': '20px',
        '18': '18px',
        '16': '16px',
    },
    },
  },
  plugins: [],
};

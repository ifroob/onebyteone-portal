/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        'obo': {
          'primary': '#079BB9',
          'secondary': '#05677A',
          'accent': '#0CC5E3',
          'dark': '#0F1419',
          'darker': '#1A2332',
        },
      },
    },
  },
  plugins: [],
};
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
      fontFamily: {
        'sans': ['Space Grotesk', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        'display': ['Space Grotesk', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'tighter': '-0.02em',
        'tight': '-0.015em',
      },
    },
  },
  plugins: [],
};

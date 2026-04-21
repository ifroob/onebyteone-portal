/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        'obo-primary':   '#089bb9',
        'obo-light':     '#eaf7fa',
        'obo-dark':      '#1a1a2e',
        'obo-beige':     '#ded2bf',
        'obo-accent':    '#0CC5E3',
        'obo-surface':   '#f8f6f2',
        'obo-cream':     '#faf8f5',
        'obo-warm-gray': '#f5f3ef',
      },
      fontFamily: {
        sans: ['Sora', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
    },
  },
  plugins: [],
};
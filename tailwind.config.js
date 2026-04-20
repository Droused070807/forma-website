/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        surface: '#0d0d0d',
        container: '#1c1c1c',
        high: '#242424',
        highest: '#2c2c2c',
        'on-surface': '#f0f0f0',
        'on-variant': '#7a7a7a',
        ice: '#6b7fff',
        'ice-dim': 'rgba(107, 127, 255, 0.12)',
      },
      fontFamily: {
        sans: ['Inter Tight', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        serif: ['Instrument Serif', 'serif'],
      },
    },
  },
  plugins: [],
};

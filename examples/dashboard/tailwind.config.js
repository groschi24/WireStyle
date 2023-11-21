/** @type {import('tailwindcss').Config} */

const { withWS } = require('@wirecore/wirestyle');

module.exports = withWS({
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    '../../packages/wirestyle-core/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
});

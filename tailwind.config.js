/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        keepCalm: ['"KeepCalm"', 'sans-serif'], 
      },
      letterSpacing: {
        '10px': '10px', 
      },
    },
  },
  plugins: [],
}


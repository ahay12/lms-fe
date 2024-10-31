/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    fontFamily: {
      primary: 'Be Vietnam Pro',
    },
    extend: {
      colors: {
        dark: '#1A1A1A',
        secondary: '#E6E6E6',
      },
    },
  },
  plugins: [],
}

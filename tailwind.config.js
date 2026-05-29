/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        forest: {
          950: '#030f09',
          900: '#071a10',
          850: '#0a2016',
          800: '#0d2a1c',
          700: '#123825',
          600: '#1a4f34',
          500: '#1e5c3c',
        },
        gold: {
          300: '#f5d87a',
          400: '#e9c44a',
          500: '#d4a017',
          600: '#b8860b',
          700: '#9a6f0a',
        },
        cream: '#fdf6e3',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        script: ['"Great Vibes"', 'cursive'],
        body: ['"Cormorant Garamond"', 'serif'],
        sans: ['"Jost"', 'sans-serif'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #d4a017 0%, #f5d87a 50%, #b8860b 100%)',
        'forest-gradient': 'linear-gradient(180deg, #030f09 0%, #0d2a1c 40%, #1a4f34 70%, #0a2016 100%)',
      },
    },
  },
  plugins: [],
}

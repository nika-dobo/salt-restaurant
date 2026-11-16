/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./app.js"
  ],
  theme: {
    extend: {
      colors: {
        basalt: {
          950: '#090B0E',
          900: '#11151C',
          800: '#181E29',
          700: '#232B3A'
        },
        salt: {
          50: '#F4F1EA',
          100: '#E6E1D6',
          300: '#B8B2A6',
          400: '#9CA3AF'
        },
        brass: {
          300: '#E5BE70',
          400: '#D4A853',
          500: '#B88938'
        }
      },
      fontFamily: {
        serif: ['"Noto Serif Georgian"', '"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Noto Sans Georgian"', '"Plus Jakarta Sans"', '-apple-system', 'BlinkMacSystemFont', 'sans-serif']
      }
    }
  },
  plugins: []
};


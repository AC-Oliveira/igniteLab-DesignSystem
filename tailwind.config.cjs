/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
  ],
  theme: {
    fontSize: {
      xs: 14,
      sm: 16,
      md: 18,
      lg: 20,
      xl: 24,
      '2xl': 32
    },
    colors: {
      'black': '#000000',
      'white': '#ffffff',
      'transparent': 'transparent',
      gray: {
        900: '#121214',
        800: '#202024',
        400: '#a1a1a4',
        200: '#a0a0a0',
        100: '#e1e1e6',
      },
      cyan: {
        500: '#61dafb',
        300: '#94e4fa'
      },
    },
    extend: {
      fontFamily: {
        sans: 'Inter, sans-serif',
      },
    },
  },
  plugins: [],
}

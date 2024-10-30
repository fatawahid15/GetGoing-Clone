
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        red: {
          600: '#cc0000',
        },
      },
      animation: {
        'loading1': 'loading1 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite',
        'loading2': 'loading2 2.1s 1.15s cubic-bezier(0.165, 0.84, 0.44, 1) infinite',
      },
    },
  },
  plugins: [],
};
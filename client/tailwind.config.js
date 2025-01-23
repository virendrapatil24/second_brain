/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        turquoise: {
        '50': '#f1fcfa',
        '100': '#cef9f1',
        '200': '#9ef1e3',
        '300': '#51dfcc',
        '400': '#36cbbc',
        '500': '#1dafa2',
        '600': '#148d85',
        '700': '#14716b',
        '800': '#155a58',
        '900': '#164b48',
        '950': '#062d2d',
        },
      }
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        light: {
          bg: '#ffffff',
          main: '#F3F4F6',
          text: '#000000',
        },
        dark: {
          bg: '#000000',
          main: '#141517',
          text: '#ffffff',
        },
      },
    },
  },
  plugins: [],
}


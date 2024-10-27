/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        textGray: '#222222',
        Blue : {
          50 : '#EFF6FC'
        }
      },
    },
  },
  plugins: [],
}


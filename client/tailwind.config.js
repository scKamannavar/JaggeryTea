/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        Garamond : ['EB Garamond', 'serif'],
        Montser: ["Montserrat", "sans-serif"],
        Outfit : ["Outfit", "sans-serif"],
        Poppins : ["Poppins", "sans-serif"]
      },
      backgroundImage: {
        'window': "url('/src/assets/windowFrame.png')",
      }
    },
  },
  plugins: [],
}


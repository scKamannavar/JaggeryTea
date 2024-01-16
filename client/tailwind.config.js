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
        Poppins : ["Poppins", "sans-serif"],
        Cabin : ["Cabin", "sans-serif"]
      },
      backgroundImage: {
        'window': "url('/src/assets/windowFrame.png')",
        'bgBig' : "url('/src/assets/banner/bg5.png')",
        'contactBg' : "url('/src/assets/banner/contactBanner2.jpg')",
        'windowBg' : "url('/src/assets/windowBg.jpg')",
        'fillerProductBg' : "url('/src/assets/banner/fillerProductBg.png')",
        'blueBanner' : "url('/src/assets/banner/blue.png')",
        'productsBg' : "url('/src/assets/banner/productBg2.jpg')"

      },
      
    },
  },
  plugins: [],
}


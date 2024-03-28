/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation : {
        "bounce-blur" : 'bounce-blur 1s forwards'
      },
      keyframes : {
        "bounce-blur" : {
          '0%' : {
            filter : 'blur(8px)'
          },
          '100%' : {
            filter : 'blur(0)'
          }
        }
      }
    },
  },
  plugins: [],
}


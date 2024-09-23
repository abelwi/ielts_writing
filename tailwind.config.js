/** @type {import('tailwindcss').Config} */

import daisyui from "daisyui"
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customOrange: '#FFA471',
        customYellow: '#FFF16F',
        customBlue: '#83F1F1',
        customPurple: '#F598F1',
        customBackground: '#EDEDED'
      },
    },
  },
  plugins: [
    daisyui,
  ],

  daisyui: {
    themes: ["retro"]
  }
}

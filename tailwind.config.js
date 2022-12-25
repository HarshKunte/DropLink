/** @type {import('tailwindcss').Config} */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'bgLightGray': '#E0EDE4',
        'bgBaseGray':'B4D4C6',
        // 'bgLightGreen':'#9AC8BA',
        'bgLightGreen':'#a8f0c0',
        'bgBlack':'#091614',
        'bgDarkGreen':'#34594b'
      }
    },
  },
  daisyui: {
    themes: false
  },
  plugins: [require("daisyui")],
  
}

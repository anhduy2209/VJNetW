module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        cloudMove1: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(100vw)" },
        },
        cloudMove2: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100vw)" },
        },
        cloudMove3: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(200vw)" },
        },
        cloudMove4: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-200vw)" },
        },
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to bottom, #6D4869, #906074, #D58480, #ECA58B, #F8C995)',
        'home1': "url('/svg/home1.svg')",
        'home2': "url('/svg/home2.svg')",
        'home3': "url('/svg/home3.svg')",
        'home4': "url('/svg/home4.svg')",
        'product': "url('/svg/bg_product.svg)",
      },
      colors: {
        'light-pink': '#F2F0F4',
        'pink-gray': '#F7F5F9'
      },
    },
  },
  plugins: [],
};
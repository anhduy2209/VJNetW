module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        keyframes: {
          fadeIn: {
            '0%': { opacity: 0 },
            '100%': { opacity: 1 },
          },
        },
        animation: {
          fadeIn: 'fadeIn 2s ease-out',
        },
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to bottom, #6D4869, #906074, #D58480, #ECA58B, #F8C995)',
        'home1': "url('/svg/home1.svg')",
        'home2': "url('/svg/home2.svg')",
        'home3': "url('/svg/home3.svg')",
        'home4': "url('/svg/home4.svg')",
        'product': "url('/svg/bg_product.svg')",
        'advice': "url('/svg/bg_advice.svg')"
      },
      colors: {
        'light-pink': '#F2F0F4',
        'pink-gray': '#F7F5F9',
        'button': '#410016'
      },
      zIndex: {
        '60': '60', 
        '70': '70', 
        '100': '100',
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '@media (max-width: 768px)': {
          '#target-section': {
            display: 'none',
          },
          '.aos-element': {
            animation: 'fadeIn 2s ease-out',
            visibility: 'visible !important',
          },
          '.custom-scrollbar': {
            scrollX: 'hidden',
            scrollY: 'hidden'
          },
        },
      },
      );
    },
  ],
};
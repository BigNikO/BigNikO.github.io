const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      ...colors,
      custom: {
        darkBlue: '#04274C',
        contentBlue: '#58708a',
        hoverBlue: '#082543',
        hoverOrange: '#e48202',
        bitBucket: '#0747A6',
        linkedIn: '#0A66C2',
      },
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

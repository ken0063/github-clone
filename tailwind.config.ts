/* eslint-disable no-use-before-define */
/* eslint-disable no-undef */

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        dm: ['"DM Sans"', 'san-serif'],
        roboto: ['Roboto', 'san-serif'],
      },
    },
  },
  variants: {},
  plugins: [],
};

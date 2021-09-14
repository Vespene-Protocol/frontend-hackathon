module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      zIndex: {
        '1000': 1000,
      }
    },
  },
  variants: {
    extend: {
      padding: ['last'],
    },
  },
  plugins: [],
}

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        aqua: {
          'opacity-10': '#2FDCDCE6',
          DEFAULT: '#2FDCDC',
        },
        purple: {
          'opacity-10': '#987CE8E6',
          DEFAULT: '#987CE8',
        },
        black: '#1B1B1B',
      },
    },
  },
  variants: {
    extend: {
      borderRadius: ['first', 'last'],
    },
  },
  plugins: [],
};

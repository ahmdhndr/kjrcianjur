module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '100%',
          },
        },
      },
      colors: {
        primary: {
          100: '#00509B',
          200: '#003363',
        },
        secondary: {
          100: '#262626',
          200: '#1A1A1A',
        },
      },
      fontFamily: {
        body: ['Roboto'],
      },
      maxHeight: {
        hero: '510px',
      },
      width: {
        'small-screen': '355px',
      },
      height: {
        hero: '80vh',
        'small-screen': '355px',
      },
      borderRadius: {
        '40px': '40px',
        '25px': '25px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
};

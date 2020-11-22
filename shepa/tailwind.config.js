const colors = require('tailwindcss/colors')
module.exports = {
  purge: false,
  theme: {
    extend: {
      colors: {
        teal: colors.teal,
        cyan: colors.cyan,
      },
      fontFamily: {
        'roboto': ['roboto', 'serif'],
        'body': ['roboto', 'serif']
      }
    }
  },
  variants: {
    extend: {
      animation: ['hover', 'focus']
    }
  }
}

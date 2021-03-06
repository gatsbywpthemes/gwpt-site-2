const defaultTheme = require('tailwindcss/defaultTheme')
// export * from './colors'
const colors = require('./colors')

module.exports = {
  colors,
  screens: {
    ...defaultTheme.screens,
  },
  spacing: {
    ...defaultTheme.spacing,
  },
  borderRadius: {
    ...defaultTheme.borderRadius,
  },

  borderWidth: {
    ...defaultTheme.borderWidth,
  },
  boxShadow: {
    ...defaultTheme.boxShadow,
  },

  //Typography
  letterSpacing: {
    ...defaultTheme.letterSpacing,
  },
  lineHeight: {
    ...defaultTheme.lineHeight,
  },
  fontWeight: {
    ...defaultTheme.fontWeight,
  },
  fontFamily: {
    body: 'Titillium Web, sans-serif',
    heading: 'Titillium Web, sans-serif',
  },
  fontSize: {
    ...defaultTheme.fontSize,
  },
}

const Color = require('color')

const lighten = (clr, val) => Color(clr).lighten(val).rgb().string()
const darken = (clr, val) => Color(clr).darken(val).rgb().string()

const dark = 'rgb(13, 33, 49)'
const dark2 = darken('rgb(13, 33, 49)', 0.04)
const dark3 = darken('rgb(13, 33, 49)', 0.1)
const light = 'aliceblue'
const primary = 'rgb(137, 25, 248)'
const secondary = 'rgb(29, 192, 219)'
const yellow = 'rgb(254, 195, 56)'
const pink = 'rgb(230, 74, 145)'
const lightGrey = '#cfd8dc'
const grey = '#90a4ae'
const accentDark = 'rgb(230, 74, 145)'
const accentLight = 'rgb(230, 74, 145)'

module.exports = {
  primary,
  secondary,
  light,
  dark,
  lightGrey,
  accentDark,
  pink,
  yellow,
  accent: accentDark,
  background: dark,
  bgInverse: dark,
  text: light,
  textInverse: light,
  white: 'white',
  black: 'black',
  brand: primary,
  mutted: lightGrey,
  grey: grey,
  border: lightGrey,
  headerBg: dark3,
  headerColor: 'white',
  headerColorHover: yellow,
  footerBg: dark3,
  footerColor: light,
  infoBg: light,
  cardBg: dark2,
  archiveTitleBg: secondary,
  searchResultsHeaderBg: grey,
  searchResultsHeaderColor: 'white',
  highlightColor: accentDark,
  searchColor: primary,
  slideSidebarBg: dark,
  focusOutline: grey,
  nlInputBg: dark,
  nlInputColor: 'white',
  nlButtonBg: secondary,
  nlButtonBgHover: darken(0.05, secondary),
  nlButtonColor: light,
  gradientColor1: dark,
  gradientColor2: darken(0.08, dark),

  modes: {
    light: {
      text: dark,
      background: light,
      cardBg: lighten(0.028, 'rgb(237, 247, 255)'),
      headerBg: dark,
      footerBg: dark,
      infoBg: dark3,
      archiveTitleBg: grey,
      searchColor: grey,
      accent: accentLight,
      nlInputBg: light,
      nlInputColor: dark,
      nlButtonBg: primary,
      nlButtonBgHover: darken(0.1, primary),
      gradientColor1: '#95ccf140',
      gradientColor2: 'rgb(157 116 254 / 16%)',
    },
  },
}

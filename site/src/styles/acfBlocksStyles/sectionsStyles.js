export default {
  my: [60],
  '&:first-of-type': {
    mt: [0, 0, 60],
  },

  // '&:nth-child(even)': {
  //   bg: 'light',
  // },
  '.container': {
    py: [20, 40, 80],
    px: [0, 20, 40],
    maxWidth: 1100,
    bg: 'cardBg',
    borderRadius: 30,
    boxShadow: 'small',
  },
  h2: {
    // variant: 'text.headingBorders',
    // fontSize: 'xl',
    // fontWeight: 300,
    variant: 'text.headingGradient',
    mb: 80,
  },
  p: {
    maxWidth: 'l',
    mx: 'auto',
  },
  '.intro': {
    pb: 50,
    ul: {
      maxWidth: 'l',
      mx: 'auto',
      pl: 'xl',
    },
  },
}

const parts = ['container', 'button', 'panel']

const baseStyleContainer = {
  borderTopWidth: '1px',
  borderColor: 'inherit',
  bg: 'red',
  _last: {
    borderBottomWidth: '1px',
  },
}

const baseStyleButton = {
  fontSize: '1rem',
  bg: 'red',
  _focus: {
    boxShadow: 'outline',
  },
  _hover: {
    bg: 'blackAlpha.50',
  },
  _disabled: {
    opacity: 0.4,
    cursor: 'not-allowed',
  },
  px: 4,
  py: 2,
}

const baseStylePanel = {
  pt: 2,
  px: 4,
  pb: 5,
  bg: 'red',
}

const baseStyle = {
  container: baseStyleContainer,
  button: baseStyleButton,
  panel: baseStylePanel,
}

export default {
  parts,
  baseStyle,
}

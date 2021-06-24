export default {
  h2: {
    textAlign: 'center',
    mb: 50,
  },
  form: {
    width: ['100%', '80%', '50%'],
    px: 20,
  },
  '.formContainer': {
    justifyContent: 'center',
  },
  input: {
    bg: 'nlInputBg',
    border: 'none',
    height: 50,
    px: 15,
    '&::placeholder': { color: 'text' },
  },
  button: {
    borderRadius: '5px',
    px: 20,
    py: 15,
    mt: 20,
    display: 'block',
    width: '100%',
    border: 'none',
    cursor: 'pointer',
    bg: 'primary',
    color: 'white',
    textTransform: 'uppercase',
    fontSize: 'xs',
    fontWeight: 700,
    letterSpacing: 1.2,
    variant: ['gradients.primary', 'transitions.m'],
  },
  color: 'text',
}

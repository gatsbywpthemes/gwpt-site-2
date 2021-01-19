import { keyframes } from '@emotion/core'
const pehaafadein = keyframes`
  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0)
  }
`
export const slideSidebarStyles = {
  fontFamily: 'body',
  borderRadius: 0,
  bg: 'slideSidebarBg',
  width: ['100%', '468px'],
  display: 'flex',
  overflowY: 'scroll',
  boxShadow: ['none', '-10px 0 40px rgba(0,0,0,0.3)'],
  animationDuration: '.6s',

  p: 'xl',
  '&.menu-closing': {
    animation: `${pehaafadein} 1 .6s 0s cubic-bezier(0.165, 0.84, 0.44, 1)`,
    boxShadow: ['none', '-10px 0 0 rgba(0,0,0,0)'],
  },
  '.close': {
    cursor: 'pointer',
    position: 'fixed',
    top: 3,
    right: 3,
  },
}

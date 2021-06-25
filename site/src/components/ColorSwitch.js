/** @jsx jsx */
import { jsx, useColorMode, Box } from 'theme-ui'
import { Icon } from 'react-icons-kit'
import { iosSunny as sun } from 'react-icons-kit/ionicons/iosSunny'
import { iosMoon as moon } from 'react-icons-kit/ionicons/iosMoon'

export const ColorSwitch = ({ ...props }) => {
  const [colorMode, setColorMode] = useColorMode()

  return (
    <Box
      onClick={() =>
        setColorMode(colorMode === 'default' ? 'light' : 'default')
      }
      {...props}
    >
      <Box
        sx={{
          color: 'light',
          position: 'relative',
          top: [8, 45, 8],
          zIndex: 0,

          cursor: 'pointer',
        }}
      >
        {colorMode === 'light' ? (
          <Icon size={36} icon={moon} />
        ) : (
          <Icon size={36} icon={sun} />
        )}
      </Box>
    </Box>
  )
}

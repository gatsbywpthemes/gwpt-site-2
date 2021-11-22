/** @jsx jsx */
import { jsx, Container, Button } from 'theme-ui'

export const FreeTheme = () => {
  return (
    <Container
      sx={{
        bg: 'cardBg',
        maxWidth: '1100px',
        padding: '40px 20px',
        borderRadius: '20px',
        marginBottom: '40px',
      }}
    >
      <h3
        sx={{
          textAlign: 'center',
          color: 'pink',
          textTransform: 'uppercase',
        }}
      >
        Get your feet wet with our free theme!
      </h3>
      <div
        sx={{
          display: 'flex',
          justifyContent: 'center',
          width: '100%',
        }}
      >
        {/* <Button
          as="a"
          href="https://starterfree.gatsbyjs.io/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold hover:text-white"
          sx={{ mr: '15px' }}
        >
          Check it out!
        </Button> */}
        <Button as="a" href="#subscribe" className="font-bold hover:text-white">
          Subscribe and Get it Now!
        </Button>
      </div>
    </Container>
  )
}

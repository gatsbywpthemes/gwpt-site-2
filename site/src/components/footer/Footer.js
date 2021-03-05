/** @jsx jsx */
import { Container, jsx, Box, Flex } from 'theme-ui'
import { FooterContent } from './index'
import { SocialFollows } from '../social'
import { Link } from 'gatsby'

import { footerStyles } from '../../styles'
import { socialStyles } from '../../styles'
export const Footer = () => (
  <footer sx={{ ...footerStyles }}>
    <Container sx={{ py: 0 }}>
      <FooterContent />
      <Box className="inverse">
        <SocialFollows
          sx={{
            ...socialStyles.follow,
            display: 'flex',
            mt: `xs`,
            mb: 0,
          }}
        />
      </Box>
      <Flex
        sx={{
          justifyContent: 'center',
          textAlign: 'center',
          a: { px: '10px', fontSize: 'xs' },
        }}
      >
        <Link to="/terms-and-conditions">Terms & Conditions</Link>
        <Link to="/privacy-policy">Privacy Policy</Link>
        <a href="mailto:contact@gatsbywpthemes.com">Contact Us</a>
      </Flex>
    </Container>
  </footer>
)

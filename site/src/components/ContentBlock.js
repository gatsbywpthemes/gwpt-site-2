/** @jsx jsx */
import { jsx, Box, Container } from 'theme-ui'
import contentBlockStyles from '../styles/acfBlocksStyles/contentBlockStyles'
import sectionsStyles from '../styles/acfBlocksStyles/sectionsStyles'

export const SimpleContentBlock = ({
  title,
  anchor,
  marginTop,
  marginBottom,
  cssclass,
  children,
  ...props
}) => {
  const margins = {
    mt: marginTop,
    mb: marginBottom,
  }

  return (
    <Box
      as="section"
      id={anchor}
      className={`${cssclass || ''} contentBlock`}
      sx={{
        ...margins,
        ...sectionsStyles,
        ...contentBlockStyles,
      }}
      {...props}
    >
      <Container className="container">
        {title && <h2 dangerouslySetInnerHTML={{ __html: title }} />}
        {children}
      </Container>
    </Box>
  )
}

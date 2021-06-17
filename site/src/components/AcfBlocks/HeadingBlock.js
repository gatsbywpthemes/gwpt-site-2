/** @jsx jsx */
import { jsx, Heading, Container, Box } from 'theme-ui'
import { graphql } from 'gatsby'
import headingBlockStyles from '../../styles/acfBlocksStyles/headingBlockStyles'
import sectionsStyles from '../../styles/acfBlocksStyles/sectionsStyles'

export const fragment = graphql`
  fragment headingBlockFragment on WpPage_Flexlayouts_FlexibleLayouts_HeadingBlock {
    heading
    type
    centered
    cssclass
    anchor
    marginTop
    marginBottom
  }
`

export const HeadingBlock = ({
  heading,
  type,
  centered,
  marginTop,
  marginBottom,
  cssclass,
  anchor,
  ...props
}) => {
  const margins = {
    mt: marginTop,
    mb: marginBottom,
  }
  return (
    <Box
      id={anchor}
      className={`${cssclass || ''} headingBlock`}
      sx={{ ...margins, ...sectionsStyles, ...headingBlockStyles }}
      {...props}
    >
      <Container className="container">
        <Heading
          as={type}
          sx={{
            textTransform: `uppercase`,
            textAlign: centered && `center`,
          }}
        >
          {heading}
        </Heading>
      </Container>
    </Box>
  )
}

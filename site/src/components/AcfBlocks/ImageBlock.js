/** @jsx jsx */
import { jsx, Box, Container } from 'theme-ui'
import { graphql } from 'gatsby'
import { Image as GatsbyImg } from '../images/Image'
import imageBlockStyles from '../../styles/acfBlocksStyles/imageBlockStyles'
import sectionsStyles from '../../styles/acfBlocksStyles/sectionsStyles'

export const fragment = graphql`
  fragment imageBlockFragment on WpPage_Flexlayouts_FlexibleLayouts_ImageBlock {
    image {
      ...LargeImage
    }
    cssclass
    anchor
    marginTop
    marginBottom
  }
`

export const ImageBlock = ({
  image,
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
      as="section"
      className={`${cssclass || ''} imageBlock`}
      id={anchor}
      {...props}
      sx={{
        ...margins,
        ...sectionsStyles,
        ...imageBlockStyles,
      }}
    >
      <Container
        className="container"
        sx={{ display: 'flex', justifyContent: 'center' }}
      >
        <GatsbyImg img={image} />
      </Container>
    </Box>
  )
}

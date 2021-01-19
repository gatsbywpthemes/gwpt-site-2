/** @jsx jsx */
import { jsx, Box, Container } from 'theme-ui'
import { graphql } from 'gatsby'
import BgImage from '../images/BgImage'
import ParsedContent from '../../utils/ParsedContent'
import coverBlockStyles from '../../styles/acfBlocksStyles/coverBlockStyles'
import sectionsStyles from '../../styles/acfBlocksStyles/sectionsStyles'

const Content = ({ content }) => (
  <Container className="content">
    <ParsedContent content={content} />
  </Container>
)

export const fragment = graphql`
  fragment coverBlockFragment on WpPage_Flexlayouts_FlexibleLayouts_CoverBlock {
    content
    background
    color1
    color2
    overlay
    cssclass
    anchor
    marginTop
    marginBottom
    video
    parallax
    darkText
    image {
      ...LargeImage
    }
  }
`

export const CoverBlock = ({
  content,
  background,
  color1,
  color2,
  overlay,
  video,
  image,
  marginTop,
  marginBottom,
  cssclass,
  anchor,
  opacity,
  parallax,
  darkText,
  ...props
}) => {
  const margins = {
    mt: marginTop,
    mb: marginBottom,
  }

  const parallaxStyle = parallax && { backgroundAttachment: 'fixed' }
  const overlayClass = overlay && 'overlay'
  return (
    <Box
      id={anchor}
      className={`${cssclass || ''} ${overlayClass} coverBlock`}
      {...props}
      sx={{
        position: 'relative',
        ...margins,
        ...sectionsStyles,
        ...coverBlockStyles,
      }}
    >
      {background === 'image' && (
        <BgImage
          img={image}
          className="bgImage"
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            opacity: 0.4,

            ...parallaxStyle,
          }}
        >
          {content && <Content content={content} />}
        </BgImage>
      )}
      {/* {background === "video" && (
        <YoutubeBackground videoId={video} aspectRatio="16/9">
          {content && <Content content={content} />}
        </YoutubeBackground>
      )} */}
      {background === 'gradient' && (
        <Box
          sx={{
            backgroundImage: `linear-gradient(60deg, ${color1}, ${color2} )`,
          }}
        >
          {content && <Content content={content} />}
        </Box>
      )}
    </Box>
  )
}

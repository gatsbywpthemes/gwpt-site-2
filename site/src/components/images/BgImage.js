/** @jsx jsx */
import { jsx } from "theme-ui"
import { graphql } from "gatsby"

import BackgroundImage from "gatsby-background-image"

const BgImage = ({ img, height }) =>
  img && (
    <BackgroundImage
      fluid={img.node.localFile.childImageSharp.fluid}
      alt={img.altText}
      tag="div"
      sx={{
        width: `100%`,
        height,
        backGroundSize: `cover`,
        backgroundRepeat: `no-repeat`,
      }}
    ></BackgroundImage>
  )

export default BgImage

export const query = graphql`
  fragment GatsbyImageQuery on WpMediaItem {
    altText
    sourceUrl
    localFile {
      childImageSharp {
        fluid(maxWidth: 1200, quality: 80) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

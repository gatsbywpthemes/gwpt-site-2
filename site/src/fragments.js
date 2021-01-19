import { graphql } from "gatsby"

export const fragments = graphql`
  fragment LargeImage on WpMediaItem {
    altText
    sourceUrl
    localFile {
      publicURL
      childImageSharp {
        fluid(maxWidth: 1200, quality: 80) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }

  fragment MediumImage on WpMediaItem {
    altText
    sourceUrl
    localFile {
      publicURL
      childImageSharp {
        fluid(maxWidth: 600, quality: 80) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }

  fragment AvatarImage on WpMediaItem {
    altText
    sourceUrl
    localFile {
      childImageSharp {
        fixed(width: 100, quality: 80) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
  }
`

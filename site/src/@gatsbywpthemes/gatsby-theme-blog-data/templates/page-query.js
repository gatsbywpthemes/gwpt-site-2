import { graphql } from 'gatsby'
import Page from '../components/Page'

export default Page

export const pageQuery = graphql`
  query($uri: String!) {
    wpPage(uri: { eq: $uri }) {
      title
      content
      uri
      slug
      isFrontPage
      flexLayouts {
        flexibleLayouts {
          __typename
          ...contentBlockFragment
          ...projectsBlockFragment
          ...imageBlockFragment
          ...headingBlockFragment
          ...buttonBlockFragment
          ...coverBlockFragment
          ...columnsBlockFragment
          ...testimonialsBlockFragment
          ...subscribeBlockFragment
          ...pricingBlockFragment
          ...accordionBlockFragment
        }
      }
      featuredImage {
        node {
          localFile {
            childImageSharp {
              original {
                width
                height
                src
              }
            }
          }
        }
      }
      template {
        templateName
      }
    }
  }
`

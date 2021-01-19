/** @jsx jsx */
import { jsx, Box, Container } from 'theme-ui'
import { graphql } from 'gatsby'
import Button from './Button'
import ParsedContent from '../../utils/ParsedContent'
import sectionsStyles from '../../styles/acfBlocksStyles/sectionsStyles'

export const fragment = graphql`
  fragment pricingBlockFragment on WpPage_Flexlayouts_FlexibleLayouts_PricingBlock {
    cssclass
    anchor
    marginTop
    marginBottom
    pricingTables {
      title
      description
      price
      buyLink
      features {
        title
        tooltip
      }
    }
  }
`

export const PricingBlock = ({
  pricingTables,
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
      id={anchor}
      className={`${cssclass || ''} pricingBlock`}
      sx={{
        ...margins,
        ...sectionsStyles,
      }}
      {...props}
    >
      <Container className="container">
        <h1>Pricing Tables</h1>
      </Container>
    </Box>
  )
}

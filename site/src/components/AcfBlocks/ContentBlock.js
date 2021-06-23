/** @jsx jsx */
import { jsx, Box, Container } from 'theme-ui'
import { graphql } from 'gatsby'
import Button from './Button'
import ParsedContent from '../../utils/ParsedContent'
import contentBlockStyles from '../../styles/acfBlocksStyles/contentBlockStyles'
import sectionsStyles from '../../styles/acfBlocksStyles/sectionsStyles'

export const fragment = graphql`
  fragment contentBlockFragment on WpPage_Flexlayouts_FlexibleLayouts_ContentBlock {
    title
    content
    cssclass
    anchor
    marginTop
    marginBottom
    button {
      target
      title
      url
    }
  }
`

export const ContentBlock = ({
  title,
  button,
  content,
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
        {content && (
          <Box
            className="content"
            sx={{
              ul: {
                maxWidth: 'l',
                mx: 'auto',
                pl: 'xl',
              },
            }}
          >
            <ParsedContent content={content} />
          </Box>
        )}
        {button && <Button button={button} />}
      </Container>
    </Box>
  )
}

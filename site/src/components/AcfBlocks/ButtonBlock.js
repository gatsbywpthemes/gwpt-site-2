/** @jsx jsx */
import { jsx, Button, Flex, Container } from 'theme-ui'
import { graphql, Link } from 'gatsby'
import config from '../../../config'
import buttonBlockStyles from '../../styles/acfBlocksStyles/buttonBlockStyles'

export const fragment = graphql`
  fragment buttonBlockFragment on WpPage_Flexlayouts_FlexibleLayouts_ButtonBlock {
    variant
    cssclass
    anchor
    marginTop
    marginBottom
    position
    button {
      target
      title
      url
    }
  }
`

export const ButtonBlock = ({
  variant,
  button,
  position,
  marginTop,
  marginBottom,
  cssclass,
  anchor,
  ...props
}) => {
  const { title, target, url } = button
  const buttonUrl = url.replace(config.wordPressUrl, '')
  const margins = {
    mt: marginTop,
    mb: marginBottom,
  }
  const positionStyles =
    position === 'center'
      ? { justifyContent: `center` }
      : position === 'left'
      ? { justifyContent: `start` }
      : { justifyContent: `end` }
  return (
    <Container
      id={anchor}
      className={`container buttonBlock ${cssclass || ''}`}
      sx={{ ...margins, ...buttonBlockStyles }}
      {...props}
    >
      <Flex sx={{ ...positionStyles }}>
        <Button variant={variant || 'primary'} button={button}>
          {target === '_blank' ? (
            <a href={url} target="_blank" rel="noopener noreferrer">
              {title}
            </a>
          ) : (
            <Link to={buttonUrl}>{title}</Link>
          )}
        </Button>
      </Flex>
    </Container>
  )
}

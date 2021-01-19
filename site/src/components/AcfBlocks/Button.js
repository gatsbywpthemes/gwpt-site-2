/** @jsx jsx */
import { jsx, Flex, Button } from 'theme-ui'
// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Link } from 'gatsby'
import config from '../../../config'
import { AnchorLink } from 'gatsby-plugin-anchor-links'

export const ContentButton = ({ button, ...props }) => {
  const { title, target, url, buy } = button
  const buttonUrl = button && url.replace(config.wordPressUrl, '')
  return (
    <Flex {...props}>
      {buy ? (
        <AnchorLink to={url}>
          <Button>{title}</Button>
        </AnchorLink>
      ) : (
        <>
          {target === '_blank' ? (
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              sx={{ variant: 'buttons.primary' }}
            >
              {title}
            </a>
          ) : url.includes('#') ? (
            <AnchorLink to={url}>
              <Button>{title}</Button>
            </AnchorLink>
          ) : (
            <Link to={buttonUrl} sx={{ variant: 'buttons.primary' }}>
              {title}
            </Link>
          )}
        </>
      )}
    </Flex>
  )
}

export default ContentButton

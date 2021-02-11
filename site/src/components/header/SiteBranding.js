/** @jsx jsx */
import { jsx } from 'theme-ui'
// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Link } from 'gatsby'
import { useThemeOptions } from '@gatsbywpthemes/gatsby-theme-blog-data/src/hooks'
import { Logo } from './Logo'

export const SiteBranding = ({ title, ...props }) => {
  const { logo } = useThemeOptions()
  return (
    <>
      {logo ? (
        <Logo className="logo" {...props} />
      ) : (
        <h1
          sx={{
            variant: `text.branding`,
            display: 'flex',
            justifyContent: 'center',
            width: ['100%', 'auto'],
          }}
          {...props}
        >
          <Link to="/" rel="home">
            {title}
          </Link>
        </h1>
      )}
    </>
  )
}

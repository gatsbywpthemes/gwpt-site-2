/** @jsx jsx */
import React, { useEffect } from 'react'
import { jsx, Box, useThemeUI } from 'theme-ui'
import { Fragment } from 'react'
import { Header } from './header'
import { Footer } from './footer'
import { Global } from '@emotion/core'
import { Grommet } from 'grommet'
import { grommetStyles, globalStyles } from '../styles'
import { Helmet } from 'react-helmet'

import '../styles/scss/styles.scss'

export const Layout = ({ children, page, type = 'page', location }) => {
  const layoutClass = page !== undefined ? (page.slug ? page.slug : page) : ''

  const { theme } = useThemeUI()

  const pageTemplate = page && page.template ? page.template.__typename : ''

  const fullWidthClass =
    pageTemplate === 'WpFullWidthTemplate' ? 'fullWidth' : ''

  useEffect(() => {
    if (window.Cookiebot === undefined) {
      return
    }
    window.addEventListener(
      'CookiebotOnTagsExecuted',
      function (e) {
        console.log(window.Cookiebot.consent)
        if (window.Cookiebot.consent.statistics) {
          //Execute code that sets statistics cookies
          const pagePath = location
            ? location.pathname + location.search + location.hash
            : undefined
          setTimeout(() => {
            if (typeof window.gtag === 'function')
              window.gtag(`event`, `page_view`, { page_path: pagePath })
          }, 500)
        }
      },
      false
    )
  }, [])

  return (
    <>
      <Helmet>
        {/*} <script
          id="Cookiebot"
          src="https://consent.cookiebot.com/uc.js"
          data-cbid="b49b1a5f-acd1-49de-b4b0-6668ec151bf7"
          data-blockingmode="auto"
          type="text/javascript"
        ></script> */}
        <script
          id="Cookiebot"
          src="https://consent.cookiebot.com/uc.js"
          data-cbid="b49b1a5f-acd1-49de-b4b0-6668ec151bf7"
          type="text/javascript"
          async
        ></script>
      </Helmet>
      <Grommet theme={grommetStyles}>
        <Global styles={globalStyles(theme)} />
        <Box
          sx={{
            '&.fullWidth': {
              '.mainContainer': {
                maxWidth: `100%`,
                // px: 0,
              },
            },
          }}
          className={`${layoutClass}-${type} ${fullWidthClass}`}
        >
          <Header />

          <main
            sx={{
              py: `xxl`,
              '.fullWidth &': {
                py: 0,
                // mt: -32,
              },
            }}
          >
            <Fragment>{children}</Fragment>
          </main>
          <Footer />
        </Box>
      </Grommet>
    </>
  )
}

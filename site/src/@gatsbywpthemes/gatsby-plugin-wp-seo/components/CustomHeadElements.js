import React from 'react'
import { Helmet } from 'react-helmet'

export const CustomHeadElements = (props) => {
  return (
    <Helmet>
      <script
        id="Cookiebot"
        src="https://consent.cookiebot.com/uc.js"
        data-cbid="b49b1a5f-acd1-49de-b4b0-6668ec151bf7"
        data-blockingmode="auto"
        type="text/javascript"
      ></script>
    </Helmet>
  )
}

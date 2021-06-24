require('typeface-titillium-web')
require('./src/styles/tailwind.css')

const React = require('react')

const Wrapper = (props) => {
  const locationRef = React.useRef(props.location)
  React.useEffect(() => {
    if (process.env.GATSBY_CBID) {
      window.addEventListener(
        'CookiebotOnAccept',
        function () {
          if (window.Cookiebot.consent.statistics) {
            //Execute code that sets statistics cookies
            const pagePath = locationRef.current
              ? locationRef.current.pathname +
                locationRef.current.search +
                locationRef.current.hash
              : undefined
            setTimeout(() => {
              if (typeof window.gtag === 'function')
                window.gtag(`event`, `page_view`, { page_path: pagePath })
            }, 500)
          }
        },
        false
      )
    }
  }, [])
  return <>{props.children}</>
}

exports.wrapPageElement = ({ element, props }) => {
  // props provide same data to Layout as Page element will get
  // including location, data, etc - you don't need to pass it
  return <Wrapper {...props}>{element}</Wrapper>
}

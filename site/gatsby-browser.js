require('typeface-titillium-web')
require('./src/styles/tailwind.css')

const React = require('react')

const Wrapper = (props) => {
  React.useEffect(() => {
    console.log('wrapper useeffect')
    window.addEventListener(
      'CookiebotOnAccept',
      function (e) {
        console.log(window.Cookiebot.consent)
        if (window.Cookiebot.consent.statistics) {
          //Execute code that sets statistics cookies
          const pagePath = props.location
            ? props.location.pathname +
              props.location.search +
              props.location.hash
            : undefined
          setTimeout(() => {
            console.log(typeof window.gtag)
            if (typeof window.gtag === 'function')
              window.gtag(`event`, `page_view`, { page_path: pagePath })
          }, 500)
        }
      },
      false
    )
  }, [])
  return <>{props.children}</>
}

exports.wrapPageElement = ({ element, props }) => {
  // props provide same data to Layout as Page element will get
  // including location, data, etc - you don't need to pass it
  return <Wrapper {...props}>{element}</Wrapper>
}

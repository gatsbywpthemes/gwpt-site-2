require('typeface-titillium-web')

exports.onPreRenderHTML = ({ getHeadComponents, replaceHeadComponents }) => {
  const headComponents = getHeadComponents()
  const newHeadComponents = headComponents.map((el) => {
    if (el.key?.startsWith('gatsby-plugin-google-gtag')) {
      el.props.type = 'text/plain'
      el.props['data-cookieconsent'] = 'statistics'
    } else {
      if (el.key?.startsWith('gatsby-plugin-facebook-pixel')) {
        el.props.type = 'text/plain'
        el.props['data-cookieconsent'] = 'marketing'
      }
    }

    return el
  })
  replaceHeadComponents(newHeadComponents)
}

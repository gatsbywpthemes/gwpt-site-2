require('typeface-titillium-web')

exports.onPreRenderHTML = ({ getHeadComponents, replaceHeadComponents }) => {
  const headComponents = getHeadComponents()
  headComponents.sort((x, y) => {
    if (x.props['data-blockingmode'] === 'auto') {
      return -1
    } else if (y.props['data-blockingmode'] === 'auto') {
      return 1
    }
    return 0
  })
  const newHeadComponents = headComponents.map((el) => {
    if (el.key?.startsWith('gatsby-plugin-google-gtag')) {
      el.props.type = 'text/plain'
      el.props['data-cookieconsent'] = 'statistics'
    }
    return el
  })
  replaceHeadComponents(newHeadComponents)
}

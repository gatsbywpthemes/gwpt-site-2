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
  replaceHeadComponents(headComponents)
}

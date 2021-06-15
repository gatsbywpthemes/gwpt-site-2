import React from 'react'
import Page from '../../../components/templates/Page'

export default ({ data, pageContext, location }) => {
  return <Page location={location} page={data.wpPage} ctx={pageContext} />
}

/** @jsx jsx */
import { useEffect, useRef } from 'react'
import { jsx, Container } from 'theme-ui'
import { Layout } from '../Layout'
import { Seo } from '@gatsbywpthemes/gatsby-plugin-wp-seo'

import {
  ButtonBlock,
  ContentBlock,
  HeadingBlock,
  ImageBlock,
  ProjectsBlock,
  ColumnsBlock,
  SubscribeBlock,
  PricingBlock,
  AccordionBlock,
} from '../AcfBlocks'
import { SimpleContentBlock } from '../ContentBlock'

const Page = ({ page, ctx, location }) => {
  const {
    title,
    isFrontPage,
    uri,
    slug,
    flexLayouts: { flexibleLayouts },
  } = page
  const cookiesRef = useRef(null)
  useEffect(() => {
    if (cookiesRef.current && process.env.GATSBY_CBID) {
      const script = document.createElement('script')
      script.id = 'CookieDeclaration'
      script.async = true
      script.src = `https://consent.cookiebot.com/${process.env.GATSBY_CBID}/cd.js`
      cookiesRef.current.appendChild(script)
    }
  }, [])

  const featuredImage =
    page.featuredImage?.node.localFile.childImageSharp.original
  return (
    <Layout page={page} type="page" location={location}>
      <Seo
        location={location}
        isFrontPage={isFrontPage}
        title={title}
        uri={uri}
        yoastSeo={ctx.yoastSeo}
        seo={ctx.seo}
        featuredImage={
          featuredImage && {
            src: featuredImage.src,
            width: featuredImage.width,
            height: featuredImage.height,
          }
        }
      />
      <Container className="mainContainer">
        {flexibleLayouts &&
          flexibleLayouts.length > 0 &&
          flexibleLayouts.map((block, index) => {
            switch (block?.__typename) {
              case 'WpPage_Flexlayouts_FlexibleLayouts_ContentBlock':
                return <ContentBlock key={index} {...block} />
              case 'WpPage_Flexlayouts_FlexibleLayouts_HeadingBlock':
                return <HeadingBlock key={index} {...block} />
              case 'WpPage_Flexlayouts_FlexibleLayouts_ImageBlock':
                return <ImageBlock key={index} {...block} />
              case 'WpPage_Flexlayouts_FlexibleLayouts_ButtonBlock':
                return <ButtonBlock key={index} {...block} />
              case 'WpPage_Flexlayouts_FlexibleLayouts_ProjectsBlock':
                return <ProjectsBlock key={index} {...block} />

              case 'WpPage_Flexlayouts_FlexibleLayouts_ColumnsBlock':
                return <ColumnsBlock key={index} {...block} />

              case 'WpPage_Flexlayouts_FlexibleLayouts_SubscribeBlock':
                return <SubscribeBlock key={index} {...block} />
              case 'WpPage_Flexlayouts_FlexibleLayouts_PricingBlock':
                return <PricingBlock key={index} {...block} />
              case 'WpPage_Flexlayouts_FlexibleLayouts_AccordionBlock':
                return <AccordionBlock key={index} {...block} />

              default:
                return ''
            }
          })}

        {slug === 'privacy-policy' && process.env.GATSBY_CBID && (
          <SimpleContentBlock
            title="Cookie Policy and Details"
            anchor="cookie-details"
          >
            <div ref={cookiesRef} />
          </SimpleContentBlock>
        )}
      </Container>
    </Layout>
  )
}

export default Page

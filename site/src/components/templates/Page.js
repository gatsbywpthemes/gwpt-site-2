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

const Page = ({ page, ctx }) => {
  const {
    title,
    isFrontPage,
    uri,
    slug,
    flexLayouts: { flexibleLayouts },
  } = page
  const cookiesRef = useRef(null)
  useEffect(() => {
    if (cookiesRef.current) {
      const script = document.createElement('script')
      script.id = 'CookieDeclaration'
      script.async = true
      script.src =
        'https://consent.cookiebot.com/b49b1a5f-acd1-49de-b4b0-6668ec151bf7/cd.js'
      cookiesRef.current.appendChild(script)
    }
  }, [])

  const featuredImage =
    page.featuredImage?.node.localFile.childImageSharp.original
  return (
    <Layout page={page} type="page">
      <Seo
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
          flexibleLayouts.map((block) => {
            switch (block?.__typename) {
              case 'WpPage_Flexlayouts_FlexibleLayouts_ContentBlock':
                return <ContentBlock {...block} />
              case 'WpPage_Flexlayouts_FlexibleLayouts_HeadingBlock':
                return <HeadingBlock {...block} />
              case 'WpPage_Flexlayouts_FlexibleLayouts_ImageBlock':
                return <ImageBlock {...block} />
              case 'WpPage_Flexlayouts_FlexibleLayouts_ButtonBlock':
                return <ButtonBlock {...block} />
              case 'WpPage_Flexlayouts_FlexibleLayouts_ProjectsBlock':
                return <ProjectsBlock {...block} />

              case 'WpPage_Flexlayouts_FlexibleLayouts_ColumnsBlock':
                return <ColumnsBlock {...block} />

              case 'WpPage_Flexlayouts_FlexibleLayouts_SubscribeBlock':
                return <SubscribeBlock {...block} />
              case 'WpPage_Flexlayouts_FlexibleLayouts_PricingBlock':
                return <PricingBlock {...block} />
              case 'WpPage_Flexlayouts_FlexibleLayouts_AccordionBlock':
                return <AccordionBlock {...block} />

              default:
                return ''
            }
          })}

        {slug === 'privacy-policy' && (
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

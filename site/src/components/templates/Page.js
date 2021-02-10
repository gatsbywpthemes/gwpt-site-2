/** @jsx jsx */
import { jsx, Container, Box } from 'theme-ui'
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

const Page = ({ page, ctx }) => {
  const {
    title,
    isFrontPage,
    uri,

    flexLayouts: { flexibleLayouts },
  } = page

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
      </Container>
    </Layout>
  )
}

export default Page

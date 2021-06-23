/** @jsx jsx */
import { Container, jsx } from 'theme-ui'
import { graphql } from 'gatsby'
import {
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react'
import ParsedContent from '../../utils/ParsedContent'

import sectionsStyles from '../../styles/acfBlocksStyles/sectionsStyles'

export const fragment = graphql`
  fragment accordionBlockFragment on WpPage_Flexlayouts_FlexibleLayouts_AccordionBlock {
    cssclass
    title
    content
    anchor
    marginTop
    marginBottom
    faq {
      answer
      question
    }
  }
`

export const AccordionBlock = ({
  faq,
  title,
  content,
  marginTop,
  marginBottom,
  cssclass,
  anchor,
  ...props
}) => {
  const margins = {
    mt: marginTop,
    mb: marginBottom,
  }

  return (
    <Box
      as="section"
      id={anchor}
      className={`${cssclass || ''} accordionBlock`}
      sx={{
        ...margins,
        ...sectionsStyles,
        '.container': {
          bg: ['transparent', 'transparent', 'transparent', 'cardBg'],
          pb: [20, 40, 80],
          pt: [10, 30, 40],
          px: [0, 20, 40],
          maxWidth: 1100,
          boxShadow: ['none', 'none', 'none', 'small'],
          borderRadius: 30,
        },
      }}
      {...props}
    >
      <Container
        className="container"
        bg={['transparent', 'transparent', 'cardBg']}
      >
        {title && (
          <h2
            dangerouslySetInnerHTML={{ __html: title }}
            className="text-center uppercase"
          />
        )}
        {content && (
          <Box className="intro">
            <ParsedContent content={content} />
          </Box>
        )}
        <Accordion defaultIndex={[0]} allowMultiple>
          {faq?.map((item, i) => {
            const { question, answer } = item

            return (
              <AccordionItem key={i}>
                <AccordionButton
                  border="none"
                  bg="transparent"
                  borderBottom="1px dotted"
                  borderColor="#999"
                  py={4}
                  className="mt-4 font-bold uppercase transition-all cursor-pointer rounded-t-md hover:text-secondary focus:text-secondary"
                  sx={{
                    color: 'text',
                  }}
                >
                  <Box flex="1" textAlign="left">
                    {question}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel
                  className="text-lg font-semibold text-white rounded-b-lg "
                  py={10}
                  px={6}
                  sx={{
                    a: {
                      color: 'inherit',
                      textDecoration: 'underline',
                    },
                    'a:hover': {
                      color: 'inherit',
                    },
                  }}
                  bgGradient="linear(to-r,primary, secondary)"
                  dangerouslySetInnerHTML={{ __html: answer }}
                ></AccordionPanel>
              </AccordionItem>
            )
          })}
        </Accordion>
      </Container>
    </Box>
  )
}

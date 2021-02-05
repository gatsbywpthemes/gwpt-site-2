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
  chakra,
  useColorModeValue,
} from '@chakra-ui/react'

import sectionsStyles from '../../styles/acfBlocksStyles/sectionsStyles'

export const fragment = graphql`
  fragment accordionBlockFragment on WpPage_Flexlayouts_FlexibleLayouts_AccordionBlock {
    cssclass
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
          py: [20, 40, 80],
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
                  className="font-bold uppercase"
                  sx={{ color: 'pink' }}
                >
                  <Box flex="1" textAlign="left">
                    {question}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel sx={{ color: 'text' }} py={5}>
                  {answer}
                </AccordionPanel>
              </AccordionItem>
            )
          })}
        </Accordion>
      </Container>
    </Box>
  )
}

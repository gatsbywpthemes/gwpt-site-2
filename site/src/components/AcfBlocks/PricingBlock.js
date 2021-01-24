/** @jsx jsx */

import { jsx, Container, Flex } from 'theme-ui'
import React from 'react'
import { graphql } from 'gatsby'
import {
  Stack,
  VStack,
  Box,
  Tooltip,
  List,
  ListItem,
  ListIcon,
  chakra,
} from '@chakra-ui/react'

import Button from './Button'
import ParsedContent from '../../utils/ParsedContent'
import sectionsStyles from '../../styles/acfBlocksStyles/sectionsStyles'

export const fragment = graphql`
  fragment pricingBlockFragment on WpPage_Flexlayouts_FlexibleLayouts_PricingBlock {
    cssclass
    anchor
    marginTop
    marginBottom
    pricingTables {
      title
      description
      price
      buyLink
      features {
        title
        tooltip
      }
    }
  }
`

export const PricingBlock = ({
  pricingTables,
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
      className={`${cssclass || ''} pricingBlock`}
      sx={{
        ...margins,
        ...sectionsStyles,
      }}
      {...props}
    >
      <Container className="container">
        <Stack
          spacing="100px"
          direction={['column', 'row']}
          justifyContent="center"
        >
          {pricingTables?.map((pricingTable, i) => {
            const {
              title,
              price,
              description,
              features,
              buyLink,
            } = pricingTable
            const packClass = title.includes('Core') ? 'core' : 'pro'
            const bgGradient = title.includes('Core')
              ? 'linear(to-r, primary, secondary)'
              : 'linear(to-r, yellow, pink)'
            return (
              <Box
                key={i}
                className={`${packClass} p-6 rounded-md text-center pb-16`}
                bgGradient={bgGradient}
                w={400}
              >
                <VStack
                  spacing="10px"
                  justifyContent="space-between"
                  height="100%"
                >
                  <Box
                    className="py-4 pb-10 pricingHeader"
                    w="100%"
                    sx={{ borderBottom: '1px dashed #ddd' }}
                  >
                    <Tooltip
                      hasArrow
                      label={description}
                      placement="top"
                      width={300}
                      p="20px"
                    >
                      <h3 className="text-center text-white underline uppercase">
                        {title}
                      </h3>
                    </Tooltip>
                    <Box className="text-3xl font-bold text-white">
                      {price}$<span className="text-lg font-light">/Year</span>
                    </Box>
                  </Box>
                  <List pt={6}>
                    {features?.map((feature) => {
                      const { title, tooltip } = feature

                      return (
                        <ListItem
                          className={`py-2 text-base font-semibold uppercase text-white ${
                            tooltip && 'underline'
                          }`}
                        >
                          <Tooltip width={300} p={4} hasArrow label={tooltip}>
                            {title}
                          </Tooltip>
                        </ListItem>
                      )
                    })}
                  </List>
                  <Box>
                    <chakra.a
                      href={buyLink}
                      target="_blank"
                      className="px-8 py-2 mt-10 text-base text-white uppercase rounded-full shadow-2xl"
                      bgGradient={bgGradient}
                    >
                      Buy Now
                    </chakra.a>
                  </Box>
                </VStack>
              </Box>
            )
          })}
        </Stack>
      </Container>
    </Box>
  )
}

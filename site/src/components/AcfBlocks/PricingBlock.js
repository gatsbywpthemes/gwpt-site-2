/** @jsx jsx */

import { jsx, Container } from 'theme-ui'
import React from 'react'
import { graphql } from 'gatsby'
import {
  Stack,
  VStack,
  Box,
  Tooltip,
  List,
  ListItem,
  chakra,
} from '@chakra-ui/react'

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
        <Stack
          spacing="100px"
          direction={['column', 'column', 'column', 'row']}
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
              ? 'linear(to-t, primary, secondary)'
              : 'linear(to-t, pink, yellow)'

            return (
              <Box
                key={i}
                className={`${packClass} p-6 rounded-lg text-center pb-16`}
                bgGradient={bgGradient}
                w={['100%', '100%', '100%', 400]}
              >
                <VStack
                  spacing="10px"
                  justifyContent="space-between"
                  height="100%"
                >
                  <Box
                    className="py-4 pb-10 pricingHeader"
                    // textShadow="2px 2px 8px #777"
                    w="100%"
                    sx={{ borderBottom: '1px dashed #ddd' }}
                  >
                    <Tooltip
                      hasArrow
                      label={description}
                      placement="top"
                      width={300}
                      p="20px"
                      bg="dark"
                    >
                      <h3 className="text-center text-white underline uppercase cursor-pointer">
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
                            tooltip && 'underline cursor-pointer'
                          }`}
                        >
                          <Tooltip
                            width={300}
                            p={4}
                            bg="dark"
                            hasArrow
                            label={tooltip}
                          >
                            <Box textShadow="3px 3px 15px #999">{title}</Box>
                          </Tooltip>
                        </ListItem>
                      )
                    })}
                  </List>
                  <Box>
                    <chakra.a
                      href={buyLink}
                      target="_blank"
                      className="inline-block py-3 text-base text-white uppercase rounded-full shadow-lg hover:shadow-2xl px-9 hover:text-white"
                      bgGradient={bgGradient}
                      _hover={{
                        transform: 'translateY(-3px) scale(1.02)',
                      }}
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

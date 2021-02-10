/** @jsx jsx */
import { jsx, Box, Container, Grid, Flex } from 'theme-ui'
import { graphql } from 'gatsby'
import ParsedContent from '../../utils/ParsedContent'

import columnsBlockStyles from '../../styles/acfBlocksStyles/columnsBlockStyles'
import sectionsStyles from '../../styles/acfBlocksStyles/sectionsStyles'
import { ContentButton as Button } from './Button'

export const fragment = graphql`
  fragment columnsBlockFragment on WpPage_Flexlayouts_FlexibleLayouts_ColumnsBlock {
    cssclass
    anchor
    marginTop
    marginBottom
    columnsNumber
    columnsGap
    title
    content
    columns {
      columnClass
      columnContent
      columnHorizontalPadding
      columnVerticalPadding
      textColor
      bgColor
      button {
        target
        title
        url
      }
      image {
        ...MediumImage
      }
    }
  }
`

export const ColumnsBlock = ({
  cssclass,
  anchor,
  marginTop,
  marginBottom,
  columnsNumber,
  columnsGap,
  title,
  content,
  columns,
  icon,
  image,
  ...props
}) => {
  const margins = {
    mt: marginTop,
    mb: marginBottom,
  }
  const number = (number) => {
    switch (number) {
      case 'threeLayout':
        return '1fr 2fr 1fr'
      case 'oneTwo':
        return '2fr 1fr'
      case 'twoOne':
        return '1fr 2fr'
      default:
        return Number(columnsNumber)
    }
  }

  return (
    <Box
      as="section"
      id={anchor}
      className={`${cssclass || ''} columnsBlock`}
      sx={{
        ...margins,
        ...sectionsStyles,
        ...columnsBlockStyles,
      }}
      {...props}
    >
      <Container className="container">
        {title && (
          <h2
            dangerouslySetInnerHTML={{ __html: title }}
            sx={{ textAlign: 'center' }}
          />
        )}
        {content && (
          <Box className="intro">
            <ParsedContent content={content} />
          </Box>
        )}
        {columns.length > 0 && (
          <Grid
            className="colsWrap"
            gap={columnsGap}
            columns={[1, 2, number(columnsNumber)]}
            sx={{ justifyItems: 'center', justifyContent: 'center' }}
          >
            {columns.map((col, i) => {
              const {
                columnVerticalPadding,
                columnHorizontalPadding,
                columnContent,
                columnClass,
                textColor,
                bgColor,
                button,
                icon,
              } = col

              return (
                <Box
                  className={`${columnClass || ''} columnItem`}
                  key={i}
                  sx={{
                    color: (image || bgColor) && textColor ? textColor : 'text',
                    bg: bgColor,
                    display: 'block',
                  }}
                >
                  {icon && (
                    <Flex className="icon">
                      <img src={icon.publicURL} alt={icon.altText} />
                    </Flex>
                  )}

                  <Box
                    sx={{
                      px: columnHorizontalPadding,
                      py: columnVerticalPadding,
                    }}
                  >
                    {columnContent && (
                      <Box
                        sx={{
                          px: columnHorizontalPadding,
                          py: columnVerticalPadding,
                          // display: 'flex',
                          // flexDirection: 'column',
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}
                      >
                        <div
                          className="columnContent"
                          dangerouslySetInnerHTML={{ __html: columnContent }}
                        />
                        {button && <Button button={button} />}
                      </Box>
                    )}
                  </Box>
                </Box>
              )
            })}
          </Grid>
        )}
      </Container>
    </Box>
  )
}

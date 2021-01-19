/** @jsx jsx */
import { jsx, Box, Container, Flex } from 'theme-ui'
import { graphql } from 'gatsby'
import { Image as GatsbyImg } from '../images/Image'
import Slider from 'react-slick'
import testimonialsBlockStyles from '../../styles/acfBlocksStyles/testimonialsBlockStyles'
import sectionsStyles from '../../styles/acfBlocksStyles/sectionsStyles'
import ParsedContent from '../../utils/ParsedContent'
import '../../styles/acfBlocksStyles/slick.css'
import '../../styles/acfBlocksStyles/slick-theme.css'

export const fragment = graphql`
  fragment testimonialsBlockFragment on WpPage_Flexlayouts_FlexibleLayouts_TestimonialsBlock {
    cssclass
    anchor
    marginTop
    marginBottom
    title
    content
    testimonials {
      author
      picture {
        ...AvatarImage
      }
      content
    }
  }
`

export const TestimonialsBlock = ({
  marginTop,
  marginBottom,
  cssclass,
  anchor,
  title,
  content,
  testimonials,
  ...props
}) => {
  const margins = {
    mt: marginTop,
    mb: marginBottom,
  }

  const settings = {
    infinite: true,
    autoplay: true,

    speed: 2000,
    slidesToShow: 2,
    slidesToScroll: 2,
    arrows: false,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }
  return (
    <Box
      as="section"
      className={`${cssclass || ''} testimonialsBlock`}
      id={anchor}
      {...props}
      sx={{
        ...margins,
        ...sectionsStyles,
        ...testimonialsBlockStyles,
      }}
    >
      <Container
        className="container"
        // sx={{ display: 'flex', justifyContent: 'center' }}
      >
        {title && <h2 dangerouslySetInnerHTML={{ __html: title }} />}
        {content && (
          <Box className="intro">
            <ParsedContent content={content} />
          </Box>
        )}
        {testimonials.length > 0 && (
          <Slider {...settings}>
            {testimonials.map((item, i) => {
              const { author, content, picture } = item
              return (
                <Box className="testimonial" key={i}>
                  <Flex sx={{ justifyContent: 'center' }}>
                    <GatsbyImg className="pic" img={picture} />
                  </Flex>
                  <Box className="content">
                    <Box className="text">{content}</Box>

                    <Box className="author">{author}</Box>
                  </Box>
                </Box>
              )
            })}
          </Slider>
        )}
      </Container>
    </Box>
  )
}

/** @jsx jsx */
import { jsx, Box, Container, Input, Flex } from 'theme-ui'
import { useState } from 'react'
import { graphql } from 'gatsby'
import ParsedContent from '../../utils/ParsedContent'
import subscribeBlockStyles from '../../styles/acfBlocksStyles/subscribeBlockStyles'
import addToMailchimp from 'gatsby-plugin-mailchimp'
import sectionsStyles from '../../styles/acfBlocksStyles/sectionsStyles'

export const fragment = graphql`
  fragment subscribeBlockFragment on WpPage_Flexlayouts_FlexibleLayouts_SubscribeBlock {
    title
    content
    cssclass
    anchor
    marginTop
    marginBottom
  }
`

export const SubscribeBlock = ({
  title,
  button,
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
  const [firstName, setFirstName] = useState('')
  const [email, setEmail] = useState('')
  const [msg, setMsg] = useState()
  const handleSubmit = (e) => {
    e.preventDefault()
    addToMailchimp(email, { FNAME: firstName }).then((data) => {
      console.log('data', data)
      return data.result === 'success'
        ? setMsg(data.msg)
        : setMsg('This email has already subscribed, try with another one')
    })
  }
  const handleChange = (e) => {
    setEmail(e.target.value)
  }

  return (
    <Box
      as="section"
      id={anchor}
      className={`${cssclass || ''} contentBlock`}
      sx={{
        ...margins,
        ...sectionsStyles,
        ...subscribeBlockStyles,
      }}
      {...props}
    >
      <Container className="container">
        {title && <h2 dangerouslySetInnerHTML={{ __html: title }} />}
        {content && (
          <Box className="content">
            <ParsedContent content={content} />
          </Box>
        )}
        <Flex className="formContainer">
          {msg ? (
            msg
          ) : (
            <form onSubmit={handleSubmit}>
              <div sx={['block', 'flex']}>
                <Flex>
                  <Input
                    placeholder="first name"
                    name="firstname"
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                    sx={{ mr: 10, color: 'nlInputColor' }}
                  />
                  <Input
                    placeholder="Email address"
                    name="email"
                    type="email"
                    value={email}
                    onChange={handleChange}
                    required
                    sx={{ mr: 10, color: 'nlInputColor' }}
                  />
                </Flex>

                <button type="submit">Subscribe</button>
              </div>
            </form>
          )}
        </Flex>
      </Container>
    </Box>
  )
}

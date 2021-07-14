/** @jsx jsx */
import { jsx, Box, Input } from 'theme-ui'
import { useState } from 'react'
import addToMailchimp from 'gatsby-plugin-mailchimp'
import subscribeBlockStyles from '../../styles/acfBlocksStyles/subscribeBlockStyles'

export const Newsletter = (props) => {
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
      sx={{
        // ...widgetStyles.newsletter,
        ...subscribeBlockStyles,
      }}
      {...props}
    >
      {msg ? (
        msg
      ) : (
        <form onSubmit={handleSubmit} sx={{ width: '100% !important' }}>
          <div>
            <Input
              placeholder="firstName"
              name="firstname"
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
              sx={{
                mr: 10,
                color: 'nlInputColor',
                bg: '#153651 !important',
                width: '100% !important',
                mb: 20,
              }}
            />
            <Input
              placeholder="Email address"
              name="email"
              type="email"
              value={email}
              onChange={handleChange}
              required
              sx={{ mr: 10, color: 'nlInputColor', bg: '#153651 !important' }}
            />

            <button type="submit">Subscribe</button>
          </div>
        </form>
      )}
    </Box>
  )
}

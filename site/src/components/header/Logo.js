/** @jsx jsx */
import { jsx } from 'theme-ui'
// eslint-disable-next-line no-unused-vars
import { Link, withPrefix } from 'gatsby'
import { useThemeOptions } from '@gatsbywpthemes/gatsby-theme-blog-data/src/hooks'

export const Logo = () => {
  const { logo } = useThemeOptions()
  return (
    <Link to="/" rel="home">
      <img
        width="72"
        src={withPrefix(logo)}
        alt="logo"
        sx={{
          mb: 0,
          ml: [0, 40, 0],
          mt: [0, -10, 0],
          maxWidth: ['50px', '70%', '100%'],
        }}
      />
    </Link>
  )
}

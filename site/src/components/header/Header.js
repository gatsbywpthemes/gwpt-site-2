/** @jsx jsx */
import { jsx, Container } from 'theme-ui'
import { useStaticQuery, graphql } from 'gatsby'
import { SiteBranding, SlideSidebar } from './index'
import { useThemeOptions } from '@gatsbywpthemes/gatsby-theme-blog-data/src/hooks'
import { ColorSwitch } from '../index'
import { Menu } from './Menu'
import blueWaveTop from '../../assets/images/blue-wave-top.svg'

export const Header = () => {
  const { search } = useThemeOptions()
  const styles = search
    ? { justifyContent: [`flex-start`, `flex-start`, `center`] }
    : { justifyContent: `flex-start` }

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      wp {
        generalSettings {
          title
          url
        }
      }
    }
  `)

  const { title } = data.wp.generalSettings

  return (
    <header
      className="header"
      sx={{
        variant: `header`,
        bg: 'transparent',
        backgroundImage: `url(${blueWaveTop})`,
        backgroundSize: 'cover',

        height: ['auto', 'auto', '17vw'],
      }}
    >
      <Container className="container">
        {/* {search && (
          <SearchForm
            sx={{
              width: [`100%`, `100%`, `33%`],
              display: `flex`,
              justifyContent: [`center`, `center`, `flex-start`],
            }}
          />
        )} */}

        <SiteBranding
          title={title}
          sx={{
            width: [`50%`, `100%`, `auto`],
            display: `flex`,

            ...styles,
          }}
        />

        <SlideSidebar
          sx={{
            // width: [`50%`, `50%`, `33%`],
            display: [`flex`, `none`, `none`],
            justifyContent: `flex-end`,
            position: 'relative',
            top: -70,
            right: -10,
          }}
        />
        <Menu
          menuName="main"
          orientation="horizontal"
          sx={{ display: ['none', 'block', 'block'], mr: [0, 20, 0] }}
        />
      </Container>

      <ColorSwitch
        sx={{
          position: `absolute`,
          right: [`6%`, `6%`, `2%`],
          top: [60, 15, 50],
          '.headroom--pinned &': {
            top: [10, 10, 15],
          },
        }}
      />
    </header>
  )
}

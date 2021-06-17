/** @jsx jsx */
import { jsx, NavLink } from 'theme-ui'
import { Link } from 'gatsby'
import { createLocalLink } from '../../utils'
import { Collapse } from '../ui-components'
import {
  useMenusQuery,
  useThemeOptions,
} from '@gatsbywpthemes/gatsby-theme-blog-data/src/hooks'
import { AnchorLink } from 'gatsby-plugin-anchor-links'
import URIParser from 'urijs'
import slashes from 'remove-trailing-slash'

const flatListToHierarchical = (
  data = [],
  { idKey = 'key', parentKey = 'parentId', childrenKey = 'children' } = {}
) => {
  const tree = []
  const childrenOf = {}
  data.forEach((item) => {
    const newItem = { ...item }
    const { [idKey]: id, [parentKey]: parentId = 0 } = newItem
    childrenOf[id] = childrenOf[id] || []
    newItem[childrenKey] = childrenOf[id]
    parentId
      ? (childrenOf[parentId] = childrenOf[parentId] || []).push(newItem)
      : tree.push(newItem)
  })
  return tree
}

const renderLink = (menuItem, wordPressUrl, closeMenu) => {
  let url = menuItem.url
  const parsedUrl = new URIParser(url)
  if (parsedUrl.is('absolute')) {
    const targetRelAttrs =
      menuItem.target === '_blank'
        ? { target: '_blank', rel: 'noopener noreferrer' }
        : {}
    return (
      <a href={menuItem.url} {...targetRelAttrs}>
        {menuItem.label}
      </a>
    )
  } else {
    return menuItem.url !== '#' ? (
      menuItem.url === wordPressUrl ? (
        <Link to="/" dangerouslySetInnerHTML={{ __html: menuItem.label }} />
      ) : menuItem.url.includes('#') ? (
        <AnchorLink to={menuItem.url} onAnchorLinkClick={closeMenu}>
          {menuItem.label}
        </AnchorLink>
      ) : (
        <Link
          to={createLocalLink(menuItem.url, slashes(wordPressUrl))}
          dangerouslySetInnerHTML={{ __html: menuItem.label }}
        />
      )
    ) : (
      menuItem.label
    )
  }
}

const renderMenuItem = (menuItem, wordPressUrl, orientation, closeMenu) => {
  if (menuItem.children.length) {
    return renderSubMenu(menuItem, wordPressUrl, orientation, closeMenu)
  } else {
    return (
      <NavLink
        as="li"
        className={`menu-item ${menuItem.cssClasses}`}
        key={menuItem.id}
      >
        {renderLink(menuItem, wordPressUrl, closeMenu)}
      </NavLink>
    )
  }
}
const WithCollapse = ({ orientation, children, menuItem }) =>
  orientation === 'vertical' ? (
    <Collapse menuItem={menuItem}>{children}</Collapse>
  ) : (
    children
  )

const renderSubMenu = (menuItem, wordPressUrl, orientation, closeMenu) => {
  return (
    <li
      className="has-subMenu menu-item"
      key={menuItem.id}
      sx={{ position: `relative` }}
    >
      {renderLink(menuItem, wordPressUrl, closeMenu)}
      <WithCollapse orientation={orientation} menuItem={menuItem}>
        <ul className="menuItemGroup sub-menu">
          {menuItem.children.map((item) =>
            renderMenuItem(item, wordPressUrl, closeMenu)
          )}
        </ul>
      </WithCollapse>
    </li>
  )
}

export const Menu = ({ menuName, orientation, closeMenu, ...props }) => {
  const menuEdges = useMenusQuery()
  const menuEdge = menuEdges.find((n) => menuName === n.name)
  const menuItems = menuEdge ? menuEdge.menuItems : null

  const { wordPressUrl } = useThemeOptions()

  if (menuItems) {
    const menuNodes = flatListToHierarchical(menuItems.nodes, { idKey: 'id' })
    return (
      <nav
        className="menu"
        aria-label="main"
        sx={getStyles(orientation)}
        {...props}
      >
        {/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-to-interactive-role */}
        <ul role="menu" className="menuItemGroup">
          {menuNodes.map((menuItem) => {
            if (menuItem.children.length) {
              return renderSubMenu(
                menuItem,
                wordPressUrl,
                orientation,
                closeMenu
              )
            } else {
              return renderMenuItem(
                menuItem,
                wordPressUrl,
                orientation,
                closeMenu
              )
            }
          })}
        </ul>
      </nav>
    )
  } else {
    return null
  }
}

const verticalStyles = {
  a: {
    textDecoration: 'none',
  },
  mb: 'xxl',
  li: {
    mb: 0,
  },
  ul: {
    m: 0,
    p: 0,

    listStyle: 'none',
    '.menu-item': {
      display: 'block',
      py: 'xs',
      borderBottom: '1px solid rgba(255,255,255,.15)',
      color: 'light',
      a: {
        color: 'light',
      },
      '&:last-of-type': {
        border: 'none',
      },
    },
    'ul a': {
      pl: 'm',
    },
    'ul ul a': {
      pl: 'xl',
    },
  },
  'nav > ul': { mt: 'xl' },
  '[aria-current]': {
    fontStyle: 'italic',
    fontWeight: 'body',
  },
  button: {
    top: -4,
  },
}

const horizontalStyles = {
  ul: {
    m: 0,
  },
  '.menu-item': {
    pr: 20,
    a: {
      color: 'light',
      textTransform: 'uppercase',
      fontSize: 'xs',
      '&:hover': {
        color: 'yellow',
      },
    },
  },
}

const getStyles = (orientation) =>
  orientation === 'vertical' ? verticalStyles : horizontalStyles

import React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import { useSiteMetadata } from '../hooks/use-site-metadata'
import memoizeOne from 'memoize-one'

const Header = styled.header`
  background: ${props => props.theme.colors.primary[0]};
  width: 100%;
  padding: 1.5em 0;
`
const Nav = styled.nav`
  width: 100%;
  max-width: ${props => props.theme.sizes.maxWidth};
  margin: 0 auto;
  padding: 0 1.5em;

  ul {
    display: flex;
    justify-content: space-between;
  }

  li {
    display: inline-block;
    margin-left: 1em;
    white-space: nowrap;
    &:first-of-type {
      position: relative;
      margin: 0;
      flex-basis: 100%;
    }
  }

  a {
    text-decoration: none;
    color: #cff2ef;
    font-weight: 600;
    transition: all 0.2s;
    &:hover {
      color: white;
      text-decoration: underline;
    }
  }
`

const getMenuLinks = memoizeOne((links, pages) => {
  return [...links, ...pages]
})

const activeLinkStyle = {
  color: 'white',
}

const defaultPages = []

const Menu = ({ pages = defaultPages }) => {
  const { menuLinks: links } = useSiteMetadata()
  const menuLinks = getMenuLinks(links, pages)
  return (
    <Header>
      <Nav>
        <ul>
          {menuLinks.map(link => (
            <li key={link.id || link.name}>
              <Link to={link.slug} activeStyle={activeLinkStyle}>
                {link.title || link.name}
              </Link>
            </li>
          ))}
        </ul>
      </Nav>
    </Header>
  )
}

export default Menu

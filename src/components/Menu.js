import React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import memoizeOne from 'memoize-one'
import Logo from './Logo'
import { useSiteMetadata } from '../hooks/use-site-metadata'

const Header = styled.header`
  width: 100%;
  padding: 0.5em 0;
`
const Nav = styled.nav`
  width: 100%;
  max-width: ${props => props.theme.sizes.maxWidth};
  margin: 0 auto;
  padding: 0 1.5em;

  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
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
    color: ${({ theme }) => theme.colors.primary[0]};
    font-weight: 600;
    transition: all 0.2s;
    &:hover {
      color: ${({ theme }) => theme.colors.primary[5]};
      text-decoration: underline;
    }
  }
`

const getMenuLinks = memoizeOne((links, pages) => {
  return [...links, ...pages]
})

const activeLinkStyle = {
  textDecoration: 'underline',
}

const defaultPages = []

const Menu = ({ pages = defaultPages }) => {
  const { menuLinks: links, logo } = useSiteMetadata()
  const menuLinks = getMenuLinks(links, pages)
  return (
    <Header>
      <Nav>
        <ul>
          {menuLinks.map((link, index) => (
            <li key={link.id || link.name}>
              <Link to={link.slug.startsWith('/') ? link.slug : `/${link.slug}`} activeStyle={activeLinkStyle}>
                {index === 0 ? <Logo {...logo} /> : link.title || link.name}
              </Link>
            </li>
          ))}
        </ul>
      </Nav>
    </Header>
  )
}

export default Menu

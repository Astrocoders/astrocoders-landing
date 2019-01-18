import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import ClickOutside from 'react-click-outside'
import { compose, withStateHandlers } from 'recompose'

import navLogo from '../img/navLogo.png'
import Link from './Link'

import theme from '../utils/theme'

const NavbarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
`

const Logo = styled.img`
  margin: 0;
  max-width: 250px;
`

const NavbarLinkWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 960px) {
    display: none;
  }
`
const NavbarLink = styled(Link)`
  font-size: ${props => props.fontSize || '1rem'};
  text-decoration: none;
  margin: 10px;
  color: ${props => props.color || '#fff'};
  transition: 0.25s;

  &:hover {
    color: ${theme.colors.primary};
    @media (max-width: 960px) {
      color: #fff;
    }
  }
`

const MenuDialog = styled.div`
  align-items: center;
  background-color: #000;
  border-bottom: 2px solid ${theme.colors.primary};
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  padding-bottom: 20px;
  padding-top: 20px;
  position: fixed;
  right: 0;
  top: 68px;
  width: 100%;
  z-index: 2;
`

const MobileMenu = styled.div`
  display: none;
  @media (max-width: 960px) {
    display: block;
  }
`

const MenuTrigger = styled.button`
  -webkit-appearance: none;
  background: none;
  border: none;
  cursor: pointer;
`

const MenuIcon = () => (
  <svg fill={theme.colors.primary} width="36" height="36" viewBox="0 0 24 24">
    <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
  </svg>
)

const MenuIconClose = () => (
  <svg fill={theme.colors.primary} width="36" height="36" viewBox="0 0 24 24">
    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
    <path d="M0 0h24v24H0z" fill="none" />
  </svg>
)

const ClickOutsideStyled = styled(ClickOutside)`
  position: ${props => (props.isAfterHero ? 'sticky' : 'initial')};
  display: ${props => (props.isHome && !props.isAfterHero ? 'none' : 'block')};
  top: 0;
  background-color: #000;
  z-index: 99999;
`

const Navbar = ({ isHome, isAfterHero = false, setMenuOpened, isMenuOpened }) => (
  <ClickOutsideStyled isHome={isHome} isAfterHero={isAfterHero} onClickOutside={() => setMenuOpened(false)}>
    <NavbarContainer>
      <Link to="/">
        <Logo src={navLogo} />
      </Link>

      <NavbarLinkWrapper>
        <NavbarLink to="/how-we-work">HOW WE WORK</NavbarLink>
        <NavbarLink to="/open-source">OPEN SOURCE</NavbarLink>
        <NavbarLink to="/cases">CASES</NavbarLink>
        <NavbarLink to="/join-us">JOIN US</NavbarLink>
        <NavbarLink to="/#hireUs">CONTACT</NavbarLink>
      </NavbarLinkWrapper>
      <MobileMenu>
        <NavbarContainer>
          <MenuTrigger onClick={evt => setMenuOpened()}>{isMenuOpened ? <MenuIconClose /> : <MenuIcon />}</MenuTrigger>
        </NavbarContainer>
        {isMenuOpened && (
          <MenuDialog>
            <NavbarLink to="/how-we-work">HOW WE WORK</NavbarLink>
            <NavbarLink to="/open-source">OPEN SOURCE</NavbarLink>
            <NavbarLink to="/cases">CASES</NavbarLink>
            <NavbarLink to="/join-us">JOIN US</NavbarLink>
            <NavbarLink to="/#hireUs">CONTACT</NavbarLink>
          </MenuDialog>
        )}
      </MobileMenu>
    </NavbarContainer>
  </ClickOutsideStyled>
)

Navbar.propTypes = {
  isColorChanged: PropTypes.bool,
  isMenuOpened: PropTypes.bool,
  setMenuOpened: PropTypes.func.isRequired,
}

export default compose(
  withStateHandlers(
    { isMenuOpened: false },
    {
      setMenuOpened: ({ isMenuOpened }) => (newState = !isMenuOpened) => ({
        isMenuOpened: newState,
      }),
    },
  ),
)(Navbar)

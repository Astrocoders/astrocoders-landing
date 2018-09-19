import React from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'
import styled from 'styled-components'
import { compose, withStateHandlers } from 'recompose'
import ClickOutside from 'react-click-outside'
import Link from './Link'

import navLogo from '../img/navLogo.svg'

import withNavbar from '../utils/withNavbar'

const HeaderWrapper = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  background-color: #000;
  display: ${props => props.show};
  transition: 0.35s;
  padding: 25px 7.5vw;
  z-index: 2;
`

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Logo = styled.img`
  margin: 0;
`

const HeaderLinkWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 960px) {
    display: none;
  }
`
const HeaderLink = styled(Link)`
  font-size: ${props => props.fontSize || '1rem'};
  text-decoration: none;
  margin: 10px;
  color: #fff;
  transition: 0.25s;
`

const MenuDialog = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: fixed;
  top: 100px;
  right: 0;
  padding-bottom: 20px;
  padding-top: 20px;
  align-items: center;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.1);
  z-index: 2;
  background-color: #fff;
`

const MobileMenu = styled.div`
  display: none;
  @media (max-width: 960px) {
    display: block;
  }
`

const MenuTrigger = styled.button`
  padding-top: 13px;
`

const MenuIcon = () => (
  <svg fill="#50c1ce" width="36" height="36" viewBox="0 0 24 24">
    <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
  </svg>
)

const MenuIconClose = () => (
  <svg fill="#50c1ce" width="36" height="36" viewBox="0 0 24 24">
    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
    <path d="M0 0h24v24H0z" fill="none" />
  </svg>
)

const Navbar = ({ isHome, isShowed, setMenuOpened, isMenuOpened }) => (
  <ClickOutside onClickOutside={() => setMenuOpened(false)}>
    <HeaderWrapper show={isHome ? (isShowed ? 'block' : 'none') : '#000'}>
      <HeaderContainer>
        <Link to="/">
          <Logo src={navLogo} />
        </Link>

        <HeaderLinkWrapper>
          <HeaderLink to="#services-article">HOW WE WORK</HeaderLink>
          <HeaderLink to="#team-wrapper">OPEN SOURCE</HeaderLink>
          <HeaderLink to="#testimonials-wrapper">JOIN US</HeaderLink>
          <HeaderLink to="/cases">CASES</HeaderLink>
          <HeaderLink to="#contact-wrapper">CONTACT</HeaderLink>
        </HeaderLinkWrapper>
        <MobileMenu>
          <HeaderContainer>
            <MenuTrigger onClick={evt => setMenuOpened()}>
              {isMenuOpened ? <MenuIconClose /> : <MenuIcon />}
            </MenuTrigger>
          </HeaderContainer>
          {isMenuOpened && (
            <MenuDialog>
              <HeaderLink color="#14646d" fontSize="1.5rem" to="/#projects" onClick={evt => setMenuOpened()}>
                <FormattedMessage id="about" />
              </HeaderLink>
              <HeaderLink color="#14646d" fontSize="1.5rem" to="/about" onClick={evt => setMenuOpened()}>
                <FormattedMessage id="features" />
              </HeaderLink>
              <HeaderLink color="#14646d" fontSize="1.5rem" to="/#contact" onClick={evt => setMenuOpened()}>
                <FormattedMessage id="contact" />
              </HeaderLink>
            </MenuDialog>
          )}
        </MobileMenu>
      </HeaderContainer>
    </HeaderWrapper>
  </ClickOutside>
)

Navbar.propTypes = {
  isColorChanged: PropTypes.bool,
  isMenuOpened: PropTypes.bool,
  setMenuOpened: PropTypes.func.isRequired,
}

export default compose(
  withNavbar,
  withStateHandlers(
    { isMenuOpened: false },
    {
      setMenuOpened: ({ isMenuOpened }) => (newState = !isMenuOpened) => ({
        isMenuOpened: newState,
      }),
    },
  ),
)(Navbar)

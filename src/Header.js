import React from 'react'
import { componentDidMount } from 'react-lifecycle-hoc'
import styled from 'styled-components'

import logo from './img/navLogo.svg'

const NavbarWrapper = styled.nav`
  background: #000;
`

function Header(){
  return (
    <header>
      <NavbarWrapper>
        <div className="logo">
          <a href="#hero" className="scroll">
            <img src={logo}/>
          </a>
        </div>
        <div className="links">
          <a href="#services-article" className="scroll">HOW WE WORK</a>
          <a href="#team-wrapper" className="scroll">OPEN SOURCE</a>
          <a href="#testimonials-wrapper" className="scroll">JOIN US</a>
          <a href="#projects-wrapper" className="scroll">CASES</a>
          <a href="#contact-wrapper" className="scroll">CONTACT</a>
        </div>
      </NavbarWrapper>
    </header>
  )
}

export default componentDidMount(
  () => {
    window.addEventListener('scroll', () => {
      const servicesTop = document.getElementById('ourStack').offsetTop - 64;
      if (window.scrollY > servicesTop) {
        document.getElementsByTagName('nav')[0].className = "active";
      } else {
        document.getElementsByTagName('nav')[0].className = "";
      }
    })
  }
)(Header)

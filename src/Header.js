import React from 'react'
import { componentDidMount } from 'react-lifecycle-hoc'

function Header(){
  return (
    <header>
      <nav>
        <div className="logo">
          <a href="#hero" className="scroll">
            <p>Astrocoders</p>
          </a>
        </div>
        <div className="links">
          <a href="#services-article" className="scroll">Services</a>
          <a href="#team-wrapper" className="scroll">Team</a>
          <a href="#testimonials-wrapper" className="scroll">Testimonials</a>
          <a href="#projects-wrapper" className="scroll">Projects</a>
          <a href="#contact-wrapper" className="scroll">Contact</a>
        </div>
      </nav>
    </header>
  )
}

export default componentDidMount(
  () => {
    window.addEventListener('scroll', () => {
      const servicesTop = document.getElementById('services-article').offsetTop - 64;
      if (window.scrollY > servicesTop) {
        document.getElementsByTagName('nav')[0].className = "active";
      } else {
        document.getElementsByTagName('nav')[0].className = "";
      }
    })
  }
)(Header)

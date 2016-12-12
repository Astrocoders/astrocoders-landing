import React from 'react'
import 'particles.js'
import { componentDidMount } from 'react-lifecycle-hoc'

function Hero(props){
  return (
    <div id="hero-wrapper">
      <article id="hero" className="hero">
        <div className="content">
          <img src="/images/hero/logo.png" alt="Astrocoders Logo"/>
          <h1>Astrocoders Goes Beyond</h1>
          <h4>Outerspace innovation in web and mobile application development</h4>
        </div>
      </article>
      <div id="particles"></div>
    </div>
  )
}

export default componentDidMount(
  () => {
    /* eslint-disable no-undef */
    particlesJS('particles', require('./particles-config.json'));
    /* eslint-enable no-undef */
  }
)(Hero)

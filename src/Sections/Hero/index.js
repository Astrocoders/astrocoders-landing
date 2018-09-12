import React from 'react'
import styled from 'styled-components'

import Logo from '../../components/Logo'

import galaxy from '../../img/galaxy.jpg'

const HeroWrapper = styled.section`
  align-items: center;
  background-color: #000;
  background-image: url(${galaxy});
  background-repeat: no-repeat;
  background-position: right center;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  padding-left: 7.5vw;
  padding-right: 7.5vw;
  width: 100%;
`

const Description = styled.h3`
  align-self: flex-start;
  color: #FFFFFF;
  font-family: Ubuntu;
  font-style: normal;
  font-weight: normal;
  font-size: 2.5em;
  line-height: normal;
  margin: 30px 0;
  text-transform: uppercase;
  text-align: center;

  @media (min-width: 960px) {
    width: 45%;
    text-align: left;
  }

  em {
    color: #835FE2;
    font-style: normal;
  }
`

const Hero = () => (
    <HeroWrapper>
      <Logo />
      <Description>Outerspace <em>innovation</em> in <em>web</em> and <em>mobile</em> applications</Description>
    </HeroWrapper>
  )

export default Hero

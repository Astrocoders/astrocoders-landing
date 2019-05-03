import React from 'react'
import styled from 'styled-components'
import { FormattedMessage } from 'gatsby-plugin-intl'

import Logo from './Logo'

import galaxy from '../img/galaxy.jpg'

const HeroWrapper = styled.section`
  align-items: center;
  background-color: #000;
  background-image: url(${galaxy});
  background-repeat: no-repeat;
  background-position: right center;
  background-origin: content-box;
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
  color: #ffffff;
  font-family: Ubuntu;
  font-style: normal;
  font-weight: normal;
  font-size: 1.5em;
  line-height: normal;
  margin: 30px 0;
  text-transform: uppercase;
  text-align: center;

  @media (min-width: 960px) {
    font-size: 2.5em;
    width: 45%;
    text-align: left;
  }

  em {
    color: #835fe2;
    font-style: normal;
  }
`

const Hero = () => (
  <HeroWrapper>
    <Logo />
    <Description>
      <FormattedMessage id="heroDescription" />
    </Description>
  </HeroWrapper>
)

export default Hero

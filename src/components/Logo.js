import React from 'react'
import styled, { keyframes } from 'styled-components'
import HGroup from './HGroup'
import VGroup from './VGroup'
import logoImg from '../img/logo.png'

const LogoWrapper = styled(HGroup)`
  align-items: center;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`

const TitleWrapper = styled(VGroup)`
  @media (max-width: 960px) {
    align-items: center;
  }
`
const spin = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`

const Image = styled.img`
  width: 200px;
  height: auto;
  margin-bottom: 30px;
  // animation: ${spin} 10s infinite linear;

  @media (min-width: 960px) {
    margin-right: 30px;
  }
`

const Title = styled.h1`
  color: #FFFFFF;
  font-family: Open Sans;
  font-style: normal;
  font-size: 3.2em;
  font-weight: 600;
  letter-spacing: 0.1em;
  line-height: normal;
  margin: 0;
  text-transform: uppercase;
`

const Subtitle = styled.h3`
  color: #FFFFFF;
  font-family: Roboto;
  font-style: normal;
  font-weight: 300;
  font-size: 1.1em;
  letter-spacing: 0.5em;
  line-height: normal;
  margin: 0;
  text-transform: normal;
`

const Logo = () => (
  <LogoWrapper>
    <Image src={logoImg} alt="Astrocoders Logo"/>
    <TitleWrapper>
      <Title>Astrocoders</Title>
      <Subtitle>Go Beyond</Subtitle>
    </TitleWrapper>
  </LogoWrapper>
)

export default Logo

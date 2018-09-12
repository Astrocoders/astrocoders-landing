import React from 'react'
import styled from 'styled-components'
import HGroup from '../components/HGroup'
import Wrapper from '../components/Wrapper'

import Github from 'react-icons/lib/io/social-github'
import Instagram from 'react-icons/lib/io/social-instagram-outline'
import Twitter from 'react-icons/lib/io/social-twitter'
import VGroup from '../components/VGroup'

import logo from '../img/logo.png'

const FooterWrapper = styled.footer`
  justify-content: center;
  background-color: #000;
  color: #fff;
  display: flex;
  flex-direction: column;
`

const MapWrapper = styled.div`
  clear: both;
  height: 400px;
  width: 100%;
`

const SocialLinks = styled(HGroup)`
  color: #fff;
  font-size: 24px;
  justify-content: space-between;
  width: 200px;

  a {
    color: inherit;

    &:hover {
      color: #835FE2;
    }
  }

  @media (max-width: 960px) {
    width: 100%;
  }
`

const Copyrights = styled(VGroup)`
  align-items: center;
  justify-content: center;
  width: calc(80% - 200px);

  img {
    margin-top: 20px;
    width: 24px;
  }

  @media (max-width: 960px) {
    margin-top: 30px;
    width: 100%;
  }
`

const Footer = () => (
    <FooterWrapper>
      <MapWrapper id="map"></MapWrapper>
      <Wrapper>
        <HGroup paddingTop="30px" paddingBottom="30px" wrap="wrap">
          <SocialLinks>
            <a href="https://github.com/Astrocoders" target="_blank">
              <Github/>
            </a>
            <a href="https://instagram.com/astrocoders" target="_blank">
              <Instagram/>
            </a>
            <a href="https://instagram.com/astrocoders" target="_blank">
              <Twitter/>
            </a>
          </SocialLinks>
          <Copyrights>
            Copyright 2018 © Astrocoders Desenvolvimento LTDA
            <img src={logo}/>
          </Copyrights>
        </HGroup>
      </Wrapper>
    </FooterWrapper>
  )

export default Footer
import React from 'react'
import styled from 'styled-components'
import { IoLogoGithub as Github } from 'react-icons/io'
import { IoLogoInstagram as Instagram } from 'react-icons/io'
import { IoLogoTwitter as Twitter } from 'react-icons/io'
import { FaMedium as Medium } from 'react-icons/fa'

import HGroup from './HGroup'
import Wrapper from './Wrapper'
import VGroup from './VGroup'
import AstroMap from './AstroMap'

const FooterWrapper = styled.footer`
  justify-content: center;
  background-color: #000;
  color: #fff;
  display: flex;
  flex-direction: column;
`

const SocialLinks = styled(HGroup)`
  color: #fff;
  font-size: 24px;
  justify-content: space-between;
  width: 200px;

  a {
    color: inherit;

    &:hover {
      color: #835fe2;
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
    text-align: center;
    width: 100%;
  }
`

const Footer = () => (
  <FooterWrapper>
    <div>
      <AstroMap />
    </div>
    <Wrapper>
      <HGroup paddingTop="30px" paddingBottom="30px" wrap="wrap">
        <SocialLinks>
          <a href="https://github.com/Astrocoders" target="_blank" rel="noopener noreferrer">
            <Github />
          </a>
          <a href="https://instagram.com/astrocoders" target="_blank" rel="noopener noreferrer">
            <Instagram />
          </a>
          <a href="https://twitter.com/_astrocoders" target="_blank" rel="noopener noreferrer">
            <Twitter />
          </a>
          <a href="https://medium.com/astrocoders" target="_blank" rel="noopener noreferrer">
            <Medium />
          </a>
        </SocialLinks>
        <Copyrights>Copyright 2018 © Astrocoders Desenvolvimento LTDA</Copyrights>
      </HGroup>
    </Wrapper>
  </FooterWrapper>
)

export default Footer

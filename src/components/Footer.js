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
  width: calc(80% - 200px);
  margin-left: 30px;

  @media (max-width: 960px) {
    margin-top: 30px;
    text-align: center;
    width: 100%;
  }
`

const CopyrightIcons = styled.span`
  align-items: center;
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.7rem;
  justify-content: center;
  margin-top: 10px;

  a {
    color: inherit;
    text-decoration: none;
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
        <Copyrights>
          Copyright {new Date().getFullYear()} © Astrocoders Desenvolvimento LTDA. CNPJ 24.896.711/0001-54. Avenida
          Afonso Vergueiro, 2250, Sala 2, Sorocaba, São Paulo.
          <CopyrightIcons>
            Icons made by{' '}
            <a href="https://www.flaticon.com/authors/eucalyp" title="Eucalyp">
              Eucalyp
            </a>{' '}
            from{' '}
            <a href="https://www.flaticon.com/" title="Flaticon">
              www.flaticon.com
            </a>{' '}
            is licensed by{' '}
            <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">
              CC 3.0 BY
            </a>
          </CopyrightIcons>
        </Copyrights>
      </HGroup>
    </Wrapper>
  </FooterWrapper>
)

export default Footer

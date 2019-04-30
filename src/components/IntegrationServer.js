import React from 'react'
import styled from 'styled-components'

import Lightbox from './Lightbox'
import Title from './Title'
import Wrapper from './Wrapper'
import Text from './Text'

import integrationServer from '../img/integrationServer_desktop.png'
import mobileIntegrationServer from '../img/integrationServer_mobile.png'

const IntegrationServerWrapper = styled.section`
  align-items: center;
  background-color: #000;
  display: flex;
  padding: 50px 0;
`

const GameTableWrapper = styled.div`
  max-width: 50vw;
  margin-bottom: 0;

  @media (max-width: 960px) {
    display: none;
  }
`

const MobileGameTableWrapper = styled.div`
  display: none;

  @media (max-width: 960px) {
    display: block;
    align-items: center;
    margin-top: 50px;
    margin-bottom: 30px;
  }
`

const IntegrationServer = () => (
  <IntegrationServerWrapper data-testid="IntegrationServerSection">
    <Wrapper alignItems="center">
      <Title align="center" transform="uppercase" withStripe={true}>
        Integration Servers
      </Title>
      <GameTableWrapper>
        <Lightbox cover={integrationServer} images={[{ src: integrationServer }]} />
      </GameTableWrapper>
      <MobileGameTableWrapper>
        <Lightbox cover={mobileIntegrationServer} images={[{ src: mobileIntegrationServer }]} />
      </MobileGameTableWrapper>
      <Text>
        Astrocoders builds <em>mobile and web apps</em>, <em>systems</em> and <em>platforms</em> in a different way.{' '}
        <em>Simple</em>, <em>quick</em>, PCI & GDPR compliance and <em>made to last</em>. No unnecessary lines, no bends
        or obstacles along the way.
      </Text>
    </Wrapper>
  </IntegrationServerWrapper>
)

export default IntegrationServer

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
  display: flex;
  padding: 50px 0;
`

const GameTableWrapper = styled.div`
  max-width: 50vw;
  margin-bottom: 45px;

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
      <Title align="center" transform="uppercase" withStripe marginBottom="70px">
        Integration Servers
      </Title>
      <GameTableWrapper>
        <Lightbox cover={integrationServer} images={[{ src: integrationServer }]} />
      </GameTableWrapper>
      <MobileGameTableWrapper>
        <Lightbox cover={mobileIntegrationServer} images={[{ src: mobileIntegrationServer }]} />
      </MobileGameTableWrapper>
      <Text align="center">
        The <em>integration server</em> enable us to connect with <em>any</em> provider and APIs to <em>process</em> and{' '}
        <em>collocate</em> just the most <em>important data</em> into the apps we build or your own apps. We are able to
        deploy it in your infrastructure or in our cloud based high-available servers.
      </Text>
    </Wrapper>
  </IntegrationServerWrapper>
)

export default IntegrationServer

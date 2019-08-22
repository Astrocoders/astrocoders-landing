import React from 'react'
import styled from 'styled-components'
import { FormattedMessage, FormattedHTMLMessage } from 'gatsby-plugin-intl'

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
      <Title size="1.6rem" align="center" transform="uppercase" withStripe marginBottom="70px">
        Integration Servers
      </Title>
      <GameTableWrapper>
        <Lightbox cover={integrationServer} images={[{ src: integrationServer }]} />
      </GameTableWrapper>
      <MobileGameTableWrapper>
        <Lightbox cover={mobileIntegrationServer} images={[{ src: mobileIntegrationServer }]} />
      </MobileGameTableWrapper>
      <Text align="center">
        <FormattedHTMLMessage id="integrationServersText" />
      </Text>
    </Wrapper>
  </IntegrationServerWrapper>
)

export default IntegrationServer

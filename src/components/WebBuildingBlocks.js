import React from 'react'
import styled from 'styled-components'

import Wrapper from './Wrapper'
import VGroup from './VGroup'
import HGroup from './HGroup'
import Title from './Title'
import Text from './Text'

import dataHandlingComponentsIcon from '../img/dataHandlingComponents.png'
import profileComponentsIcon from '../img/profileComponents.png'
import webOperationsComponentsIcon from '../img/webOperationsComponents.png'

const Section = styled.section`
  margin: 50px auto;
`

const Description = styled(Text)`
  margin: 20px auto 40px;
`

const Icon = styled.div`
  display: block;
  margin: 0 auto;
  max-width: 330px;
  max-height: 229px;
`

const WebBuildingBlocks = () => (
  <Section>
    <Wrapper alignItems="center">
      <Title align="center" transform="uppercase" withStripe={true}>
        Web
        <b> Building Blocks</b>
      </Title>
      <Description>Web Applications/Backoffice Solutions for your company.</Description>
      <HGroup columnOnMobile={true}>
        <VGroup alignItems="center" marginBottom="30px">
          <Icon>
            <img src={dataHandlingComponentsIcon} alt="Balance Components" />
          </Icon>
          <Title align="center" size="1.4em" marginTop="20px">
            Balance
          </Title>
        </VGroup>

        <VGroup alignItems="center" marginBottom="30px">
          <Icon>
            <img src={profileComponentsIcon} alt="Transactions Components" />
          </Icon>
          <Title align="center" size="1.4em" marginTop="20px">
            Transactions
          </Title>
        </VGroup>

        <VGroup alignItems="center" marginBottom="30px">
          <Icon>
            <img src={webOperationsComponentsIcon} alt="Operations Components" />
          </Icon>
          <Title align="center" size="1.4em" marginTop="20px">
            Operations
          </Title>
        </VGroup>
      </HGroup>
    </Wrapper>
  </Section>
)

export default WebBuildingBlocks

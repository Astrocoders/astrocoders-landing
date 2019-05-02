import React from 'react'
import styled from 'styled-components'

import Wrapper from './Wrapper'
import VGroup from './VGroup'
import HGroup from './HGroup'
import Title from './Title'
import Text from './Text'

import BuildingBlockItem from './BuildingBlockItem'

import dataHandlingOne from '../img/dataHandling1.png'
import dataHandlingTwo from '../img/dataHandling2.png'
import dataHandlingThree from '../img/dataHandling3.png'

import profileOne from '../img/profile1.png'
import profileTwo from '../img/profile2.png'
import profileThree from '../img/profile3.png'

import operationOne from '../img/operation1.png'
import operationTwo from '../img/operation2.png'
import operationThree from '../img/operation3.png'

const Section = styled.section`
  margin: 50px auto;
`

const Description = styled(Text)`
  margin: 20px auto 40px;
`

const WebBuildingBlocks = () => (
  <Section>
    <Wrapper alignItems="center">
      <Title align="center" transform="uppercase" withStripe marginBottom="70px">
        Web Building Blocks
      </Title>
      <HGroup columnOnMobile={true}>
        <VGroup alignItems="center" marginBottom="30px">
          <BuildingBlockItem items={[dataHandlingOne, dataHandlingTwo, dataHandlingThree]} />
          <Title align="center" size="1.4em" marginTop="20px">
            Data Handling
          </Title>
        </VGroup>

        <VGroup alignItems="center" marginBottom="30px">
          <BuildingBlockItem items={[profileOne, profileTwo, profileThree]} />
          <Title align="center" size="1.4em" marginTop="20px">
            Profile
          </Title>
        </VGroup>

        <VGroup alignItems="center" marginBottom="30px">
          <BuildingBlockItem items={[operationOne, operationTwo, operationThree]} />
          <Title align="center" size="1.4em" marginTop="20px">
            Operations
          </Title>
        </VGroup>
      </HGroup>
      <Description>
        We have the <em>web building blocks</em> to help you build your <em>financial web application</em>. Imagine
        balances, profiles, all kinds of operations, tons of visual elements <em>ready</em> to be customized with{' '}
        <em>your brand</em>.
      </Description>
    </Wrapper>
  </Section>
)

export default WebBuildingBlocks

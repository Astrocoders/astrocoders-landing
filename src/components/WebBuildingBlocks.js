import React from 'react'
import styled from 'styled-components'
import { FormattedMessage } from 'gatsby-plugin-intl'

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
      <Description>
        <FormattedMessage id="webSolutions" />
      </Description>
      <HGroup columnOnMobile={true}>
        <VGroup alignItems="center" marginBottom="30px">
          <BuildingBlockItem items={[dataHandlingOne, dataHandlingTwo, dataHandlingThree]} />
          <Title align="center" size="1.4em" marginTop="20px">
            <FormattedMessage id="dataHandling" />
          </Title>
        </VGroup>

        <VGroup alignItems="center" marginBottom="30px">
          <BuildingBlockItem items={[profileOne, profileTwo, profileThree]} />
          <Title align="center" size="1.4em" marginTop="20px">
            <FormattedMessage id="profile" />
          </Title>
        </VGroup>

        <VGroup alignItems="center" marginBottom="30px">
          <BuildingBlockItem items={[operationOne, operationTwo, operationThree]} />
          <Title align="center" size="1.4em" marginTop="20px">
            <FormattedMessage id="operations" />
          </Title>
        </VGroup>
      </HGroup>
    </Wrapper>
  </Section>
)

export default WebBuildingBlocks

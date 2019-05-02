import React from 'react'
import styled from 'styled-components'

import Wrapper from './Wrapper'
import VGroup from './VGroup'
import HGroup from './HGroup'
import Title from './Title'
import Text from './Text'
import BuildingBlockItem from './BuildingBlockItem'

import balanceOne from '../img/balance1.png'
import balanceTwo from '../img/balance2.png'
import balanceThree from '../img/balance3.png'

import transactionOne from '../img/feed1.png'
import transactionTwo from '../img/feed2.png'
import transactionThree from '../img/feed3.png'

import operationOne from '../img/mobileOperations1.png'
import operationTwo from '../img/mobileOperations2.png'
import operationThree from '../img/mobileOperations3.png'

const Section = styled.section`
  margin: 50px auto;
`

const Description = styled(Text)`
  margin: 20px auto 40px;
`

const MobileBuildingBlocks = () => (
  <Section>
    <Wrapper alignItems="center">
      <Title align="center" transform="uppercase" withStripe marginBottom="70px">
        Mobile
        <b> Building Blocks</b>
      </Title>
      <HGroup columnOnMobile={true}>
        <VGroup alignItems="center" marginBottom="30px">
          <BuildingBlockItem items={[balanceOne, balanceTwo, balanceThree]} />
          <Title align="center" size="1.4em" marginTop="20px">
            Balance
          </Title>
        </VGroup>

        <VGroup alignItems="center" marginBottom="30px">
          <BuildingBlockItem items={[transactionOne, transactionTwo, transactionThree]} />
          <Title align="center" size="1.4em" marginTop="20px">
            Transactions
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
        We <em>use</em> and <em>create</em> state of the art tech in our <em>financial mobile components</em>. With
        hundreds of possibilities you can <em>customize</em> them for your needs. With a single codebase for native
        mobile application and our streamlined process we can push new versions to <em>Apple Store</em> and{' '}
        <em>Google Play</em> automatically.
      </Description>
    </Wrapper>
  </Section>
)

export default MobileBuildingBlocks

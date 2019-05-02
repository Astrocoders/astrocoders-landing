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
      <Title align="center" transform="uppercase" withStripe={true}>
        Mobile
        <b> Building Blocks</b>
      </Title>
      <Description>Mobile Solutions for your company.</Description>
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
    </Wrapper>
  </Section>
)

export default MobileBuildingBlocks

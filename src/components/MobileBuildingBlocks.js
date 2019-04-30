import React from 'react'
import styled from 'styled-components'

import Wrapper from './Wrapper'
import VGroup from './VGroup'
import HGroup from './HGroup'
import Title from './Title'
import Text from './Text'

import theme from '../utils/theme'

import galaxy from '../img/fbb-bg.jpeg'

import balanceComponentsIcon from '../img/balanceComponents.png'
import transactionsComponentsIcon from '../img/transactionsComponents.png'
import operationsComponentsIcon from '../img/operationsComponents.png'

const FBBWrapper = styled.section`
  &:before {
    content: '';
    background-image: -webkit-linear-gradient(-90deg, #000 1%, rgba(0, 0, 0, 0) 100%);
    display: block;
    height: 100px;
    width: 100%;
  }

  align-items: center;
  background-attachment: fixed;
  background-blend-mode: hard-light;
  background-color: #000;
  background-size: cover;
  background-image: url(${galaxy});
  background-repeat: no-repeat;
  background-position: left center;
  background-origin: content-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;

  &:after {
    content: '';
    background-image: -webkit-linear-gradient(90deg, #000 1%, rgba(0, 0, 0, 0) 100%);
    display: block;
    height: 100px;
    width: 100%;
  }
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

const MobileBuildingBlocks = () => (
  <FBBWrapper>
    <Wrapper alignItems="center">
      <Title align="center" transform="uppercase" withStripe={true}>
        Mobile
        <b> Building Blocks</b>
      </Title>
      <Description>Mobile Solutions for your company.</Description>
      <HGroup>
        <VGroup alignItems="center">
          <Icon>
            <img src={balanceComponentsIcon} alt="Balance Components" />
          </Icon>
          <Title align="center" size="1.4em" marginTop="20px">
            Balance
          </Title>
        </VGroup>

        <VGroup alignItems="center">
          <Icon>
            <img src={transactionsComponentsIcon} alt="Transactions Components" />
          </Icon>
          <Title align="center" size="1.4em" marginTop="20px">
            Transactions
          </Title>
        </VGroup>

        <VGroup alignItems="center">
          <Icon>
            <img src={operationsComponentsIcon} alt="Operations Components" />
          </Icon>
          <Title align="center" size="1.4em" marginTop="20px">
            Operations
          </Title>
        </VGroup>
      </HGroup>
    </Wrapper>
  </FBBWrapper>
)

export default MobileBuildingBlocks

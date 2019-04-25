import React from 'react'
import styled from 'styled-components'

import Button from './Button'
import Wrapper from './Wrapper'
import VGroup from './VGroup'
import Text from './Text'

import theme from '../utils/theme'

import galaxy from '../img/fbb-bg.jpeg'
import fbbIcon from '../img/fbb.png'

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

const FBBTitle = styled.h3`
  align-self: flex-start;
  color: #ffffff;
  font-family: Ubuntu;
  font-size: 1.8em;
  font-style: normal;
  font-weight: normal;
  line-height: normal;
  margin-top: 30px;
  margin-bottom: 0;
  text-transform: uppercase;
  text-align: center;

  @media (min-width: 960px) {
    font-size: 3em;
    text-align: left;
  }

  em {
    color: #835fe2;
    font-style: normal;
  }
`

const Description = styled(Text)`
  background-image: -webkit-linear-gradient(-45deg, ${theme.colors.primary} 1%, ${theme.colors.accent} 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

const FBBIcon = styled.div`
  width: 55%;
`

const FinancialBuildingBlocks = () => (
  <FBBWrapper>
    <Wrapper direction="row" alignItems="center">
      <VGroup>
        <FBBTitle>
          Mobile Financial
          <br />
          <b>Building Blocks</b>
        </FBBTitle>
        <Description>Mobile Solutions for your company.</Description>
        <Button link="/building-blocks" alignSelf="flex-start" centerInMobile={true}>
          See how it works
        </Button>
      </VGroup>
      <FBBIcon>
        <img src={fbbIcon} alt="Mobile Building Blocks" />
      </FBBIcon>
    </Wrapper>
  </FBBWrapper>
)

export default FinancialBuildingBlocks

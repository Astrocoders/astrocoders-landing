import React from 'react'
import styled from 'styled-components'
import Title from './Title'
import Text from './Text'

import theme from '../utils/theme'

const FeatureWrapper = styled.div`
  align-items: center;
  background-color: #262a41;
  border-radius: 5px;
  color: #1e1e1e;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  margin: 10px;
  width: 100%;

  @media (max-width: 960px) {
    margin: 10px 0;
  }
`

const Icon = styled.img`
  width: 80px;
  height: 80px;
  margin: 30px 0;
`

const FeatureTitle = styled(Title)`
  color: #fff;
  font-size: 1.2rem;
  font-weight: 700;
  font-family: ${theme.fonts.caseTitle};
  text-align: center;
`

const FeatureText = styled(Text)`
  color: #fff;
  font-size: 1rem;
  font-weight: 300;
  font-family: ${theme.fonts.caseTitle};
  opacity: 0.6;
  text-align: center;
`

const Feature = ({ name, icon }) => (
  <FeatureWrapper>
    <Icon src={icon} alt={name} />
    <FeatureTitle>{name}</FeatureTitle>
    <FeatureText>Some simple text here</FeatureText>
  </FeatureWrapper>
)

export default Feature

import React from 'react'
import styled from 'styled-components'
import Title from './Title'

import theme from '../utils/theme'

const FeatureWrapper = styled.div`
  align-items: center;
  border-radius: 5px;
  color: #1e1e1e;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  margin: 10px;
  min-height: 330px;
  transition: all 0.2s ease-in-out;
  width: 100%;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }

  @media (max-width: 960px) {
    margin: 10px 0;
  }
`

const Icon = styled.img`
  width: 128px;
  height: 128px;
  margin: 30px 0;
`

const FeatureTitle = styled(Title)`
  color: #fff;
  font-size: 1rem;
  font-weight: 300;
  font-family: ${theme.fonts.caseTitle};
  text-align: center;
`

const Feature = ({ name, icon }) => (
  <FeatureWrapper>
    <Icon src={icon} alt={name} />
    <FeatureTitle>{name}</FeatureTitle>
  </FeatureWrapper>
)

export default Feature

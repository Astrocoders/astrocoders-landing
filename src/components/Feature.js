import React from 'react'
import styled from 'styled-components'
import Title from './Title'

const FeatureWrapper = styled.div`
  align-items: center;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  width: 100%;
`

const Icon = styled.img`
  width: 150px;
  height: 150px;
  margin: 30px 0;
`

const Feature = ({ name, icon }) => (
  <FeatureWrapper>
    <Icon src={icon} alt={name} />
    <Title size="1.8rem" fontWeight="300" align="center">
      {name}
    </Title>
  </FeatureWrapper>
)

export default Feature

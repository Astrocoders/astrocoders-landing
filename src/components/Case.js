import React from 'react'
import styled from 'styled-components'
import { navigate } from '@reach/router'

import Title from './Title'
import Text from './Text'

const CaseCover = styled.div`
  align-items: center;
  background-color: ${props => props.bgColor || '#fff'};
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  overflow: hidden;
  margin: 10px;
  width: 100%;

  @media (max-width: 960px) {
    flex-direction: column;
  }

  @media (min-width: 960px) {
    height: 300px;
  }
`

const Image = styled.img`
  display: block;
  height: auto;
  width: 160px;
`

const CaseContent = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 60px;
  padding-left: 60px;
  @media (min-width: 960px) {
    width: 50%;
  }
`

const Case = ({ bgColor, company, description, link, cover }) => (
  <>
    <CaseCover onClick={() => navigate(`/case/${link}`)} bgColor={bgColor}>
      <Image src={cover} alt={company} />
    </CaseCover>
  </>
)

export default Case

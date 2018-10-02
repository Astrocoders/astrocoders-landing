import React from 'react'
import styled from 'styled-components'

import Title from './Title'
import Text from './Text'
import Link from './Link'
import HGroup from './HGroup'

const CaseWrapper = styled(Link)`
  align-items: center;
  color: #fff;
  display: flex;
  justify-content: center;
  width: 100%;

  @media (max-width: 960px) {
    flex-direction: column;
  }

  @media (min-width: 960px) {
    height: 300px;
  }
`

const PreviewScreen = styled.div`
  align-items: center;
  background-color: ${props => props.bgColor || '#fff'};
  border: none;
  display: flex;
  height: 100%;
  justify-content: center;
  width: 100%;

  img {
    height: 200px;
    margin: 0;
    width: 200px;
  }

  @media (min-width: 960px) {
    width: 50%;
  }
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

const Testimonial = ({ bgColor, company, description, link, cover }) => (
  <CaseWrapper to={`/case/${link}`}>
    <CaseContent>
      <Title fontWeight="300" align="left" weight="700" marginTop="30px" marginBottom="30px">
        {company}
      </Title>

      <Text size="1em" weight="300" marginBottom="30px">
        {description}
      </Text>
    </CaseContent>
    <PreviewScreen bgColor={bgColor}>
      <img src={cover} alt={company} />
    </PreviewScreen>
  </CaseWrapper>
)

export default Testimonial

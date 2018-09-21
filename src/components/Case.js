import React from 'react'
import styled from 'styled-components'

import Title from './Title'
import Text from './Text'
import Link from './Link'
import HGroup from './HGroup'

const CaseWrapper = styled(HGroup)`
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

    &:nth-child(odd) {
      flex-direction: row-reverse;

      h2,
      span {
        text-align: right;
      }
    }
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
  <CaseWrapper>
    <PreviewScreen bgColor={bgColor}>
      <img src={cover} alt={company} alt={company} />
    </PreviewScreen>
    <CaseContent>
      <Link href={link} target="_blank">
        <Title fontWeight="300" align="left" weight="700" marginTop="30px" marginBottom="30px">
          {company}
        </Title>
      </Link>

      <Text size="1em" weight="300" marginBottom="30px">
        {description}
      </Text>
    </CaseContent>
  </CaseWrapper>
)

export default Testimonial

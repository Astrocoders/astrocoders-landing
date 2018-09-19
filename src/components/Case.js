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
`

const PreviewScreen = styled.img`
  background: #fff;
  border: none;
  height: 200px;
  width: 50%;
`

const CaseContent = styled.div`
  width: 50%;
`

const Testimonial = ({ name, company, description, link, cover }) => (
  <CaseWrapper>
    <PreviewScreen src={cover} alt={company} alt={company} />
    <CaseContent>
      <Link href={link} target="_blank">
        <Title fontSize="1.8em" fontWeight="300" textAlign="center">
          {company}
        </Title>
      </Link>

      <Text align="center" weight="300">
        {description}
      </Text>
    </CaseContent>
  </CaseWrapper>
)

export default Testimonial

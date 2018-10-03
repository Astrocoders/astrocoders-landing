import React from 'react'
import styled from 'styled-components'
import { withIntl } from '../../i18n'

import PageWrapper from '../../components/PageWrapper'
import Title from '../../components/Title'
import Wrapper from '../../components/Wrapper'
import Text from '../../components/Text'

import liontaxCover from '../../img/projects/lion-tax.png'

const ProjectCover = styled.div`
  align-items: center;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 126px;
  padding: 80px 0;
  width: 100%;
`

const ProjectImage = styled.img`
  width: 150px;
`

const LionTax = () => (
  <PageWrapper isHome={false}>
    <ProjectCover>
      <ProjectImage src={liontaxCover} />
      <Title color="#000" weight="700" align="center">
        Lion Tax
      </Title>
    </ProjectCover>
    <Wrapper marginTop="150px" marginBottom="150px" alignItems="">
      <h1>Lion Calendar</h1>
      <Text>
        We developed a calendar system for expatriates to control their time stayed on countries. Allowing a better
        management that mitigate tax/fees/fines due to extent time.
      </Text>
      <hr />
      <h1>Carne Lion</h1>

      <Text>
        State of the art tax calculator. We developed, using the most advanced tools, an easy to use tax calculator and
        bill generator for tax eligible workers.{' '}
      </Text>
      <hr />
      <h1>IRPRONTO</h1>

      <Text>AI system that read files from a variety sources and generate the yearly Brazilian income tax </Text>
    </Wrapper>
  </PageWrapper>
)

export default withIntl(LionTax)

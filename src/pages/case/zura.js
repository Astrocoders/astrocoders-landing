import React from 'react'
import styled from 'styled-components'
import { withIntl } from '../../i18n'

import PageWrapper from '../../components/PageWrapper'
import Title from '../../components/Title'
import Wrapper from '../../components/Wrapper'
import Text from '../../components/Text'

import zuraCover from '../../img/projects/zura.svg'

const ProjectCover = styled.div`
  align-items: center;
  background-color: #70ccac;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 126px;
  padding: 80px 0;
  width: 100%;
`

const ProjectImagesRow = styled.div`
  align-items: flex-start;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`

const ProjectImage = styled.img`
  width: 150px;
`

const OList = styled.ol`
  font-family: Roboto;
  font-style: normal;
  font-weight: 300;
  line-height: 1.8em;
`

const ZuraHealth = () => (
  <PageWrapper isHome={false}>
    <ProjectCover>
      <ProjectImage src={zuraCover} />
      <Title weight="700" align="center">
        Zura Health
      </Title>
    </ProjectCover>
    <Wrapper marginTop="150px" marginBottom="150px" alignItems="">
      <Text>We developed a multi-program education system with complete features</Text>
      <OList>
        <li>content drip for phases/lessons</li>
        <li>users / coaches management</li>
        <li>payment management for users and company</li>
        <li>video calls meetings management</li>
        <li>analytics widgets managment</li>
        <li>news feed</li>
        <li>extra curriculum assets management</li>
        <li>Community feature</li>
        <li>Messaging 1:1</li>
        <li>Notifications</li>
        <li>Discounts</li>
      </OList>
    </Wrapper>
  </PageWrapper>
)

export default withIntl(ZuraHealth)

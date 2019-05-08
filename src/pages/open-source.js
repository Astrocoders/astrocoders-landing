import React from 'react'
import styled from 'styled-components'

import PageWrapper from '../components/PageWrapper'
import Title from '../components/Title'
import Wrapper from '../components/Wrapper'
import VGroup from '../components/VGroup'
import ProjectOpenSource from '../components/ProjectOpenSource'

const OpenSourceWrapper = styled.section`
  padding: 50px 0;
`

const OpenSourcePage = () => (
  <PageWrapper>
    <OpenSourceWrapper>
      <Wrapper alignItems="center" justifyContent=" center">
        <Title align="center" marginBottom="50px" withStripe>
          Open Source Projects
        </Title>
        <VGroup>
          <ProjectOpenSource name="epitath" />
          <ProjectOpenSource name="reform" />
          <ProjectOpenSource name="nubank-api" />
          <ProjectOpenSource name="react-image-smooth-loading" />
          <ProjectOpenSource name="restyled" />
          <ProjectOpenSource name="bs-reason-apollo" />
        </VGroup>
      </Wrapper>
    </OpenSourceWrapper>
  </PageWrapper>
)

export default OpenSourcePage

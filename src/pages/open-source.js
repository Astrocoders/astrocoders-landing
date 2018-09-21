import React from 'react'
import styled from 'styled-components'
import { FormattedMessage } from 'react-intl'

import { withIntl } from '../i18n'
import PageWrapper from '../components/PageWrapper'
import Title from '../components/Title'
import Wrapper from '../components/Wrapper'
import VGroup from '../components/VGroup'
import ProjectOpenSource from '../components/ProjectOpenSource'

const OpenSourceWrapper = styled.section`
  margin-top: 100px;
  padding: 50px 0;
`

const OpenSourcePage = () => (
  <PageWrapper isHome={false}>
    <OpenSourceWrapper>
      <Wrapper alignItems="center" justifyContent=" center">
        <Title align="center" marginBottom="50px">
          Open Source Projects
        </Title>
        <VGroup>
          <ProjectOpenSource name="reform" />
          <ProjectOpenSource name="nubank-api" />
          <ProjectOpenSource name="epitath" />
          <ProjectOpenSource name="react-image-smooth-loading" />
          <ProjectOpenSource name="bs-reason-apollo" />
        </VGroup>
      </Wrapper>
    </OpenSourceWrapper>
  </PageWrapper>
)

export default withIntl(OpenSourcePage)

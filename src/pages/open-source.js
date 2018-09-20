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
          <ProjectOpenSource
            number="01"
            title="ReForm"
            description="Reasonably making forms sound good again (pun 100% intended)"
            link="https://github.com/Astrocoders/reform"
          />
          <ProjectOpenSource
            number="02"
            title="epitath"
            description="Compose HOCs imperatively like async/await. No callback hell!"
            link="https://github.com/Astrocoders/epitath"
          />
        </VGroup>
      </Wrapper>
    </OpenSourceWrapper>
  </PageWrapper>
)

export default withIntl(OpenSourcePage)

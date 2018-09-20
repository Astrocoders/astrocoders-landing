import React from 'react'
import styled from 'styled-components'
import { FormattedMessage } from 'react-intl'

import { withIntl } from '../i18n'
import PageWrapper from '../components/PageWrapper'
import Title from '../components/Title'
import Text from '../components/Text'
import Wrapper from '../components/Wrapper'

const Content = styled.section`
  margin-top: 100px;
  padding: 50px 0;
`

const HowWeWork = () => (
  <PageWrapper isHome={false}>
    <Content>
      <Wrapper alignItems="center" justifyContent=" center">
        <Title align="center" marginBottom="100px">
          How we Work
        </Title>
        <Text>Timeline WIP</Text>
      </Wrapper>
    </Content>
  </PageWrapper>
)

export default withIntl(HowWeWork)

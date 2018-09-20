import React from 'react'
import styled from 'styled-components'
import { FormattedMessage } from 'react-intl'

import { withIntl } from '../i18n'
import PageWrapper from '../components/PageWrapper'
import Title from '../components/Title'
import Text from '../components/Text'
import Wrapper from '../components/Wrapper'

const ContactWrapper = styled.section`
  margin-top: 100px;
  padding: 50px 0;
`

const CasesPage = () => (
  <PageWrapper isHome={false}>
    <ContactWrapper>
      <Wrapper alignItems="center" justifyContent=" center">
        <Title align="center" marginBottom="100px">
          Join Us
        </Title>
        <Text>
          We have a young team that is part of the business. This brings motivation and focus in each project, making it
          part of a collection effort, as a team, to exceed the next goal of excellence.
        </Text>
      </Wrapper>
    </ContactWrapper>
  </PageWrapper>
)

export default withIntl(CasesPage)

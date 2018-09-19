import React from 'react'
import styled from 'styled-components'
import { FormattedMessage } from 'react-intl'

import { withIntl } from '../i18n'
import PageWrapper from '../components/PageWrapper'
import Title from '../components/Title'
import VGroup from '../components/VGroup'
import Case from '../components/Case'

import cleanioCover from '../img/projects/cleanio.svg'

const CasesWrapper = styled.section`
  padding: 50px 0;
`

const CasesPage = () => (
  <PageWrapper isHome={false}>
    <CasesWrapper>
      <Title>Our Cases</Title>

      <VGroup>
        <Case
          cover={cleanioCover}
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt mauris et justo sollicitudin consectetur. Donec sit amet facilisis magna. Suspendisse vitae ligula ornare, volutpat neque et, posuere nunc. Etiam semper justo ut sagittis placerat. Integer congue augue vitae purus mollis sollicitudin. Sed quis neque vel turpis luctus rutrum at ac ligula. Sed a ipsum molestie, venenatis sapien sit amet, elementum leo."
        />
      </VGroup>
    </CasesWrapper>
  </PageWrapper>
)

export default withIntl(CasesPage)

import React from 'react'
import styled from 'styled-components'
import { FormattedMessage } from 'react-intl'

import { withIntl } from '../i18n'
import PageWrapper from '../components/PageWrapper'
import Title from '../components/Title'
import VGroup from '../components/VGroup'
import Case from '../components/Case'

import cleanioCover from '../img/projects/cleanio.svg'
import zuraCover from '../img/projects/zura.svg'
import liontaxCover from '../img/projects/lion-tax.png'
import lilasCover from '../img/projects/lilas.svg'

const CasesWrapper = styled.section`
  margin-top: 100px;
  padding: 50px 0;
`

const CasesPage = () => (
  <PageWrapper isHome={false}>
    <CasesWrapper>
      <Title align="center" marginBottom="100px">
        Our Cases
      </Title>

      <VGroup>
        <Case
          cover={cleanioCover}
          company="Cleanio"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt mauris et justo sollicitudin consectetur. Donec sit amet facilisis magna. Suspendisse vitae ligula ornare, volutpat neque et, posuere nunc. Etiam semper justo ut sagittis placerat. Integer congue augue vitae purus mollis sollicitudin. Sed quis neque vel turpis luctus rutrum at ac ligula."
        />
        <Case
          cover={lilasCover}
          bgColor="#8a2371"
          company="Lilas"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt mauris et justo sollicitudin consectetur. Donec sit amet facilisis magna. Suspendisse vitae ligula ornare, volutpat neque et, posuere nunc. Etiam semper justo ut sagittis placerat. Integer congue augue vitae purus mollis sollicitudin. Sed quis neque vel turpis luctus rutrum at ac ligula."
        />
        <Case
          cover={zuraCover}
          company="Zura Health"
          bgColor="#70ccac"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt mauris et justo sollicitudin consectetur. Donec sit amet facilisis magna. Suspendisse vitae ligula ornare, volutpat neque et, posuere nunc. Etiam semper justo ut sagittis placerat. Integer congue augue vitae purus mollis sollicitudin. Sed quis neque vel turpis luctus rutrum at ac ligula."
        />
        <Case
          cover={liontaxCover}
          company="Lion Tax"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt mauris et justo sollicitudin consectetur. Donec sit amet facilisis magna. Suspendisse vitae ligula ornare, volutpat neque et, posuere nunc. Etiam semper justo ut sagittis placerat. Integer congue augue vitae purus mollis sollicitudin. Sed quis neque vel turpis luctus rutrum at ac ligula."
        />
      </VGroup>
    </CasesWrapper>
  </PageWrapper>
)

export default withIntl(CasesPage)

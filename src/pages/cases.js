import React from 'react'
import styled from 'styled-components'

import PageWrapper from '../components/PageWrapper'
import Title from '../components/Title'
import VGroup from '../components/VGroup'
import Case from '../components/Case'

import cleanioCover from '../img/projects/cleanio.svg'
import zuraCover from '../img/projects/zura.svg'
import liontaxCover from '../img/projects/lion-tax.png'

const CasesWrapper = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
  margin-left: auto;
  margin-right: auto;
  max-width: 1200px;
  padding-top: 50px;
`

const CasesPage = () => (
  <PageWrapper isHome={false}>
    <CasesWrapper>
      <Title align="center" marginBottom="100px" withStripe={true}>
        Our Cases
      </Title>

      <VGroup>
        <Case
          cover={liontaxCover}
          company="Lion Tax"
          link="lion-tax"
          description="Leading the revolution on the Tax sector in Brazil thru smart applications & systems"
        />
        <Case
          cover={zuraCover}
          company="Zura Health"
          bgColor="#70ccac"
          link="zura"
          description="Wellbeing education system"
        />
        <Case cover={cleanioCover} company="Cleanio" link="cleanio" description="French laundry delivery system" />
      </VGroup>
    </CasesWrapper>
  </PageWrapper>
)

export default CasesPage

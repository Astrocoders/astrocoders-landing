import React from 'react'
import styled from 'styled-components'

import PageWrapper from '../components/PageWrapper'
import Title from '../components/Title'
import HGroup from '../components/HGroup'
import Case from '../components/Case'
import Wrapper from '../components/Wrapper'

import cleanioCover from '../img/projects/cleanio.png'
import zuraCover from '../img/projects/zura.png'
import liontaxCover from '../img/projects/lion-tax.png'

const CasesWrapper = styled(Wrapper)`
  align-items: center;
  padding-top: 50px;
`

const CasesGrid = styled(HGroup)`
  @media (max-width: 960px) {
    flex-direction: column;
  }
`

const ProductsPage = () => (
  <PageWrapper>
    <CasesWrapper>
      <Title align="center" marginBottom="100px" withStripe>
        Our Products
      </Title>

      <CasesGrid>
        <Case cover={liontaxCover} company="Lion Tax" link="lion-tax" color="#FF8525" />
        <Case cover={zuraCover} company="Zura Health" color="#70ccac" link="zura" />
        <Case cover={cleanioCover} company="Cleanio" link="cleanio" color="#294A70" />
      </CasesGrid>
    </CasesWrapper>
  </PageWrapper>
)

export default ProductsPage

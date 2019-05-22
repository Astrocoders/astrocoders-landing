import React from 'react'
import styled from 'styled-components'

import PageWrapper from '../components/PageWrapper'
import Title from '../components/Title'
import HGroup from '../components/HGroup'
import Case from '../components/Case'
import Wrapper from '../components/Wrapper'

import summhubCover from '../img/products/summhub-logo-white.png'
import pagzenCover from '../img/products/pagzen.png'
import lendhubCover from '../img/products/lendhub.png'

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
        <Case cover={summhubCover} company="Summhub" link="#" color="#000" />
        <Case cover={pagzenCover} company="Pagzen" link="#" color="#000" />
        <Case cover={lendhubCover} company="LendHub" link="#" color="#000" />
      </CasesGrid>
    </CasesWrapper>
  </PageWrapper>
)

export default ProductsPage

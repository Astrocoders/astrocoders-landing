import React from 'react'
import styled from 'styled-components'
import { navigate } from '@reach/router'

import PageWrapper from '../components/PageWrapper'
import Title from '../components/Title'
import HGroup from '../components/HGroup'
import Wrapper from '../components/Wrapper'

import astrocontroleCover from '../img/products/astrocontrole.png'
import astralCover from '../img/products/astral.png'
import lendhubCover from '../img/products/lendhub.png'

const ProductsWrapper = styled(Wrapper)`
  align-items: center;
  padding-top: 50px;
`

const ProductsGrid = styled(HGroup)`
  @media (max-width: 960px) {
    flex-direction: column;
  }
`

const ProductCover = styled.div`
  align-items: center;
  background-color: ${props => props.color || '#000'};
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  overflow: hidden;
  margin: 10px;
  width: 100%;
  height: 300px;
`

const Image = styled.img`
  display: block;
  height: auto;
  width: 250px;
`

const ProductsPage = () => (
  <PageWrapper>
    <ProductsWrapper>
      <Title align="center" marginBottom="30px" withStripe>
        Our Products
      </Title>

      <ProductsGrid>
        <ProductCover onClick={() => navigate(`/product/astrocontrole`)}>
          <Image src={astrocontroleCover} alt="Astrocontrole" />
        </ProductCover>
        <ProductCover onClick={() => navigate(`/product/astral`)}>
          <Image src={astralCover} alt="Astral" />
        </ProductCover>
        <ProductCover>
          <Image src={lendhubCover} alt="LendHub" />
        </ProductCover>
      </ProductsGrid>
    </ProductsWrapper>
  </PageWrapper>
)

export default ProductsPage

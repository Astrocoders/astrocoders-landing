import React from 'react'
import styled from 'styled-components'
import { navigate } from '@reach/router'

import Title from '../components/Title'
import Text from '../components/Text'
import HGroup from '../components/HGroup'
import Wrapper from '../components/Wrapper'

import astrocontroleCover from '../img/products/astrocontrole.png'
import astralCover from '../img/products/astral.png'
import reconciliaCover from '../img/products/reconciliaLogo.png'
import lendhubCover from '../img/products/lendhub.png'
import { FormattedMessage } from 'react-intl'

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

const Products = () => (
  <ProductsWrapper>
    <Title align="center" marginBottom="30px" transform="uppercase" withStripe>
      <FormattedMessage id="ourProducts" />
    </Title>
    <Text>
      <FormattedMessage id="ourProductsDescription" />
    </Text>

    <ProductsGrid>
      <ProductCover onClick={() => navigate(`/product/astrocontrole`)}>
        <Image src={astrocontroleCover} alt="Astrocontrole" />
      </ProductCover>
      <ProductCover onClick={() => navigate(`/product/astral`)}>
        <Image src={astralCover} alt="Astral" />
      </ProductCover>
      <ProductCover onClick={() => navigate(`/product/reconcilia`)}>
        <Image src={reconciliaCover} alt="Reconcilia" />
      </ProductCover>
      <ProductCover>
        <Image src={lendhubCover} alt="LendHub" />
      </ProductCover>
    </ProductsGrid>
  </ProductsWrapper>
)

export default Products

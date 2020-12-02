import React from 'react'
import styled from 'styled-components'
import { FormattedMessage } from 'react-intl'

import PageWrapper from '../components/PageWrapper'
import Title from '../components/Title'
import Text from '../components/Text'
import HGroup from '../components/HGroup'
import Wrapper from '../components/Wrapper'

import vannaCover from '../img/products/vanna.png'
import astropixCover from '../img/products/astropix.png'

const ProductsWrapper = styled(Wrapper)`
  align-items: center;
  padding-top: 50px;
`

const ProductsGrid = styled(HGroup)`
  @media (max-width: 960px) {
    flex-direction: column;
  }
`

const ProductCover = styled.a`
  align-items: center;
  background-color: ${props => props.color || '#000'};
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  overflow: hidden;
  margin: 10px;
  width: 100%;
`

const Image = styled.img`
  display: block;
  height: auto;
  max-height: 100px;
`

const ProductsPage = () => (
  <PageWrapper>
    <ProductsWrapper>
      <Title align="center" marginBottom="80px" withStripe>
        <FormattedMessage id="ourProducts" />
      </Title>
      <ProductsGrid>
        <ProductCover href="https://vanna.app" target="_blank" rel="noopener noreferrer">
          <Image src={vannaCover} alt="Vanna" />
        </ProductCover>
        <ProductCover href="https://bit.ly/astropix_presentation" target="_blank" rel="noopener noreferrer">
          <Image src={astropixCover} alt="AstroPIX" />
        </ProductCover>
      </ProductsGrid>
    </ProductsWrapper>
  </PageWrapper>
)

export default ProductsPage

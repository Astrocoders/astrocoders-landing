import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { FormattedMessage, Link } from 'gatsby-plugin-intl'

import theme from '../utils/theme'

const SupermenuWrapper = styled.div`
  background-color: white;
  border-radius: 3px;
  box-shadow: 1px 5px 20px rgba(0, 0, 0, 0.25);
  color: black;
  display: ${props => (props.isShowed === true ? 'flex' : 'none')};
  position: absolute;
  top: 100px;
  transition: all 0.2s;
  z-index: 999;

  &:before {
    content: '';
    display: block;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 11px 11px 11px;
    border-color: transparent transparent #ffffff transparent;
    position: absolute;
    top: -11px;
    margin-left: 45%;
  }

  @media (max-width: 960px) {
    flex-direction: column;
    left: 16%;
    width: 70%;
    top: 150px;
  }

  @media (min-width: 960px) {
    flex-direction: row;
    left: 33.5%;
  }
`

const Products = styled.div`
  padding: 30px;
`

const Product = styled.div`
  &:not(:last-child) {
    margin-bottom: 20px;
  }
`

const ProductTitle = styled.h4`
  color: ${theme.colors.astrogreen};
  font-family: ${theme.fonts.caseTitle};
  font-weight: 700;
  margin-bototm: 10px;
`

const ProductDescription = styled.span`
  color: #9c9c9c;
  display: block;
  font-family: ${theme.fonts.text};
  max-width: 280px;
`

const SeeMoreButton = styled(Link)`
  color: ${theme.colors.astrogreen};
  font-family: ${theme.fonts.caseTitle};
  font-weight: 700;
  text-decoration: none;
`

const Cases = styled.div`
  background-color: #ebebeb;
  border-radius: 0px 3px 3px 0px;
  padding: 30px;

  @media (max-width: 960px) {
    border-radius: 0px 0px 3px 3px;
    flex-direction: column;
  }
`

const CaseHeading = styled.h4`
  color: #333;
  font-family: ${theme.fonts.caseTitle};
  font-weight: 700;
  margin-bototm: 10px;
`

const CaseDescription = styled.span`
  color: #333;
  display: block;
  font-family: ${theme.fonts.text};
  font-weight: 400;
  max-width: 280px;

  &:before {
    content: '';
    background-color: ${theme.colors.primary};
    border-radius: 50%;
    display: block;
    width: 6px;
    height: 6px;
    position: absolute;
    margin-top: 6px;
    margin-left: -13px;
  }
`

const Supermenu = ({ isShowed }) => (
  <SupermenuWrapper isShowed={isShowed}>
    <Products>
      <Product>
        <ProductTitle>Astral</ProductTitle>
        <ProductDescription>Astral is our product to control you app in a easy way and Lorem Ipsum.</ProductDescription>
      </Product>
      <Product>
        <ProductTitle>Astrocontrole</ProductTitle>
        <ProductDescription>
          With astrocontrole you can do X, Y and Z. Control your company finances etc.
        </ProductDescription>
      </Product>
      <SeeMoreButton to="/products">+ See more products</SeeMoreButton>
    </Products>
    <Cases>
      <CaseHeading>Cases</CaseHeading>
      <CaseDescription>How we helped a Health Coach company to sell their products online</CaseDescription>
    </Cases>
  </SupermenuWrapper>
)

Supermenu.propTypes = {
  isShowed: PropTypes.bool,
}

Supermenu.defaultProps = {
  isShowed: false,
}

export default Supermenu

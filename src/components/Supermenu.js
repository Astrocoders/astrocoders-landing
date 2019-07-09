import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { FormattedMessage, Link, navigate } from 'gatsby-plugin-intl'

import theme from '../utils/theme'

const SupermenuWrapper = styled.div`
  display: ${p => (p.isHome && !p.isAfterHero ? 'none!important' : 'none')};
`

const SupermenuContent = styled.div`
  background-color: white;
  border-radius: 3px;
  box-shadow: 1px 5px 20px rgba(0, 0, 0, 0.25);
  color: black;
  display: flex;
  position: fixed;
  top: 80px;
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
    top: 130px;
    z-index: 99999;
    height: 510px;
    overflow-y: scroll;
  }

  @media (min-width: 960px) {
    flex-direction: row;
    left: 45%;
  }
`

const Products = styled.div`
  cursor: pointer;
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
  margin-bottom: 0.5rem;

  a {
    color: inherit;
    text-decoration: none;
  }
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

const ClickOutside = styled.label`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`

const Supermenu = ({ isHome, isAfterHero }) => (
  <SupermenuWrapper isHome={isHome} isAfterHero={isAfterHero}>
    <ClickOutside htmlFor="show-supermenu" />
    <SupermenuContent>
      <Products>
        <Product onClick={() => navigate('/product/astral')}>
          <ProductTitle>Astral</ProductTitle>
          <ProductDescription>
            <FormattedMessage id="astralDescription" />
          </ProductDescription>
        </Product>
        <Product onClick={() => navigate('/product/astrocontrole')}>
          <ProductTitle>Astrocontrole</ProductTitle>
          <ProductDescription>
            <FormattedMessage id="astrocontroleDescription" />
          </ProductDescription>
        </Product>
        <SeeMoreButton to="/products">+ See more products</SeeMoreButton>
      </Products>
    </SupermenuContent>
  </SupermenuWrapper>
)

Supermenu.propTypes = {
  isHome: PropTypes.bool,
  isAfterHero: PropTypes.bool,
}

Supermenu.defaultProps = {
  isAfterHero: false,
}

export default Supermenu

import React from 'react'
import styled from 'styled-components'

import ProductLayout from '../../components/ProductLayout'
import Button from '../../components/Button'
import Title from '../../components/Title'
import Text from '../../components/Text'
import HGroup from '../../components/HGroup'
import VGroup from '../../components/VGroup'

import astroGreen from '../../img/astroGreen.png'
import astralPreview from '../../img/products/astralPreview.png'

import theme from '../../utils/theme'

const Link = styled.a`
  color: ${props => props.color};
  text-decoration: none;
`

const Preview = styled.div`
  background-color: #262a41;
  border-radius: 5px;
  height: 300px;
  overflow: hidden;
  margin-bottom: 50px;

  @media (min-width: 960px) {
    margin-bottom: 0;
    margin-right: 50px;

    &:hover {
      img {
        margin-top: -30%;
      }
    }
  }
`

const Image = styled.img`
  display: block;
  height: auto;
  transition: all 0.2s ease-in-out;
`

const AstralPanel = () => (
  <ProductLayout
    logo={astroGreen}
    title="Astral Panel"
    subtitle="The Next generation of Application Management"
    color="#27AE60"
    content={
      <>
        <Text align="center">
          We developed a calendar system for expatriates to control their time stayed on countries. Allowing a better
          management that mitigate tax/fees/fines due to extent time.
        </Text>

        <HGroup marginTop="50px" alignItems="center" justifyContent="center" columnOnMobile>
          <Preview>
            <Image src={astralPreview} alt="Astral" />
          </Preview>

          <VGroup>
            <Title>What is this?</Title>
            <Text marginTop="20px" marginBottom="20px">
              We developed a calendar system for expatriates to control their time stayed on countries. Allowing a
              better management that mitigate tax/fees/fines due to extent time.
            </Text>
            <Button theme={theme.colors.astrogreen}>Try It</Button>
          </VGroup>
        </HGroup>
      </>
    }
  />
)

export default AstralPanel

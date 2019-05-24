import React from 'react'
import styled from 'styled-components'

import ProductLayout from '../../components/ProductLayout'
import Button from '../../components/Button'
import Title from '../../components/Title'
import Text from '../../components/Text'
import Testimonials from '../../components/Testimonials'
import HGroup from '../../components/HGroup'
import VGroup from '../../components/VGroup'

import astroGreen from '../../img/astroGreen.png'
import astrocontrolePreview from '../../img/products/astrocontrolePreview.png'

import theme from '../../utils/theme'

const Link = styled.a`
  color: ${props => props.color};
  text-decoration: none;
`

const WhatIsThis = styled(HGroup)`
  align-items: center;
  justifycontent: center;
  margin-top: 100px;

  @media (max-width: 960px) {
    div:first-child {
      order: 1;
    }
  }
`

const Preview = styled.div`
  background-color: #262a41;
  border-radius: 5px;
  height: 600px;
  overflow: hidden;
  margin-bottom: 50px;

  @media (min-width: 960px) {
    height: 300px;
    margin-bottom: 0;
    margin-left: 50px;

    &:hover {
      img {
        margin-top: -70%;
      }
    }
  }
`

const Image = styled.img`
  display: block;
  height: auto;
  transition: all 2s ease-in-out;
`

const Astrocontrole = () => (
  <ProductLayout
    logo={astroGreen}
    title="Astrocontrole"
    subtitle="The Next generation of Application Management"
    color="#27AE60"
    content={
      <>
        <Text align="center">
          We developed a calendar system for expatriates to control their time stayed on countries. Allowing a better
          management that mitigate tax/fees/fines due to extent time.
        </Text>

        <WhatIsThis columnOnMobile>
          <VGroup>
            <Title>What is this?</Title>
            <Text marginTop="20px" marginBottom="20px">
              We developed a calendar system for expatriates to control their time stayed on countries. Allowing a
              better management that mitigate tax/fees/fines due to extent time.
            </Text>
            <Button theme={theme.colors.astrogreen}>Try It</Button>
          </VGroup>

          <Preview>
            <Image src={astrocontrolePreview} alt="Astrocontrole" />
          </Preview>
        </WhatIsThis>

        <Testimonials />
      </>
    }
  />
)

export default Astrocontrole

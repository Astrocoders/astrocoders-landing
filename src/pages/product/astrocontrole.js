import React from 'react'
import styled from 'styled-components'
import { FormattedMessage, injectIntl } from 'gatsby-plugin-intl'

import ProductLayout from '../../components/ProductLayout'
import Button from '../../components/Button'
import Title from '../../components/Title'
import Text from '../../components/Text'
import ProductTestimonial from '../../components/ProductTestimonial'
import HGroup from '../../components/HGroup'
import VGroup from '../../components/VGroup'
import Feature from '../../components/Feature'

import astroGreen from '../../img/astroGreen.png'
import astrocontrolePreview from '../../img/products/astrocontrolePreview.png'

import pamPhoto from '../../img/testimonials/pam.jpg'
import zuraPhoto from '../../img/testimonials/ky-js.jpg'

import theme from '../../utils/theme'

const WhatIsThis = styled(HGroup)`
  align-items: center;
  justifycontent: center;
  margin-top: 100px;

  @media (max-width: 960px) {
    div:first-child {
      order: 1;
    }

    h2 {
      margin-left: auto;
      margin-right: auto;
    }

    span {
      text-align: center;
    }
  }
`

const Preview = styled.div`
  background-color: #262a41;
  border-radius: 5px;
  height: 300px;
  overflow: hidden;
  margin-bottom: 50px;

  @media (min-width: 960px) {
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

const TestimonialsWrapper = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 80px 0;
  width: 100%;
`

const TestimonialsList = styled(HGroup)`
  margin-top: 50px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`

const Features = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 80px 0;
  width: 100%;
`

const Astrocontrole = ({ intl }) => (
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
            <Title transform="uppercase">What is this?</Title>
            <Text marginTop="20px" marginBottom="20px">
              We developed a calendar system for expatriates to control their time stayed on countries. Allowing a
              better management that mitigate tax/fees/fines due to extent time.
            </Text>
            <Button centerInMobile theme={theme.colors.astrogreen}>
              Try It
            </Button>
          </VGroup>

          <Preview>
            <Image src={astrocontrolePreview} alt="Astrocontrole" />
          </Preview>
        </WhatIsThis>

        <Features>
          <HGroup columnOnMobile>
            <Feature name="Easy to use" icon="https://image.flaticon.com/icons/svg/1642/1642303.svg" />
            <Feature name="Complete Control" icon="https://image.flaticon.com/icons/svg/1642/1642284.svg" />
            <Feature name="Fully Scalable" icon="https://image.flaticon.com/icons/svg/1642/1642314.svg" />
          </HGroup>
        </Features>

        <TestimonialsWrapper>
          <Title align="center" transform="uppercase" withStripe>
            What our partners built with us
          </Title>
          <TestimonialsList columnOnMobile>
            <ProductTestimonial
              key="https://lion.tax/"
              name="Pamela Borges"
              company="Lion Tax"
              quote={intl.formatMessage({ id: 'quote1' })}
              link="https://lion.tax/"
              photo={pamPhoto}
            />
            <ProductTestimonial
              key="https://zurahealth.com/"
              name="Kylie and Jess McBeath"
              company="Zura Health"
              quote={intl.formatMessage({ id: 'quote2' })}
              link="https://zurahealth.com/"
              photo={zuraPhoto}
            />
          </TestimonialsList>
        </TestimonialsWrapper>
        <Button alignSelf="center" theme={theme.colors.astrogreen}>
          Try It
        </Button>
      </>
    }
  />
)

export default injectIntl(Astrocontrole)

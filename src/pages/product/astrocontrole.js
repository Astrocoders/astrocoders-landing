import React from 'react'
import styled from 'styled-components'
import { FormattedMessage, injectIntl } from 'gatsby-plugin-intl'

import ProductLayout from '../../components/ProductLayout'
import Button from '../../components/Button'
import Title from '../../components/Title'
import Text from '../../components/Text'
import HGroup from '../../components/HGroup'
import VGroup from '../../components/VGroup'
import Feature from '../../components/Feature'

import astroGreen from '../../img/astroGreen.png'
import astrocontrolePreview from '../../img/products/astrocontrolePreview.png'

import charging from '../../img/charging.svg'
import income from '../../img/income.svg'
import payments from '../../img/payments.svg'

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
    subtitle={intl.formatMessage({ id: 'astrocontroleSubheadline' })}
    color="#27AE60"
    content={
      <>
        <Title transform="uppercase">
          <FormattedMessage id="knowTheProduct" />
        </Title>
        <Text marginTop="20px" marginBottom="20px">
          <FormattedMessage id="astrocontroleMoreInfo" />
        </Text>

        <WhatIsThis columnOnMobile>
          <VGroup>
            <Title transform="uppercase">
              <FormattedMessage id="moreInfo" />
            </Title>
            <Text marginTop="20px" marginBottom="20px">
              <FormattedMessage id="astrocontroleDescription" />
            </Text>
            <Button centerInMobile theme={theme.colors.astrogreen}>
              <FormattedMessage id="tryItOut" />
            </Button>
          </VGroup>

          <Preview>
            <Image src={astrocontrolePreview} alt="Astrocontrole" />
          </Preview>
        </WhatIsThis>

        <Features>
          <Title transform="uppercase">
            <FormattedMessage id="mainFeatures" />
          </Title>
          <HGroup columnOnMobile>
            <Feature name={intl.formatMessage({ id: 'astrocontroleFeatureOne' })} icon={charging} />
            <Feature name={intl.formatMessage({ id: 'astrocontroleFeatureTwo' })} icon={income} />
            <Feature name={intl.formatMessage({ id: 'astrocontroleFeatureThree' })} icon={payments} />
          </HGroup>
        </Features>

        <Button alignSelf="center" theme={theme.colors.astrogreen}>
          <FormattedMessage id="tryItOut" />
        </Button>
      </>
    }
  />
)

export default injectIntl(Astrocontrole)

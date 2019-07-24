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
import reconciliaPreview from '../../img/products/reconciliaDashboard.jpg'

import setup from '../../img/setup.svg'
import team from '../../img/team.svg'
import chart from '../../img/chart.svg'

import theme from '../../utils/theme'

const WhatIsThis = styled(HGroup)`
  align-items: center;
  justifycontent: center;
  margin-top: 100px;

  @media (max-width: 960px) {
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
    margin-right: 50px;

    &:hover {
      img {
        margin-top: -39%;
      }
    }
  }
`

const Image = styled.img`
  display: block;
  height: auto;
  transition: all 0.2s ease-in-out;
`

const Features = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 80px 0;
  width: 100%;

  @media (max-width: 960px) {
    padding-bottom: 40px;
  }
`

const ReconciliaAi = ({ intl }) => (
  <ProductLayout
    logo={astroGreen}
    title="Reconcilia"
    subtitle={intl.formatMessage({ id: 'reconciliaSubheadline' })}
    color="#27AE60"
    content={
      <>
        <Title transform="uppercase">
          <FormattedMessage id="knowTheProduct" />
        </Title>
        <Text marginTop="20px" marginBottom="20px">
          <FormattedMessage id="reconciliaMoreInfo" />
        </Text>

        <WhatIsThis columnOnMobile>
          <Preview>
            <Image src={reconciliaPreview} alt="Reconcilia" />
          </Preview>

          <VGroup>
            <Title transform="uppercase">
              <FormattedMessage id="moreInfo" />
            </Title>
            <Text marginTop="20px" marginBottom="20px">
              <FormattedMessage id="reconciliaDescription" />
            </Text>
            <Button centerInMobile theme={theme.colors.astrogreen}>
              <FormattedMessage id="tryItOut" />
            </Button>
          </VGroup>
        </WhatIsThis>

        <Features>
          <Title transform="uppercase">
            <FormattedMessage id="mainFeatures" />
          </Title>
          <HGroup columnOnMobile>
            <Feature name={intl.formatMessage({ id: 'reconciliaFeatureOne' })} icon={setup} />
            <Feature name={intl.formatMessage({ id: 'reconciliaFeatureTwo' })} icon={team} />
            <Feature name={intl.formatMessage({ id: 'reconciliaFeatureThree' })} icon={chart} />
          </HGroup>
        </Features>

        <Button alignSelf="center" theme={theme.colors.astrogreen}>
          <FormattedMessage id="tryItOut" />
        </Button>
      </>
    }
  />
)

export default injectIntl(ReconciliaAi)

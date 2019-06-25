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
    subtitle="Finanças e contabilidade 100% automatizadas"
    color="#27AE60"
    content={
      <>
        <Text align="center">
          Astrocontrole é um sistema financeiro-contábil totalmente automatizado para pequenas e médias empresas. Seu
          foco 100% no que é importante, use Astrocontrole para Cobrar, Receber, Analisar, Pagar e Lucrar.
        </Text>

        <WhatIsThis columnOnMobile>
          <VGroup>
            <Title transform="uppercase">What is this?</Title>
            <Text marginTop="20px" marginBottom="20px">
              Astrocontrole é um sistema financeiro-contábil totalmente automatizado para pequenas e médias empresas.
              Seu foco 100% no que é importante, use Astrocontrole para Cobrar, Receber, Analisar, Pagar e Lucrar.
            </Text>
            <Button centerInMobile theme={theme.colors.astrogreen}>
              Try It Out
            </Button>
          </VGroup>

          <Preview>
            <Image src={astrocontrolePreview} alt="Astrocontrole" />
          </Preview>
        </WhatIsThis>

        <VGroup>
          <Title transform="uppercase">More Information</Title>
          <Text align="center">
            A idéia de um sistema financeiro-contábil surgiu da insatisfação com os atuais serviços e suas limitações.
            Alguns focam apenas na área contábil, outros apenas na area financeira e nenhum faz o serviço para você.
            Enviar OFX, fazer conciliação bancária, pagar inúmeras contas e colaboradores faz parte de um pedaço do mês
            de empreendedores. Simplicidade e automação são pontos chave que ganham e fidelizam nossos clientes.
          </Text>
        </VGroup>

        <Features>
          <HGroup columnOnMobile>
            <Feature
              name="Cobranças e recorrência por cartão de crédito e boleto"
              icon="https://image.flaticon.com/icons/svg/1642/1642303.svg"
            />
            <Feature
              name="Análise e projeção de saúde financeira"
              icon="https://image.flaticon.com/icons/svg/1642/1642284.svg"
            />
            <Feature
              name="Pagamentos automático de colaboradores, contas e tributos"
              icon="https://image.flaticon.com/icons/svg/1642/1642314.svg"
            />
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
          Try It Out
        </Button>
      </>
    }
  />
)

export default injectIntl(Astrocontrole)

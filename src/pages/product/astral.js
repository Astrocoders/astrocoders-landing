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
import astralPreview from '../../img/products/astralPreview.png'

import pamPhoto from '../../img/testimonials/pam.jpg'
import zuraPhoto from '../../img/testimonials/ky-js.jpg'

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

const TestimonialsWrapper = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 80px 0;
  width: 100%;
`

const TestimonialsList = styled(HGroup)`
  margin-top: 50px;
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

const AstralPanel = ({ intl }) => (
  <ProductLayout
    logo={astroGreen}
    title="Astral Panel"
    subtitle="Servidor de integração para aplicativos mobile e web com foco em encantamento de clientes"
    color="#27AE60"
    content={
      <>
        <Text align="center">
          Servidor de integração que fornece controle de funcionalidades por feature flags, insights, analytics, ajuda
          na contínua otimização de aplicações e controle de reputação online.
        </Text>

        <Text align="center" marginTop="50px">
          Para que os produtos de nossos clientes tenham a melhor performance e encantem seus usuários, precisamos de
          informações de todos os lados. Tempo de respostas de APIs, histórico de uso do aplicativo e até mesmo o que
          usuários comentam na internet são importantes para esse objetivo. Com um setup rápido e uma interface simples
          e direta, operadores conseguem avaliar e atuar rapidamente para conter ou predizer situações. O sistema conta
          também com alertas e feature flags para um controle maior da aplicação.
        </Text>

        <WhatIsThis columnOnMobile>
          <Preview>
            <Image src={astralPreview} alt="Astral" />
          </Preview>

          <VGroup>
            <Title>What is this?</Title>
            <Text marginTop="20px" marginBottom="20px">
              Astral Panel é o servidor de integração de APIs da Astrocoders que também age como um centro de
              monitoramento, feature flags, analytics e customer relationship. Funcionalidades essenciais para levar uma
              experiência incrível para usuários cada vez mais exigentes.
            </Text>
            <Button centerInMobile theme={theme.colors.astrogreen}>
              Try It Out
            </Button>
          </VGroup>
        </WhatIsThis>

        <Features>
          <HGroup columnOnMobile>
            <Feature
              name="Integração de APIs para aplicativos mobile e web usando GraphQL para consulta e mutação de dados."
              icon="https://image.flaticon.com/icons/svg/1642/1642303.svg"
            />
            <Feature
              name="Análise e insights do uso das APIs conectadas e timeline de ações do usuário na aplicação. Para que alertas automáticos sejam certeiros."
              icon="https://image.flaticon.com/icons/svg/1642/1642284.svg"
            />
            <Feature
              name="Central de relacionamento com usuários que comentam nas lojas de aplicativos, redes sociais e sistemas de reclamação."
              icon="https://image.flaticon.com/icons/svg/1642/1642314.svg"
            />
          </HGroup>
        </Features>

        <Button alignSelf="center" theme={theme.colors.astrogreen}>
          Try It Out
        </Button>
      </>
    }
  />
)

export default injectIntl(AstralPanel)

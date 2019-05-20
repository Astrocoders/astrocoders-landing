import React from 'react'
import styled from 'styled-components'
import { FormattedMessage } from 'gatsby-plugin-intl'

import Title from './Title'
import Wrapper from './Wrapper'
import HGroup from './HGroup'

import quantoLogo from '../img/partners/quanto.png'
import pismoLogo from '../img/partners/pismo.png'
import catenoLogo from '../img/partners/cateno.png'
import boxpagLogo from '../img/partners/boxpag.png'
import zcashLogo from '../img/partners/zfnd.png'

const PartnersWrapper = styled(Wrapper)`
  align-items: center;
  display: flex;
  padding-bottom: 50px;
`

const PartnerLogo = styled.a`
  display: flex;
  margin-bottom: 20px;

  @media (min-width: 960px) {
    max-width: 260px;
    margin: 10px;
  }
`

const PartnerLogoImg = styled.img`
  filter: grayscale(100%);
  transition: all 0.4s;
  padding: 20px;
  height: 80px;

  &:hover {
    filter: grayscale(0%);
  }
`

const Partners = () => (
  <PartnersWrapper id="partners">
    <Title align="center" transform="uppercase" withStripe>
      <FormattedMessage id="partners" />
    </Title>
    <HGroup justifyContent="center" alignItems="center" marginTop="30px" columnOnMobile>
      <PartnerLogo href="https://contaquanto.com.br">
        <PartnerLogoImg src={quantoLogo} alt="Conta Quanto" title="Conta Quanto" />
      </PartnerLogo>
      <PartnerLogo href="https://pismo.io/">
        <PartnerLogoImg src={pismoLogo} alt="Pismo Tech" title="Pismo Tech" />
      </PartnerLogo>
      <PartnerLogo href="http://www.cateno.com.br">
        <PartnerLogoImg src={catenoLogo} alt="Cateno" title="Cateno" />
      </PartnerLogo>
      <PartnerLogo href="http://www.boxpag.com.br/">
        <PartnerLogoImg src={boxpagLogo} alt="BoxPag" title="BoxPag" />
      </PartnerLogo>
      <PartnerLogo href="https://www.zfnd.org/">
        <PartnerLogoImg src={zcashLogo} alt="ZCash" title="ZCash" />
      </PartnerLogo>
    </HGroup>
  </PartnersWrapper>
)

export default Partners

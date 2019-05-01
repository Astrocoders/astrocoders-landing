import React from 'react'
import styled from 'styled-components'

import Title from './Title'
import Wrapper from './Wrapper'
import HGroup from './HGroup'

import quantoLogo from '../img/partners/quanto.png'
import pismoLogo from '../img/partners/pismo.png'
import catenoLogo from '../img/partners/cateno.png'
import boxpagLogo from '../img/partners/boxpag.png'
import zcashLogo from '../img/partners/zcash.png'

const PartnersWrapper = styled(Wrapper)`
  align-items: center;
  background-color: #000;
  display: flex;
  padding-bottom: 50px;

  @media (max-width: 960px) {
    & > div {
      justify-content: normal;
    }
  }
`

const PartnerLogo = styled.div`
  display: flex;
  @media (max-width: 960px) {
    flex: 0 0 20%;
    margin-bottom: 20px;
  }
`

const PartnerLogoImg = styled.img`
  filter: grayscale(100%);
  transition: all 0.4s;
  padding: 20px;
  height: 70px;

  &:hover {
    filter: grayscale(0%);
  }
`

const Partners = () => (
  <PartnersWrapper id="partners">
    <Title align="center" transform="uppercase" withStripe={true}>
      Partners
    </Title>
    <HGroup justifyContent="center" alignItems="center" marginTop="30px">
      <PartnerLogo>
        <PartnerLogoImg src={quantoLogo} alt="Conta Quanto" title="Conta Quanto" />
      </PartnerLogo>
      <PartnerLogo>
        <PartnerLogoImg src={pismoLogo} alt="Pismo Tech" title="Pismo Tech" />
      </PartnerLogo>
      <PartnerLogo>
        <PartnerLogoImg src={catenoLogo} alt="Cateno" title="Cateno" />
      </PartnerLogo>
      <PartnerLogo>
        <PartnerLogoImg src={boxpagLogo} alt="BoxPag" title="BoxPag" />
      </PartnerLogo>
      <PartnerLogo>
        <PartnerLogoImg src={zcashLogo} alt="ZCash" title="ZCash" />
      </PartnerLogo>
    </HGroup>
  </PartnersWrapper>
)

export default Partners

import React from 'react'
import styled from 'styled-components'

import Title from './Title'
import Wrapper from './Wrapper'
import Text from './Text'

import gameTableImg from '../img/our-stack-process.png'
import mobileGameTableImg from '../img/our-stack-process_mobile.png'

const AboutUsWrapper = styled.section`
  align-items: center;
  background-color: #000;
  display: flex;
  padding: 50px 0;
`

const GameTable = styled.picture`
  align-items: center;
  margin-top: -50px;
  margin-bottom: 50px;

  @media (min-width: 960px) {
    max-width: 50vw;
    margin-bottom: 0;
  }
`

const AboutUs = () => (
  <AboutUsWrapper data-testid="AboutUsSection">
    <Wrapper alignItems="center">
      <Title value="Who we are" align="center" transform="uppercase" withStripe={true} />
      <GameTable>
        <source srcset={gameTableImg} media="(min-width: 960px)" />
        <img src={mobileGameTableImg} alt="How we do the things" />
      </GameTable>
      <Text>
        Astrocoders builds <em>mobile and web apps</em>, <em>systems</em> and <em>platforms</em> in a different way.{' '}
        <em>Simple</em>, <em>quick</em>, PCI & GDPR compliance and <em>made to last</em>. No unnecessary lines, no bends
        or obstacles along the way.
        <br /> We use technology <em>to the limit</em>. For us, innovation is about learning from the past and doing
        better, doing it fast, doing more.
        <br /> Solid, simple, modular and timeless software without taking forever. We <em>focus</em> on <em>speed</em>{' '}
        and <em>efficiency</em> to first deliver a realistic navigable prototype and, after validation, the masterpiece,
        avoiding rework. <br />
      </Text>
    </Wrapper>
  </AboutUsWrapper>
)

export default AboutUs

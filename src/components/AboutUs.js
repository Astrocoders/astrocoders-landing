import React from 'react'
import styled from 'styled-components'

import Lightbox from './Lightbox'
import Title from './Title'
import Wrapper from './Wrapper'
import Text from './Text'

import gameTableImg from '../img/our-stack-process.png'
import mobileGameTableImg from '../img/our-stack-process_mobile.png'

import theme from '../utils/theme'

const AboutUsWrapper = styled.section`
  align-items: center;
  background-color: #000;
  display: flex;
  padding: 50px 0;
`

const GameTableWrapper = styled.div`
  max-width: 50vw;
  margin-bottom: 0;

  @media (max-width: 960px) {
    display: none;
  }
`

const MobileGameTableWrapper = styled.div`
  display: none;

  @media (max-width: 960px) {
    display: block;
    align-items: center;
    margin-top: 50px;
    margin-bottom: 30px;
  }
`

const Description = styled(Text)`
  background-image: -webkit-linear-gradient(-45deg, ${theme.colors.primary} 1%, ${theme.colors.accent} 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: -20px auto 50px;
`

const AboutUs = () => (
  <scroll-page id="discover">
    <AboutUsWrapper data-testid="AboutUsSection">
      <Wrapper alignItems="center">
        <Title align="center" transform="uppercase" withStripe={true}>
          we together to thrive
        </Title>
        <GameTableWrapper>
          <Lightbox cover={gameTableImg} images={[{ src: gameTableImg }]} />
        </GameTableWrapper>
        <MobileGameTableWrapper>
          <Lightbox cover={mobileGameTableImg} images={[{ src: mobileGameTableImg }]} />
        </MobileGameTableWrapper>

        <Description>
          State of the art tech and design which make your customer interface delightful and unbreakable
        </Description>
        <Text>
          Astrocoders builds <em>mobile and web apps</em>, <em>systems</em> and <em>platforms</em> in a different way.{' '}
          <em>Simple</em>, <em>quick</em>, PCI & GDPR compliance and <em>made to last</em>. No unnecessary lines, no
          bends or obstacles along the way.
          <br /> We use technology <em>to the limit</em>. For us, innovation is about learning from the past and doing
          better, doing it fast, doing more.
          <br /> Solid, simple, modular and timeless software without taking forever. We <em>focus</em> on{' '}
          <em>speed</em> and <em>efficiency</em> to first deliver a realistic navigable prototype and, after validation,
          the masterpiece, avoiding rework. <br />
        </Text>
      </Wrapper>
    </AboutUsWrapper>
  </scroll-page>
)

export default AboutUs

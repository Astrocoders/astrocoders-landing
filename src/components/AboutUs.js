import React from 'react'
import styled from 'styled-components'

import Lightbox from './Lightbox'
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
    margin-bottom: 100px;
  }
`

const Description = styled(Text)`
  margin: -20px auto 100px;
  max-width: 450px;
  text-transform: uppercase;
  font-weight: 500;
  text-align: center;
`

const Em = styled.span`
  color: #74eab7;
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
          State of the art <Em>tech</Em> and <Em>design</Em> for <Em>delightful</Em> and <Em>unbreakable</Em> interfaces
        </Description>
        <Text>
          Astrocoders builds <em>mobile and web apps</em>, <em>systems</em> and <em>platforms</em>. Simple, fast, PCI &
          GDPR compliance and <em>made to last</em>.<br /> We use technology <em>to the limit</em>. For us, innovation
          is about learning from the past and doing better, doing it faster. <br />
          We <em>focus</em> on <em>speed</em> and <em>efficiency</em> to first deliver a realistic navigable prototype
          and, after validation, the masterpiece, avoiding rework. <br />
          Solid, simple, modular and timeless software without taking forever. <br />
        </Text>
      </Wrapper>
    </AboutUsWrapper>
  </scroll-page>
)

export default AboutUs

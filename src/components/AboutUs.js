import React from 'react'
import styled from 'styled-components'
import { FormattedMessage, FormattedHTMLMessage } from 'gatsby-plugin-intl'

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
    margin-bottom: 30px;
  }
`

const Description = styled(Text)`
  margin: -20px auto 50px;
`

const AboutUs = () => (
  <scroll-page id="discover">
    <AboutUsWrapper data-testid="AboutUsSection">
      <Wrapper alignItems="center">
        <Title align="center" transform="uppercase" withStripe={true}>
          <FormattedMessage id="whoWeAre" />
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
          <FormattedHTMLMessage id="aboutText" />
        </Text>
      </Wrapper>
    </AboutUsWrapper>
  </scroll-page>
)

export default AboutUs

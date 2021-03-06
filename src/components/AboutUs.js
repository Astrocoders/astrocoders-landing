import React from 'react'
import styled from 'styled-components'
import { FormattedMessage, FormattedHTMLMessage } from 'gatsby-plugin-intl'

import Lightbox from './Lightbox'
import Title from './Title'
import Wrapper from './Wrapper'
import Text from './Text'

import theme from '../utils/theme'

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
    max-width: 80vw;
  }
`

const Description = styled(Text)`
  margin: -20px auto 100px;
  max-width: 450px;
  text-transform: uppercase;
  font-weight: 500;
  text-align: center;

  em {
    color: ${theme.colors.accent};
  }
`

const AboutUs = () => (
  <scroll-page id="discover">
    <AboutUsWrapper data-testid="AboutUsSection">
      <Wrapper alignItems="center">
        <Title align="center" transform="uppercase" withStripe>
          <FormattedMessage id="whoWeAre" />
        </Title>
        <GameTableWrapper>
          <Lightbox cover={gameTableImg} images={[{ src: gameTableImg }]} />
        </GameTableWrapper>
        <Description>
          <FormattedHTMLMessage id="tableDescription" />
        </Description>
        <Text align="center">
          <FormattedHTMLMessage id="aboutText" />
        </Text>
      </Wrapper>
    </AboutUsWrapper>
  </scroll-page>
)

export default AboutUs

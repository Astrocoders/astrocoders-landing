import React from 'react'
import styled from 'styled-components'
import { compose, withStateHandlers } from 'recompose'
import ScrollTrigger from 'react-scroll-trigger'

import PageWrapper from '../components/PageWrapper'
import Hero from '../components/Hero'
import AboutUs from '../components/AboutUs'
import MobileBuildingBlocks from '../components/MobileBuildingBlocks'
import WebBuildingBlocks from '../components/WebBuildingBlocks'
import IntegrationServer from '../components/IntegrationServer'
import OurStack from '../components/OurStack'
import Partners from '../components/Partners'
import Testimonials from '../components/Testimonials'

import galaxy from '../img/fbb-bg.jpg'

const BuldingBlocksWrapper = styled.section`
  &:before {
    content: '';
    background-image: -webkit-linear-gradient(-90deg, #000 1%, rgba(0, 0, 0, 0) 100%);
    display: block;
    height: 100px;
    width: 100%;
  }

  align-items: center;
  background-attachment: fixed;
  background-blend-mode: hard-light;
  background-color: #000;
  background-size: cover;
  background-image: url(${galaxy});
  background-repeat: no-repeat;
  background-position: left center;
  background-origin: content-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;

  &:after {
    content: '';
    background-image: -webkit-linear-gradient(90deg, #000 1%, rgba(0, 0, 0, 0) 100%);
    display: block;
    height: 100px;
    width: 100%;
  }
`
const IndexPage = ({ isAfterHero, setAfterHero }) => (
  <PageWrapper isHome isAfterHero={isAfterHero}>
    <ScrollTrigger onEnter={() => setAfterHero(false)} onExit={() => setAfterHero(true)}>
      <Hero />
    </ScrollTrigger>
    <OurStack />
    <AboutUs />
    <BuldingBlocksWrapper>
      <MobileBuildingBlocks />
      <WebBuildingBlocks />
      <IntegrationServer />
    </BuldingBlocksWrapper>
    <Partners />
    <Testimonials />
  </PageWrapper>
)

export default compose(
  withStateHandlers(
    { isAfterHero: false },
    {
      setAfterHero: () => isAfterHero => ({ isAfterHero }),
    },
  ),
)(IndexPage)

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

const BuldingBlocksWrapper = styled.section`
  background-color: ${props => props.theme.colors.secondary};
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
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

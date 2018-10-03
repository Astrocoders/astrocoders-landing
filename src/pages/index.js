import React from 'react'
import { compose, withStateHandlers } from 'recompose'
import ScrollTrigger from 'react-scroll-trigger'

import PageWrapper from '../components/PageWrapper'
import Hero from '../components/Hero'
import AboutUs from '../components/AboutUs'
import OurStack from '../components/OurStack'
import Testimonials from '../components/Testimonials'

const IndexPage = ({ isAfterHero, setAfterHero }) => (
  <PageWrapper isHome={true} isAfterHero={isAfterHero}>
    <ScrollTrigger onEnter={() => setAfterHero(false)} onExit={() => setAfterHero(true)}>
      <Hero />
    </ScrollTrigger>
    <OurStack />
    <AboutUs />
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

import React from 'react'
import { withIntl } from '../i18n'

import PageWrapper from '../components/PageWrapper'
import Hero from '../components/Hero'
import AboutUs from '../components/AboutUs'
import OurStack from '../components/OurStack'
import Testimonials from '../components/Testimonials'

const IndexPage = () => (
  <PageWrapper isHome={true}>
    <Hero />
    <OurStack />
    <AboutUs />
    <Testimonials />
  </PageWrapper>
)

export default withIntl(IndexPage)

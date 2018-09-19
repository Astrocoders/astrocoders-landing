import React from 'react'
import { withIntl } from '../i18n'

import data from '../data.json'

import PageWrapper from '../components/PageWrapper'
import Hero from '../Sections/Hero'
import AboutUs from '../Sections/AboutUs'
import OurStack from '../Sections/OurStack'
import Testimonials from '../Sections/Testimonials'

const IndexPage = () => (
  <PageWrapper isHome={true}>
    <Hero {...data} />
    <OurStack {...data} />
    <AboutUs {...data} />
    <Testimonials {...data} />
  </PageWrapper>
)

export default withIntl(IndexPage)

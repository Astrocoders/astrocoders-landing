import React from 'react'
import { withIntl } from '../i18n'

import data from '../data.json'

import PageWrapper from '../components/PageWrapper'
import Hero from '../sections/Hero'
import AboutUs from '../sections/AboutUs'
import OurStack from '../sections/OurStack'
import Testimonials from '../sections/Testimonials'

const IndexPage = () => (
  <PageWrapper isHome={true}>
    <Hero {...data} />
    <OurStack {...data} />
    <AboutUs {...data} />
    <Testimonials {...data} />
  </PageWrapper>
)

export default withIntl(IndexPage)

import React from 'react'
import { withIntl } from '../i18n'

import data from '../data.json'

import PageWrapper from '../components/PageWrapper'
import Navbar from '../components/Navbar'
import Hero from '../sections/Hero'
import AboutUs from '../sections/AboutUs'
import HireUs from '../sections/HireUs'
import OurStack from '../sections/OurStack'
import Footer from '../sections/Footer'
import Testimonials from '../sections/Testimonials'

const IndexPage = () => (
  <PageWrapper>
    <Navbar isHome={true} />
    <Hero {...data} />
    <OurStack {...data} />
    <AboutUs {...data} />
    <Testimonials {...data} />
    <HireUs {...data} />
    <Footer />
  </PageWrapper>
)

export default withIntl(IndexPage)

import React from 'react'

import Layout from './Layout'
import Navbar from './Navbar'
import Footer from './Footer'
import HireUs from './HireUs'

const PageWrapper = ({ children, isHome, isAfterHero }) => (
  <Layout>
    <Navbar isHome={isHome} isAfterHero={isAfterHero} />
    {children}
    <HireUs />
    <Footer />
  </Layout>
)

export default PageWrapper

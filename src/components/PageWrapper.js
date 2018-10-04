import React, { Fragment } from 'react'

import Navbar from './Navbar'
import Footer from './Footer'
import HireUs from './HireUs'

const PageWrapper = ({ children, isHome, isAfterHero }) => (
  <Fragment>
    <Navbar isHome={isHome} isAfterHero={isAfterHero} />
    {children}
    <HireUs />
    <Footer />
  </Fragment>
)

export default PageWrapper

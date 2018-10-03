import React from 'react'
import { injectIntl } from 'react-intl'

import Navbar from './Navbar'
import Footer from './Footer'
import HireUs from './HireUs'

const PageWrapper = ({ children, isHome, isAfterHero }) => (
  <div>
    <Navbar isHome={isHome} isAfterHero={isAfterHero} />
    {children}
    <HireUs />
    <Footer />
  </div>
)

export default injectIntl(PageWrapper)

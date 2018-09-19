import React from 'react'
import { injectIntl } from 'react-intl'

import Navbar from './Navbar'
import Footer from './Footer'

const PageWrapper = ({ children, isHome }) => (
  <div>
    <Navbar isHome={isHome} />
    {children}
    <Footer />
  </div>
)

export default injectIntl(PageWrapper)

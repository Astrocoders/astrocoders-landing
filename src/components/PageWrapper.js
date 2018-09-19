import React from 'react'
import { injectIntl } from 'react-intl'

import Navbar from './Navbar'
import Footer from '../Sections/Footer'
import HireUs from '../Sections/HireUs'

import data from '../data.json'

const PageWrapper = ({ children, isHome }) => (
  <div>
    <Navbar isHome={isHome} />
    {children}
    <HireUs {...data} />
    <Footer />
  </div>
)

export default injectIntl(PageWrapper)

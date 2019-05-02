import React from 'react'
import PropTypes from 'prop-types'
import { injectIntl } from 'gatsby-plugin-intl'

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

PageWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  isAfterHero: PropTypes.boolean,
  isHome: PropTypes.boolean,
}

PageWrapper.defaultProps = {
  isAfterHero: false,
  isHome: false,
}

export default PageWrapper

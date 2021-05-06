import React from 'react'
import PropTypes from 'prop-types'

import Layout from './Layout'
import Navbar from './Navbar'
import Footer from './Footer'

const PageWrapper = ({ children, isHome, isAfterHero }) => (
  <Layout>
    {children}
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

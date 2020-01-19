import React from 'react'
import PropTypes from 'prop-types'

import Layout from './Layout'
import Navbar from './Navbar'
import Footer from './Footer'
import HireUs from './HireUs'

const PageWrapper = ({ children, isHome, isAfterHero, isHireUs }) => (
  <Layout>
    <Navbar isHome={isHome} isAfterHero={isAfterHero} />
    {children}
    {isHireUs ? <HireUs /> : null}
    <Footer />
  </Layout>
)

PageWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  isAfterHero: PropTypes.boolean,
  isHome: PropTypes.boolean,
  isHireUs: PropTypes.boolean,
}

PageWrapper.defaultProps = {
  isAfterHero: false,
  isHome: false,
  isHireUs: true,
}

export default PageWrapper

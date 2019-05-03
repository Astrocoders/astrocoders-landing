import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import { injectIntl } from 'gatsby-plugin-intl'

import SEO from './SEO'

const Layout = ({ children, intl }) => (
  <StaticQuery
    query={graphql`
      query Layout {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `}
    render={({ site: { siteMetadata: data } }) => (
      <main>
        <SEO
          title={`${intl.formatMessage({ id: 'title' })} - ${intl.formatMessage({ id: 'subtitle' })}`}
          description={intl.formatMessage({ id: 'heroDescription' })}
        />
        {children}
      </main>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default injectIntl(Layout)

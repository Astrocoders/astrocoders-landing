import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import { injectIntl } from 'gatsby-plugin-intl'
import { ThemeProvider } from 'styled-components'
import theme from '../utils/theme'

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
    render={() => (
      <ThemeProvider theme={theme}>
        <main>
          <SEO title={`${intl.formatMessage({ id: 'title' })} - ${intl.formatMessage({ id: 'subtitle' })}`} />
          {children}
        </main>
      </ThemeProvider>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default injectIntl(Layout)

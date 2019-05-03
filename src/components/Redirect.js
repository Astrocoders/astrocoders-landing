import React from 'react'
import { injectIntl } from 'gatsby-plugin-intl'

import SEO from './SEO'

const Redirect = ({ intl }) => {
  return <SEO title={`${intl.formatMessage({ id: 'title' })} - ${intl.formatMessage({ id: 'subtitle' })}`} />
}

export default injectIntl(Redirect)

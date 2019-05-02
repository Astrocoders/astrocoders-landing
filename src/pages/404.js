import React from 'react'
import { FormattedMessage, injectIntl } from 'gatsby-plugin-intl'

import Layout from '../components/PageWrapper'

const NotFoundPage = ({ intl }) => (
  <Layout>
    <h1>
      <FormattedMessage id="notFound" />
    </h1>
    <p>
      <FormattedMessage id="whoops" />
    </p>
  </Layout>
)

export default injectIntl(NotFoundPage)

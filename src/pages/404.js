import React from 'react'
import { FormattedMessage, injectIntl, Link } from 'gatsby-plugin-intl'

import Title from '../components/Title'
import Text from '../components/Text'
import Wrapper from '../components/Wrapper'
import PageWrapper from '../components/PageWrapper'
import Button from '../components/Button'

const NotFoundPage = () => (
  <PageWrapper>
    <Wrapper alignItems="center" justifyContent=" center" marginTop="50px">
      <Title withStripe>
        <FormattedMessage id="notFound" />
      </Title>
      <Text align="center" marginBottom="30px">
        <FormattedMessage id="whoops" />
      </Text>
      <Button>
        <Link to="/">
          <FormattedMessage id="backToHome" />
        </Link>
      </Button>
    </Wrapper>
  </PageWrapper>
)

export default injectIntl(NotFoundPage)

import React from 'react'
import styled from 'styled-components'
import { FormattedMessage, FormattedHTMLMessage } from 'gatsby-plugin-intl'

import Title from './Title'
import Wrapper from './Wrapper'
import Text from './Text'

const AboutUsWrapper = styled.section`
  align-items: center;
  background-color: #000;
  display: flex;
  padding: 50px 0;
`

const AboutUs = () => (
  <AboutUsWrapper data-testid="AboutUsSection">
    <Wrapper alignItems="center">
      <Title align="center" transform="uppercase" marginBottom="100px" withStripe={true}>
        <FormattedMessage id="whoWeAre" />
      </Title>
      <Text align="center">
        <FormattedHTMLMessage id="aboutText" />
      </Text>
    </Wrapper>
  </AboutUsWrapper>
)

export default AboutUs

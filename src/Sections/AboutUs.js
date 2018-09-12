import React from 'react'
import styled from 'styled-components'

import {FormattedMessage} from 'react-intl'

import Title from '../components/Title'
import Wrapper from '../components/Wrapper'
import Text from '../components/Text'

const AboutUsWrapper = styled.section`
  align-items: center;
  background-color: #000;
  display: flex;
  padding: 50px 0;
`

const AboutUs = () => (
    <AboutUsWrapper>
      <Wrapper alignItems="center">
        <Title textAlign="center" textTransform="uppercase" marginBottom="100px"><FormattedMessage id="whoWeAre"/></Title>
          <Text>
            <FormattedMessage id="aboutText"/>
          </Text>
      </Wrapper>
    </AboutUsWrapper>
  )

export default AboutUs
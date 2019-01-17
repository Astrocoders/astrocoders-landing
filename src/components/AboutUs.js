import React from 'react'
import styled from 'styled-components'

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
        WHO WE ARE
      </Title>
      <Text>
        Astrocoders builds <em>apps</em>, <em>systems</em> and <em>platforms</em> in a different way. <em>Simple</em>,{' '}
        <em>quick</em> and <em>made to last</em>. No unnecessary lines, no bends or obstacles along the way.
        <br /> We use technology <em>to the limit</em>. For us, innovation is about learning from the past and doing
        better, doing it fast, doing more.
        <br /> Solid, simple, modular and timeless software without taking forever. We <em>focus</em> on <em>speed</em>{' '}
        and <em>efficiency</em> to first deliver a realistic navigable prototype and, after validation, the masterpiece,
        avoiding rework. <br />
        If programming is to use languages, we use a precise, straightforward vocabulary without flourishes, that solves
        problems and accepts challenges. <br />
        If programming creates <em>new worlds</em>, so they must be - at least - from <em>another dimension</em>.
      </Text>
    </Wrapper>
  </AboutUsWrapper>
)

export default AboutUs

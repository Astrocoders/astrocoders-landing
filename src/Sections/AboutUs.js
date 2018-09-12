import React from 'react'
import styled from 'styled-components'
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
        <Title textAlign="center" textTransform="uppercase" marginBottom="100px">Who we are</Title>
        <Text>
          Astrocoders builds <em>apps</em>, <em>systems</em> and <em>platforms</em> in a different way. <em>Simple</em>, <em>quick</em> and <em>made to last</em>. No unnecessary lines, no bends or obstacles along the way.
          <br/><br/>
          We use technology <em>to the limit</em>. For us, innovation is about learning from the past and doing better, doing it fast, doing more.
          <br/><br/>
          Solid, simple, modular and timeless software without taking forever. We <em>focus</em> on <em>speed</em> and <em>efficiency</em> to first deliver a realistic navigable prototype and, after validation, the masterpiece, avoiding rework.
          <br/><br/>
          If programming is to use languages, we use a precise, straightforward vocabulary without flourishes, that solves problems and accepts challenges.
          <br/><br/>
          If you program create <em>new worlds</em>, that they are - at least - from <em>another dimension</em>.</Text>
      </Wrapper>
    </AboutUsWrapper>
  )

export default AboutUs
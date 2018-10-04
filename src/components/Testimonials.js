import React from 'react'
import styled from 'styled-components'

import Title from './Title'
import Wrapper from './Wrapper'
import HGroup from './HGroup'
import Testimonial from './Testimonial'

import pamPhoto from '../img/testimonials/pam.jpg'
import zuraPhoto from '../img/testimonials/ky-js.jpg'
import imadPhoto from '../img/testimonials/imad.jpg'

const TestimonialsWrapper = styled.section`
  align-items: center;
  background-color: #000;
  display: flex;
  padding: 80px 0;
`

const TestimonialsList = styled(HGroup)`
  @media (max-width: 960px) {
    flex-direction: column;
  }
`

const Testimonials = () => (
  <TestimonialsWrapper>
    <Wrapper alignItems="center">
      <Title align="center" transform="uppercase" marginBottom="50px" withStripe={true}>
        WHAT OUR CUSTOMERS SAY ABOUT US
      </Title>
      <TestimonialsList>
        <Testimonial
          key="https://lion-tax.com/"
          name="Pamela Borges"
          company="Lion Tax"
          quote="Astrocoders reminds me fast response and awesome solutions"
          link="https://lion-tax.com/"
          photo={pamPhoto}
        />
        <Testimonial
          key="https://zurahealth.com/"
          name="Kylie and Jess McBeath"
          company="Zura Health"
          quote="Astrocoders helps us to transform ideas in reality"
          link="https://zurahealth.com/"
          photo={zuraPhoto}
        />
        <Testimonial
          key="https://fractalflows.com/"
          name="Imad Abdallah"
          company="Fractal Flows"
          quote="Work with Astrocoders means quality and fast development of our needs"
          link="https://fractalflows.com/"
          photo={imadPhoto}
        />
      </TestimonialsList>
    </Wrapper>
  </TestimonialsWrapper>
)

export default Testimonials

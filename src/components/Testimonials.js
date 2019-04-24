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
      <Title value="WHAT OUR CUSTOMERS SAY ABOUT US" align="center" transform="uppercase" withStripe={true} />
      <TestimonialsList>
        <Testimonial
          key="https://lion.tax/"
          name="Pamela Borges"
          company="Lion Tax"
          quote="Astrocoders is our partner that providers high quality software  and solutions for our tax platform"
          link="https://lion.tax/"
          photo={pamPhoto}
        />
        <Testimonial
          key="https://zurahealth.com/"
          name="Kylie and Jess McBeath"
          company="Zura Health"
          quote="Astrocoders made our custom  payment flow works like a breeze"
          link="https://zurahealth.com/"
          photo={zuraPhoto}
        />
        <Testimonial
          key="https://fractalflows.com/"
          name="Imad Abdallah"
          company="Fractal Flows"
          quote="Astrocoders has been key for us to discover how to monetize using crypto"
          link="https://fractalflows.com/"
          photo={imadPhoto}
        />
      </TestimonialsList>
    </Wrapper>
  </TestimonialsWrapper>
)

export default Testimonials

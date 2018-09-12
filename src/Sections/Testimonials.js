import React from 'react'
import styled from 'styled-components'
import Title from '../components/Title'
import Wrapper from '../components/Wrapper'
import HGroup from '../components/HGroup'
import Testimonial from '../components/Testimonial'

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

const Testimonials = ({ testimonials }) => (
  <TestimonialsWrapper>
    <Wrapper alignItems="center">
      <Title textAlign="center" textTransform="uppercase" marginBottom="50px">what our customers say about us</Title>
      <TestimonialsList>
        {
          testimonials.map(testimonial => (
            <Testimonial key={testimonial.link} {...testimonial} />
          ))
        }
      </TestimonialsList>
      </Wrapper>
    </TestimonialsWrapper>
  )

export default Testimonials
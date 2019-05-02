import React from 'react'
import styled from 'styled-components'
import { FormattedMessage, injectIntl } from 'gatsby-plugin-intl'

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

const Testimonials = ({ intl }) => (
  <TestimonialsWrapper>
    <Wrapper alignItems="center">
      <Title align="center" transform="uppercase" withStripe={true}>
        <FormattedMessage id="whatOurCustomersSay" />
      </Title>
      <TestimonialsList>
        <Testimonial
          key="https://lion.tax/"
          name="Pamela Borges"
          company="Lion Tax"
          quote={intl.formatMessage({ id: 'quote1' })}
          link="https://lion.tax/"
          photo={pamPhoto}
        />
        <Testimonial
          key="https://zurahealth.com/"
          name="Kylie and Jess McBeath"
          company="Zura Health"
          quote={intl.formatMessage({ id: 'quote2' })}
          link="https://zurahealth.com/"
          photo={zuraPhoto}
        />
        <Testimonial
          key="https://fractalflows.com/"
          name="Imad Abdallah"
          company="Fractal Flows"
          quote={intl.formatMessage({ id: 'quote3' })}
          link="https://fractalflows.com/"
          photo={imadPhoto}
        />
      </TestimonialsList>
    </Wrapper>
  </TestimonialsWrapper>
)

export default injectIntl(Testimonials)

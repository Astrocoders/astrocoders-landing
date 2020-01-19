import React from 'react'
import styled from 'styled-components'
import { FormattedMessage, injectIntl } from 'gatsby-plugin-intl'

import Wrapper from './Wrapper'
import Title from './Title'
import FormField from './FormField'
import Textarea from './Textarea'
import Button from './Button'

import footerBg from '../img/launching.jpg'
import HGroup from './HGroup'

const HireUsWrapper = styled.section`
  align-items: center;
  background-color: #000;
  background-image: url(${footerBg});
  background-position: left center;
  background-repeat: no-repeat;
  background-size: cover;
  clear: both;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  margin-top: 20px;
  min-height: 700px;
  width: 100%;
`

const FormWrapper = styled.div`
  display: block;
  clear: both;
  width: 100%;

  @media (max-width: 960px) {
    margin-bottom: 100px;
    width: 100%;
  }
`

function HireUsForm({ intl }) {
  return (
    <scroll-page id="hireUs">
      <HireUsWrapper>
        <Title align="center" transform="uppercase" withStripe>
          <FormattedMessage id="contact" />
        </Title>
        <Wrapper alignItems="flex-end">
          <FormWrapper>
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              action="/thank-you"
            >
              <div>
                <HGroup columnOnMobile>
                  <FormField
                    label={intl.formatMessage({ id: 'name' })}
                    name="name"
                    placeholder="John Doe"
                    required="required"
                  />
                  <FormField
                    label={intl.formatMessage({ id: 'email' })}
                    name="email"
                    placeholder="email@provider.co"
                    required="required"
                  />
                </HGroup>
                <Textarea
                  name="message"
                  label={intl.formatMessage({ id: 'subject' })}
                  placeholder={intl.formatMessage({ id: 'subjectPlaceholder' })}
                  required="required"
                />
              </div>

              <Button marginLeft="10px" alignSelf="flex-end">
                {intl.formatMessage({ id: 'send' })}
              </Button>
            </form>
          </FormWrapper>
        </Wrapper>
      </HireUsWrapper>
    </scroll-page>
  )
}

const HireUs = injectIntl(HireUsForm)

export default HireUs

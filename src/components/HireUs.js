import React from 'react'
import { withState, withProps } from 'recompose'
import compose from 'recompose/compose'
import styled from 'styled-components'
import { stripIndent } from 'common-tags'
import { FormattedMessage, injectIntl } from 'gatsby-plugin-intl'

import Wrapper from './Wrapper'
import Text from './Text'
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
  margin-top: 100px;
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

function HireUsForm({ intl, isSending, handleSubmit }) {
  return (
    <scroll-page id="hireUs">
      <HireUsWrapper>
        <Title align="center" transform="uppercase" withStripe={true}>
          <FormattedMessage id="contact" />
        </Title>
        <Wrapper alignItems="flex-end">
          <FormWrapper>
            <form id="hireUsForm" className="validate" onSubmit={handleSubmit}>
              {!isSending ? (
                <div>
                  <HGroup columnOnMobile={true}>
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
                    name="subject"
                    label={intl.formatMessage({ id: 'subject' })}
                    placeholder={intl.formatMessage({ id: 'subjectPlaceholder' })}
                    required="required"
                  />
                </div>
              ) : (
                <Wrapper marginBottom="50px" alignItems="center">
                  <Text>
                    <FormattedMessage id="formThanks" />
                  </Text>
                </Wrapper>
              )}
              <Button disabled={isSending} marginLeft="10px" alignSelf="flex-end">
                {isSending ? intl.formatMessage({ id: 'sent' }) : intl.formatMessage({ id: 'send' })}
              </Button>
            </form>
          </FormWrapper>
        </Wrapper>
      </HireUsWrapper>
    </scroll-page>
  )
}

const HireUs = injectIntl(HireUsForm)

export default compose(
  withState('isSending', 'setIsSending', false),
  withProps(props => ({
    handleSubmit(event) {
      event.preventDefault()
      props.setIsSending(true)
      const form = (formData => {
        const obj = {}
        for (const [key, value] of formData) {
          obj[key] = value
        }
        return obj
      })(new FormData(event.target))
      fetch('https://server.astrocoders.com/graphql', {
        method: 'POST',
        headers: {
          Accept: '*/*',
          'Content-type': 'application/json',
        },
        body: JSON.stringify({
          query: stripIndent`
            mutation {
              SendEmailToAstro(
                name: "${form.name}",
                email: "${form.email}",
                subject: "${form.subject}"
              ) {
                success
              }
            }
        `,
        }),
      }).catch(err => props.isSending(false))
    },
  })),
)(HireUs)

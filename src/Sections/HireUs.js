import React from 'react'
import { withState, withProps } from 'recompose'
import compose from 'recompose/compose'
import styled from 'styled-components'
import { stripIndent } from 'common-tags'
import { FormattedMessage } from 'react-intl'

import Wrapper from '../components/Wrapper'
import Title from '../components/Title'
import FormField from '../components/FormField'
import Textarea from '../components/Textarea'
import Button from '../components/Button'

import footerBg from '../img/launching.jpg'
import HGroup from '../components/HGroup'

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
  min-height: 700px;
  padding-left: 7.5vw;
  padding-right: 7.5vw;
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

function HireUs({ isSending, handleSubmit }) {
  return (
    <HireUsWrapper id="hireUs">
      <Title marginBottom="100px" transform="uppercase" withStripe={true}>
        <FormattedMessage id="hireUs" />
      </Title>
      <Wrapper alignItems="flex-end">
        <FormWrapper>
          <form id="hireUsForm" className="validate" onSubmit={handleSubmit}>
            {!isSending && [
              <HGroup columnOnMobile={true}>
                <FormField label="Name" name="name" placeholder="John Doe" required="required" />
                <FormField label="Email" name="email" placeholder="email@provider.co" required="required" />
              </HGroup>,
              <Textarea
                name="subject"
                label="Your Message"
                placeholder="What do you want to build? How much is your budget?"
                required="required"
              />,
            ]}
            <Button disabled={isSending} marginLeft="10px" alignSelf="flex-end">
              {isSending ? 'Sent' : 'Send'}
            </Button>
          </form>
        </FormWrapper>
      </Wrapper>
    </HireUsWrapper>
  )
}

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

import React from 'react'
import { withState, withProps } from 'recompose'
import compose from 'recompose/compose'
import styled from 'styled-components'
import { stripIndent } from 'common-tags'

import {FormattedMessage} from 'react-intl'

import Wrapper from '../components/Wrapper'
import Title from '../components/Title'
import FormField    from '../components/FormField'
import Textarea from '../components/Textarea'
import Button from '../components/Button'

import footerBg from '../img/galaxy-footer.jpg'

const HireUsWrapper = styled.section`
  align-items: center;
  background-color: #000;
  background-image: url(${footerBg});
  background-repeat: no-repeat;
  background-position: left center;
  clear:both;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  padding-left: 7.5vw;
  padding-right: 7.5vw;
  width: 100%;
`

const FormWrapper = styled.div`
  display: block;
  clear: both;
  width: 50%;

  @media (max-width: 960px) {
    margin-bottom: 100px;
    width: 100%;
  }
`

function HireUs({ isSending, handleSubmit }) {

  return (
    <HireUsWrapper>
      <Title marginBottom="100px" textTransform="uppercase"><FormattedMessage id="hireUs" /></Title>
      <Wrapper alignItems="flex-end">
        <FormWrapper>
          <form id="hireUsForm" className="validate" onSubmit={handleSubmit}>
            {
              !isSending && [
                <FormField label="Name" name="name" placeholder="John Doe" required="required" />,
                <FormField label="Email" name="email" placeholder="email@provider.co" required="required" />,
                <Textarea
                  name="subject"
                  label="Your Message"
                  placeholder="What do you want to build? How much is your budget?"
                  required="required"
                />,
              ]
            }
            <Button data-txt-hover="Yes. I want the best." disabled={isSending}>
              {isSending ? 'Sent' : 'Send'}
            </Button>
          </form>
        </FormWrapper>
      </Wrapper>
      <Title marginTop="50px" textTransform="uppercase" textAlign="center"><FormattedMessage id="hireUsCta" /></Title>
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
      })
        .catch(err => props.isSending(false))
    },
  })),
)(HireUs)

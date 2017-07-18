import React from 'react'
import { withState, withProps } from 'recompose'
import compose from 'recompose/compose'
import isMobile from 'ismobilejs'
import VisibilitySensor from 'react-visibility-sensor'
import { stripIndent } from 'common-tags'

import shuttleVideoBg from './shuttle_launch_bg.mp4'

function HireUs({ isSending, handleSubmit }) {
  let video = null

  return (
    <div id="contact-wrapper" className={isMobile.any ? 'mobile' : null}>
      <div id="hire-us-video" className="contact-item">
        <video muted ref={ref => (video = ref)}>
          <source src={shuttleVideoBg} type="video/mp4" />
        </video>
      </div>
      <article id="contact" className="padding-top contact-item">
        <div className="content">
          <h1>Hire Us</h1>
          <div className="hire-us-form-container">
            <VisibilitySensor onChange={isVisible => (isVisible && video ? video.play() : video && video.pause())} />
            <form id="hireUsForm" className="validate" onSubmit={handleSubmit}>
              <input name="name" placeholder="Name" required="required" />
              <input name="email" placeholder="Email" required="required" />
              <textarea
                name="subject"
                placeholder="What do you want to build? How much is your budget?"
                required="required"
              />
              <button data-txt-hover="Yes. I want the best." disabled={isSending}>
                {!isSending ? 'Send' : 'Sent'}
              </button>
            </form>
          </div>
        </div>
      </article>
    </div>
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
      fetch('http://localhost:9000/graphql', {
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
        .then(() => props.setIsSending(true))
        .catch(err => console.log(err))
    },
  })),
)(HireUs)

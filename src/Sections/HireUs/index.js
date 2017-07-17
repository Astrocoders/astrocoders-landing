import React from 'react'
import { withState, withProps } from 'recompose'
import compose from 'recompose/compose'
import isMobile from 'ismobilejs'
import VisibilitySensor from 'react-visibility-sensor'

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
      fetch('https://astromail.astrocoders.com/mail', {
        method: 'POST',
        body: new FormData(event.target),
      })
      .then(() => props.setIsSending(true))
      .catch(err => console.log(err))
    },
  })),
)(HireUs)

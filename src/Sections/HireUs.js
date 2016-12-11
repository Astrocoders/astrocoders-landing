import React from 'react'
import withState from 'recompose/withState'

const onSubmit = (e, setIsSending) => {
  const form = e.currentTarget
  e.preventDefault()
  const postURL = "https://astromail.astrocoders.com/mail/kAGu38vSsJe4i546T";

  debugger
  fetch(postURL, {
    body: new FormData(form),
    method: 'POST',
    headers: {
      'Content-type': 'application/x-www-form-urlencoded',
    },
  })
  .then(r => {
    console.log('R', r.text())
  })
  .catch(r => {
    setIsSending(false)
    console.log(r)
  })
}

function HireUs({ isSending, setIsSending }){
  return (
    <div id="contact-wrapper">
      <div id="ytplayer" className="contact-item"></div>
      <article id="contact" className="padding-top contact-item">
        <div className="content">
          <h1>Hire Us</h1>
          <div className="hire-us-form-container">
            <form
              id="hireUsForm"
              target="_blank"
              className="validate"
              onSubmit={e => {
                setIsSending(true)
                onSubmit(e, setIsSending)
              }}
            >
              <input name="name" placeholder="Name" required="required"/>
              <input name="email" placeholder="Email" required="required"/>
              <textarea
                name="subject"
                placeholder="What do you want to build ? How much is your budget?"
                required="required"
              >
              </textarea>
              <button
                data-txt-hover="Yes. I want the best."
                disabled={isSending}
              >
                {!isSending ? 'Send' : 'Sending...'}
              </button>
            </form>
          </div>
        </div>
      </article>
    </div>
  )
}

export default withState('isSending', 'setIsSending', false)(HireUs)

import React from 'react'

export default function HireUs(props){
  let form = null
  const onSubmit = () => {
    const postURL = "https://astromail.astrocoders.com/mail/kAGu38vSsJe4i546T";
    document.domain = 'astrocoders.com';

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
      console.log(r)
    })
  }

  return (
    <div id="contact-wrapper">
      <div id="ytplayer" className="contact-item"></div>
      <article id="contact" className="padding-top contact-item">
        <div className="content">
          <h1>Hire Us</h1>
          <div className="hire-us-form-container">
            <form
              ref={(ref) => form = ref}
              id="hireUsForm"
              target="_blank"
              className="validate"
              onSubmit={onSubmit}
            >
              <input name="name" placeholder="Name" required="required"/>
              <input name="email" placeholder="Email" required="required"/>
              <textarea name="subject" placeholder="What do you want to build ? How much is your budget?" required="required"></textarea>
              <button data-txt-hover="Yes. I want the best.">Send</button>
            </form>
          </div>
        </div>
      </article>
    </div>
  )
}

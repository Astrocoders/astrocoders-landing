import React from 'react'

const Testimonial = ({ name, from, quote, link, photo }) => (
  <div className="flex-grid-item text-center">
    <img src={photo} alt="Astrocoders Testimonials Person" />
    <h2>{name}</h2>
    <a href={link} target="_blank" alt={from}>
      <small>{from}</small>
      <p><span>{quote}</span></p>
    </a>
  </div>
)

export default function Testimonials({ testimonials }){
  return (
    <div id="testimonials-wrapper" className="article-wrapper">
      <h1>Testimonials</h1>
      <article id="testimonials">
        <div className="flex-grid flex-grid-center">
          {
            testimonials.map(testimonial => (
              <Testimonial key={testimonial.link} {...testimonial} />
            ))
          }
        </div>
      </article>
    </div>
  )
}

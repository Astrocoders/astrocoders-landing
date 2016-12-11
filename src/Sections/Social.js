import React from 'react'

const SocialLink = ({ name }) => (
  <div className="flex-grid-item text-center">
    <h1>{name}</h1>
  </div>
)

export default function Social({ socialLinks }){
  return (
    <div className="article-wrapper">
      <h1>Stay with us</h1>
      <article id="stay-with-us">
        <div className="flex-grid flex-grid-center">
          {
            socialLinks.map(socialLink => <SocialLink {...socialLink} />)
          }
        </div>
      </article>
    </div>
  )
}

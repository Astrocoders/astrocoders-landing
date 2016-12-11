import React from 'react'

export default function Services(props){
  return (
    <div id="services-article" className="article-wrapper">
      <h1>What we do</h1>
      <article id="services">
        <div className="flex-grid flex-grid-center">
          <div className="flex-grid-item">
            <div className="service mobile-apps"></div>
            <h3>Mobile Apps</h3>
            <p>We develop apps for Android and iOS.</p>
          </div>
          <div className="flex-grid-item">
            <div className="service web-apps"></div>
            <h3>Web Apps</h3>
            <p>We develop blazing fast and reactive web applications.</p>
          </div>
          <div className="flex-grid-item">
            <div className="service both-apps"></div>
            <h3>Both</h3>
            <p>Why just pick one when you can have both?</p>
          </div>
        </div>
      </article>
    </div>
  )
}

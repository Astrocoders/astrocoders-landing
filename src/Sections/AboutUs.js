import React from 'react'

export default function AboutUs(){
  return (
    <div id="team-wrapper" className="article-wrapper">
      <h1>Team</h1>
      <article id="aboutus" className="about_us padding-top">
        <div className="flex-grid">
          <div className="flex-grid-item padding">
            <img src="/images/about_us/guilherme.jpg" alt="Guilheme Decampo" className="max-width"/>
            <h2>Guilherme Decampo</h2>
            <p>Head of Business Development</p>
          </div>
          <div className="flex-grid-item padding">
            <img src="/images/about_us/yuri.jpg" alt="Yuri Fabris" className="max-width"/>
            <h2>Yuri Fabris</h2>
            <p>Fullstack JavaScript Developer</p>
          </div>
          <div className="flex-grid-item padding">
            <img src="/images/about_us/gabriel.jpg" alt="Gabriel Rubens" className="max-width"/>
            <h2>Gabriel Rubens</h2>
            <p>Head of Research and Development</p>
          </div>
          <div className="flex-grid-item padding">
            <img src="/images/about_us/jabur.jpg" alt="Guilherme Jabur" className="max-width"/>
            <h2>Guilherme Jabur</h2>
            <p>Fullstack JavaScript Developer</p>
          </div>
          <div className="flex-grid-item padding">
            <img src="/images/about_us/george.jpg" alt="Judson Silva" className="max-width"/>
            <h2>George Lima</h2>
            <p>Fullstack JavaScript Developer</p>
          </div>
          <div className="flex-grid-item padding">
            <img src="/images/about_us/max.jpg" alt="Max Josino" className="max-width"/>
            <h2>Max Josino</h2>
            <p>Designer UX/UI</p>
          </div>
        </div>
      </article>
    </div>
  )
}

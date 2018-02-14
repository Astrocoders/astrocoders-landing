import React from 'react'

const Project = ({ image, title, subtitle, href, targetLink, backgroundColor }) => (
  <a
    href={href}
    target={targetLink}
    className="flex-grid-item flex-grid-center text-center"
    style={{ backgroundColor }}
  >
    <img src={image} alt={title}/>
    <h1>{title}</h1>
    <p>{subtitle}</p>
  </a>
)

export default function Projects({ projects }){
  return (
    <div id="projects-wrapper" className="article-wrapper padding-top">
      <h1>Our Projects</h1>
      <article id="projects">
        <div className="flex-grid">
          {
            projects.map(project => <Project key={project.href} {...project} />)
          }
        </div>
      </article>
    </div>
  )
}

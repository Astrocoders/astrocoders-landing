import React from 'react'

const Project = ({ image, title, subtitle, href, targetLink }) => (
  <a
    href={href}
    target={targetLink}
    className="flex-grid-item text-center"
  >
    <img src={image} />
    <h1>{title}</h1>
    <p>{subtitle}</p>
  </a>
)

export default function Projects({ projects }){
  return (
    <div id="projects-wrapper" className="article-wrapper padding-top">
      <h1>Our Projects</h1>
      <article id="projects">
        <div className="flex-grid flex-grid-no-wrap">
          {
            projects.map(project => <Project key={project.href} {...project} />)
          }
        </div>
      </article>
    </div>
  )
}

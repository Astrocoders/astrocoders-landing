import React from 'react'

export default function OurStack(props){
  return (
    <div id="our-stack-wrapper" className="article-wrapper">
      <h1>Our Stack
      </h1>
      <article id="our-stack">
        <div className="flex flex-column">
          <div className="flex-only">
            <div className="flex-grid-item padding text-center">
              <div className="stack-logo">
                <img src="/images/stack/meteor-partner.png" alt="Meteor" />
              </div>
              <h4>Meteor
              </h4>
            </div>
            <div className="flex-grid-item padding text-center">
              <div className="stack-logo">
                <img src="/images/stack/mongodb.png" alt="MongoDB" />
              </div>
              <h4>MongoDB
              </h4>
            </div>
            <div className="flex-grid-item padding text-center">
              <div className="stack-logo">
                <img src="/images/stack/react.png" alt="React" />
              </div>
              <h4>React
              </h4>
            </div>
            <div className="flex-grid-item padding text-center">
              <div className="stack-logo">
                <img src="/images/stack/apollo.png" alt="Apollo" />
              </div>
              <h4>Apollo
              </h4>
            </div>
            <div className="flex-grid-item padding text-center">
              <div className="stack-logo">
                <img src="/images/stack/react-native.png" alt="React Native" />
              </div>
              <h4>React Native
              </h4>
            </div>
          </div>
          <div className="flex-only">
            <div className="flex-grid-item padding text-center">
              <div className="stack-logo">
                <img src="/images/stack/redux.png" alt="Redux" />
              </div>
              <h4>Redux
              </h4>
            </div>
            <div className="flex-grid-item padding text-center">
              <div className="stack-logo">
                <img src="/images/stack/webpack.png" alt="Webpack" />
              </div>
              <h4>Webpack
              </h4>
            </div>
            <div className="flex-grid-item padding text-center">
              <div className="stack-logo">
                <img src="/images/stack/graphql.svg" alt="Graphql" />
              </div>
              <h4>GraphQL
              </h4>
            </div>
            <div className="flex-grid-item padding text-center">
              <div className="stack-logo">
                <img src="/images/stack/re.png" alt="Reason" />
              </div>
              <h4>Reason
              </h4>
            </div>
            <div className="flex-grid-item padding text-center">
              <div className="stack-logo">
                <img src="/images/stack/styled.png" alt="Styled Components" />
              </div>
              <h4>Styled Components
              </h4>
            </div>
          </div>
          <div className="text-center">
            <p>
              At Astrocoders we develop the most modern and beautiful applications at a fast pace. We use the most appropriate frameworks to help us build with quality and not compromising our ability to deliver in a short period of time.
            </p>
          </div>
          <a href="#contact-wrapper" className="hire-us">Hire us
          </a>
        </div>
      </article>
    </div>
  )
}

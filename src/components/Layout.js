import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import './Layout.css'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query Layout {
        site {
          siteMetadata {
            description
            keywords
            author
            nameGoogle
            descriptionGoogle
            imageGoogle
            cardTwitter
            siteTwitter
            creatorTwitter
            titleTwitter
            descriptionTwitter
            imageTwitter
            titleFacebook
            typeFacebook
            urlFacebook
            descriptionFacebook
            imageFacebook
            siteNameFacebook
          }
        }
      }
    `}
    render={data => (
      <main>
        <Helmet
          title={data.title}
          meta={[
            { name: 'description', content: data.description },
            { name: 'keywords', content: data.keywords },
            { name: 'author', content: data.author },

            { itemprop: 'name', content: data.nameGoogle },
            { itemprop: 'description', content: data.descriptionGoogle },
            { itemprop: 'image', content: data.imageGoogle },

            { name: 'twitter:card', content: data.cardTwitter },
            { name: 'twitter:site', content: data.siteTwitter },
            { name: 'twitter:creator', content: data.creatorTwitter },
            { name: 'twitter:title', content: data.titleTwitter },
            { name: 'twitter:description', content: data.descriptionTwitter },
            { name: 'twitter:image', content: data.imageTwitter },

            { property: 'og:title', content: data.titleFacebook },
            { property: 'og:type', content: data.typeFacebook },
            { property: 'og:url', content: data.urlFacebook },
            { property: 'og:description', content: data.descriptionFacebook },
            { property: 'og:image', content: data.imageFacebook },
            { property: 'og:site_name', content: data.siteNameFacebook },
            { property: 'og:app_id', content: data.appIdFacebook },

            {
              name: 'viewport',
              content: 'width=device-width, maximum-scale=1',
            },
          ]}
          link={[
            {
              href: 'https://fonts.googleapis.com/css?family=Ubuntu:300,400,700',
              rel: 'stylesheet',
            },
            {
              href: 'https://fonts.googleapis.com/css?family=Open+Sans',
              rel: 'stylesheet',
            },
            {
              href: 'https://fonts.googleapis.com/css?family=Roboto:300,400',
              rel: 'stylesheet',
            },
          ]}
        />
        {children}
      </main>
    )}
  />
)

export default Layout

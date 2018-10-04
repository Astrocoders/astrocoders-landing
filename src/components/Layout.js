import React from 'react'
import { Helmet } from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query Layout {
        site {
          siteMetadata {
            title
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
    render={({ site: { siteMetadata: data } }) => (
      <main>
        <Helmet>
          <title>{data.title}</title>
          <meta name="keywords" content={data.keywords} />
          <meta name="author" content={data.author} />

          <meta name="name" content={data.nameGoogle} />
          <meta name="description" content={data.descriptionGoogle} />
          <meta name="image" content={data.imageGoogle} />

          <meta name="twitter:card" content={data.cardTwitter} />
          <meta name="twitter:site" content={data.siteTwitter} />
          <meta name="twitter:creator" content={data.creatorTwitter} />
          <meta name="twitter:title" content={data.titleTwitter} />
          <meta name="twitter:description" content={data.descriptionTwitter} />
          <meta name="twitter:image" content={data.imageTwitter} />

          <meta name="og:title" content={data.titleFacebook} />
          <meta name="og:type" content={data.typeFacebook} />
          <meta name="og:url" content={data.urlFacebook} />
          <meta name="og:description" content={data.descriptionFacebook} />
          <meta name="og:image" content={data.imageFacebook} />
          <meta name="og:site_name" content={data.siteNameFacebook} />
          <meta name="og:app_id" content={data.appIdFacebook} />

          <meta name="viewport" content="width=device-width, maximum-scale=1" />
        </Helmet>
        {children}
      </main>
    )}
  />
)

export default Layout

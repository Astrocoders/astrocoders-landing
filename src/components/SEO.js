import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

function SEO({ title, description }) {
  const { site } = useStaticQuery(
    graphql`
      query {
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
    `,
  )

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="keywords" content={site.siteMetadata.keywords} />
      <meta name="author" content={site.siteMetadata.author} />

      <meta name="name" property="og:title" content={site.siteMetadata.nameGoogle} />
      <meta name="description" property="og:description" content={description || site.siteMetadata.descriptionGoogle} />
      <meta name="image" property="og:image" content={site.siteMetadata.imageGoogle} />

      <meta name="twitter:card" content={site.siteMetadata.cardTwitter} />
      <meta name="twitter:site" content={site.siteMetadata.siteTwitter} />
      <meta name="twitter:creator" content={site.siteMetadata.creatorTwitter} />
      <meta name="twitter:title" content={site.siteMetadata.titleTwitter} />
      <meta name="twitter:description" content={site.siteMetadata.descriptionTwitter} />
      <meta name="twitter:image" content={site.siteMetadata.imageTwitter} />

      <meta name="og:title" content={site.siteMetadata.titleFacebook} />
      <meta name="og:type" content={site.siteMetadata.typeFacebook} />
      <meta name="og:url" content={site.siteMetadata.urlFacebook} />
      <meta name="og:description" content={site.siteMetadata.descriptionFacebook} />
      <meta name="og:image" content={site.siteMetadata.imageFacebook} />
      <meta name="og:site_name" content={site.siteMetadata.siteNameFacebook} />
      <meta name="og:app_id" content={site.siteMetadata.appIdFacebook} />

      <meta name="viewport" content="width=device-width, maximum-scale=1" />
    </Helmet>
  )
}

SEO.defaultProps = {
  lang: `en`,
}

SEO.propTypes = {
  lang: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
}

export default SEO

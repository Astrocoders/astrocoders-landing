import React from 'react'
import Helmet from 'react-helmet'

import './index.css'
import data from '../data.json'

const DefaultLayout = ({ children }) => (
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
        { property: 'og:site_name', content: data.site_nameFacebook },
        { property: 'og:type', content: data.typeFacebook },
        { property: 'og:url', content: data.urlFacebook },
        { property: 'og:description', content: data.descriptionFacebook },
        { property: 'og:image', content: data.imageFacebook },
        { property: 'og:site_name', content: data.site_nameFacebook },
        { property: 'og:app_id', content: data.app_idFacebook },

        { name: 'viewport', content: 'width=device-width, maximum-scale=1' },
        { name: 'apple-itunes-app', content: 'app-id=885856031' },
      ]}
      link={[
        { href: 'https://fonts.googleapis.com/css?family=Ubuntu:300,400,700', rel: 'stylesheet' },
        { href: 'https://fonts.googleapis.com/css?family=Open+Sans', rel: 'stylesheet' },
        { href: 'https://fonts.googleapis.com/css?family=Roboto:300,400', rel: 'stylesheet' },
      ]}
    />
    {children()}
  </main>
)

export default DefaultLayout

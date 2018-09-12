import React from 'react'
import Helmet from 'react-helmet'
import data from './data.json'
import 'normalize.css/normalize.css'
import './Styles/app.styl'

import Header from './Header'

import Hero from './Sections/Hero'
import AboutUs from './Sections/AboutUs'
import HireUs from './Sections/HireUs'
import OurStack from './Sections/OurStack'
import Footer from './Sections/Footer'
import Services from './Sections/Services'
import Testimonials from './Sections/Testimonials'

function App(){
  return (
    <section>
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
          { href: 'https://fonts.googleapis.com/css?family=Open+Sans', rel: 'stylesheet' },
          { href: 'https://fonts.googleapis.com/css?family=Ubuntu:300,400,700', rel: 'stylesheet' },
          { href: 'https://fonts.googleapis.com/css?family=Roboto:300,400', rel: 'stylesheet' },
        ]}
      />

      <Header/>
      <Hero {...data} />
      <OurStack {...data} />
      <AboutUs {...data} />
      <Testimonials {...data} />
      <HireUs {...data} />
      <Footer />
    </section>
  )
}

export default App;

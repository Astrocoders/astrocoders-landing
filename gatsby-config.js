module.exports = {
  siteMetadata: {
    title: 'Astrocoders - Go Beyond',
    description:
      'Astrocoders desenvolve aplicativos mobile e web, sistemas, plataformas, servidores de integração para o setor financeiro',
    keywords: 'Go Beyond',
    author: 'Astrocoders',
    analytics: 'XXXXXX',
    site: 'astrocoders.com',
    nameGoogle: 'Astrocoders - Go Beyond',
    descriptionGoogle:
      'Astrocoders desenvolve aplicativos mobile e web, sistemas, plataformas, servidores de integração para o setor financeiro',
    imageGoogle: 'https://astrocoders.com/panel.png',
    cardTwitter: 'summary',
    siteTwitter: '@astrocoders',
    creatorTwitter: '@astrocoders',
    titleTwitter: 'Astrocoders - Go Beyond',
    descriptionTwitter:
      'Astrocoders desenvolve aplicativos mobile e web, sistemas, plataformas, servidores de integração para o setor financeiro',
    imageTwitter: 'https://astrocoders.com/panel.png',
    titleFacebook:
      'Astrocoders desenvolve aplicativos mobile e web, sistemas, plataformas, servidores de integração para o setor financeiro',
    siteNameFacebook: 'Astrocoders',
    typeFacebook: 'website',
    urlFacebook: 'https://astrocoders.com/',
    descriptionFacebook:
      'Astrocoders desenvolve aplicativos mobile e web, sistemas, plataformas, servidores de integração para o setor financeiro',
    imageFacebook: 'https://astrocoders.com/panel.png',
    appIdFacebook: 'XXXXXXXXXXX',
    hireUsFormAction: 'https://astromail.astrocoders.com/mail/kAGu38vSsJe4i546T',
  },
  plugins: [
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Astrocoders',
        short_name: 'Astrocoders',
        description: 'Go Beyond.',
        start_url: 'http://astrocoders.com',
        background_color: '#000',
        theme_color: '#835FE2',
        display: 'minimal-ui',
        icon: 'src/img/logo.png',
      },
    },
    {
      resolve: `gatsby-plugin-intl`,
      options: {
        path: `${__dirname}/src/i18n`,
        languages: [`en`, `br`, `es`, `zh`, `ru`],
        defaultLanguage: `en`,
        redirect: true,
        redirectComponent: require.resolve(`${__dirname}/src/components/Redirect.js`),
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `#835FE2`,
        showSpinner: true,
      },
    },
    {
      resolve: 'gatsby-plugin-drift',
      options: {
        appId: 'bkbfytvikwtr',
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-122635460-1',
        sampleRate: 5,
        siteSpeedSampleRate: 10,
        cookieDomain: 'astrocoders.com',
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: 'Ubuntu',
          },
          {
            family: 'Open Sans',
            variants: ['300', '700'],
          },
          {
            family: 'Roboto',
            variants: ['300', '400'],
          },
          {
            family: 'Montserrat',
            variants: ['300', '700', '900'],
          },
        ],
      },
    },
  ],
}

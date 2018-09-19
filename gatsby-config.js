module.exports = {
  siteMetadata: {
    title: 'Astrocoders',
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
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `#835FE2`,
        showSpinner: true,
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
  ],
}

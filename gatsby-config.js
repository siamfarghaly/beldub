/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Beldub: Dub & Soundsystem Culture Belgium`,
    description: `BelDub created a platform that brings you reports of everything dubbing in Belgium. It's the sequel to a documentary on Belgian soundsystem culture.`,
    author: `@beldubdocu`,
    siteUrl: `https://www.beldub.be/`,
  },
  plugins: [
      {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `https://beldub-api.fly.dev/`,
        queryLimit: 1000, // Default to 100
        collectionTypes: [`soundsystem`, `post`, `eventcalendar`],
      },
    },
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `work sans:200,200i 400, 600, 900`,
        ],
        display: 'swap'
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo-beldub.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-react-leaflet',
      options: {
        linkStyles: true // (default: true) Enable/disable loading stylesheets via CDN
      }
    },
  ],
}

module.exports = {
  siteMetadata: {
    title: ``,
    description: ``,
    author: ``,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `artifacts`,
        path: `${__dirname}/src/artifacts`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-transition-link`,
      options: {
        layout: require.resolve(`./src/components/layout.js`),
      },
    },
    `gatsby-plugin-modal-routing`,
    {
      resolve: `gatsby-plugin-emotion`,
      options: {
        // Accepts all options defined by `babel-plugin-emotion` plugin.
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
        includeNormalize: false,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `kendrick.cc`,
        short_name: `kendrick.cc`,
        start_url: `/`,
        background_color: `#4911ae`,
        theme_color: `#4911ae`,
        display: `minimal-ui`,
        icon: `src/artifacts/kendrick-cc-icon.png`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};

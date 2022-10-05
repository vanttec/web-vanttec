module.exports = {
  siteMetadata: {
    title: `vanttect`,
    siteUrl: `https://www.vanttec.com`
  },
  plugins: [
    {
      resolve: 'gatsby-source-sanity',
      options: {
        "projectId": "9wimysk6",
        "dataset": "production"
      }
    },
    'gatsby-plugin-sass', 
    'gatsby-plugin-image',
    '@chakra-ui/gatsby-plugin',
    'gatsby-plugin-react-helmet',
    "gatsby-plugin-styled-components",
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-offline`,
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/assets/',
      },
      __key: 'images',
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          quality: 100,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        "icon": "src/assets/favicon.png"
      }
    }
  ]
};
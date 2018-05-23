module.exports = {
  siteMetadata: {
    title: 'GCP Blog',
    desc: 'A fake blog for GCP built with GatsbyJS',
  },

  plugins: [
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: 'zrysekyr73wj',
        accessToken:
          'ef57165c847fb1fc47ebee5c1638dd255638dc93dba8472b3ca907df75d112bc',
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'img',
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'img',
        path: `${__dirname}/static/assets`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-transformer-remark',
  ],
};

// pathPrefix: '/levelupgatsby'

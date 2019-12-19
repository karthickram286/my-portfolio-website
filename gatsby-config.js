module.exports = {
  siteMetadata: {
    title: "Karthick Ram Portfolio",
    author: "Karthick Ram",
    description: "My portfolio website powered by gatsby.js"
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#F63399',
        theme_color: '#663399',
        display: 'minimal-ui',
        // icon: 'src/assets/images/website-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline'
  ],
}

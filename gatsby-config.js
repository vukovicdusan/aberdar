/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://www.vladimirmilic.com",
        sitemap: "https://www.vladimirmilic.com/sitemap.xml",
        policy: [{ userAgent: "*", disallow: ["/"] }],
      },
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-TJCTN2WM",
        selfHostedOrigin: "https://load.data.vladimirmilic.com/ns.html",
      },
    },
  ],
}

require("dotenv").config()

module.exports = {
  siteMetadata: {
    siteTitle: "gatsby-starter-shopify",
    siteTitleDefault: "gatsby-starter-shopify by @GatsbyJS",
    siteUrl: "https://shopify-demo.gatsbyjs.com",
    hrefLang: "en",
    siteDescription:
      "A Gatsby starter using the latest Shopify plugin showcasing a store with product overview, individual product pages, and a cart.",
    siteImage: "/default-og-image.jpg",
    twitter: "@gatsbyjs"
  },
  flags: {
    FAST_DEV: true
  },
  plugins: [
    {
      resolve: "gatsby-source-shopify",
      options: {
        password: process.env.c05d478cac6989b2f020d46d7f307d79,
        storeUrl: process.env.m-interior2022.myshopify.com,
        shopifyConnections: ["collections"]
      }
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-gatsby-cloud",
    // Add your Google Analytics ID to the .env file to enable
    // Otherwise, this plugin can be removed
    process.env.GOOGLE_ANALYTICS_ID && {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID
      }
    }
  ].filter(Boolean)
}

const globImporter = require("node-sass-glob-importer")
const { title, trackingId } = require("./config/site")

const contentfulConfig = {
  spaceId: process.env.CONTENTFUL_SPACE_ID || "13ygwdmf0s6j",
  accessToken:
    process.env.CONTENTFUL_ACCESS_TOKEN ||
    "Hmar6xqEqgXgFA2eRrJ_jVYcBQiq_t9DlNkvCjGwkPs",
}

if (process.env.CONTENTFUL_HOST) {
  contentfulConfig.host = process.env.CONTENTFUL_HOST
}

module.exports = {
  siteMetadata: {
    title,
  },
  plugins: [
    "gatsby-transformer-remark",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-contentful",
      options: contentfulConfig,
    },
    {
      resolve: "gatsby-plugin-sass",
      options: {
        importer: globImporter(),
      },
    },
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId,
        head: true,
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: title,
        short_name: title,
        start_url: "/",
        background_color: "#ffffff",
        theme_color: "#ffffff",
        display: "minimal-ui",
        icon: "./static/favicon.png",
      },
    },
    // "gatsby-plugin-offline",
    "gatsby-plugin-page-transitions",
    "gatsby-plugin-react-helmet",
  ],
}

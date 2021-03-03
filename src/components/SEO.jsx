import React from "react"
import { Helmet } from "react-helmet"

export const SEO = ({ titleTemplate, title, description = null, metaData }) => {
  const metaTitle = titleTemplate
    ? titleTemplate
    : `Atomic${title ? ` | ${title}` : ""}`

  return (
    <Helmet
      defer={false}
      htmlAttributes={{ lang: "en" }}
      title={metaTitle}
      titleTemplate={metaTitle}
      meta={[
        {
          name: "description",
          content: description || metaTitle,
        },
        {
          name: "keywords",
          content: "atomic",
        },
        {
          property: "og:title",
          content: metaTitle,
        },
        {
          property: "og:url",
          content: "https://atomic.vc/",
        },
        {
          property: "og:description",
          content: description || metaTitle,
        },
        {
          property: "og:image",
          content: 'https:' + metaData?.image.file.src,
        },
        {
          property: "og:image:width",
          content: "1200",
        },
        {
          property: "og:image:height",
          content: "630",
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: 'twitter:image:src',
          content: 'https:' + metaData?.image.file.src,
        },
        {
          name: `twitter:card`,
          content: `summary_large_image`,
        },
      ]}
    />
  )
}

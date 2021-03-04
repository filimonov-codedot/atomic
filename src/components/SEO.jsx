import React from "react"
import { Helmet } from "react-helmet"

export const SEO = ({ titleTemplate, title, description, keywords, image }) => {
  return (
    <Helmet
      defer={false}
      htmlAttributes={{ lang: "en" }}
      title={title}
      titleTemplate={titleTemplate}
      meta={[
        {
          name: "description",
          content: description,
        },
        {
          name: "keywords",
          content: keywords,
        },
        {
          property: "og:title",
          content: titleTemplate || title,
        },
        {
          property: "og:url",
          content: "https://atomic.vc/",
        },
        {
          property: "og:description",
          content: description,
        },
        {
          property: "og:image",
          content: image,
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
          name: "twitter:image:src",
          content: image,
        },
        {
          name: `twitter:card`,
          content: `summary_large_image`,
        },
      ]}
    />
  )
}

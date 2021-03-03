import React from "react"
import { Helmet } from "react-helmet"

export const SEO = ({ titleTemplate, title, metaData }) => {
  const metaTitle = titleTemplate
    ? titleTemplate
    : `Atomic${title ? ` | ${title}` : ""}`

  return (
    <Helmet
      htmlAttributes={{ lang: "en" }}
      title={metaTitle}
      titleTemplate={metaTitle}
      meta={[
        {
          name: "description",
          content: metaTitle,
        },
        {
          name: "keywords",
          content: "atomic",
        },
        {
          property: "og:url",
          content: "https://atomic.vc"
        },
        {
          property: `og:title`,
          content: metaTitle,
        },
        {
          property: 'og:description',
          content: metaTitle,
        },
        {
          property: 'og:image',
          content: metaData?.image.sizes.src
        },
        {
          property: 'og:image:url',
          content: metaData?.image.sizes.src
        },
        {
          property: 'twitter:image',
          content: metaData?.image.sizes.src
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:title`,
          content: metaTitle,
        },
      ]}
    />
  )
}

import React, { useEffect } from "react"
import { graphql } from "gatsby"

import { Layout } from "../components/Layout"

export default function CCPA({ data }) {
  const {
    site: {
      siteMetadata: { title },
    },
    globalMetaData,
    headerData,
    footerData,
    privacyPage: {
      metaData,
      text: { html },
      tickerDuration,
      tickerData,
    },
  } = data

  useEffect(() => {
    if (typeof document !== "undefined") document.documentElement.scrollTop = 0
  }, [])

  return (
    <Layout
      globalMetaData={globalMetaData}
      metaData={metaData}
      pageTitle="CCPA"
      title={title}
      headerData={headerData}
      tickerDuration={tickerDuration}
      tickerData={tickerData}
      ctaDisplay={false}
      footerData={footerData}
    >
      <div className="ccpa page-content">
        {html && (
          <div
            className="container"
            dangerouslySetInnerHTML={{
              __html: html,
            }}
          />
        )}
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query CCPAQuery {
    site {
      siteMetadata {
        title
      }
    }
    globalMetaData: contentfulGlobalMetaData {
      desc {
        desc
      }
      keywords {
        keywords
      }
      image {
        file {
          src: url
        }
      }
    }
    headerData: contentfulSectionHeader {
      logo {
        file {
          src: url
        }
        alt: title
      }
      logoMobile {
        file {
          src: url
        }
        alt: title
      }
    }
    footerData: contentfulSectionFooter {
      email
      secondEmail
      social {
        icon {
          file {
            src: url
          }
          alt: title
        }
        link
      }
      newsletterTitle
      logo {
        file {
          src: url
        }
        alt: title
      }
      copyright
    }
    privacyPage: contentfulPageCcpa {
      metaData {
        title
        desc {
          desc
        }
        keywords {
          keywords
        }
        image {
          file {
            src: url
          }
        }
      }
      text {
        html: text
      }
      tickerDuration {
        duration
      }
      tickerData: ticker {
        text {
          text
        }
      }
    }
  }
`

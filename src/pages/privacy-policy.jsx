import React, { useEffect } from "react"
import { graphql } from "gatsby"

import { Layout } from "../components/Layout"

export default function PrivacyPolicy({ data }) {
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
      ctaTitle,
      tickerDuration,
      tickerData,
    },
  } = data

  useEffect(() => {
    if (typeof document !== "undefined") document.documentElement.scrollTop = 0
  }, [])

  return (
    <Layout
      headerData={headerData}
      footerData={footerData}
      ctaTitle={ctaTitle}
      ctaType="cta-inner"
      tickerDuration={tickerDuration}
      tickerData={tickerData}
      pageTitle="Privacy Policy"
      title={title}
      globalMetaData={globalMetaData}
      metaData={metaData}
    >
      <div className="privacy-policy page-content">
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
  query PrivacyQuery {
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
    privacyPage: contentfulPagePrivacyPolicy {
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
      ctaTitle
      tickerDuration {
        duration
      }
      tickerData: ticker {
        id
      }
    }
  }
`

import React from 'react'
import { graphql } from 'gatsby'

import { Layout } from '../components/Layout'

export default function PrivacyPolicy ({ data }) {
  const {
    headerData,
    footerData,
    privacyPage: {
      text: { html },
      ctaTitle,
      tickerDuration,
      tickerData
    }
  } = data

  return (
    <Layout
      headerData={headerData}
      footerData={footerData}
      ctaTitle={ctaTitle}
      ctaType="cta-inner"
      tickerDuration={tickerDuration}
      tickerData={tickerData}
      pageTitle="Privacy Policy"
    >
      <div className="privacy-policy page-content">
        {html && <div className="container" dangerouslySetInnerHTML={{
          __html: html
        }}/>}
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query PrivacyQuery {
    headerData: contentfulSectionHeader {
      logo {
        file {
          logoSrc: url
        }
        logoAlt: title
      }
      logoMobile {
        file {
          logoMobileSrc: url
        }
        logoMobileAlt: title
      }
    }
    footerData: contentfulSectionFooter {
      email
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

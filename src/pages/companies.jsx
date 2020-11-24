import React from 'react'
import { graphql } from 'gatsby'

import { Layout } from '../components/Layout'
import { CompanyStealth } from '../components/Companies/CompanyStealth'
import { CompanyMain } from '../components/Companies/CompanyMain'

export default function Companies ({ data }) {
  const {
    headerData,
    footerData,
    companiesPage: {
      mainCompanies,
      stealthCompanies,
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
      pageTitle="Companies"
    >
      <CompanyMain mainCompanies={mainCompanies} />
      <CompanyStealth stealthCompanies={stealthCompanies} />
    </Layout>
  )
}

export const pageQuery = graphql`
  query CompaniesQuery {
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
    companiesPage: contentfulPageCompanies {
      mainCompanies {
        id: contentful_id
        name
        previewImage {
          file {
            src: url
          }
          alt: title
        }
        logoBlack {
          file {
            src: url
          }
          alt: title
        }
        title
        desc {
          text: desc
        }
        investors {
          name
        }
        links {
          link
        }
        images {
          file {
            src: url
          }
          alt: title
        }
      }
      stealthCompanies {
        name
      }
      ctaTitle
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

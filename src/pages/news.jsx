import React, { useState } from "react"
import { graphql } from 'gatsby'

import { Layout } from '../components/Layout'
import { Dropdown } from "../components/Dropdown"
import { NewsItem } from "../components/News/NewsItem"
import { NewsPageLinks } from "../components/News/NewsPageLinks"

export default function News ({ data }) {
  const [selectedCompany, setSelectedCompany] = useState('')
  const {
    headerData,
    footerData,
    newsData: {
      tickerData,
      companies,
      newsSection,
    }
  } = data

  const onCompanyChange = (name) => {
    setSelectedCompany(name)
  }

  return (
    <Layout
      headerData={headerData}
      footerData={footerData}
      tickerData={tickerData}
      ctaType="cta-inner"
      ctaDisplay={false}
      pageTitle="News"
    >
      <div className="news-page">
        <div className="container">
          <div className="news-page-header">
            <NewsPageLinks activeTab="News"/>
            <div className="news-page-select">
              <Dropdown
                data={companies}
                name="companies"
                defaultItem={{ title: 'All companies' }}
                onChange={(name, value) => onCompanyChange(value)}
              />
            </div>
          </div>
          {newsSection.length && (
            <div className="news-page-wrapper">
              {newsSection.filter(({ companyName: { name } }) => {
                return !(selectedCompany && selectedCompany !== name)
              }).map((news, index) =>
                <NewsItem key={index} {...news} />
              )}
            </div>
          )}
        </div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query NewsQuery {
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
    newsData: contentfulPageNews {
      companies: listCompanies {
        title: name
      }
      newsSection {
        image {
          file {
            src: url
          }
          alt: title
        }
        date
        title
        companyName {
          name
          color
        }
        sourceTitle
        sourceLink
      }
      blogSection {
        image {
          file {
            src: url
          }
          alt: title
        }
        title
        date
        shortContent {
          text: shortContent
        }
        fullContent {
          text: fullContent
        }
      }
      tickerData: ticker {
        text {
          text
        }
      }
    }
  }
`

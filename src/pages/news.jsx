import React, { useEffect, useState } from "react"
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
      tickerDuration,
      tickerData,
      companies,
      newsSection,
    }
  } = data

  useEffect(() => {
    if (typeof document !== "undefined")
      document.documentElement.scrollTop = 0;
  }, [])

  const onCompanyChange = (name) => {
    setSelectedCompany(name)
  }

  return (
    <Layout
      headerData={headerData}
      footerData={footerData}
      tickerDuration={tickerDuration}
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
    newsData: contentfulPageNews {
      companies: listCompanies {
        title: name
      }
      newsSection {
        image {
          fluid(maxWidth: 360) {
            ...GatsbyContentfulFluid
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
    }
  }
`

import React, { useState } from "react"
import { graphql } from 'gatsby'

import { Layout } from '../components/Layout'
import { BlogItem } from "../components/Blog/BlogItem"
import { BlogModal } from "../components/Blog/BlogModal"
import { NewsPageLinks } from "../components/News/NewsPageLinks"

export default function News ({ data }) {
  const [modalContent, setModalContent] = useState(false)

  const {
    headerData,
    footerData,
    newsData: {
      tickerDuration,
      tickerData,
      blogSection
    }
  } = data

  const triggerModal = (post) => {
    setModalContent(post)
  }

  return (
    <Layout
      headerData={headerData}
      footerData={footerData}
      tickerDuration={tickerDuration}
      tickerData={tickerData}
      ctaType="cta-inner"
      ctaDisplay={false}
      pageTitle="Blog"
    >
      <div className="news-page">
        <div className="container">
          <div className="news-page-header">
            <NewsPageLinks activeTab="Blog"/>
          </div>
          {blogSection.length && (
            <div className="articles">
              {blogSection.map((item, index) =>
                <BlogItem key={index} {...item} onClickHandler={(post) => triggerModal(post)} />
              )}
              {modalContent && (
                <BlogModal
                  {...modalContent}
                  closeHandler={(post) => triggerModal(post)}
                />
              )}
            </div>
          )}
        </div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogQuery {
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

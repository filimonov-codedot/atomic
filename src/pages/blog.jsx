import React, { useEffect, useState } from "react"
import { graphql, navigate } from "gatsby"

import { Layout } from '../components/Layout'
import { BlogItem } from "../components/Blog/BlogItem"
import { BlogModal } from "../components/Blog/BlogModal"
import { NewsPageLinks } from "../components/News/NewsPageLinks"

export default function News ({ data }) {
  const [modalContent, setModalContent] = useState(null)

  const {
    headerData,
    footerData,
    newsData: {
      tickerDuration,
      tickerData,
      blogSection
    }
  } = data

  useEffect(() => {
    if (typeof window !== "undefined") {
      const hash = window.location.hash
      if (hash) setModalContent(
        blogSection.find(({ slug }) => slug === hash.slice(1)))
    }
  }, [])

  const Modal = () => {
    if (modalContent) {
      navigate(`#${modalContent.slug}`)
      return (
        <BlogModal
          {...modalContent}
          closeHandler={(post) => {
            changeUrlCLose()
            setModalContent(post)
          }}
        />
      )
    }
    return null
  }

  const changeUrlCLose = () => {
    if (typeof window !== "undefined")
      navigate(window.location.pathname)
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
          <Modal />
          {blogSection.length && (
            <div className="articles">
              {blogSection.map((item, index) =>
                <BlogItem
                  key={index}
                  {...item}
                  onClickHandler={(post) => setModalContent(post)}
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
        slug
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

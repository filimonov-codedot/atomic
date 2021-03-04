import React, { useEffect, useState } from "react"
import { graphql, navigate } from "gatsby"

import { Layout } from "../components/Layout"
import { BlogItem } from "../components/Blog/BlogItem"
import { BlogModal } from "../components/Blog/BlogModal"
import { NewsPageLinks } from "../components/News/NewsPageLinks"

export default function News({ data }) {
  const [modalContent, setModalContent] = useState(null)

  const {
    site: { siteMetadata: { title } },
    globalMetaData,
    headerData,
    footerData,
    newsData: {
      metaData, tickerDuration, tickerData, blogSection
    },
  } = data

  useEffect(() => {
    if (typeof window !== "undefined") {
      const hash = window.location.hash
      if (hash)
        setModalContent(blogSection.find(({ slug }) => slug === hash.slice(1)))
    }

    if (typeof document !== "undefined") document.documentElement.scrollTop = 0
  }, [blogSection])

  const Modal = () => {
    if (modalContent) {
      navigate(`#${modalContent.slug}`)
      return (
        <BlogModal
          {...modalContent}
          closeHandler={post => {
            changeUrlCLose()
            setModalContent(post)
          }}
        />
      )
    }
    return null
  }

  const changeUrlCLose = () => {
    if (typeof window !== "undefined") navigate(window.location.pathname)
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
      title={title}
      globalMetaData={globalMetaData}
      metaData={metaData}
    >
      <div className="news-page">
        <div className="container">
          <div className="news-page-header">
            <NewsPageLinks activeTab="Blog" />
          </div>
          <Modal />
          {blogSection.length && (
            <div className="articles">
              {blogSection.map((item, index) => (
                <BlogItem
                  key={index}
                  {...item}
                  onClickHandler={post => setModalContent(post)}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogQuery {
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
    newsData: contentfulPageNews {
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
      metaData {
        title
        desc {
          desc
        }
      }
      companies: listCompanies {
        title: name
      }
      blogSection {
        slug
        image {
          fluid(maxWidth: 760) {
            ...GatsbyContentfulFluid
          }
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

import React, { useEffect, useState } from "react"
import { graphql, navigate } from "gatsby"

import { Layout } from "../components/Layout"
import { CompanyStealth } from "../components/Companies/CompanyStealth"
import { CompanyMain } from "../components/Companies/CompanyMain"
import { CompanyModal } from "../components/Companies/CompanyModal"

export default function Companies({ data }) {
  const [activeCompany, setActiveCompany] = useState(null)

  const {
    metaData,
    headerData,
    footerData,
    companiesPage: {
      mainCompanies,
      stealthCompanies,
      textEndList,
      ctaTitle,
      tickerDuration,
      tickerData,
    },
  } = data

  useEffect(() => {
    if (typeof window !== "undefined") {
      const hash = window.location.hash
      if (hash)
        setActiveCompany(
          mainCompanies.find(({ slug }) => slug === hash.slice(1))
        )
    }

    if (typeof document !== "undefined") document.documentElement.scrollTop = 0
  }, [mainCompanies])

  const handleClick = slide => setActiveCompany(slide)

  const Modal = () => {
    if (activeCompany) {
      navigate(`#${activeCompany.slug}`)

      return (
        <CompanyModal
          {...activeCompany}
          onClose={() => {
            setActiveCompany(null)
            changeUrlCLose()
          }}
        />
      )
    }
    return null
  }

  const changeUrlCLose = () => {
    if (typeof window !== "undefined") {
      navigate(window.location.pathname)
    }
  }

  return (
    <Layout
      headerData={headerData}
      footerData={footerData}
      ctaTitle={ctaTitle}
      ctaType="cta-inner"
      tickerDuration={tickerDuration}
      tickerData={tickerData}
      pageTitle="Companies"
      metaData={metaData}
    >
      <CompanyMain mainCompanies={mainCompanies} handleClick={handleClick} />
      <CompanyStealth
        stealthCompanies={stealthCompanies}
        textEndList={textEndList}
      />
      <Modal />
    </Layout>
  )
}

export const pageQuery = graphql`
  query CompaniesQuery {
    metaData: contentfulGlobalMetaData {
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
    companiesPage: contentfulPageCompanies {
      mainCompanies {
        slug
        name
        previewImage {
          fluid(maxWidth: 600) {
            ...GatsbyContentfulFluid
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
          fluid(maxWidth: 320) {
            ...GatsbyContentfulFluid
          }
          alt: title
        }
      }
      stealthCompanies {
        name
      }
      textEndList
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

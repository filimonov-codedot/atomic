import React, { useEffect, useState } from "react"
import { graphql, navigate } from "gatsby"

import { Layout } from "../components/Layout"
import { CompanyStealth } from "../components/Companies/CompanyStealth"
import { CompanyMain } from "../components/Companies/CompanyMain"
import { CompanyModal } from "../components/Companies/CompanyModal"

export default function Companies ({ data }) {
  const [activeCompany, setActiveCompany] = useState(null)

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

  useEffect(() => {
    if (typeof window !== "undefined") {
      const hash = window.location.hash
      if (hash) setActiveCompany(
        mainCompanies.find(({ slug }) => slug === hash.slice(1)))
    }

    if (typeof document !== "undefined")
      document.documentElement.scrollTop = 0
  }, [])

  const handleClick = (slide) => setActiveCompany(slide)

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
    >
      <CompanyMain
        mainCompanies={mainCompanies}
        handleClick={handleClick}
      />
      <CompanyStealth stealthCompanies={stealthCompanies} />
      <Modal />
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
        slug
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

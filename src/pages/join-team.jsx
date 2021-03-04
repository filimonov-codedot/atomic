import React, { useEffect } from "react"
import { graphql } from "gatsby"

import { Layout } from "../components/Layout"
import { About } from "../components/JoinTeam/About/About"
import { TeamCompanies } from "../components/JoinTeam/TeamCompanies/TeamCompanies"

export default function JoinTeam({ data }) {
  const {
    site: {
      siteMetadata: { title },
    },
    globalMetaData,
    headerData,
    footerData,
    joinTeam: {
      metaData,
      topHeader,
      buttonText,
      slides,
      selectionCompanies,
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
      pageTitle="Join a Team"
      title={title}
      globalMetaData={globalMetaData}
      metaData={metaData}
    >
      <About header={{ ...topHeader, buttonText }} slides={slides} />
      <TeamCompanies contentfulCompanies={selectionCompanies} />
    </Layout>
  )
}

export const pageQuery = graphql`
  query JoinTeamQuery {
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
    joinTeam: contentfulPageJoinTeam {
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
      topHeader {
        title
        desc {
          text: desc
        }
      }
      buttonText: topButton
      slides: photos {
        fluid(maxWidth: 550) {
          ...GatsbyContentfulFluid
        }
        alt: title
      }
      selectionCompanies {
        title
        link
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

import React from "react"
import { graphql } from "gatsby"

import { Layout } from "../components/Layout"
import { About } from "../components/JoinTeam/About/About"
import { TeamCompanies } from "../components/JoinTeam/TeamCompanies/TeamCompanies"

export default function JoinTeam ({ data }) {
  const {
    headerData,
    footerData,
    joinTeam: {
      topHeader,
      buttonText,
      slides,
      selectionCompanies,
      ctaTitle,
      tickerData
    }
  } = data

  return (
    <Layout
      headerData={headerData}
      footerData={footerData}
      ctaTitle={ctaTitle}
      ctaType="cta-inner"
      tickerData={tickerData}
      pageTitle="Join a Team"
    >
      <About
        header={{ ...topHeader, buttonText }}
        slides={slides}
      />
      <TeamCompanies contentfulCompanies={selectionCompanies} />
    </Layout>
  )
}

export const pageQuery = graphql`
  query JoinTeamQuery {
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
    joinTeam: contentfulPageJoinTeam {
      topHeader {
        title
        desc {
          text: desc
        }
      }
      buttonText: topButton
      slides: photos {
        file {
          src: url
        }
        alt: title
      }
      selectionCompanies {
        title
        link

      }
      ctaTitle
      tickerData: ticker {
        text {
          text
        }
      }
    }
  }
 `

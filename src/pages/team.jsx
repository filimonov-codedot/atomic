import React from 'react'
import { graphql } from 'gatsby'

import { Layout } from '../components/Layout'
import { TeamPage } from '../components/Team/TeamPage'
import { TeamHeader } from '../components/Team/TeamHeader'
import { TeamContent } from '../components/Team/TeamContent'

export default function Team ({ data }) {
  const {
    headerData,
    footerData,
    teamPage: {
      topHeader,
      teamMembers,
      ctaTitle,
      tickerData
    }
  } = data

  return (
    <Layout
      headerData={headerData}
      footerData={footerData}
      ctaType="cta-inner"
      ctaTitle={ctaTitle}
      tickerData={tickerData}
      pageTitle="Team"
    >
      <TeamPage>
        <TeamHeader header={topHeader} />
        <TeamContent content={teamMembers} />
      </TeamPage>
    </Layout>
  )
}

export const pageQuery = graphql`
  query TeamQuery {
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
    teamPage: contentfulPageTeam {
      topHeader {
        title
        desc {
          text: desc
        }
      }
      teamMembers {
        smallPhoto {
          file {
            src: url
          }
          alt: title
        }
        position
        name
        largePhoto {
          file {
            url
          }
          title
        }
        social {
          icon {
            file {
              src: url
            }
            alt: title
          }
          link
        }
        desc {
          text: desc
        }
        faq {
          title
          text {
            text
          }
        }
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

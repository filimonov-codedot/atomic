import React from 'react'
import { graphql } from 'gatsby'

import { Layout } from '../components/Layout'
import { CoFoundInfo } from '../components/CoFound/CoFoundInfo'
import { ReviewSlider } from '../components/ReviewSlider'
import { About } from '../components/CoFound/About/About'
import { Team } from '../components/CoFound/Team/Team'
import { TeamReviews } from '../components/CoFound/Team/TeamReviews'

export default function CoFound ({ data }) {
  const {
    headerData,
    footerData,
    coFound: {
      topHeader,
      topButton,
      reviewDesc,
      reviewSlider,
      aboutHeader,
      aboutContent,
      teamContent,
      teamHeader,
      teamReviews,
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
      pageTitle="Co-Found"
    >
      <CoFoundInfo
        topHeader={topHeader}
        topButton={topButton}
      />
      <ReviewSlider
        description={reviewDesc.text}
        slides={reviewSlider}
        addClass="content-slider"
      />
      <About
        aboutHeader={aboutHeader}
        aboutContent={aboutContent}
      />
      <Team
        teamContent={teamContent}
        teamHeader={teamHeader}
      />
      <TeamReviews teamReviews={teamReviews} />
    </Layout>
  )
}

export const pageQuery = graphql`
  query CoFoundQuery {
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
    coFound: contentfulPageCoFound {
      topHeader {
        title
        desc {
          text: desc
        }
      }
      topButton
      reviewSlider {
        logoWhile {
          file {
            src: url
          }
          alt: title
        }
        previewImage {
          file {
            src: url
          }
          alt: title
        }
        title
        refCompanies {
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
      }
      reviewDesc {
        text: reviewDesc
      }
      aboutHeader {
        subtitle
        title
      }
      aboutContent {
        title
        desc {
          text: desc
        }
        icon {
          file {
            src: url
          }
          alt: title
        }
      }
      teamHeader {
        subtitle
        title
      }
      teamContent {
        companyName
        refTeamMember {
          position
          name
          desc {
            text: desc
          }
          smallPhoto {
            file {
              url
            }
          }
          largePhoto {
            file {
              url
            }
          }
          social {
            icon {
              file {
                src: url
              }
            }
            link
          }
          faq {
            text {
              text
            }
            title
          }
        }
      }
      teamReviews {
        text {
          text
        }
        author
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

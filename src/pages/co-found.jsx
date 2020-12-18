import React, { useEffect, useState } from "react"
import { graphql, navigate } from "gatsby"

import { Layout } from "../components/Layout"
import { CoFoundInfo } from "../components/CoFound/CoFoundInfo"
import { ReviewSlider } from "../components/ReviewSlider"
import { About } from "../components/CoFound/About/About"
import { LookingFor } from "../components/CoFound/LookingFor/LookingFor"
import { Timeline } from "../components/CoFound/Timeline/Timeline"
import { Team } from "../components/CoFound/Team/Team"
import { TeamReviews } from "../components/CoFound/Team/TeamReviews"
import { CompanyModal } from "../components/Companies/CompanyModal"
import { ModalUser } from "../components/Team/ModalUser"

export default function CoFound({ data }) {
  const [activeCompany, setActiveCompany] = useState(false)
  const [memberModal, setMemberModal] = useState(false)

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
      tickerDuration,
      tickerData,
    },
  } = data

  useEffect(() => {
    if (typeof window !== "undefined") {
      const hash = window.location.hash
      if (hash) {
        const dataCompanies = reviewSlider.find(
          ({ refCompanies }) => refCompanies.slug === hash.slice(1)
        )
        if (dataCompanies) setActiveCompany(dataCompanies.refCompanies)

        const dataMembers = teamContent.find(
          ({ refTeamMember }) => refTeamMember.slug === hash.slice(1)
        )
        if (dataMembers) setMemberModal(dataMembers.refTeamMember)
      }
    }

    if (typeof document !== "undefined") document.documentElement.scrollTop = 0
  }, [reviewSlider, teamContent])

  const Modals = () => {
    if (activeCompany) {
      navigate(`#${activeCompany.slug}`)
      return (
        <CompanyModal
          {...activeCompany}
          onClose={() => {
            setActiveCompany(false)
            changeUrlCLose()
          }}
        />
      )
    }
    if (memberModal) {
      navigate(`#${memberModal.slug}`)
      return (
        <ModalUser
          {...memberModal}
          onClose={() => {
            changeUrlCLose()
            setMemberModal(null)
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
      ctaType="cta-inner"
      ctaTitle={ctaTitle}
      ctaLink={{
        url:
          "https://jobs.lever.co/atomic/cb7c61d3-3379-4924-a240-7af1b15e35e9/apply",
        title: "Apply to Atomic",
      }}
      //ctaDeadline={`Q1 deadline January 24`}
      tickerDuration={tickerDuration}
      tickerData={tickerData}
      pageTitle="Co-Found"
    >
      <CoFoundInfo topHeader={topHeader} topButton={topButton} />
      <ReviewSlider
        description={reviewDesc.text}
        slides={reviewSlider}
        addClass="content-slider"
        setActiveCompany={setActiveCompany}
      />
      <About aboutHeader={aboutHeader} aboutContent={aboutContent} />
      <LookingFor />
      {/*<Timeline />*/}
      <Team
        teamContent={teamContent}
        teamHeader={teamHeader}
        setMemberModal={setMemberModal}
      />
      <TeamReviews teamReviews={teamReviews} />
      <Modals />
    </Layout>
  )
}

export const pageQuery = graphql`
  query CoFoundQuery {
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
          fluid(maxWidth: 1920) {
            ...GatsbyContentfulFluid
          }
          alt: title
        }
        title
        refCompanies {
          slug
          name
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
          slug
          position
          name
          desc {
            text: desc
          }
          smallPhoto {
            fluid(maxWidth: 30) {
              ...GatsbyContentfulFluid
            }
          }
          largePhoto {
            fluid(maxWidth: 760) {
              ...GatsbyContentfulFluid
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

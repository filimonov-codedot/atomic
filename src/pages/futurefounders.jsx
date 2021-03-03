import React, { useEffect, useState } from "react"
import { graphql, navigate } from "gatsby"

import { Layout } from "../components/Layout"
import { CoFoundInfo } from "../components/CoFound/CoFoundInfo"
import { ReviewSlider } from "../components/ReviewSlider"
import { About } from "../components/CoFound/About/About"
import { LookingFor } from "../components/CoFound/LookingFor/LookingFor"
import { Team } from "../components/CoFound/Team/Team"
import { TeamReviews } from "../components/CoFound/Team/TeamReviews"
import { Faqs } from "../components/CoFound/Faqs/Faqs"
import { CompanyModal } from "../components/Companies/CompanyModal"
import { ModalUser } from "../components/Team/ModalUser"

export default function Futurefounders({ data }) {
  const [activeCompany, setActiveCompany] = useState(false)
  const [memberModal, setMemberModal] = useState(false)

  const {
    metaData,
    headerData,
    footerData,
    coFound: {
      topHeader,
      topButton,
      topButtonUrl,
      topDeadlineToggle,
      topDeadline,
      reviewDesc,
      reviewSlider,
      aboutHeader,
      aboutRoleToggle,
      aboutRole,
      lookingHeader,
      lookingContent,
      teamContent,
      teamHeader,
      teamReviews,
      faq,
      ctaTitle,
      ctaButtonText,
      ctaButtonUrl,
      ctaDeadlineToggle,
      ctaDeadline,
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
        url: ctaButtonUrl,
        title: ctaButtonText,
      }}
      ctaDeadline={ctaDeadlineToggle ? ctaDeadline : ""}
      tickerDuration={tickerDuration}
      tickerData={tickerData}
      pageTitle="Co-Found"
      metaData={metaData}
    >
      <CoFoundInfo
        topHeader={topHeader}
        topButton={topButton}
        topButtonUrl={topButtonUrl}
        topDeadline={topDeadlineToggle ? topDeadline : ""}
      />
      <ReviewSlider
        description={reviewDesc.text}
        slides={reviewSlider}
        addClass="content-slider"
        setActiveCompany={setActiveCompany}
      />
      <About
        aboutHeader={aboutHeader}
        aboutRoleToggle={aboutRoleToggle}
        aboutRole={aboutRole}
      />
      <LookingFor
        lookingHeader={lookingHeader}
        lookingContent={lookingContent}
      />
      {/*<Timeline />*/}
      <Team
        teamContent={teamContent}
        teamHeader={teamHeader}
        setMemberModal={setMemberModal}
      />
      <TeamReviews teamReviews={teamReviews} />
      <Faqs faq={faq} />
      <Modals />
    </Layout>
  )
}

export const pageQuery = graphql`
  query CoFoundQuery {
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
    coFound: contentfulPageCoFound {
      topHeader {
        title
        desc {
          text: desc
        }
      }
      topButton
      topButtonUrl
      topDeadlineToggle
      topDeadline
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
        desc {
          text: desc
        }
      }
      aboutRoleToggle
      aboutRole {
        title
        desc {
          text: desc
        }
      }
      lookingHeader {
        title
        desc {
          text: desc
        }
      }
      lookingContent {
        text {
          text
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
      faq {
        title
        content {
          content
        }
      }
      ctaTitle
      ctaButtonText
      ctaButtonUrl
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

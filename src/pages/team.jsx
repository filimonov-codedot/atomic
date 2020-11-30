import React, { useEffect, useState } from "react"
import { graphql, navigate } from "gatsby"

import { Layout } from "../components/Layout"
import { TeamPage } from "../components/Team/TeamPage"
import { TeamHeader } from "../components/Team/TeamHeader"
import { TeamContent } from "../components/Team/TeamContent"
import { ModalUser } from "../components/Team/ModalUser"

export default function Team ({ data }) {
  const [curUser, setCurUser] = useState(null)

  const {
    headerData,
    footerData,
    teamPage: {
      topHeader,
      teamMembers,
      ctaTitle,
      tickerDuration,
      tickerData
    }
  } = data

  useEffect(() => {
    if (typeof window !== "undefined") {
      const hash = window.location.hash
      if (hash) setCurUser(teamMembers.find(
        ({ slug }) => slug === hash.slice(1)))
    }

    if (typeof document !== "undefined")
      document.documentElement.scrollTop = 0
  }, [teamMembers])

  const Modal = () => {
    if (curUser) {
      navigate(`#${curUser.slug}`)
      return (
        <ModalUser
          {...curUser}
          onClose={() => {
            changeUrlCLose()
            setCurUser(null)
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
      ctaType="cta-inner"
      ctaTitle={ctaTitle}
      tickerDuration={tickerDuration}
      tickerData={tickerData}
      pageTitle="Team"
    >
      <TeamPage>
        <TeamHeader header={topHeader} />
        <TeamContent
          content={teamMembers}
          setCurUser={setCurUser}
        />
        <Modal />
      </TeamPage>
    </Layout>
  )
}

export const pageQuery = graphql`
  query TeamQuery {
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
        slug
        smallPhoto {
          fluid(maxWidth: 294) {
            ...GatsbyContentfulFluid
          }
          alt: title
        }
        position
        name
        largePhoto {
          fluid(maxWidth: 760) {
            ...GatsbyContentfulFluid
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

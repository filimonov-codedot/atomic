import React, { createRef, useEffect, useState } from "react"
import { graphql, navigate } from "gatsby"

import { Hero } from "../components/Home/Hero"
import { About } from "../components/Home/About/About"
import { Layout } from "../components/Layout"
import { WhyAtomic } from "../components/Home/WhyAtomic/WhyAtomic"
import { Team } from "../components/Home/Team/Team"
import { Photos } from "../components/Home/Photos/Photos"
import { Press } from "../components/Home/Press/Press"
import { CompanyModal } from "../components/Companies/CompanyModal"
import { ModalUser } from "../components/Team/ModalUser"

function getCookie (cname) {
  const name = cname + "="
  if (typeof window !== `undefined`) {
    const decodedCookie = decodeURIComponent(document.cookie)
    const ca = decodedCookie.split(";")
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i]
      while (c.charAt(0) === " ") c = c.substring(1)
      if (c.indexOf(name) === 0) return c.substring(name.length, c.length)
    }
  }
  return ""
}

export default function Home ({ data }) {
  const [isFirstSession, setIsFirstSession] = useState(true)
  const [isShowedHero, setIsShowedHero] = useState(true)
  const [activeCompany, setActiveCompany] = useState(null)
  const [activeMember, setActiveMember] = useState(null)
  const hero = createRef()

  const {
    headerData,
    footerData,
    homePage: {
      counterSectionSwitch,
      counterRaised,
      counterActive,
      counterFund,
      aboutSlider,
      aboutHeader,
      ctaTitle,
      heroTicker,
      tickerDuration,
      tickerData,
      whyAtomicHeader,
      quoteSection,
      whyAtomicContent,
      reviewSlider,
      teamHeader,
      photos,
      press
    }
  } = data

  useEffect(() => {
    if (typeof window !== "undefined") {
      const hash = window.location.hash
      if (hash) setHeroShowed()

      if (hash) {
        const dataCompanies = [...aboutSlider, ...reviewSlider].find(
          ({ refCompanies: { slug } }) => slug === hash.slice(1))
        if (dataCompanies) setActiveCompany(dataCompanies.refCompanies)

        aboutSlider.map(({ refTeamMembers }) => {
          const dataMembers = refTeamMembers.find(({ slug }) => slug === hash.slice(1))
          if (dataMembers) setActiveMember(dataMembers)
          return dataMembers
        })
      }
      if (hash.slice(1) === quoteSection.refTeamMembers.slug)
        setActiveMember(quoteSection.refTeamMembers)
    }

    if (typeof document !== "undefined")
      document.documentElement.scrollTop = 0
  }, [])

  useEffect(() => {
    const heroShowed = getCookie("heroShowed")

    if (typeof window !== `undefined`) {
      const hash = window.location.hash

      if (Boolean(heroShowed) === false && isFirstSession && isShowedHero && !hash) {
        hero.current.style.visibility = "visible"
        hero.current.style.opacity = "1"

        window.addEventListener("scroll", setHeroShowed)
      } else if (Boolean(heroShowed) === false && !isFirstSession) {
        setHeroShowed()
      } else if (Boolean(heroShowed) === true) {
        setHeroShowed()
        setIsShowedHero(false)
      }
    }
  }, [isFirstSession, isShowedHero])

  useEffect(() => {

  }, [])

  const Modals = () => {
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
    if (activeMember) {
      navigate(`#${activeMember.slug}`)
      return (
        <ModalUser
          {...activeMember}
          onClose={() => {
            setActiveMember(null)
            changeUrlCLose()
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

  const setHeroShowed = () => {
    if (isFirstSession) {
      hero.current.style.opacity = "0"
      hero.current.style.transition = "all 1s ease-in-out"

      setIsFirstSession(false)
      setTimeout(() => {
        document.cookie = "heroShowed=true"
        setIsShowedHero(false)
      }, 600)
    }
    window.removeEventListener("scroll", setHeroShowed)
  }

  const counterData = [
    {
      prefix: "$",
      suffix: "B",
      title: counterRaised,
      text: "raised across portfolio"
    },
    {
      prefix: "$",
      suffix: "M",
      title: counterFund,
      text: "assets under management"
    },
    {
      prefix: "",
      suffix: "",
      title: counterActive,
      text: "active portfolio companies"
    }
  ]

  return isShowedHero ? (
    <Hero
      hero={hero}
      heroTicker={heroTicker}
      setHeroShowed={setHeroShowed}
    />
  ) : (
    <Layout
      headerData={headerData}
      footerData={footerData}
      ctaTitle={ctaTitle}
      tickerDuration={tickerDuration}
      tickerData={tickerData}
      isHomePage={true}
      titleTemplate='Atomic | We found and fund companies'
    >
      <About
        countersSwitch={counterSectionSwitch}
        counters={counterData}
        aboutSlider={aboutSlider}
        aboutHeader={aboutHeader}
        setActiveCompany={setActiveCompany}
        setActiveMember={setActiveMember}
      />
      <WhyAtomic
        whyAtomicHeader={whyAtomicHeader}
        quoteSection={quoteSection}
        whyAtomicContent={whyAtomicContent}
        reviewSlider={reviewSlider}
        setActiveMember={setActiveMember}
        setActiveCompany={setActiveCompany}
      />
      <Team teamHeader={teamHeader} />
      <Photos photos={photos} />
      <Press press={press} />
      <Modals />
    </Layout>
  )
}

export const pageQuery = graphql`
  query HomeQuery {
    site {
      siteMetadata {
        title
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
    homePage: contentfulPageHome {
      heroTicker {
        text
      }
      aboutHeader {
        title
        desc {
          text: desc
        }
      }
      aboutSlider {
        logoWhile {
          file {
            src: url
          }
          alt: title
        }
        previewImage {
          fluid(maxWidth: 740) {
            ...GatsbyContentfulFluid
          }
          alt: title
        }
        refCompanies {
          slug
          name
          desc {
            text: desc
          }
          logoBlack {
            file {
              src: url
            }
            alt: title
          }
          title
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
        role
        refTeamMembers {
          slug
          smallPhoto {
            fluid(maxWidth: 317) {
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
      }
      counterSectionSwitch
      counterRaised
      counterFund
      counterActive
      counterFollow
      whyAtomicHeader {
        subtitle
        title
      }
      whyAtomicContent {
        title
        desc {
          text: desc
        }
      }
      quoteSection {
        text {
          text
        }
        refTeamMembers {
          slug
          smallPhoto {
            fluid(maxWidth: 44) {
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
      }
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
      teamHeader: teamSection {
        subtitle
        title
        desc {
          text: desc
        }
      }
      photos {
        fluid(maxWidth: 150) {
          ...GatsbyContentfulFluid
        }
        alt: title
      }
      press {
        title
        link
        logo {
          file {
            src: url
          }
          alt: title
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

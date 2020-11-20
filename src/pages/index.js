import React, { useEffect, useState, createRef } from "react"
import { graphql } from 'gatsby'

import { Hero } from "../components/Home/Hero"
import { About } from "../components/Home/About/About"
import { Layout } from '../components/Layout'
import { WhyAtomic } from "../components/Home/WhyAtomic/WhyAtomic"
import { Team } from "../components/Home/Team/Team"
import { Photos } from "../components/Home/Photos/Photos"
import { Press } from "../components/Home/Press/Press"

function getCookie(cname) {
  const name = cname + "=";
  if (typeof window !== `undefined`) {
    const decodedCookie = decodeURIComponent(document.cookie);
    const ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) === ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) === 0) {
        return c.substring(name.length, c.length);
      }
    }
  }
  return "";
}

export default function Home ({ data }) {
  const [isFirstSession, setIsFirstSession] = useState(true)
  const [isShowedHero, setIsShowedHero] = useState(true)
  const hero = createRef()
  const {
    headerData,
    footerData,
    homePage: {
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

  const heroShowed = getCookie("heroShowed");

  const setHeroShowed = () => {
    if (isFirstSession) {
      hero.current.style.opacity = '0';
      hero.current.style.transition = 'all 1s ease-in-out';

      setIsFirstSession(false)
      setTimeout(() => {
        document.cookie = 'heroShowed=true';
        setIsShowedHero(false)
      }, 600)
    }
    window.removeEventListener('scroll', setHeroShowed)
  }

  useEffect(() => {
    if (typeof window !== `undefined`) {
      if (Boolean(heroShowed) === false && isFirstSession && isShowedHero) {
        hero.current.style.visibility = 'visible';
        hero.current.style.opacity = '1';

        window.addEventListener('scroll', setHeroShowed)
      } else if (Boolean(heroShowed) === false && !isFirstSession) {
        setHeroShowed()
      } else if (Boolean(heroShowed) === true) {
        setHeroShowed()
        setIsShowedHero(false)
      }
    }
  }, [isFirstSession, isShowedHero])

  const counterData = [
    {
      prefix: '$',
      suffix: 'B',
      title: counterRaised,
      text: 'raised across portfolio'
    },
    {
      prefix: '$',
      suffix: 'M',
      title: counterFund,
      text: 'assets under management'
    },
    {
      prefix: '',
      suffix: '',
      title: counterActive,
      text: 'active portfolio companies'
    },

  ];

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
      >
        <About
          counters={counterData}
          aboutSlider={aboutSlider}
          aboutHeader={aboutHeader}
        />
        <WhyAtomic
          whyAtomicHeader={whyAtomicHeader}
          quoteSection={quoteSection}
          whyAtomicContent={whyAtomicContent}
          reviewSlider={reviewSlider}
        />
        <Team teamHeader={teamHeader} />
        <Photos photos={photos} />
        <Press press={press} />
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
          file {
            src: url
          }
          alt: title
        }
        refCompanies {
          name
          desc {
            text: desc
          }
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
        role
        refTeamMembers {
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
      }
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
      }
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
      teamHeader: teamSection {
        subtitle
        title
        desc {
          text: desc
        }
      }
      photos {
        file {
          src: url
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

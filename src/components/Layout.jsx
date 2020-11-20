import React, { useEffect, useState } from 'react'
import PageTransition from 'gatsby-plugin-page-transitions'

import { SEO } from './SEO'
import { Header } from './Header'
import { Footer } from './Footer'
import { Cta } from './Cta'
import { Ticker } from './Ticker'
import { MenuModal } from './MenuModal'
import { MenuModalMobile } from './MenuModalMobile'
import { ContactUsModal } from "./ContactUsModal"
import childrenContext from './childrenContext'

export const Layout = ({
  headerData,
  footerData,
  tickerDuration,
  tickerData,
  ctaTitle,
  ctaType = '',
  ctaDisplay = true,
  isHomePage = false,
  pageTitle = null,
  children
}) => {
  const [isOpenMenu, setIsOpenMenu] = useState(false)
  const [isOpenMenuMobile, setIsOpenMenuMobile] = useState(false)
  const [isOpenContactModal, setIsOpenContactModal] = useState(true)

  const navHeader = [
    {
      title: 'Team',
      link: '/team'
    },
    {
      title: 'Companies',
      link: '/companies'
    },
    {
      title: 'News',
      link: '/news'
    }
  ]

  const navSiteMap = [
    [
      {
        title: 'Home',
        link: '/'
      },
      {
        title: 'Team',
        link: '/team'
      },
      {
        title: 'Companies',
        link: '/companies'
      },
      {
        title: 'Press',
        link: '/news'
      }
    ],
    [
      {
        title: 'Blog',
        link: '/blog'
      },
      {
        title: 'Co-Found with us',
        link: '/co-found'
      },
      {
        title: 'Join a team',
        link: '/join-team'
      },
      {
        title: 'Fellowship Program',
        link: '/',
        disabled: true
      }
    ]
  ]

  const navFooter = [
    {
      title: 'PRESS KIT',
      link: '/'
    },
    {
      title: 'PRIVACY POLICY',
      link: '/privacy-policy'
    }
  ]

  const navModal = [
    {
      title: 'Co-found with us',
      link: '/co-found'
    },
    {
      title: 'Join a team',
      link: '/join-team'
    },
    {
      title: 'Atomic Fellowship',
      link: '/',
      disabled: true
    }
  ]

  const navModalMobile = [
    {
      title: 'Home',
      link: '/'
    },
    {
      title: 'Team',
      link: '/team'
    },
    {
      title: 'Companies',
      link: '/companies'
    },
    {
      title: 'News',
      link: '/news'
    },
    {
      title: 'Co-found with us',
      link: '/co-found'
    },
    {
      title: 'Join a team',
      link: '/join-team'
    }
  ]

  useEffect(() => {
    setIsOpenContactModal(false)
  }, [])

  return (
    <PageTransition transitionTime={250}>
      <div className={`page-wrapper ${isHomePage ? 'is-home' : ''}`}>
        <SEO title={pageTitle} />
        <Header
          headerData={headerData}
          navHeader={navHeader}
          openMenu={() => setIsOpenMenu(true)}
          openMenuMobile={() => setIsOpenMenuMobile(true)}
          pageTitle={pageTitle}
        />

        <childrenContext.Provider value={{
          openContactModal: () => setIsOpenContactModal(true)
        }}>
          {children}
        </childrenContext.Provider>


        {ctaDisplay && (
          <Cta
            title={ctaTitle}
            ctaType={ctaType}
            openMenu={() => setIsOpenMenu(true)}
            openMenuMobile={() => setIsOpenMenuMobile(true)}
            openContactModal={() => setIsOpenContactModal(true)}
          />
        )}
        <Ticker tickerData={tickerData} tickerDuration={tickerDuration} />
        <Footer
          footerData={footerData}
          navSiteMap={navSiteMap}
          navFooter={navFooter}
        />
        {isOpenMenu && (
          <MenuModal
            onClose={setIsOpenMenu}
            navModal={navModal}
          />
        )}
        {isOpenMenuMobile && (
          <MenuModalMobile
            onClose={setIsOpenMenuMobile}
            navModalMobile={navModalMobile}
          />
        )}
        <ContactUsModal
          isOpenContactModal={isOpenContactModal}
          onClose={setIsOpenContactModal}
        />
      </div>
    </PageTransition>
  )
}

import React, { useState } from 'react'
import PageTransition from 'gatsby-plugin-page-transitions'

import { SEO } from './SEO'
import { Header } from './Header'
import { Footer } from './Footer'
import { Cta } from './Cta'
import { Ticker } from './Ticker'
import { MenuModal } from './MenuModal'
import { MenuModalMobile } from './MenuModalMobile'

export const Layout = ({
  headerData,
  footerData,
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
        title: 'About',
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
        title: 'Start a Company',
        link: '/co-found'
      },
      {
        title: 'Join a Company',
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
      link: '/'
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

        {children}

        {ctaDisplay && (
          <Cta
            title={ctaTitle}
            ctaType={ctaType}
            openMenu={() => setIsOpenMenu(true)}
            openMenuMobile={() => setIsOpenMenuMobile(true)}
          />
        )}
        <Ticker tickerData={tickerData} />
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
      </div>
    </PageTransition>
  )
}

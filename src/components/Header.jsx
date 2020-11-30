import React from 'react'
import { Link } from 'gatsby'

export const Header = ({
  pageTitle,
  headerData: {
    logo,
    logoMobile
  },
  navHeader,
  openMenu,
  openMenuMobile
}) => (
  <header className="header">
    <div className="container">
      <Link to='/' className="logo-mobile">
        <img src={logoMobile.file.src} alt={logoMobile.alt} />
      </Link>
      <Link to='/' className="logo">
        <img src={logo.file.src} alt={logo.alt} />
      </Link>
      <nav className="header-nav">
        <ul>
          {navHeader.map(({ title, link }, i) => {
            const current =
              (title === pageTitle || ( pageTitle === 'Blog' && title === 'News' ))
                ? 'current' : ''
            return (
              <li key={i} className={current}>
                <Link to={link}>{title}</Link>
              </li>
            )
          })}
        </ul>
      </nav>
      <div className="page-title">
        <span>{pageTitle}</span>
      </div>
      <div className="header-user-nav">
        <button className="btn btn-small" onClick={openMenu}>
          Join
        </button>
      </div>
      {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
      <div className="header-mobile-nav" onClick={openMenuMobile}>
        <span />
      </div>
    </div>
  </header>
)

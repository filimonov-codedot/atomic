import React, { useState } from 'react'
import { Link } from 'gatsby'

const encode = (data) => Object.keys(data).
  map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])).
  join('&')

export const Footer = ({ footerData, navFooter, navSiteMap }) => {
  const [email, setEmail] = useState('')

  if (!footerData) return null
  const {
    email: emailContact,
    social,
    newsletterTitle,
    logo: { file: { src }, alt },
    copyright
  } = footerData

  const handleSubmit = (e) => {
    e.preventDefault()

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'newsletter', email })
    }).
      then(() => console.log('Success!')).
      catch((error) => console.log(error))
  }

  const handleChange = (e) => {
    const { value } = e.target
    setEmail(value)
  }

  return (
    <footer className="footer">
      <div className="container">
        <nav className="footer-nav">
          <h3>Site Map</h3>
          {navSiteMap.map((item, index) => (
            <ul key={index}>

              {item.map(({ title, link, disabled }, index) => {
                if (disabled) return (
                  <li key={index} className="disabled">
                    <a>{title}</a>
                  </li>
                )
                return (
                  <li key={index}>
                    <Link to={link}>{title}</Link>
                  </li>
                )
              })}

            </ul>
          ))}
        </nav>
        <div className="footer-contacts">
          <h3>Contact</h3>
          <a href={`mailto:${emailContact}`} className="footer-contacts-email">
            {emailContact}
          </a>
          <div className="social">
            {social?.map(({ icon: { file: { src }, alt }, link }, index) => (
              <a key={index} target="_blank" href={link}>
                <img width={35} height={35} src={src} alt={alt} />
              </a>
            ))}
          </div>
        </div>
        <div className="footer-newsletter">
          <h3>Newsletter</h3>
          <p>{newsletterTitle}</p>
          <form data-netlify="true" onSubmit={handleSubmit}>
            <input
              value={email}
              onChange={handleChange}
              name='email'
              type="email"
              placeholder="Enter your email"
              required
            />
          </form>
        </div>
      </div>
      <div className="container">
        <div className="footer-bottom">
          <nav className="footer-bottom-nav">
            <ul>
              {navFooter.map(({ title, link }, index) => (
                <li key={index}>
                  <a href={link}>{title}</a>
                </li>
              ))}
            </ul>
          </nav>
          <Link to='/' className="footer-logo">
            <img src={src} alt={alt} />
          </Link>
          <div className="copyright">
            <p>{copyright}</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

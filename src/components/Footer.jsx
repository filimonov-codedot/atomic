import React, { useState } from "react"
import { Link } from "gatsby"
import NetlifyForm from "react-ssg-netlify-forms"

export const Footer = ({ footerData, navFooter, navSiteMap }) => {
  const [email, setEmail] = useState("")
  const [msg, setMsg] = useState(null)

  if (!footerData) return null
  const {
    email: emailContact,
    secondEmail,
    social,
    newsletterTitle,
    logo,
    copyright,
  } = footerData

  const handleChange = ({ target: { value } }) => setEmail(value)

  const postSubmit = () => {
    setEmail("")
    setMsg("Thank you! Your form was submitted.")
    setTimeout(() => {
      setMsg(null)
    }, 5000)
  }

  return (
    <footer className="footer">
      <div className="container">
        <nav className="footer-nav">
          <h3>Site Map</h3>
          {navSiteMap.map((item, index) => (
            <ul key={index}>
              {item.map(({ title, link, disabled, external }, index) => {
                if (disabled) {
                  return (
                    <li key={index} className="disabled">
                      <a>{title}</a>
                    </li>
                  )
                }

                if (external) {
                  return (
                    <li key={index}>
                      <a href={link} target="_blank">
                        {title}
                      </a>
                    </li>
                  )
                }

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
          <a href={`mailto:${secondEmail}`} className="footer-contacts-email">
            {secondEmail}
          </a>
          <div className="social">
            {social?.map(({ icon, link }, index) => (
              <a key={index} target="_blank" href={link}>
                <img
                  style={{ width: "35px", height: "35px" }}
                  src={icon.file.src}
                  alt={icon.alt}
                />
              </a>
            ))}
          </div>
        </div>
        <div className="footer-newsletter">
          <h3>Newsletter</h3>
          <p>{newsletterTitle}</p>
          <NetlifyForm
            formName="Newsletter"
            formValues={{ email }}
            postSubmit={postSubmit}
          >
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
            {email ? <button type="submit">Send</button> : ""}
          </NetlifyForm>
          {msg ? (
            <p>
              <small>{msg}</small>
            </p>
          ) : null}
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
          <Link to="/" className="footer-logo">
            <img src={logo.file.src} alt={logo.alt} />
          </Link>
          <div className="copyright">
            <p>{copyright}</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

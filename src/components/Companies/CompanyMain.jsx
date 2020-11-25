import React, { useEffect, useState } from "react"
import { navigate } from '@reach/router';

import { CompanyModal } from "./CompanyModal"

export const CompanyMain = ({ mainCompanies }) => {
  const [activeCompany, setActiveCompany] = useState(null)
  const [loaded, setLoaded] = useState(false)

  const handleClick = (slide) => setActiveCompany(slide)

  useEffect(() => {
    setLoaded(true)

    if (typeof window !== "undefined") {
      const hash = window.location.hash
      if (hash) setActiveCompany(
        mainCompanies.find(({ slug }) => slug === hash.slice(1)))
    }
  }, [])

  const Modal = () => {
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
    return null
  }

  const changeUrlCLose = () => {
    if (typeof window !== "undefined") {
      navigate(window.location.pathname)
    }
  }

  return (
    <div className="company-page">
      <div className="container">`
        <div className="company-page-list">
          <Modal />
          {mainCompanies.map((item, index) => {
            const { name, previewImage: { file: { src }, alt } } = item
            return (
              <div key={index} className={`company${loaded ? "" : " current"}`}>
                <h3 onClick={() => handleClick(item)}>{name}</h3>
                <div className="company-photo" onClick={() => handleClick(item)}>
                  <img src={src} alt={alt} />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

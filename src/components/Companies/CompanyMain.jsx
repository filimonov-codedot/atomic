import React, { useEffect, useState } from 'react'
import { CompanyModal } from './CompanyModal'

export const CompanyMain = ({ mainCompanies }) => {
  const [activeCompany, setActiveCompany] = useState(null)
  const [open, setOpen] = useState(false)
  const [loaded, setLoaded] = useState(false)

  const handleClick = (slide) => {
    setActiveCompany(slide)
    setOpen(true)
  }

  useEffect(() => setLoaded(true), [])

  return (
    <div className="company-page">
      <div className="container">
        <div className="company-page-list">
          {open && activeCompany ? (
            <CompanyModal
              {...activeCompany}
              onClose={() => setOpen(false)} />
          ) : ''}
          {mainCompanies.map((item, index) => {
            const { name, previewImage: { file: { src }, alt } } = item
            return (
              <div key={index} className={`company${loaded ? "" : " current"}`}>
                <h3 onClick={() => handleClick(item)}>{name}</h3>
                <div className="company-photo">
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

import React, { useEffect, useState } from "react"

export const CompanyMain = ({ mainCompanies, handleClick }) => {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(true)
  }, [])

  return (
    <div className="company-page">
      <div className="container">
        <div className="company-page-list">
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

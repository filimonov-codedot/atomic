import React, { useEffect, useState } from "react"
import { Image } from "../Image"

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
            const { name, previewImage } = item
            return (
              <div key={index} className={`company${loaded ? "" : " current"}`}>
                {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
                <h3 onClick={() => handleClick(item)}>{name}</h3>
                {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
                <div className="company-photo" onClick={() => handleClick(item)}>
                  <Image className='img' image={previewImage} />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

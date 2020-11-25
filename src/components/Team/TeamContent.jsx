import React from "react"

export const TeamContent = ({ content, setCurUser }) => (
  <div className="team-page-wrapper">
    {content?.map((item, index) => {
      const {
        smallPhoto: { file: { src }, alt },
        position,
        name
      } = item

      return (
        <div
          key={index}
          className="team-page-item"
          onClick={() => setCurUser(item)}
        >
          <div className="team-page-item-photo">
            <img src={src} alt={alt} />
          </div>
          <h3>{name}<br />{position}</h3>
        </div>
      )
    })}
  </div>
)


import React from "react"
import { Image } from "../Image"

export const TeamContent = ({ content, setCurUser }) => (
  <div className="team-page-wrapper">
    {content?.map((item, index) => {
      const {
        smallPhoto,
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
            <Image className='img' image={smallPhoto} />
          </div>
          <h3>{name}<br />{position}</h3>
        </div>
      )
    })}
  </div>
)


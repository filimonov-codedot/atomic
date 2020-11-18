import React from "react"

export const TeamListItem = ({ item }) => {
  return (
    <div className="team-item">
      <div className="team-photo">
        <img src={item.img} alt="" />
      </div>
      <h4>{item.title}</h4>
      <p>{item.description}</p>
    </div>
  )
}

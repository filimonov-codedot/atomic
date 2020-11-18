import React from "react"
import { TeamList } from "./TeamList"

export const Team = ({ teamHeader }) => {
  return (
    <div className="team">
      <div className="container">
        <div className="title">
          <h3>{teamHeader.subtitle}</h3>
          <h2>{teamHeader.title}</h2>
          <p>{teamHeader.desc.text}</p>
        </div>
        <TeamList />
      </div>
    </div>
  )
}

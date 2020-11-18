import React from "react"
import { PressList } from "./PressList"

export const Press = ({ press }) => {
  return (
    <div className="press">
      <div className="container">
        <PressList press={press} />
      </div>
    </div>
  )
}

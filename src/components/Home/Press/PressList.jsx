import React from "react"
import { PressListItem } from "./PressListItem"

export const PressList = ({ press }) => {

  return (
    <div className="press-wrapper">
      {press ?.map((pressItem, i) => (
        <PressListItem key={i} pressItem={pressItem} />
      ))}
    </div>
  )
}

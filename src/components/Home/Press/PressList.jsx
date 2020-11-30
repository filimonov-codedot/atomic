import React from "react"
import { PressListItem } from "./PressListItem"

export const PressList = ({ press }) => (
  <div className="press-wrapper">
    {press?.map((pressItem, i) => (
      <PressListItem key={i} pressItem={pressItem} />
    ))}
  </div>
)

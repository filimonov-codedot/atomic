import React from "react"

export const PressListItem = ({ pressItem }) => {

  return (
    <a href={pressItem.link} target="_blank" rel="noreferrer" className="press-item">
      <span className="press-item-title">{pressItem.title}</span>
      <img src={pressItem.logo?.file.src} alt={pressItem.logo?.alt} />
    </a>
  )
}

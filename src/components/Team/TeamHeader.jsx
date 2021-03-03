import React from "react"

export const TeamHeader = ({ header }) => {
  if (!header) return null
  const {
    title,
    desc: { text },
  } = header
  return (
    <div className="title">
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  )
}

import React from "react"

export const AboutInfo = ({ aboutHeader }) => (
  <div className="container">
    <h2 dangerouslySetInnerHTML={{
      __html: aboutHeader.title
    }} />
    <p>{aboutHeader.desc.text}</p>
  </div>
)


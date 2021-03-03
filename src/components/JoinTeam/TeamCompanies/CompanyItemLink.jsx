import React from "react"

export const CompanyItemLink = ({ title, link }) => (
  <div className="select-company-item select-company-item-centered">
    <div className="select-company-name">
      <span>{title}</span>
    </div>
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className="select-company-content-open"
    >
      View job openings at {title}
    </a>
  </div>
)

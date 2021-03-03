import React from "react"
import { StickyContainer, Sticky } from "react-sticky"

export const CompanyItemList = ({ title, postings }) => (
  <StickyContainer className="select-company-item">
    <Sticky topOffset={-58} bottomOffset={-90}>
      {({ style, isSticky }) => (
        <div
          className={`select-company-name ${isSticky ? "is-sticky" : ""}`}
          style={style}
        >
          <span>{title}</span>
        </div>
      )}
    </Sticky>
    <div className="select-company-content-list">
      {postings.map(({ categories, hostedUrl, text }, index) => {
        const { commitment, location } = categories
        return (
          <div className="select-company-content-list-item" key={index}>
            <a
              href={hostedUrl}
              target="_blank"
              rel="noreferrer"
              className="select-company-position"
            >
              {text}
            </a>
            <div className="select-company-info">
              {location}
              <br />
              {commitment}
            </div>
          </div>
        )
      })}
    </div>
  </StickyContainer>
)

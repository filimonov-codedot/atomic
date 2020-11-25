import React from "react"

import { ReviewSlider } from "../../ReviewSlider"
import { WhyAtomicArticles } from "./WhyAtomicArticles"

export const WhyAtomic = ({
  reviewSlider, whyAtomicHeader, whyAtomicContent, quoteSection, setActiveMember, setActiveCompany
}) => {
  const { subtitle, title } = whyAtomicHeader
  const {
    text: { text },
    refTeamMembers
  } = quoteSection
  const {
    smallPhoto: { file: { src }, alt },
    position,
    name
  } = refTeamMembers

  return (
    <div className="why-atomic">
      <div className="container">
        <div className="title">
          <h3>{subtitle}</h3>
          <h2>{title}</h2>
        </div>
        <WhyAtomicArticles whyAtomicContent={whyAtomicContent} />
      </div>
      <div className="review">
        <div className="container">
          <div className="review-photo">
            <img src={src} alt={alt} />
          </div>
          <p>{text}</p>
          <div className="review-info">
            <div
              className="review-name"
              onClick={() => setActiveMember(refTeamMembers)}
            >{name}</div>
            <div className="review-position">{position}</div>
          </div>
        </div>
      </div>
      <ReviewSlider
        slides={reviewSlider}
        setActiveCompany={setActiveCompany}
      />
    </div>
  )
}

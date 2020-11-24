import React, { useEffect, useState } from "react"
import { navigate } from "gatsby"

import { ReviewSlider } from '../../ReviewSlider'
import { WhyAtomicArticles } from './WhyAtomicArticles'
import { ModalUser } from '../../Team/ModalUser'

export const WhyAtomic = ({
  reviewSlider, whyAtomicHeader, whyAtomicContent, quoteSection
}) => {
  const [isMemberModal, setIsMemberModal] = useState(false)

  const { subtitle, title } = whyAtomicHeader
  const {
    text: { text },
    refTeamMembers
  } = quoteSection
  const {
    smallPhoto: { file: { src }, alt },
    position,
    name,
    largePhoto,
    desc,
    faq,
    social
  } = refTeamMembers

  const Modal = () => {
    if (isMemberModal) {
      navigate(`#${refTeamMembers.slug}`)

      return (
        <ModalUser
          name={name}
          position={position}
          largePhoto={largePhoto}
          desc={desc}
          faq={faq}
          social={social}
          onClose={() => {
            changeUrlCLose()
            setIsMemberModal(false)
          }}
        />
      )
    }
    return null
  }

  const changeUrlCLose = () => {
    if (typeof window !== "undefined") {
      navigate(window.location.pathname)
    }
  }

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
              onClick={() => {setIsMemberModal(true)}}
            >{name}</div>
            <div className="review-position">{position}</div>
          </div>
        </div>
      </div>
      <ReviewSlider slides={reviewSlider} />
      <Modal />
    </div>
  )
}

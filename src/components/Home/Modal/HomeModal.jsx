import React, { useEffect, useRef } from "react"
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock"
import { Link } from 'gatsby'

import { Image } from "../../Image"

export const HomeModal = ({ modal, onClose }) => {
  const homeOverlay = useRef(null)
  const homeModal = useRef(null)
  const {
    image,
    message: { message },
    refCompany: {
      logoBlack
    },
    descCompany: { descCompany },
    titleLink,
    link
  } = modal

  useEffect(() => {
    disableBodyScroll(homeModal.current, {
      reserveScrollBarGap: true
    })
    return () => {
      enableBodyScroll(homeModal.current)
    }
  })

  const closeHandler = () => {
    homeOverlay.current.classList.remove("show")
    homeModal.current.classList.remove("show")
    setTimeout(() => {
      onClose()
    }, 500)
  }

  return (
    <div className="home-modal">
      {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
      <div
        className="home-modal__overlay show"
        ref={homeOverlay}
        onClick={closeHandler}
      />
      <div className={`home-modal__wrapper show`} ref={homeModal}>
        {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
        <div
          onClick={closeHandler}
          style={{ zIndex: 1000 }}
          className="home-modal__close"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M1 1L22.7616 22.7358" stroke="#242528" strokeWidth="2" />
            <path
              d="M22.749 1L0.987395 22.7358"
              stroke="#242528"
              strokeWidth="2"
            />
          </svg>
        </div>
        <div className="home-modal__inside">
          <Image className="img home-modal__image" image={image} />
          <div className="home-modal__content">
            <h2 className="home-modal__title" dangerouslySetInnerHTML={{
              __html: message
            }} />
            <img
              className="home-modal__logo"
              src={logoBlack?.file.src}
              alt={logoBlack.alt}
            />
            <p dangerouslySetInnerHTML={{
              __html: descCompany
            }}/>
            {(/^((http[s]?|ftp):\/)/i.test(link)) ? (
              <a href={link} className="home-modal__link">{titleLink}</a>
            ) : (
              <Link to={link} className="home-modal__link">{titleLink}</Link>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

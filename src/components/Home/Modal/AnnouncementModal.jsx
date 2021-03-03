import React, { useEffect, useRef } from "react"
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock"
import { Link } from "gatsby"

export const AnnouncementModal = ({ announcementModal, onClose }) => {
  const annOverlay = useRef(null)
  const annModal = useRef(null)
  const {
    imageDesktop,
    imageMobile,
    title,
    titleLinkApply,
    urlLinkApply,
    description: { description },
    titleLinkReadMore,
    urlLinkReadMore,
  } = announcementModal

  useEffect(() => {
    disableBodyScroll(annModal.current, {
      reserveScrollBarGap: true,
    })
    return () => {
      enableBodyScroll(annModal.current)
    }
  })

  const closeHandler = () => {
    annOverlay.current.classList.remove("show")
    annModal.current.classList.remove("show")
    setTimeout(() => {
      onClose()
    }, 500)
  }

  return (
    <div className="home-modal home-modal--announcement">
      <div
        className="home-modal__overlay show"
        ref={annOverlay}
        onClick={closeHandler}
      />
      <div className={`home-modal__wrapper show`} ref={annModal}>
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
          <div className="home-modal__image">
            <img src={imageDesktop?.file.src} alt={imageDesktop.alt} />
            <img src={imageMobile?.file.src} alt={imageMobile.alt} />
          </div>
          <div className="home-modal__content">
            <div className="home-modal__top">
              <h2 className="home-modal__title">{title}</h2>
              <Link to={urlLinkApply}>
                {titleLinkApply}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  className="icon-arrow-right"
                >
                  <path
                    fill="currentColor"
                    d="M218.101 38.101L198.302 57.9c-4.686 4.686-4.686 12.284 0 16.971L353.432 230H12c-6.627 0-12 5.373-12 12v28c0 6.627 5.373 12 12 12h341.432l-155.13 155.13c-4.686 4.686-4.686 12.284 0 16.971l19.799 19.799c4.686 4.686 12.284 4.686 16.971 0l209.414-209.414c4.686-4.686 4.686-12.284 0-16.971L235.071 38.101c-4.686-4.687-12.284-4.687-16.97 0z"
                  />
                </svg>
              </Link>
            </div>

            <p>
              <span dangerouslySetInnerHTML={{ __html: description }} />
              <a href={urlLinkReadMore} target="_blank">
                {titleLinkReadMore}
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

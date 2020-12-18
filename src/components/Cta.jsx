import React from "react"

export const Cta = ({
  ctaType,
  title,
  openMenu,
  openMenuMobile,
  openContactModal,
  ctaLink,
  ctaDeadline,
}) => (
  <div className={`cta ${ctaType} ${ctaLink ? "cta--link" : ""}`}>
    <div className="container">
      {!!title && <h2 dangerouslySetInnerHTML={{ __html: title }} />}
      <div className="cta-btns">
        {ctaLink ? (
          <div style={{ width: "100%" }}>
            <a
              href={ctaLink.url}
              className="btn btn-red cta-link"
              target="_blank"
              rel="noreferrer"
            >
              {ctaLink.title}
            </a>
            <p className="deadline-notice">{ctaDeadline}</p>
          </div>
        ) : (
          <>
            <button className="btn btn-menu--desktop" onClick={openMenu}>
              Learn more
            </button>
            <button className="btn btn-menu--mobile" onClick={openMenuMobile}>
              Learn more
            </button>
            <button className="btn btn-red" onClick={openContactModal}>
              Get in touch
            </button>
          </>
        )}
      </div>
    </div>
  </div>
)

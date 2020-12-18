import React from "react"

export const Cta = ({
  ctaType, title, openMenu, openMenuMobile, openContactModal
}) => (
  <div className={`cta ${ctaType}`}>
    <div className="container">
      {!!title && <h2 dangerouslySetInnerHTML={{ __html: title }} />}
      <div className="cta-btns">
        <button className="btn btn-menu--desktop" onClick={openMenu}>
          Learn more
        </button>
        <button className="btn btn-menu--mobile" onClick={openMenuMobile}>
          Learn more
        </button>
        <button className="btn btn-red" onClick={openContactModal}>
          Get in touch
        </button>
      </div>
    </div>
  </div>
)

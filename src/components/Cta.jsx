import React, { useState } from 'react'
import { ContactUsModal } from './ContactUsModal'

export const Cta = ({ ctaType, title, openMenu, openMenuMobile }) => {
  const [isOpenModal, setIsOpenModal] = useState(false)

  const handleOpenModal = () => setIsOpenModal(true)

  return (
    <>
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
            <button className="btn btn-red" onClick={handleOpenModal}>
              Get in touch
            </button>
          </div>
        </div>
      </div>
      {isOpenModal && <ContactUsModal onClose={setIsOpenModal} />}
    </>
  )
}

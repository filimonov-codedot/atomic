import React, { useEffect } from 'react'

export const ModalWrapper = ({ children, onClose, modalType }) => {
  useEffect(() => {
    document.body.style.overflowY = 'hidden'
    return () => document.body.style.overflowY = 'scroll'
  })

  return (
    <>
      <div className="overlay show" onClick={onClose} />
      <div className={`modal modal-${modalType} show`}>
        <div
          style={{ zIndex: 1000 }}
          className="modal-close"
          onClick={onClose}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
               xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1L22.7616 22.7358" stroke="#242528" strokeWidth="2" />
            <path d="M22.749 1L0.987395 22.7358" stroke="#242528" strokeWidth="2" />
          </svg>
        </div>

        {children}

      </div>
    </>
  )
}

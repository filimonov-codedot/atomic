import React, { useEffect, useRef } from 'react'

export const ModalWrapper = ({ children, onClose, modalType }) => {
  const overlay = useRef(null)
  const modal = useRef(null)

  useEffect(() => {
    if (typeof document !== `undefined`) {
      document.body.style.width = `${document.body.clientWidth}px`
      document.body.style.overflowY = 'hidden'
      return () => {
        document.body.style.width = ''
        document.body.style.overflowY = 'scroll'
      }
    }
  })

  const closeHandler = () => {
    overlay.current.classList.remove('show')
    modal.current.classList.remove('show')
    setTimeout(() => {
      onClose()
    }, 500)
  }

  return (
    <>
      <div className="overlay show" ref={overlay} onClick={closeHandler} />
      <div className={`modal modal-${modalType} show`} ref={modal}>
        <div
          style={{ zIndex: 1000 }}
          className="modal-close"
          onClick={closeHandler}
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

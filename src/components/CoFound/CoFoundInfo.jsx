import React, { useState } from 'react'
import { ContactUsModal } from '../ContactUsModal'

export function CoFoundInfo ({ topHeader, topButton }) {
  const { title, desc: { text } } = topHeader
  const [isOpenModal, setIsOpenModal] = useState(false)

  return (
    <div className="content co-found">
      <div className="container">
        <div className="title">
          <h2 dangerouslySetInnerHTML={{
            __html: title,
          }}/>
          <p>{text}</p>
          <button
            style={{ cursor: 'pointer', outline: 'none' }}
            onClick={() => setIsOpenModal(true)}
            className="btn btn-large btn-red"
          >
            {topButton}
          </button>
        </div>
      </div>
      {isOpenModal && <ContactUsModal onClose={setIsOpenModal} />}
    </div>
  )
}

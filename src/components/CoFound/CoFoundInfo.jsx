import React, { useContext } from 'react'
import childrenContext from '../childrenContext'

export function CoFoundInfo ({ topHeader, topButton }) {
  const context = useContext(childrenContext)
  const { title, desc: { text } } = topHeader
  return (
    <div className="content co-found">
      <div className="container">
        <div className="title">
          <h2 dangerouslySetInnerHTML={{
            __html: title
          }} />
          <p>{text}</p>
          <button
            style={{ cursor: 'pointer', outline: 'none' }}
            onClick={context.openContactModal}
            className="btn btn-large btn-red"
          >
            {topButton}
          </button>
        </div>
      </div>
    </div>
  )
}

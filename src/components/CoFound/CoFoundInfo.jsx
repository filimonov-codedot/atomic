import React from "react"
// import React, { useContext } from 'react'
// import childrenContext from '../childrenContext'

export function CoFoundInfo({ topHeader, topButton, topButtonUrl, topDeadline }) {
  // const context = useContext(childrenContext)
  const {
    title,
    desc: { text },
  } = topHeader
  return (
    <div className="content co-found">
      <div className="container">
        <div className="title">
          <h2
            dangerouslySetInnerHTML={{
              __html: title,
            }}
          />
          <p>{text}</p>
          {/* <button
            style={{ cursor: 'pointer', outline: 'none' }}
            onClick={context.openContactModal}
            className="btn btn-large btn-red"
          >
            {topButton}
          </button> */}
          <a
            href={topButtonUrl}
            className="btn btn-large btn-red"
            target="_blank"
            rel="noreferrer"
          >
            {topButton}
          </a>
          {topDeadline && <p className="deadline-notice">{topDeadline}</p>}
        </div>
      </div>
    </div>
  )
}

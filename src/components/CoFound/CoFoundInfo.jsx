import React from "react"
// import React, { useContext } from 'react'
// import childrenContext from '../childrenContext'

export function CoFoundInfo({ topHeader, topButton }) {
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
          <p>
            We’re accepting applications to our first ever open call for
            entrepreneurs. We’re looking for people from all walks of life to
            join us in co-founding high-growth companies; no need to pitch us
            with an idea – we want to hear about you.
          </p>
          {/*<p>{text}</p>*/}
          {/*<button*/}
          {/*  style={{ cursor: 'pointer', outline: 'none' }}*/}
          {/*  onClick={context.openContactModal}*/}
          {/*  className="btn btn-large btn-red"*/}
          {/*>*/}
          {/*  {topButton}*/}
          {/*</button>*/}
          <a
            href={`https://jobs.lever.co/atomic/cb7c61d3-3379-4924-a240-7af1b15e35e9/apply`}
            className="btn btn-large btn-red"
            target="_blank"
            rel="noreferrer"
          >
            Apply to Atomic
            {/*{topButton}*/}
          </a>
          {/*<p className="deadline-notice">Q1 deadline January 24</p>*/}
        </div>
      </div>
    </div>
  )
}

import React, { useContext } from "react"
import childrenContext from "../../childrenContext"

export const AboutInfo = ({ aboutHeader }) => {
  const context = useContext(childrenContext)
  return (
    <div className="container">
      <h2
        dangerouslySetInnerHTML={{
          __html: aboutHeader.title,
        }}
      />
      <p>{aboutHeader.desc.text}</p>
      <button onClick={context.openMenu} className="btn btn-large btn-red">
        Build with us
      </button>
    </div>
  )
}

import React from "react"

export function LookingFor({
  lookingHeader: {
    title,
    desc: { text },
  },
  lookingContent,
}) {
  return (
    <div className="looking-for">
      <div className="container">
        <div className="title">
          <h2 dangerouslySetInnerHTML={{ __html: title }} />
          <p dangerouslySetInnerHTML={{ __html: text }} />
        </div>
        <div className="cards">
          {lookingContent?.map(({ text: { text } }, index) => (
            <div
              className="card"
              key={index}
              dangerouslySetInnerHTML={{ __html: text }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

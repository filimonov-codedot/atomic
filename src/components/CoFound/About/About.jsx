import React from 'react'

export const About = ({ aboutHeader, aboutContent }) => {
  const { title, subtitle } = aboutHeader
  return (
    <div className="team team-column">
      <div className="container">
        <div className="title">
          <h3>{subtitle}</h3>
          <h2 dangerouslySetInnerHTML={{ __html: title }} />
        </div>
        <div className="team-wrapper">
          {aboutContent.length && aboutContent.map((item, index) => {
            const {
              title,
              desc: { text },
              icon: { file: { src }, alt }
            } = item
            return (
              <div className="team-item" key={index}>
                <div className="team-photo">
                  <img src={src} alt={alt} />
                </div>
                <h4>{title}</h4>
                <p>{text}</p>
              </div>
            )
          })}
        </div>
      </div>
    </div>

  )
}

import React from "react"

export const About = ({ aboutHeader: { subtitle, title, desc: { text } }, aboutRole }) => (
  <div className="team team-column">
    <div className="container">
      <div className="title">
        <h3>{subtitle}</h3>
        <h2 dangerouslySetInnerHTML={{ __html: title }} />
        <p
          className="team-content"
          dangerouslySetInnerHTML={{ __html: text }}
        />
      </div>
      <div className="roles">
        {aboutRole.length && aboutRole.map(
          ({ title, desc: { text } }, index) => {
          return (
            <div className="role" key={index}>
              <h4 className="role__title">{title}</h4>
              <p className="role__description">{text}</p>
            </div>
          )
        })}
      </div>
{/*
      <div className="team-wrapper">
        {aboutContent.length &&
        aboutContent.map((item, index) => {
          const {
            title,
            desc: { text },
            icon: {
              file: { src },
              alt
            }
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
*/}
    </div>
  </div>
)

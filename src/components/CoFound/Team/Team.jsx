import React, { useState } from 'react'
import { ModalUser } from '../../Team/ModalUser'

export const Team = ({ teamHeader, teamContent }) => {
  const { title, subtitle } = teamHeader
  const [isMemberModal, setIsMemberModal] = useState(false)

  return (
    <div className="team-list">
      <div className="container">
        <div className="title">
          <h3>{subtitle}</h3>
          <h2>{title}</h2>
        </div>
        <div className="team-list-wrapper">
          {teamContent.map(({
            refTeamMember: {
              name,
              desc,
              smallPhoto,
              social,
              faq,
              position,
              largePhoto
            },
            companyName
          }, index) => (
            <React.Fragment key={index}>
              <button
                style={{
                  cursor: 'pointer',
                  outline: 'none',
                  backgroundColor: 'transparent',
                  border: 'none'
                }}
                onClick={() => {
                  setIsMemberModal(true)
                }}
                className="team-list-item"
              >
            <span className="team-list-photo">
            <img src={smallPhoto.file.url} alt={smallPhoto.alt} />
            </span>
                <span className="team-list-name">{name}</span>
                <span className="team-list-position">{position}, {companyName}</span>
              </button>
              {isMemberModal && <ModalUser
                name={name}
                position={position}
                largePhoto={largePhoto}
                desc={desc}
                faq={faq}
                social={social}
                onClose={() => setIsMemberModal(false)} />}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>

  )
}

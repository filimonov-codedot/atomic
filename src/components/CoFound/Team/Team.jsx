import React, { useState } from 'react'
import { ModalUser } from '../../Team/ModalUser'

export const Team = ({ teamHeader, teamContent }) => {
  const { title, subtitle } = teamHeader
  const [memberModal, setMemberModal] = useState(false)

  return (
    <div className="team-list">
      <div className="container">
        <div className="title">
          <h3>{subtitle}</h3>
          <h2>{title}</h2>
        </div>
        <div className="team-list-wrapper">
          {teamContent.map(({
            refTeamMember
          }, index) => {
            const { smallPhoto, name, position } = refTeamMember
            return (
              <React.Fragment key={index}>
                <button
                  style={{
                    cursor: 'pointer',
                    outline: 'none',
                    backgroundColor: 'transparent',
                    border: 'none'
                  }}
                  onClick={() => {
                    setMemberModal(refTeamMember)
                  }}
                  className="team-list-item"
                >
              <span className="team-list-photo">
                <img src={smallPhoto.file.url} alt={smallPhoto.alt} />
              </span>
                  <span className="team-list-name">{name}</span>
                  <span className="team-list-position">{position}</span>
                </button>
              </React.Fragment>
            )
          })}
          {memberModal && <ModalUser
            {...memberModal}
            onClose={() => setMemberModal(false)} />}
        </div>
      </div>
    </div>

  )
}

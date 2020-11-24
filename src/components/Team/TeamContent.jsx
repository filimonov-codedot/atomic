import React, { useEffect, useState } from "react"
import { ModalUser } from './ModalUser'
import { navigate } from "gatsby"

export const TeamContent = ({ content }) => {
  const [curUser, setCurUser] = useState(null)

  useEffect(() => {
    if (typeof window !== "undefined") {
      const hash = window.location.hash
      if (hash) setCurUser(content.find(
        ({ slug }) => slug === hash.slice(1)))
    }
  }, [])

  const Modal = () => {
    if (curUser) {
      navigate(`#${curUser.slug}`)
      return (
        <ModalUser
          {...curUser}
          onClose={() => {
            changeUrlCLose()
            setCurUser(null)
          }}
        />
      )
    }
    return null
  }

  const changeUrlCLose = () => {
    if (typeof window !== "undefined") {
      navigate(window.location.pathname)
    }
  }

  return (
    <div className="team-page-wrapper">
      <Modal />
      {content?.map((item, index) => {
        const {
          smallPhoto: { file: { src }, alt },
          position,
          name
        } = item

        return (
          <div
            key={index}
            className="team-page-item"
            onClick={() => setCurUser(item)}
          >
            <div className="team-page-item-photo">
              <img src={src} alt={alt} />
            </div>
            <h3>{name}<br />{position}</h3>
          </div>
        )
      })}
    </div>
  )
}

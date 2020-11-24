import React, { useEffect, useState } from "react"
import { ModalUser } from './ModalUser'
import { navigate } from "gatsby"
import { CompanyModal } from "../Companies/CompanyModal"

export const TeamContent = ({ content }) => {
  const [curUser, setCurUser] = useState(null)

  useEffect(() => {
    if (typeof window !== "undefined") {
      const paramId = new URLSearchParams(window.location.search).get("id")
      if (paramId !== null)
        setCurUser(content.find(({ id }) => id === paramId))
    }
  }, [])

  const Modal = () => {
    if (curUser) navigate(`?id=${curUser.id}`)

    if (curUser) return (
      <ModalUser
        {...curUser}
        onClose={() => setCurUser(null)}
      />
    )
    return null
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

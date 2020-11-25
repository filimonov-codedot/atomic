import React from "react"
import { Link } from "gatsby"

import { ModalWrapper } from "./ModalWrapper"

export const MenuModal = ({ onClose, navModal }) => (
  <ModalWrapper onClose={() => onClose()} modalType="menu">
    <div className="modal-menu-wrapper">
      <ul>
        {navModal.map(({ title, link, disabled }, index) => {
          if (disabled) return (
            <li key={index} className="coming-soon">
              <a href="#">{title} <span>COMING SOON</span></a>
            </li>
          )

          return (
            <li key={index}>
              <Link to={link}>{title}</Link>
            </li>
          )
        })}
      </ul>
    </div>
  </ModalWrapper>
)

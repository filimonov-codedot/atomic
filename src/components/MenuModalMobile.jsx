import React from "react"
import { Link } from "gatsby"

import { ModalWrapper } from "./ModalWrapper"

export const MenuModalMobile = ({ onClose, navModalMobile }) => (
  <ModalWrapper onClose={() => onClose()} modalType="nav">
    <nav className="modal-nav-wrapper">
      <ul>
        {navModalMobile?.map(({ title, link, disabled }, index) => (
          <li key={index}>
            <Link to={link}>{title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  </ModalWrapper>
)

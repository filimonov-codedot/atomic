import React from 'react'

import { ModalWrapper } from '../ModalWrapper'
import { Image } from "../Image"

export const ModalUser = ({
  name, position, largePhoto, desc, faq, social, onClose
}) => (
  <ModalWrapper onClose={onClose} modalType="user">
    <div className="modal-user-wrapper">
      <div className="modal-user-photo">
        <Image image={largePhoto} />
      </div>
      <div className="modal-user-description">
        <h2>{name}</h2>
        <div className="modal-user-position">{position}</div>
        <div className="modal-user-social">
          {social && social.map(({ icon, link }, index) => (
            <a target="_blank" rel="noreferrer" href={link || ''} key={index}>
              <img width={28} height={28} src={icon.file.src} alt={icon.alt} />
            </a>
          ))}
        </div>
        <p dangerouslySetInnerHTML={{ __html: desc?.text }} />
        {faq?.length && (
          <div className="modal-user-faq">
            {faq.map(({ title, text }, index) => (
              <div key={index}>
                <h4>{title}</h4>
                <p>{text?.text}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  </ModalWrapper>
)

import React from "react"
import { ModalWrapper } from "../ModalWrapper"
import { Image } from "../Image"

export const BlogModal = ({
  title,
  image,
  date,
  fullContent,
  closeHandler,
}) => {
  const { text } = fullContent

  const dateFormat = date => {
    const newDate = date.toDateString().split(" ")
    return `${newDate[1]} ${newDate[2]} ${newDate[3]}`
  }

  return (
    <ModalWrapper onClose={() => closeHandler(false)} modalType="blog">
      <div className="modal-blog-wrapper">
        <div className="modal-blog-photo">
          <Image className="img" image={image} />
        </div>
        <div className="modal-blog-description">
          <h2>{title}</h2>
          <div className="modal-date">
            Published {dateFormat(new Date(date))}
          </div>
          <div dangerouslySetInnerHTML={{ __html: text }} />
        </div>
      </div>
    </ModalWrapper>
  )
}

import React from 'react'
import { Image } from "../Image"

export const BlogItem = (props) => {
  const { title, image, date, shortContent, onClickHandler } = props
  const { text } = shortContent

  const dateFormat = (date) => {
    const newDate = date.toDateString().split(' ')
    return `${newDate[1]} ${newDate[2]} ${newDate[3]}`
  }

  return (
    <div className="article" onClick={() => onClickHandler(props)}>
      <div className="article-img">
        <Image className='img' image={image} />
      </div>
      <div className="article-description">
        <div className="article-date">{dateFormat(new Date(date))}</div>
        <h2>{title}</h2>
        <p>{text}</p>
        <div className="article-more">Read this article</div>
      </div>
    </div>
  )
}

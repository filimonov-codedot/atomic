import React from 'react'

export const BlogItem = (props) => {
  const { title, image, date, shortContent, onClickHandler } = props
  const { file: { src }, alt } = image
  const { text } = shortContent

  const dateFormat = (date) => {
    const newDate = date.toDateString().split(' ')
    return `${newDate[1]} ${newDate[2]} ${newDate[3]}`
  }

  return (
    <div className="article">
      <div className="article-img">
        <img src={src} alt={alt} />
      </div>
      <div className="article-description">
        <div className="article-date">{dateFormat(new Date(date))}</div>
        <h2>{title}</h2>
        <p>{text}</p>
        <div className="article-more" onClick={() => onClickHandler(props)}>Read this article</div>
      </div>
    </div>
  )
}

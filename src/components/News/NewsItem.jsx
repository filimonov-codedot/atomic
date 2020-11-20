import React from 'react'

export const NewsItem = ({ title, image, date, companyName, sourceTitle, sourceLink }) => {
  const { file: { src }, alt } = image
  const { color, name } = companyName

  const dateFormat = (date) => {
    const newDate = date.toDateString().split(' ')
    return `${newDate[1]} ${newDate[2]} ${newDate[3]}`
  }

  return (
    <a href={sourceLink} target="_blank" rel="noreferrer" className="news-item">
      <div className="news-item-img">
        <img src={src} alt={alt} />
      </div>
      <div className="news-item-info">
        <div style={{ color }} className="news-item-type">
          {name}
        </div>
        • <div className="news-item-date">{dateFormat(new Date(date))}</div>
      </div>
      <h2>{title}</h2>
      <span className="news-item-link">
        {sourceTitle}
      </span>
    </a>
  )
}

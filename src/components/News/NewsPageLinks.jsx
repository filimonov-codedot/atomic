import React from 'react'
import { Link } from "gatsby"

export const NewsPageLinks = ({ activeTab }) => {
  const tabs = [
    {
      title: 'News',
      link: '/news'
    },
    {
      title: 'Blog',
      link: '/blog'
    },
  ]
  return (
    <div className="news-page-links">
      <ul>
        {tabs?.map(({ title, link }, index) => {
          return (
            <li key={index} className={`${activeTab === title ? 'current' : ''}`}>
              <Link to={link}><span>{title}</span></Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

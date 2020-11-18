import React from "react"

export const WhyAtomicArticle = ({ article, index }) => {

  return (
    <div className="why-atomic-article">
      <div className="why-atomic-article-number">{index}</div>
      <h4>{article.title}</h4>
      <p>{article.desc.text}</p>
    </div>
  )
}

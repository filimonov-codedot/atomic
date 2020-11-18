import React from "react"
import { WhyAtomicArticle } from "./WhyAtomicArticle"

export const WhyAtomicArticles = ({ whyAtomicContent }) => {
  return (
    <div className="why-atomic-articles">
      {whyAtomicContent ?.map((article, i) => {
        return (
          <WhyAtomicArticle key={i} article={article} index={i + 1} />
        )
      })}
    </div>
  )
}

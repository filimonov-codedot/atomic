import React from "react"
import { WhyAtomicArticle } from "./WhyAtomicArticle"

export const WhyAtomicArticles = ({ whyAtomicContent }) => (
  <div className="why-atomic-articles">
    {whyAtomicContent?.map((article, i) => (
      <WhyAtomicArticle key={i} article={article} index={i + 1} />
    ))}
  </div>
)

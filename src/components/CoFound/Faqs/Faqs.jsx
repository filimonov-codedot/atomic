import React from 'react'
import Collapsible from 'react-collapsible'

export const Faqs = ({ faq }) => {
  if (faq?.length === 0) return null

  const FaqItem = ({ title, content }) => (
    <Collapsible
      trigger={
        <span>
            {title}
          <span className="trigger-icon" />
          </span>
      }
      transitionTime={200}
    >
      <div
        dangerouslySetInnerHTML={{
          __html: content,
        }}
      />
    </Collapsible>
  )

  return (
    <div className="faqs">
      <div className="container">
        <h2 className="title">Frequently Asked Questions</h2>
        {faq?.map(({ title, content: { content } }) => (
          <FaqItem title={title} content={content} />
        ))}
      </div>
    </div>
  )
}

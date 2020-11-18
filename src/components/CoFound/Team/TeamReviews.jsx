import React from 'react'

export const TeamReviews = ({ teamReviews }) => (
  <div className="team-reviews">
    <div className="container">
      <div className="team-reviews-wrapper">
        {teamReviews.map(({ author, text: { text } }, index) => (
          <div className="team-reviews-column" key={index}>
            <p>{text}</p>
            <div className="team-reviews-author">{author}</div>
          </div>
        ))}
      </div>
    </div>
  </div>
)

import React from "react"

export const AboutCarouselItem = ({ slide }) => {
  const { file: { src }, alt } = slide;

  return (
    <div className="carousel-item">
      <div className="carousel-image">
        <img src={src} alt={alt} />
      </div>
    </div>
  )
}

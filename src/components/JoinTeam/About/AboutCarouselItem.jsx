import React from "react"
import { Image } from "../../Image"

export const AboutCarouselItem = ({ slide }) => (
  <div className="carousel-item">
    <div className="carousel-image">
      <Image image={slide} />
    </div>
  </div>
)

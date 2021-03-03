import React from "react"
import { Image } from "../../Image"

export const PhotosLine = ({ photos }) => (
  <div className="photos-line">
    {photos.map((image, i) => (
      <div key={i} className="photo">
        <Image className="img" image={image} />
      </div>
    ))}
  </div>
)

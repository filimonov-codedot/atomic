import React from "react"
import { PhotosLine } from "./PhotosLine"

export const Photos = ({ photos }) => {
  const photosLines = photos.reduce(
    (p, c) => {
      if (p[p.length - 1].length === 15) p.push([])
      p[p.length - 1].push(c)
      return p
    },
    [[]]
  )

  return (
    <div className="photos">
      <div className="photos-wrapper">
        {photosLines.map((photos, i) => (
          <PhotosLine key={i} photos={photos} />
        ))}
      </div>
    </div>
  )
}

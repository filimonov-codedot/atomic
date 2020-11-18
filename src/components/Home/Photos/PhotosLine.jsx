import React from 'react'

export const PhotosLine = ({ photos }) => (
  <div className="photos-line">
    {photos.map(({ file: { src }, alt }, i) => (
      <div key={i} className="photo">
        <img src={src} alt={alt} />
      </div>
    ))}
  </div>
)

import React from "react"

export const AboutSlide = ({ slide, index, activeSlide, onClickHandler }) => {
  return (
    <div className={`about-us-slide ${index === activeSlide ? 'slide-center' : ''}`} onClick={() => onClickHandler()}>
      <div className="about-us-slide-photo">
        <img src={slide.previewImage.file.src} alt="" />
        <div className="about-us-slide-logo">
          <img src={slide.logoWhile.file.src} alt=""/>
        </div>
      </div>
      <div
        className="about-us-slide-description"
        dangerouslySetInnerHTML={{
          __html: slide.desc,
        }}
      />
    </div>
  )
}

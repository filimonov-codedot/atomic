import React, { useRef } from "react"
import Slider from "react-slick"

export const ReviewSlider = ({
  slides, description = null, addClass = "", setActiveCompany
}) => {
  const circle = useRef(null)
  let currentSlider = useRef(null)

  const progressStart = () => {
    if (circle?.current?.style) {
      circle.current.style.transition = "none"
      circle.current.style.strokeDashoffset = 75
      setTimeout(() => {
        circle.current.style.transition = "all 7s linear"
        circle.current.style.strokeDashoffset = 227
      }, 50)
    }
  }

  // const progressPause = () => {
  //   if (circle?.current?.style) {
  //     circle.current.style.transition = 'none'
  //     circle.current.style.strokeDashoffset = 75
  //   }
  // }

  const settings = {
    dots: false,
    arrows: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 7000,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
    onInit: () => {
      progressStart()
    },
    beforeChange: (oldIndex, newIndex) => {
      progressStart()
    },
    infinite: true,
    swipe: false
  }
  return (
    <>
      <div className={`review-slider ${addClass}`}>
        <div className="review-slider-counter">
          <svg width={50} height={50} fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle ref={circle} cx={25} cy={25} r={24} stroke="#fff" strokeWidth={1}
                    fill="transparent" />
          </svg>
          <div className="review-slider-counter-next" onClick={() => currentSlider.slickNext()}>
            <svg width={22} height={18} viewBox="0 0 22 18" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
              <path d="M0 9H20M20 9L12.3404 1M20 9L12.3404 17" stroke="white" strokeWidth={2} />
            </svg>
          </div>
        </div>
        <Slider
          {...settings}
          ref={slider => (currentSlider = slider)}
        >
          {slides?.map((slide, index) => {
            const {
              refCompanies,
              title,
              previewImage,
              logoWhile
            } = slide
            return (
              <div
                className="review-slide"
                key={index}
                onClick={() => setActiveCompany(refCompanies)}
                // onMouseEnter={progressPause}
                // onMouseLeave={progressStart}
              >
                <div className="review-slide-title">{title}</div>
                <img
                  src={previewImage.file.src}
                  alt={previewImage.alt}
                />
                {logoWhile ? (
                  <div className="review-slide-logo">
                    <img
                      src={logoWhile.file.src}
                      alt={logoWhile.alt}
                    />
                  </div>
                ) : ""}
              </div>
            )
          })}
        </Slider>
      </div>
      {description && (
        <div className="review-slider-description">
          <div className="container">
            <p dangerouslySetInnerHTML={{ __html: description }} />
          </div>
        </div>
      )}
    </>
  )
}

import React, { useRef } from "react"
import Slider from "react-slick"
import { Image } from "./Image"

export const ReviewSlider = ({
  slides,
  description = null,
  addClass = "",
  setActiveCompany,
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
    swipe: false,
  }
  return (
    <>
      <div className={`review-slider ${addClass}`}>
        <div className="review-slider-counter">
          <svg
            width={50}
            height={50}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              ref={circle}
              cx={25}
              cy={25}
              r={24}
              stroke="#fff"
              strokeWidth={1}
              fill="transparent"
            />
          </svg>
          {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
          <div
            onClick={() => currentSlider.slickNext()}
            className="review-slider-counter-next"
          >
            <svg
              width={22}
              height={18}
              viewBox="0 0 22 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 9H20M20 9L12.3404 1M20 9L12.3404 17"
                stroke="white"
                strokeWidth={2}
              />
            </svg>
          </div>
        </div>
        <Slider {...settings} ref={slider => (currentSlider = slider)}>
          {slides?.map((slide, index) => {
            const { refCompanies, title, previewImage, logoWhile } = slide

            return (
              <React.Fragment key={index}>
                {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
                <div
                  onClick={() => setActiveCompany(refCompanies)}
                  className="review-slide"
                >
                  <div className="review-slide-title">{title}</div>
                  <Image className="img" image={previewImage} />
                  {logoWhile ? (
                    <div className="review-slide-logo">
                      <img src={logoWhile.file.src} alt={logoWhile.alt} />
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </React.Fragment>
            )
          })}
        </Slider>
      </div>
      {description && (
        <div className="review-slider-description">
          <div className="container">
            {/*<p dangerouslySetInnerHTML={{ __html: description }} />*/}
            <p>
              When you co-found a company with Atomic, you’re immediately
              surrounded by an experienced team. You have co-founders who’ve
              started $1B+ companies, functional teams of experts across legal,
              design, engineering, finance, people ops, and IT, as well as
              access to Atomic’s $250M Fund III.
            </p>
          </div>
        </div>
      )}
    </>
  )
}

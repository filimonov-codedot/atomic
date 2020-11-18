import React, { useState, useRef, useEffect } from 'react'
import Slider from 'react-slick'
import { AboutSlide } from './AboutSlide'
import { CompanyModal } from '../../Companies/CompanyModal'

export const AboutSlider = ({ slides }) => {
  const [isFirstSession, setIsFirstSession] = useState(true)
  const [activeCompany, setActiveCompany] = useState(false)
  const [open, setOpen] = useState(false)
  const [initSlide, setInitSlide] = useState(null)
  const [activeSlide, setActiveSlide] = useState(null)

  useEffect(() => {
    if (isFirstSession) {
      const sliderCount = slides.length
      const slideInit = Math.floor(Math.random() * sliderCount)
      setInitSlide(slideInit)
      setActiveSlide(slideInit)
      setIsFirstSession(false)
    }
  }, [slides])

  const handleClick = (slide) => {
    setActiveCompany(slide)
    setOpen(true)
  }

  if (initSlide !== null) {
    const settings = {
      dots: false,
      arrows: false,
      fade: false,
      autoplay: true,
      autoplaySpeed: 6000,
      speed: 1000,
      slidesToShow: 3,
      slidesToScroll: 1,
      centerMode: true,
      initialSlide: initSlide,
      beforeChange: (oldIndex, newIndex) => {
        setActiveSlide(newIndex)
      },
      centerPadding: '15%',
      swipeToSlide: true,
      focusOnSelect: true,
      infinite: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            centerPadding: '10%'
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerPadding: '25%'
          }
        },
        {
          breakpoint: 560,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerPadding: '32px'
          }
        }
      ]
    }

    return (
      <>
        <div className="about-us-slider">
          <div className="about-us-slider-wrapper">
            <Slider {...settings}>
              {slides && [...slides, ...slides].map((slide, index) => {
                return (
                  <AboutSlide
                    key={index}
                    index={index}
                    activeSlide={activeSlide}
                    slide={slide}
                    onClickHandler={() => handleClick(slide)}
                  />
                )
              })}
            </Slider>
          </div>
        </div>
        {open && activeCompany ? (
          <CompanyModal
            {...activeCompany.refCompanies}
            onClose={() => setOpen(false)} />
        ) : ''}
      </>
    )
  } else {
    return ''
  }

}

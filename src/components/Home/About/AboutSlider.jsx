import React, { useState, useRef, useEffect } from 'react'
import Slider from 'react-slick'
import { AboutSlide } from './AboutSlide'
import { CompanyModal } from '../../Companies/CompanyModal'
import { ModalUser } from "../../Team/ModalUser"

export const AboutSlider = ({ slides }) => {
  const [isFirstSession, setIsFirstSession] = useState(true)

  const [activeCompany, setActiveCompany] = useState(false)
  const [activeMember, setActiveMember] = useState(false)

  const [initSlide, setInitSlide] = useState(null)
  const [activeSlide, setActiveSlide] = useState(null)

  useEffect(() => {
    if (isFirstSession) {
      const sliderCount = slides.length
      const slideInit = Math.floor(Math.random() * 3)
      setInitSlide(slideInit)
      setActiveSlide(slideInit)
      setIsFirstSession(false)
    }
  }, [slides])

  if (initSlide !== null) {
    const settings = {
      dots: false,
      arrows: false,
      fade: false,
      autoplay: true,
      autoplaySpeed: 6000,
      speed: 750,
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
                    onClickCompany={() => setActiveCompany(slide)}
                    onClickMember={(member) => setActiveMember(member)}
                  />
                )
              })}
            </Slider>
          </div>
        </div>
        {activeCompany && activeCompany.refCompanies ? (
          <CompanyModal
            {...activeCompany.refCompanies}
            onClose={() => setActiveCompany(false)} />
        ) : ''}
        {activeMember ? (<ModalUser
          {...activeMember}
          onClose={() => setActiveMember(false)} />) : ''}
      </>
    )
  } else {
    return ''
  }
}

import React from "react"
import Slider from "react-slick"

import { AboutCarouselItem } from "./AboutCarouselItem"

export const AboutCarousel = ({ slides }) => {
  const sliderCount = slides.length - 1
  const settings = {
    dots: false,
    arrows: false,
    fade: false,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    initialSlide: Math.floor(Math.random() * sliderCount),
    centerPadding: "17%",
    swipeToSlide: true,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centerPadding: "10%",
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "30%",
        },
      },
      {
        breakpoint: 560,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "20%",
        },
      },
    ],
  }
  return (
    <div className="carousel">
      <div className="carousel-wrapper">
        <Slider {...settings}>
          {slides.map((slide, index) => (
            <AboutCarouselItem slide={slide} key={index} />
          ))}
        </Slider>
      </div>
    </div>
  )
}

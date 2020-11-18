import React from 'react'

import { AboutInfo } from './AboutInfo'
import { AboutCarousel } from './AboutCarousel'

export const About = ({ header, slides }) => (
  <div className="about-us" id="about-us">
    <AboutInfo header={header} />
    {slides?.length ? <AboutCarousel slides={slides} /> : ''}
  </div>
)

import React, { useState } from "react"
import { AboutInfo } from "./AboutInfo"
import { AboutCounters } from "./AboutCounters"
import { AboutSlider } from "./AboutSlider"

export const About = ({ aboutHeader, aboutSlider, counters }) => {

  return (
    <div className="about-us" id="about-us">
      <AboutInfo aboutHeader={aboutHeader} />
      <AboutSlider slides={aboutSlider} />
      <AboutCounters counters={counters} />
    </div>
  )
}

import React from "react"

import { AboutInfo } from "./AboutInfo"
import { AboutCounters } from "./AboutCounters"
import { AboutSlider } from "./AboutSlider"

export const About = ({
  aboutHeader,
  aboutSlider,
  countersSwitch,
  counters,
  setActiveCompany,
  setActiveMember,
}) => (
  <div className="about-us" id="about-us">
    <AboutInfo aboutHeader={aboutHeader} />
    <AboutSlider
      slides={aboutSlider}
      setActiveCompany={setActiveCompany}
      setActiveMember={setActiveMember}
    />
    {countersSwitch && <AboutCounters counters={counters} />}
  </div>
)

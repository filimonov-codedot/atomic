import React from "react"
import { AboutCounter } from "./AbountCounter"

export const AboutCounters = ({ counters }) => {
  return (
    <div className="container">
      <div className="about-us-counters">
        {counters.map((counter, i) => <AboutCounter counter={counter} key={i} />)}
      </div>
    </div>
  )
}

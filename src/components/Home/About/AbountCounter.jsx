import React, {useState} from "react"
import CountUp from 'react-countup'
import VisibilitySensor from 'react-visibility-sensor'

export const AboutCounter = ({ counter }) => {
  function isFloat(n){
    return Number(n) === n && n % 1 !== 0;
  }
  const [visible, setVisible] = useState(false)

  return (
    <div className="about-us-counter">
      <div className="about-us-counter-title">
        {counter.prefix}
        <span className="counter">
          <CountUp
            duration={2}
            end={counter.title}
            decimals={counter.title && isFloat(counter.title) ? 1 : 0}
            start={visible ? 0 : null}
            useEasing={false}
            useGrouping={true}
            redraw={true}
          >
            {({ countUpRef, start }) => {

              return (
                <VisibilitySensor
                  onChange={(isVisible) => {
                    if (isVisible && !visible) {
                      start()
                      setVisible(true);
                    }
                  }}
                  delayedCall
                >
                  <span ref={countUpRef} />
                </VisibilitySensor>
              )
            }}
          </CountUp>
        </span>
        {counter.suffix}
      </div>
      <p>{counter.text}</p>
    </div>
  )
}

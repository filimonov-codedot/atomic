import React, { useState } from "react"
import { useEffect } from "react"
import Typed from 'typed.js'

export const Hero = React.forwardRef(({ heroTicker, setHeroShowed, hero }) => {
  useEffect(() => {
    new Typed('.hero-ticker span', {
      strings: [
        'build the future',
        'take a leap',
        'solve big problems',
        'build together',
      ],
      typeSpeed: 80,
      backSpeed: 40,
      loop: true,
      backDelay: 3000,
    });
  }, [heroTicker])
  return (
    <div className="hero" ref={hero}>
      <div className="container">
        <div className="hero-logo">
          <svg width="36" height="33" viewBox="0 0 36 33" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M28.5513 32.3665C32.5455 32.3665 35.7834 29.1701 35.7834 25.2271C35.7834 21.2841 32.5455 18.0876 28.5513 18.0876C24.5572 18.0876 21.3193 21.2841 21.3193 25.2271C21.3193 29.1701 24.5572 32.3665 28.5513 32.3665Z"
              fill="#F2571F" />
            <path fillRule="evenodd" clipRule="evenodd"
                  d="M13.8606 16.7143C14.8186 15.0083 19.2142 14.5076 21.1114 13.6175C23.6285 12.5048 25.3567 10.0199 25.3755 7.14563C25.0749 -2.20054 11.5877 -2.46016 10.9114 6.84892C10.7048 9.27819 12.9589 13.5618 11.7755 15.5646C11.5125 15.9911 11.0054 16.5845 9.37111 17.1779C7.5678 17.8455 5.33245 18.1237 3.66063 19.1621C-4.19127 24.3545 2.72141 35.7961 11.0993 31.4197C13.6164 29.9733 14.9501 27.2659 14.6871 24.5584C14.5368 22.4259 12.7523 18.4018 13.8606 16.7143Z"
                  fill="#F2571F" />
          </svg>
        </div>
        <h1>It’s never been a better time to
          <div className="hero-ticker">
            <span />
          </div>
        </h1>
      </div>
      <button className="hero-scroll" onClick={setHeroShowed}>
        <svg width="34" height="19" viewBox="0 0 34 19" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M33 1L17 17L1 0.999999" stroke="#fff" strokeWidth="2" />
        </svg>
      </button>
    </div>
  )
})

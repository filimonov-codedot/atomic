import React from "react"

export const Ticker = ({ tickerDuration, tickerData }) => {
  if (!tickerData || !tickerDuration) return null

  const { duration = 90 } = tickerDuration

  return (
    <div className="ticker-wrapper">
      <div className="ticker-container">
        <ul
          className="ticker ticker-pr-100"
          style={{ animationDuration: `${duration}s` }}
        >
          {tickerData.map((item, index) => {
            if (!item?.text?.text) return null
            const {
              text: { text },
            } = item
            return (
              <li key={index} data-update="item1">
                {text}
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

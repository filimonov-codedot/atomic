import React from 'react'

export const Ticker = ({ tickerData }) => {
  if (!tickerData) return null
  return (
    <div className='ticker-wrapper'>
      <div className='ticker-container'>
        <ul className="ticker ticker-pr-100">
          {tickerData.map((item, index) => {
            if (!(item?.text?.text)) return null
            const { text: { text } } = item
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

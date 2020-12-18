import React from "react"

export function LookingFor({}) {
  const cards = [
    "<b>Track record</b> of starting and building companies, whether it was considered a success or not",
    "<b>Leadership experience</b> building teams, recruiting, strategic thinking",
    "<b>Unrivalled knowledge</b> in an industry you’re passionate about",
    "<b>Super powers</b> in a function like engineering, design, product, business development, sales",
    "<b>Unique perspective</b> into large under-served markets that are ready to be modernized",
  ]
  return (
    <div className="looking-for">
      <div className="container">
        <div className="title">
          <h2
            dangerouslySetInnerHTML={{
              __html: `What are we looking for?`,
            }}
          />
          <p
            dangerouslySetInnerHTML={{
              __html: `No two founders will look or think alike, but there are<br> some general themes we look for:`,
            }}
          />
        </div>
        <div className="cards">
          {cards?.map((item, index) => {
            return (
              <div
                className="card"
                key={index}
                dangerouslySetInnerHTML={{
                  __html: item,
                }}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}

import React from "react"

export function Timeline({}) {
  const points = [
    {
      label: "Applications open",
      date: "Dec 10 2020",
    },
    {
      label: "First round of interviews",
      date: "Jan 25 2021",
    },
    {
      label: "Second round of interviews",
      date: "Feb 1 2021",
    },
    {
      label: "5-10 applicants are selected",
      date: "Feb 22 2021",
    },
    {
      label: "Start date",
      date: "Mar 8 2021",
    },
  ]
  return (
    <div className="timeline">
      <div className="container">
        <div className="title">
          <h2
            dangerouslySetInnerHTML={{
              __html: `Q1 Application Timeline`,
            }}
          />
        </div>
        <div className="points__wrapper">
          <div className="points">
            {points?.map(({ label, date }, index) => {
              return (
                <div
                  className={`point ${index === 0 ? "active" : ""}`}
                  key={index}
                >
                  <span className="label">{label}</span>
                  <span className="date">{date}</span>
                </div>
              )
            })}
          </div>
        </div>
        <div className="points__swipe">
          <span>
            Swipe
            <svg
              width="28"
              height="14"
              viewBox="0 0 28 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1 13L7 7L1 1" stroke="#1a1a1a" strokeLinecap="round" />
              <path
                d="M11 13L17 7L11 1"
                stroke="#1a1a1a"
                strokeLinecap="round"
              />
              <path
                d="M21 13L27 7L21 1"
                stroke="#1a1a1a"
                strokeLinecap="round"
              />
            </svg>
          </span>
        </div>
      </div>
    </div>
  )
}

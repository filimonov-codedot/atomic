import React from "react"

export const AboutInfo = ({ header }) => {
  const {
    title,
    desc: { text },
    buttonText,
  } = header

  const scrollToSection = () => {
    const section = document.getElementById("select-company")
    section &&
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      })
  }
  return (
    <div className="container">
      <div className="title join-team">
        <h2>{title}</h2>
        <p>{text}</p>
        <button
          style={{ cursor: "pointer", outline: "none" }}
          className="btn"
          onClick={() => scrollToSection()}
        >
          {buttonText}
        </button>
      </div>
    </div>
  )
}

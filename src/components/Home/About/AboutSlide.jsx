import React from "react"
import { Image } from "../../Image"

export const AboutSlide = ({
  slide,
  index,
  activeSlide,
  onClickCompany,
  onClickMember
}) => {
  const {
    refTeamMembers,
    role,
    refCompanies:
      {
        name: company
      },
    previewImage,
    logoWhile
  } = slide

  const membersCount = refTeamMembers?.length

  return (
    <div className={`about-us-slide ${index === activeSlide ? "slide-center" : ""}`}>
      {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
      <div className="about-us-slide-photo" onClick={() => onClickCompany()}>
        <Image className='' image={previewImage} />
        <div className="about-us-slide-logo">
          <img src={logoWhile.file.src} alt="" />
        </div>
      </div>

      <div className="about-us-slide-description">
        {refTeamMembers?.map((member, index) => (
          <span className="about-us-slide-names" key={index}>
            {(index > 0 && membersCount > 2 && index !== (membersCount - 1)) ?
              ", " : index > 0 ? " and " : ""}
            {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
            <b
              className="about-us-slide-name"
              onClick={() => onClickMember(member)}
            >
              {member.name}
            </b>
            </span>
        ))}
        <span className="about-us-slide-position">
          <span dangerouslySetInnerHTML={{
            __html: role
          }} />
          <span>
            {` of `}
            {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
            <b
              className="about-us-slide-company"
              onClick={() => onClickCompany()}
            >
              {company}
            </b>
          </span>
        </span>
      </div>
    </div>
  )
}

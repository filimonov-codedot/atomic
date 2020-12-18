import React from "react"

export const About = ({ aboutHeader: { title, subtitle }, aboutContent }) => (
  <div className="team team-column">
    <div className="container">
      <div className="title">
        {/*<h3>{subtitle}</h3>*/}
        <h3>About the program</h3>
        <h2 dangerouslySetInnerHTML={{ __html: title }} />
        <p
          className="team-content"
          dangerouslySetInnerHTML={{
            __html: `For 3-9 months, you’ll be regularly working directly with our 
            general partners and extended team to co-found a company. At the end of the program, 
            if we mutually find an idea we’re all excited about, we will invest up to $250,000 
            initially to get started, with the potential for substantially 
            more when company milestones are met.`,
          }}
        />
      </div>
      <div className="roles">
        <div className="role">
          <h4 className="role__title">Founder-in-Residence</h4>
          <p className="role__description">
            Typically a serial entrepreneur or senior executive, who we partner
            with to explore a series of ideas within a specific space. We narrow
            down our idea maze, pick one, and the FIR leads in building and
            launching it.
          </p>
        </div>
        <div className="role">
          <h4 className="role__title">Launcher</h4>
          <p className="role__description">
            Oftentimes we’ll start with a burning idea, which we internally
            research and validate, then partner with a Launcher to bring the
            idea to life and gain initial traction. Launchers then move on to
            the next idea, or stay onboard.
          </p>
        </div>
        <div className="role">
          <h4 className="role__title">Other Roles</h4>
          <p className="role__description">
            There’s a variety of opportunities across the Atomic portfolio for
            entrepreneurial-minded people from all walks of life. We encourage
            you to apply, and together we can find the perfect fit for your
            skill set.
          </p>
        </div>
      </div>
      {/*<div className="team-wrapper">*/}
      {/*  {aboutContent.length &&*/}
      {/*    aboutContent.map((item, index) => {*/}
      {/*      const {*/}
      {/*        title,*/}
      {/*        desc: { text },*/}
      {/*        icon: {*/}
      {/*          file: { src },*/}
      {/*          alt,*/}
      {/*        },*/}
      {/*      } = item*/}
      {/*      return (*/}
      {/*        <div className="team-item" key={index}>*/}
      {/*          <div className="team-photo">*/}
      {/*            <img src={src} alt={alt} />*/}
      {/*          </div>*/}
      {/*          <h4>{title}</h4>*/}
      {/*          <p>{text}</p>*/}
      {/*        </div>*/}
      {/*      )*/}
      {/*    })}*/}
      {/*</div>*/}
    </div>
  </div>
)

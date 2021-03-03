import React from "react"
import Img from "gatsby-image"

export const Image = ({ image, className = "img", ...props }) => {
  const { fluid, alt } = image

  return <Img fluid={fluid} alt={alt} className={className} {...props} />
}

import React from "react"
import * as styles from "../styles/TestimonialBox.module.css"
import { StaticImage } from "gatsby-plugin-image"

const TestimonialBox = props => {
  return (
    <div className={`${styles.testimonialBox} [ box ] [ stack ]`}>
      {/* <p className="[ text-gray ]">{props.logo}</p> */}
      {/* {props.logo ? ( */}
      <StaticImage
        src={"../images/testimonials/" + props.logo}
        placeholder="blurred"
        alt="logo"
        objectFit="contain"
      ></StaticImage>
      {/* ) : (
        ""
      )} */}
      <p>{props.content}</p>
      <p className="text-bold">{props.name + ", " + props.position}</p>
      <p className="[ text-gray ]">{props.title}</p>
    </div>
  )
}

export default TestimonialBox

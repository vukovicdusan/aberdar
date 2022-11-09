import React from "react"
import * as styles from "../styles/TestimonialBox.module.css"

const TestimonialBox = props => {
  return (
    <div className={`${styles.testimonialBox} [ box ] [ stack ]`}>
      <p className="[ text-gray ]">{props.initials}</p>
      <p>{props.content}</p>
      <p className="text-bold">{props.name + ", " + props.position}</p>
      <p className="[ text-gray ]">{props.title}</p>
    </div>
  )
}

export default TestimonialBox

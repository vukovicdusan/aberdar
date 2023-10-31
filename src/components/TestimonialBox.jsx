import React from "react"
import * as styles from "../styles/TestimonialBox.module.css"
import { getImage } from "gatsby-plugin-image"
import { GatsbyImage } from "gatsby-plugin-image"

const TestimonialBox = props => {
  const nodes = props.imgData.allFile.nodes

  const setImageHandler = imgName => {
    let logo = imgName.split(".")
    let image = nodes.filter(node => node.name === logo[0])

    return image[0]
  }

  return (
    <div className={`${styles.testimonialBox} [ box ] [ stack ]`}>
      {props.logo ? (
        <GatsbyImage
          className={styles.testimonialLogo}
          image={getImage(setImageHandler(props.logo))}
          placeholder="blurred"
          alt="logo"
          objectFit="contain"
        ></GatsbyImage>
      ) : (
        ""
      )}
      <p>{props.content}</p>
      <p className="text-bold">{props.name + ", " + props.position}</p>
      <p className="[ text-gray ]">{props.title}</p>
    </div>
  )
}

export default TestimonialBox

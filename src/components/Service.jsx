import React from "react"
import * as styles from "../styles/Service.module.css"

const Service = props => {
  return (
    <div className="[ box ] [ transparent ] [ stack ]">
      <p className={styles.serviceTitle}>{props.service.title}</p>
      <p>-{props.service.content}</p>
    </div>
  )
}

export default Service

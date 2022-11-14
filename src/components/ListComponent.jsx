import React from "react"
import * as styles from "../styles/ListComponent.module.css"

const ListComponent = props => {
  const item = props.items.map((item, index) => <li key={index}>-{item}</li>)
  return <ul className={`${styles.list} [ stack ] [ text-bold ]`}>{item}</ul>
}

export default ListComponent

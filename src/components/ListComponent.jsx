import React from "react"
import * as styles from "../styles/ListComponent.module.css"

const ListComponent = props => {
  let index = 1
  const item = props.items.map(item => <li key={index++}>-{item}</li>)
  return <ul className={`${styles.list} [ stack ] [ text-bold ]`}>{item}</ul>
}

export default ListComponent

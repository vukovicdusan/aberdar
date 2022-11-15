import React from "react"
import * as styles from "../styles/Header.module.css"
import Wrapper from "./layout/Wrapper"
import { GatsbyImage } from "gatsby-plugin-image"

const Header = props => {
  return (
    <header>
      <Wrapper>
        <div className={`${styles.headerWrap} [ wrap ]`}>
          <div>
            <GatsbyImage
              className="logo"
              image={props.imgData}
              alt="logo"
            ></GatsbyImage>
          </div>
          <nav>
            <ul className="wrap">
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#process">Process</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </Wrapper>
    </header>
  )
}

export default Header

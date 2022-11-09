import React from "react"
import * as styles from "../styles/Header.module.css"
import Wrapper from "./layout/Wrapper"
import { StaticImage } from "gatsby-plugin-image"

const Header = () => {
  return (
    <header>
      <Wrapper>
        <div className={`${styles.headerWrap} [ wrap ]`}>
          <div>
            <StaticImage
              src="../images/logo-black.png"
              width={45}
              placeholder="blurred"
              layout="constrained"
              alt="logo"
            ></StaticImage>
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

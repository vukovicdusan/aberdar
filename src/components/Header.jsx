import React from "react"
import * as styles from "../styles/Header.module.css"
import Wrapper from "./layout/Wrapper"
import { GatsbyImage } from "gatsby-plugin-image"

const Header = props => {
  const scrollToElement = elementId => {
    const targetElement = document.getElementById(elementId)

    if (targetElement) {
      const offsetTop = targetElement.offsetTop
      window.scrollTo({
        top: offsetTop - 50,
        behavior: "smooth",
      })
      console.log(offsetTop)
    }
  }
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
                <button
                  className="btn-link"
                  onClick={() => scrollToElement("services")}
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  className="btn-link"
                  onClick={() => scrollToElement("process")}
                >
                  Process
                </button>
              </li>
              <li>
                <button
                  className="btn-link"
                  onClick={() => scrollToElement("about")}
                >
                  About
                </button>
              </li>
              <li>
                <button
                  className="btn-link"
                  onClick={() => scrollToElement("contact")}
                >
                  Contact
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </Wrapper>
    </header>
  )
}

export default Header

import React from "react"
import Region from "./layout/Region"
import Wrapper from "./layout/Wrapper"
import * as styles from "../styles/Footer.module.css"
import { StaticImage } from "gatsby-plugin-image"
import mail from "../../static/images/mail.svg"
import linkedin from "../../static/images/linkedin.svg"
import skype from "../../static/images/skype.svg"

const Footer = () => {
  return (
    <footer>
      <Wrapper>
        <Region>
          <div>
            <nav>
              <ul className="stack">
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
            <div className={`${styles.footerBottom} [ mr-bs-4 ] [ wrap ]`}>
              <StaticImage
                src="../images/logo-black.png"
                width={45}
                placeholder="blurred"
                layout="constrained"
                alt="logo"
              ></StaticImage>
              <div>Terms of Use/Privacy Policy</div>
              <div>
                <ul className="wrap">
                  <li>
                    <a href="www.google.com">
                      <img src={mail} alt="mail" />
                    </a>
                  </li>
                  <li>
                    <a href="www.google.com">
                      <img src={linkedin} alt="linkedin" />
                    </a>
                  </li>
                  <li>
                    <a href="www.google.com">
                      <img src={skype} alt="skype" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Region>
      </Wrapper>
    </footer>
  )
}

export default Footer

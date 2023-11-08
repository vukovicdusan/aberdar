import React from "react"
import Region from "./layout/Region"
import Wrapper from "./layout/Wrapper"
import * as styles from "../styles/Footer.module.css"
import { GatsbyImage } from "gatsby-plugin-image"

const Footer = props => {
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
              <GatsbyImage
                className="logo"
                image={props.imgData}
                alt="logo"
              ></GatsbyImage>
              <div>Terms of Use/Privacy Policy</div>
              <div>
                <ul className="wrap">
                  <li>
                    <a
                      rel="noreferrer"
                      target="_blank"
                      href="https://www.upwork.com/freelancers/milicvladimir"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <rect width="512" height="512" rx="15%" />
                        <path
                          fill="var(--text-secondary)"
                          d="M357.2 296.9c-17 0-33-7.2-47.4-18.9l3.5-16.6.1-.6c3.2-17.6 13.1-47.2 43.8-47.2 23 0 41.7 18.7 41.7 41.7s-18.7 41.6-41.7 41.6zm0-125.5c-39.2 0-69.5 25.4-81.9 67.3-18.8-28.3-33.1-62.2-41.4-90.8h-42.2v109.7c0 21.7-17.6 39.3-39.3 39.3s-39.3-17.6-39.3-39.3V147.8H71v109.7c0 44.9 36.5 81.8 81.4 81.8s81.4-36.9 81.4-81.8v-18.4c8.2 17.1 18.2 34.4 30.4 49.6l-25.8 121.4h43.1l18.7-88c16.4 10.5 35.2 17.1 56.8 17.1 46.2 0 83.8-37.8 83.8-84.1.1-46.1-37.4-83.7-83.6-83.7"
                        />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a
                      rel="noreferrer"
                      target="_blank"
                      href="mailto:vladimirdmilic@gmail.com"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z" />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a
                      rel="noreferrer"
                      target="_blank"
                      href="https://www.linkedin.com/in/vladimirmilic/"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
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
